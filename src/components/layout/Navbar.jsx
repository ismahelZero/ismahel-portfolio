import React, { useState } from 'react'
import { Mail, Menu, X } from 'lucide-react'

const Navbar = ({ activeSection, isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false) // Close menu automatically when a link is clicked
  }

  const navLinks = ['About', 'Experience', 'Projects', 'Education']

  return (
    // The entire header now gets ONE unified background and blur effect
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-slate-950/90 shadow-lg shadow-cyan-900/20 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      {/* Navbar Content */}
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen ? 'py-4' : 'py-6'
        }`}
      >
        {/* Logo */}
        <img
          src="/logo.svg"
          alt="Ismahel Zero Logo"
          className="h-10 w-auto cursor-pointer transition-transform hover:scale-105"
          onClick={() => scrollTo('home')}
        />

        {/* Desktop Menu */}
        <div className="hidden space-x-8 text-sm font-semibold tracking-wide uppercase md:flex">
          {navLinks.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className={`transition-colors hover:text-cyan-400 ${
                activeSection === item.toLowerCase() ? 'text-cyan-400' : 'text-slate-400'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Desktop Contact Button */}
        <a
          href="mailto:ismahel.zero94@gmail.com"
          className="hidden items-center gap-2 rounded-full border border-cyan-500/50 px-5 py-2.5 text-sm font-bold text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all hover:bg-cyan-500/10 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] md:flex"
        >
          <Mail size={16} /> Let's Talk
        </a>

        {/* Mobile Hamburger Icon */}
        <button
          className="relative z-10 text-slate-300 transition-colors hover:text-cyan-400 md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu (Now inside the normal flow, so the parent header expands with it) */}
      <div
        className={`w-full overflow-hidden transition-all duration-300 md:hidden ${
          isMobileMenuOpen ? 'max-h-96 py-6 opacity-100' : 'max-h-0 py-0 opacity-0'
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          {navLinks.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className={`text-lg font-semibold tracking-wide uppercase transition-colors ${
                activeSection === item.toLowerCase() ? 'text-cyan-400' : 'text-slate-400'
              }`}
            >
              {item}
            </button>
          ))}
          <a
            href="mailto:ismahel.zero94@gmail.com"
            className="mt-2 flex items-center gap-2 rounded-full border border-cyan-500/50 bg-cyan-500/10 px-6 py-3 text-sm font-bold text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all active:scale-95"
          >
            <Mail size={18} /> Let's Talk
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
