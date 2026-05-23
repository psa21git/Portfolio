import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Phone, Disc } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Halftone BG grid overlay */}
      <div className="absolute inset-0 manga-halftone pointer-events-none -z-10 opacity-30" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-[120px] -z-10" />

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
            ESTABLISH CONNECTION
          </span>
          <h2 className="text-4xl md:text-5xl font-['Bangers'] tracking-wider text-black dark:text-white uppercase stroke-manga inline-block rotate-[-1.5deg] px-6 py-2 bg-red-600 text-white border-3 border-black shadow-[4px_4px_0px_#000]">
            DEN DEN MUSHI COMMUNICATIONS (CONTACT)
          </h2>
          <p className="mt-6 text-zinc-700 dark:text-zinc-400 font-bold max-w-xl mx-auto italic">
            Ready to set sail on a new project or hire a crew member? Establish snail frequencies or drop a message in a bottle below!
          </p>
        </motion.div>

        {/* Contact Layout Panels */}
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto items-stretch">
          
          {/* Left panel: Den Den Mushi Snail info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-between space-y-8"
          >
            <div className="bg-white dark:bg-zinc-900 border-4 border-black dark:border-white p-6 shadow-[5px_5px_0px_#000] dark:shadow-[5px_5px_0px_#fff] relative transform rotate-[-0.5deg]">
              
              <div className="flex items-center gap-3 mb-6 border-b-2 border-dashed border-black dark:border-white pb-3">
                <Disc className="text-yellow-500 animate-spin-slow" />
                <h3 className="text-xl font-['Bangers'] tracking-wider text-black dark:text-white uppercase">
                  ACTIVE FREQUENCIES
                </h3>
              </div>

              <div className="space-y-6">
                
                {/* Email Snail */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border-3 border-black dark:border-white bg-[#ede3c9] dark:bg-zinc-800 text-black dark:text-white flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_#000]">
                    <Mail size={22} className="text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-['Bangers'] text-black dark:text-white uppercase leading-none">EMAIL SIGNAL</h4>
                    <p className="text-zinc-700 dark:text-zinc-300 text-md font-bold mt-1">psa.dev.21@gmail.com</p>
                  </div>
                </div>

                {/* Phone Snail */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border-3 border-black dark:border-white bg-[#ede3c9] dark:bg-zinc-800 text-black dark:text-white flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_#000]">
                    <Phone size={22} className="text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-['Bangers'] text-black dark:text-white uppercase leading-none">VIVRE FREQUENCY</h4>
                    <p className="text-zinc-700 dark:text-zinc-300 text-md font-bold mt-1">+91-7008969009</p>
                  </div>
                </div>

                {/* Location Island */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border-3 border-black dark:border-white bg-[#ede3c9] dark:bg-zinc-800 text-black dark:text-white flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_#000]">
                    <MapPin size={22} className="text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-['Bangers'] text-black dark:text-white uppercase leading-none">ANCHOR HARBOR</h4>
                    <p className="text-zinc-700 dark:text-zinc-300 text-md font-bold mt-1">Bhubaneswar, Odisha, India</p>
                  </div>
                </div>

              </div>
            </div>
            
            {/* Funny speech dialogue note */}
            <div className="bg-yellow-400 dark:bg-yellow-500 text-black border-4 border-black p-5 rounded-sm shadow-[5px_5px_0px_#000] transform rotate-[1.5deg] relative">
              <div className="absolute -top-3 left-8 w-4 h-4 bg-yellow-400 dark:bg-yellow-500 border-t-4 border-l-4 border-black transform rotate-[45deg]" />
              <h4 className="font-['Bangers'] text-lg tracking-wider mb-1 uppercase">CAPTAIN'S NOTICE:</h4>
              <p className="text-xs font-bold font-sans">
                "I am currently looking for software engineering or data science apprenticeships! Drop a line and let's conquer the oceans of code together!" — Sreyanshu-ya
              </p>
            </div>
          </motion.div>

          {/* Right panel: Transmit Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-zinc-900 border-4 border-black dark:border-white p-6 shadow-[5px_5px_0px_#000] dark:shadow-[5px_5px_0px_#fff] space-y-4 transform rotate-[0.5deg]"
            action="https://formsubmit.co/psa.dev.21@gmail.com"
            method="POST"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="box" />
            
            <div>
              <label htmlFor="name" className="block text-md font-['Bangers'] tracking-wider text-black dark:text-white uppercase mb-1">
                PILOT NAME
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border-3 border-black dark:border-white bg-[#fbfbfd] dark:bg-zinc-800 text-black dark:text-white font-bold placeholder-zinc-400 focus:outline-none focus:bg-yellow-300/10 dark:focus:bg-yellow-400/10 transition-colors"
                placeholder="What crew callsign do you hold?"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-md font-['Bangers'] tracking-wider text-black dark:text-white uppercase mb-1">
                TRANSMIT FREQUENCY (EMAIL)
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border-3 border-black dark:border-white bg-[#fbfbfd] dark:bg-zinc-800 text-black dark:text-white font-bold placeholder-zinc-400 focus:outline-none focus:bg-yellow-300/10 dark:focus:bg-yellow-400/10 transition-colors"
                placeholder="Where should our reply signal sail?"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-md font-['Bangers'] tracking-wider text-black dark:text-white uppercase mb-1">
                TRANSMISSION MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-4 py-2 border-3 border-black dark:border-white bg-[#fbfbfd] dark:bg-zinc-800 text-black dark:text-white font-bold placeholder-zinc-400 focus:outline-none focus:bg-yellow-300/10 dark:focus:bg-yellow-400/10 resize-none transition-colors"
                placeholder="State your business or share bounty details!"
              />
            </div>
            
            <button
              type="submit"
              className="w-full px-8 py-3.5 border-3 border-black dark:border-white bg-red-600 text-white font-['Bangers'] tracking-wider text-lg rounded-sm hover:bg-yellow-400 hover:text-black transition-all flex items-center justify-center gap-2 group shadow-[3px_3px_0px_#000] dark:shadow-[3px_3px_0px_#fff]"
            >
              TRANSMIT GOMU SIGNAL! (SEND)
              <Send size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
