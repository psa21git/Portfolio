import { motion } from 'framer-motion';
import { ExternalLink, Github, Trophy, Target, Star } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      bountyId: 'BOUNTY #98',
      title: 'Credit Risk Forecaster System',
      reward: '฿ 4,500,000,000',
      description: 'Forged a production-ready end-to-end machine learning engine to foretell credit liability risks from real financial records. Built robust preprocessing frameworks and deployed via a dynamic Django REST service for instant forecasting.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      tags: ['Python', 'Pandas', 'Scikit-learn', 'Django REST', 'HTML/CSS'],
      github: 'https://github.com/psa21git/Credit_Score',
      demo: 'https://credit-score-fh0k.onrender.com/',
      badge: 'ACTIVE QUEST'
    },
    {
      bountyId: 'BOUNTY #74',
      title: 'Air Quality Forecasting Machine',
      reward: '฿ 3,200,000,000',
      description: 'Assembled an end-to-end predictive pipeline forecasting regional Air Quality Indices using real-world pollutant data. Trained and tuned Linear Regression, Random Forest, and extreme gradient boosting (XGBoost) engines to yield health hazard warnings.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
      tags: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Scikit-Learn', 'Django REST', 'Docker'],
      github: 'https://github.com/psa21git/Air-Quality-Health',
      demo: '#',
      badge: 'VICTORY'
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Halftone & speed lines background elements */}
      <div className="absolute inset-0 manga-halftone pointer-events-none -z-10 opacity-30" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-red-600/5 rounded-full blur-[100px] -z-10" />

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
            WANTED MISSIONS
          </span>
          <h2 className="text-4xl md:text-5xl font-['Bangers'] tracking-wider text-black dark:text-white uppercase stroke-manga inline-block rotate-[-1deg] px-6 py-2 bg-yellow-400 dark:bg-yellow-500 text-black border-3 border-black shadow-[4px_4px_0px_#000]">
            ACTIVE ADVENTURES & BOUNTIES (PROJECTS)
          </h2>
          <p className="mt-6 text-zinc-700 dark:text-zinc-400 font-bold max-w-xl mx-auto italic">
            Practical deployments of high-level numerical algorithms. High reward quests involving robust code and real-time execution!
          </p>
        </motion.div>

        {/* Project Panels Cards Grid */}
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group bg-white dark:bg-zinc-950 border-4 border-black dark:border-white rounded-sm overflow-hidden shadow-[6px_6px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_rgba(255,255,255,1)] hover:shadow-[9px_9px_0px_rgba(0,0,0,1)] dark:hover:shadow-[9px_9px_0px_rgba(255,255,255,1)] transition-all transform hover:-translate-y-1 hover:rotate-[0.5deg]"
            >
              
              {/* Image banner overlay panel with dynamic angle */}
              <div className="relative h-60 overflow-hidden border-b-4 border-black dark:border-white">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
                
                {/* Stamp Sticker */}
                <div className="absolute top-4 left-4 z-20 px-3 py-1 font-['Bangers'] text-sm tracking-wider uppercase border-2 border-black bg-red-600 text-white shadow-[2px_2px_0px_#000] rotate-[-5deg]">
                  {project.badge}
                </div>

                <div className="absolute top-4 right-4 z-20 px-3 py-1 font-['Bangers'] text-sm tracking-wider uppercase border-2 border-black bg-yellow-400 text-black shadow-[2px_2px_0px_#000] rotate-[5deg]">
                  {project.bountyId}
                </div>

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover filter contrast-110 saturate-75 group-hover:scale-105 transition-transform duration-750"
                />
              </div>
              
              {/* Details card space */}
              <div className="p-6">
                <h3 className="text-2xl font-['Bangers'] tracking-wider text-black dark:text-white uppercase leading-none mb-1">
                  {project.title}
                </h3>
                
                {/* Bounty value representation */}
                <div className="flex items-center gap-1.5 font-['Bangers'] text-md text-red-600 dark:text-yellow-400 tracking-widest uppercase mb-4">
                  <Target size={14} className="text-red-600" />
                  <span>Bounty Reward: {project.reward}</span>
                </div>

                <p className="text-zinc-700 dark:text-zinc-300 text-sm font-semibold mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Comic style tag bubbles */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 font-['Bangers'] tracking-wider text-xs border-2 border-black dark:border-white bg-[#ede3c9] dark:bg-zinc-800 text-black dark:text-white rounded-md shadow-[2px_2px_0px_#000] dark:shadow-[2px_2px_0px_#fff]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Action CTA Anchors */}
                <div className="flex items-center justify-between pt-4 border-t-2 border-dashed border-zinc-200 dark:border-zinc-800">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 font-['Bangers'] tracking-wider text-sm text-black dark:text-white hover:text-red-600 dark:hover:text-yellow-400 transition-colors uppercase"
                  >
                    <Github size={16} />
                    PIRATE LOG (SOURCE)
                  </a>
                  
                  {project.demo !== '#' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 font-['Bangers'] tracking-wider text-sm text-red-600 dark:text-yellow-400 hover:text-black dark:hover:text-white transition-colors uppercase border-2 border-black dark:border-white px-2.5 py-1 bg-yellow-300 dark:bg-zinc-800 shadow-[2px_2px_0px_#000] dark:shadow-[2px_2px_0px_#fff]"
                    >
                      SAIL LIVE (DEMO)
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
