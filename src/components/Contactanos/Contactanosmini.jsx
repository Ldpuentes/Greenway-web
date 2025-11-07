import React from "react";
import "./ContactanosMini.css";

export default function ContactMini() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Mini formulario enviado ✅");
  };

  return (
    <section className="contact-mini" id="contacto-mini">
      {/* Fondos decorativos */}
      <div className="cm-blob cm-blob--green" aria-hidden="true" />
      <div className="cm-blob cm-blob--blue" aria-hidden="true" />

      <div className="cm-wrap" data-anim="fade-up">
        <div className="cm-head">
          <span className="cm-badge">GreenWay</span>
          <h2>¿Listo para <span>comenzar</span>?</h2>
          <p>
            Te ayudamos con soluciones <strong>claras</strong>, <strong>seguras</strong> y
            enfocadas en <strong>cumplimiento</strong>.
          </p>
        </div>

        <form className="cm-form" onSubmit={handleSubmit} data-anim="pop" data-delay="80">
          <label className="cm-input">
            <span className="cm-ico" aria-hidden="true">👤</span>
            <input type="text" name="nombre" placeholder="Tu nombre" required />
          </label>

          <label className="cm-input">
            <span className="cm-ico" aria-hidden="true">✉️</span>
            <input type="email" name="email" placeholder="Correo electrónico" required />
          </label>

          <button type="submit" className="cm-btn" aria-label="Contactar">
            Contactar
            <span className="cm-arrow" aria-hidden="true">→</span>
          </button>

          <small className="cm-note">Respuesta en menos de 24h hábiles.</small>
        </form>
      </div>
    </section>
  );
}
