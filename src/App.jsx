import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Resume from './sections/Resume';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Achievements from './sections/Achievements';
import Certificates from './sections/Certificates';
import Contact from './sections/Contact';
import BackgroundEffects from './components/BackgroundEffects';

function App() {
  return (
    <div className="bg-background text-foreground min-h-screen font-sans selection:bg-primary/30 selection:text-white overflow-hidden">
      <BackgroundEffects />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Resume />
        <Education />
        <Skills />
        <Projects />
        <Achievements />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
