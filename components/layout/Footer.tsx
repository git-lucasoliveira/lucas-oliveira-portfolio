'use client'

import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { socialLinks } from '@/data/portfolio'

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-text-secondary-light/10 dark:border-text-secondary-dark/10 py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary-light/70 dark:text-text-secondary-dark/70 hover:text-text-primary-light dark:hover:text-text-primary-dark transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary-light/70 dark:text-text-secondary-dark/70 hover:text-text-primary-light dark:hover:text-text-primary-dark transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${socialLinks.email}`}
              className="text-text-secondary-light/70 dark:text-text-secondary-dark/70 hover:text-text-primary-light dark:hover:text-text-primary-dark transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-text-secondary-light/70 dark:text-text-secondary-dark/70">
            <p className="text-sm font-light">
              © {currentYear} Lucas de Oliveira Amorim
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
