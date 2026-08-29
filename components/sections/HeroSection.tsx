'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowDown, Download } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import {
  awsCertification,
  certificationBadgeSize,
  resume,
  socialLinks,
} from '@/data/portfolio'

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
          {/* AWS Certification Badge.
              The image is decorative here - the pill text already names the
              certification, so announcing it twice would be noise. */}
          <div className="flex justify-center mb-6">
            <span className="credential-pill pl-2 pr-3 py-1">
              {awsCertification?.badgeImage && (
                <Image
                  src={awsCertification.badgeImage}
                  alt=""
                  aria-hidden="true"
                  width={certificationBadgeSize.width}
                  height={certificationBadgeSize.height}
                  priority
                  className="h-5 w-auto"
                />
              )}
              {t.hero.badge}
            </span>
          </div>

          {/* Name */}
          <h1 className="text-7xl md:text-8xl font-bold mb-6 tracking-tight">
            <span className="text-text-primary-light dark:text-text-primary-dark">
              Lucas Oliveira
            </span>
          </h1>

          {/* Role */}
          <h2 className="text-2xl md:text-3xl font-medium mb-3 bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">
            {t.hero.role}
          </h2>

          {/* Subtitle */}
          <p className="text-sm md:text-base font-medium text-text-secondary-light dark:text-text-secondary-dark mb-4">
            {t.hero.subtitle}
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-slate-400 dark:text-slate-400 max-w-2xl mx-auto mb-12" style={{ lineHeight: '1.7' }}>
            {t.hero.description}
          </p>

          {/* CTAs - the CV download stays secondary so the page keeps one focal point */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            <motion.button
              onClick={scrollToProjects}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-text-secondary-light/20 dark:border-text-secondary-dark/20 rounded-lg text-sm font-medium text-text-primary-light dark:text-text-primary-dark hover:border-primary-light dark:hover:border-primary-dark hover:bg-primary-light/5 dark:hover:bg-primary-dark/5 transition-all duration-300"
              aria-label="Scroll to projects section"
            >
              {t.hero.cta.viewWork}
              <ArrowDown className="w-4 h-4" />
            </motion.button>

            <a
              href={resume.path}
              download={resume.fileName}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-text-secondary-light/20 dark:border-text-secondary-dark/20 rounded-lg text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark hover:text-primary-light dark:hover:text-primary-dark hover:border-primary-light dark:hover:border-primary-dark hover:bg-primary-light/5 dark:hover:bg-primary-dark/5 transition-colors duration-300"
            >
              <Download className="w-4 h-4" aria-hidden="true" />
              {t.hero.cta.downloadCV}
            </a>
          </div>

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
