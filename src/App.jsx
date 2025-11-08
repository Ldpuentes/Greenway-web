// src/App.jsx
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/navbar/navbar.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './Pages/home/Home.jsx'
import About from './Pages/quienesSomos/quienessomos.jsx'
import ComoTrabajamos from './Pages/ComoTrabajamos/ComoTrabajamos.jsx'
import Contactanos from './Pages/Contactanos/contactanos.jsx'
import ProductosServicios from './Pages/Productosservicios/pys.jsx'

const MotionMain = motion.main

const pageVariants = {
  initial: {
    clipPath: 'inset(0 0 0 100%)',
    opacity: 0.8,
  },
  animate: {
    clipPath: 'inset(0 0 0 0)',
    opacity: 1,
  },
  exit: {
    clipPath: 'inset(0 100% 0 0)',
    opacity: 0.85,
  },
}

const pageTransition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] }

export default function App() {
  const location = useLocation()

  const baseStyle = {
    position: 'relative',
    overflow: 'hidden',
    willChange: 'clip-path, opacity',
  }

  return (
    <div className='min-h-screen bg-white'>
      <Navbar />

      {/* 🔝 Scroll al inicio al cambiar de página */}
      <ScrollToTop />

      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route
            path='/'
            element={
              <MotionMain
                className='p-4'
                style={baseStyle}
                variants={pageVariants}
                initial='initial'
                animate='animate'
                exit='exit'
                transition={pageTransition}
              >
                <Home />
              </MotionMain>
            }
          />
          <Route
            path='/about'
            element={
              <MotionMain
                className='p-4'
                style={baseStyle}
                variants={pageVariants}
                initial='initial'
                animate='animate'
                exit='exit'
                transition={pageTransition}
              >
                <About />
              </MotionMain>
            }
          />
          <Route
            path='/comotrabajamos'
            element={
              <MotionMain
                className='p-4'
                style={baseStyle}
                variants={pageVariants}
                initial='initial'
                animate='animate'
                exit='exit'
                transition={pageTransition}
              >
                <ComoTrabajamos />
              </MotionMain>
            }
          />
          <Route
            path='/contactanos'
            element={
              <MotionMain
                className='p-4'
                style={baseStyle}
                variants={pageVariants}
                initial='initial'
                animate='animate'
                exit='exit'
                transition={pageTransition}
              >
                <Contactanos />
              </MotionMain>
            }
          />
          <Route
            path='/productosservicios'
            element={
              <MotionMain
                className='p-4'
                style={baseStyle}
                variants={pageVariants}
                initial='initial'
                animate='animate'
                exit='exit'
                transition={pageTransition}
              >
                <ProductosServicios />
              </MotionMain>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  )
}
