import { Link } from "react-scroll";
import "../../styles/card.css";
import { useTranslation } from 'react-i18next';

export const Card = ({ tittle, description, linkActive, to }) => {
    const { t } = useTranslation();

    const logo = () => {
        switch (tittle) {
            case (t('cards.skills.title')): {
                return (<svg className="hud-icon" viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="12" r="6"></circle>
                    <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
                </svg>)
            }
            case (t('cards.experience.title')): {
                return (<svg className="hud-icon pulse" viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="12" r="7"></circle>
                    <circle cx="12" cy="12" r="3.2"></circle>
                    <path d="M12 3v1.8M12 19.2V21M3 12h1.8M19.2 12H21" />
                </svg>)
            }
            case (t('cards.projects.title')): {
                return (<svg className="hud-icon slow-rotate" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M6 8l6 10 6-10H6z" />
                </svg>)
            }
            case (t('cards.languages.spanish.title')): {
                return (<svg width="22" viewBox="0 0 640 480">
                    <path fill="#AA151B" d="M0 0h640v480H0z" />
                    <path fill="#F1BF00" d="M0 160h640v160H0z" />
                </svg>)
            }
            case (t('cards.languages.english.title')): {
                return (<svg width="22" viewBox="0 0 60 30">
                    <clipPath id="t">
                        <path d="M0 0v30h60V0z" />
                    </clipPath>
                    <g clipPath="url(#t)">
                        <path d="M0 0v30h60V0z" fill="#012169" />
                        <path d="M0 0L60 30m0-30L0 30" stroke="#fff" strokeWidth="6" />
                        <path d="M0 0L60 30m0-30L0 30" stroke="#C8102E" strokeWidth="4" />
                        <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" />
                        <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6" />
                    </g>
                </svg>)
            }
            default:
                return null;
        }
    }

    return (
        <section id="" className="card-container">
            <div className="feature-card">
                <div className="icon-container gear">
                    {logo()}
                </div>

                <h3 className="card-title">{tittle}</h3>
                <p className="">{description}</p>
                {linkActive && <Link
                    to={to}
                    smooth={true}
                    duration={500}
                    className="learn-more"
                >
                    {t('cards.learnMore')} &gt;
                </Link>}
            </div>
        </section>
    )
}

export default Card;