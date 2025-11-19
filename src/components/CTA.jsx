export default function CTA() {
  return (
    <section id="cta" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Pronto a creare il tuo primo QR dinamico?</h2>
        <p className="text-slate-300 mb-6">Nessuna carta di credito richiesta. Inizia in 60 secondi.</p>
        <form className="max-w-md mx-auto flex gap-3">
          <input type="email" placeholder="La tua email" className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button type="submit" className="px-5 py-3 rounded-lg bg-white text-slate-900 font-semibold hover:bg-slate-100">Crea account</button>
        </form>
        <p className="text-slate-400 text-sm mt-3">Prova gratuita di 14 giorni</p>
      </div>
    </section>
  )
}
