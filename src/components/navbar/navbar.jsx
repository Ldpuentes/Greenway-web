import { useLayoutEffect, useRef } from 'react'
import { useLocation, Link } from 'react-router-dom'
import {
  initNavbarAnimations,
  createMobileTimelines,
  bindMobileInteractions,
} from './navbar.js'
import './navbar.css'
import logo from '../../assets/greenway.png'

export default function Navbar() {
  const navRef = useRef(null)
  const overlayRef = useRef(null)
  const panelRef = useRef(null)
  const location = useLocation()

  useLayoutEffect(() => {
    const navEl = navRef.current
    const overlayEl = overlayRef.current
    const panelEl = panelRef.current
    if (!navEl || !overlayEl || !panelEl) return

    document.documentElement.classList.remove('gw-mobile-open')
    panelEl.removeAttribute('data-open')
    overlayEl.style.opacity = '0'
    overlayEl.style.pointerEvents = 'none'
    panelEl.style.transform = 'translateX(100%)'

    document.documentElement.classList.add('gw-hydrated')

    initNavbarAnimations(navEl)
    const timelines = createMobileTimelines({ overlayEl, panelEl })
    const controls = bindMobileInteractions(navEl, timelines, {
      overlayEl,
      panelEl,
    })

    return () => {
      controls?.dispose?.()
      document.documentElement.classList.remove('gw-mobile-open')
      panelEl?.removeAttribute('data-open')
    }
  }, [])

  const isActive = path =>
    location.pathname.toLowerCase() === path.toLowerCase()

  return (
    <>
      <nav className='gw-navbar' ref={navRef} aria-label='GreenWay'>
        <div className='gw-container'>
          <Link to='/' className='gw-brand' aria-label='Inicio GreenWay'>
            <img src={logo} alt='Green Way' className='gw-icon' />
          </Link>

          <div className='gw-menu' role='menubar' aria-label='Principal'>
            <Link
              to='/'
              className={`gw-link ${isActive('/') ? 'active' : ''}`}
              role='menuitem'
            >
              Home
            </Link>
            <Link
              to='/about'
              className={`gw-link ${isActive('/about') ? 'active' : ''}`}
              role='menuitem'
            >
              Quienes Somos
            </Link>
            <Link
              to='/comotrabajamos'
              className={`gw-link ${
                isActive('/comotrabajamos') ? 'active' : ''
              }`}
              role='menuitem'
            >
              Como Trabajamos
            </Link>
            <Link
              to='/productosservicios'
              className={`gw-link ${
                isActive('/productosservicios') ? 'active' : ''
              }`}
              role='menuitem'
            >
              Productos y Servicios
            </Link>
            <span className='gw-underline' aria-hidden='true' />
          </div>

          <div className='gw-actions' aria-label='Acciones'>
            <Link to='/contactanos'>
              <button className='gw-cta gw-cta--primary'>Contactanos</button>
            </Link>
          </div>

          <button
            className='gw-burger'
            aria-label='Abrir menú'
            aria-expanded='true'
            aria-controls='mobile-menu'
          >
            <span aria-hidden='true'></span>
          </button>
        </div>
      </nav>

      <div className='gw-nav-spacer' />

      <div className='gw-overlay' ref={overlayRef} />
      <aside
        className='gw-mobile'
        ref={panelRef}
        aria-label='Menú móvil'
        role='dialog'
        aria-modal='true'
      >
        <nav style={{ display: 'contents' }}>
          <Link to='/' className={`movil ${isActive('/') ? 'active' : ''}`}>
            Home
          </Link>
          <Link
            to='/about'
            className={`movil ${isActive('/about') ? 'active' : ''}`}
          >
            Quienes somos
          </Link>
          <Link
            to='/comotrabajamos'
            className={`movil ${isActive('/comotrabajamos') ? 'active' : ''}`}
          >
            Como Trabajamos
          </Link>
          <Link
            to='/productosservicios'
            className={`movil ${
              isActive('/productosservicios') ? 'active' : ''
            }`}
          >
            Productos y Servicios
          </Link>
        </nav>

        <div className='gw-mobile-footer'>
          <Link to='/contactanos'>
            <button className='gw-cta gw-cta--primary'>Contactanos</button>
          </Link>
        </div>
      </aside>
    </>
  )
}
