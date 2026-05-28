import { Link } from 'react-router-dom'

export default function HomeContactSection() {
  return (
    <section className="bg-stone-100">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 md:py-16">
        <div className="text-center">
          <h2 className="animate-fade-up font-serif text-4xl text-stone-900 md:text-5xl motion-reduce:animate-none">
            Contact
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-stone-600 md:text-base">
            Visit us in Alawwa, call or email for quick questions, or use the contact page for full details.
          </p>
          <div className="mx-auto mt-6 h-px w-14 bg-amber-500/70" />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-8">
            <div className="rounded-sm border border-stone-200 bg-white p-8">
              <h3 className="font-serif text-2xl text-stone-900">Visit Us</h3>
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

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-sm bg-amber-400 px-6 py-3 text-[11px] font-semibold tracking-[0.18em] text-stone-950 transition hover:bg-amber-300 motion-reduce:transition-none"
                >
                  OPEN CONTACT
                </Link>
                <Link
                  to="/appointment"
                  className="inline-flex items-center justify-center rounded-sm border border-stone-200 bg-white px-6 py-3 text-[11px] font-semibold tracking-[0.18em] text-stone-800 transition-colors hover:border-stone-300 hover:text-stone-950 motion-reduce:transition-none"
                >
                  BOOK APPOINTMENT
                </Link>
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
      </div>
    </section>
  )
}
