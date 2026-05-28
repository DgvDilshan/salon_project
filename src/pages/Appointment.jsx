import { useMemo, useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import PageHero from '../components/PageHero.jsx'
import Footer from '../components/Footer.jsx'
import hero from '../assets/hero.jpg'

const serviceOptions = [
  'Signature Cut & Style',
  'Balayage or Gloss',
  'Full Color Transformation',
  'Silk Press & Finish',
  'Event Styling',
  'Bridal Consultation',
]

const timeOptions = ['09:00', '10:30', '12:00', '13:30', '15:00', '16:30', '18:00']

function Field({ label, children, hint }) {
  return (
    <div>
      <label className="block text-xs font-semibold tracking-wide text-stone-700">{label}</label>
      <div className="mt-2">{children}</div>
      {hint ? <p className="mt-2 text-xs text-stone-500">{hint}</p> : null}
    </div>
  )
}

function StepPill({ active, index, title }) {
  return (
    <div
      className={
        active
          ? 'flex items-center gap-3 rounded-sm border border-amber-300 bg-amber-50 px-4 py-3'
          : 'flex items-center gap-3 rounded-sm border border-stone-200 bg-white px-4 py-3'
      }
    >
      <div
        className={
          active
            ? 'flex h-7 w-7 items-center justify-center rounded-full bg-amber-400 text-xs font-semibold text-stone-950'
            : 'flex h-7 w-7 items-center justify-center rounded-full bg-stone-100 text-xs font-semibold text-stone-700'
        }
      >
        {index}
      </div>
      <div className="text-xs font-semibold tracking-wide text-stone-800">{title}</div>
    </div>
  )
}

export default function Appointment() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    service: '',
    date: '',
    time: '',
    fullName: '',
    email: '',
    phone: '',
    note: '',
  })

  const errors = useMemo(() => {
    const e = {}
    if (step >= 1 && !form.service) e.service = 'Please choose a service.'
    if (step >= 2 && !form.date) e.date = 'Please select a date.'
    if (step >= 2 && !form.time) e.time = 'Please select a time.'
    if (step >= 3 && !form.fullName.trim()) e.fullName = 'Please enter your name.'
    if (step >= 3 && !form.email.trim()) e.email = 'Please enter your email.'
    return e
  }, [form, step])

  function nextStep() {
    if (step === 1 && errors.service) return
    if (step === 2 && (errors.date || errors.time)) return
    setStep((s) => Math.min(3, s + 1))
  }

  function prevStep() {
    setStep((s) => Math.max(1, s - 1))
  }

  function submit(e) {
    e.preventDefault()
    if (errors.service || errors.date || errors.time || errors.fullName || errors.email) return
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-stone-100">
      <div className="bg-stone-900 bg-cover bg-center" style={{ backgroundImage: `url(${hero})` }}>
        <div className="bg-stone-950/55">
          <Navbar variant="dark" />
          <PageHero title="Book Appointment" subtitle="FAST • SIMPLE • BEAUTIFUL" />
        </div>
      </div>

      <section className="mx-auto w-full max-w-6xl px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-start">
          <aside className="md:col-span-4">
            <div className="sticky top-6 space-y-3">
              <StepPill active={step === 1} index={1} title="Service" />
              <StepPill active={step === 2} index={2} title="Schedule" />
              <StepPill active={step === 3} index={3} title="Details" />

              <div className="rounded-sm border border-stone-200 bg-white p-5">
                <p className="text-xs font-semibold tracking-wide text-stone-700">YOUR SELECTION</p>
                <div className="mt-3 space-y-2 text-sm text-stone-700">
                  <div className="flex justify-between gap-4">
                    <span className="text-stone-500">Service</span>
                    <span className="text-right font-medium text-stone-900">
                      {form.service || '—'}
                    </span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-stone-500">Date</span>
                    <span className="text-right font-medium text-stone-900">{form.date || '—'}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-stone-500">Time</span>
                    <span className="text-right font-medium text-stone-900">{form.time || '—'}</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <div className="md:col-span-8">
            <form onSubmit={submit} className="rounded-sm border border-stone-200 bg-white p-7 md:p-10">
              {!submitted ? (
                <div key={step} className="animate-fade-up">
                  {step === 1 ? (
                    <>
                      <h2 className="font-serif text-3xl text-stone-900">Choose a Service</h2>
                      <p className="mt-3 text-sm leading-6 text-stone-600">
                        Select the service you’d like to book. You can add notes at the end.
                      </p>

                      <div className="mt-7">
                        <Field label="SERVICE" hint={errors.service ? errors.service : 'Pick one option to continue.'}>
                          <select
                            value={form.service}
                            onChange={(e) => setForm((f) => ({ ...f, service: e.target.value }))}
                            className={
                              errors.service
                                ? 'w-full rounded-sm border border-red-300 bg-white px-3 py-2 text-sm text-stone-900 outline-none transition focus:border-amber-400'
                                : 'w-full rounded-sm border border-stone-200 bg-white px-3 py-2 text-sm text-stone-900 outline-none transition focus:border-amber-400'
                            }
                          >
                            <option value="">Select service</option>
                            {serviceOptions.map((s) => (
                              <option key={s} value={s}>
                                {s}
                              </option>
                            ))}
                          </select>
                        </Field>
                      </div>
                    </>
                  ) : null}

                  {step === 2 ? (
                    <>
                      <h2 className="font-serif text-3xl text-stone-900">Pick a Time</h2>
                      <p className="mt-3 text-sm leading-6 text-stone-600">
                        Choose a date and preferred time. We’ll confirm availability after you submit.
                      </p>

                      <div className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-2">
                        <Field label="DATE" hint={errors.date || ''}>
                          <input
                            type="date"
                            value={form.date}
                            onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
                            className={
                              errors.date
                                ? 'w-full rounded-sm border border-red-300 bg-white px-3 py-2 text-sm text-stone-900 outline-none transition focus:border-amber-400'
                                : 'w-full rounded-sm border border-stone-200 bg-white px-3 py-2 text-sm text-stone-900 outline-none transition focus:border-amber-400'
                            }
                          />
                        </Field>

                        <Field label="TIME" hint={errors.time || ''}>
                          <select
                            value={form.time}
                            onChange={(e) => setForm((f) => ({ ...f, time: e.target.value }))}
                            className={
                              errors.time
                                ? 'w-full rounded-sm border border-red-300 bg-white px-3 py-2 text-sm text-stone-900 outline-none transition focus:border-amber-400'
                                : 'w-full rounded-sm border border-stone-200 bg-white px-3 py-2 text-sm text-stone-900 outline-none transition focus:border-amber-400'
                            }
                          >
                            <option value="">Select time</option>
                            {timeOptions.map((t) => (
                              <option key={t} value={t}>
                                {t}
                              </option>
                            ))}
                          </select>
                        </Field>
                      </div>
                    </>
                  ) : null}

                  {step === 3 ? (
                    <>
                      <h2 className="font-serif text-3xl text-stone-900">Your Details</h2>
                      <p className="mt-3 text-sm leading-6 text-stone-600">
                        Enter your contact details and any helpful notes.
                      </p>

                      <div className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-2">
                        <Field label="FULL NAME" hint={errors.fullName || ''}>
                          <input
                            value={form.fullName}
                            onChange={(e) => setForm((f) => ({ ...f, fullName: e.target.value }))}
                            className={
                              errors.fullName
                                ? 'w-full rounded-sm border border-red-300 bg-white px-3 py-2 text-sm text-stone-900 outline-none transition focus:border-amber-400'
                                : 'w-full rounded-sm border border-stone-200 bg-white px-3 py-2 text-sm text-stone-900 outline-none transition focus:border-amber-400'
                            }
                            placeholder="Your name"
                          />
                        </Field>

                        <Field label="EMAIL" hint={errors.email || ''}>
                          <input
                            type="email"
                            value={form.email}
                            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                            className={
                              errors.email
                                ? 'w-full rounded-sm border border-red-300 bg-white px-3 py-2 text-sm text-stone-900 outline-none transition focus:border-amber-400'
                                : 'w-full rounded-sm border border-stone-200 bg-white px-3 py-2 text-sm text-stone-900 outline-none transition focus:border-amber-400'
                            }
                            placeholder="you@example.com"
                          />
                        </Field>
                      </div>

                      <div className="mt-6 grid grid-cols-1 gap-6">
                        <Field label="PHONE (OPTIONAL)">
                          <input
                            value={form.phone}
                            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                            className="w-full rounded-sm border border-stone-200 bg-white px-3 py-2 text-sm text-stone-900 outline-none transition focus:border-amber-400"
                            placeholder="+94 ..."
                          />
                        </Field>
                        <Field label="NOTES (OPTIONAL)">
                          <textarea
                            rows={4}
                            value={form.note}
                            onChange={(e) => setForm((f) => ({ ...f, note: e.target.value }))}
                            className="w-full rounded-sm border border-stone-200 bg-white px-3 py-2 text-sm text-stone-900 outline-none transition focus:border-amber-400"
                            placeholder="Anything we should know?"
                          />
                        </Field>
                      </div>
                    </>
                  ) : null}

                  <div className="mt-10 flex flex-col-reverse gap-3 md:flex-row md:items-center md:justify-between">
                    <button
                      type="button"
                      onClick={prevStep}
                      disabled={step === 1}
                      className={
                        step === 1
                          ? 'inline-flex items-center justify-center rounded-sm border border-stone-200 bg-stone-50 px-4 py-3 text-[11px] font-semibold tracking-[0.18em] text-stone-400'
                          : 'inline-flex items-center justify-center rounded-sm border border-stone-200 bg-white px-4 py-3 text-[11px] font-semibold tracking-[0.18em] text-stone-700 transition hover:bg-stone-50'
                      }
                    >
                      BACK
                    </button>

                    {step < 3 ? (
                      <button
                        type="button"
                        onClick={nextStep}
                        className="inline-flex items-center justify-center rounded-sm bg-amber-400 px-6 py-3 text-[11px] font-semibold tracking-[0.18em] text-stone-950 transition hover:bg-amber-300"
                      >
                        CONTINUE
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center rounded-sm bg-amber-400 px-6 py-3 text-[11px] font-semibold tracking-[0.18em] text-stone-950 transition hover:bg-amber-300"
                      >
                        CONFIRM REQUEST
                      </button>
                    )}
                  </div>

                  <div className="mt-6 rounded-sm border border-amber-200 bg-amber-50 p-4">
                    <p className="text-xs leading-5 text-stone-700">
                      After you submit, we’ll contact you to confirm availability and finalize your booking.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="animate-fade-up text-center">
                  <p className="text-[11px] font-semibold tracking-[0.25em] text-amber-600">REQUEST RECEIVED</p>
                  <h2 className="mt-3 font-serif text-3xl text-stone-900">We’ll confirm shortly</h2>
                  <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-stone-600">
                    Thanks, {form.fullName || 'there'}—we’ve received your appointment request for {form.service || 'your service'}.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false)
                      setStep(1)
                      setForm({ service: '', date: '', time: '', fullName: '', email: '', phone: '', note: '' })
                    }}
                    className="mt-8 inline-flex items-center justify-center rounded-sm border border-stone-200 bg-white px-5 py-3 text-[11px] font-semibold tracking-[0.18em] text-stone-700 transition hover:bg-stone-50"
                  >
                    BOOK ANOTHER
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
