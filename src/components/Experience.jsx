import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/experience.css';

const Experience = () => {
    const { t } = useTranslation();

    // Obtener los arrays de skills de forma segura
    const promoterSkills = t('experience.work.promoter.skills', { returnObjects: true });
    const monitorSkills = t('experience.work.monitor.skills', { returnObjects: true });
    const operationsSkills = t('experience.work.operations.skills', { returnObjects: true });

    return (
        <section id="experience" className="experience-continer">
            <h1 className="experience-title">{t('experience.title')}</h1>

            <p className="experience-description">{t('experience.description')}</p>

            {/* EDUCACIÓN */}
            <div className="education-list">
                <h3>{t('experience.education.title')}</h3>

                <div className="education-item">
                    <h2 className="education-item-date">2020 - 2025</h2>
                    <p className="education-item-description">{t('experience.education.university')}</p>
                    <p className="education-item-description">{t('experience.education.universityDegree')}</p>
                </div>

                <div className="education-item">
                    <h2 className="education-item-date">2024</h2>
                    <p className="education-item-description">{t('experience.education.diploma')}</p>
                    <p className="education-item-description">{t('experience.education.diplomaDegree')}</p>
                </div>

                <div className="education-item">
                    <h2 className="education-item-date">2019</h2>
                    <p className="education-item-description">{t('experience.education.highschool')}</p>
                    <p className="education-item-description">{t('experience.education.highschoolDegree')}</p>
                </div>
            </div>

            {/* EXPERIENCIA LABORAL */}
            <div className="work-experience-list">
                <h3>{t('experience.work.title')}</h3>

                {/* PROMOTER */}
                <div className="work-experience-item">
                    <h2 className="work-experience-item-date">2022 - 2025</h2>
                    <p className="work-experience-item-title">{t('experience.work.promoter.title')}</p>
                    <p className="work-experience-item-description">{t('experience.work.promoter.description')}</p>
                    <div className="work-experience-skills">
                        {Array.isArray(promoterSkills) && promoterSkills.map((skill, index) => (
                            <span key={index} className="skill-badge">{skill}</span>
                        ))}
                    </div>
                </div>

                {/* MONITOR */}
                <div className="work-experience-item">
                    <h2 className="work-experience-item-date">2022 - 2025</h2>
                    <p className="work-experience-item-title">{t('experience.work.monitor.title')}</p>
                    <p className="work-experience-item-description">{t('experience.work.monitor.description')}</p>
                    <div className="work-experience-skills">
                        {Array.isArray(monitorSkills) && monitorSkills.map((skill, index) => (
                            <span key={index} className="skill-badge">{skill}</span>
                        ))}
                    </div>
                </div>

                {/* OPERATIONS */}
                <div className="work-experience-item">
                    <h2 className="work-experience-item-date">2019 - 2024</h2>
                    <p className="work-experience-item-title">{t('experience.work.operations.title')}</p>
                    <p className="work-experience-item-description">{t('experience.work.operations.description')}</p>
                    <div className="work-experience-skills">
                        {Array.isArray(operationsSkills) && operationsSkills.map((skill, index) => (
                            <span key={index} className="skill-badge">{skill}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;