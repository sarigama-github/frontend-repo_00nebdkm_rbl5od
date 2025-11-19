export default function FAQ() {
  const faqs = [
    {
      q: 'Cos\u2019è un QR Code dinamico?',
      a: 'Un QR dinamico ti permette di cambiare la destinazione anche dopo la stampa, senza dover ristampare i codici.'
    },
    {
      q: 'Posso personalizzare il design?',
      a: 'Sì, puoi scegliere colori, loghi, cornici e stili per allinearti al tuo brand.'
    },
    {
      q: 'Quali statistiche sono disponibili?',
      a: 'Vedi numero di scansioni, geolocalizzazione approssimativa, dispositivo, orario e performance per campagna.'
    },
    {
      q: 'Come funziona la prova gratuita?',
      a: 'Hai 14 giorni per testare tutte le funzionalità senza carta di credito. Puoi annullare in qualsiasi momento.'
    },
  ]

  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-10">Domande frequenti</h2>
        <div className="divide-y divide-slate-200 rounded-2xl bg-white border border-slate-200">
          {faqs.map((f, i) => (
            <details key={i} className="group p-6">
              <summary className="cursor-pointer list-none flex items-center justify-between">
                <span className="font-medium text-slate-900">{f.q}</span>
                <span className="text-slate-500 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
