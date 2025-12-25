import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiHeart, FiArrowUp } from 'react-icons/fi';
import '../styles/footer.css';

const Footer = () => {
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
            <h3 className="footer__brand">Cesar Amaya</h3>
            <p className="footer__tagline">
              Systems Engineer · Full Stack Developer
            </p>
            <p className="footer__description">
              Building innovative solutions with passion and precision.
            </p>
          </div>

          {/* Columna 2: Quick Links */}
          <div className="footer__column">
            <h4 className="footer__column-title">Quick Links</h4>
            <ul className="footer__links">
              <li>
                <a href="#about" className="footer__link">About</a>
              </li>
              <li>
                <a href="#skills" className="footer__link">Skills</a>
              </li>
              <li>
                <a href="#experience" className="footer__link">Experience</a>
              </li>
              <li>
                <a href="#projects" className="footer__link">Projects</a>
              </li>
              <li>
                <a href="#contact" className="footer__link">Contact</a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Social */}
          <div className="footer__column">
            <h4 className="footer__column-title">Connect</h4>
            <div className="footer__social">
              <a 
                href="https://github.com/tuusuario" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
                <span>GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/tuusuario" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a 
                href="mailto:cesar.amaya.gomes@gmail.com"
                className="footer__social-link"
                aria-label="Email"
              >
                <FiMail size={20} />
                <span>Email</span>
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
              © {currentYear} Cesar Amaya. Made with <FiHeart className="footer__heart" /> in Bogotá, Colombia
            </p>
          </div>

          {/* Botón scroll to top */}
          <button 
            onClick={scrollToTop}
            className="footer__scroll-top"
            aria-label="Scroll to top"
          >
            <FiArrowUp size={18} />
            <span>Back to Top</span>
          </button>
        </div>
      </div>

      {/* Efecto de fondo decorativo */}
      <div className="footer__background"></div>
    </footer>
  );
};

export default Footer;