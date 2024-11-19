import { NextResponse } from "next/server";
import ytdl from "ytdl-core";

export async function POST(req: Request) {
  try {
    const { url, format } = await req.json();

    if (!url || !format) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    if (!ytdl.validateURL(url)) {
      return new NextResponse("Invalid YouTube URL", { status: 400 });
    }

    const info = await ytdl.getInfo(url);
    const videoTitle = info.videoDetails.title.replace(/[^\w\s]/gi, '');
    const fileName = `${videoTitle}-${format}.${format === "audio" ? "mp3" : "mp4"}`;

    let stream;
    if (format === "audio") {
      stream = ytdl(url, {
        quality: "highestaudio",
        filter: "audioonly",
      });
    } else {
      stream = ytdl(url, {
        quality: format,
        filter: "videoandaudio",
      });
    }

    const response = new NextResponse(stream as any);
    response.headers.set(
      "Content-Disposition",
      `attachment; filename="${fileName}"`
    );
    response.headers.set(
      "Content-Type",
      format === "audio" ? "audio/mpeg" : "video/mp4"
    );

    return response;
  } catch (error) {
    console.error("Download error:", error);
    return new NextResponse(
      error instanceof Error ? error.message : "Internal server error", 
      { status: 500 }
    );
  }
}