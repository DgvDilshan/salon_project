function SocialIcon({ label, children }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-stone-700/60 text-stone-200 transition-colors hover:border-stone-500 hover:text-white"
    >
      {children}
    </a>
  )
}

export default function Footer() {
  return (
    <footer id="contact" className="bg-stone-900">
      <div className="mx-auto w-full max-w-6xl px-4 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <h3 className="font-serif text-xl text-white">Silvester Salon</h3>
            <p className="mt-3 max-w-sm text-sm leading-6 text-stone-400">
              Redefining modern grooming with craft, care, and premium treatments.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <SocialIcon label="Instagram">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
                  <path
                    d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M17.5 6.5h.01"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                  />
                </svg>
              </SocialIcon>

              <SocialIcon label="Facebook">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
                  <path
                    d="M14 8h2V5h-2a4 4 0 0 0-4 4v3H8v3h2v7h3v-7h3l1-3h-4V9a1 1 0 0 1 1-1Z"
                    fill="currentColor"
                  />
                </svg>
              </SocialIcon>

              <SocialIcon label="X">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
                  <path
                    d="M7 4h3l4 6 5-6h3l-7 8 7 8h-3l-5-6-5 6H7l7-8-7-8Z"
                    fill="currentColor"
                  />
                </svg>
              </SocialIcon>
            </div>
          </div>

          <div id="about" className="md:justify-self-center">
            <p className="text-[11px] font-semibold tracking-[0.25em] text-amber-400">
              LOCATION
            </p>
            <p className="mt-3 text-sm leading-6 text-stone-400">
              Nelumdeniya Road
              <br />
              Alawwa, Sri Lanka 60280
              <br />
              Sri Lanka
            </p>
          </div>

          <div className="md:justify-self-end">
            <p className="text-[11px] font-semibold tracking-[0.25em] text-amber-400">
              CONTACT
            </p>
            <p className="mt-3 text-sm leading-6 text-stone-400">
              silvesterfernando78@gmail.com
              <br />
              +94 372 279 340
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-stone-800 pt-6 text-xs text-stone-500 md:flex-row">
          <p>© {new Date().getFullYear()} Silvester Salon. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a className="hover:text-stone-300" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-stone-300" href="#">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
