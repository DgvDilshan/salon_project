function FeatureIcon({ type }) {
  const common = 'h-6 w-6 text-amber-400'
  if (type === 'scissors') {
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
  }
  if (type === 'bottle') {
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
  }
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
}

const features = [
  {
    title: 'Personal Stylist',
    icon: 'scissors',
    body: 'Our expert stylists bring couture-level craftsmanship and help you reinvent your look with confidence.',
  },
  {
    title: 'Premium Products',
    icon: 'bottle',
    body: 'We exclusively use professional-grade products to nourish hair, elevate shine, and protect your style.',
  },
  {
    title: 'Luxury Experience',
    icon: 'star',
    body: 'From warm hospitality to meticulous details, every visit is designed to feel effortless and indulgent.',
  },
]

export default function Highlights() {
  return (
    <section id="features" className="bg-stone-900">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-4 py-14 md:grid-cols-3 md:gap-12">
        {features.map((f) => (
          <div key={f.title} className="text-center">
            <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center">
              <FeatureIcon type={f.icon} />
            </div>
            <h3 className="text-sm font-semibold tracking-wide text-stone-100">
              {f.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-stone-400">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
