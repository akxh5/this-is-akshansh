import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Github, Linkedin, MessageCircle, Mail } from 'lucide-react';

export const About: React.FC = () => {
  const socials = [
    { 
      icon: Twitter, 
      href: 'https://x.com/akxh_5', 
      color: 'hover:text-blue-400',
      bgColor: 'hover:bg-blue-50 dark:hover:bg-blue-900/30'
    },
    { 
      icon: Github, 
      href: 'https://github.com/akxh5', 
      color: 'hover:text-gray-800 dark:hover:text-white',
      bgColor: 'hover:bg-gray-50 dark:hover:bg-gray-700/50'
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/akshansh-sharma-256604332/', 
      color: 'hover:text-blue-600',
      bgColor: 'hover:bg-blue-50 dark:hover:bg-blue-900/30'
    },
    { 
      icon: MessageCircle, 
      href: '#', 
      color: 'hover:text-indigo-500',
      bgColor: 'hover:bg-indigo-50 dark:hover:bg-indigo-900/30'
    },
    { 
      icon: Mail, 
      href: 'mailto:akshanshsharmaa@gmail.com', 
      color: 'hover:text-red-500',
      bgColor: 'hover:bg-red-50 dark:hover:bg-red-900/30'
    }
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center max-w-5xl"
      >
        <motion.h2 
          className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-16 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          About
        </motion.h2>
        
        {/* Primary Quote - Back to Original Design */}
        <motion.div
          className="relative mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur-xl transform -rotate-1"></div>
          <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-3xl p-12 shadow-2xl">
            <motion.p 
              className="text-3xl md:text-4xl font-light text-gray-800 dark:text-gray-200 leading-relaxed italic"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
            >
              "I code the future, but I never forget to feel."
            </motion.p>
          </div>
        </motion.div>

        {/* Supporting Bio Text */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            {/* Animated underline effect */}
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "60px" }}
              transition={{ duration: 1, delay: 1.2 }}
              viewport={{ once: true }}
            />
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed font-light"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              viewport={{ once: true }}
            >
              I'm <span className="font-medium text-gray-800 dark:text-gray-100">Akshansh Sharma</span> — a developer, researcher, and storyteller. 
              I build scalable systems, contribute to open ecosystems like Solana, and write poetic fragments 
              that echo the human side of tech.
            </motion.p>
          </div>
        </motion.div>

        {/* Avatar Image with Running Border Light */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          viewport={{ once: true }}
        >
          <div className="relative inline-block">
            {/* Running Border Light Effect for Profile Picture */}
            <div className="relative p-[3px] rounded-full overflow-hidden">
              {/* Animated gradient border that rotates around with blur */}
              <motion.div
                className="absolute inset-0 rounded-full blur-sm"
                style={{
                  background: `conic-gradient(from 0deg, 
                    transparent 0deg, 
                    transparent 30deg, 
                    rgba(139, 92, 246, 0.6) 90deg, 
                    rgba(59, 130, 246, 1) 150deg, 
                    rgba(139, 92, 246, 0.6) 210deg, 
                    transparent 270deg, 
                    transparent 360deg)`
                }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* Inner container for the image - completely separate */}
              <div className="relative bg-white dark:bg-gray-900 rounded-full p-1 m-[3px]">
                <motion.img
                  src="/ChatGPT Image Jun 21, 2025 at 09_42_06 AM.png"
                  alt="Akshansh Sharma"
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Social Links - Enhanced visibility for dark mode */}
        <motion.div
          className="mt-8 flex justify-center space-x-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          viewport={{ once: true }}
        >
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/70 dark:border-gray-600/70 shadow-lg hover:shadow-xl transition-all duration-300 group ${social.color} ${social.bgColor}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.8 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, scale: 1.1 }}
            >
              <social.icon className="w-6 h-6 text-gray-700 dark:text-gray-200 transition-colors duration-300" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};