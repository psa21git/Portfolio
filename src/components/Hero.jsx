import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Github, Linkedin, ArrowRight, Star } from 'lucide-react';
import { useState, useEffect } from 'react';

const TypewriterText = ({ texts }) => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  
  useEffect(() => {
    let timeoutId;
    let isDeleting = false;
    let index = 0;
    const currentText = texts[textIndex];
    
    const type = () => {
      if (!isDeleting && index === currentText.length) {
        timeoutId = setTimeout(() => {
          isDeleting = true;
          type();
        }, 2000);
        return;
      }
      
      if (isDeleting && index === 0) {
        isDeleting = false;
        setTextIndex((prev) => (prev + 1) % texts.length);
        timeoutId = setTimeout(type, 500);
        return;
      }
      
      if (isDeleting) {
        index--;
        setDisplayText(currentText.substring(0, index));
        timeoutId = setTimeout(type, 40); 
      } else {
        setDisplayText(currentText.substring(0, index + 1));
        index++;
        timeoutId = setTimeout(type, 80); 
      }
    };
    
    timeoutId = setTimeout(type, 100);
    return () => clearTimeout(timeoutId);
  }, [textIndex, texts]);

  return <span className="inline-block min-h-[1.2em]">{displayText}<span className="animate-pulse font-light text-red-600">|</span></span>;
};

// Wanted Poster component with mouse-tracking tilt effect
const WantedPoster = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Transform mouse coordinates into 3D rotations
  const rotateX = useTransform(y, [-300, 300], [15, -15]);
  const rotateY = useTransform(x, [-300, 300], [-15, 15]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      className="relative w-80 sm:w-96 bg-[#ede3c9] text-black border-6 border-black shadow-[8px_8px_0px_#000] p-6 rounded-sm select-none cursor-grab active:cursor-grabbing hover:shadow-[12px_12px_0px_#000] transition-shadow duration-200"
      initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
      animate={{ opacity: 1, scale: 1, rotate: -1.5 }}
      transition={{ duration: 0.6 }}
    >
      {/* Halftone BG on Wanted Poster */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.04)_15%,transparent_16%)] bg-[size:6px_6px] pointer-events-none rounded-sm" />
      
      <div className="relative flex flex-col items-center justify-between h-full border-2 border-dashed border-[#8d7c58]/60 p-3">
        {/* WANTED header */}
        <h2 className="wanted-header text-5xl font-['Permanent_Marker'] tracking-widest text-[#402e1c] leading-none mb-1 text-center select-none">
          WANTED
        </h2>
        
        {/* DEAD OR ALIVE banner */}
        <div className="text-center font-['Bangers'] text-xs tracking-[0.2em] text-[#5c4a34] mb-3">
          DEAD OR ALIVE
        </div>

        {/* Character Image */}
        <div className="w-full aspect-[4/5] border-4 border-[#3a2916] bg-white overflow-hidden shadow-[inset_0px_4px_8px_rgba(0,0,0,0.3)] relative">
          {/* Manga panels style diagonal background lines inside image box */}
          <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0.02)_0px,rgba(0,0,0,0.02)_1px,transparent_1px,transparent_8px)]" />
          <img 
            src="/sreyanshu_luffy.png" 
            alt="Monkey D. Sreyanshu Wanted Poster" 
            className="w-full h-full object-cover filter contrast-125 saturate-50 hover:scale-105 transition-transform duration-300 relative z-10"
            draggable="false"
          />
        </div>

        {/* Name */}
        <div className="mt-4 text-center w-full">
          <p className="font-['Permanent_Marker'] text-2xl md:text-3xl text-[#2b1f13] tracking-wider leading-none truncate uppercase border-b-2 border-dashed border-[#5c4a34]/40 pb-1">
            P. SREYANSHU
          </p>
        </div>

        {/* Bounty */}
        <div className="mt-3 flex flex-col items-center text-center">
          <span className="font-sans font-bold text-xs tracking-wider text-[#63533b] uppercase">Bounty</span>
          <div className="flex items-center justify-center font-['Bangers'] text-4xl text-[#7a1818] tracking-widest leading-none mt-1">
            <span className="text-2xl mr-1 font-serif">฿</span>
            8,520,000,000-
          </div>
          <span className="font-sans text-[10px] text-[#817056] font-semibold mt-1">MARINE HEADQUARTERS</span>
        </div>
      </div>
    </motion.div>
  );
};

const Hero = ({ isSoundEnabled, setIsSoundEnabled }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Grid Screentone overlay */}
      <div className="absolute inset-0 manga-halftone pointer-events-none -z-10 opacity-70" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/5 dark:bg-red-500/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/5 dark:bg-yellow-500/10 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 z-10 w-full">
        
        {/* Left Side: 3D Wanted Poster Card */}
        <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-1 perspective-[1000px]">
          <WantedPoster />
        </div>

        {/* Right Side: Epic Manga Titles & Actions */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-2">
          
          {/* Crew role / status badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 border-3 border-black dark:border-white bg-yellow-400 dark:bg-yellow-500 text-black font-['Bangers'] tracking-wider text-md rounded-sm rotate-[-1deg] mb-6 shadow-[3px_3px_0px_#000] dark:shadow-[3px_3px_0px_#fff]"
          >
            <Star size={16} fill="black" />
            STRAW HAT CREW'S DATA SCIENTIST
          </motion.div>

          {/* Main Character Header - GOMU GOMU NO CODE! */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-['Bangers'] tracking-wider text-black dark:text-white leading-none uppercase stroke-manga mb-6"
          >
            HI, I AM <br/>
            <span className="text-red-600 dark:text-red-500 bg-yellow-300 dark:bg-yellow-400/20 px-4 py-1 border-3 border-black dark:border-white inline-block mt-2 rotate-[1deg] shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_#fff]">
              <TypewriterText texts={["Sreyanshu", "Sreyanshu-ya", "The Straw Hat Coder"]} />
            </span>
          </motion.h1>

          {/* Luffy's Speech Bubble Quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative bg-white dark:bg-zinc-900 border-4 border-black dark:border-white p-5 rounded-xl max-w-lg mb-8 shadow-[5px_5px_0px_rgba(0,0,0,1)] dark:shadow-[5px_5px_0px_rgba(255,255,255,1)]"
          >
            {/* Dialogue bubble tail */}
            <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-r-12 border-r-black dark:border-r-white border-b-8 border-b-transparent hidden lg:block" />
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-b-12 border-b-black dark:border-b-white border-r-8 border-r-transparent lg:hidden" />
            
            <p className="font-['Comic_Neue'] text-md font-bold italic text-black dark:text-slate-200">
              "If you don't take risks, you can't create a future! GOMU GOMU NO... CODE! Let's explore my open-source sailing log and build something epic!"
            </p>
            <span className="font-['Permanent_Marker'] text-sm text-red-600 dark:text-yellow-400 block mt-2 text-right">
              — Monkey D. Luffy
            </span>
          </motion.div>

          {/* Buttons & Social anchors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 flex-wrap"
          >
            <a
              href="#projects"
              className="px-8 py-3.5 border-3 border-black dark:border-white bg-red-600 text-white font-['Bangers'] tracking-wider text-lg rounded-sm hover:bg-yellow-400 hover:text-black hover:scale-105 transition-all shadow-[4px_4px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_rgba(255,255,255,1)] flex items-center gap-2 group"
            >
              EXPLORE MY ADVENTURES
              <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
            </a>

            {/* Homepage Sound Toggle Button */}
            <button
              onClick={() => setIsSoundEnabled(!isSoundEnabled)}
              className={`px-6 py-3.5 border-3 border-black dark:border-white font-['Bangers'] tracking-wider text-md rounded-sm transition-all shadow-[4px_4px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_rgba(255,255,255,1)] hover:scale-105 hover:rotate-[1.5deg] cursor-pointer flex items-center gap-2 ${
                isSoundEnabled 
                  ? 'bg-yellow-400 text-black hover:bg-yellow-500' 
                  : 'bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-700'
              }`}
            >
              {isSoundEnabled ? '🔊 DRUMS: ACTIVE (ON)' : '🔇 DRUMS: MUTED (OFF)'}
            </button>
            
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/psa21git"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border-3 border-black dark:border-white bg-white dark:bg-zinc-800 text-black dark:text-white rounded-sm hover:bg-yellow-400 hover:text-black hover:-translate-y-1 transition-all shadow-[3px_3px_0px_#000] dark:shadow-[3px_3px_0px_#fff]"
              >
                <Github size={22} />
                <span className="sr-only">GitHub Log</span>
              </a>
              <a
                href="https://linkedin.com/in/p-sreyanshu-anupam/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border-3 border-black dark:border-white bg-white dark:bg-zinc-800 text-black dark:text-white rounded-sm hover:bg-yellow-400 hover:text-black hover:-translate-y-1 transition-all shadow-[3px_3px_0px_#000] dark:shadow-[3px_3px_0px_#fff]"
              >
                <Linkedin size={22} />
                <span className="sr-only">LinkedIn Vivre Card</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
