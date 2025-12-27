'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { socialLinks } from '@/data/portfolio'

export default function HeroSection() {
  const { t } = useLanguage()

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-8 pt-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Name */}
          <h1 className="text-7xl md:text-8xl font-bold mb-6 tracking-tight">
            <span className="text-text-primary-light dark:text-text-primary-dark">
              Lucas Oliveira
            </span>
          </h1>

          {/* Role */}
          <h2 className="text-2xl md:text-3xl font-medium mb-4 bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">
            Backend Java Developer
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg text-slate-400 dark:text-slate-400 max-w-2xl mx-auto mb-12" style={{ lineHeight: '1.7' }}>
            {t.hero.description}
          </p>

          {/* Single CTA */}
          <motion.button
            onClick={scrollToProjects}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-3 border border-text-secondary-light/20 dark:border-text-secondary-dark/20 rounded-lg text-sm font-medium text-text-primary-light dark:text-text-primary-dark hover:border-primary-light dark:hover:border-primary-dark hover:bg-primary-light/5 dark:hover:bg-primary-dark/5 transition-all duration-300"
            aria-label="Scroll to projects section"
          >
            {t.hero.cta.viewWork}
            <ArrowDown className="w-4 h-4" />
          </motion.button>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-16">
            <motion.a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
              style={{ willChange: 'transform' }}
              className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
              style={{ willChange: 'transform' }}
              className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href={`mailto:${socialLinks.email}`}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
              style={{ willChange: 'transform' }}
              className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
