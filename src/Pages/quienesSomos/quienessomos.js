import { useEffect } from 'react'
import anime from 'animejs/lib/anime.es.js'

export function useQuienesSomosFX(rootRef){
  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    document.documentElement.classList.add('js-enabled')

    // Estado inicial por tipo (incluye counters)
    const setInitialState = (el) => {
      const type = el.getAttribute('data-anim')
      el.style.willChange = 'opacity, transform'
      el.style.opacity = '0'
      switch (type){
        case 'fade-up':   el.style.transform = 'translateY(16px)'; break
        case 'fade-left': el.style.transform = 'translateX(-18px)'; break
        case 'pop':       el.style.transform = 'scale(0.94)'; break
        case 'count':
          el.style.transform = 'translateY(8px)'
          // baseline visible para accesibilidad, pero opaco (se verá al entrar)
          seedCounter(el)
          break
        default:
          el.style.transform = 'none'
      }
    }

    // Coloca el texto base del contador (0 o 0%)
    const seedCounter = (el) => {
      const raw = el.getAttribute('data-count') || '0'
      const isPct = raw.trim().endsWith('%')
      el.textContent = isPct ? '0%' : '+0'
    }

    // Reproduce animación por tipo (counters incluidos)
    const playAnim = (el) => {
      const type  = el.getAttribute('data-anim')
      const delay = parseInt(el.getAttribute('data-delay') || '0', 10)
      const base  = { targets: el, delay, duration: 720, easing: 'easeOutQuad' }

      anime.remove(el)

      switch (type){
        case 'fade-up':   anime({ ...base, opacity:[0,1], translateY:[16,0] }); break
        case 'fade-left': anime({ ...base, opacity:[0,1], translateX:[-18,0] }); break
        case 'pop':       anime({ ...base, opacity:[0,1], scale:[.94,1] }); break
        case 'count':
          // 1) pequeño fade/slide para mostrarse
          anime({
            ...base,
            opacity: [0, 1],
            translateY: [8, 0]
          })
          // 2) conteo (se reinicia SIEMPRE al entrar)
          animateCounter(el)
          break
        default:
          anime({ ...base, opacity:[0,1] })
      }
    }

    // Conteo que se ejecuta cada vez que entra en vista
    const animateCounter = (el) => {
      const raw    = el.getAttribute('data-count') || '0'
      const isPct  = raw.trim().endsWith('%')
      const target = parseFloat(raw.replace(/[^0-9.]/g,'')) || 0
      const obj    = { val: 0 }

      anime({
        targets: obj,
        val: target,
        round: 1,
        duration: 1400,
        easing: 'easeOutCubic',
        update: () => {
          el.textContent = isPct ? `${obj.val}%` : `+${obj.val}`
        }
      })
    }

    // Prepara nodos y observa entrada/salida para replay
    const nodes = Array.from(root.querySelectorAll('[data-anim]'))
    nodes.forEach(setInitialState)

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const el = entry.target
        const type = el.getAttribute('data-anim')
        if (entry.isIntersecting){
          playAnim(el)
          el.classList.add('is-inview')
        } else {
          // RESET al salir (incluye counters → vuelven a 0)
          el.classList.remove('is-inview')
          if (type === 'count') seedCounter(el)
          setInitialState(el)
        }
      })
    }, { threshold: 0.2, rootMargin: '0px 0px -10% 0px' })

    nodes.forEach((n) => io.observe(n))

    // Parallax sutil del blob
    const blob = root.querySelector('.blob')
    let raf = 0
    const onScroll = () => {
      if (!blob) return
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        const rect = root.getBoundingClientRect()
        const vh   = window.innerHeight || 1
        const t = Math.max(0, Math.min(1, 1 - Math.abs(rect.top) / vh))
        const y = (1 - t) * 24
        const s = 0.98 + t * 0.06
        blob.style.transform = `translateY(${y}px) scale(${s})`
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
      try{ io.disconnect() }catch{}
      window.removeEventListener('scroll', onScroll)
    }
  }, [rootRef])
}
