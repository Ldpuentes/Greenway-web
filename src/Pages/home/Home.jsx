import "./Home.css"
import Home from "../../Pages/home/Home.js"

import Welcome from "../../components/navbar/welcome/welcome.jsx"

export default function Carousel() {
  const { slideRef, nextRef, prevRef } = Home({ interval: 6000 })

  return (
    
    <div className="stage">
      <div className="welcome-overlay">
      <Welcome />
    </div>
    <div className="container">

 
      <div className="slide" ref={slideRef}>
         
        <div
          className="item"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=1074&auto=format&fit=crop')" }}
        >
          <div className="content">
            <div className="name">Scotland</div>
            <div className="des">
              Experience the mystical Highlands under twilight skies and misty lochs.
            </div>
            <a className="seeMore" target="_blank" href="https://github.com/MDJAmin" rel="noreferrer">
              <button>See More</button>
            </a>
          </div>
        </div>

        <div
          className="item"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1439792675105-701e6a4ab6f0?q=80&w=1173&auto=format&fit=crop')" }}
        >
          <div className="content">
            <div className="name">Norway</div>
            <div className="des">
              Chase the Northern Lights under star-lit skies along scenic fjord roads.
            </div>
            <a className="seeMore" target="_blank" href="https://github.com/MDJAmin" rel="noreferrer">
              <button>See More</button>
            </a>
          </div>
        </div>

        <div
          className="item"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=1170&auto=format&fit=crop')" }}
        >
          <div className="content">
            <div className="name">New Zealand</div>
            <div className="des">
              Wander dramatic, mist-laden mountain paths that feel straight out of a dream.
            </div>
            <a className="seeMore" target="_blank" href="https://github.com/MDJAmin" rel="noreferrer">
              <button>See More</button>
            </a>
          </div>
        </div>

        <div
          className="item"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1477346611705-65d1883cee1e?q=80&w=2070&auto=format&fit=crop')" }}
        >
          <div className="content">
            <div className="name">Japan</div>
            <div className="des">
              Discover serene mountain temples shrouded in dusk and ancient forest trails.
            </div>
            <a className="seeMore" target="_blank" href="https://github.com/MDJAmin" rel="noreferrer">
              <button>See More</button>
            </a>
          </div>
        </div>
      </div>

      {/* Controles manuales (quítalos si no los quieres) */}
      <div className="button">
        <button className="prev" ref={prevRef}>◁</button>
        <button className="next" ref={nextRef}>▷</button>
      </div>

     
    </div>
   </div>
  )
}
