import { useEffect, useRef } from 'react'
import anime from 'animejs'
import './Nosotros.css'
import NOSOTROS_PILARES from './Service.Nosotros'

export default function Nosotros() {
  const sectionRef = useRef(null)
  const gridRef = useRef(null)

  // 1) Entrada al aparecer en viewport (stagger)
  useEffect(() => {
    const sec = sectionRef.current
    const cards = gridRef.current?.querySelectorAll('.ns-card')
    if (!sec || !cards?.length) return

    const io = new IntersectionObserver(
      entries => {
        if (!entries[0].isIntersecting) return
        io.disconnect()

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

        // Micro-movimiento de iconos (loop suave)
        anime({
          targets: '.ns-icon',
          translateY: [
            { value: -2, duration: 900, easing: 'easeInOutSine' },
            { value: 0, duration: 900, easing: 'easeInOutSine' },
          ],
          delay: anime.stagger(180),
          loop: true,
          direction: 'alternate',
        })
      },
      { threshold: 0.18 }
    )

    io.observe(sec)
    return () => io.disconnect()
  }, [])

  // 2) Hover con anime.js: elevación + “sheen” (brillo) en diagonal
  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll('.ns-card')
    if (!cards?.length) return

    const onEnter = e => {
      const card = e.currentTarget
      const sheen = card.querySelector('.ns-sheen')

      // Elevación
      anime.remove(card)
      anime({
        targets: card,
        translateY: -4,
        scale: 1.015,
        duration: 200,
        easing: 'easeOutQuad',
      })

      // Sheen diagonal
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

    cards.forEach(c => {
      c.addEventListener('pointerenter', onEnter)
      c.addEventListener('pointerleave', onLeave)
    })

    return () => {
      cards.forEach(c => {
        c.removeEventListener('pointerenter', onEnter)
        c.removeEventListener('pointerleave', onLeave)
      })
    }
  }, [])

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

      {/* Único botón centrado */}
      <p className='ns-cta'>
        <a
          className='ns-btn'
          href='/quienes-somos'
          aria-label='Ver más sobre nosotros'
        >
          Ver más
        </a>
      </p>
    </section>
  )
}
