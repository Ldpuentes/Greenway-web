import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/navbar.jsx'
import Home from './pages/home/Home.jsx'
import About from './Pages/quienesSomos/quienessomos.jsx'
import Welcome from './components/navbar/welcome/welcome.jsx'
// import Contactanos from './pages/Contactanos'

export default function App() {
  return (

    <div className="min-h-screen">
      <Navbar />
      <main className="p-4">

        <Routes>


          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/contactanos" element={<Contactanos />} /> */}

          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </main>
    </div>
  )
}
