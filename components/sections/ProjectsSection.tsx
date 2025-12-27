'use client'

import React, { memo } from 'react'
import { Github, ExternalLink } from 'lucide-react'
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
            <Card key={project.id} className="h-full flex flex-col" hover={false}>
                {/* Featured Badge */}
                {project.featured && (
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
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <Github className="w-4 h-4" />
                    {t.projects.viewCode}
                  </a>
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
