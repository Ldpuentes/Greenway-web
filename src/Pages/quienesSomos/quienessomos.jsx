import { useEffect, useRef } from "react"
import anime from "animejs"
import "./quienessomos.css"

export default function About() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const textRef = useRef(null)
  const itemsRef = useRef(null)
  const blobRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current

    // Observador para animar solo cuando se vea
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        anime({
          targets: titleRef.current,
          opacity: [0, 1],
          translateY: [25, 0],
          duration: 700,
          easing: "easeOutQuad"
        })

        anime({
          targets: textRef.current,
          opacity: [0, 1],
          translateY: [20, 0],
          delay: 200,
          duration: 700,
          easing: "easeOutQuad"
        })

        anime({
          targets: itemsRef.current.querySelectorAll(".about-item"),
          opacity: [0, 1],
          translateY: [18, 0],
          delay: anime.stagger(120, { start: 350 }),
          duration: 700,
          easing: "easeOutQuad"
        })

        anime({
          targets: blobRef.current,
          scale: [
            { value: 1.05, duration: 2000 },
            { value: 1, duration: 2000 }
          ],
          easing: "easeInOutSine",
          loop: true
        })

        observer.disconnect()
      }
    }, { threshold: 0.25 })

    observer.observe(section)
  }, [])

  return (
    <section className="about-section" ref={sectionRef}>
      <div className="about-content">
        <h2 className="about-title" ref={titleRef}>Quiénes Somos</h2>

        <p className="about-text" ref={textRef}>
          Somos una empresa comprometida con el desarrollo sostenible,
          creando soluciones ambientales que ayudan a las organizaciones
          a reducir su impacto ecológico mientras mejoran su productividad.
        </p>

        <div className="about-items" ref={itemsRef}>
          <div className="about-item">🌱 Sostenibilidad como cultura</div>
          <div className="about-item">🔧 Innovación aplicada</div>
          <div className="about-item">🌍 Responsabilidad ambiental real</div>
        </div>
      </div>

      <div className="about-blob" ref={blobRef}></div>
    </section>
  )
}
