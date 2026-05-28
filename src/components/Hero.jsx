import salonHero from '../assets/salon-hero.jpg'

import HERO from '../assets/hero.mp4'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden bg-stone-950 md:min-h-screen"
    >
      <div className="pointer-events-none absolute inset-0">
        <video
          className="absolute inset-0 h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={salonHero}
          aria-hidden="true"
        >
          <source src={HERO} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-stone-950/55" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-6xl px-4 pb-16 pt-28 md:min-h-screen md:pb-24 md:pt-36">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
          <div className="text-left">
            <p className="mb-3 text-[11px] font-semibold tracking-[0.25em] text-amber-200/90">
              SILVESTER SALON
            </p>
            <h1 className="font-serif text-4xl leading-[1.05] text-white md:text-6xl">
              Redefining Your
              <br />
              Personal Style
            </h1>
            <p className="mt-5 max-w-md text-sm leading-7 text-stone-200 md:text-base">
              Experience our unparalleled fusion of expertise, a sanctuary for modern grooming and bespoke beauty treatments.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-sm bg-amber-400 px-6 py-3 text-[11px] font-semibold tracking-[0.2em] text-stone-950 transition-colors hover:bg-amber-300"
              >
                DISCOVER MORE
              </a>
              <a
                href="/appointment"
                className="inline-flex items-center justify-center rounded-sm border border-white/30 bg-white/10 px-6 py-3 text-[11px] font-semibold tracking-[0.2em] text-white backdrop-blur transition-colors hover:bg-white/15"
              >
                BOOK NOW
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="rounded-sm border border-white/15 bg-white/10 p-6 backdrop-blur">
              <p className="text-[11px] font-semibold tracking-[0.25em] text-amber-200/90">LUXURY • UNISEX</p>
              <p className="mt-3 text-sm leading-7 text-stone-200">
                Modern cuts, bespoke color, bridal styling, and curated treatments—crafted with care.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-stone-950 to-transparent" />
    </section>
  )
}
