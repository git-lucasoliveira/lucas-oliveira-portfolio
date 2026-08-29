import { existsSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'

import {
  certifications,
  experiences,
  projects,
  projectCategories,
  projectMarker,
  projectRepositories,
  resume,
  skills,
  socialLinks,
} from '@/data/portfolio'
import { pt } from '@/locales/pt'
import { en } from '@/locales/en'

const PUBLIC_DIR = join(__dirname, '..', 'public')

/** Every leaf path of a nested translation object, as dot-separated strings. */
function keyPaths(value: unknown, prefix = ''): string[] {
  if (Array.isArray(value)) {
    return value.flatMap((item, i) => keyPaths(item, `${prefix}[${i}]`))
  }
  if (value !== null && typeof value === 'object') {
    return Object.entries(value).flatMap(([key, child]) =>
      keyPaths(child, prefix ? `${prefix}.${key}` : key)
    )
  }
  return [prefix]
}

/** Resolves a site-absolute asset path (`/cv/file.pdf`) to a path on disk. */
function assetOnDisk(publicPath: string): string {
  return join(PUBLIC_DIR, publicPath.replace(/^\//, ''))
}

function isAbsoluteHttpsUrl(value: string): boolean {
  try {
    return new URL(value).protocol === 'https:'
  } catch {
    return false
  }
}

/** Every repository link a card renders. Same normaliser the UI uses. */
function repoLinks(project: (typeof projects)[number]): string[] {
  return projectRepositories(project).map((repo) => repo.url)
}

describe('language parity', () => {
  it('gives every project a description in both languages', () => {
    for (const project of projects) {
      expect(project.description.pt.trim(), `${project.title} (pt)`).not.toBe('')
      expect(project.description.en.trim(), `${project.title} (en)`).not.toBe('')
    }
  })

  it('gives every experience the same number of bullets in both languages', () => {
    for (const experience of experiences) {
      expect(
        experience.description.en.length,
        `${experience.id} bullet count`
      ).toBe(experience.description.pt.length)
    }
  })

  it('gives every experience a title in both languages', () => {
    for (const experience of experiences) {
      expect(experience.title.pt.trim(), `${experience.id} (pt)`).not.toBe('')
      expect(experience.title.en.trim(), `${experience.id} (en)`).not.toBe('')
    }
  })

  it('keeps the two locale files structurally identical', () => {
    expect(keyPaths(en).sort()).toEqual(keyPaths(pt).sort())
  })

  it('leaves no translation string empty', () => {
    for (const [name, locale] of [
      ['pt', pt],
      ['en', en],
    ] as const) {
      const empty = keyPaths(locale).filter((path) => {
        const value = path
          .split(/[.[\]]+/)
          .filter(Boolean)
          .reduce<any>((node, key) => node?.[key], locale)
        return typeof value === 'string' && value.trim() === ''
      })
      expect(empty, `empty strings in ${name}`).toEqual([])
    }
  })
})

describe('assets referenced by the site exist on disk', () => {
  it('ships the CV the hero links to', () => {
    expect(existsSync(assetOnDisk(resume.path)), resume.path).toBe(true)
  })

  it('gives the CV a descriptive download filename', () => {
    expect(resume.fileName).toMatch(/\.pdf$/)
    expect(resume.fileName.length).toBeGreaterThan('cv.pdf'.length)
  })

  it('ships every certification badge image', () => {
    for (const cert of certifications) {
      if (!cert.badgeImage) continue
      expect(existsSync(assetOnDisk(cert.badgeImage)), cert.badgeImage).toBe(true)
    }
  })

  it('gives the AWS certification a badge image', () => {
    const aws = certifications.find((cert) => cert.name.includes('AWS'))
    expect(aws?.badgeImage).toBeTruthy()
  })
})

describe('outbound links', () => {
  it('uses absolute https URLs for every repository link', () => {
    for (const project of projects) {
      for (const url of repoLinks(project)) {
        expect(isAbsoluteHttpsUrl(url), `${project.title} -> ${url}`).toBe(true)
      }
    }
  })

  it('uses absolute https URLs for every credential link', () => {
    for (const cert of certifications) {
      if (!cert.credentialUrl) continue
      expect(isAbsoluteHttpsUrl(cert.credentialUrl), cert.name).toBe(true)
    }
  })

  it('keeps tracking parameters out of the credential links', () => {
    for (const cert of certifications) {
      if (!cert.credentialUrl) continue
      expect(new URL(cert.credentialUrl).search, cert.name).toBe('')
    }
  })

  it('uses absolute https URLs for the social links', () => {
    expect(isAbsoluteHttpsUrl(socialLinks.github)).toBe(true)
    expect(isAbsoluteHttpsUrl(socialLinks.linkedin)).toBe(true)
  })
})

describe('project invariants', () => {
  it('highlights exactly one project', () => {
    expect(projects.filter((project) => project.highlight)).toHaveLength(1)
  })

  it('either exposes code or explains why it cannot', () => {
    for (const project of projects) {
      const readable = repoLinks(project).length > 0
      expect(readable || project.isPrivate === true, project.title).toBe(true)
    }
  })

  it('categorises every project that is not the highlighted one', () => {
    for (const project of projects) {
      if (project.highlight) continue
      expect(project.category, project.title).toBeTruthy()
    }
  })

  it('gives every card exactly one marker, never a highlight pill and a tag at once', () => {
    for (const project of projects) {
      const marker = projectMarker(project)
      expect(marker, project.title).toBe(project.highlight ? 'highlight' : 'category')
      // The marker a card renders resolves to one value, so the two can never
      // appear together however the data is edited.
      if (marker === 'category') {
        expect(project.category, project.title).toBeTruthy()
      }
    }
  })

  it('labels every category used, in both languages', () => {
    const used = new Set(
      projects.map((project) => project.category).filter(Boolean) as string[]
    )
    for (const category of used) {
      expect(pt.projects.categories[category as keyof typeof pt.projects.categories]).toBeTruthy()
      expect(en.projects.categories[category as keyof typeof en.projects.categories]).toBeTruthy()
    }
  })

  it('declares no category the site cannot label', () => {
    for (const category of projectCategories) {
      expect(Object.keys(pt.projects.categories)).toContain(category)
    }
  })

  it('names the projects the portfolio promises', () => {
    const titles = projects.map((project) => project.title)
    expect(titles).toContain('StarSuite')
    expect(titles).toContain('Money Transfer API')
    expect(titles).toContain('Onboarding Manager')
    expect(titles.some((title) => title.includes('FIAP'))).toBe(true)
  })

  it('gives the FIAP card both of its repositories', () => {
    const fiap = projects.find((project) => project.title.includes('FIAP'))
    expect(repoLinks(fiap!)).toHaveLength(2)
  })

  it('gives every project at least one technology', () => {
    for (const project of projects) {
      expect(project.technologies.length, project.title).toBeGreaterThan(0)
    }
  })
})

describe('CV and site agree', () => {
  it('names the FIAP postgraduate course the way the CV does', () => {
    const fiap = experiences.find((exp) => exp.company === 'FIAP')
    expect(fiap?.title.pt).toContain('Desenvolvimento Java')
    expect(fiap?.title.en).toContain('Java')
    expect(fiap?.title.pt).not.toContain('Arquitetura de Software')
  })

  it('does not describe the FIAP course as Software Architecture anywhere', () => {
    expect(pt.hero.subtitle).not.toContain('Arquitetura de Software')
    expect(en.hero.subtitle).not.toContain('Software Architecture')
    expect(pt.about.paragraphs.join(' ')).not.toContain('Arquitetura de Software')
    expect(en.about.paragraphs.join(' ')).not.toContain('Software Architecture')
  })

  it('lists the technologies the CV claims', () => {
    const names = skills.map((skill) => skill.name.toLowerCase()).join(' | ')
    expect(names).toContain('c#')
    expect(names).toContain('resilience4j')
    expect(names).toContain('azure devops')
    expect(names).toContain('s3')
  })

  it('mentions the C#/.NET platform in the current role', () => {
    const current = experiences.find((exp) => exp.period.end === 'present')
    const bullets = current!.description.pt.join(' ')
    expect(bullets).toMatch(/C#|\.NET/)
  })

  it('does not attribute C#/.NET to StarSuite', () => {
    const starsuite = projects.find((project) => project.title === 'StarSuite')
    expect(starsuite!.technologies.join(' ')).not.toMatch(/C#|\.NET/)
  })
})
