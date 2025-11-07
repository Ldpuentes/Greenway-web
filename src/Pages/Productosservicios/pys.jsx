import React, { useRef } from "react";
import { useQuienesSomosFX } from "../../Pages/quienesSomos/quienessomos.js";
import "./pys.css";
import primera from "../../assets/primera.jpg"
import segunda from "../../assets/segunda.jpg"
import Tercera from "../../assets/Tercera.jpg"
import Cuarta from "../../assets/Cuarta.jpg"
import Quinta from "../../assets/Quinta.jpg"
import Sexta from "../../assets/Sexta.jpg"
import ContactMini from "../../components/Contactanos/Contactanosmini.jsx";

export default function ProductosServicios() {
    const rootRef = useRef(null);
    useQuienesSomosFX(rootRef);

    return (
        <section className="ps-section" ref={rootRef} id="servicios">

            {/* HERO VISUAL */}
            <div className="ps-hero-img" data-anim="fade-up"></div>

            <header className="ps-hero" data-anim="fade-up">
                <span className="ps-badge">GreenWay</span>
                <h1>
                    Productos & <span>Servicios</span>
                </h1>
                <p>
                    Ejecutamos operaciones con <strong>transacciones seguras</strong>,
                    habilitando <strong>acceso a mercados</strong> con
                    <strong> gestión de riesgo</strong> y <strong>cumplimiento</strong> corporativo.
                </p>
            </header>

            {/* LÍNEAS */}
            <section className="ps-lines">

                <div className="ps-grid">

                    {/* Transacciones Seguras */}
                    <article className="ps-card" data-anim="fade-left">
                        <div className="hero">
                            <img src={primera} alt="GreenWay - Operaciones seguras" className="hero-img" />
                        </div>
                        <div className="ps-card-content">
                            <h3>Transacciones seguras</h3>
                            <p>
                                Integridad, trazabilidad y evidencia operativa de extremo a extremo.
                            </p>
                            <ul>
                                <li>Mapeo de flujo transaccional</li>
                                <li>Checklist operativo y de evidencia</li>
                                <li>Controles antes / durante / después</li>
                            </ul>
                        </div>
                    </article>

                    {/* Acceso a mercados */}
                    <article className="ps-card" data-anim="fade-left" data-delay="80">
                        <div className="hero">
                            <img src={Quinta} alt="GreenWay - Operaciones seguras" className="hero-img" />
                        </div>
                        <div className="ps-card-content">
                            <h3>Acceso a mercados</h3>
                            <p>Rutas claras y viables para operar en mercados internacionales.</p>
                            <ul>
                                <li>Ruta de mercado y actores</li>
                                <li>Modelo de operación y roles</li>
                                <li>Onboarding de contrapartes</li>
                            </ul>
                        </div>
                    </article>

                    {/* Gestión de riesgo */}
                    <article className="ps-card" data-anim="fade-left" data-delay="160">
                        <div className="hero">
                            <img src={Cuarta} alt="GreenWay - Operaciones seguras" className="hero-img" />
                        </div>
                        <div className="ps-card-content">
                            <h3>Gestión de riesgo</h3>
                            <p>Mitigación operativa, legal y reputacional a nivel corporativo.</p>
                            <ul>
                                <li>Matriz de riesgo por proceso</li>
                                <li>Alertas y controles</li>
                                <li>Registro de incidentes</li>
                            </ul>
                        </div>
                    </article>

                    {/* Cumplimiento */}
                    <article className="ps-card" data-anim="fade-left" data-delay="240">
                         <div className="hero">
                            <img src={Sexta} alt="GreenWay - Operaciones seguras" className="hero-img" />
                        </div>
                        <div className="ps-card-content">
                            <h3>Cumplimiento</h3>
                            <p>Documentación, políticas y procesos alineados a normativas.</p>
                            <ul>
                                <li>Políticas y procedimientos</li>
                                <li>Checklists y evidencias</li>
                                <li>Reportes y auditoría</li>
                            </ul>
                        </div>
                    </article>

                </div>
            </section>

            {/* CTA */}
           <ContactMini/>
        </section>
    );
}
