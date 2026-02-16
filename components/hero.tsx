'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'
import profileImage from './image/image.jpeg'

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen bg-[#1F2937] text-white overflow-hidden flex flex-col justify-center px-6 md:px-12 py-12">
      {/* Background Elements if needed, keeping it clean for now as per ref */}

      <div className="max-w-7xl mx-auto w-full h-full flex flex-col lg:grid lg:grid-cols-12 gap-8 items-center relative z-10">

        {/* LEFT COLUMN: Logo (simulated), Name, Socials */}
        <div className="lg:col-span-4 flex flex-col justify-between h-full lg:h-[80vh] w-full text-center lg:text-left order-2 lg:order-1">
          {/* Top Logo Area */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden lg:block mb-12"
          >
            <div className="w-12 h-12 bg-yellow-400 rounded-b-full rounded-tr-full flex items-center justify-center text-slate-900 font-bold text-xl">
              S
            </div>
          </motion.div>

          {/* Name */}
          <div className="flex flex-col justify-center flex-grow py-8 lg:py-0 relative z-20">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-hastegi text-6xl md:text-8xl font-bold leading-tight tracking-tight relative"
            >
              Sukanna <br />
              <span className="relative inline-block">
                Ghosh
                <span className="text-yellow-400">.</span>
              </span>
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="h-2 w-24 bg-yellow-400 mt-6 mx-auto lg:mx-0"
            />
          </div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex gap-6 items-center justify-center lg:justify-start mt-8 lg:mt-0"
          >
            <a href="https://github.com/sukannaghosh2001-coder" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/sukanna-ghosh18" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors"><Linkedin size={20} /></a>
            <a href="mailto:tosg2001@gmail.com" className="hover:text-yellow-400 transition-colors"><Mail size={20} /></a>
          </motion.div>
        </div>

        {/* MIDDLE COLUMN: Image */}
        <div className="lg:col-span-4 flex items-end justify-center h-[50vh] lg:h-[80vh] w-full relative order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-full flex items-end justify-center"
          >
            {/* Gradient behind image to blend if needed, or just the image */}
            <div className="relative flex items-end justify-center">
              <Image
                src={profileImage}
                alt="Sukanna Ghosh"
                className="w-auto h-auto max-h-[600px] z-10 rounded-3xl border-4 border-white/20 shadow-2xl"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Nav Links, Bio */}
        <div className="lg:col-span-4 flex flex-col justify-between h-full lg:h-[80vh] w-full text-center lg:text-left order-3">


          {/* Bio Content */}
          <div className="flex flex-col justify-center flex-grow py-8 lg:py-0">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-gray-400 uppercase tracking-widest text-xs font-semibold mb-4">— Introduction</p>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-snug">
                Full Stack Developer & <br />
                UI/UX Designer, based in <br />
                West Bengal.
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm mx-auto lg:mx-0">
                I craft beautiful, responsive web applications with modern technologies.
                Passionate about creating digital experiences that leave a lasting impression.
              </p>
            </motion.div>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              onClick={() => scrollToSection('about')}
              className="text-yellow-400 font-semibold flex items-center gap-2 mx-auto lg:mx-0 hover:gap-4 transition-all group"
            >
              My story
              <ArrowRight size={16} className="group-hover:text-white transition-colors" />
            </motion.button>
          </div>
        </div>

      </div>
    </section>
  )
}
