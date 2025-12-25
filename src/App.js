import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import './styles/globals.css';
import './App.css'
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Card from './components/separador/card';
import Experience from './components/Experience';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { t } = useTranslation();
  
  return (
    <>
      <Header />

      <Hero />

      <AboutMe />

      <div className='split'>
        <Card
          tittle={t('cards.skills.title')}
          description={t('cards.skills.description')}
          linkActive={true}
          to="skills"
        />
        <Card
          tittle={t('cards.experience.title')}
          description={t('cards.experience.description')}
          linkActive={true}
          to="experience"
        />
        <Card
          tittle={t('cards.projects.title')}
          description={t('cards.projects.description')}
          linkActive={true}
          to="projects"
        />
      </div>

      <Skills />

      <h3>{t('languagesTitle')}</h3>
      <div id='lengugaes' className='split'>
        <Card 
          tittle={t('cards.languages.spanish.title')}
          description={t('cards.languages.spanish.description')}
          linkActive={false}
        />
        <Card 
          tittle={t('cards.languages.english.title')}
          description={t('cards.languages.english.description')}
          linkActive={false}
        />
      </div>

      <Experience />
  
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;