import { Link } from 'react-router-dom'
import logo from '../assets/silvester-logo.svg'

const navItems = [
  { label: 'Services', to: '/services' },
  { label: 'Features', to: '/features' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar({ variant = 'light' }) {
  const isDark = variant === 'dark'

  return (
    <header
      className={
        isDark
          ? 'absolute inset-x-0 top-0 z-50 bg-transparent'
          : 'bg-white'
      }
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-4 py-4">
        <Link to="/" className="flex items-center gap-3">
          <span className="overflow-hidden rounded-sm bg-black p-1">
            <img
              src={logo}
              alt="SILVESTER SALON"
              className="h-15 w-auto md:h-16"
              loading="eager"
            />
          </span>
          <span
            className={
              isDark
                ? 'hidden text-[15px] font-semibold tracking-wide text-white sm:inline'
                : 'hidden text-[15px] font-semibold tracking-wide text-stone-900 sm:inline'
            }
          >
            Silvester Salon
          </span>
        </Link>

        <nav
          className={
            isDark
              ? 'hidden items-center gap-6 text-[12px] font-semibold tracking-[0.25em] text-stone-200/80 md:flex'
              : 'hidden items-center gap-6 text-[12px] font-semibold tracking-[0.25em] text-stone-500 md:flex'
          }
        >
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={
                isDark
                  ? 'transition-colors hover:text-white'
                  : 'transition-colors hover:text-stone-900'
              }
            >
              {item.label.toUpperCase()}
            </Link>
          ))}
        </nav>

        <Link
          to="/appointment"
          className={
            isDark
              ? 'inline-flex items-center justify-center rounded-sm bg-amber-400 px-4 py-2 text-[12px] font-semibold tracking-[0.18em] text-stone-950 transition-colors hover:bg-amber-300'
              : 'inline-flex items-center justify-center rounded-sm bg-amber-400 px-4 py-2 text-[12px] font-semibold tracking-[0.18em] text-stone-950 transition-colors hover:bg-amber-300'
          }
        >
          BOOK APPOINTMENT
        </Link>
      </div>
    </header>
  )
}
