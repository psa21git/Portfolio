import { motion } from 'framer-motion';
import { Code2, Database, BrainCircuit, Rocket } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Python, C++, Java', icon: <Code2 size={20} /> },
    { name: 'Pandas, NumPy, Scikit-learn', icon: <BrainCircuit size={20} /> },
    { name: 'MySQL, SQL Server, MongoDB', icon: <Database size={20} /> },
    { name: 'ReactJS, Flask, Docker', icon: <Rocket size={20} /> },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white/80 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 shadow-xl h-full">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Education</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 border border-blue-500/20">
                    <span className="text-blue-600 dark:text-blue-400 font-bold text-xs">IIIT</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200">International Institute of Information Technology</h4>
                    <p className="text-cyan-600 dark:text-cyan-400 text-sm">Bachelor of Computer Engineering</p>
                    <p className="text-slate-500 dark:text-slate-400 mt-1 text-sm font-medium">Bhubaneswar, Odisha &bull; Aug 2023 - Jul 2027</p>
                    <p className="text-slate-700 dark:text-slate-300 mt-2 text-sm bg-slate-100 dark:bg-slate-800/80 inline-block px-2 py-1 rounded">CGPA: <span className="text-cyan-600 dark:text-cyan-400 font-bold">8.48</span></p>
                  </div>
                </div>
                
                <div className="w-full h-px bg-slate-200 dark:bg-slate-700/50 my-2"></div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0 border border-emerald-500/20">
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold text-xs">DAV</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200">DAV Public School</h4>
                    <p className="text-cyan-600 dark:text-cyan-400 text-sm">CBSE (Class XII) - PCM Stream</p>
                    <p className="text-slate-500 dark:text-slate-400 mt-1 text-sm font-medium">Angul, Odisha &bull; May 2022</p>
                    <p className="text-slate-700 dark:text-slate-300 mt-2 text-sm bg-slate-100 dark:bg-slate-800/80 inline-block px-2 py-1 rounded">Score: <span className="text-emerald-600 dark:text-emerald-400 font-bold">98.2%</span></p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-full"
          >
            <div className="bg-white/80 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 shadow-xl h-full">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Technical Skills</h3>
              <div className="grid gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 bg-white/50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50 rounded-xl p-4 hover:bg-white dark:hover:bg-slate-800/80 hover:border-cyan-400/50 dark:hover:border-cyan-500/30 transition-all cursor-default shadow-sm dark:shadow-none"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-600 dark:text-cyan-400 flex-shrink-0">
                    {skill.icon}
                  </div>
                  <span className="font-medium text-slate-700 dark:text-slate-200">{skill.name}</span>
                </motion.div>
              ))}
            </div>
            
            {/* <div className="mt-8 flex flex-wrap gap-2">
              {['Git', 'GitHub', 'ASP.NET', 'Microsoft Azure', 'XGBoost', 'Matplotlib'].map((tag, i) => (
                 <span key={i} className="px-3 py-1 text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700">
                    {tag}
                 </span>
              ))}
            </div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
