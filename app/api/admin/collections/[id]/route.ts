import { NextResponse } from "next/server";
import { requireAdminSession } from "@/lib/auth";
import { deleteFileFromDrive, isDriveConfigured } from "@/lib/google-drive";
import {
  deleteFileFromSupabase,
  isSupabaseConfigured,
} from "@/lib/supabase-storage";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

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

    if (item.imageFileId && (isDriveConfigured() || isSupabaseConfigured())) {
      try {
        if (isSupabaseConfigured()) {
          await deleteFileFromSupabase(item.imageFileId);
        } else {
          await deleteFileFromDrive(item.imageFileId);
        }
      } catch {
        // Item deleted from DB; storage cleanup failure is non-fatal
      }
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to delete item" }, { status: 500 });
  }
}
