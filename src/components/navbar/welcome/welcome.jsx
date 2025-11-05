import { useEffect, useRef } from "react";
import "./welcome.css";
import { initWelcomeAnimations, destroyWelcomeAnimations } from "./welcome.js";

export default function Welcome({ className = "" }) {
  const rootRef = useRef(null);

  useEffect(() => {
    const cleanup = initWelcomeAnimations(rootRef.current);
    return () => destroyWelcomeAnimations(cleanup);
  }, []);

  return (
    <section ref={rootRef} className={`gw-welcome ${className}`}>
      <div className="gw-welcome__inner">
      
        <div className="gw-underline" aria-hidden="true"></div>

     <p className="gw-tagline gw-tagline--badge">
  Tecnología + <span className="em">sostenibilidad</span> para impulsar tu negocio.
</p>


        {/* contenedor para partículas sutiles */}
        <div className="gw-particles" aria-hidden="true"></div>
      </div>
    </section>
  );
}
