export function About() {
  return (
    <section id="about" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative h-96 rounded-xl overflow-hidden bg-muted">
            <img src="/professional-video-editor.png" alt="Vignesh" className="w-full h-full object-cover" />
          </div>

          <div className="order-1 md:order-2 space-y-6">
            <div>
              <p className="text-accent text-sm font-medium mb-2">About Me</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
                Building My Skills in Video Editing
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I've recently completed a video editing course focused on middle-class editing techniques, which has given me a solid foundation in editing fundamentals. While I don't have professional company experience yet, I'm passionate about learning and eager to apply my skills to real-world projects.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm actively working on improving my editing skills through practice with DaVinci Resolve and CapCut on both PC and mobile platforms. I'm excited about the opportunity to contribute to a team, learn from experienced editors, and grow my expertise in creating engaging content for Reels and YouTube.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
