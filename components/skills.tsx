'use client'

import { motion } from 'framer-motion'
import { Code2, Database, Layout, Server, Smartphone, Globe, Terminal } from 'lucide-react'

// Skill Data with SVG Paths
const skillsData = {
  advanced: [
    {
      name: 'Python',
      icon: <svg viewBox="0 0 128 128" fill="currentColor" className="w-8 h-8"><path d="M63.05 13.91c-19.3 0-21.2.6-25.1 8-.7 1.4-1.2 3.6-1.1 5 .2 3.5 3.9 6.2 7.7 5.7h17.5v6H37.8c-1.3 0-6 .2-8.3 1.2-12 5.1-13.6 19.3-3.6 28.5 2.8 2.5 5.2 3.8 9.5 5.1l5.2 1.6-4.5 1.1c-14.7 3.5-20.2 11.1-17.7 24.3 1.2 6.5 6.7 13.8 13 17 3.9 2 6 2.3 14.6 2.3h10v-16.1c0-11 5-15.6 15.6-15.8 4-.1 13.6 0 16 0 2.2 0 4.2-1.8 4.2-4v-27.4c0-23.7-2.7-32.9-29-32.9zm-4.3 10.1c2.5 0 4.5 2 4.5 4.5s-2 4.5-4.5 4.5-4.5-2-4.5-4.5 2-4.5 4.5-4.5zM98 39.5c-2.2 0-4.2 1.8-4.2 4v27.4c0 23.9 2.1 33.1 31.4 32.9 8.2-.1 13.8-.8 17.6-2.5 7.1-3.1 11.2-8.8 11.2-15.7 0-9.6-5.8-17.2-15-19.5l-5.3-1.3 4.6-1.1c14-3.5 19.5-11.4 17.1-24.8-1.5-8.2-8.4-15.8-17-18.4-3.5-1.1-6-1.2-17.7-1.1h-13v16.1c0 10.9-4.8 15.7-15.7 15.8-3.4 0-14.8-.1-17.2-.1-1.3 0-2.4.9-2.7 2.1l-.1.6v-15.1c0-2.1.2-5.4.5-7.3 1-6.1 4.7-10.9 10.7-13.5 3.5-1.6 6-1.7 16-1.7h9zm11.2 66.8c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z" /></svg>,
      level: 'Good Knowledge'
    },
    {
      name: 'JavaScript',
      icon: <Code2 className="w-8 h-8" />,
      level: 'Good Knowledge'
    },
    {
      name: 'Java',
      icon: <Server className="w-8 h-8" />,
      level: 'Good Knowledge'
    },
    {
      name: 'C',
      icon: <Code2 className="w-8 h-8" />,
      level: 'Good Knowledge'
    },
    {
      name: 'HTML5',
      icon: <Globe className="w-8 h-8" />,
      level: 'Good Knowledge'
    },
    {
      name: 'CSS3',
      icon: <Layout className="w-8 h-8" />,
      level: 'Good Knowledge'
    }
  ],
  intermediate: [
    {
      name: 'React',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" /><line x1="21.17" y1="8" x2="12" y2="8" /><line x1="3.95" y1="6.06" x2="8.54" y2="14" /><line x1="10.88" y1="21.94" x2="15.46" y2="14" /></svg>, // Lucid generic atom-like for React placeholder or custom path
      // Better react path:
      customIcon: <svg viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor" className="w-8 h-8"><circle cx="0" cy="0" r="2.05" /><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2" /><ellipse rx="11" ry="4.2" transform="rotate(60)" /><ellipse rx="11" ry="4.2" transform="rotate(120)" /></g></svg>,
      level: 'Moderate'
    },
    {
      name: 'Next.js',
      icon: <svg viewBox="0 0 128 128" fill="currentColor" className="w-8 h-8"><path d="M64 4a60 60 0 100 120A60 60 0 0064 4zm22.5 91.9L49.1 47.7v48.2H39V39.7h10.8l38.7 49.6V39.7h10.1v56.2H86.5z" /></svg>,
      level: 'Moderate'
    },
    {
      name: 'TypeScript',
      icon: <svg viewBox="0 0 128 128" fill="currentColor" className="w-8 h-8"><path d="M4.9 18.7h118.2v90.6H4.9z" fill="#3178C6" /><path d="M72.3 89.8h-9.9v-44h-14v-8.4h37.8v8.4h-13.9zM100.2 81.3c3.7 2 7.2 3.1 10.7 3.1 3.2 0 4.8-1.5 4.8-3.7 0-2.2-1.3-3.9-6.9-5.9-7-2.6-10.4-6.2-10.4-11.4 0-6.1 5-10.8 13.9-10.8 4.2 0 8.3 1.1 11.2 2.6l-2.4 7.6c-3-1.4-6.3-2.3-9-2.3-2.6 0-4.3 1.3-4.3 3.3 0 2.2 1.4 3.7 7.1 5.8 7.3 2.7 10.3 6.9 10.3 11.4 0 7-5.5 11.2-14.7 11.2-4.5 0-9.4-1.2-12.7-3.1z" fill="#FFF" /></svg>,
      level: 'Moderate'
    },
    {
      name: 'Tailwind CSS',
      icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C10.337,13.382,8.976,12,6.001,12z" /></svg>,
      level: 'Moderate'
    },
    {
      name: 'Bootstrap',
      icon: <Layout className="w-8 h-8" />,
      level: 'Moderate'
    }
  ],
  basic: [
    {
      name: 'Figma',
      icon: <svg viewBox="0 0 38 57" fill="none" className="w-6 h-8"><path fill="#1ABCF8" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" /><path fill="#0ACF83" d="M0 47.5a9.5 9.5 0 0 1 9.5-9.5H19v9.5a9.5 9.5 0 1 1-19 0z" /><path fill="#FF7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" /><path fill="#F24E1E" d="M0 9.5a9.5 9.5 0 0 0 9.5 9.5H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" /><path fill="#A259FF" d="M0 28.5a9.5 9.5 0 0 0 9.5 9.5H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" /></svg>,
      level: 'Familiar'
    },
    {
      name: 'MySQL',
      icon: <Database className="w-8 h-8" />,
      level: 'Familiar'
    },
    {
      name: 'Visual Studio Code',
      icon: <Terminal className="w-8 h-8" />,
      level: 'Tool'
    },
    {
      name: 'MongoDB',
      icon: <svg viewBox="0 0 24 24" fill="#47A248" className="w-8 h-8"><path d="M17.193 10.87c.18 3.535-3.084 4.54-5.21 4.54-2.316 0-3.957-1.34-3.957-3.69 0-2.887 2.195-5.91 5.394-5.91 2.21 0 3.655 1.258 3.773 5.06zm-4.38-8.297c-1.127 2.05-1.558 7.025-1.558 7.025 1.558.825 5.567.887 5.567-3.23 0-1.874-1.255-3.14-4.01-3.795zm-3.09 11.238c-.287.97-.245 4.397 1.353 6.94 0 0 2.288-1.173 2.768-4.57.195-1.385-.09-2.484-2.835-2.616-.54.08-1.07.16-1.286.246zM11.996 24c-.03 0-.07 0-.106-.01l.01-.013c.045.01.076.023.097.023zm.45-23.996c.033.008.067.01.103.01.04-.002.08-.008.12-.02l-.223.01z" /></svg>,
      level: 'Familiar'
    },
  ]
}

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen px-6 md:px-12 py-32 bg-secondary/5 border-y border-white/5">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold text-primary uppercase tracking-widest mb-4 inline-block px-3 py-1 rounded-full border border-primary/20 bg-primary/5"
          >
            Capabilities
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-foreground max-w-2xl mx-auto"
          >
            Technical Proficiency
          </motion.h2>
        </div>

        <div className="space-y-16">

          {/* Advanced Section */}
          <div>
            <h4 className="text-xl font-bold mb-8 text-primary border-l-4 border-primary pl-4">Advanced Knowledge</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {skillsData.advanced.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Intermediate Section */}
          <div>
            <h4 className="text-xl font-bold mb-8 text-foreground border-l-4 border-foreground pl-4">Intermediate Knowledge</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {skillsData.intermediate.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Basic Section */}
          <div>
            <h4 className="text-xl font-bold mb-8 text-muted-foreground border-l-4 border-muted-foreground pl-4">Basic Familiarity</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {skillsData.basic.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function SkillCard({ skill, index }: { skill: any, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-card border border-white/5 p-6 rounded-2xl flex items-center gap-4 hover:border-primary/50 transition-all shadow-sm hover:shadow-md"
    >
      <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-background/50 flex items-center justify-center text-primary">
        {skill.customIcon || skill.icon}
      </div>
      <div>
        <h3 className="font-bold text-lg">{skill.name}</h3>
        <p className="text-sm text-muted-foreground">{skill.level}</p>
      </div>
    </motion.div>
  )
}
