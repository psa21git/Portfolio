import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import GithubBento from './components/GithubBento';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StarryBackground from './components/StarryBackground';

function App() {
  return (
    <div className="min-h-screen text-slate-800 dark:text-slate-50 font-sans selection:bg-cyan-500/30 overflow-hidden bg-slate-50 dark:bg-slate-950 relative transition-colors duration-300">
      <StarryBackground />
      <Navbar />
      <main className="w-full relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <GithubBento />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
