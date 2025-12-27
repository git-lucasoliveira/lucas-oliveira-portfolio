'use client'

import React, { memo } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import { experiences } from '@/data/portfolio'

function EducationSection() {
  const { t, language } = useLanguage()

  const educationItems = experiences.filter((exp) => exp.type === 'education')

  return (
    <Section id="education" title={t.education.title}>
      <div className="max-w-3xl mx-auto space-y-12">
        {educationItems.map((item, index) => (
          <Card key={item.id}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-5">
                <div>
                  <h3 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-2">
                    {language === 'pt' ? item.title.pt : item.title.en}
                  </h3>
                  <p className="text-base font-medium text-primary-light dark:text-primary-dark">
                    {item.company}
                  </p>
                </div>
                <span className="text-sm font-normal text-slate-400 dark:text-slate-400 whitespace-nowrap">
                  {typeof item.period === 'string'
                    ? item.period
                    : `${item.period.start} - ${
                        item.period.end === 'present' ? t.education.present : item.period.end
                      }`}
                </span>
              </div>

              <ul className="space-y-3">
                {(language === 'pt' ? item.description.pt : item.description.en).map(
                  (desc, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-slate-400 dark:text-slate-400"
                      style={{ lineHeight: '1.7' }}
                    >
                      <span className="text-primary-light dark:text-primary-dark mt-1 flex-shrink-0">•</span>
                      <span>{desc}</span>
                    </li>
                  )
                )}
              </ul>
            </Card>
        ))}
      </div>
    </Section>
  )
}

export default memo(EducationSection)
