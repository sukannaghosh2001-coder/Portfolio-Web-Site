'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Calendar, Award, Languages, Heart, BookOpen, Cpu, Gamepad2, Globe, BrainCircuit } from 'lucide-react'

export default function Education() {
  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'MAKAUT, Meghnad Saha Institute of Technology',
      duration: '2024 - 2026',
      cgpa: '8.31/10',
      description: 'Advanced studies in computer applications with focus on web development and software engineering.',
    },
    {
      degree: 'Bachelor of Science (General)',
      institution: 'University of Calcutta, Basanti Devi College',
      duration: '2020 - 2023',
      cgpa: '8.52/10',
      description: 'Comprehensive foundation in computer science, mathematics, and related disciplines.',
    },
  ]

  const certifications = [
    { name: 'Diploma in Computer Application - WEBEL', icon: <BookOpen className="w-5 h-5" /> },
    { name: 'Unity Game Development Workshop', icon: <Gamepad2 className="w-5 h-5" /> },
    { name: 'Arduino Hands-on Workshop', icon: <Cpu className="w-5 h-5" /> },
    { name: 'AI Tools Workshop 2024 - be10X', icon: <BrainCircuit className="w-5 h-5" /> },
  ]

  const languages = ['English (Professional)', 'Hindi (Professional)', 'Bangla (Native)']

  const interests = [
    { name: 'Reading Story Books', icon: <BookOpen className="w-4 h-4" /> },
    { name: 'Trying different AI models', icon: <BrainCircuit className="w-4 h-4" /> },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100
      }
    }
  }

  return (
    <section id="education" className="min-h-screen relative bg-[#1F2937] text-white py-24 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob [animation-delay:2s]"></div>
        <div className="absolute -bottom-8 left-20 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob [animation-delay:4s]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="text-yellow-400 font-semibold tracking-widest uppercase text-sm mb-2 block">Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Education & <span className="text-yellow-400">Skills</span></h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12">

          {/* Main Education Timeline - Left Column */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-10">
              <GraduationCap className="text-yellow-400 w-8 h-8" />
              <h3 className="text-3xl font-bold">Academic History</h3>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative border-l-2 border-gray-700 ml-3 md:ml-6 space-y-12 pl-8 md:pl-12 pb-4"
            >
              {education.map((edu, index) => (
                <motion.div key={index} variants={itemVariants} className="relative">
                  {/* Timeline Dot */}
                  <span className="absolute -left-[41px] md:-left-[59px] top-0 flex items-center justify-center w-6 h-6 rounded-full bg-yellow-400 ring-4 ring-[#1F2937]">
                    <span className="w-2 h-2 bg-[#1F2937] rounded-full"></span>
                  </span>

                  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-yellow-400/50 transition-colors duration-300 shadow-xl group">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                      <div>
                        <h4 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors">{edu.degree}</h4>
                        <p className="text-gray-400 text-lg mt-1">{edu.institution}</p>
                      </div>
                      <div className="flex items-center gap-2 bg-gray-900/50 px-4 py-2 rounded-lg border border-gray-700">
                        <Calendar className="text-yellow-400 w-4 h-4" />
                        <span className="text-sm font-medium text-gray-300">{edu.duration}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-4 text-yellow-400 font-semibold">
                      <Award className="w-5 h-5" />
                      <span>CGPA: {edu.cgpa}</span>
                    </div>

                    <p className="text-gray-400 leading-relaxed">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Skills & Other Stats - Right Column */}
          <div className="lg:col-span-5 space-y-12">

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <Award className="text-yellow-400 w-6 h-6" />
                <h3 className="text-2xl font-bold">Certifications</h3>
              </div>
              <div className="grid gap-4">
                {certifications.map((cert, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-4 bg-gray-800/40 border border-gray-700 p-4 rounded-xl hover:bg-gray-800 hover:border-yellow-400/30 transition-all cursor-default"
                  >
                    <div className="p-3 bg-gray-900 rounded-lg text-yellow-400">
                      {cert.icon}
                    </div>
                    <span className="font-medium text-gray-200">{cert.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Languages className="text-yellow-400 w-6 h-6" />
                <h3 className="text-2xl font-bold">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {languages.map((lang, idx) => (
                  <span key={idx} className="px-5 py-2.5 bg-gray-800/60 border border-gray-700 rounded-full text-gray-300 hover:text-white hover:border-yellow-400/50 transition-colors">
                    {lang}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Interests */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Heart className="text-yellow-400 w-6 h-6" />
                <h3 className="text-2xl font-bold">Interests</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {interests.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-gray-400 hover:text-yellow-400 transition-colors">
                    <div className="text-yellow-400">{item.icon}</div>
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
