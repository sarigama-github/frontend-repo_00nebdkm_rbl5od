import { Menu, QrCode } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#features', label: 'Funzionalità' },
    { href: '#how', label: 'Come funziona' },
    { href: '#pricing', label: 'Prezzi' },
    { href: '#faq', label: 'FAQ' },
  ]

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        <a href="#" className="flex items-center gap-2 group">
          <div className="p-2 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md group-hover:scale-105 transition-transform">
            <QrCode className="w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">QRDynamic</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-slate-600 hover:text-slate-900 transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#cta" className="inline-flex items-center px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors">
            Prova gratuita
          </a>
        </nav>

        <button className="md:hidden p-2 rounded-lg hover:bg-slate-100" onClick={() => setOpen((o) => !o)} aria-label="Menu">
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block py-2 text-slate-700">
                {item.label}
              </a>
            ))}
            <a href="#cta" onClick={() => setOpen(false)} className="block w-full text-center py-2 rounded-lg bg-slate-900 text-white">
              Prova gratuita
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
