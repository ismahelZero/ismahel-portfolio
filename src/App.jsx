import React, { useEffect, useState } from 'react'
import ThreeBackground from './components/ThreeBackground'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Education from './components/sections/Education'

const App = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      const sections = ['home', 'about', 'experience', 'projects', 'education']
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 150 && rect.bottom >= 150
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 font-sans text-slate-200 selection:bg-cyan-500/30">
      <ThreeBackground />
      <Navbar activeSection={activeSection} isScrolled={isScrolled} />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Footer />
      </div>
    </div>
  )
}

export default App
