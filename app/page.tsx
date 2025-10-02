"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { getYouTubeID, getThumbnailURLs } from "@/utils/youtube";

export default function Home() {
  const [input, setInput] = useState("");
  const [thumbnails, setThumbnails] = useState<{ label: string; url: string }[] | null>(null);
  const [selectedRes, setSelectedRes] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = getYouTubeID(input.trim());
    if (!id) return alert("Invalid YouTube URL or ID");

    const urls = getThumbnailURLs(id); 
    const formatted = Object.entries(urls)
      .filter(([_, v]) => Boolean(v))
      .map(([key, url]) => ({
        label:
          key === "default"
            ? "120x90 (Default)"
            : key === "mq"
            ? "320x180 (Medium)"
            : key === "hq"
            ? "480x360 (High)"
            : key === "sd"
            ? "640x480 (SD)"
            : key === "maxres"
            ? "1280x720 (HD)"
            : key,
        url: url as string,
      }));

    if (formatted.length === 0) return alert("No thumbnails found for this video.");

    setThumbnails(formatted);
    setSelectedRes(formatted[0].url); // default to first available
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      {/* Header */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold mb-6 text-center"
      >
        🎬 YouTube Thumbnail Downloader
      </motion.h1>

      {/* Input Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row gap-3 w-full max-w-xl mb-8"
      >
        <input
          type="text"
          placeholder="Enter YouTube URL or ID"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-3 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-6 py-3 transition"
        >
          Get Thumbnails
        </motion.button>
      </form>

      {/* Ads Placeholder (Top) */}
      <div className="w-full max-w-xl h-24 bg-gray-800 flex items-center justify-center rounded-lg mb-6">
        <span className="text-gray-400">Ad Placeholder (Top Banner)</span>
      </div>

      {/* Single Preview with Resolution Selector */}
      {thumbnails && (
        <div className="flex flex-col items-center gap-6 w-full max-w-2xl">
          {/* Preview Image */}
          {selectedRes && (
            <motion.img
              key={selectedRes} // re-renders when resolution changes
              src={selectedRes}
              alt="thumbnail preview"
              className="rounded-xl shadow-lg max-w-full"
              height={300}
              width={300}
              whileHover={{ scale: 1.05 }}
            />
          )}

          {/* Dropdown */}
          <select
            className="px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedRes}
            onChange={(e) => setSelectedRes(e.target.value)}
          >
            {thumbnails.map((thumb, idx) => (
              <option key={idx} value={thumb.url}>
                {thumb.label}
              </option>
            ))}
          </select>

          {/* Download Button */}
          <motion.a
            href={`/api/download?url=${encodeURIComponent(selectedRes)}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition text-center"
          >
            Download
          </motion.a>
        </div>
      )}

      {/* Footer */}
      <footer className="w-full mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-center items-center gap-6 text-gray-400 text-sm">
        <a href="/privacy-policy" className="hover:text-white transition">
          Privacy Policy
        </a>
        <a href="/terms" className="hover:text-white transition">
          Terms of Service
        </a>
        <a href="/about" className="hover:text-white transition">
          About / Contact
        </a>
      </footer>
    </div>
  );
}
