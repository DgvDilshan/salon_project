import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import hero from '../assets/salon-hero.jpg'
import legacyImg from '../assets/hero.jpg'
import s1 from '../assets/stylist-1.svg'
import s2 from '../assets/stylist-2.svg'
import s3 from '../assets/stylist-3.svg'
import s4 from '../assets/stylist-4.svg'

const stylists = [
  { name: 'Julia Silvester', role: 'CREATIVE DIRECTOR', img: s1 },
  { name: 'Bianca Rose', role: 'MASTER COLORIST', img: s2 },
  { name: 'Malcolm Cho', role: 'PRECISION CUTTING', img: s3 },
  { name: 'Sophie Laurent', role: 'WEDDING STYLIST', img: s4 },
]

export default function About() {
  return (
    <div className="min-h-screen bg-stone-100">
      <div className="bg-white">
        <Navbar />

        <section className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-4 py-12 md:grid-cols-2 md:items-center md:py-16">
          <div className="text-left">
            <p className="text-[11px] font-semibold tracking-[0.28em] text-amber-600">HERITAGE & VISION</p>
            <h1 className="mt-4 font-serif text-5xl leading-[1.05] text-stone-900 md:text-6xl">Our Story</h1>
            <p className="mt-5 max-w-md text-sm leading-7 text-stone-600">
              Founded on craftsmanship and elevated hospitality, Silvester Salon exists to help you feel confident—every
              day, and for every occasion.
            </p>
          </div>

          <div className="overflow-hidden rounded-sm border border-stone-200 bg-stone-100">
            <img src={hero} alt="Salon" className="h-[420px] w-full object-cover" />
          </div>
        </section>
      </div>

      <section className="bg-stone-100">
        <div className="mx-auto w-full max-w-6xl px-4 py-14">
          <div className="grid grid-cols-1 overflow-hidden rounded-sm border border-stone-200 bg-stone-50 md:grid-cols-2">
            <div className="bg-white p-5 md:p-8">
              <div className="overflow-hidden rounded-sm border border-stone-200">
                <img src={legacyImg} alt="Artistry" className="h-[260px] w-full object-cover md:h-[320px]" />
              </div>
            </div>

            <div className="p-8 md:p-10">
              <h2 className="font-serif text-3xl text-stone-900">A Legacy of Artistry</h2>
              <div className="mt-4 h-px w-10 bg-amber-500/70" />
              <p className="mt-5 text-sm leading-7 text-stone-600">
                Our team combines modern technique with timeless taste. We specialize in refined cuts, dimensional
                color, and styled finishes that look effortless—and feel uniquely yours.
              </p>
              <p className="mt-4 text-sm leading-7 text-stone-600">
                Every appointment begins with a consultation, followed by premium care and a personalized plan for
                maintaining your look between visits.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone-900">
        <div className="mx-auto w-full max-w-6xl px-4 py-16">
          <div className="text-center">
            <p className="text-[11px] font-semibold tracking-[0.28em] text-amber-400">THE ARTISANS</p>
            <h2 className="mt-3 font-serif text-4xl text-white">Our Master Stylists</h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stylists.map((s) => (
              <div key={s.name} className="overflow-hidden rounded-sm border border-stone-800 bg-stone-950/20">
                <div className="aspect-square w-full overflow-hidden bg-stone-950/30">
                  <img src={s.img} alt={s.name} className="h-full w-full object-cover" />
                </div>
                <div className="p-5 text-center">
                  <p className="font-serif text-lg text-stone-100">{s.name}</p>
                  <p className="mt-2 text-[11px] font-semibold tracking-[0.28em] text-amber-400">{s.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
