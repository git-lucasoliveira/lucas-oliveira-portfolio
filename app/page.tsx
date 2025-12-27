import dynamic from 'next/dynamic'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import LoadingScreen from '@/components/effects/LoadingScreen'
import BackToTop from '@/components/effects/BackToTop'
import AnimatedBackground from '@/components/effects/AnimatedBackground'

// Lazy load below-the-fold sections for better performance
const AboutSection = dynamic(() => import('@/components/sections/AboutSection'), {
  loading: () => <div className="min-h-screen" />,
})
const SkillsSection = dynamic(() => import('@/components/sections/SkillsSection'), {
  loading: () => <div className="min-h-screen" />,
})
const ProjectsSection = dynamic(() => import('@/components/sections/ProjectsSection'), {
  loading: () => <div className="min-h-screen" />,
})
const ExperienceSection = dynamic(() => import('@/components/sections/ExperienceSection'), {
  loading: () => <div className="min-h-screen" />,
})
const EducationSection = dynamic(() => import('@/components/sections/EducationSection'), {
  loading: () => <div className="min-h-screen" />,
})
const ContactSection = dynamic(() => import('@/components/sections/ContactSection'), {
  loading: () => <div className="min-h-screen" />,
})

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <LoadingScreen />
      <Header />
      <main className="overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
