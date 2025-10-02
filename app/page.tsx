"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { getYouTubeID, getThumbnailURLs } from "@/utils/youtube";

export default function Home() {
  const [input, setInput] = useState("");
  const [thumbnails, setThumbnails] = useState<string[] | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = getYouTubeID(input.trim());
    if (!id) return alert("Invalid YouTube URL or ID");

    const urls = Object.values(getThumbnailURLs(id)).filter(Boolean);
    if (urls.length === 0) return alert("No thumbnails found for this video.");

    setThumbnails(urls);
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

      {/* Thumbnails Grid */}
      {thumbnails && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
          {thumbnails.map((url, idx) => (
            <div key={url} className="flex flex-col items-center">
              <motion.div
                className="flex flex-col items-center bg-gray-800 p-4 rounded-xl shadow-lg w-full"
                whileHover={{ scale: 1.03, boxShadow: "0px 10px 20px rgba(0,0,0,0.4)" }}
              >
                <motion.img
                  src={url}
                  alt="thumbnail"
                  className="rounded-lg mb-3 w-full object-cover"
                  whileHover={{ scale: 1.05 }}
                />
                <motion.a
                  href={`/api/download?url=${encodeURIComponent(url)}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition"
                >
                  Download
                </motion.a>
              </motion.div>

              {/* Inline Ads after 2nd thumbnail */}
              {idx === 1 && (
                <div className="h-32 bg-gray-800 flex items-center justify-center rounded-xl mt-4 w-full">
                  <span className="text-gray-400">Ad Placeholder (Inline)</span>
                </div>
              )}
            </div>
          ))}
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
