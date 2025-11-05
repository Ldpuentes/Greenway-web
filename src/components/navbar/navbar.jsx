import { useLayoutEffect, useRef } from 'react'
import { initNavbarAnimations, createMobileTimelines, bindMobileInteractions } from './navbar.js'
import './navbar.css'
import logo from '../../assets/greenway.png'

export default function Navbar() {
  const navRef = useRef(null)
  const overlayRef = useRef(null)
  const panelRef = useRef(null)

  useLayoutEffect(() => {
    const navEl = navRef.current
    const overlayEl = overlayRef.current
    const panelEl = panelRef.current
    if (!navEl || !overlayEl || !panelEl) return

    // 1) Estado cerrado ANTES del primer paint
    document.documentElement.classList.remove('gw-mobile-open')
    panelEl.removeAttribute('data-open')
    overlayEl.style.opacity = '0'
    overlayEl.style.pointerEvents = 'none'
    panelEl.style.transform = 'translateX(100%)'

    // 2) Marca de hidratación
    document.documentElement.classList.add('gw-hydrated')

    // 3) Animaciones + bindings
    initNavbarAnimations(navEl)
    const timelines = createMobileTimelines({ overlayEl, panelEl })
    const controls = bindMobileInteractions(navEl, timelines, { overlayEl, panelEl })

    // 4) Limpieza
    return () => {
      controls?.dispose?.()
      document.documentElement.classList.remove('gw-mobile-open')
      panelEl?.removeAttribute('data-open')
    }
  }, [])

  return (
    <>
      <nav className="gw-navbar" ref={navRef} aria-label="GreenWay">
        <div className="gw-container">
          <a href="/" className="gw-brand" aria-label="Inicio GreenWay">
          
            <img src={logo} alt="Green Way" className="gw-icon" />
          </a>

          <div className="gw-menu" role="menubar" aria-label="Principal">
            <a className="gw-link" href="/" role="menuitem">Home</a>
            <a className="gw-link" href="/about" role="menuitem">Quienes somos</a>
            <a className="gw-link" href="#proyectos" role="menuitem">Como trabajamos</a>
            <a className="gw-link" href="#contacto" role="menuitem">Contacto</a>
            <span className="gw-underline" aria-hidden="true" />
          </div>

          <div className="gw-actions" aria-label="Acciones">
            <button className="gw-cta gw-cta--primary">Contactanos</button>
          </div>

          <button className="gw-burger" aria-label="Abrir menú" aria-expanded="true" aria-controls="mobile-menu">
            <span aria-hidden="true"></span>
          </button>
        </div>
      </nav>

      {/* Espaciador para que el contenido no quede debajo del nav */}
      <div className="gw-nav-spacer" />

      {/* Overlay + panel móvil (inician cerrados) */}
      <div className="gw-overlay" ref={overlayRef} />
      <aside
        className="gw-mobile"
        ref={panelRef}
        aria-label="Menú móvil"
        role="dialog"
        aria-modal="true"
      >
        <nav style={{ display: 'contents' }}>
          <a className="movil" href="/">Home</a>
          <a className="movil" href="/about">Quienes somos</a>
          <a className="movil" href="#proyectos">Como trabajamos</a>
          <a className="movil" href="#contacto">Contacto</a>
        </nav>

        <div className="gw-mobile-footer">
          <button className="gw-cta gw-cta--primary">Contactanos</button>
        </div>
      </aside>
    </>
  )
}
