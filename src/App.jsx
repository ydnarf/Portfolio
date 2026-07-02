import Footer from './components/layout/Footer';
import Nav from './components/layout/Nav';
import TrazaSpine from './components/layout/TrazaSpine';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Experience from './components/sections/Experience';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';

export default function App() {
  return (
    <>
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-cobre focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:text-carbon"
      >
        Saltar al contenido
      </a>
      <TrazaSpine />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
