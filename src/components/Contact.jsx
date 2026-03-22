import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full" />
          <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            I'm currently open for intern or full-time opportunities in Data Science and Software Engineering. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 dark:bg-cyan-500/10 flex items-center justify-center text-cyan-600 dark:text-cyan-400 flex-shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Email</h3>
                <p className="text-slate-600 dark:text-slate-400 mt-1">psa.dev.21@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Phone</h3>
                <p className="text-slate-600 dark:text-slate-400 mt-1">+91-7008969009</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 flex-shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Location</h3>
                <p className="text-slate-600 dark:text-slate-400 mt-1">Bhubaneswar, Odisha, India</p>
              </div>
            </div>
            
            <div className="p-6 bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700 mt-8 shadow-sm dark:shadow-none">
              <h4 className="text-slate-900 dark:text-white font-medium mb-2">Let's Connect</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Feel free to reach out to me on LinkedIn or explore my repositories on GitHub.
              </p>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
            action="https://formsubmit.co/psa.dev.21@gmail.com"
            method="POST"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="box" />
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-colors shadow-sm dark:shadow-none"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-colors shadow-sm dark:shadow-none"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-colors resize-none shadow-sm dark:shadow-none"
                placeholder="How can I help you?"
              />
            </div>
            
            <button
              type="submit"
              className="w-full px-8 py-4 rounded-lg bg-cyan-600 text-white font-medium hover:bg-cyan-500 transition-colors flex items-center justify-center gap-2 group border border-transparent dark:border-cyan-500 shadow-md dark:shadow-none"
            >
              Send Message
              <Send size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
