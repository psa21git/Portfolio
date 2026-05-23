import { motion } from 'framer-motion';
import { Compass, Sparkles, Anchor, Swords, Star, Trophy } from 'lucide-react';

const About = () => {
  const skillGears = [
    { 
      gearName: 'GEAR 2ND: SPEED HAKI LANGUAGES', 
      skills: 'Python, C++, Java',
      desc: 'Blazing speed execution and core programmatic capabilities.',
      color: 'bg-red-500/10 hover:bg-red-500/20 text-red-600 border-red-500/30'
    },
    { 
      gearName: 'GEAR 3RD: GIGANT ML DATA ABILITIES', 
      skills: 'Pandas, NumPy, Matplotlib, Scikit-learn, XGBoost',
      desc: 'Colossal analytical power transforming raw numbers into intelligence.',
      color: 'bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-600 border-yellow-500/30'
    },
    { 
      gearName: 'GOMU GOMU NO VAULT: DATABASE STORAGE', 
      skills: 'MySQL, Microsoft SQL Server, MongoDB',
      desc: 'Secure hold and retrieval of high-volume digital plunder.',
      color: 'bg-purple-500/10 hover:bg-purple-500/20 text-purple-600 border-purple-500/30'
    },
    { 
      gearName: 'GEAR 4TH: BOUNDMAN WEB & DEPLOYMENT', 
      skills: 'ReactJS, Django REST, Git, GitHub, Docker',
      desc: 'Robust frameworks and dev container gears bouncing between client and server bases.',
      color: 'bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 border-blue-500/30'
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Halftone & speed lines background grids */}
      <div className="absolute inset-0 manga-halftone pointer-events-none -z-10 opacity-40" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-red-600/5 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="font-['Bangers'] text-red-600 dark:text-red-500 text-lg tracking-widest block uppercase mb-1">
            CREW LOG BOOK
          </span>
          <h2 className="text-4xl md:text-5xl font-['Bangers'] tracking-wider text-black dark:text-white uppercase stroke-manga inline-block rotate-[-1deg] px-6 py-2 bg-yellow-400 dark:bg-yellow-500 text-black border-3 border-black shadow-[4px_4px_0px_#000]">
            ABOUT THE DATA SCIENTIST
          </h2>
        </motion.div>

        {/* Grid Panels */}
        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          
          {/* Left Panel: Grand Line Log Pose (Education) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            <div className="bg-white dark:bg-zinc-900 border-4 border-black dark:border-white p-8 rounded-sm shadow-[6px_6px_0px_#000] dark:shadow-[6px_6px_0px_#fff] flex-1 relative transform rotate-[-0.5deg]">
              {/* Halftone overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.02)_15%,transparent_16%)] bg-[size:6px_6px] pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-8 border-b-3 border-black dark:border-white pb-4">
                <Compass className="text-red-600 dark:text-yellow-400 animate-pulse" size={28} />
                <h3 className="text-2xl font-['Bangers'] tracking-wider text-black dark:text-white uppercase">
                  GRAND LINE LOG POSE (EDUCATION)
                </h3>
              </div>

              <div className="space-y-8 relative">
                {/* Visual track line for Log Pose sailing */}
                <div className="absolute left-6 top-2 bottom-2 w-1 border-l-3 border-dashed border-red-500/40 hidden sm:block"></div>

                {/* Island 1: IIIT Bhubaneswar */}
                <div className="flex flex-col sm:flex-row gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-full border-3 border-black dark:border-white bg-yellow-400 dark:bg-yellow-500 text-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_#000]">
                    <Anchor size={20} />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-widest block mb-0.5">ISLAND #1: UNIVERSITY DEPARTURE</span>
                    <h4 className="text-xl font-bold text-black dark:text-white font-['Bangers'] tracking-wide">
                      International Institute of Information Technology
                    </h4>
                    <p className="text-red-600 dark:text-yellow-400 font-bold text-sm uppercase">Bachelor of Computer Engineering</p>
                    <p className="text-zinc-500 dark:text-zinc-400 text-xs font-semibold mt-1">Bhubaneswar, Odisha &bull; Aug 2023 - Jul 2027</p>
                    
                    <div className="mt-3 inline-block px-3 py-1 border-2 border-black dark:border-white bg-[#ede3c9] text-black font-['Bangers'] text-md tracking-wider rounded-sm shadow-[2px_2px_0px_#000]">
                      SAILING STRENGTH (CGPA): <span className="text-red-600 font-bold">8.52 / 10</span>
                    </div>
                  </div>
                </div>

                <div className="h-0.5 border-t-2 border-dashed border-zinc-200 dark:border-zinc-800"></div>

                {/* Island 2: DAV School */}
                <div className="flex flex-col sm:flex-row gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-full border-3 border-black dark:border-white bg-red-600 text-white flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_#000]">
                    <Swords size={20} />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-widest block mb-0.5">ISLAND #2: EAST BLUE ROOTS</span>
                    <h4 className="text-xl font-bold text-black dark:text-white font-['Bangers'] tracking-wide">
                      DAV Public School
                    </h4>
                    <p className="text-red-600 dark:text-yellow-400 font-bold text-sm uppercase">CBSE (Class XII) - PCM Stream</p>
                    <p className="text-zinc-500 dark:text-zinc-400 text-xs font-semibold mt-1">Angul, Odisha &bull; May 2022</p>
                    
                    <div className="mt-3 inline-block px-3 py-1 border-2 border-black dark:border-white bg-zinc-100 text-black font-['Bangers'] text-md tracking-wider rounded-sm shadow-[2px_2px_0px_#000]">
                      VICTORY RATIO: <span className="text-red-600 font-bold">98.2%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Panel: Devil Fruit Abilities & Gears (Skills) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            <div className="bg-white dark:bg-zinc-900 border-4 border-black dark:border-white p-8 rounded-sm shadow-[6px_6px_0px_#000] dark:shadow-[6px_6px_0px_#fff] flex-1 relative transform rotate-[0.5deg]">
              {/* Halftone overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.02)_15%,transparent_16%)] bg-[size:6px_6px] pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-8 border-b-3 border-black dark:border-white pb-4">
                <Sparkles className="text-yellow-500" size={28} />
                <h3 className="text-2xl font-['Bangers'] tracking-wider text-black dark:text-white uppercase">
                  DEVIL FRUIT HAKI (TECHNICAL SKILLS)
                </h3>
              </div>

              <div className="grid gap-5">
                {skillGears.map((gear, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? -0.5 : 0.5 }}
                    className={`flex flex-col border-3 border-black dark:border-white p-4 rounded-sm transition-all cursor-default shadow-[3px_3px_0px_#000] dark:shadow-[3px_3px_0px_#fff] bg-[#fdfdfd] dark:bg-zinc-800`}
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <Star size={16} fill="#dc2626" className="text-[#dc2626]" />
                      <span className="font-['Bangers'] text-lg tracking-wider text-red-600 dark:text-yellow-400">
                        {gear.gearName}
                      </span>
                    </div>
                    
                    <div className="font-['Bangers'] text-xl tracking-wider text-black dark:text-white mb-1">
                      {gear.skills}
                    </div>
                    
                    <p className="text-zinc-600 dark:text-zinc-400 text-xs font-semibold">
                      {gear.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
        </div>

        {/* Full-width Certifications Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 w-full"
        >
          <div className="bg-white dark:bg-zinc-900 border-4 border-black dark:border-white p-8 rounded-sm shadow-[6px_6px_0px_#000] dark:shadow-[6px_6px_0px_#fff] relative transform rotate-[0.3deg]">
            <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.02)_15%,transparent_16%)] bg-[size:6px_6px] pointer-events-none" />
            
            <div className="flex items-center gap-3 mb-8 border-b-3 border-black dark:border-white pb-4">
              <Trophy className="text-yellow-500 animate-bounce" size={26} />
              <h3 className="text-2xl font-['Bangers'] tracking-wider text-black dark:text-white uppercase">
                VIVRE CARDS & TRAINING CREDENTIALS (CERTIFICATIONS)
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  id: 'CRED #1',
                  title: 'Tools for Data Science',
                  provider: 'IBM - Coursera',
                  date: 'December 2025'
                },
                {
                  id: 'CRED #2',
                  title: 'Python for Data Science, AI & Dev',
                  provider: 'IBM - Coursera',
                  date: 'January 2026'
                },
                {
                  id: 'CRED #3',
                  title: 'Data Analytics Job Simulation',
                  provider: 'Deloitte - Forage',
                  date: 'April 2026'
                }
              ].map((cert, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03, rotate: index % 2 === 0 ? 0.5 : -0.5 }}
                  className="bg-[#fcfcfd] dark:bg-zinc-800 border-3 border-black dark:border-white p-5 shadow-[3px_3px_0px_#000] dark:shadow-[3px_3px_0px_#fff] rounded-sm relative pt-6"
                >
                  <span className="absolute -top-3 left-4 px-2 py-0.5 border-2 border-black bg-red-600 text-white font-['Bangers'] text-xs tracking-wider uppercase rotate-[-2deg] shadow-[1px_1px_0px_#000]">
                    {cert.id}
                  </span>
                  <h4 className="font-['Bangers'] text-xl tracking-wider text-black dark:text-white uppercase mb-1">
                    {cert.title}
                  </h4>
                  <p className="text-red-600 dark:text-yellow-400 text-sm font-bold uppercase">{cert.provider}</p>
                  <p className="text-zinc-500 dark:text-zinc-400 text-xs font-bold mt-1 uppercase">{cert.date}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
