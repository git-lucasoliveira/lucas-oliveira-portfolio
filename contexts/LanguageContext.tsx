'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { pt } from '@/locales/pt'
import { en } from '@/locales/en'

type Language = 'pt' | 'en'
type Translations = typeof pt

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('pt')
  const [t, setT] = useState<Translations>(pt)

  useEffect(() => {
    // Load saved language from localStorage
    const saved = localStorage.getItem('language') as Language | null
    if (saved && (saved === 'pt' || saved === 'en')) {
      setLanguageState(saved)
      setT(saved === 'pt' ? pt : en)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    setT(lang === 'pt' ? pt : en)
    localStorage.setItem('language', lang)
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
