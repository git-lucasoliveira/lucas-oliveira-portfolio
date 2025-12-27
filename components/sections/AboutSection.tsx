'use client'

import React, { memo } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import Section from '@/components/ui/Section'

function AboutSection() {
  const { t, language } = useLanguage()

  const softSkills = [
    { icon: '🚀', label: language === 'pt' ? 'Proatividade' : 'Proactivity' },
    { icon: '🎯', label: language === 'pt' ? 'Determinação' : 'Determination' },
    { icon: '💡', label: language === 'pt' ? 'Resolução de problemas' : 'Problem Solving' },
    { icon: '👥', label: language === 'pt' ? 'Trabalho em equipe' : 'Teamwork' },
    { icon: '🧠', label: language === 'pt' ? 'Pensamento crítico' : 'Critical Thinking' },
    { icon: '♾️', label: language === 'pt' ? 'Adaptabilidade' : 'Adaptability' },
    { icon: '💬', label: language === 'pt' ? 'Comunicação' : 'Communication' },
    { icon: '🎓', label: language === 'pt' ? 'Aprendizado contínuo' : 'Continuous Learning' },
  ]

  return (
    <Section id="about" title={t.about.title}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.3 }}
          style={{ willChange: 'transform, opacity' }}
        >
          <div className="space-y-5 text-sm text-slate-400 dark:text-slate-400 mb-16" style={{ lineHeight: '1.7' }}>
            {t.about.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Soft Skills Grid */}
          <div>
            <h3 className="text-sm font-medium text-text-secondary-light/50 dark:text-text-secondary-dark/50 mb-8 text-center uppercase tracking-wider">
              Soft Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  style={{ willChange: 'transform, opacity' }}
                  className="flex flex-col items-center gap-3 p-4 rounded-lg border border-text-secondary-light/10 dark:border-text-secondary-dark/10 hover:border-text-secondary-light/20 dark:hover:border-text-secondary-dark/20 transition-colors"
                >
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="text-xs font-light text-center text-text-secondary-light/70 dark:text-text-secondary-dark/70">{skill.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

export default memo(AboutSection)
