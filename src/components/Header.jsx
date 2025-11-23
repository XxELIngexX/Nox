import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/logoWithOutName.png';
import "../styles/header.css";

export const Header = () => {
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

        // Ejecutarlo al montarse también, por si la pantalla ya está grande
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const header = document.querySelector('.header');

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scrolling down
                header?.classList.add('hide-header');
                setShouldHide(true);
            } else {
                // Scrolling up
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
                    {/* <h1 className="header_name">Cesar Amaya Gomez</h1> */}
                </div>

                {/* NAV DESKTOP */}
                <nav className="header_nav">
                    <ul className="header_menu">
                        <li><Link to="about-me" smooth duration={500}>About Me</Link></li>
                        <li><Link to="skills" smooth duration={500}>Skills</Link></li>
                        <li><Link to="experience" smooth duration={500}>Experience</Link></li>
                        <li><Link to="projects" smooth duration={500}>Projects</Link></li>
                        <li><Link to="contact" smooth duration={500}>Contact</Link></li>
                    </ul>
                </nav>
            </header>

            {/* ------- SIDEBAR MOBILE ------- */}
            {menuOpen &&  <div className={`sidebar_mobile ${menuOpen ? "activo" : ""}`}>
                <ul className="sidebar_menu">
                    <li><Link to="aboutMe" smooth duration={500} onClick={() => setMenuOpen(false)}>About Me</Link></li>
                    <li><Link to="skills" smooth duration={500} onClick={() => setMenuOpen(false)}>Skills</Link></li>
                    <li><Link to="hobbies" smooth duration={500} onClick={() => setMenuOpen(false)}>Hobbies</Link></li>
                    <li><Link to="projects" smooth duration={500} onClick={() => setMenuOpen(false)}>Projects</Link></li>
                    <li><Link to="contact" smooth duration={500} onClick={() => setMenuOpen(false)}>Contact</Link></li>
                </ul>
            </div>}



           
        </>
    );
};

export default Header;