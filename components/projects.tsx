'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      name: 'NOOK - Social Media App',
      category: 'Full Stack • MERN',
      description: 'A comprehensive social media platform featuring secure authentication, real-time interactions, and dynamic feed algorithms.',
      features: ['Authentication', 'Real-time Chat', 'Media Sharing'],
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      color: 'from-pink-500/20 to-rose-500/20'
    },
    // Adding a placeholder project to show the grid better
    {
      id: 2,
      name: 'College Event Management Portal',
      category: 'Full Stack • MERN',
      description: 'A full-stack web application to manage and promote college events. Features include secure user authentication, role-based access, event creation, registration, and real-time updates.',
      features: ['Role-based Access', 'Event Registration', 'Real-time Updates'],
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      id: 3,
      name: 'ZOO Management APP',
      category: 'Mobile • React Native',
      description: 'A mobile application to streamline daily zoo operations. Includes animal record management, QR code scanning for enclosure identification, diet tracking, and task monitoring.',
      features: ['QR Scanning', 'Diet Tracking', 'Record Management'],
      tech: ['React Native', 'JavaScript', 'Mobile'],
      color: 'from-green-500/20 to-emerald-500/20'
    }
  ]

  return (
    <section id="projects" className="min-h-screen px-6 md:px-12 py-32 bg-secondary/10">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold text-primary uppercase tracking-widest mb-4"
          >
            Featured Work
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-foreground max-w-2xl leading-tight"
          >
            Showcasing creative <br />
            <span className="text-primary italic">solutions</span> to complex problems.
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative h-[400px] rounded-3xl overflow-hidden bg-card border border-white/5 cursor-pointer"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-secondary/50 backdrop-blur-sm border border-white/10 text-muted-foreground">
                    {project.category}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-background/20 backdrop-blur-md flex items-center justify-center -translate-y-2 translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300">
                    <ArrowUpRight size={20} className="text-foreground" />
                  </div>
                </div>

                <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                  <h3 className="text-2xl font-bold text-foreground mb-3">{project.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="text-xs font-medium px-2 py-1 rounded bg-secondary/40 text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
