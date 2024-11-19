"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Download, Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function DownloaderForm() {
  const [url, setUrl] = useState("");
  const [format, setFormat] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url || !format) return;

    setLoading(true);
    try {
      const response = await fetch("/api/download", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url, format }),
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      // Get the filename from the Content-Disposition header if available
      const contentDisposition = response.headers.get("Content-Disposition");
      let filename = `video.${format === "audio" ? "mp3" : "mp4"}`;
      if (contentDisposition) {
        const matches = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/.exec(contentDisposition);
        if (matches != null && matches[1]) {
          filename = matches[1].replace(/['"]/g, "");
        }
      }

      const blob = await response.blob();
      // Create a download link
      const downloadUrl = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = downloadUrl;
      a.download = filename;
      // Trigger download using the browser's download manager
      document.body.appendChild(a);
      a.click();
      // Cleanup
      window.URL.revokeObjectURL(downloadUrl);
      document.body.removeChild(a);

      toast({
        title: "Download Started",
        description: "Your file will be saved to your default downloads folder.",
        duration: 5000,
      });

      // Reset form
      setUrl("");
      setFormat("");
    } catch (error) {
      console.error("Download error:", error);
      toast({
        title: "Download Failed",
        description: error instanceof Error ? error.message : "Failed to download video",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col md:flex-row gap-4">
          <Input
            type="url"
            placeholder="Paste YouTube URL here..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1"
            required
          />
          <Select value={format} onValueChange={setFormat} required>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Select format" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1080">1080p</SelectItem>
              <SelectItem value="720">720p</SelectItem>
              <SelectItem value="480">480p</SelectItem>
              <SelectItem value="360">360p</SelectItem>
              <SelectItem value="240">240p</SelectItem>
              <SelectItem value="audio">Audio only</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button
          type="submit"
          disabled={loading || !url || !format}
          className="w-full bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              <Download className="mr-2 h-4 w-4" />
              Download
            </>
          )}
        </Button>
      </form>

      <div className="text-sm text-muted-foreground text-center">
        <p>Downloads will be saved to your browser's default downloads folder</p>
      </div>
    </div>
  );
}