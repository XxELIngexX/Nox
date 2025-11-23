import React from 'react';
import educationImg from '../assets/education.jpg';
import workImg from '../assets/work.jpg';

import '../styles/experience.css';

const Experience = () => {
    return (
        <section id="experience" className="experience-continer">
            <h1 className="experience-title">Experience</h1>

            <p className="experience-description">De la vida universitaria a la gestión operativa. Conoce mi cronología de experiencia, enfocada en habilidades de liderazgo, comunicación y tecnología.</p>

            {/* IMAGEN 1: La que se coloca en la esquina superior izquierda */}
            {/* <img
                className="experience-image image-education"
                src={educationImg}
                alt="Education"
            /> */}

            {/* EDUCACIÓN: Se coloca a la derecha de la Imagen 1 */}
            <div className="education-list">
                <h3>Education</h3>

                <div className="education-item">
                    <h2 className="education-item-date">2020 - 2025</h2>
                    <p className="education-item-description">Universidad Escuela Colombiana de ingenieria Julio Garavito</p>
                    <p className="education-item-description">Ingeniería de Sistemas</p>
                </div>

                <div className="education-item">
                    <h2 className="education-item-date">2024</h2>
                    <p className="education-item-description">Universidad Distrital Francisco Jose de Caldas</p>
                    <p className="education-item-description">Diplomado de ciberSeguridad</p>
                </div>

                <div className="education-item">
                    <h2 className="education-item-date">2019</h2>
                    <p className="education-item-description">Gimnasio los Alerces</p>
                    <p className="education-item-description">Bachillerato</p>
                </div>
            </div>

            <div className="work-experience-list">
                <h3>Work Experience</h3>

                <div className="work-experience-item">
                    <h2 className="work-experience-item-date">2022 - 2025</h2>
                    <p className="work-experience-item-title">Promotor</p>
                    <p className="work-experience-item-description">Represento a la universidad en eventos, moviéndome entre logística interna, orientación a futuros estudiantes y manejo de público.</p>
                    <div className="work-experience-skills">
                        <span className="skill-badge">Comunicación</span>
                        <span className="skill-badge">Adaptabilidad</span>
                        <span className="skill-badge">Organización</span>
                    </div>
                </div>

                <div className="work-experience-item">
                    <h2 className="work-experience-item-date">2022 - 2025</h2>
                    <p className="work-experience-item-title">Monitor Académico</p>
                    <p className="work-experience-item-description">Acompañé a estudiantes en lógica, programación y resolución de problemas. Daba asesorías personalizadas.</p>
                    <div className="work-experience-skills">
                        <span className="skill-badge">Pedagogía</span>
                        <span className="skill-badge">Liderazgo</span>
                        <span className="skill-badge">Mentoría</span>
                    </div>
                </div>

                <div className="work-experience-item">
                    <h2 className="work-experience-item-date">2019 - 2024</h2>
                    <p className="work-experience-item-title">Operaciones & Atención al Cliente</p>
                    <p className="work-experience-item-description">Roles en ambientes de alta demanda (mesero, auxiliar, apoyo operativo). Experiencias: Café y Música Bar, Corparques, La Manrique.</p>
                    <div className="work-experience-skills">
                        <span className="skill-badge">Presión</span>
                        <span className="skill-badge">Coordinación</span>
                        <span className="skill-badge">Resolución rápida</span>
                    </div>
                </div>
            </div>

            {/* <img
                className="experience-image image-work"
                src={workImg}
                alt="Professional"
            /> */}

        </section>
    );
}

export default Experience;