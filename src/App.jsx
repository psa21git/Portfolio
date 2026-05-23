import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [luffyBubble, setLuffyBubble] = useState(false);
  const [bubbleText, setBubbleText] = useState("GOMU GOMU NO... YAHOO! Welcome to Sreyanshu's page!");
  const [isSoundEnabled, setIsSoundEnabled] = useState(false);
  
  const bgMusicRef = useRef(null);

  const luffyQuotes = [
    "I'm gonna be the King of Data Scientists!",
    "If you don't take risks, you can't create a future!",
    "Are you having fun yet? Yahooo!",
    "Do you want to see my gears? Look at the technical skills!",
    "The Log Pose points straight ahead! Set sail for projects!",
    "Transmission lines are active! establishment connection via Den Den Mushi!",
    "Food! Is there meat on this page? Meat!!",
  ];

  // Initialize background music
  useEffect(() => {
    bgMusicRef.current = new Audio('/drums_of_liberation.mp3');
    bgMusicRef.current.loop = true;
    bgMusicRef.current.volume = 0.4; // balanced background volume

    return () => {
      if (bgMusicRef.current) {
        bgMusicRef.current.pause();
      }
    };
  }, []);

  // Sync background music play/pause with isSoundEnabled state
  useEffect(() => {
    if (!bgMusicRef.current) return;
    if (isSoundEnabled) {
      bgMusicRef.current.play().catch((err) => {
        console.log("Autoplay blocked. Will play upon user click/interaction.", err);
      });
    } else {
      bgMusicRef.current.pause();
    }
  }, [isSoundEnabled]);

  // Handle first user interaction to bypass browser autoplay block if sound is stored as enabled
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (isSoundEnabled && bgMusicRef.current && bgMusicRef.current.paused) {
        bgMusicRef.current.play().catch(e => console.log("Autoplay block bypass error:", e));
      }
      removeListeners();
    };

    const removeListeners = () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('mousemove', handleFirstInteraction);
      window.removeEventListener('scroll', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('mousemove', handleFirstInteraction);
    window.addEventListener('scroll', handleFirstInteraction);
    window.addEventListener('keydown', handleFirstInteraction);
    window.addEventListener('touchstart', handleFirstInteraction);

    return () => removeListeners();
  }, [isSoundEnabled]);

  const handleLuffyClick = () => {
    setLuffyBubble(true);
    const randomQuote = luffyQuotes[Math.floor(Math.random() * luffyQuotes.length)];
    setBubbleText(randomQuote);

    // Play laugh audio if sound is enabled
    if (isSoundEnabled) {
      const laughAudio = new Audio('/luffy_laugh.mp3');
      laughAudio.volume = 0.85;
      laughAudio.play().catch(err => console.log("Audio playback failed:", err));
    }

    setTimeout(() => {
      setLuffyBubble(false);
    }, 4500);
  };

  return (
    <div className="min-h-screen text-black dark:text-white font-sans selection:bg-yellow-300 selection:text-black overflow-hidden bg-[#fbfbfd] dark:bg-[#0d0d0f] relative transition-colors duration-300">
      <StarryBackground />
      <Navbar />
      
      <main className="w-full relative z-10">
        {/* Pass down sound controls to the Hero Section */}
        <Hero isSoundEnabled={isSoundEnabled} setIsSoundEnabled={setIsSoundEnabled} />
        <About />
        <Experience />
        <Projects />
        <GithubBento />
        <Contact />
      </main>
      
      <Footer />

      {/* Floating Gear 5 Luffy Character & Speaker Overlay */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end pointer-events-none">
        
        {/* Floating Sound Toggle Switch Speaker */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsSoundEnabled(!isSoundEnabled)}
          className="mb-2 mr-2 p-2.5 border-3 border-black dark:border-white bg-yellow-400 dark:bg-zinc-800 text-black dark:text-white rounded-full pointer-events-auto shadow-[3px_3px_0px_#000] dark:shadow-[3px_3px_0px_#fff] cursor-pointer"
          title="Toggle Background Music"
        >
          <span className="text-md flex items-center justify-center">
            {isSoundEnabled ? '🔊' : '🔇'}
          </span>
        </motion.button>

        {/* Luffy Speech Bubble */}
        <AnimatePresence>
          {luffyBubble && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              className="mb-3 mr-2 bg-white text-black border-3 border-black p-3 rounded-xl max-w-xs shadow-[4px_4px_0px_#000] pointer-events-auto relative"
            >
              <div className="absolute bottom-[-10px] right-8 w-0 h-0 border-t-10 border-t-black border-l-8 border-l-transparent border-r-8 border-r-transparent" />
              <div className="absolute bottom-[-6px] right-[33px] w-0 h-0 border-t-8 border-t-white border-l-6 border-l-transparent border-r-6 border-r-transparent z-10" />
              <p className="font-['Comic_Neue'] text-xs font-bold uppercase tracking-wide">
                {bubbleText}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Luffy Gear 5 Avatar */}
        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          onClick={handleLuffyClick}
          className="w-20 h-20 sm:w-24 sm:h-24 pointer-events-auto cursor-pointer relative group rounded-full border-4 border-black dark:border-white bg-[#fbfbfd] dark:bg-[#0d0d0f] overflow-hidden shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_#fff]"
          title="Click Monkey D. Luffy for a boost!"
        >
          <img 
            src="/luffy_gear5.png" 
            alt="Luffy Gear 5 Floating Avatar" 
            className="w-full h-full object-cover filter contrast-125 saturate-100 group-hover:scale-110 transition-transform"
          />
          
          {/* Overlay sound effect banner on hover */}
          <div className="absolute inset-0 bg-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="font-['Permanent_Marker'] text-red-600 dark:text-yellow-400 text-sm tracking-wider uppercase rotate-[10deg]">
              NIKA!
            </span>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

export default App;
