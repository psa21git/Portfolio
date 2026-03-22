import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-900 py-12 relative z-10 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <a href="#home" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-500">
              P Sreyanshu Anupam
            </a>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-500">
              Building intelligent solutions with data.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="https://github.com/psa21git" target="_blank" rel="noreferrer" className="text-slate-400 dark:text-slate-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
              <span className="sr-only">GitHub</span>
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/p-sreyanshu-anupam/" target="_blank" rel="noreferrer" className="text-slate-400 dark:text-slate-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Linkedin size={20} />
            </a>
            <a href="https://www.instagram.com/peculiar_psa/" target="_blank" rel="noreferrer" className="text-slate-400 dark:text-slate-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
              <span className="sr-only">Instagram</span>
              <Instagram size={20} />
            </a>
            <a href="mailto:psa.dev.21@gmail.com" className="text-slate-400 dark:text-slate-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
              <span className="sr-only">Email</span>
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-900 text-center">
          <p className="text-xs text-slate-500 dark:text-slate-600">
            &copy; {new Date().getFullYear()} P Sreyanshu Anupam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
