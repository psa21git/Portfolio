import { useState, useEffect } from 'react';
import { Menu, X, FileText, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Theme state
  const [isDark, setIsDark] = useState(true);

  // Initialize theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme === 'dark' || (!savedTheme && true) ? true : false;
    setIsDark(initialTheme);
  }, []);

  // Update DOM when theme changes
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', chapter: 'CH.1' },
    { name: 'About', href: '#about', chapter: 'CH.2' },
    { name: 'Experience', href: '#experience', chapter: 'CH.3' },
    { name: 'GitHub', href: '#github', chapter: 'CH.4' },
    { name: 'Projects', href: '#projects', chapter: 'CH.5' },
    { name: 'Contact', href: '#contact', chapter: 'CH.6' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#fbfbfd] dark:bg-[#0d0d0f] border-b-4 border-black dark:border-white shadow-[0_4px_0_rgba(0,0,0,1)] dark:shadow-[0_4px_0_rgba(255,255,255,1)] py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            {/* Manga Text Logo Box */}
            <a 
              href="#home" 
              className="px-4 py-1 bg-yellow-400 dark:bg-yellow-500 text-black border-3 border-black text-2xl font-['Bangers'] tracking-widest uppercase rotate-[-2deg] hover:rotate-[2deg] transition-transform inline-block shadow-[3px_3px_0px_#000]"
            >
              M.D.Sreyanshu
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative px-3 py-1.5 font-['Bangers'] text-lg tracking-wider text-black dark:text-white uppercase transition-all duration-150 hover:bg-red-600 hover:text-white dark:hover:bg-red-600 dark:hover:text-white border-2 border-transparent hover:border-black dark:hover:border-white rounded-md transform hover:rotate-[-2deg]"
              >
                <span className="text-red-500 group-hover:text-yellow-400 font-sans text-xs block -mb-1">{link.chapter}</span>
                {link.name}
              </a>
            ))}
            
            <div className="flex items-center gap-4 border-l-3 border-black dark:border-white pl-4 lg:pl-6">
              {/* Sun God Nika Theme Toggle (Luffy themed) */}
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 border-2 border-black dark:border-white bg-yellow-400 dark:bg-zinc-800 hover:bg-yellow-500 dark:hover:bg-zinc-700 text-black dark:text-white rounded-md shadow-[2px_2px_0px_#000] dark:shadow-[2px_2px_0px_#fff] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={18} className="animate-spin-slow" /> : <Moon size={18} />}
              </button>
              
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border-3 border-black dark:border-white bg-red-600 text-white font-['Bangers'] tracking-wider text-md rounded-md hover:bg-yellow-400 hover:text-black hover:rotate-[1deg] transition-all shadow-[3px_3px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_rgba(255,255,255,1)] flex items-center gap-2"
              >
                <FileText size={16} />
                LOG BOOK (RESUME)
              </a>
            </div>
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-1.5 border-2 border-black dark:border-white bg-yellow-400 dark:bg-zinc-800 text-black dark:text-white rounded-md"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 border-2 border-black dark:border-white bg-[#fbfbfd] dark:bg-zinc-900 text-black dark:text-white rounded-md"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-[#fbfbfd] dark:bg-[#0d0d0f] border-b-4 border-black dark:border-white shadow-lg"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center px-4 py-2.5 font-['Bangers'] text-xl tracking-wider text-black dark:text-white uppercase hover:bg-red-600 hover:text-white border-2 border-black rounded-md block transition-colors"
                >
                  <span className="text-red-500 text-xs block font-sans -mb-1">{link.chapter}</span>
                  {link.name}
                </a>
              ))}
              <a
                href="/resume.pdf"
                className="w-4/5 text-center mt-4 px-6 py-2.5 border-3 border-black dark:border-white bg-red-600 text-white font-['Bangers'] tracking-wider text-lg rounded-md hover:bg-yellow-400 hover:text-black flex items-center justify-center gap-2"
              >
                <FileText size={18} />
                LOG BOOK (RESUME)
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
