import React from 'react';
import educationImg from '../assets/education.jpg';
import workImg from '../assets/work.jpg';

import '../styles/experience.css';

const Experience = () => {
    return (
        <section id="experience" className="experience-continer">
            <h1 className="experience-title">Experience</h1>

            <p className="experience-description">From university life to operational management. Discover my experience timeline, focused on leadership, communication, and technology skills.</p>

            {/* IMAGEN 1: La que se coloca en la esquina superior izquierda */}
            {/* <img
                className="experience-image image-education"
                src={educationImg}
                alt="Education"
            /> */}

            {/* EDUCACIÓN */}
            <div className="education-list">
                <h3>Education</h3>

                <div className="education-item">
                    <h2 className="education-item-date">2020 - 2025</h2>
                    <p className="education-item-description">Escuela Colombiana de Ingenieria Julio Garavito University</p>
                    <p className="education-item-description">Systems Engineering</p>
                </div>

                <div className="education-item">
                    <h2 className="education-item-date">2024</h2>
                    <p className="education-item-description">Francisco Jose de Caldas District University</p>
                    <p className="education-item-description">Cybersecurity Diploma</p>
                </div>

                <div className="education-item">
                    <h2 className="education-item-date">2019</h2>
                    <p className="education-item-description">Gimnasio los Alerces</p>
                    <p className="education-item-description">High School Diploma</p>
                </div>
            </div>

            {/* EXPERIENCIA LABORAL */}
            <div className="work-experience-list">
                <h3>Work Experience</h3>

                <div className="work-experience-item">
                    <h2 className="work-experience-item-date">2022 - 2025</h2>
                    <p className="work-experience-item-title">University Promoter</p>
                    <p className="work-experience-item-description">Represented the university at events, handling internal logistics, guiding prospective students, and managing public interactions.</p>
                    <div className="work-experience-skills">
                        <span className="skill-badge">Communication</span>
                        <span className="skill-badge">Adaptability</span>
                        <span className="skill-badge">Organization</span>
                    </div>
                </div>

                <div className="work-experience-item">
                    <h2 className="work-experience-item-date">2022 - 2025</h2>
                    <p className="work-experience-item-title">Academic Monitor</p>
                    <p className="work-experience-item-description">Assisted students with logic, programming, and problem-solving. Provided personalized tutoring and academic support.</p>
                    <div className="work-experience-skills">
                        <span className="skill-badge">Teaching</span>
                        <span className="skill-badge">Leadership</span>
                        <span className="skill-badge">Mentoring</span>
                    </div>
                </div>

                <div className="work-experience-item">
                    <h2 className="work-experience-item-date">2019 - 2024</h2>
                    <p className="work-experience-item-title">Operations & Customer Service</p>
                    <p className="work-experience-item-description">Roles in high-demand environments (waiter, assistant, operational support). Experience at: Café y Música Bar, Corparques, La Manrique.</p>
                    <div className="work-experience-skills">
                        <span className="skill-badge">Pressure Handling</span>
                        <span className="skill-badge">Coordination</span>
                        <span className="skill-badge">Quick Resolution</span>
                    </div>
                </div>
            </div>

            {/* IMAGEN 2: La que se coloca en la esquina inferior derecha */}
            {/* <img
                className="experience-image image-work"
                src={workImg}
                alt="Professional"
            /> */}

        </section>
    );
}

export default Experience;