'use client'

import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'

export default function Experience() {
    const experience = [
        {
            role: 'Software Developer',
            company: 'Swami Vivekananda University',
            duration: 'Present',
            description: 'Contributing to software development projects and initiatives within the university environment. Building scalable web applications and enhancing student portals.',
            color: 'from-blue-500/20 to-indigo-600/20',
        },
        // Placeholder to show flow
        {
            role: 'Freelance Developer',
            company: 'Self-Employed',
            duration: '2023 - Present',
            description: 'Developed custom websites and web applications for various clients, focusing on responsive design and performance optimization.',
            color: 'from-emerald-500/20 to-teal-500/20',
        }
    ]

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const item = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1 }
    }

    return (
        <section id="experience" className="min-h-screen px-6 md:px-12 py-32 bg-background relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />

            <div className="max-w-5xl mx-auto w-full">
                <div className="mb-20 text-center">
                    <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-xs font-semibold text-primary uppercase tracking-widest mb-4 inline-block px-3 py-1 rounded-full border border-primary/20 bg-primary/5"
                    >
                        Career Path
                    </motion.h3>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-foreground"
                    >
                        Professional Experience
                    </motion.h2>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="relative border-l-2 border-primary/20 ml-4 md:ml-12 space-y-12"
                >
                    {experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-[0_0_0_4px_rgba(var(--primary),0.2)]" />

                            <div className="group relative p-8 rounded-3xl bg-secondary/30 border border-white/5 hover:bg-secondary/50 transition-colors duration-300">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{exp.role}</h3>
                                        <p className="text-lg font-medium text-muted-foreground mt-1 flex items-center gap-2">
                                            {exp.company}
                                        </p>
                                    </div>
                                    <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-background border border-border text-primary whitespace-nowrap">
                                        {exp.duration}
                                    </span>
                                </div>

                                <p className="text-muted-foreground leading-relaxed text-lg max-w-3xl">
                                    {exp.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
