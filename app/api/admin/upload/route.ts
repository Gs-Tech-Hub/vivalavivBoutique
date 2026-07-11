import { NextResponse } from "next/server";
import { requireAdminSession } from "@/lib/auth";
import { isDriveConfigured, uploadFileToDrive } from "@/lib/google-drive";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const session = await requireAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!isDriveConfigured()) {
    return NextResponse.json(
      { error: "Google Drive is not configured. Set service account env variables." },
      { status: 503 },
    );
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    if (!file.type.startsWith("image/")) {
      return NextResponse.json({ error: "Only image files are allowed" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const result = await uploadFileToDrive(buffer, file.name, file.type);

    return NextResponse.json(result);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to upload file";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
