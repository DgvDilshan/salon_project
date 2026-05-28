import { Link } from 'react-router-dom'
import hero from '../assets/salon-hero.jpg'

export default function HomeAboutSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-4 py-12 md:grid-cols-2 md:items-center md:py-16">
        <div className="text-left">
          <p className="text-[11px] font-semibold tracking-[0.28em] text-amber-600">
            HERITAGE & VISION
          </p>
          <h2 className="mt-4 animate-fade-up font-serif text-5xl leading-[1.05] text-stone-900 md:text-6xl motion-reduce:animate-none">
            Our Story
          </h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-stone-600 md:text-base">
            Founded on craftsmanship and elevated hospitality, Silvester Salon exists to help you feel confident—every
            day, and for every occasion.
          </p>

          <div className="mt-7">
            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-sm bg-amber-400 px-6 py-3 text-[11px] font-semibold tracking-[0.18em] text-stone-950 transition hover:bg-amber-300 motion-reduce:transition-none"
            >
              LEARN MORE
            </Link>
          </div>
        </div>

        <div className="animate-fade-up overflow-hidden rounded-sm border border-stone-200 bg-stone-100 motion-reduce:animate-none">
          <img src={hero} alt="Salon" className="h-[420px] w-full object-cover" loading="lazy" />
        </div>
      </div>
    </section>
  )
}
