const feedback = [
  {
    quote:
      '“A premium experience from start to finish. The consultation was so detailed and my final look was perfect.”',
    name: '— NIMESHA PERERA',
  },
  {
    quote:
      '“Professional, friendly, and very clean. The team really cares about the small details. Highly recommended.”',
    name: '— KAVINDU FERNANDO',
  },
  {
    quote:
      '“Beautiful atmosphere and top service. I felt comfortable, confident, and the styling lasted for days.”',
    name: '— ISHANI SILVA',
  },
]

function Stars() {
  return (
    <div className="flex items-center justify-center gap-1 text-amber-400" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
          <path d="M12 2l2.35 5.2 5.65.52-4.25 3.72 1.27 5.56L12 15.9 6.98 18l1.27-5.56L4 8.72l5.65-.52L12 2Z" />
        </svg>
      ))}
    </div>
  )
}

export default function CustomerFeedback() {
  return (
    <section className="bg-stone-900">
      <div className="mx-auto w-full max-w-6xl px-4 py-16">
        <div className="text-center">
          <p className="text-[11px] font-semibold tracking-[0.28em] text-amber-400">CUSTOMER FEEDBACK</p>
          <h2 className="mt-3 animate-fade-up font-serif text-4xl text-white motion-reduce:animate-none">
            What Clients Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-stone-300">
            Real experiences from clients who trust Silvester Salon for modern grooming, beauty, and premium care.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {feedback.map((item, index) => (
            <div
              key={item.name}
              className="animate-fade-up rounded-sm border border-stone-800 bg-stone-950/20 p-7 text-center motion-reduce:animate-none"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <Stars />
              <p className="mt-5 font-serif text-lg leading-8 text-stone-100">{item.quote}</p>
              <p className="mt-6 text-[11px] font-semibold tracking-[0.28em] text-amber-400">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
