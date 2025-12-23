import { useState } from 'react';
import ProjectCard from './ProjectCard';
import '../styles/projects.css';

const Projects = () => {
    const projectsData = [
        {
            id: 1,
            title: "ECONEXION",
            description: "Plataforma full-stack diseñada para conectar empresas y usuarios en el ecosistema de economía circular. El sistema facilita la gestión de recursos, intercambio de materiales y seguimiento de iniciativas sostenibles, promoviendo prácticas ambientalmente responsables.",
            projectImage: '/econexion/logo.png',
            hasVersions: true,
            versions: [
                {
                    id: 1,
                    name: "Repositorio de la Organización",
                    description: "Contiene la visión general del proyecto, documentación y coordinación entre los diferentes componentes del sistema. Sirve como punto central para la colaboración y gestión del desarrollo.",
                    technologies: ['Documentation', 'Project Management', 'Collaboration'],
                    github: 'https://github.com/Eco-nexion'
                },{
                    id: 2,
                    name: "Frontend",
                    description: "Interfaz de usuario moderna y responsiva construida con React. Proporciona una experiencia intuitiva para la navegación, gestión de perfiles, publicación de recursos y visualización de métricas de impacto ambiental.",
                    technologies: ['React', 'JavaScript', 'CSS', 'REST API'],
                    github: 'https://github.com/Eco-nexion/Econexion-front'
                },
                {
                    id: 3,
                    name: "Backend",
                    description: "API robusta que maneja la lógica de negocio, autenticación, gestión de usuarios y transacciones. Implementa arquitectura escalable con buenas prácticas de seguridad y persistencia de datos.",
                    technologies: ['Java', 'Spring Boot', 'REST API', 'Database'],
                    github: 'https://github.com/Eco-nexion/Econexion-back'
                }
            ],
            website: null,
            demoLink: null
        },
        {
            id: 2,
            title: "FASTFOODIE",
            description: "Proyecto backend progresivo enfocado en el desarrollo de una aplicación web para la gestión de pedidos de comida rápida, construido siguiendo principios de arquitectura distribuida y buenas prácticas de ingeniería de software. A lo largo de los repositorios se puede ver la evolución del sistema desde una base funcional simple hasta una solución más estructurada, escalable y alineada con estándares modernos.",
            projectImage: '/AREP/T1.jpg',
            hasVersions: true,
            versions: [
                {
                    id: 1,
                    name: "Fase 1: Servidor REST",
                    description: "Base funcional del sistema. Implementación de un servidor web capaz de manejar peticiones HTTP y exponer servicios REST. Establece la fundación para la gestión de recursos de pedidos.",
                    technologies: ['Java', 'Spring Boot', 'REST API', 'HTTP'],
                    github: 'https://github.com/XxELIngexX/AREP-T1'
                },
                {
                    id: 2,
                    name: "Fase 2: Arquitectura MVC",
                    description: "Evolución hacia una solución más estructurada. Implementa desacoplamiento de responsabilidades con controladores, servicios y modelos. Manejo adecuado de rutas y comunicación cliente-servidor.",
                    technologies: ['Java', 'Spring MVC', 'Arquitectura', 'Design Patterns'],
                    github: 'https://github.com/XxELIngexX/AREP-T2'
                },
                {
                    id: 3,
                    name: "Fase 3: Autenticación y Seguridad",
                    description: "Solución robusta y escalable. Integración de manejo de sesiones, autenticación de usuarios y control de acceso. Aplicación de estándares modernos de seguridad web.",
                    technologies: ['Java', 'Spring Security', 'Sessions', 'OAuth'],
                    github: 'https://github.com/XxELIngexX/AREP-T3'
                }
            ],
            website: null,
            demoLink: null
        },
    ];

    return(
        <section id='projects' className='projects-container'>
            {/* ENCABEZADO - tonalidades oscuras */}
            <div className='projects__header'>
                <h2 className='projects__title'>Projects</h2>
                <p className='projects__subtitle'>Explore my portfolio of work</p>
            </div>

            {/* CONTENIDO - tonalidades claras */}
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