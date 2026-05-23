import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t-4 border-black dark:border-white py-12 relative z-10 bg-[#fbfbfd] dark:bg-[#0d0d0f]">
      {/* Halftone BG overlay */}
      <div className="absolute inset-0 manga-halftone pointer-events-none -z-10 opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <a 
              href="#home" 
              className="px-3 py-1 bg-yellow-400 dark:bg-yellow-500 text-black border-2 border-black font-['Bangers'] text-xl tracking-widest uppercase rotate-[-1deg] inline-block shadow-[2px_2px_0px_#000] hover:rotate-[1deg] transition-transform"
            >
              P Sreyanshu Anupam
            </a>
            <p className="mt-2 text-sm font-bold text-zinc-700 dark:text-zinc-400 italic">
              "Building intelligent solutions with data. Gomu Gomu no... code!"
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/psa21git" 
              target="_blank" 
              rel="noreferrer" 
              className="p-2 border-2 border-black dark:border-white bg-white dark:bg-zinc-800 text-black dark:text-white rounded-sm hover:bg-yellow-400 hover:text-black hover:-translate-y-1 transition-all shadow-[2px_2px_0px_#000] dark:shadow-[2px_2px_0px_#fff]"
            >
              <span className="sr-only">GitHub Log</span>
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/p-sreyanshu-anupam/" 
              target="_blank" 
              rel="noreferrer" 
              className="p-2 border-2 border-black dark:border-white bg-white dark:bg-zinc-800 text-black dark:text-white rounded-sm hover:bg-yellow-400 hover:text-black hover:-translate-y-1 transition-all shadow-[2px_2px_0px_#000] dark:shadow-[2px_2px_0px_#fff]"
            >
              <span className="sr-only">LinkedIn Vivre Card</span>
              <Linkedin size={20} />
            </a>
            <a 
              href="https://www.instagram.com/peculiar_psa/" 
              target="_blank" 
              rel="noreferrer" 
              className="p-2 border-2 border-black dark:border-white bg-white dark:bg-zinc-800 text-black dark:text-white rounded-sm hover:bg-yellow-400 hover:text-black hover:-translate-y-1 transition-all shadow-[2px_2px_0px_#000] dark:shadow-[2px_2px_0px_#fff]"
            >
              <span className="sr-only">Instagram Transponder</span>
              <Instagram size={20} />
            </a>
            <a 
              href="mailto:psa.dev.21@gmail.com" 
              className="p-2 border-2 border-black dark:border-white bg-white dark:bg-zinc-800 text-black dark:text-white rounded-sm hover:bg-yellow-400 hover:text-black hover:-translate-y-1 transition-all shadow-[2px_2px_0px_#000] dark:shadow-[2px_2px_0px_#fff]"
            >
              <span className="sr-only">Email Snail</span>
              <Mail size={20} />
            </a>
          </div>
          
        </div>
        
        <div className="mt-8 pt-8 border-t-2 border-dashed border-zinc-200 dark:border-zinc-800 text-center">
          <p className="text-xs font-bold text-zinc-500 dark:text-zinc-500 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} P Sreyanshu Anupam. Built with Gear 5 Nika Haki. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
