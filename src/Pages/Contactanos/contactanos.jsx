import React, { useRef } from "react";
import { useQuienesSomosFX } from "../../Pages/quienesSomos/quienessomos.js"
import "./contactanos.css";
import Brokerajew from "../../assets/Brokerajew.png"

export default function Contactanos() {
  const ref = useRef(null);
  useQuienesSomosFX(ref);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado ✅");
  };

  return (
    <section className="contact" id="contacto" ref={ref}>
      {/* Background decor */}
      <div className="contact-bg" aria-hidden="true" />

      {/* Encabezado */}
      <header className="contact-header" data-anim="fade-up">
        <span className="badge">GreenWay</span>
        <h1><span>Contáctanos</span></h1>
        <p>
          Cuéntanos brevemente tu necesidad: operamos con enfoque en
          <strong> transacciones seguras</strong>, <strong>acceso a mercados</strong>,
          <strong> gestión de riesgo</strong> y <strong>cumplimiento</strong>.
        </p>
      </header>

      {/* Layout 2 columnas (form + panel visual) */}
      <div className="contact-grid">
        {/* FORM */}
        <form className="contact-form" onSubmit={handleSubmit} data-anim="fade-left">
          <div className="form-grid">
            <div className="field">
              <label htmlFor="nombre">Nombre completo</label>
              <div className="input-wrap">
                <span className="i">👤</span>
                <input id="nombre" name="nombre" type="text" required placeholder="Tu nombre" />
              </div>
            </div>

            <div className="field">
              <label htmlFor="empresa">Empresa / Organización</label>
              <div className="input-wrap">
                <span className="i">🏢</span>
                <input id="empresa" name="empresa" type="text" placeholder="Ej: Impresistem" />
              </div>
            </div>

            <div className="field">
              <label htmlFor="email">Correo electrónico</label>
              <div className="input-wrap">
                <span className="i">✉️</span>
                <input id="email" name="email" type="email" required placeholder="correo@ejemplo.com" />
              </div>
            </div>

            <div className="field">
              <label htmlFor="telefono">Número de teléfono</label>
              <div className="input-wrap">
                <span className="i">📞</span>
                <input id="telefono" name="telefono" type="tel" placeholder="+57 300 000 0000" />
              </div>
            </div>

            <div className="field field-full">
              <label htmlFor="mensaje">Mensaje breve</label>
              <div className="input-wrap text">
                <span className="i">📝</span>
                <textarea id="mensaje" name="mensaje" rows="4" placeholder="Cuéntanos en pocas líneas..." />
              </div>
            </div>
          </div>

          <button type="submit" className="btn-send" aria-label="Enviar mensaje">Enviar mensaje</button>
          <p className="mini-note">Te respondemos en menos de 24 horas hábiles.</p>
        </form>

        {/* PANEL VISUAL + INFO */}
        <aside className="contact-aside" aria-label="Información de contacto">
          <div className="aside-card" data-anim="pop">
            <div
              className="aside-hero"
              // Reemplaza por heroImg si importas tu imagen local
              style={{
                backgroundImage:
                  `url(${Brokerajew})`,
              }}
            >
              <div className="watermark">GREENWAY</div>
            </div>

            <div className="aside-body">
              <h3>Hablemos de tu caso</h3>
              <ul className="ticks">
                <li>Transacciones seguras con evidencia</li>
                <li>Acceso a mercados internacionales</li>
                <li>Gestión de riesgo y cumplimiento</li>
              </ul>

              <div className="contact-cards">
                <div className="ccard" data-anim="fade-up" data-delay="80">
                  <span className="cc-ico">📧</span>
                  <div>
                    <strong>Correo</strong>
                    <p>comercial@greenway.com</p>
                  </div>
                </div>
                <div className="ccard" data-anim="fade-up" data-delay="140">
                  <span className="cc-ico">📍</span>
                  <div>
                    <strong>Ubicación</strong>
                    <p>Estados Unidos Miami -Florida </p>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
