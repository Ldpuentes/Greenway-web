// src/components/Home/Nosotros/Nosotros.jsx
import { useEffect, useRef } from 'react'
import anime from 'animejs'
import NOSOTROS_PILARES from './Service.Nosotros'
import './Nosotros.css'

export default function Nosotros() {
  const sectionRef = useRef(null)
  const gridRef = useRef(null)

  // Efecto 1: entrada + micro-animación de íconos, con pausas y cleanups correctos
  useEffect(() => {
    // Delay para asegurar que DOM esté listo en navegaciones
    const timer = setTimeout(() => {
      const sec = sectionRef.current
      const gridEl = gridRef.current
      const cards = gridEl ? gridEl.querySelectorAll('.ns-card') : null
      if (!sec || !cards || cards.length === 0) return

      // Evalúa prefers-reduced-motion localmente (evita dependencia externa)
      const reduceMotion =
        typeof window !== 'undefined' &&
        typeof window.matchMedia === 'function' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches

      // Si el usuario prefiere menos movimiento, revelamos sin animar
      if (reduceMotion) {
        cards.forEach(c => {
          c.style.opacity = 1
          c.style.transform = 'none'
        })
        return
      }

      // Variables locales para poder limpiarlas sin depender de refs en cleanup
      let iconLoop = null
      let ioEnter = null
      let ioVisible = null

      // Disparar entrada una sola vez al intersectar
      ioEnter = new IntersectionObserver(
        entries => {
          const entry = entries[0]
          if (!entry.isIntersecting) return
          if (ioEnter) ioEnter.disconnect()

          // Stagger de entrada
          anime({
            targets: cards,
            opacity: [0, 1],
            translateY: [26, 0],
            scale: [0.98, 1],
            easing: 'easeOutCubic',
            duration: 750,
            delay: anime.stagger(140),
          })

          // Micro loop de íconos
          const icons = gridEl.querySelectorAll('.ns-icon')
          iconLoop = anime({
            targets: icons,
            translateY: [
              { value: -2, duration: 900, easing: 'easeInOutSine' },
              { value: 0, duration: 900, easing: 'easeInOutSine' },
            ],
            delay: anime.stagger(180),
            loop: true,
            direction: 'alternate',
            autoplay: true,
          })
        },
        { threshold: 0.18 }
      )
      ioEnter.observe(sec)

      // Pausar/reanudar loop según visibilidad de la sección y pestaña
      const handleVisibilityChange = () => {
        if (!iconLoop) return
        if (document.visibilityState === 'visible') iconLoop.play()
        else iconLoop.pause()
      }

      ioVisible = new IntersectionObserver(
        ([entry]) => {
          if (!iconLoop) return
          if (entry.isIntersecting && document.visibilityState === 'visible') {
            iconLoop.play()
          } else {
            iconLoop.pause()
          }
        },
        { threshold: 0.05 }
      )
      ioVisible.observe(sec)

      document.addEventListener('visibilitychange', handleVisibilityChange)

      // Cleanup interno del setTimeout
      return () => {
        if (iconLoop) {
          iconLoop.pause()
          iconLoop = null
        }
        anime.remove(cards)
        const icons = gridEl ? gridEl.querySelectorAll('.ns-icon') : null
        if (icons && icons.length) anime.remove(icons)
        if (ioEnter) ioEnter.disconnect()
        if (ioVisible) ioVisible.disconnect()
        document.removeEventListener('visibilitychange', handleVisibilityChange)
      }
    }, 50) // delay de 50ms

    // Cleanup del timer
    return () => clearTimeout(timer)
  }, []) // no dependencias: solo usamos nodos DOM copiados a variables locales

  // Efecto 2: hover (elevación y "sheen") con listeners y cleanup correctos
  useEffect(() => {
    // Mismo delay para hover effects
    const timer = setTimeout(() => {
      const gridEl = gridRef.current
      const cards = gridEl ? gridEl.querySelectorAll('.ns-card') : null
      if (!cards || cards.length === 0) return

      const reduceMotion =
        typeof window !== 'undefined' &&
        typeof window.matchMedia === 'function' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches

      if (reduceMotion) return

      const onEnter = e => {
        const card = e.currentTarget
        const sheen = card.querySelector('.ns-sheen')

        anime.remove(card)
        anime({
          targets: card,
          translateY: -4,
          scale: 1.015,
          duration: 200,
          easing: 'easeOutQuad',
        })

        if (sheen) {
          sheen.style.opacity = 0
          sheen.style.transform = 'translateX(-120%) rotate(12deg)'
          anime.remove(sheen)
          anime({
            targets: sheen,
            opacity: [0, 0.55],
            translateX: ['-120%', '140%'],
            duration: 650,
            easing: 'easeOutCubic',
          })
        }
      }

      const onLeave = e => {
        const card = e.currentTarget
        anime.remove(card)
        anime({
          targets: card,
          translateY: 0,
          scale: 1,
          duration: 220,
          easing: 'easeOutQuad',
        })
      }

      // Agregar listeners y guardar arreglo local para cleanup
      const listeners = []
      cards.forEach(c => {
        c.addEventListener('pointerenter', onEnter)
        c.addEventListener('pointerleave', onLeave)
        listeners.push([c, onEnter, onLeave])
      })

      // Cleanup interno del setTimeout
      return () => {
        listeners.forEach(([c, enterH, leaveH]) => {
          c.removeEventListener('pointerenter', enterH)
          c.removeEventListener('pointerleave', leaveH)
        })
        // por si alguna animación quedó viva
        anime.remove(cards)
      }
    }, 50) // mismo delay

    // Cleanup del timer
    return () => clearTimeout(timer)
  }, []) // sin dependencias; sólo DOM copiado a variables locales

  return (
    <section id='sobre' aria-labelledby='sobre-heading' ref={sectionRef}>
      <header className='ns-header'>
        <h2 id='sobre-heading'>Sobre nosotros</h2>
      </header>

      <ul className='ns-grid' role='list' ref={gridRef}>
        {NOSOTROS_PILARES.map(({ id, title, desc, icon }) => (
          <li key={id} className='ns-item'>
            <article
              className='ns-card'
              aria-labelledby={`${id}-title`}
              aria-describedby={`${id}-desc`}
            >
              <span className='ns-sheen' aria-hidden='true' />
              <header className='ns-card__head'>
                <span className='ns-icon' aria-hidden='true'>
                  {icon}
                </span>
                <h3 id={`${id}-title`} className='ns-title'>
                  {title}
                </h3>
              </header>
              <p id={`${id}-desc`} className='ns-desc'>
                {desc}
              </p>
            </article>
          </li>
        ))}
      </ul>

      <p className='ns-cta'>
        <a className='ns-btn' href='/About' aria-label='Ver más sobre nosotros'>
          Ver más
        </a>
      </p>
    </section>
  )
}
