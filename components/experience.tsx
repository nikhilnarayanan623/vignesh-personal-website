export function Experience() {
  const skills = [
    { category: "Editing Software", items: ["DaVinci Resolve", "CapCut", "Mobile Editing"] },
    { category: "Editing Skills", items: ["Basic Editing", "Transitions", "Color Correction", "Audio Sync"] },
    { category: "Platforms", items: ["PC Editing", "Mobile Editing", "Reels", "YouTube Content"] },
  ]

  const experience = [
    {
      title: "Video Editing Course",
      company: "Middle-Class Editing Techniques",
      period: "Completed",
      description: "Completed a comprehensive video editing course covering fundamental editing techniques, transitions, color correction, and audio synchronization. Gained practical skills in DaVinci Resolve and CapCut for creating engaging Reels and YouTube content.",
    },
  ]

  return (
    <section id="experience" className="py-20 px-6 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-accent text-sm font-medium mb-2">Skills & Learning</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Skills & Education</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Skills */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category}>
                  <h4 className="text-sm font-semibold text-accent mb-3">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span key={skill} className="px-3 py-1.5 bg-background rounded-full text-sm text-foreground">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education/Training */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Education & Training</h3>
            <div className="space-y-6">
              {experience.map((job, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-accent mt-1" />
                    {index !== experience.length - 1 && <div className="w-0.5 h-16 bg-border my-2" />}
                  </div>
                  <div className="pb-6">
                    <h4 className="font-semibold text-foreground">{job.title}</h4>
                    <p className="text-sm text-accent mb-1">{job.company}</p>
                    <p className="text-xs text-muted-foreground mb-2">{job.period}</p>
                    <p className="text-sm text-muted-foreground">{job.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
