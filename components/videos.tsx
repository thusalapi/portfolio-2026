import Image from "next/image";
import { ArrowUpRight, Play } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import {
  getYouTubeVideos,
  YOUTUBE_CHANNEL_URL,
  type YouTubeVideo,
} from "@/lib/youtube";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

function VideoCard({
  video,
  featured,
}: {
  video: YouTubeVideo;
  featured: boolean;
}) {
  return (
    <a
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group grid gap-5 ${
        featured ? "md:col-span-2 md:grid-cols-[3fr_2fr] md:items-center" : ""
      }`}
    >
      <div className="relative aspect-video rounded-lg overflow-hidden border border-border bg-secondary">
        <Image
          src={video.thumbnail}
          alt=""
          fill
          sizes={featured ? "(min-width: 768px) 600px, 100vw" : "(min-width: 768px) 480px, 100vw"}
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/25 transition-colors">
          <span className="w-12 h-12 rounded-full bg-background/90 text-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Play className="w-5 h-5 ml-0.5" fill="currentColor" />
          </span>
        </span>
      </div>

      <div className="space-y-2">
        <p className="font-mono text-xs text-muted-foreground">
          {formatDate(video.published)} · Video
        </p>
        <h3
          className={`font-medium text-foreground group-hover:text-primary transition-colors leading-snug ${
            featured ? "text-lg md:text-2xl" : "text-base md:text-lg"
          }`}
        >
          {video.title}
        </h3>
        <span className="inline-flex items-center gap-1 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
          Watch on YouTube
          <ArrowUpRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </a>
  );
}

export async function Videos() {
  const videos = await getYouTubeVideos();
  // Shorts are left out on purpose; only full-length videos are featured
  const longVideos = videos.filter((video) => !video.isShort).slice(0, 3);

  if (longVideos.length === 0) return null;

  return (
    <section id="videos" className="py-20 md:py-28 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          index="05"
          label="Videos"
          title="Explaining tech on YouTube"
          description="Plain-English explainers on cloud, security, and the systems developers work with every day."
        />

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
          {longVideos.map((video, idx) => (
            <VideoCard
              key={video.id}
              video={video}
              // An odd one out spans the full row instead of leaving a gap
              featured={idx === 0 && longVideos.length % 2 === 1}
            />
          ))}
        </div>

        <a
          href={YOUTUBE_CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors"
        >
          All videos on YouTube
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
