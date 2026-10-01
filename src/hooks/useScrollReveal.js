import { useEffect } from 'react'

/**
 * Auto-reveals any element with class="reveal" as it scrolls into view.
 * Mount once at the app root — it re-scans on every route change.
 */
export function useScrollReveal(dep) {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.is-visible), .reveal-stagger:not(.is-visible)')
    if (!els.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [dep])
}
