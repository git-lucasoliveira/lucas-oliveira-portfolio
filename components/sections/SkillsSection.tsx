'use client'

import React, { memo } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import Section from '@/components/ui/Section'
import { skills } from '@/data/portfolio'

function SkillsSection() {
  const { t } = useLanguage()

  const categories = {
    backend: skills.filter((s) => s.category === 'backend'),
    database: skills.filter((s) => s.category === 'database'),
    cloud: skills.filter((s) => s.category === 'cloud'),
    tools: skills.filter((s) => s.category === 'tools'),
    other: skills.filter((s) => s.category === 'other'),
  }

  return (
    <Section id="skills" title={t.skills.title} className="bg-background-light dark:bg-background-dark">
      <div className="max-w-6xl mx-auto">
        {/* Ultra-compact grid without cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-10">
          {Object.entries(categories).map(([category, categorySkills], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              className="space-y-3"
            >
              {/* Category header - minimal */}
              <h3 className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest mb-3">
                {t.skills.categories[category as keyof typeof t.skills.categories]}
              </h3>
              
              {/* Skills list - clean text only */}
              <ul className="space-y-2">
                {categorySkills.map((skill) => (
                  <li
                    key={skill.name}
                    className="text-sm text-slate-400 hover:text-primary-light transition-colors duration-200 cursor-default"
                  >
                    {skill.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default memo(SkillsSection)
