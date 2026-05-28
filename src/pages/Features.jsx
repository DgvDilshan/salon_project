import Navbar from '../components/Navbar.jsx'
import Pillars from '../components/Pillars.jsx'
import Testimonial from '../components/Testimonial.jsx'
import Footer from '../components/Footer.jsx'
import hero from '../assets/hero.jpg'

export default function Features() {
  return (
    <div className="min-h-screen bg-stone-100">
      <div className="bg-stone-900 bg-cover bg-center" style={{ backgroundImage: `url(${hero})` }}>
        <div className="bg-stone-950/55">
          <Navbar variant="dark" />

          <section className="mx-auto w-full max-w-6xl px-4 py-20 text-center md:py-24">
            <h1 className="animate-fade-up font-serif text-4xl text-white md:text-6xl">
              The Silvester Experience
            </h1>
            <p className="mx-auto mt-5 max-w-2xl animate-fade-in text-sm leading-7 text-stone-200 md:text-base">
              From modern precision cutting and bespoke color to elevated styling and treatments, every service is
              designed around you—crafted with care, guided by expertise.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/services"
                className="inline-flex items-center justify-center rounded-sm bg-amber-400 px-6 py-3 text-[11px] font-semibold tracking-[0.18em] text-stone-950 transition hover:bg-amber-300"
              >
                EXPLORE SERVICES
              </a>
              <a
                href="/appointment"
                className="inline-flex items-center justify-center rounded-sm border border-stone-200/35 bg-white/10 px-6 py-3 text-[11px] font-semibold tracking-[0.18em] text-white backdrop-blur transition hover:bg-white/15"
              >
                BOOK APPOINTMENT
              </a>
            </div>
          </section>
        </div>
      </div>

      <Pillars />
      <Testimonial />
      <Footer />
    </div>
  )
}
