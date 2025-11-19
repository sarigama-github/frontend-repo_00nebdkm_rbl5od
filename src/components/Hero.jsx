import { CheckCircle2, ArrowRight, QrCode } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 mb-6">
              <QrCode className="w-4 h-4" />
              <span className="text-sm font-medium">SaaS per QR Code dinamici</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-4">
              Trasforma i tuoi QR Code in esperienze dinamiche
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              Crea, gestisci e aggiorna QR code senza ristampare. Traccia le scansioni, personalizza il design e collega contenuti flessibili in tempo reale.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Modifica la destinazione in qualsiasi momento',
                'Statistiche di scansione in tempo reale',
                'QR brandizzati e personalizzabili',
              ].map((t) => (
                <li key={t} className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  {t}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a href="#cta" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-slate-900 text-white hover:bg-slate-800">
                Inizia gratis
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a href="#features" className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50">
                Scopri le funzionalità
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 p-1 shadow-xl">
              <div className="w-full h-full rounded-[14px] bg-white flex items-center justify-center">
                <div className="p-6 text-center">
                  <div className="mx-auto w-40 h-40 bg-slate-100 rounded-xl flex items-center justify-center mb-4">
                    <QrCode className="w-16 h-16 text-slate-700" />
                  </div>
                  <p className="text-slate-600">Dashboard semplice per creare e gestire i tuoi QR dinamici</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white border border-slate-200 rounded-xl shadow-lg p-4">
              <p className="text-sm text-slate-600">Esempio: qrdynamic.io/mio-brand</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
