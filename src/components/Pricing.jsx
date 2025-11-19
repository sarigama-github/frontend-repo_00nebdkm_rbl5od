export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Prezzi semplici e trasparenti</h2>
          <p className="text-slate-600 mt-2">Inizia gratis. Aggiorna quando cresci.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: 'Free',
              price: '0€',
              features: ['Fino a 5 QR dinamici', '1 utente', 'Template base']
            },
            {
              name: 'Pro',
              featured: true,
              price: '19€',
              features: ['QR illimitati', 'Analytics avanzate', 'Branding completo', 'Supporto prioritario']
            },
            {
              name: 'Business',
              price: '49€',
              features: ['Team & ruoli', 'SSO', 'Retargeting', 'SLA']
            }
          ].map((p) => (
            <div key={p.name} className={`rounded-2xl border p-6 shadow-sm ${p.featured ? 'border-slate-900 bg-gradient-to-br from-slate-900 to-slate-800 text-white' : 'border-slate-200 bg-white'}`}>
              <div className="flex items-baseline justify-between mb-4">
                <h3 className={`text-lg font-semibold ${p.featured ? 'text-white' : 'text-slate-900'}`}>{p.name}</h3>
                <span className={`text-3xl font-bold ${p.featured ? 'text-white' : 'text-slate-900'}`}>{p.price}<span className="text-base font-normal">/mese</span></span>
              </div>
              <ul className="space-y-2 mb-6">
                {p.features.map((f) => (
                  <li key={f} className={`${p.featured ? 'text-white/90' : 'text-slate-700'}`}>• {f}</li>
                ))}
              </ul>
              <a href="#cta" className={`block w-full text-center py-2 rounded-lg ${p.featured ? 'bg-white text-slate-900 hover:bg-slate-200' : 'bg-slate-900 text-white hover:bg-slate-800'}`}>Scegli {p.name}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
