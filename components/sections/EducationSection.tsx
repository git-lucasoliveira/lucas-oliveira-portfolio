'use client'

import React, { memo } from 'react'
import Image from 'next/image'
import { Award, ExternalLink } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import { experiences, certifications } from '@/data/portfolio'

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

        {/* Certifications */}
        <div id="certifications" className="scroll-mt-24">
          <h3 className="text-2xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-8 text-center">
            {t.education.certificationsTitle}
          </h3>
          <div className="space-y-6">
            {certifications.map((cert) => (
              <Card key={cert.id}>
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
                    {cert.badgeImage ? (
                      <Image
                        src={cert.badgeImage}
                        alt={`${cert.name} badge`}
                        width={510}
                        height={588}
                        className="h-16 w-auto"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center">
                        <Award className="w-6 h-6 text-accent" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg font-semibold text-text-primary-light dark:text-text-primary-dark">
                      {cert.name}
                    </h4>
                    <p className="text-sm text-slate-400 dark:text-slate-400">
                      {cert.issuer} · {cert.date}
                    </p>
                  </div>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 text-text-secondary-light dark:text-text-secondary-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                      aria-label={`View credential: ${cert.name}`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default memo(EducationSection)
