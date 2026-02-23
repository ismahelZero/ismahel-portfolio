import React from 'react'
import { ChevronDown, Github, Linkedin } from 'lucide-react'

const Hero = () => {
  const scrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="flex min-h-screen items-center justify-center pt-20">
      <div className="w-full text-center">
        <div className="mb-4 inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 font-mono text-sm text-cyan-300 shadow-[0_0_10px_rgba(6,182,212,0.2)]">
          <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-cyan-400"></span>
          Available for new opportunities
        </div>
        <h1 className="mb-6 text-6xl font-black tracking-tight text-white drop-shadow-2xl md:text-8xl">
          Ismahel{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Zero.
          </span>
        </h1>
        <h2 className="mb-8 text-3xl font-bold text-slate-300 drop-shadow-lg md:text-5xl">
          Crafting Immersive Web Realities.
        </h2>
        <p className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed font-light text-slate-400 md:text-xl">
          I'm a <b className="font-semibold text-white">Lead Front-End Developer</b> specializing in
          scalable enterprise SPAs, complex dashboards, and breathtaking 3D web animations using{' '}
          <span className="text-cyan-400">Three.js</span> &{' '}
          <span className="text-cyan-400">GSAP</span>.
        </p>
        <div className="mb-20 flex justify-center gap-6">
          <a
            href="https://github.com/ismahelZero"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 bg-white/5 p-4 text-slate-300 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:text-white"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/ismahel-zero-1053b4228"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 bg-white/5 p-4 text-slate-300 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:bg-cyan-500/10 hover:text-cyan-400"
          >
            <Linkedin size={24} />
          </a>
        </div>
        <button
          onClick={() => scrollTo('about')}
          className="animate-bounce text-slate-500 transition-colors hover:text-cyan-400"
        >
          <ChevronDown size={36} className="mx-auto" />
        </button>
      </div>
    </section>
  )
}

export default Hero
