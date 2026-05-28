import Navbar from '../components/Navbar.jsx'
import PageHero from '../components/PageHero.jsx'
import Footer from '../components/Footer.jsx'

export default function Contact() {
  return (
    <div className="min-h-screen bg-stone-100">
      <Navbar />
      <PageHero title="Contact" subtitle="WE’D LOVE TO HEAR FROM YOU" variant="light" />

      <section className="mx-auto w-full max-w-6xl px-4 pb-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-8">
            <div className="rounded-sm border border-stone-200 bg-white p-8">
              <h2 className="font-serif text-2xl text-stone-900">Visit Us</h2>
              <p className="mt-4 text-sm leading-7 text-stone-600">
                Nelumdeniya Road
                <br />
                Alawwa, Sri Lanka 60280
                <br />
                Sri Lanka
              </p>
              <p className="mt-4 text-sm leading-7 text-stone-600">
                silvesterfernando78@gmail.com
                <br />
                +94 372 279 340
              </p>

              <div className="mt-6 border-t border-stone-100 pt-6">
                <p className="text-xs font-semibold tracking-[0.25em] text-stone-700">OPENING HOURS</p>
                <div className="mt-3 space-y-2 text-sm text-stone-600">
                  <div className="flex items-center justify-between">
                    <span>Mon – Fri</span>
                    <span className="font-medium text-stone-900">09:00 – 19:00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Saturday</span>
                    <span className="font-medium text-stone-900">10:00 – 18:00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Sunday</span>
                    <span className="font-medium text-stone-900">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-sm border border-stone-200 bg-white">
              <div className="aspect-[16/10] w-full">
                <iframe
                  title="Silvester Salon location map"
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=Nelumdeniya%20Road%2C%20Alawwa%2C%20Sri%20Lanka%2060280&output=embed"
                />
              </div>
              <div className="flex items-center justify-between gap-4 p-4">
                <p className="text-xs text-stone-500">Map powered by Google</p>
                <a
                  className="text-[11px] font-semibold tracking-[0.18em] text-amber-600 hover:text-amber-700"
                  href="https://www.google.com/maps?q=Nelumdeniya%20Road%2C%20Alawwa%2C%20Sri%20Lanka%2060280"
                  target="_blank"
                  rel="noreferrer"
                >
                  OPEN MAP
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-sm border border-stone-200 bg-white p-8">
            <h2 className="font-serif text-2xl text-stone-900">Send a Message</h2>
            <p className="mt-3 text-sm leading-6 text-stone-600">
              Tell us what you’re looking for and we’ll reply as soon as possible.
            </p>

            <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold tracking-wide text-stone-700">NAME</label>
                  <input
                    className="mt-2 w-full rounded-sm border border-stone-200 bg-white px-3 py-2 text-sm text-stone-900 outline-none transition focus:border-amber-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-wide text-stone-700">PHONE</label>
                  <input
                    className="mt-2 w-full rounded-sm border border-stone-200 bg-white px-3 py-2 text-sm text-stone-900 outline-none transition focus:border-amber-400"
                    placeholder="Optional"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold tracking-wide text-stone-700">EMAIL</label>
                <input
                  type="email"
                  className="mt-2 w-full rounded-sm border border-stone-200 bg-white px-3 py-2 text-sm text-stone-900 outline-none transition focus:border-amber-400"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold tracking-wide text-stone-700">MESSAGE</label>
                <textarea
                  rows={6}
                  className="mt-2 w-full rounded-sm border border-stone-200 bg-white px-3 py-2 text-sm text-stone-900 outline-none transition focus:border-amber-400"
                  placeholder="How can we help?"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-sm bg-amber-400 px-4 py-3 text-[11px] font-semibold tracking-[0.18em] text-stone-950 transition hover:bg-amber-300"
              >
                SEND
              </button>
              <p className="text-xs leading-5 text-stone-500">
                Prefer booking? Use the appointment page for the fastest response.
              </p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
