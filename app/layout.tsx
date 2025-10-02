import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "YouTube Thumbnail Downloader",
  description: "Easily download YouTube video thumbnails in HD, Full HD, and Max Resolution.",
  openGraph: {
    title: "YouTube Thumbnail Downloader",
    description: "Easily download YouTube video thumbnails in HD, Full HD, and Max Resolution.",
    url: "https://yt-thumb-downloader-ai.vercel.app/",
    siteName: "YouTube Thumbnail Downloader",
    images: [
      {
        url: "https://yourdomain.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "YouTube Thumbnail Downloader",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YouTube Thumbnail Downloader",
    description: "Easily download YouTube video thumbnails in HD, Full HD, and Max Resolution.",
    images: ["https://yourdomain.com/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        
        {/* Google Site Verification */}
      <meta name="google-site-verification" content="c6Bk0hF3hW84bAxm2UpaJQOqYAb7HoQweNoQaV18cCQ" />
      <meta name="google-adsense-account" content="ca-pub-6044278578685946" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-white`}
      >
        {children}

        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KBWMBDQN1H"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KBWMBDQN1H');
          `}
        </Script>
      </body>
    </html>
  );
}
