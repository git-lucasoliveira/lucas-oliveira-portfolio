'use client'

import React, { memo } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import { experiences, Experience } from '@/data/portfolio'

function ExperienceSection() {
  const { t, language } = useLanguage()

  const workExperiences = experiences.filter((exp) => exp.type === 'work')

  // Group consecutive roles at the same company (e.g. promotions) into one card
  const companyGroups = workExperiences.reduce<{ company: string; roles: Experience[] }[]>(
    (groups, exp) => {
      const lastGroup = groups[groups.length - 1]
      if (lastGroup && lastGroup.company === exp.company) {
        lastGroup.roles.push(exp)
      } else {
        groups.push({ company: exp.company, roles: [exp] })
      }
      return groups
    },
    []
  )

  return (
    <Section id="experience" title={t.experience.title} className="bg-background-light dark:bg-background-dark">
      <div className="max-w-3xl mx-auto space-y-12">
        {companyGroups.map((group) => (
          <Card key={group.company}>
            <p className="text-base font-medium text-primary-light dark:text-primary-dark mb-6">
              {group.company}
            </p>

            <div className="space-y-8">
              {group.roles.map((exp, roleIndex) => (
                <div
                  key={exp.id}
                  className={
                    group.roles.length > 1
                      ? 'relative pl-6 border-l border-primary-light/30 dark:border-primary-dark/30'
                      : ''
                  }
                >
                  {group.roles.length > 1 && (
                    <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary-light dark:bg-primary-dark" />
                  )}

                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                    <h3 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark flex flex-wrap items-center gap-3">
                      {exp.title[language]}
                      {group.roles.length > 1 && roleIndex === 0 && (
                        <span className="inline-flex items-center border border-accent/30 bg-accent/10 text-accent rounded-full px-2.5 py-0.5 text-xs font-medium">
                          {t.experience.promotion}
                        </span>
                      )}
                    </h3>
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
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}

export default memo(ExperienceSection)
