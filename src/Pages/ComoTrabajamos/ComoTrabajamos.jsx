import React, { useRef } from "react";
import { useQuienesSomosFX } from "../../Pages/quienesSomos/quienessomos.js"; // reusamos tu hook
import "./ComoTrabajamos.css";

export default function ComoTrabajamos() {
  const rootRef = useRef(null);
  useQuienesSomosFX(rootRef);

  return (
    <section className="como-section" ref={rootRef}>
      {/* HERO */}
      <header className="como-hero" data-anim="fade-up">
        <span className="badge">GreenWay</span>
        <h1>
          ¿Cómo <span>trabajamos</span>?
        </h1>
        <p>
          Facilitamos <strong>transacciones seguras</strong>, habilitamos el <strong>acceso a mercados globales</strong> y
          operamos con <strong>gestión de riesgo</strong> y <strong>cumplimiento</strong> como ejes del servicio.
        </p>
      </header>

      {/* PILARES (del PDF: transacciones seguras / mercados globales / riesgo / cumplimiento) */}
      <section className="como-pillars">
        <h2 className="sr-only">Pilares</h2>
        <div className="pillars-grid">
          <article className="pillar" data-anim="fade-left">
            <h3>Transacciones seguras</h3>
            <p>
              Procesos definidos de punta a punta para asegurar integridad, trazabilidad y evidencia de cada operación.
            </p>
          </article>
          <article className="pillar" data-anim="fade-left" data-delay="80">
            <h3>Acceso a mercados</h3>
            <p>
              Rutas claras de entrada y operación en mercados internacionales, priorizando viabilidad y eficiencia.
            </p>
          </article>
          <article className="pillar" data-anim="fade-left" data-delay="160">
            <h3>Gestión de riesgo</h3>
            <p>
              Identificación, mitigación y monitoreo continuo del riesgo operativo, legal y reputacional.
            </p>
          </article>
          <article className="pillar" data-anim="fade-left" data-delay="240">
            <h3>Cumplimiento</h3>
            <p>
              Políticas y controles alineados a normativas aplicables, con documentación y reportabilidad.
            </p>
          </article>
        </div>
      </section>

      {/* PASOS DEL SERVICIO (enfocados al contenido del PDF) */}
      <section className="como-steps">
        <h2 data-anim="fade-up">Ruta de trabajo</h2>
        <div className="steps-grid">
          <article className="step" data-anim="fade-up">
            <div className="step-head">
              <div className="step-num">01</div>
              <h3>Diagnóstico</h3>
            </div>
            <p>
              Levantamos objetivo, alcance y contexto: procesos actuales, actores, regulaciones y riesgos relevantes.
            </p>
            <ul>
              <li>Entrevistas y análisis documental</li>
              <li>Mapa de procesos y actores</li>
              <li>Revisión regulatoria base</li>
            </ul>
          </article>

          <article className="step" data-anim="fade-up" data-delay="60">
            <div className="step-head">
              <div className="step-num">02</div>
              <h3>Estrategia</h3>
            </div>
            <p>
              Definimos la vía de entrada a mercado y el esquema de operación segura (roles, hitos, evidencias).
            </p>
            <ul>
              <li>Ruta de mercado y canales</li>
              <li>Roles, responsabilidades y SLAs</li>
              <li>Plan de onboarding operativo</li>
            </ul>
          </article>

          <article className="step" data-anim="fade-up" data-delay="120">
            <div className="step-head">
              <div className="step-num">03</div>
              <h3>Riesgo & Cumplimiento</h3>
            </div>
            <p>
              Diseñamos controles, documentación y checklist para contrapartes, operación y reportes.
            </p>
            <ul>
              <li>Políticas y procedimientos</li>
              <li>Checklist operativo y contractual</li>
              <li>Gestión de evidencias</li>
            </ul>
          </article>

          <article className="step" data-anim="fade-up" data-delay="180">
            <div className="step-head">
              <div className="step-num">04</div>
              <h3>Implementación</h3>
            </div>
            <p>
              Activamos la operación (brokeraje / representación) con tableros de avance y escalamiento claro.
            </p>
            <ul>
              <li>Hitos, SLAs y responsables</li>
              <li>Integración con aliados clave</li>
              <li>Tablero de seguimiento</li>
            </ul>
          </article>

          <article className="step" data-anim="fade-up" data-delay="240">
            <div className="step-head">
              <div className="step-num">05</div>
              <h3>Monitoreo</h3>
            </div>
            <p>
              Seguimiento continuo con indicadores operativos y de riesgo. Trazabilidad y reportes periódicos.
            </p>
            <ul>
              <li>KPIs operativos básicos</li>
              <li>Alertas y registros de control</li>
              <li>Informes ejecutivos</li>
            </ul>
          </article>

          <article className="step" data-anim="fade-up" data-delay="300">
            <div className="step-head">
              <div className="step-num">06</div>
              <h3>Mejora continua</h3>
            </div>
            <p>
              Iteramos sobre procesos, costos y tiempos; ajustamos controles y documentación para escalar.
            </p>
            <ul>
              <li>Lecciones aprendidas</li>
              <li>Optimización de flujos</li>
              <li>Actualización de controles</li>
            </ul>
          </article>
        </div>
      </section>

      {/* ENTREGABLES (en línea con el plan) */}
      <section className="como-deliverables">
        <h2 data-anim="fade-up">Entregables</h2>
        <div className="cards">
          <article className="card" data-anim="pop">
            <h4>Ruta de mercado</h4>
            <p>Documento con la vía de entrada, actores, y esquema operativo.</p>
          </article>
          <article className="card" data-anim="pop" data-delay="60">
            <h4>Kit de cumplimiento</h4>
            <p>Políticas, procedimientos, checklist y anexos de soporte.</p>
          </article>
          <article className="card" data-anim="pop" data-delay="120">
            <h4>Plan de implementación</h4>
            <p>Hitos, SLAs, responsables, evidencias y escalamiento.</p>
          </article>
          <article className="card" data-anim="pop" data-delay="180">
            <h4>Reportes operativos</h4>
            <p>Seguimiento de KPIs básicos y registro de controles.</p>
          </article>
        </div>
      </section>

      {/* CTA */}
      <footer className="como-cta" data-anim="fade-up">
        <h3>¿Activamos tu operación con seguridad y cumplimiento?</h3>
        <a className="btn" href="#contacto">Contactar</a>
      </footer>
    </section>
  );
}
