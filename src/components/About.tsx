import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export const About: React.FC = () => {
  const socials = [
    { 
      icon: () => (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path 
            d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
            className="text-gray-700 dark:text-gray-200 group-hover:text-black dark:group-hover:text-white transition-colors duration-200"
          />
        </svg>
      ), 
      href: 'https://x.com/akxh_5', 
      color: 'hover:text-black dark:hover:text-white',
      bgColor: 'hover:bg-gray-50 dark:hover:bg-gray-700/50',
      glowColor: 'rgba(0, 0, 0, 0.3)',
      name: 'X (Twitter)'
    },
    { 
      icon: Github, 
      href: 'https://github.com/akxh5', 
      color: 'hover:text-gray-800 dark:hover:text-white',
      bgColor: 'hover:bg-gray-50 dark:hover:bg-gray-700/50',
      glowColor: 'rgba(55, 65, 81, 0.4)',
      name: 'GitHub'
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/akshansh-sharma-256604332/', 
      color: 'hover:text-blue-600',
      bgColor: 'hover:bg-blue-50 dark:hover:bg-blue-900/30',
      glowColor: 'rgba(37, 99, 235, 0.4)',
      name: 'LinkedIn'
    },
    { 
      icon: () => (
        <svg className="w-6 h-6" viewBox="0 0 24 24">
          <path 
            d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75S24 8.83 24 12z"
            fill="currentColor"
            className="text-gray-700 dark:text-gray-200 group-hover:text-green-600 transition-colors duration-200"
          />
        </svg>
      ), 
      href: 'https://medium.com/@aksh11ansh', 
      color: 'hover:text-green-600',
      bgColor: 'hover:bg-green-50 dark:hover:bg-green-900/30',
      glowColor: 'rgba(34, 197, 94, 0.4)',
      name: 'Medium'
    },
    { 
      icon: Mail, 
      href: 'mailto:aksh11ansh@gmail.com', 
      color: 'hover:text-red-500',
      bgColor: 'hover:bg-red-50 dark:hover:bg-red-900/30',
      glowColor: 'rgba(239, 68, 68, 0.4)',
      name: 'Email'
    }
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
        className="text-center max-w-5xl"
      >
        <motion.h2 
          className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-16 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          About
        </motion.h2>
        
        {/* Primary Quote - Optimized for Speed */}
        <motion.div
          className="relative mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-3xl p-12 shadow-2xl">
            <motion.p 
              className="text-3xl md:text-4xl font-light text-gray-800 dark:text-gray-200 leading-relaxed italic"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
            >
              "I code the future, but I never forget to feel."
            </motion.p>
          </div>
        </motion.div>

        {/* Supporting Bio Text - Faster Animation */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            {/* Animated underline effect - Faster */}
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "60px" }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            />
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed font-light"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              viewport={{ once: true }}
            >
              I'm <span className="font-medium text-gray-800 dark:text-gray-100">Akshansh Sharma</span> — a developer, researcher, and storyteller. 
              I build scalable systems, contribute to open ecosystems like Solana, and write poetic fragments 
              that echo the human side of tech.
            </motion.p>
          </div>
        </motion.div>

        {/* Avatar Image with Running Border Light - Optimized */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="relative inline-block">
            {/* Running Border Light Effect - Smoother Performance */}
            <div className="relative p-[3px] rounded-full overflow-hidden">
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

        {/* Social Links - Enhanced Hover Effects with Fast Animations */}
        <motion.div
          className="mt-8 flex justify-center space-x-4"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          viewport={{ once: true }}
        >
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative p-4 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/70 dark:border-gray-600/70 shadow-lg hover:shadow-2xl transition-all duration-200 ${social.color} ${social.bgColor} overflow-hidden`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.9 + index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -6, 
                scale: 1.15,
                transition: { duration: 0.15, ease: "easeOut" }
              }}
              whileTap={{ 
                scale: 0.95,
                transition: { duration: 0.1 }
              }}
              title={social.name}
              style={{
                filter: 'drop-shadow(0 0 0px transparent)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = `drop-shadow(0 0 20px ${social.glowColor})`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 0px transparent)';
              }}
            >
              {/* Enhanced Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 blur-lg"
                style={{
                  background: `radial-gradient(circle, ${social.glowColor} 0%, transparent 70%)`
                }}
                initial={{ scale: 0.5 }}
                whileHover={{ 
                  scale: 2,
                  transition: { duration: 0.2 }
                }}
              />
              
              {/* Ripple Effect on Hover */}
              <motion.div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30"
                style={{
                  background: `radial-gradient(circle, ${social.glowColor} 0%, transparent 70%)`
                }}
                initial={{ scale: 0 }}
                whileHover={{ 
                  scale: 1.8,
                  transition: { duration: 0.3 }
                }}
              />
              
              {/* Icon with Enhanced Animation */}
              <motion.div
                className="relative z-10"
                whileHover={{ 
                  rotate: social.name === 'GitHub' ? 180 : 
                           social.name === 'Medium' ? [0, -15, 15, 0] :
                           social.name === 'Email' ? [0, 20, -20, 0] :
                           social.name === 'LinkedIn' ? [0, 10, -10, 0] :
                           [0, 15, -15, 0],
                  transition: { duration: 0.3, ease: "easeInOut" }
                }}
              >
                {typeof social.icon === 'function' ? (
                  <social.icon />
                ) : (
                  <social.icon className="w-6 h-6 text-gray-700 dark:text-gray-200 transition-colors duration-200" />
                )}
              </motion.div>

              {/* Outer Glow Ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 opacity-0 group-hover:opacity-60"
                style={{
                  borderColor: social.glowColor.replace('0.4', '0.6')
                }}
                initial={{ scale: 1 }}
                whileHover={{ 
                  scale: 1.3,
                  transition: { duration: 0.2 }
                }}
              />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
