import Header from '@/components/header'
import Hero from '@/components/hero'
import About from '@/components/about'
import Skills from '@/components/skills'
import Experience from '@/components/experience'
import Education from '@/components/education'
import Projects from '@/components/projects'
import Contact from '@/components/contact'

export default function Home() {
  return (
    <main className="w-full bg-background text-foreground">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </main>
  )
}
