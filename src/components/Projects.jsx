import { useState } from 'react';
import ProjectCard from './ProjectCard';
import '../styles/projects.css';

const Projects = () => {
    const projectsData = [
        {
            id: 1,
            title: "ECONEXION",
            description: "Full-stack platform designed to connect companies and users in the circular economy ecosystem. The system facilitates resource management, material exchange, and tracking of sustainable initiatives, promoting environmentally responsible practices.",
            projectImage: '/econexion/logo.png',
            hasVersions: true,
            versions: [
                {
                    id: 1,
                    name: "Organization Repository",
                    description: "Contains the project's overall vision, documentation, and coordination between different system components. Serves as the central point for collaboration and development management.",
                    technologies: ['Documentation', 'Project Management', 'Collaboration'],
                    github: 'https://github.com/Eco-nexion'
                },
                {
                    id: 2,
                    name: "Frontend",
                    description: "Modern and responsive user interface built with React. Provides an intuitive experience for navigation, profile management, resource posting, and environmental impact metrics visualization.",
                    technologies: ['React', 'JavaScript', 'CSS', 'REST API'],
                    github: 'https://github.com/Eco-nexion/Econexion-front'
                },
                {
                    id: 3,
                    name: "Backend",
                    description: "Robust API that handles business logic, authentication, user management, and transactions. Implements scalable architecture with security best practices and data persistence.",
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
            description: "Progressive backend project focused on developing a web application for fast-food order management, built following distributed architecture principles and software engineering best practices. Throughout the repositories, you can see the system's evolution from a simple functional base to a more structured, scalable solution aligned with modern standards.",
            projectImage: '/AREP/T1.jpg',
            hasVersions: true,
            versions: [
                {
                    id: 1,
                    name: "Phase 1: REST Server",
                    description: "Functional system foundation. Implementation of a web server capable of handling HTTP requests and exposing REST services. Establishes the foundation for order resource management.",
                    technologies: ['Java', 'Spring Boot', 'REST API', 'HTTP'],
                    github: 'https://github.com/XxELIngexX/AREP-T1'
                },
                {
                    id: 2,
                    name: "Phase 2: MVC Architecture",
                    description: "Evolution towards a more structured solution. Implements responsibility decoupling with controllers, services, and models. Proper handling of routes and client-server communication.",
                    technologies: ['Java', 'Spring MVC', 'Architecture', 'Design Patterns'],
                    github: 'https://github.com/XxELIngexX/AREP-T2'
                },
                {
                    id: 3,
                    name: "Phase 3: Authentication and Security",
                    description: "Robust and scalable solution. Integration of session management, user authentication, and access control. Application of modern web security standards.",
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
            {/* HEADER - Dark tones */}
            <div className='projects__header'>
                <h2 className='projects__title'>Projects</h2>
                <p className='projects__subtitle'>Explore my portfolio of work</p>
            </div>

            {/* CONTENT - Light tones */}
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