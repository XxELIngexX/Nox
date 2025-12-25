import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { useTranslation } from 'react-i18next';
import "../styles/hero.css";

export const Hero = () => {
    const { t } = useTranslation();
    
    return (
        <section className="hero">
            <div className="hero_text">
                <h1 className="hero_name">{t('hero.name')}</h1>
                <h3 className="hero_dynamic-title">{t('hero.title')}</h3>
            </div>
            <div className="hero_content">
                <div className="hero_buttons-container">
                    <a href="https://github.com/XxELIngexX" className="social-button" id="hero_git-button">
                        <FaGithub size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/cesar-amaya-gomez/" className="social-button" id="hero_linkedin-button">
                        <FaLinkedin size={24} />
                    </a>
                    <a href="/cv-en.pdf" className="social-button" id="hero_resume-button" target="_blank" rel="noopener noreferrer">
                        <HiOutlineDocumentDownload size={24} />
                    </a>
                </div>
                <p className="hero_description">
                    {t('hero.description')}
                </p>
            </div>
        </section>
    );
}

export default Hero;