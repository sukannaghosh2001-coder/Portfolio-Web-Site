import { Terminal, Code2, Cpu } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 md:px-12 py-20 bg-background/50">
      <div className="max-w-5xl mx-auto w-full">

        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary tracking-[0.2em] uppercase mb-4">About Me</h2>
          <h3 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
            Building the future, <br className="hidden md:block" />
            <span className="text-muted-foreground">driven by innovation and design excellence.</span>
          </h3>
        </div>

        {/* Compact Grid Layout */}
        <div className="grid md:grid-cols-12 gap-6">

          {/* Main Bio Card */}
          <div className="md:col-span-8 bg-card/50 border border-border/50 p-8 rounded-3xl backdrop-blur-sm">
            <h4 className="text-2xl font-bold mb-4 text-foreground">Who I Am</h4>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm <span className="text-primary font-bold">Sukanna Ghosh</span>, an MCA scholar at Meghnad Saha Institute of Technology.
              I specialize in <span className="text-foreground font-bold">Full Stack Development</span> with the MERN stack and have a keen eye for <span className="text-foreground font-bold">UI/UX Design</span>.
              My goal is to bridge the gap between complex engineering and intuitive design.
            </p>
          </div>

          {/* Stat Card 1: Education */}
          <div className="md:col-span-4 bg-primary/10 border border-primary/20 p-8 rounded-3xl flex flex-col justify-center items-center text-center">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4 text-primary">
              <Cpu size={24} />
            </div>
            <h5 className="text-3xl font-bold text-primary mb-1">8.31 CGPA</h5>
            <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">MCA Scholar</p>
          </div>

          {/* Stat Card 2: Tech Stack */}
          <div className="md:col-span-4 bg-card/50 border border-border/50 p-8 rounded-3xl flex flex-col justify-center items-center text-center hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4 text-foreground">
              <Terminal size={24} />
            </div>
            <h5 className="text-xl font-bold text-foreground mb-1">MERN Stack</h5>
            <p className="text-sm text-muted-foreground">Core Specialization</p>
          </div>

          {/* Stat Card 3: Philosophy */}
          <div className="md:col-span-4 bg-card/50 border border-border/50 p-8 rounded-3xl flex flex-col justify-center items-center text-center hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4 text-foreground">
              <Code2 size={24} />
            </div>
            <h5 className="text-xl font-bold text-foreground mb-1">Clean Code</h5>
            <p className="text-sm text-muted-foreground">Scalable Architecture</p>
          </div>

          {/* Highlight / Quote */}
          <div className="md:col-span-4 bg-gradient-to-br from-primary to-purple-600 p-8 rounded-3xl text-white flex flex-col justify-center">
            <p className="font-bold text-lg leading-snug">
              "Design is not just what it looks like and feels like. Design is how it works."
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
