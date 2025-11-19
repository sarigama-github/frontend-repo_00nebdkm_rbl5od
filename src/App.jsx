import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <footer className="py-10 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500">© {new Date().getFullYear()} QRDynamic. Tutti i diritti riservati.</p>
          <div className="flex items-center gap-6 text-slate-500 text-sm">
            <a href="#" className="hover:text-slate-900">Termini</a>
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Contatti</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
