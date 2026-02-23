import React from 'react'
import { Github, Heart, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const scrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative z-10 mt-20 border-t border-white/10 bg-slate-950/50 pt-16 pb-8 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          {/* Left Side: Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src="/logo-name.svg"
              alt="Ismahel Zero Logo"
              className="mb-4 h-12 w-auto cursor-pointer opacity-80 transition-all duration-300 hover:scale-105 hover:opacity-100"
              onClick={() => scrollTo('home')}
            />
            <p className="max-w-sm text-center text-slate-400 md:text-left">
              Crafting immersive digital experiences and scalable enterprise solutions.
            </p>
          </div>

          {/* Right Side: Social Links */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="mb-4 font-bold text-white">Let's Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/ismahelZero"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-slate-800/50 p-3 text-slate-400 transition-all hover:-translate-y-1 hover:bg-white/10 hover:text-white"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/ismahel-zero-1053b4228/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-slate-800/50 p-3 text-slate-400 transition-all hover:-translate-y-1 hover:bg-cyan-500/20 hover:text-cyan-400"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:ismahel.zero94@gmail.com"
                className="rounded-full bg-slate-800/50 p-3 text-slate-400 transition-all hover:-translate-y-1 hover:bg-purple-500/20 hover:text-purple-400"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Bar: Copyright */}
      <div className="mt-16 border-t border-white/10 pt-8">
        <div
          className={
            'mx-auto flex max-w-7xl flex-col items-center justify-between px-6 sm:flex-row'
          }
        >
          <p className="font-mono text-sm text-slate-500">
            © {new Date().getFullYear()} Ismahel Zero. All rights reserved.
          </p>
          <p className="mt-2 flex items-center gap-1 font-mono text-sm text-slate-500 sm:mt-0">
            Built with React <Heart size={14} className="text-cyan-500" /> & Tailwind
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
