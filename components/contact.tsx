'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  const contactInfo = [
    {
      label: 'Email',
      value: 'sukannaghosh2001@gmail.com',
      href: 'mailto:sukannaghosh2001@gmail.com',
      icon: '✉',
    },
    {
      label: 'Phone',
      value: '+91 9123866071',
      href: 'tel:+919123866071',
      icon: '📱',
    },
    {
      label: 'Location',
      value: 'Kolkata, India',
      href: '#',
      icon: '📍',
    },
  ]

  const socialLinks = [
    { name: 'GitHub', url: '#', icon: 'GH' },
    { name: 'LinkedIn', url: '#', icon: 'in' },
    { name: 'Twitter', url: '#', icon: 'X' },
  ]

  return (
    <section id="contact" className="min-h-screen px-6 md:px-12 py-24 flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-16">
          <h3 className="text-xs font-semibold text-primary uppercase tracking-widest mb-4">Get In Touch</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's collaborate and create something amazing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Whether you have a project in mind, questions about my work, or just want to connect, I'd love to hear from you. Reach out through any of the channels below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-semibold text-primary uppercase tracking-widest mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group flex items-start gap-4 p-4 rounded-lg border border-border hover:border-primary hover:bg-secondary/50 transition-all"
                  >
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                        {item.label}
                      </p>
                      <p className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-primary uppercase tracking-widest mb-6">Connect</h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    className="px-6 py-3 border border-border rounded-lg text-foreground hover:border-primary hover:text-primary transition-all font-semibold text-sm"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-xl p-8 md:p-10">
            <h3 className="text-sm font-semibold text-primary uppercase tracking-widest mb-6">Send a Message</h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 gap-4">
                <div className="text-4xl">✓</div>
                <p className="text-lg font-semibold text-primary">Message sent successfully!</p>
                <p className="text-sm text-muted-foreground">I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    suppressHydrationWarning
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    suppressHydrationWarning
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  suppressHydrationWarning
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-16 pt-16 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-muted-foreground">© 2024 Sukanna Ghosh. All rights reserved.</p>
            <div className="flex gap-6 text-muted-foreground text-sm">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
