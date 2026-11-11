import fallbackVideos from "@/data/youtube-videos.json";

export const YOUTUBE_CHANNEL_ID = "UCMgEAP-bOM7abNn_FPEGNXw";
export const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@thusalapiyarisi";

const FEED_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${YOUTUBE_CHANNEL_ID}`;

export type YouTubeVideo = {
  id: string;
  title: string;
  url: string;
  published: string;
  isShort: boolean;
  thumbnail: string;
};

function decodeEntities(value: string) {
  return value
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
}

function readTag(entry: string, pattern: RegExp) {
  const match = entry.match(pattern);
  return match ? decodeEntities(match[1].trim()) : "";
}

export function parseFeed(xml: string): YouTubeVideo[] {
  const entries = xml.match(/<entry>[\s\S]*?<\/entry>/g) ?? [];

  return entries
    .map((entry) => {
      const id = readTag(entry, /<yt:videoId>([^<]+)<\/yt:videoId>/);
      const url = readTag(entry, /<link rel="alternate" href="([^"]+)"/);
      const isShort = url.includes("/shorts/");

      return {
        id,
        // "#shorts" is only there for YouTube's algorithm, not for readers
        title: readTag(entry, /<title>([^<]*)<\/title>/)
          .replace(/\s*#shorts\b/gi, "")
          .trim(),
        url,
        published: readTag(entry, /<published>([^<]+)<\/published>/),
        isShort,
        // oar2 is the portrait frame for Shorts; hqdefault exists for every video
        thumbnail: `https://i.ytimg.com/vi/${id}/${isShort ? "oar2" : "hqdefault"}.jpg`,
      };
    })
    .filter((video) => video.id && video.url);
}

/**
 * Reads the channel's public RSS feed at build time, so the static site picks
 * up new uploads on every rebuild. Falls back to the committed snapshot in
 * data/youtube-videos.json if YouTube is unreachable.
 */
export async function getYouTubeVideos(): Promise<YouTubeVideo[]> {
  try {
    const res = await fetch(FEED_URL);
    if (!res.ok) throw new Error(`YouTube feed responded ${res.status}`);

    const videos = parseFeed(await res.text());
    if (videos.length === 0) throw new Error("YouTube feed had no videos");

    return videos;
  } catch (error) {
    console.warn("[youtube] Using fallback videos:", error);
    return fallbackVideos;
  }
}
