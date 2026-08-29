'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { pt, type Translations } from '@/locales/pt'
import { en } from '@/locales/en'

type Language = 'pt' | 'en'

/** The one place a language maps to its translations. */
const translations: Record<Language, Translations> = { pt, en }

const STORAGE_KEY = 'language'

function isLanguage(value: unknown): value is Language {
  return value === 'pt' || value === 'en'
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Starts on the server default and moves to the stored choice after mount.
  // Reading storage during the first render would render different markup than
  // the server sent, which React rejects as a hydration mismatch.
  const [language, setLanguageState] = useState<Language>('pt')

  // `t` is derived, never stored: two pieces of state for one fact can drift.
  const t = translations[language]

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (isLanguage(saved)) setLanguageState(saved)
  }, [])

  useEffect(() => {
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en'
  }, [language])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem(STORAGE_KEY, lang)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
