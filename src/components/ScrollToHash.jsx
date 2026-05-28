import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      if (location.hash) {
        const el = document.querySelector(location.hash)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          return
        }
      }

      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }, 0)

    return () => window.clearTimeout(timeoutId)
  }, [location.pathname, location.hash])

  return null
}
