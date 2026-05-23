import { motion } from 'framer-motion';
import { Camera, Server, Ship, Calendar, Trophy } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      stage: 'ADVENTURE STAGE 01',
      title: 'Technical Intern (NALCO PLUNDER)',
      company: 'NALCO India Base',
      icon: <Server size={20} />,
      period: 'June 2025',
      badge: 'CLASH!!',
      badgeColor: 'bg-red-600 text-white',
      points: [
        'Designed production-grade SQL databases managing large inventory assets',
        'Constructed automated pipelines to store and pull intelligence records',
        'Collaborated with senior commanders to build a responsive ASP.NET data hub, boosting accessibility'
      ]
    },
    {
      stage: 'ADVENTURE STAGE 02',
      title: 'Open Source Sailor',
      company: 'GirlScript Summer of Code',
      icon: <Ship size={20} />,
      period: 'Oct 2024 - Nov 2024',
      badge: 'DON!!',
      badgeColor: 'bg-yellow-400 text-black',
      points: [
        'Sailed through 5+ public codebases with a 90% pull request victory rate',
        'Refactored data processing pathways and crushed performance bugs'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background halftone layout */}
      <div className="absolute inset-0 manga-halftone pointer-events-none -z-10 opacity-30" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-yellow-500/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <span className="font-['Bangers'] text-red-600 dark:text-red-500 text-lg tracking-widest block uppercase mb-1">
            SAILING CHRONICLES
          </span>
          <h2 className="text-4xl md:text-5xl font-['Bangers'] tracking-wider text-black dark:text-white uppercase stroke-manga inline-block rotate-[1deg] px-6 py-2 bg-red-600 text-white border-3 border-black shadow-[4px_4px_0px_#000]">
            BATTLE EXPERIENCE (WORK LOG)
          </h2>
        </motion.div>

        {/* Comic Strip Storyboard Timeline */}
        <div className="relative space-y-16">
          {/* Vertical comic border dividing panels */}
          <div className="absolute left-6 md:left-[50%] top-0 bottom-0 w-1 border-l-4 border-black dark:border-white pointer-events-none hidden sm:block"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-12 md:pl-0 w-full"
            >
              <div className={`md:flex items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Visual center shield (Log Book node) */}
                <div className="absolute left-0 md:left-1/2 w-12 h-12 rounded-full border-4 border-black dark:border-white bg-[#ede3c9] dark:bg-zinc-800 text-black dark:text-white transform -translate-x-1/2 z-20 flex items-center justify-center shadow-[2px_2px_0px_#000]">
                  {exp.icon}
                </div>

                {/* Panel Card */}
                <div className="md:w-[45%]">
                  <div className="relative bg-white dark:bg-zinc-900 border-4 border-black dark:border-white p-6 shadow-[6px_6px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_rgba(255,255,255,1)] transform hover:scale-[1.02] hover:rotate-[0.5deg] transition-all">
                    
                    {/* Action SFX Sound Sticker */}
                    <div className={`absolute -top-4 -right-4 px-3 py-1 font-['Permanent_Marker'] border-3 border-black text-sm tracking-wider uppercase rotate-[12deg] shadow-[2px_2px_0px_#000] ${exp.badgeColor}`}>
                      {exp.badge}
                    </div>

                    {/* Adventure Stage Header */}
                    <span className="font-['Bangers'] text-sm tracking-wider text-red-600 dark:text-yellow-400 block mb-1">
                      {exp.stage}
                    </span>

                    {/* Title & Organization */}
                    <h3 className="text-2xl font-['Bangers'] tracking-wider text-black dark:text-white leading-none uppercase">
                      {exp.title}
                    </h3>
                    
                    <div className="flex flex-wrap items-center gap-2 mt-2 mb-3 text-zinc-500 dark:text-zinc-400 text-xs font-bold uppercase">
                      <span className="text-black dark:text-white border-2 border-black dark:border-white px-1.5 py-0.5 bg-yellow-300 dark:bg-yellow-500/20 text-[10px] rounded-sm">
                        {exp.company}
                      </span>
                    </div>

                    {/* Timeline period */}
                    <div className="flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400 text-xs font-bold uppercase mb-4">
                      <Calendar size={12} className="text-red-600" />
                      <span>{exp.period}</span>
                    </div>
                    
                    {/* Adventure details */}
                    <ul className="space-y-3 border-t-2 border-dashed border-zinc-200 dark:border-zinc-800 pt-4">
                      {exp.points.map((point, i) => (
                        <li key={i} className="text-zinc-700 dark:text-zinc-300 text-sm font-semibold flex gap-2">
                          <span className="text-red-600 dark:text-yellow-400 font-bold font-serif text-md mt-0.5">&rsaquo;</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Empty buffer for alternating vertical layout */}
                <div className="hidden md:block md:w-[45%]"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
