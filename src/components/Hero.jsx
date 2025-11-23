import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineDocumentDownload } from "react-icons/hi"; // Para el resume

import "../styles/hero.css";
export const Hero = () => {
    return (
        <section className="hero">
                <div className="hero_text">
                    <h1 className="hero_name">Cesar Amaya Gomez</h1>
                    <h3 className="hero_dynamic-title">Web Developer | UI/UX Designer | Freelancer</h3>
                </div>
            <div className="hero_content">
                <div className="hero_buttons-container">
                    <a href="https://github.com/XxELIngexX" className="social-button" id="hero_git-button">
                        <FaGithub size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/cesar-amaya-gomez/" className="social-button" id="hero_linkedin-button">
                        <FaLinkedin size={24} />
                    </a>
                    <a href="/resume.pdf" className="social-button" id="hero_resume-button">
                        <HiOutlineDocumentDownload size={24} />
                    </a>
                </div>
                    <p className="hero_description">
                        If you are looking for someone who combines technical knowledge with a proactive attitude and versatility,
                        you have come to the right place. </p>
            </div>

        </section>
    );
}

export default Hero;