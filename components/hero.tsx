export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div>
            <p className="text-accent text-sm font-medium mb-2">Welcome</p>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground text-balance leading-tight">
              Creative Video Editing for Reels & YouTube
            </h1>
          </div>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            I'm Vignesh, an aspiring video editor passionate about creating engaging Reels and YouTube content. I'm building my skills with DaVinci Resolve, CapCut, and mobile editing tools on both PC and mobile platforms. I'm eager to contribute, learn, and grow with a team that values creativity and quality content.
          </p>
          <div className="flex gap-4 pt-4">
            <a
              href="#portfolio"
              className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
        <div className="relative h-96 md:h-full min-h-96 rounded-xl overflow-hidden bg-muted">
          <img src="/video-editor-working-with-professional-equipment.jpg" alt="Vignesh Video Editing" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  )
}
