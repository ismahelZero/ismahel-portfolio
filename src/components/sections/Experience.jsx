import React from 'react'
import { Briefcase, Star } from 'lucide-react'

const Experience = () => {
  const glassClass =
    'bg-slate-900/40 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl p-8 transition-all duration-500 hover:bg-slate-800/50 hover:border-cyan-500/30'

  return (
    <section id="experience" className="py-24">
      <div className="mb-16 flex items-center gap-4">
        <Briefcase className="text-cyan-400" size={32} />
        <h2 className="text-4xl font-bold tracking-tight text-white">Professional Experience</h2>
        <div className="ms-4 mt-3 h-px flex-grow bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
      </div>

      <div className="space-y-10">
        {/* Caffeine */}
        <div className={`${glassClass} group relative overflow-hidden`}>
          <div className="pointer-events-none absolute top-0 right-0 -mt-20 -mr-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-[80px] transition-colors group-hover:bg-cyan-500/20"></div>

          <div className="relative z-10 mb-8 flex flex-col justify-between border-b border-white/10 pb-6 md:flex-row md:items-start">
            <div>
              <h3 className="mb-2 text-3xl font-black text-white">Caffeine</h3>
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xl font-bold text-cyan-400">Lead Front-End Developer</span>
                <span className="flex items-center gap-1 rounded-full border border-amber-500/30 bg-gradient-to-r from-amber-500/20 to-orange-500/20 px-3 py-1 text-xs font-bold tracking-wider text-amber-300 uppercase shadow-[0_0_10px_rgba(245,158,11,0.2)]">
                  <Star size={12} fill="currentColor" /> Promoted Dec 2025
                </span>
              </div>
              <p className="mt-1 font-medium text-slate-400">
                Front-End Developer (Jun 2025 - Dec 2025)
              </p>
            </div>
            <span className="mt-4 rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2 font-mono text-sm text-slate-300 backdrop-blur-sm md:mt-0">
              Jun 2025 - Present
            </span>
          </div>

          <ul className="relative z-10 space-y-4 text-lg text-slate-300">
            <li className="flex gap-4">
              <span className="mt-1 text-cyan-400">▹</span>
              <div>
                Architected the migration of the <b>MGR Admin Dashboard</b> from Vue 2 to Vue 3,
                successfully converting a legacy Multi-Page Application (MPA) to a highly performant
                Single Page Application (SPA).
              </div>
            </li>
            <li className="flex gap-4">
              <span className="mt-1 text-cyan-400">▹</span>
              <div>
                Developed a comprehensive, CEO/Manager-level reporting dashboard featuring advanced
                data visualizations, interactive charts, and complex multi-tier approval and review
                filtering workflows.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="mt-1 text-cyan-400">▹</span>
              <div>
                Built and launched the responsive <b>Sencor Iraq</b> e-commerce platform, focusing
                on seamless product discovery and optimal user shopping experiences.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="mt-1 text-cyan-400">▹</span>
              <div>
                Developed the fully immersive <b>ABS</b> web experience utilizing <b>GSAP</b> and{' '}
                <b>Three.js</b> to deliver cutting-edge visual effects and interactive environments.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="mt-1 text-cyan-400">▹</span>
              <div>
                Wrote and executed comprehensive front-end tests to ensure application reliability,
                maintainability, and zero-defect deployments across all modules.
              </div>
            </li>
          </ul>
        </div>

        {/* RIGT */}
        <div className={glassClass}>
          <div className="mb-8 flex flex-col justify-between border-b border-white/10 pb-6 md:flex-row md:items-start">
            <div>
              <h3 className="mb-2 text-3xl font-black text-white">RIGT</h3>
              <p className="text-xl font-bold text-cyan-400">Front-End Developer</p>
            </div>
            <span className="mt-4 rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2 font-mono text-sm text-slate-300 backdrop-blur-sm md:mt-0">
              May 2024 - Jul 2025
            </span>
          </div>

          <ul className="space-y-4 text-lg text-slate-300">
            <li className="flex gap-4">
              <span className="mt-1 text-cyan-400">▹</span>
              <div>
                Designed and implemented robust customer, admin, and seller modules for the{' '}
                <b>Arbela</b> e-commerce project leveraging Vue.js (Vue 2 & 3), TypeScript, and
                Vuetify.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="mt-1 text-cyan-400">▹</span>
              <div>
                Developed the complete <b>RIGT corporate website</b> using Vue 3 and integrated it
                with a Strapi headless CMS backend, inclusive of comprehensive internationalization
                (i18n) support.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="mt-1 text-cyan-400">▹</span>
              <div>
                Spearheaded the front-end architecture for multiple critical systems, including the{' '}
                <b>Eventy</b> application dashboard and the robust <b>SIM Distribution</b> admin
                dashboard.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="mt-1 text-cyan-400">▹</span>
              <div>
                Engineered a proprietary library of reusable, dynamic UI components that
                significantly improved cross-team development efficiency and UI/UX consistency.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="mt-1 text-cyan-400">▹</span>
              <div>
                Maintained exceptionally high-quality code and delivery standards under aggressive
                deadlines and during periods of team transition.
              </div>
            </li>
          </ul>
        </div>

        {/* Dlopay */}
        <div className={glassClass}>
          <div className="mb-8 flex flex-col justify-between border-b border-white/10 pb-6 md:flex-row md:items-start">
            <div>
              <h3 className="mb-2 text-2xl font-black text-white">Dlopay Baran Company</h3>
              <p className="text-lg font-bold text-slate-400">Administrative Officer</p>
            </div>
            <span className="mt-4 rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2 font-mono text-sm text-slate-300 backdrop-blur-sm md:mt-0">
              2022 - 2023
            </span>
          </div>

          <ul className="space-y-4 text-lg text-slate-300">
            <li className="flex gap-4">
              <span className="mt-1 text-slate-500">▹</span> Managed various administrative tasks
              and office operations, contributing directly to the smooth functioning and efficiency
              of company workflows.
            </li>
            <li className="flex gap-4">
              <span className="mt-1 text-slate-500">▹</span> Handled precise data entry, detailed
              reporting, and documentation utilizing the Microsoft Office Suite to maintain accurate
              business records.
            </li>
            <li className="flex gap-4">
              <span className="mt-1 text-slate-500">▹</span> Performed routine troubleshooting of
              office systems and collaborated effectively with team members to resolve operational
              bottlenecks.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Experience
