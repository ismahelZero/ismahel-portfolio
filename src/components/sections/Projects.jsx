import React from 'react'
import {
  BarChart,
  Box,
  Calendar,
  Code,
  Cpu,
  CreditCard,
  ExternalLink,
  Globe,
  Rocket,
  ShoppingCart,
  Smartphone,
  Store,
} from 'lucide-react'

const Projects = () => {
  const projectCardClass =
    'bg-slate-900/40 backdrop-blur-xl border border-white/10 shadow-xl rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:bg-slate-800/60 hover:border-cyan-500/50 hover:shadow-cyan-500/10 flex flex-col h-full'

  const projects = [
    {
      title: 'MGR Admin Dashboard',
      icon: <BarChart size={32} className="text-cyan-400" />,
      description:
        'Migrated legacy Vue 2 MPA to a highly performant Vue 3 SPA. Features a CEO/Manager-level reporting dashboard with advanced data visualizations and complex multi-tier approval workflows.',
      tech: ['Vue 3', 'SPA', 'TypeScript', 'Data Viz'],
    },
    {
      title: 'ABS 3D Web Experience',
      icon: <Box size={32} className="text-purple-400" />,
      description:
        'Developed a fully immersive and highly animated web experience utilizing cutting-edge visual effects, custom 3D models, and smooth scroll-based interactions.',
      tech: ['Three.js', 'GSAP', 'JavaScript', 'Animations'],
    },
    {
      title: 'Sencor Iraq E-Commerce',
      icon: <ShoppingCart size={32} className="text-blue-400" />,
      description:
        'Built and launched a comprehensive, responsive e-commerce platform optimizing the user shopping experience, cart logic, and product discovery.',
      tech: ['React/Vue', 'E-Commerce', 'UI/UX', 'API'],
    },
    {
      title: 'Arbela',
      icon: <Store size={32} className="text-amber-400" />,
      description:
        'Designed and implemented comprehensive customer, admin, and seller modules for a multi-vendor e-commerce project with complex role-based access.',
      tech: ['Vue.js', 'TypeScript', 'Vuetify'],
    },
    {
      title: 'RIGT Corporate Website',
      icon: <Globe size={32} className="text-emerald-400" />,
      description:
        'Developed the complete front-end independently using modern architecture. Integrated with a Strapi headless CMS backend and implemented full internationalization (i18n).',
      tech: ['Vue 3', 'Strapi CMS', 'i18n', 'Tailwind'],
    },
    {
      title: 'FPS Calculator',
      icon: <Rocket size={32} className="text-pink-400" />,
      description:
        'An independent personal web application built from the ground up. Managed all phases of the front-end lifecycle and technical design entirely independently.',
      tech: ['React/Vue', 'SPA Architecture', 'Personal App'],
    },
    {
      title: 'AI Waste Classifier',
      icon: <Cpu size={32} className="text-green-400" />,
      description:
        'Integrated real-time AI image classification with custom IoT hardware solutions to automatically and accurately categorize physical waste materials on the fly.',
      tech: ['AI/ML', 'IoT', 'Hardware', 'Python/C++'],
    },
    {
      title: 'Nass Pay Dashboard',
      icon: <CreditCard size={32} className="text-indigo-400" />,
      description:
        'Developed and delivered a robust Pay-by-link administrative dashboard under aggressive deadlines, handling secure financial data displays.',
      tech: ['Vue.js', 'Finance APIs', 'Security'],
    },
    {
      title: 'Eventy Application',
      icon: <Calendar size={32} className="text-orange-400" />,
      description:
        'Spearheaded the front-end architecture for an event management application, focusing on real-time updates and seamless user scheduling interfaces.',
      tech: ['Vue/React', 'Real-time', 'Dashboard'],
    },
    {
      title: 'SIM Distribution Admin',
      icon: <Smartphone size={32} className="text-teal-400" />,
      description:
        'Built a highly detailed admin dashboard dedicated to tracking, managing, and distributing telecommunication SIM inventories across vendors.',
      tech: ['SPA', 'Inventory Logic', 'Data Tables'],
    },
  ]

  return (
    <section id="projects" className="py-24">
      <div className="mb-16 flex items-center gap-4">
        <Code className="text-cyan-400" size={32} />
        <h2 className="text-4xl font-bold tracking-tight text-white">Featured Projects</h2>
        <div className="ms-4 mt-3 h-px flex-grow bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className={projectCardClass}>
            <div className="mb-6 flex items-start justify-between">
              <div className="rounded-xl border border-white/10 bg-white/5 p-3 shadow-inner">
                {project.icon}
              </div>
              {project.title === 'Sencor Iraq E-Commerce' && (
                <a
                  href="https://www.sencoriraq.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-500 transition-colors hover:text-cyan-400"
                >
                  <ExternalLink size={20} />
                </a>
              )}
              {project.title === 'FPS Calculator' && (
                <a
                  href="https://www.myfps.app"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-500 transition-colors hover:text-cyan-400"
                >
                  <ExternalLink size={20} />
                </a>
              )}
              {project.title === 'Arbela' && (
                <a
                  href="https://www.arbela.store"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-500 transition-colors hover:text-cyan-400"
                >
                  <ExternalLink size={20} />
                </a>
              )}{' '}
              {project.title === 'RIGT Corporate Website' && (
                <a
                  href="https://www.rigt.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-500 transition-colors hover:text-cyan-400"
                >
                  <ExternalLink size={20} />
                </a>
              )}
            </div>

            <h3 className="mb-4 text-2xl font-bold text-white transition-colors group-hover:text-cyan-400">
              {project.title}
            </h3>

            <p className="mb-8 flex-grow leading-relaxed text-slate-400">{project.description}</p>

            <div className="mt-auto flex flex-wrap gap-2 border-t border-white/5 pt-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded border border-cyan-900/50 bg-cyan-950/40 px-2 py-1 font-mono text-xs text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
