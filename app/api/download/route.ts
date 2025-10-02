import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = req.url.includes("?") ? new URL(req.url).searchParams.get("url") : null;
  if (!url) return NextResponse.json({ error: "Missing URL" }, { status: 400 });

  const res = await fetch(url);
  const buffer = await res.arrayBuffer();

  return new NextResponse(buffer, {
    headers: {
      "Content-Type": "image/jpeg",
      "Content-Disposition": "attachment; filename=thumbnail.jpg",
    },
  });
}
