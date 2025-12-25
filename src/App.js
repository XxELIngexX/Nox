
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
// import ScrollToTop from './components/ScrollToTop';
function App() {
 
  
  return (
    <>
      <Header />

      <Hero />

      <AboutMe />

      <div className='split'>
        <Card
          tittle="skills"
          description="Learn about my skills in programming, find info on my language knowledge and more."
          linkActive={true}
          to="skills"
        />
        <Card
          tittle="experience"
          description="Get to know the timeline of my education and find out more about my working experience."
          linkActive={true}
          to="experience"

        />
        <Card
          tittle="projects"
          description="My portfolio is my biggest pride. Check my previous works and get to know my skills better."
          linkActive={true}
          to="projects"
        />
      </div>

      <Skills />

       <h3>Languages</h3>
      <div id='lengugaes' className='split'>
        <Card 
          tittle="Spanish"
          description="Native"
          linkActive={false}
        />
        <Card 
          tittle="English A2"
          description="I read and write comfortably, and I'm actively improving my communication skills."
          linkActive={false}
        />
        

      </div>
      <Experience />
  
      <Projects />
      <Contact />
      <Footer />
      {/* <ScrollToTop /> */}
    </>
  );
}

export default App;
