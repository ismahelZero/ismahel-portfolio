import React from 'react'
import { Mail } from 'lucide-react'

const Navbar = ({ activeSection, isScrolled }) => {
  const scrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'border-b border-white/5 bg-slate-950/80 py-4 shadow-lg shadow-cyan-900/20 backdrop-blur-md' : 'bg-transparent py-6'}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <span
          className="cursor-pointer bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-2xl font-black tracking-tighter text-transparent"
          onClick={() => scrollTo('home')}
        >
          IZ.
        </span>
        <div className="hidden space-x-8 text-sm font-semibold tracking-wide uppercase md:flex">
          {['About', 'Experience', 'Projects', 'Education'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className={`transition-colors hover:text-cyan-400 ${activeSection === item.toLowerCase() ? 'text-cyan-400' : 'text-slate-400'}`}
            >
              {item}
            </button>
          ))}
        </div>
        <a
          href="mailto:ismahel.zero94@gmail.com"
          className="hidden items-center gap-2 rounded-full border border-cyan-500/50 px-5 py-2.5 text-sm font-bold text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all hover:bg-cyan-500/10 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] md:flex"
        >
          <Mail size={16} /> Let's Talk
        </a>
      </div>
    </nav>
  )
}

export default Navbar
