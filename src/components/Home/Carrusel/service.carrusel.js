import { useEffect, useRef } from 'react'

export function Carousel({ interval = 10000 } = {}) {
  const slideRef = useRef(null)
  const nextRef = useRef(null)
  const prevRef = useRef(null)

  const indexRef = useRef(0)
  const timerRef = useRef(null)

  useEffect(() => {
    const slide = slideRef.current
    if (!slide) return

    const items = () => slide.querySelectorAll('.item')

    const onNext = () => {
      const list = items()
      if (list.length > 0) {
        slide.appendChild(list[0])
        indexRef.current = (indexRef.current + 1) % list.length
      }
    }

    const onPrev = () => {
      const list = items()
      if (list.length > 0) {
        slide.prepend(list[list.length - 1])
        indexRef.current = (indexRef.current - 1 + list.length) % list.length
      }
    }

    // autoplay SIEMPRE (sin pausa)
    const start = () => {
      timerRef.current = setInterval(onNext, interval)
    }
    const stop = () => {
      clearInterval(timerRef.current)
      timerRef.current = null
    }

    // botones manuales
    nextRef.current?.addEventListener('click', onNext)
    prevRef.current?.addEventListener('click', onPrev)

    start()

    return () => {
      stop()
      nextRef.current?.removeEventListener('click', onNext)
      prevRef.current?.removeEventListener('click', onPrev)
    }
  }, [interval])

  return { slideRef, nextRef, prevRef }
}

export default Carousel
