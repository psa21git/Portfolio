import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Photography Lead',
      company: 'FLUX, IIIT',
      location: 'Bhubaneswar, Odisha',
      period: 'August 2025 - Present',
      points: [
        'Led a 20-member photography team to cover 10+ college events, ensuring consistent visual branding and on-time delivery',
        'Collaborated with design, social media, and PR teams to produce high-engagement visual content for official platforms',
        'Analyzed event engagement metrics to prioritize high-impact visual content'
      ]
    },
    {
      title: 'Technical Intern',
      company: 'NALCO India',
      location: 'Angul, Odisha',
      period: 'June 2025',
      points: [
        'Designed and maintained SQL Server databases handling production-grade datasets',
        'Automated data storage and retrieval pipelines to support analytics-driven applications',
        'Collaborated cross-functionally to deploy a responsive ASP.NET system improving data accessibility'
      ]
    },
    {
      title: 'Open Source Contributor',
      company: 'GirlScript Summer of Code',
      location: 'Remote',
      period: 'Oct 2024 - Nov 2024',
      points: [
        'Contributed to 5+ repositories with a 90% pull request acceptance rate',
        'Refactored data processing logic and resolved performance-critical bugs'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-cyan-600/10 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Experience</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-slate-300 dark:bg-slate-800 transform -translate-x-1/2"></div>
              
              <div className={`md:flex items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-900 border-4 border-cyan-500 transform -translate-x-1/2 mt-1.5 md:mt-0 z-10 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400"></div>
                </div>

                <div className="md:w-[45%] mb-4 md:mb-0">
                  <div className={`bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-lg shadow-slate-200/50 dark:shadow-none ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white text-left">{exp.title}</h3>
                    <div className="flex flex-wrap items-center gap-2 mt-2 mb-4 text-slate-500 dark:text-slate-400 text-sm">
                      <Briefcase size={14} className="text-cyan-600 dark:text-cyan-400" />
                      <span className="font-medium text-slate-800 dark:text-slate-300">{exp.company}</span>
                      <span>&bull;</span>
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    
                    <ul className="space-y-2 text-left">
                      {exp.points.map((point, i) => (
                        <li key={i} className="text-slate-600 dark:text-slate-400 text-sm flex gap-2">
                          <span className="text-cyan-500 mt-1">&rsaquo;</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
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
