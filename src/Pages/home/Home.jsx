import './Home.css'
import Carousel from '../../components/Home/Carrusel/Carrusel' // o "./Carousel.jsx" según el nombre exacto del archivo

export default function Home() {
  return (
    <div className='stage'>
      <Carousel />
    </div>
  )
}
