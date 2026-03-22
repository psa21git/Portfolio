import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const TypewriterText = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let timeoutId;
    let isDeleting = false;
    let index = 0;
    
    const type = () => {
      if (!isDeleting && index === text.length) {
        timeoutId = setTimeout(() => {
          isDeleting = true;
          type();
        }, 3000);
        return;
      }
      
      if (isDeleting && index === 0) {
        isDeleting = false;
        timeoutId = setTimeout(type, 500);
        return;
      }
      
      if (isDeleting) {
        index--;
        setDisplayText(text.substring(0, index));
        timeoutId = setTimeout(type, 50); 
      } else {
        setDisplayText(text.substring(0, index + 1));
        index++;
        timeoutId = setTimeout(type, 100); 
      }
    };
    
    timeoutId = setTimeout(type, 100);
    
    return () => clearTimeout(timeoutId);
  }, [text]);

  return <span className="inline-block min-h-[1.2em]">{displayText}<span className="animate-pulse font-light">|</span></span>;
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 dark:bg-blue-600/20 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-sm font-medium text-cyan-600 dark:text-cyan-400 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          Computer Engineering Undergrad
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6"
        >
          Hi, I am{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:via-blue-500 dark:to-indigo-500">
            <TypewriterText text="Sreyanshu" />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 max-w-2xl text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10"
        >
          A passionate problem solver and open source contributor with expertise in Machine Learning, Data Analytics, and Web Development. Currently pursuing my BTech at IIIT Bhubaneswar.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-500 dark:to-blue-600 text-white font-medium hover:from-cyan-500 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/25 flex items-center gap-2 group"
          >
            Explore My Work
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          
          <div className="flex items-center gap-4 ml-0 sm:ml-4">
            <a
              href="https://github.com/psa21git"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-full bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all"
            >
              <Github size={22} />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/p-sreyanshu-anupam/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-full bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-300 hover:text-[#0A66C2] dark:hover:text-[#0A66C2] hover:bg-slate-100 dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all"
            >
              <Linkedin size={22} />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
