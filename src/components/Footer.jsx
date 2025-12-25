import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiHeart, FiArrowUp } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import '../styles/footer.css';

const Footer = () => {
  const { t } = useTranslation();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Sección superior con links y redes sociales */}
        <div className="footer__content">
          {/* Columna 1: Branding */}
          <div className="footer__column footer__column--brand">
            <h3 className="footer__brand">{t('footer.brand')}</h3>
            <p className="footer__tagline">{t('footer.tagline')}</p>
            <p className="footer__description">{t('footer.description')}</p>
          </div>

          {/* Columna 2: Quick Links */}
          <div className="footer__column">
            <h4 className="footer__column-title">{t('footer.quickLinks')}</h4>
            <ul className="footer__links">
              <li>
                <a href="#about" className="footer__link">{t('footer.links.about')}</a>
              </li>
              <li>
                <a href="#skills" className="footer__link">{t('footer.links.skills')}</a>
              </li>
              <li>
                <a href="#experience" className="footer__link">{t('footer.links.experience')}</a>
              </li>
              <li>
                <a href="#projects" className="footer__link">{t('footer.links.projects')}</a>
              </li>
              <li>
                <a href="#contact" className="footer__link">{t('footer.links.contact')}</a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Social */}
          <div className="footer__column">
            <h4 className="footer__column-title">{t('footer.connect')}</h4>
            <div className="footer__social">
              <a 
                href="https://github.com/XxELIngexX" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
                <span>{t('footer.social.github')}</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/cesar-amaya-gomez/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
                <span>{t('footer.social.linkedin')}</span>
              </a>
              <a 
                href="mailto:cesar.amaya.gomes@gmail.com"
                className="footer__social-link"
                aria-label="Email"
              >
                <FiMail size={20} />
                <span>{t('footer.social.email')}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divisor decorativo */}
        <div className="footer__divider"></div>

        {/* Sección inferior */}
        <div className="footer__bottom">
          <div className="footer__copyright">
            <p>
              © {currentYear} {t('footer.copyright')} <FiHeart className="footer__heart" /> {t('footer.location')}
            </p>
          </div>

          {/* Botón scroll to top */}
          <button 
            onClick={scrollToTop}
            className="footer__scroll-top"
            aria-label="Scroll to top"
          >
            <FiArrowUp size={18} />
            <span>{t('footer.backToTop')}</span>
          </button>
        </div>
      </div>

      {/* Efecto de fondo decorativo */}
      <div className="footer__background"></div>
    </footer>
  );
};

export default Footer;