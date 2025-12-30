import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ProjectCard from './ProjectCard';
import '../styles/projects.css';

const Projects = () => {
    const { t } = useTranslation();

    const projectsData = [
        {
            id: 1,
            title: t('projects.projectsList.econexion.title'),
            description: t('projects.projectsList.econexion.description'),
            projectImage: '/econexion/logo.png',
            hasVersions: true,
            versions: [
                {
                    id: 1,
                    name: t('projects.projectsList.econexion.versions.organization.name'),
                    description: t('projects.projectsList.econexion.versions.organization.description'),
                    technologies: ['Documentation', 'Project Management', 'Collaboration'],
                    github: 'https://github.com/Eco-nexion'
                },
                {
                    id: 2,
                    name: t('projects.projectsList.econexion.versions.frontend.name'),
                    description: t('projects.projectsList.econexion.versions.frontend.description'),
                    technologies: ['React', 'JavaScript', 'CSS', 'REST API'],
                    github: 'https://github.com/Eco-nexion/Econexion-front'
                },
                {
                    id: 3,
                    name: t('projects.projectsList.econexion.versions.backend.name'),
                    description: t('projects.projectsList.econexion.versions.backend.description'),
                    technologies: ['Java', 'Spring Boot', 'REST API', 'Database'],
                    github: 'https://github.com/Eco-nexion/Econexion-back'
                },
                {
                    id: 4,
                    name: t('projects.projectsList.econexion.versions.econexia.name'),
                    description: t('projects.projectsList.econexion.versions.econexia.description'),
                    technologies: ['React', 'JavaScript', 'Apache', 'Let\'s Encrypt', 'HTTPS', 'Socket.io'],
                    github: 'https://github.com/XxELIngexX/AREP-T6'
                }
            ],
            website: null,
            demoLink: null
        },
        {
            id: 2,
            title: t('projects.projectsList.santaSecreto.title'),
            description: t('projects.projectsList.santaSecreto.description'),
            projectImage: '/santaSecreto/logo.png',
            hasVersions: true,
            versions: [
                {
                    id: 1,
                    name: t('projects.projectsList.santaSecreto.versions.frontend.name'),
                    description: t('projects.projectsList.santaSecreto.versions.frontend.description'),
                    technologies: ['React 18+', 'Vite', 'TypeScript', 'Zustand', 'Tailwind CSS', 'Shadcn/ui', 'Zod', 'Axios', 'React Router'],
                    github: 'https://github.com/XxELIngexX/santa-secreto-front'
                },
                {
                    id: 2,
                    name: t('projects.projectsList.santaSecreto.versions.backend.name'),
                    description: t('projects.projectsList.santaSecreto.versions.backend.description'),
                    technologies: ['Node.js', 'Express.js', 'Prisma', 'PostgreSQL', 'JWT', 'bcrypt', 'Zod', 'Pino', 'Docker'],
                    github: 'https://github.com/XxELIngexX/santa-secreto-back'
                }
            ],
            website: null,
            demoLink: null
        },
        {
            id: 3,
            title: t('projects.projectsList.propertyManager.title'),
            description: t('projects.projectsList.propertyManager.description'),
            projectImage: '/property/logo.png',
            hasVersions: true,
            versions: [
                {
                    id: 1,
                    name: t('projects.projectsList.propertyManager.versions.frontend.name'),
                    description: t('projects.projectsList.propertyManager.versions.frontend.description'),
                    technologies: ['HTML', 'JavaScript', 'Docker', 'REST API Client'],
                    github: 'https://github.com/XxELIngexX/AREP-T5'
                },
                {
                    id: 2,
                    name: t('projects.projectsList.propertyManager.versions.backend.name'),
                    description: t('projects.projectsList.propertyManager.versions.backend.description'),
                    technologies: ['Java', 'Spring Boot', 'REST API', 'JPA', 'Hibernate', 'Docker', 'AWS EC2'],
                    github: 'https://github.com/XxELIngexX/AREP-T5'
                },
                {
                    id: 3,
                    name: t('projects.projectsList.propertyManager.versions.database.name'),
                    description: t('projects.projectsList.propertyManager.versions.database.description'),
                    technologies: ['MySQL', 'Docker', 'AWS EC2', 'Database Design'],
                    github: 'https://github.com/XxELIngexX/AREP-T5'
                }
            ],
            website: null,
            demoLink: null
        },
        {
            id: 4,
            title: t('projects.projectsList.twitteerCopy.title'),
            description: t('projects.projectsList.twitteerCopy.description'),
            projectImage: '/x-copy/logo.png',
            hasVersions: true,
            versions: [
                {
                    id: 1,
                    name: t('projects.projectsList.twitteerCopy.versions.frontend.name'),
                    description: t('projects.projectsList.twitteerCopy.versions.frontend.description'),
                    technologies: ['JavaScript', 'HTML', 'CSS', 'GitHub Pages', 'JWT', 'OAuth 2.0', 'Fetch API'],
                    github: 'https://github.com/XxELIngexX/AREP-T7-Front'
                },
                {
                    id: 2,
                    name: t('projects.projectsList.twitteerCopy.versions.backend.name'),
                    description: t('projects.projectsList.twitteerCopy.versions.backend.description'),
                    technologies: ['AWS Lambda', 'API Gateway', 'AWS Cognito', 'DynamoDB', 'PostgreSQL', 'JWT', 'Python/Node.js/Java'],
                    github: 'https://github.com/XxELIngexX/AREP-T7'
                }
            ],
            website: null,
            demoLink: null
        },
        {
            id: 5,
            title: t('projects.projectsList.sistemaVotacion.title'),
            description: t('projects.projectsList.sistemaVotacion.description'),
            projectImage: '/sistema-votacion/logo.png',
            hasVersions: true,
            versions: [
                {
                    id: 1,
                    name: t('projects.projectsList.sistemaVotacion.versions.smartContracts.name'),
                    description: t('projects.projectsList.sistemaVotacion.versions.smartContracts.description'),
                    technologies: ['Solidity', 'Ethereum', 'Hardhat', 'Web3', 'Smart Contracts'],
                    github: 'https://github.com/XxELIngexX/SistemaVotacion-BAIA'
                },
                {
                    id: 2,
                    name: t('projects.projectsList.sistemaVotacion.versions.frontend.name'),
                    description: t('projects.projectsList.sistemaVotacion.versions.frontend.description'),
                    technologies: ['JavaScript', 'HTML', 'CSS', 'ethers.js', 'MetaMask', 'Web3', 'Vite'],
                    github: 'https://github.com/XxELIngexX/SistemaVotacion-BAIA'
                }
            ],
            website: null,
            demoLink: null
        },
        {
            id: 6,
            title: t('projects.projectsList.evacuacion.title'),
            description: t('projects.projectsList.evacuacion.description'),
            projectImage: '/evacuacion/logo.png',
            hasVersions: true,
            versions: [
                {
                    id: 1,
                    name: t('projects.projectsList.evacuacion.versions.core.name'),
                    description: t('projects.projectsList.evacuacion.versions.core.description'),
                    technologies: ['Python', 'Multi-Agent Systems', 'Simulation', 'Behavioral Modeling'],
                    github: 'https://github.com/XxELIngexX/Simulacion_evacuacion_multiagente'
                },
                {
                    id: 2,
                    name: t('projects.projectsList.evacuacion.versions.models.name'),
                    description: t('projects.projectsList.evacuacion.versions.models.description'),
                    technologies: ['Python', 'Object-Oriented Design', 'Agent Architecture', 'Spatial Modeling'],
                    github: 'https://github.com/XxELIngexX/Simulacion_evacuacion_multiagente'
                }
            ],
            website: null,
            demoLink: null
        },
        {
            id: 7,
            title: t('projects.projectsList.fastfoodie.title'),
            description: t('projects.projectsList.fastfoodie.description'),
            projectImage: '/AREP/T1.jpg',
            hasVersions: true,
            versions: [
                {
                    id: 1,
                    name: t('projects.projectsList.fastfoodie.versions.phase1.name'),
                    description: t('projects.projectsList.fastfoodie.versions.phase1.description'),
                    technologies: ['Java', 'Spring Boot', 'REST API', 'HTTP'],
                    github: 'https://github.com/XxELIngexX/AREP-T1'
                },
                {
                    id: 2,
                    name: t('projects.projectsList.fastfoodie.versions.phase2.name'),
                    description: t('projects.projectsList.fastfoodie.versions.phase2.description'),
                    technologies: ['Java', 'Spring MVC', 'Architecture', 'Design Patterns'],
                    github: 'https://github.com/XxELIngexX/AREP-T2'
                },
                {
                    id: 3,
                    name: t('projects.projectsList.fastfoodie.versions.phase3.name'),
                    description: t('projects.projectsList.fastfoodie.versions.phase3.description'),
                    technologies: ['Java', 'Spring Security', 'Sessions', 'OAuth'],
                    github: 'https://github.com/XxELIngexX/AREP-T3'
                }
            ],
            website: null,
            demoLink: null
        },
        {
            id: 8,
            title: t('projects.projectsList.cesarShop.title'),
            description: t('projects.projectsList.cesarShop.description'),
            projectImage: '/cesar-shop/logo.png',
            hasVersions: true,
            versions: [
                {
                    id: 1,
                    name: t('projects.projectsList.cesarShop.versions.phase3.name'),
                    description: t('projects.projectsList.cesarShop.versions.phase3.description'),
                    technologies: ['Java', 'IoC Framework', 'Annotations', 'REST API', 'HTML', 'CSS', 'JavaScript'],
                    github: 'https://github.com/XxELIngexX/AREP-T3'
                },
                {
                    id: 2,
                    name: t('projects.projectsList.cesarShop.versions.phase4.name'),
                    description: t('projects.projectsList.cesarShop.versions.phase4.description'),
                    technologies: ['Java', 'Docker', 'AWS', 'Cloud Deployment', 'Containerization'],
                    github: 'https://github.com/XxELIngexX/AREP-T4'
                }
            ],
            website: null,
            demoLink: null
        },
        {
            id: 9,
            title: t('projects.projectsList.cesarflix.title'),
            description: t('projects.projectsList.cesarflix.description'),
            projectImage: '/cesarflix/logo.png',
            hasVersions: true,
            versions: [
                {
                    id: 1,
                    name: t('projects.projectsList.cesarflix.versions.frontend.name'),
                    description: t('projects.projectsList.cesarflix.versions.frontend.description'),
                    technologies: ['React', 'JavaScript', 'CSS', 'HTML', 'SPA', 'React Router', 'Hooks', 'Fetch API'],
                    github: 'https://github.com/XxELIngexX/cesarFlix'
                },
                {
                    id: 2,
                    name: t('projects.projectsList.cesarflix.versions.backend.name'),
                    description: t('projects.projectsList.cesarflix.versions.backend.description'),
                    technologies: ['json-server', 'REST API', 'JSON', 'Mock Data', 'Node.js'],
                    github: 'https://github.com/XxELIngexX/cesarFlix'
                }
            ],
            website: null,
            demoLink: null
        },
        {
            id: 10,
            title: t('projects.projectsList.secureText.title'),
            description: t('projects.projectsList.secureText.description'),
            projectImage: '/securetext/logo.png',
            hasVersions: false,
            versions: [
                {
                    id: 1,
                    name: t('projects.projectsList.secureText.versions.main.name'),
                    description: t('projects.projectsList.secureText.versions.main.description'),
                    technologies: ['HTML', 'CSS', 'JavaScript', 'String Manipulation', 'Cryptography', 'Agile (Trello)'],
                    github: 'https://github.com/XxELIngexX/SecureText'
                }
            ],
            website: null,
            demoLink: null
        }
    ];

    return (
        <section id='projects' className='projects-container'>
            {/* HEADER */}
            <div className='projects__header'>
                <h2 className='projects__title'>{t('projects.title')}</h2>
                <p className='projects__subtitle'>{t('projects.subtitle')}</p>
            </div>

            {/* CONTENT */}
            <div className='projects__content'>
                {projectsData.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        projectImage={project.projectImage}
                        hasVersions={project.hasVersions}
                        versions={project.versions}
                        website={project.website}
                        demoLink={project.demoLink}
                    />
                ))}
            </div>
        </section>
    )
}

export default Projects;