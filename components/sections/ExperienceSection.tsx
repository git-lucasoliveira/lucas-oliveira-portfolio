'use client'

import React, { memo } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import { experiences } from '@/data/portfolio'

function ExperienceSection() {
  const { t, language } = useLanguage()

  const workExperiences = experiences.filter((exp) => exp.type === 'work')

  return (
    <Section id="experience" title={t.experience.title} className="bg-background-light dark:bg-background-dark">
      <div className="max-w-3xl mx-auto space-y-12">
        {workExperiences.map((exp, index) => (
          <Card key={exp.id}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-5">
                <div>
                  <h3 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-2">
                    {exp.title[language]}
                  </h3>
                  <p className="text-base font-medium text-primary-light dark:text-primary-dark">
                    {exp.company}
                  </p>
                </div>
                <span className="text-sm font-normal text-slate-400 dark:text-slate-400 whitespace-nowrap">
                  {exp.period.start} - {exp.period.end === 'present' ? t.experience.present : exp.period.end}
                </span>
              </div>

              <ul className="space-y-3">
                {exp.description[language].map((desc, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-slate-400 dark:text-slate-400"
                    style={{ lineHeight: '1.7' }}
                  >
                    <span className="text-primary-light dark:text-primary-dark mt-1 flex-shrink-0">•</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </Card>
        ))}
      </div>
    </Section>
  )
}

export default memo(ExperienceSection)
