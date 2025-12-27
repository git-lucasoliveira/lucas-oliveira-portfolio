'use client'

import React, { useState, memo } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Phone, MapPin, Copy, Check, Github, Linkedin } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useLanguage } from '@/contexts/LanguageContext'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import { socialLinks } from '@/data/portfolio'

interface FormData {
  name: string
  email: string
  message: string
}

function ContactSection() {
  const { t, language } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)
  const [copied, setCopied] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // TODO: Implement actual email sending API
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitStatus('success')
      reset()
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(socialLinks.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <Section id="contact" title={t.contact.title} subtitle={t.contact.subtitle}>
      <div className="max-w-3xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium mb-2 text-slate-400 dark:text-slate-400 uppercase tracking-wider">
                    {t.contact.form.name}
                  </label>
                  <input
                    id="name"
                    {...register('name', { required: true })}
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-slate-200/50 dark:bg-slate-800/50 border-0 focus:ring-2 focus:ring-blue-500/50 transition-all font-light text-text-primary-light dark:text-text-primary-dark placeholder:text-slate-500 dark:placeholder:text-slate-500"
                    placeholder={language === 'pt' ? 'Seu nome' : 'Your name'}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1 font-light">{language === 'pt' ? 'Campo obrigatório' : 'Required field'}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-medium mb-2 text-slate-400 dark:text-slate-400 uppercase tracking-wider">
                    {t.contact.form.email}
                  </label>
                  <input
                    id="email"
                    {...register('email', {
                      required: true,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })}
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-slate-200/50 dark:bg-slate-800/50 border-0 focus:ring-2 focus:ring-blue-500/50 transition-all font-light text-text-primary-light dark:text-text-primary-dark placeholder:text-slate-500 dark:placeholder:text-slate-500"
                    placeholder="seuemail@exemplo.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1 font-light">{language === 'pt' ? 'Email inválido' : 'Invalid email'}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium mb-2 text-slate-400 dark:text-slate-400 uppercase tracking-wider">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    {...register('message', { required: true })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-slate-200/50 dark:bg-slate-800/50 border-0 focus:ring-2 focus:ring-blue-500/50 transition-all resize-none font-light text-text-primary-light dark:text-text-primary-dark placeholder:text-slate-500 dark:placeholder:text-slate-500"
                    placeholder={language === 'pt' ? 'Conte-me sobre seu projeto...' : 'Tell me about your project...'}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1 font-light">{language === 'pt' ? 'Campo obrigatório' : 'Required field'}</p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 rounded-lg transition-all duration-300 font-medium text-white flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? t.contact.form.sending : t.contact.form.send}
                </motion.button>

                {submitStatus === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-500 text-center text-sm font-light flex items-center justify-center gap-2"
                  >
                    <Check className="w-4 h-4" />
                    {t.contact.form.success}
                  </motion.p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-500 text-center text-sm font-light">{t.contact.form.error}</p>
                )}
              </form>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <h3 className="text-xl font-medium mb-6 text-text-primary-light dark:text-text-primary-dark">
                {t.contact.or}
              </h3>
              <div className="space-y-4">
                {/* Email with Copy Button */}
                <div className="flex items-center justify-between group">
                  <a
                    href={`mailto:${socialLinks.email}`}
                    className="flex items-center gap-3 text-text-secondary-light/70 dark:text-text-secondary-dark/70 hover:text-text-primary-light dark:hover:text-text-primary-dark transition-colors font-light text-sm flex-1"
                  >
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    <span className="break-all">{socialLinks.email}</span>
                  </a>
                  <button
                    onClick={copyEmail}
                    className="ml-2 p-2 rounded-lg hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors relative"
                    aria-label={t.contact.copyEmail}
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4 text-slate-400" />
                    )}
                    {copied && (
                      <span className="absolute -top-8 right-0 bg-slate-800 text-white text-xs px-2 py-1 rounded">
                        {t.contact.copied}
                      </span>
                    )}
                  </button>
                </div>

                {/* Phone */}
                <a
                  href={`tel:${socialLinks.phone}`}
                  className="flex items-center gap-3 text-text-secondary-light/70 dark:text-text-secondary-dark/70 hover:text-text-primary-light dark:hover:text-text-primary-dark transition-colors font-light text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>{socialLinks.phone}</span>
                </a>

                {/* Location */}
                <div className="flex items-center gap-3 text-text-secondary-light/70 dark:text-text-secondary-dark/70 font-light text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>{socialLinks.location}</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-6 pt-6 border-t border-text-secondary-light/10 dark:border-text-secondary-dark/10">
                <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-4">
                  {t.contact.socialLinks}
                </p>
                <div className="flex gap-3">
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-200/50 dark:bg-slate-800/50 hover:bg-slate-300/50 dark:hover:bg-slate-800 transition-colors text-text-secondary-light/70 dark:text-text-secondary-dark/70 hover:text-text-primary-light dark:hover:text-text-primary-dark text-sm font-light"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-200/50 dark:bg-slate-800/50 hover:bg-slate-300/50 dark:hover:bg-slate-800 transition-colors text-text-secondary-light/70 dark:text-text-secondary-dark/70 hover:text-text-primary-light dark:hover:text-text-primary-dark text-sm font-light"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </Card>

            {/* Availability Card */}
            <Card>
              <p className="text-text-secondary-light/70 dark:text-text-secondary-dark/70 font-light text-sm leading-relaxed">
                {t.contact.availability}
              </p>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default memo(ContactSection)
