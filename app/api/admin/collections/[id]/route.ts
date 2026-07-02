import { NextResponse } from "next/server";
import { requireAdminSession } from "@/lib/auth";
import { deleteFileFromDrive, isDriveConfigured } from "@/lib/google-drive";
import { prisma } from "@/lib/prisma";

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const session = await requireAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  try {
    const item = await prisma.collectionItem.findUnique({ where: { id } });
    if (!item) {
      return NextResponse.json({ error: "Item not found" }, { status: 404 });
    }

    await prisma.collectionItem.delete({ where: { id } });

    if (item.imageFileId && isDriveConfigured()) {
      try {
        await deleteFileFromDrive(item.imageFileId);
      } catch {
        // Item deleted from DB; Drive cleanup failure is non-fatal
      }
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to delete item" }, { status: 500 });
  }
}
