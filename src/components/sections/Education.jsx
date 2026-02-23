import React from 'react'
import { Award, Globe, GraduationCap } from 'lucide-react'

const Education = () => {
  const glassClass =
    'bg-slate-900/40 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl p-8 transition-all duration-500 hover:bg-slate-800/50 hover:border-cyan-500/30'

  return (
    <section id="education" className="py-24">
      <div className="mb-16 flex items-center gap-4">
        <GraduationCap className="text-cyan-400" size={32} />
        <h2 className="text-4xl font-bold tracking-tight text-white">Academic Background</h2>
        <div className="ms-4 mt-3 h-px flex-grow bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className={`${glassClass} border-t-4 border-t-cyan-500`}>
          <div className="mb-6 flex items-start justify-between">
            <div>
              <h3 className="mb-2 text-2xl font-bold text-white">University of Salahaddin</h3>
              <p className="text-lg font-semibold text-cyan-400">BSc. Computer Science</p>
            </div>
            <Award size={40} className="text-cyan-500/40" />
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3">
              <span className="text-slate-400">Graduation</span>
              <span className="font-mono text-white">2020 - 2024</span>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-cyan-500/20 bg-cyan-500/10 p-3 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
              <span className="font-bold text-cyan-200">Class Rank</span>
              <span className="text-xl font-black text-white">
                8th <span className="text-sm font-normal text-slate-400">/ 98</span>
              </span>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3">
              <span className="text-slate-400">Final Score</span>
              <span className="font-mono font-bold text-white">78%</span>
            </div>
            <p className="mt-4 leading-relaxed text-slate-300">
              Directed and managed over ten different student project teams. Provided voluntary
              tutoring and academic support for junior students.
            </p>
          </div>
        </div>

        <div className={`${glassClass} border-t-4 border-t-purple-500`}>
          <div className="mb-6 flex items-start justify-between">
            <div>
              <h3 className="mb-2 text-2xl font-bold text-white">
                Shanghai Int. Studies University
              </h3>
              <p className="text-lg font-semibold text-purple-400">Software Training Internship</p>
            </div>
            <Globe size={40} className="text-purple-500/40" />
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3">
              <span className="text-slate-400">Location</span>
              <span className="font-mono text-white">Shanghai, China</span>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3">
              <span className="text-slate-400">Date</span>
              <span className="font-mono text-white">Summer 2023</span>
            </div>
            <p className="mt-4 leading-relaxed text-slate-300">
              Completed an intensive technical program focused on advanced software engineering and
              application development, collaborating on complex, practical coding projects in an
              international setting.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
