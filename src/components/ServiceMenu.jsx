const menu = [
  {
    name: 'Signature Cut & Style',
    price: '£120',
    desc: 'Precision cut, wash, blow-dry, and a signature finish tailored to your hair texture and lifestyle.',
  },
  {
    name: 'Balayage or Gloss',
    price: '£250',
    desc: 'Dimensional color with a custom glaze for seamless tone, radiance, and long-lasting vibrancy.',
  },
  {
    name: 'Full Color Transformation',
    price: '£180',
    desc: 'Complete color refresh or transformation using premium formulas for healthy-looking shine.',
  },
  {
    name: 'Silk Press & Finish',
    price: '£70',
    desc: 'Silky smooth finish with heat protection and a polished, long-lasting style.',
  },
  {
    name: 'Event Styling',
    price: '£95',
    desc: 'Elegant up-do or polished waves for weddings, shoots, and special occasions.',
  },
  {
    name: 'Bridal Consultation',
    price: '£50',
    desc: 'A tailored consultation to plan your wedding-day look with trials and styling guidance.',
  },
]

function MenuItem({ name, price, desc }) {
  return (
    <div className="group relative rounded-sm border border-stone-200/70 bg-white p-6 shadow-sm transition will-change-transform hover:-translate-y-1 hover:border-stone-300 hover:shadow-md focus-within:border-stone-300 focus-within:ring-2 focus-within:ring-amber-400/40 motion-reduce:transform-none motion-reduce:transition-none">
      <div className="flex items-start justify-between gap-4">
        <h4 className="font-serif text-lg text-stone-900">{name}</h4>
        <span className="text-sm font-semibold text-stone-900">{price}</span>
      </div>

      <p className="mt-2 text-sm leading-6 text-stone-600">{desc}</p>

      <div className="mt-5 flex items-center justify-between gap-4">
        <div className="h-px flex-1 bg-stone-200/70 transition-colors group-hover:bg-amber-400/60 motion-reduce:transition-none" />
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-sm border border-stone-200 bg-white px-4 py-2 text-[11px] font-semibold tracking-[0.22em] text-stone-800 transition-colors hover:border-amber-300 hover:text-stone-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60 motion-reduce:transition-none"
        >
          BOOK
          <span className="transition-transform group-hover:translate-x-1 motion-reduce:transition-none">
            →
          </span>
        </button>
      </div>
    </div>
  )
}

export default function ServiceMenu() {
  const left = menu.slice(0, 3)
  const right = menu.slice(3)

  return (
    <section id="services" className="bg-stone-100">
      <div className="mx-auto w-full max-w-6xl px-4 py-16">
        <div className="text-center">
          <h2 className="font-serif text-4xl text-stone-900">Service Menu</h2>
          <p className="mt-2 text-[11px] font-semibold tracking-[0.28em] text-stone-500">
            CURATED FOR EXCELLENCE
          </p>

          <div className="mt-8 flex items-center justify-center gap-8 text-[11px] font-semibold tracking-[0.25em] text-stone-500">
            <span className="text-amber-600">WOMEN</span>
            <span>MEN</span>
            <span>TREATMENTS</span>
          </div>
          <div className="mx-auto mt-3 h-px w-10 bg-amber-500/70" />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 gap-x-16 md:grid-cols-2">
          <div>
            {left.map((item, index) => (
              <div
                key={item.name}
                className="animate-fade-up motion-reduce:animate-none"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <MenuItem {...item} />
              </div>
            ))}
          </div>
          <div>
            {right.map((item, index) => (
              <div
                key={item.name}
                className="animate-fade-up motion-reduce:animate-none"
                style={{ animationDelay: `${(index + left.length) * 70}ms` }}
              >
                <MenuItem {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
