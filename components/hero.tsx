'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, Mail, MousePointer2 } from 'lucide-react'
import Image from 'next/image'
import profileImage from './image/image.jpeg'
import { useRef } from 'react'

export default function Hero() {
  const containerRef = useRef(null)
  const { scrollY } = useScroll()

  // Parallax effects
  const y1 = useTransform(scrollY, [0, 500], [0, 200])
  const y2 = useTransform(scrollY, [0, 500], [0, -150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-[#1F2937] text-white overflow-hidden flex flex-col justify-center"
    >
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-r from-yellow-400/10 to-transparent blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-l from-purple-500/10 to-transparent blur-[100px]" />
      </div>

      {/* Grid Background Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-10 grid lg:grid-cols-2 gap-12 items-center min-h-screen">

        {/* Left Content */}
        <motion.div style={{ y: y1 }} className="flex flex-col gap-8 order-2 lg:order-1">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 w-fit px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm font-medium text-gray-300">Available for projects</span>
          </motion.div>

          {/* Main Title */}
          <div className="space-y-2">
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }}
                className="text-6xl md:text-8xl font-bold font-hastegi leading-[1.1] tracking-tight"
              >
                Sukanna
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 0.65, 0.3, 0.9] }}
                className="text-6xl md:text-8xl font-bold font-hastegi leading-[1.1] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500"
              >
                Ghosh
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-yellow-400 inline-block ml-2"
                >.</motion.span>
              </motion.h1>
            </div>
          </div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-gray-400 max-w-lg leading-relaxed"
          >
            Full Stack Developer & UI/UX Designer crafting meaningful digital experiences with modern technologies.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <button className="group relative px-8 py-4 bg-yellow-400 text-slate-900 rounded-full font-bold flex items-center gap-3 overflow-hidden transition-all hover:scale-105 active:scale-95">
              <span className="relative z-10 flex items-center gap-2">
                Download CV <Download size={20} />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            <button className="group px-8 py-4 border border-white/20 hover:border-white/40 text-white rounded-full font-semibold flex items-center gap-3 transition-all hover:bg-white/5">
              My Work <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex gap-6 text-gray-400 pt-4"
          >
            {[
              { Icon: Github, href: 'https://github.com/sukannaghosh2001-coder' },
              { Icon: Linkedin, href: 'https://www.linkedin.com/in/sukanna-ghosh18' },
              { Icon: Mail, href: 'mailto:tosg2001@gmail.com' },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="hover:text-yellow-400 transition-colors hover:scale-110 transform"
              >
                <Icon size={24} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Image/Visual */}
        <motion.div
          style={{ y: y2 }}
          className="relative h-full flex items-center justify-center lg:justify-end order-1 lg:order-2"
        >
          <div className="relative w-full max-w-md aspect-[4/5]">
            {/* Rotating Circle Decoration */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-12 -right-12 w-full h-full border border-yellow-400/20 rounded-full sm:block hidden"
            />

            {/* Main Image Container with Reveal Effect */}
            <motion.div
              initial={{ clipPath: 'inset(100% 0 0 0)' }}
              animate={{ clipPath: 'inset(0% 0 0 0)' }}
              transition={{ duration: 1.2, ease: [0.2, 0.65, 0.3, 0.9], delay: 0.2 }}
              className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F2937] via-transparent to-transparent z-10 opacity-60" />
              <Image
                src={profileImage}
                alt="Sukanna Ghosh"
                fill
                className="object-cover scale-110 hover:scale-100 transition-transform duration-700"
                priority
              />
            </motion.div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="absolute bottom-8 -left-12 bg-[#1F2937]/90 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-xl z-20 flex items-center gap-4 max-w-xs"
            >
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-slate-900">
                <MousePointer2 size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Interactive Design</p>
                <p className="text-xs text-gray-400">Focus on user experience</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-1 h-8 bg-gradient-to-b from-yellow-400 to-transparent rounded-full"
        />
      </motion.div>
    </section>
  )
}
