import { useState } from 'react';
import { FiGithub, FiExternalLink, FiChevronDown } from 'react-icons/fi';
import '../styles/projectCard.css';

const ProjectCard = ({ 
    title, 
    description, 
    projectImage,
    hasVersions,
    versions,
    website, 
    demoLink 
}) => {
    const [expandedVersion, setExpandedVersion] = useState(null);

    const toggleVersion = (versionId) => {
        setExpandedVersion(expandedVersion === versionId ? null : versionId);
    };

    return (
        <div className='project-card'>
            
            {/* PROYECTO IMAGE */}
            <div className='project-card__image'>
                <img 
                    src={projectImage} 
                    alt={title}
                    className='project-card__image-img'
                />
            </div>

            {/* INFO PRINCIPAL */}
            <div className='project-card__info'>
                <h3 className='project-card__title'>{title}</h3>
                <p className='project-card__description'>{description}</p>

                {/* VERSIONES / REPOSITORIOS */}
                {hasVersions && versions && (
                    <div className='project-card__versions'>
                        <h4 className='versions__title'>Versions & Repositories</h4>
                        
                        {versions.map((version) => (
                            <div key={version.id} className='version-item'>
                                <button 
                                    className='version-header'
                                    onClick={() => toggleVersion(version.id)}
                                >
                                    <div className='version-header__info'>
                                        <h5 className='version-header__name'>{version.name}</h5>
                                    </div>
                                    <div className={`version-header__icon ${expandedVersion === version.id ? 'active' : ''}`}>
                                        <FiChevronDown size={20} />
                                    </div>
                                </button>

                                {expandedVersion === version.id && (
                                    <div className='version-content'>
                                        <p className='version-content__description'>{version.description}</p>
                                        
                                        <div className='version-content__tech'>
                                            {version.technologies.map((tech, index) => (
                                                <span key={index} className='tech-tag'>{tech}</span>
                                            ))}
                                        </div>

                                        <a 
                                            href={version.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className='version-content__link'
                                        >
                                            <FiGithub size={18} />
                                            View Repository
                                        </a>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                {/* LINKS ADICIONALES (si no tiene versiones) */}
                {!hasVersions && (
                    <div className='project-card__links'>
                        {website && (
                            <a 
                                href={website} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className='project-link project-link--website'
                            >
                                <FiExternalLink size={20} />
                                Website
                            </a>
                        )}
                        
                        {demoLink && (
                            <a 
                                href={demoLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className='project-link project-link--demo'
                            >
                                <FiExternalLink size={20} />
                                Live Demo
                            </a>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;