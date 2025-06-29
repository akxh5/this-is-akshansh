import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-center max-w-4xl"
      >
        <motion.h1 
          className="text-6xl md:text-8xl font-bold text-gray-900 dark:text-white mb-8 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Akshansh Sharma
          </span>
          .
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Superteam India Member · Research @Solana Turbin3 · Building @syn8x.tech
        </motion.p>

        <motion.button
          onClick={scrollToAbout}
          className="group px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full text-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Enter the Akshverse
        </motion.button>
      </motion.div>

      <motion.div
        className="absolute bottom-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};