'use client'

import React, { memo, useState } from 'react'
import { Github, ExternalLink, Lock, Star } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import { projects } from '@/data/portfolio'

function ProjectsSection() {
  const { t, language } = useLanguage()

  return (
    <Section id="projects" title={t.projects.title}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className={`h-full flex flex-col ${
                project.highlight
                  ? 'md:col-span-2 !border-accent/40 shadow-[0_0_24px_rgba(16,185,129,0.08)]'
                  : ''
              }`}
              hover={false}
            >
                {/* Highlight / Featured Badge */}
                {project.highlight ? (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-accent border border-accent/30 bg-accent/10 rounded-full mb-4 w-fit">
                    <Star className="w-3.5 h-3.5" />
                    {t.projects.highlight}
                  </span>
                ) : project.featured && (
                  <span className="inline-block px-3 py-1 text-xs font-medium text-primary-light dark:text-primary-dark border border-primary-light/30 dark:border-primary-dark/30 rounded-full mb-4 w-fit">
                    Featured
                  </span>
                )}

                {/* Title */}
                <h3 className="text-2xl font-semibold mb-3 text-text-primary-light dark:text-text-primary-dark">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-400 dark:text-slate-400 mb-6 leading-relaxed flex-grow" style={{ lineHeight: '1.7' }}>
                  {project.description[language]}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6" style={{ contain: 'layout' }}>
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={`${tech}-${idx}`}
                      className="tech-badge"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4" style={{ contain: 'layout' }}>
                  {project.isPrivate ? (
                    <button
                      onClick={() => alert(language === 'pt' ? 'Repositório Privado\n\nEste projeto está em produção e contém código proprietário da empresa.' : 'Private Repository\n\nThis project is in production and contains proprietary company code.')}
                      className="project-link cursor-pointer"
                    >
                      <Lock className="w-4 h-4" />
                      {language === 'pt' ? 'Repositório Privado' : 'Private Repository'}
                    </button>
                  ) : project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <Github className="w-4 h-4" />
                      {t.projects.viewCode}
                    </a>
                  ) : null}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {t.projects.viewDemo}
                    </a>
                  )}
                </div>
              </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default memo(ProjectsSection)
