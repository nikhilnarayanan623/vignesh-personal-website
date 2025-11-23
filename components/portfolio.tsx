"use client"

import { useState } from "react"

const videos = [
  {
    id: 1,
    title: "Reels Video Project",
    category: "Reels",
    orientation: "portrait",
    fileId: "1_OggfMYN7rVQ_5XRUI_fBGbLUvr0aVMv",
    thumbnail: "/preview_1_OggfMYN7rVQ_5XRUI_fBGbLUvr0aVMv.mp4",
    description: "Simple Reels edit featuring fast cuts, bold typography, and high-energy pacing",
  },
  {
    id: 2,
    title: "Reels Video",
    category: "Reels",
    orientation: "portrait",
    fileId: "1-fZfiUMTRe2-IL0-vjn2TuAxXeftCC3y",
    thumbnail: "/preview_1-fZfiUMTRe2-IL0-vjn2TuAxXeftCC3y.mp4",
    description: "Simple Reels edit featuring fast cuts, bold typography, and high-energy pacing",
  },
  {
    id: 3,
    title: "Reels Video",
    category: "Reels",
    orientation: "portrait",
    fileId: "1jn4_VYR3dw3SNaguSGkmqOTjFMkhTPWm",
    thumbnail: "/preview_1jn4_VYR3dw3SNaguSGkmqOTjFMkhTPWm.mp4",
    description: "Dynamic Reels edit featuring fast cuts, bold typography, and high-energy pacing",
  },
  {
    id: 4,
    title: "Reels Video",
    category: "Reels",
    orientation: "portrait",
    fileId: "1oO0FHs-IpND-67cw8b6qzVZSICsbGogC",
    thumbnail: "/code_hunters_preview.mp4",
    description: "Dynamic Reels edit featuring fast cuts, bold typography, and high-energy pacing",
  },
  {
    id: 5,
    title: "Reels Video",
    category: "Reels",
    orientation: "portrait",
    fileId: "1CE8ELlJn2ScH8r2E2NipavYiQBMiD15B",
    thumbnail: "/preview_IMG_5186.mp4",
    description: "Creative Reels content featuring dynamic editing, smooth transitions, and engaging visual storytelling",
  },
  {
    id: 6,
    title: "Reels Video Project",
    category: "Reels",
    orientation: "portrait",
    fileId: "1TE87bacWK92Pma_2syoPJYXLB5hU_k1j",
    thumbnail: "/WhatsApp Video 2025-11-09 at 10.23.31 AM (1).mp4",
    description: "Engaging Reels content showcasing creative editing with smooth transitions and dynamic pacing",
  },
  {
    id: 7,
    title: "Reels Content",
    category: "Reels",
    orientation: "portrait",
    fileId: "16tUW-fpn0j85onENQEYkups8XtRwi--w",
    thumbnail: "/preview-9ff93eadd4405ae2403e63c1b652cd_1.mp4",
    description: "Creative Reels content demonstrating editing skills with color grading, text overlays, and visual storytelling",
  },
  {
    id: 8,
    title: "Reels Project",
    category: "Reels",
    orientation: "portrait",
    fileId: "1d53jWT-ZeXfTz2SRkPl4gq8BgjeGw2mI",
    description: "Short-form Reels content featuring dynamic editing, seamless transitions, and engaging visual elements",
  },
  {
    id: 9,
    title: "Reels Video",
    category: "Reels",
    orientation: "portrait",
    fileId: "1KWPCTXKEAR6GsvVK5N8q3CI3d8eKuDlH",
    description: "Creative Reels content with engaging visuals, smooth transitions, and compelling storytelling",
  },
  {
    id: 10,
    title: "Reels Content",
    category: "Reels",
    orientation: "portrait",
    fileId: "1EhUL7GJg2mIqqnXlUdmpbjo-LJlq2llv",
    description: "Short-form Reels content showcasing dynamic editing techniques and engaging visual storytelling",
  },
  {
    id: 11,
    title: "Landscape Video Edit",
    category: "Landscape",
    orientation: "portrait-16-19",
    fileId: "1ZWiKB-7CPUXLt3khJj8_0wpqCmT_-_fQ",
    description: "Landscape format video highlighting cinematic pacing, color grading, and storytelling.",
  },
]

const categories = ["All", "Reels", "Landscape"]

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [playingVideos, setPlayingVideos] = useState<Set<number>>(new Set())

  const filteredVideos = activeCategory === "All" ? videos : videos.filter((video) => video.category === activeCategory)

  const handleVideoPlay = (videoId: number) => {
    setPlayingVideos((prev) => new Set(prev).add(videoId))
  }

  return (
    <section id="portfolio" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-accent text-sm font-medium mb-2">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A selection of my Reels projects demonstrating editing skills, creative transitions, text overlays, and storytelling techniques for short-form content.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activeCategory === category
                  ? "bg-accent text-accent-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video) => {
            const embedUrl = `https://drive.google.com/file/d/${video.fileId}/preview?usp=sharing&rm=minimal`
            const isPlaying = playingVideos.has(video.id)
            const showThumbnail = video.thumbnail && !isPlaying
            const isPortrait1619 = video.orientation === "portrait-16-19"

            return (
              <div
                key={video.id}
                className="rounded-lg overflow-hidden bg-muted shadow-lg"
              >
                <div
                  className={
                    isPortrait1619
                      ? "relative w-full aspect-[16/19] bg-black rounded-t-lg overflow-hidden"
                      : "relative w-full max-w-lg mx-auto aspect-[9/16] max-h-[500px] bg-black rounded-t-lg overflow-hidden"
                  }
                >
                  {showThumbnail ? (
                    <div className="relative w-full h-full cursor-pointer group" onClick={() => handleVideoPlay(video.id)}>
                      <video
                        src={video.thumbnail}
                        className="w-full h-full object-cover"
                        muted
                        loop
                        playsInline
                        autoPlay
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-accent/90 flex items-center justify-center opacity-100 group-hover:opacity-90 transition-opacity">
                          <svg className="w-8 h-8 text-accent-foreground ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <iframe
                      src={embedUrl}
                      allow="autoplay"
                      className="w-full h-full"
                      title={video.title}
                      allowFullScreen
                    />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-foreground mb-2 text-lg">{video.title}</h3>
                  <p className="text-sm text-accent mb-3 font-medium">{video.category}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{video.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
