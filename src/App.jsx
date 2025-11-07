import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/navbar.jsx'
import Home from './pages/home/Home.jsx'
import About from './Pages/quienesSomos/quienessomos.jsx'
import ComoTrabajamos from './Pages/ComoTrabajamos/ComoTrabajamos.jsx'
import Contactanos from './Pages/Contactanos/contactanos.jsx'
import ProductosServicios from './Pages/Productosservicios/pys.jsx'

export default function App() {
  return (
    <div className='min-h-screen'>   
      <Navbar />
      <main className='p-4'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path="/comotrabajamos" element={<ComoTrabajamos />} />
         
          <Route path="/contactanos" element={<Contactanos />} />
          <Route path="/productosservicios" element={<ProductosServicios />} />

         
        </Routes>
      </main>
    </div>
  )
}
