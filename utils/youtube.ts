// utils/youtube.ts
export function getYouTubeID(urlOrID: string): string | null {
  // If it's already a valid ID
  if (/^[a-zA-Z0-9_-]{11}$/.test(urlOrID)) return urlOrID;

  try {
    const url = new URL(urlOrID);
    // For standard YouTube URLs
    if (url.hostname.includes('youtube.com')) {
      return url.searchParams.get('v');
    }
    console.log(url)
    console.log(url.hostname)

    // For youtu.be short URLs
    if (url.hostname === 'youtu.be') {
      return url.pathname.slice(1);
    }
  } catch (err) {
    // Not a URL, maybe plain ID
    return null;
  }

  return null;
}

export function getThumbnailURLs(videoID: string) {
  return {
    maxres: `https://img.youtube.com/vi/${videoID}/maxresdefault.jpg`,
    hq: `https://img.youtube.com/vi/${videoID}/hqdefault.jpg`,
    mq: `https://img.youtube.com/vi/${videoID}/mqdefault.jpg`,
    sd: `https://img.youtube.com/vi/${videoID}/sddefault.jpg`,
    default: `https://img.youtube.com/vi/${videoID}/default.jpg`,
  };
}

