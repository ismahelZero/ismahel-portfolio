import React from 'react'
import { Database, Globe, Monitor, Terminal, User } from 'lucide-react'

const About = () => {
  const glassClass =
    'bg-slate-900/40 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl p-8 transition-all duration-500 hover:bg-slate-800/50 hover:border-cyan-500/30'

  return (
    <section id="about" className="py-24">
      <div className="mb-16 flex items-center gap-4">
        <User className="text-cyan-400" size={32} />
        <h2 className="text-4xl font-bold tracking-tight text-white">About Me</h2>
        <div className="ms-4 mt-3 h-px flex-grow bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
      </div>

      <div className="grid gap-12 lg:grid-cols-12">
        <div className={`lg:col-span-7 ${glassClass}`}>
          <p className="mb-6 text-lg leading-relaxed text-slate-300">
            As a highly motivated Lead Front-End Developer based in Erbil, I specialize in bridging
            the gap between intricate backend architectures and flawless user experiences. I thrive
            on migrating complex legacy MPAs into lightning-fast, modern SPAs.
          </p>
          <p className="mb-6 text-lg leading-relaxed text-slate-300">
            Whether I'm engineering multi-tier approval workflows for CEO-level dashboards or
            building fully animated 3D environments, I treat code as a craft. I believe in writing
            robust tests, optimizing every render cycle, and ensuring pixel-perfect UI/UX
            consistency across all platforms.
          </p>

          <div className="mt-8 border-t border-white/10 pt-8">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-white">
              <Globe className="text-cyan-400" size={20} /> Spoken Languages
            </h3>
            <div className="flex flex-wrap gap-4">
              <div className="rounded-lg border border-slate-700/50 bg-slate-800/50 px-4 py-2">
                <span className="font-bold text-white">Kurdish</span>{' '}
                <span className="ml-2 text-sm text-cyan-400">Native</span>
              </div>
              <div className="rounded-lg border border-slate-700/50 bg-slate-800/50 px-4 py-2">
                <span className="font-bold text-white">English</span>{' '}
                <span className="ml-2 text-sm text-cyan-400">Upper Int.</span>
              </div>
              <div className="rounded-lg border border-slate-700/50 bg-slate-800/50 px-4 py-2">
                <span className="font-bold text-white">Arabic</span>{' '}
                <span className="ml-2 text-sm text-cyan-400">Lower Int.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6 lg:col-span-5">
          <div className={`${glassClass} !p-6`}>
            <h3 className="mb-6 flex items-center gap-2 text-xl font-bold text-white">
              <Terminal className="text-cyan-400" size={20} /> Core Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {['Vue.js (2 & 3)', 'React', 'Next.js', 'Nuxt.js', 'TypeScript', 'JavaScript'].map(
                (tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-cyan-500/20 bg-cyan-500/10 px-3 py-1.5 font-mono text-sm text-cyan-200 shadow-sm shadow-cyan-900/20"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>

          <div className={`${glassClass} !p-6`}>
            <h3 className="mb-6 flex items-center gap-2 text-xl font-bold text-white">
              <Monitor className="text-cyan-400" size={20} /> Animation & UI
            </h3>
            <div className="flex flex-wrap gap-2">
              {['Three.js', 'GSAP', 'Tailwind CSS', 'Vuetify', 'Framer Motion'].map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-purple-500/20 bg-purple-500/10 px-3 py-1.5 font-mono text-sm text-purple-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className={`${glassClass} !p-6`}>
            <h3 className="mb-6 flex items-center gap-2 text-xl font-bold text-white">
              <Database className="text-cyan-400" size={20} /> Backend & Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {['Strapi (CMS)', 'PHP', 'MySQL', 'C++', 'Python', 'Git/GitHub'].map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 font-mono text-sm text-blue-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
