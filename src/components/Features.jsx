import { BarChart3, Settings2, Palette, PencilRuler, Link2 } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Settings2,
      title: 'Destinazioni dinamiche',
      desc: 'Cambia il link di destinazione in qualsiasi momento senza ristampare i QR.'
    },
    {
      icon: BarChart3,
      title: 'Analytics avanzate',
      desc: 'Traccia scansioni per luogo, dispositivo, orario e campagne.'
    },
    {
      icon: Palette,
      title: 'Branding completo',
      desc: 'Colori, loghi, cornici e forme personalizzate per il tuo brand.'
    },
    {
      icon: PencilRuler,
      title: 'Editor visuale',
      desc: 'Genera landing dinamiche e micro-siti collegati ai tuoi QR.'
    },
    {
      icon: Link2,
      title: 'Short link & retargeting',
      desc: 'Crea short URL, UTM e regole di reindirizzamento intelligenti.'
    },
  ]

  return (
    <section id="features" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Tutto ciò che ti serve</h2>
          <p className="text-slate-600 mt-2">Dalla creazione alla misurazione: una piattaforma unica per i tuoi QR dinamici</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">{title}</h3>
              <p className="text-slate-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
