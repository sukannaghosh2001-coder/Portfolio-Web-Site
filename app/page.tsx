'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Header from '@/components/header'
import Hero from '@/components/hero'
import About from '@/components/about'
import Skills from '@/components/skills'
import Experience from '@/components/experience'
import Education from '@/components/education'
import Projects from '@/components/projects'
import Contact from '@/components/contact'
import Loader from '@/components/loader'

export default function Home() {
  const [loading, setLoading] = useState(true)

  return (
    <main className="w-full bg-background text-foreground relative">
      <AnimatePresence mode="wait">
        {loading && (
          <Loader key="loader" onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {!loading && (
        <>
          <Header />
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Projects />
          <Contact />
        </>
      )}
    </main>
  )
}
