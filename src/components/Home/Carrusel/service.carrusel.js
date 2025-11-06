import { useEffect, useRef } from 'react'

export function Carousel({ interval = 8000 } = {}) {
  const slideRef = useRef(null)
  const nextRef = useRef(null)
  const prevRef = useRef(null)

  const indexRef = useRef(0)
  const timerRef = useRef(null)

  useEffect(() => {
    // Capturamos los nodos al inicio del efecto
    const slideEl = slideRef.current
    const nextEl = nextRef.current
    const prevEl = prevRef.current

    if (!slideEl) return

    const items = () => slideEl.querySelectorAll('.item')

    const onNext = () => {
      const list = items()
      if (list.length > 0) {
        slideEl.appendChild(list[0])
        indexRef.current = (indexRef.current + 1) % list.length
      }
    }

    const onPrev = () => {
      const list = items()
      if (list.length > 0) {
        slideEl.prepend(list[list.length - 1])
        indexRef.current = (indexRef.current - 1 + list.length) % list.length
      }
    }

    const stop = () => {
      if (timerRef.current != null) {
        clearInterval(timerRef.current)
        timerRef.current = null
      }
    }

    const start = () => {
      stop() // por si el efecto se re-ejecuta
      timerRef.current = window.setInterval(onNext, interval)
    }

    // listeners manuales
    nextEl?.addEventListener('click', onNext)
    prevEl?.addEventListener('click', onPrev)

    // autoplay
    start()

    return () => {
      stop()
      nextEl?.removeEventListener('click', onNext)
      prevEl?.removeEventListener('click', onPrev)
    }
  }, [interval])

  return { slideRef, nextRef, prevRef }
}

export default Carousel
