import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logoWithOutName.png';
import LanguageSelector from './LanguageSelector';
import "../styles/header.css";

export const Header = () => {
    const { t } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [shouldHide, setShouldHide] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 800) {
                setMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const header = document.querySelector('.header');

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                header?.classList.add('hide-header');
                setShouldHide(true);
            } else {
                header?.classList.remove('hide-header');
                setShouldHide(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <>
            {/* ------- HEADER DESKTOP + TABLET ------- */}
            <header className="header">
                {/* LOGO + NAME + HAMBURGER */}
                <div className="header_logo-section">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="header_hamburger"
                    >
                        {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                    </button>

                    <img src={logo} alt="Logo" className="header_logo" />
                </div>

                {/* NAV DESKTOP */}
                <nav className="header_nav">
                    <ul className="header_menu">
                        <li><Link to="about-me" smooth duration={500}>{t('nav.about')}</Link></li>
                        <li><Link to="skills" smooth duration={500}>{t('nav.skills')}</Link></li>
                        <li><Link to="experience" smooth duration={500}>{t('nav.experience')}</Link></li>
                        <li><Link to="projects" smooth duration={500}>{t('nav.projects')}</Link></li>
                        <li><Link to="contact" smooth duration={500}>{t('nav.contact')}</Link></li>
                    </ul>
                    
                    {/* SELECTOR DE IDIOMA */}
                    <LanguageSelector />
                </nav>
            </header>

            {/* ------- SIDEBAR MOBILE ------- */}
            {menuOpen && (
                <div className={`sidebar_mobile ${menuOpen ? "activo" : ""}`}>
                    <ul className="sidebar_menu">
                        <li><Link to="aboutMe" smooth duration={500} onClick={() => setMenuOpen(false)}>{t('nav.about')}</Link></li>
                        <li><Link to="skills" smooth duration={500} onClick={() => setMenuOpen(false)}>{t('nav.skills')}</Link></li>
                        <li><Link to="experience" smooth duration={500} onClick={() => setMenuOpen(false)}>{t('nav.experience')}</Link></li>
                        <li><Link to="projects" smooth duration={500} onClick={() => setMenuOpen(false)}>{t('nav.projects')}</Link></li>
                        <li><Link to="contact" smooth duration={500} onClick={() => setMenuOpen(false)}>{t('nav.contact')}</Link></li>
                    </ul>
                    
                    {/* SELECTOR EN MOBILE */}
                    <div style={{ padding: '1rem', textAlign: 'center' }}>
                        <LanguageSelector />
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
