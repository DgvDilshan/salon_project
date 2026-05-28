function PillarIcon({ type }) {
  const common = 'h-6 w-6 text-amber-500'

  switch (type) {
    case 'scissors':
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
          <path
            d="M6.5 7.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm0 14a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M8.2 6.2 21 18.9M8.2 17.8 14.2 11.8"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M16.4 9.6 21 5.1"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'bottle':
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
          <path
            d="M10 2h4v3l1 1v4.2c0 .6.24 1.18.66 1.6l2.02 2.02c.42.42.66 1 .66 1.6V20a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3.58c0-.6.24-1.18.66-1.6l2.02-2.02c.42-.42.66-1 .66-1.6V6l1-1V2Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M9 2h6"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'star':
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
          <path
            d="M12 3l2.35 5.2 5.65.52-4.25 3.72 1.27 5.56L12 15.9 6.98 18l1.27-5.56L4 8.72l5.65-.52L12 3Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'leaf':
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
          <path
            d="M20 4c-6.5 0-13 4.5-13 12 0 2.5 2 4 4 4 7.5 0 9-6.5 9-16Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M7 20c1-5 6-9 13-12"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'spark':
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
          <path
            d="M12 2l1.2 6.1L20 9.3l-6.1 1.2L12 17l-1.9-6.5L4 9.3l6.8-1.2L12 2Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M19.5 14.5 20 17l2.5.5L20 18l-.5 2.5L19 18l-2.5-.5L19 17l.5-2.5Z"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinejoin="round"
          />
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
          <path
            d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M12 7v10"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      )
  }
}

const pillars = [
  {
    title: 'Expert Stylists',
    icon: 'scissors',
    body: 'Precision, artistry, and consultation-led styling for a look that fits you.',
  },
  {
    title: 'Premium Products',
    icon: 'bottle',
    body: 'Professional-grade care designed to protect, nourish, and elevate shine.',
  },
  {
    title: 'Luxury Experience',
    icon: 'star',
    body: 'A calm, refined atmosphere with warm hospitality and meticulous details.',
  },
  {
    title: 'Sustainable Beauty',
    icon: 'leaf',
    body: 'Thoughtful product choices and practices that respect hair and environment.',
  },
  {
    title: 'Personalized Care',
    icon: 'spark',
    body: 'Tailored recommendations and routines to keep your style effortless.',
  },
  {
    title: 'Modern Techniques',
    icon: 'spark',
    body: 'On-trend methods with timeless finishes—crafted for real life.',
  },
]

export default function Pillars() {
  return (
    <section className="bg-stone-100">
      <div className="mx-auto w-full max-w-6xl px-4 py-16">
        <div className="text-center">
          <p className="text-[11px] font-semibold tracking-[0.28em] text-amber-600">UNRIVALED STANDARDS</p>
          <h2 className="mt-3 font-serif text-4xl text-stone-900">Our Core Pillars</h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="text-center">
              <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center">
                <PillarIcon type={p.icon} />
              </div>
              <h3 className="text-sm font-semibold tracking-wide text-stone-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-6 text-stone-600">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
