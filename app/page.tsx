import DownloaderForm from "@/components/DownloaderForm";
import { Download, Video } from "lucide-react";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent mb-4">
          YouTube Video Downloader
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Download your favorite YouTube videos in high quality formats including HD and extract audio with just a few clicks.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <DownloaderForm />
      </div>

      <div className="mt-24 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-pink-500/10 to-transparent p-6 rounded-lg border border-pink-500/20">
          <Video className="w-12 h-12 text-pink-500 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">High Quality Downloads</h2>
          <p className="text-muted-foreground">
            Download videos in various qualities up to 1080p HD. Choose the perfect balance between quality and file size.
          </p>
        </div>
        <div className="bg-gradient-to-br from-blue-500/10 to-transparent p-6 rounded-lg border border-blue-500/20">
          <Download className="w-12 h-12 text-blue-500 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Audio Extraction</h2>
          <p className="text-muted-foreground">
            Extract high-quality audio from any YouTube video. Perfect for music, podcasts, and more.
          </p>
        </div>
      </div>
    </div>
  );
}