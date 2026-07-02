import { NextResponse } from "next/server";
import {
  getFileMetadataFromDrive,
  getFileStreamFromDrive,
  isDriveConfigured,
} from "@/lib/google-drive";
import { Readable } from "stream";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ fileId: string }> },
) {
  const { fileId } = await params;

  if (!isDriveConfigured()) {
    return NextResponse.json({ error: "Image service unavailable" }, { status: 503 });
  }

  try {
    const [metadata, stream] = await Promise.all([
      getFileMetadataFromDrive(fileId),
      getFileStreamFromDrive(fileId),
    ]);

    const webStream = Readable.toWeb(stream) as ReadableStream;

    return new NextResponse(webStream, {
      headers: {
        "Content-Type": metadata.mimeType,
        "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
      },
    });
  } catch {
    return NextResponse.json({ error: "Image not found" }, { status: 404 });
  }
}
