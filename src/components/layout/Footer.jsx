import React from 'react'
import { Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-white/10 py-12 text-center">
      <p className="mb-4 font-mono text-sm text-slate-500">Designed & Built by Ismahel Zero</p>
      <div className="flex justify-center gap-6">
        <a
          href="mailto:ismahel.zero94@gmail.com"
          className="flex items-center gap-2 text-slate-400 transition-colors hover:text-cyan-400"
        >
          <Mail size={18} /> ismahel.zero94@gmail.com
        </a>
      </div>
    </footer>
  )
}

export default Footer
