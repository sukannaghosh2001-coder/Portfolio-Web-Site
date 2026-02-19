'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import profileImage from './image/image.jpeg'

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('')

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            setActiveSection(id)
            setIsMobileMenuOpen(false)
        }
    }

    const navLinks = [
        { name: 'About', id: 'about' },
        { name: 'Experience', id: 'experience' },
        { name: 'Education', id: 'education' },
        { name: 'Projects', id: 'projects' },
        { name: 'Contact', id: 'contact' },
    ]

    return (
        <>
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className={cn(
                    "fixed top-4 left-0 right-0 z-50 flex justify-center mx-4 md:mx-auto max-w-fit transition-all duration-300",
                )}
            >
                <div
                    className={cn(
                        "flex items-center gap-2 px-3 py-3 rounded-full border transition-all duration-300",
                        isScrolled
                            ? "bg-background/70 backdrop-blur-md border-white/20 shadow-lg shadow-black/5"
                            : "bg-transparent border-transparent"
                    )}
                >
                    {/* Profile Image with Roll Effect */}
                    <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="relative w-10 h-10 rounded-full overflow-hidden cursor-pointer border border-primary/20 hover:opacity-80 md:mr-4 mr-2"
                    >
                        <Image
                            src={profileImage}
                            alt="Profile"
                            fill
                            className="object-cover"
                            sizes="40px"
                        />
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center">
                        <ul className="flex gap-1">
                            {navLinks.map((link) => (
                                <li key={link.id}>
                                    <button
                                        onClick={() => scrollToSection(link.id)}
                                        className={cn(
                                            "relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 overflow-hidden group",
                                            activeSection === link.id
                                                ? "text-primary-foreground"
                                                : "text-muted-foreground hover:text-foreground"
                                        )}
                                    >
                                        {activeSection === link.id && (
                                            <motion.div
                                                layoutId="activeTab"
                                                className="absolute inset-0 bg-primary rounded-full z-0"
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}

                                        <div className="relative z-10 flex flex-col items-center justify-center h-5 overflow-hidden">
                                            <span className="block transition-transform duration-500 group-hover:-translate-y-full">
                                                {link.name}
                                            </span>
                                            <span className="block absolute top-0 transition-transform duration-500 translate-y-full group-hover:translate-y-0">
                                                {link.name}
                                            </span>
                                        </div>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Contact Button Desktop */}
                    <button
                        onClick={() => scrollToSection('contact')}
                        className="hidden md:flex ml-4 px-5 py-2.5 bg-foreground text-background rounded-full text-sm font-semibold hover:bg-foreground/90 transition-colors"
                    >
                        Let's Talk
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-foreground bg-secondary/50 rounded-full"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </motion.header>

            {/* Mobile Navigation Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        className="fixed top-24 left-4 right-4 z-40 bg-background/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl md:hidden"
                    >
                        <nav className="flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => scrollToSection(link.id)}
                                    className="text-left px-4 py-3 rounded-xl hover:bg-secondary/50 text-foreground font-medium transition-colors"
                                >
                                    {link.name}
                                </button>
                            ))}
                            <div className="h-px bg-border my-2" />
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="w-full text-center px-4 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors"
                            >
                                Let's Talk
                            </button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
