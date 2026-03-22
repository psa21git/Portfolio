import { GitHubCalendar } from 'react-github-calendar';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const GithubBento = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Observe class changes on HTML tag to know when the theme changes!
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    
    // Initial setup
    setIsDark(document.documentElement.classList.contains('dark'));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="github" className="py-24 relative">
       <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-600/5 dark:bg-purple-600/10 rounded-full blur-[100px] -z-10" />
       
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
           <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
           >
               <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">GitHub Activity</h2>
               <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full" />
               <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                 An interactive overview of my open-source coding activity, language usage, and contribution streaks.
               </p>
           </motion.div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              
              {/* Main Calendar Box */}
              <motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5, delay: 0.1 }}
                 className="p-8 md:col-span-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-lg dark:shadow-none flex flex-col items-center justify-center overflow-x-auto hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
               >
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 w-full text-left">Contribution Graph</h3>
                  <div className="w-full flex justify-center pb-4 text-xs md:text-sm">
                    <GitHubCalendar 
                       username="psa21git" 
                       colorScheme={isDark ? "dark" : "light"}
                       blockSize={14}
                       blockMargin={5}
                       fontSize={14}
                       theme={{
                          light: ['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127'],
                          dark: ['#1e293b', '#0e4429', '#006d32', '#26a641', '#39d353'],
                       }}
                    />
                  </div>
              </motion.div>
              
              {/* Stats Box */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-lg dark:shadow-none flex items-center justify-center md:col-span-1 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
              >
                 <img 
                    src={`https://github-readme-stats.vercel.app/api?username=psa21git&show_icons=true&theme=transparent&hide_border=true&title_color=06b6d4&text_color=${isDark ? '94a3b8' : '475569'}&icon_color=06b6d4`} 
                    alt="GitHub Stats" 
                    className="w-full h-auto object-contain"
                 />
              </motion.div>

              {/* Language Box */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-lg dark:shadow-none flex items-center justify-center md:col-span-1 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
              >
                 <img 
                    src={`https://github-readme-stats.vercel.app/api/top-langs/?username=psa21git&layout=compact&theme=transparent&hide_border=true&title_color=06b6d4&text_color=${isDark ? '94a3b8' : '475569'}`} 
                    alt="Top Languages" 
                    className="w-full h-auto object-contain"
                 />
              </motion.div>
              
              {/* Streak Box */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-lg dark:shadow-none flex items-center justify-center md:col-span-1 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
              >
                 <img 
                    src={`https://github-readme-streak-stats.herokuapp.com/?user=psa21git&theme=transparent&hide_border=true&stroke=0000&title_color=06b6d4&text_color=${isDark ? '94a3b8' : '475569'}&sideNums=${isDark ? '94a3b8' : '475569'}&sideLabels=${isDark ? '94a3b8' : '475569'}&ring=06b6d4&fire=06b6d4&currStreakNum=${isDark ? 'f8fafc' : '0f172a'}`} 
                    alt="GitHub Streak" 
                    className="w-full h-auto object-contain"
                 />
              </motion.div>

           </div>
       </div>
    </section>
  )
}
export default GithubBento;
