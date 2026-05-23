import { GitHubCalendar } from 'react-github-calendar';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ShieldAlert, Award, Zap, GitCommit } from 'lucide-react';

const GithubBento = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    setIsDark(document.documentElement.classList.contains('dark'));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="github" className="py-24 relative overflow-hidden">
       {/* Screentone & speed lines overlay bg */}
       <div className="absolute inset-0 manga-halftone pointer-events-none -z-10 opacity-30" />
       <div className="absolute top-1/2 left-0 w-80 h-80 bg-purple-600/5 rounded-full blur-[100px] -z-10" />
       
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
           
           {/* Section Header */}
           <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
           >
              <span className="font-['Bangers'] text-red-600 dark:text-red-500 text-lg tracking-widest block uppercase mb-1">
                SEAWORTHY LOG BOOK
              </span>
              <h2 className="text-4xl md:text-5xl font-['Bangers'] tracking-wider text-black dark:text-white uppercase stroke-manga inline-block rotate-[1.5deg] px-6 py-2 bg-yellow-400 dark:bg-yellow-500 text-black border-3 border-black shadow-[4px_4px_0px_#000]">
                GITHUB ACTIVITY CHRONICLES
              </h2>
              <p className="mt-6 text-zinc-700 dark:text-zinc-400 font-bold max-w-xl mx-auto italic">
                Real-time recording of our open-source voyages, language mastery, and daily contribution streaks!
              </p>
           </motion.div>
           
           {/* Bento Grid */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              
              {/* Main Calendar Box */}
              <motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5, delay: 0.1 }}
                 className="p-6 md:col-span-3 bg-white dark:bg-zinc-900 border-4 border-black dark:border-white rounded-sm shadow-[6px_6px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_rgba(255,255,255,1)] hover:shadow-[9px_9px_0px_rgba(0,0,0,1)] dark:hover:shadow-[9px_9px_0px_rgba(255,255,255,1)] transition-all flex flex-col overflow-x-auto transform hover:rotate-[-0.5deg]"
               >
                  <div className="flex items-center gap-2 mb-6 border-b-2 border-dashed border-black dark:border-white pb-3">
                    <GitCommit className="text-red-600" />
                    <h3 className="text-2xl font-['Bangers'] tracking-wider text-black dark:text-white uppercase">
                      DAILY CONTRIBUTION GRID (SAILING PATH)
                    </h3>
                  </div>
                  
                  <div className="w-full flex justify-center pb-4 text-xs md:text-sm overflow-x-auto">
                    <div className="min-w-[670px] flex justify-center">
                      <GitHubCalendar 
                         username="psa21git" 
                         colorScheme={isDark ? "dark" : "light"}
                         blockSize={13}
                         blockMargin={5}
                         fontSize={13}
                         theme={{
                            light: ['#ebedf0', '#fecdd3', '#fda4af', '#f43f5e', '#be123c'],
                            dark: ['#1e293b', '#4c0519', '#881337', '#e11d48', '#f43f5e'],
                         }}
                      />
                    </div>
                  </div>
              </motion.div>
              
              {/* Stats Box */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-5 bg-white dark:bg-zinc-900 border-4 border-black dark:border-white rounded-sm shadow-[6px_6px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_rgba(255,255,255,1)] hover:shadow-[9px_9px_0px_rgba(0,0,0,1)] dark:hover:shadow-[9px_9px_0px_rgba(255,255,255,1)] transition-all flex flex-col md:col-span-1 transform hover:rotate-[0.5deg]"
              >
                 <div className="flex items-center gap-2 mb-4 border-b-2 border-dashed border-black dark:border-white pb-2">
                   <ShieldAlert className="text-yellow-500" size={16} />
                   <h4 className="text-lg font-['Bangers'] tracking-wider text-black dark:text-white uppercase leading-none">
                     PLUNDER VALUE STATS
                   </h4>
                 </div>
                 <div className="flex-1 flex items-center justify-center bg-zinc-50 dark:bg-zinc-800 border-2 border-black p-2 min-h-[140px] rounded-sm">
                   <img 
                      src={`https://github-readme-stats.vercel.app/api?username=psa21git&show_icons=true&theme=transparent&hide_border=true&title_color=dc2626&text_color=${isDark ? 'f8fafc' : '0f172a'}&icon_color=eab308`} 
                      alt="GitHub Stats" 
                      className="w-full h-auto object-contain max-h-[120px] dark:invert-0"
                   />
                 </div>
              </motion.div>

              {/* Language Box */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="p-5 bg-white dark:bg-zinc-900 border-4 border-black dark:border-white rounded-sm shadow-[6px_6px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_rgba(255,255,255,1)] hover:shadow-[9px_9px_0px_rgba(0,0,0,1)] dark:hover:shadow-[9px_9px_0px_rgba(255,255,255,1)] transition-all flex flex-col md:col-span-1 transform hover:rotate-[-0.5deg]"
              >
                 <div className="flex items-center gap-2 mb-4 border-b-2 border-dashed border-black dark:border-white pb-2">
                   <Award className="text-red-600" size={16} />
                   <h4 className="text-lg font-['Bangers'] tracking-wider text-black dark:text-white uppercase leading-none">
                     FAVORITE HAKI TOOLS
                   </h4>
                 </div>
                 <div className="flex-1 flex items-center justify-center bg-zinc-50 dark:bg-zinc-800 border-2 border-black p-2 min-h-[140px] rounded-sm">
                   <img 
                      src={`https://github-readme-stats.vercel.app/api/top-langs/?username=psa21git&layout=compact&theme=transparent&hide_border=true&title_color=dc2626&text_color=${isDark ? 'f8fafc' : '0f172a'}`} 
                      alt="Top Languages" 
                      className="w-full h-auto object-contain max-h-[120px]"
                   />
                 </div>
              </motion.div>
              
              {/* Streak Box */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="p-5 bg-white dark:bg-zinc-900 border-4 border-black dark:border-white rounded-sm shadow-[6px_6px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_rgba(255,255,255,1)] hover:shadow-[9px_9px_0px_rgba(0,0,0,1)] dark:hover:shadow-[9px_9px_0px_rgba(255,255,255,1)] transition-all flex flex-col md:col-span-1 transform hover:rotate-[0.5deg]"
              >
                 <div className="flex items-center gap-2 mb-4 border-b-2 border-dashed border-black dark:border-white pb-2">
                   <Zap className="text-yellow-500 animate-bounce" size={16} />
                   <h4 className="text-lg font-['Bangers'] tracking-wider text-black dark:text-white uppercase leading-none">
                     STREAK HAKI LEVEL
                   </h4>
                 </div>
                 <div className="flex-1 flex items-center justify-center bg-zinc-50 dark:bg-zinc-800 border-2 border-black p-2 min-h-[140px] rounded-sm">
                   <img 
                      src={`https://github-readme-streak-stats.herokuapp.com/?user=psa21git&theme=transparent&hide_border=true&stroke=0000&title_color=dc2626&text_color=${isDark ? '94a3b8' : '475569'}&sideNums=${isDark ? 'f43f5e' : 'dc2626'}&sideLabels=${isDark ? '94a3b8' : '475569'}&ring=eab308&fire=dc2626&currStreakNum=${isDark ? 'f8fafc' : '0f172a'}`} 
                      alt="GitHub Streak" 
                      className="w-full h-auto object-contain max-h-[120px]"
                   />
                 </div>
              </motion.div>

           </div>
       </div>
    </section>
  )
}
export default GithubBento;
