import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Credit Score Prediction System',
      description: 'Built a production-ready end-to-end ML system to predict credit risk from real-world financial data. Implemented robust preprocessing and feature alignment. Deployed the trained model via a Flask web application enabling real-time predictions.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      tags: ['Python', 'Pandas', 'Scikit-learn', 'Flask', 'HTML/CSS'],
      github: 'https://github.com/psa21git/Credit_Score',
      demo: '#',
    },
    {
      title: 'Air Quality Index Prediction Model',
      description: 'Built an end-to-end machine learning pipeline for AQI forecasting using real-world pollutant data. Trained and evaluated Linear Regression, Random Forest, and XGBoost models. Generated interpretable outputs for public health decisions.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
      tags: ['Python', 'XGBoost', 'Matplotlib'],
      github: 'https://github.com/psa21git/Air-Quality-Health',
      demo: '#',
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full" />
          <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Practical applications of complex algorithms, from end-to-end machine learning pipelines to real-time predictive deployments.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 overflow-hidden hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-lg shadow-slate-200/50 dark:shadow-none"
            >
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/10 dark:bg-slate-900/40 group-hover:bg-transparent transition-colors z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium text-cyan-700 dark:text-cyan-400 bg-cyan-100 dark:bg-cyan-400/10 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    <Github size={18} />
                    Source Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    Live Demo
                    <ExternalLink size={18} />
                  </a>
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
