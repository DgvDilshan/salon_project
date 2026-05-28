export default function Testimonial() {
  return (
    <section className="bg-stone-900">
      <div className="mx-auto w-full max-w-6xl px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-stone-800 text-stone-600">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
              <path d="M12 2l2.35 5.2 5.65.52-4.25 3.72 1.27 5.56L12 15.9 6.98 18l1.27-5.56L4 8.72l5.65-.52L12 2Z" />
            </svg>
          </div>

          <p className="font-serif text-xl leading-8 text-stone-100 md:text-2xl">
            “An absolute masterclass in luxury. The attention to detail at Silvester Salon is beyond anything I’ve
            experienced in London or Paris. It’s not just a service, it’s a transformation.”
          </p>

          <p className="mt-6 text-[11px] font-semibold tracking-[0.28em] text-amber-400">— ELEANOR WHITMORE</p>
        </div>
      </div>
    </section>
  )
}
