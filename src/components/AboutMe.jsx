import backgroun from "../assets/photo.jpeg"
import "../styles/aboutMe.css"
import { useTranslation } from 'react-i18next';

export const AboutMe = () => {
    const { t } = useTranslation();
    
    return (
        <>
            <section id="about-me" className="aboutMe">
                <div className="text">
                    <h1>{t('aboutMe.welcome')}</h1>

                    <p>
                        {t('aboutMe.intro')}
                        <br /><br />
                        {t('aboutMe.philosophy')}
                        <br /><br />
                        {t('aboutMe.passion')}
                        <br /><br />
                        {t('aboutMe.closing')}
                    </p>
                </div>

                <div className="photo">
                    <h3>{t('aboutMe.location')}</h3>
                    <p>{t('aboutMe.age')}</p>

                    <img src={backgroun} alt="Profile Photo" className="hero_profile-pic" />
                </div>
            </section>
        </>
    )
}

export default AboutMe