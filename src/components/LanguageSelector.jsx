import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/languageSelector.css';

// Componentes de banderas SVG
const FlagUS = () => (
  <svg viewBox="0 0 60 30" className="flag-icon">
    <clipPath id="t"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath>
    <path d="M0,0 v30 h60 v-30 z" fill="#B22234"/>
    <path d="M0,3.46 h60 M0,10.38 h60 M0,17.31 h60 M0,24.23 h 60" stroke="#fff" strokeWidth="2.31"/>
    <path d="M0,0 v15 h30 v-15 z" fill="#3C3B6E"/>
  </svg>
);

const FlagES = () => (
  <svg viewBox="0 0 750 500" className="flag-icon">
    <rect width="750" height="500" fill="#AA151B"/>
    <rect width="750" height="250" y="125" fill="#F1BF00"/>
  </svg>
);

const FlagFR = () => (
  <svg viewBox="0 0 900 600" className="flag-icon">
    <rect width="900" height="600" fill="#ED2939"/>
    <rect width="600" height="600" fill="#fff"/>
    <rect width="300" height="600" fill="#002395"/>
  </svg>
);

const FlagPT = () => (
  <svg viewBox="0 0 600 400" className="flag-icon">
    <rect width="600" height="400" fill="#FF0000"/>
    <rect width="240" height="400" fill="#006600"/>
    <circle cx="240" cy="200" r="80" fill="#FFFF00" stroke="#000" strokeWidth="2"/>
  </svg>
);

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { 
      code: 'en', 
      name: 'English',
      FlagComponent: FlagUS
    },
    { 
      code: 'es', 
      name: 'Español',
      FlagComponent: FlagES
    },
    { 
      code: 'fr', 
      name: 'Français',
      FlagComponent: FlagFR
    },
    { 
      code: 'pt', 
      name: 'Português',
      FlagComponent: FlagPT
    }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
    setIsOpen(false);
  };

  // Cerrar dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="language-selector-dropdown" ref={dropdownRef}>
      {/* Botón principal */}
      <button 
        className="language-selector__button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select language"
      >
        <div className="language-selector__flag-circle">
          <currentLanguage.FlagComponent />
        </div>
        <span className="language-selector__code">{currentLanguage.code.toUpperCase()}</span>
        <svg 
          className={`language-selector__arrow ${isOpen ? 'open' : ''}`}
          width="12" 
          height="8" 
          viewBox="0 0 12 8" 
          fill="none"
        >
          <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="language-selector__dropdown">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`language-selector__option ${i18n.language === lang.code ? 'active' : ''}`}
              onClick={() => changeLanguage(lang.code)}
            >
              <div className="language-selector__option-flag-circle">
                <lang.FlagComponent />
              </div>
              <span className="language-selector__option-name">{lang.name}</span>
              {i18n.language === lang.code && (
                <svg 
                  className="language-selector__check" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path 
                    d="M13 4L6 11L3 8" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;