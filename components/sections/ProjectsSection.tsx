'use client'

import React, { memo } from 'react'
import { Github, ExternalLink, Lock, Star } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import { projects, type Project } from '@/data/portfolio'

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  const { t, language } = useLanguage()

  // A card carries either the highlight pill or the category tag, never both:
  // two badges competing in the same corner is what makes the section read as noise.
  const isHighlight = Boolean(project.highlight)
  const categoryLabel = project.category
    ? t.projects.categories[project.category]
    : undefined

  const repositories = [
    ...(project.repositories ?? []),
    ...(project.githubUrl && !project.repositories
      ? [{ label: t.projects.viewCode, url: project.githubUrl }]
      : []),
  ]

  return (
    <Card
      className={`h-full flex flex-col ${
        isHighlight
          ? '!border-accent/40 shadow-[0_0_24px_rgba(16,185,129,0.08)]'
          : ''
      }`}
      hover={false}
      delay={delay}
    >
      {isHighlight ? (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-accent border border-emerald-700/30 dark:border-accent/30 bg-accent/10 rounded-full mb-4 w-fit">
          <Star className="w-3.5 h-3.5" />
          {t.projects.highlight}
        </span>
      ) : categoryLabel ? (
        <span className="category-tag mb-4 w-fit">{categoryLabel}</span>
      ) : null}

      <h3 className="text-2xl font-semibold mb-3 text-text-primary-light dark:text-text-primary-dark">
        {project.title}
      </h3>

      <p
        className="text-sm text-text-secondary-light dark:text-text-secondary-dark mb-6 leading-relaxed flex-grow"
        style={{ lineHeight: '1.7' }}
      >
        {project.description[language]}
      </p>

      <div className="flex flex-wrap gap-2 mb-6" style={{ contain: 'layout' }}>
        {project.technologies.map((tech, idx) => (
          <span key={`${tech}-${idx}`} className="tech-badge">
            {tech}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-3" style={{ contain: 'layout' }}>
        {project.isPrivate ? (
          <p className="inline-flex items-start gap-2 text-sm text-text-secondary-light dark:text-text-secondary-dark">
            <Lock className="w-4 h-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
            <span>
              <span className="font-medium">{t.projects.privateRepo.label}</span>
              {' — '}
              {t.projects.privateRepo.note}
            </span>
          </p>
        ) : (
          repositories.map((repo) => (
            <a
              key={repo.url}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <Github className="w-4 h-4" aria-hidden="true" />
              {repo.label}
            </a>
          ))
        )}

        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
            {t.projects.viewDemo}
          </a>
        )}
      </div>
    </Card>
  )
}

function ProjectsSection() {
  const { t } = useLanguage()

  const highlighted = projects.filter((project) => project.highlight)
  const rest = projects.filter((project) => !project.highlight)

  return (
    <Section id="projects" title={t.projects.title}>
      <div className="max-w-6xl mx-auto space-y-8">
        {highlighted.map((project) => (
          <ProjectCard key={project.id} project={project} delay={0} />
        ))}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              delay={0.1 * (index + 1)}
            />
          ))}
        </div>
      </div>
    </Section>
  )
}

export default memo(ProjectsSection)
