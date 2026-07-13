import { NextResponse } from "next/server";
import { requireAdminSession } from "@/lib/auth";
import { isDriveConfigured, uploadFileToDrive } from "@/lib/google-drive";
import { isSupabaseConfigured, uploadFileToSupabase } from "@/lib/supabase-storage";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const session = await requireAdminSession();
  console.log("[upload] request received", {
    method: request.method,
    url: request.url,
    driveConfigured: isDriveConfigured(),
    supabaseConfigured: isSupabaseConfigured(),
  });

  if (!session) {
    console.error("[upload] unauthorized request");
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!isDriveConfigured() && !isSupabaseConfigured()) {
    console.error("[upload] no storage backend configured");
    return NextResponse.json(
      { error: "No image storage backend is configured. Set either Google Drive or Supabase env vars." },
      { status: 503 },
    );
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file");

    console.log("[upload] parsed form data", { fileType: file instanceof File ? file.type : null });

    if (!(file instanceof File)) {
      console.error("[upload] invalid file payload", { file });
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    if (!file.type.startsWith("image/")) {
      console.error("[upload] unsupported file type", { fileType: file.type });
      return NextResponse.json({ error: "Only image files are allowed" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const result = isSupabaseConfigured()
      ? await uploadFileToSupabase(buffer, file.name, file.type)
      : await uploadFileToDrive(buffer, file.name, file.type);

    console.log("[upload] upload success", { result });
    return NextResponse.json(result);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to upload file";
    console.error("[upload] exception", {
      error: error instanceof Error ? error.message : error,
      stack: error instanceof Error ? error.stack : undefined,
    });
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
