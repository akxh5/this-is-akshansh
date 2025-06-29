import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw } from 'lucide-react';

export const Poetry: React.FC = () => {
  const stoicQuotes = [
    "The best revenge is not to be like your enemy. - Marcus Aurelius",
    "You have power over your mind - not outside events. Realize this, and you will find strength. - Marcus Aurelius",
    "The happiness of your life depends upon the quality of your thoughts. - Marcus Aurelius",
    "We suffer more often in imagination than in reality. - Seneca",
    "It is not what happens to you, but how you react to it that matters. - Epictetus",
    "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion. - Camus",
    "Man is disturbed not by things, but by the views he takes of things. - Epictetus",
    "First say to yourself what you would be; and then do what you have to do. - Epictetus"
  ];

  const [currentQuote, setCurrentQuote] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * stoicQuotes.length);
    return stoicQuotes[randomIndex];
  };

  useEffect(() => {
    setCurrentQuote(getRandomQuote());
  }, []);

  const refreshQuote = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setCurrentQuote(getRandomQuote());
      setIsRefreshing(false);
    }, 300);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Elegant Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 to-blue-50/30 dark:from-purple-900/10 dark:to-blue-900/10"></div>
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(147, 51, 234, 0.05) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 80%, rgba(147, 51, 234, 0.05) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(147, 51, 234, 0.05) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center max-w-5xl relative z-10"
      >
        <motion.h2 
          className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Philosophy
        </motion.h2>

        {/* Elegant Quote Display */}
        <motion.div
          className="relative mb-12"
          key={currentQuote}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            {/* Sophisticated background card */}
            <motion.div
              className="relative p-12 rounded-3xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-gray-200/30 dark:border-gray-700/30 shadow-2xl"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Quote text with elegant typography */}
              <motion.p 
                className="text-2xl md:text-4xl font-light text-gray-700 dark:text-gray-300 leading-relaxed italic relative z-10"
                whileHover={{ 
                  textShadow: "0 0 20px rgba(147, 51, 234, 0.3)"
                }}
                transition={{ duration: 0.3 }}
              >
                "{currentQuote}"
              </motion.p>
              
              {/* Decorative elements */}
              <div className="absolute top-6 left-6 w-8 h-8 border-l-2 border-t-2 border-purple-300/50 dark:border-purple-600/50"></div>
              <div className="absolute bottom-6 right-6 w-8 h-8 border-r-2 border-b-2 border-blue-300/50 dark:border-blue-600/50"></div>
            </motion.div>
          </div>
        </motion.div>

        {/* Refined Refresh Button */}
        <motion.div className="flex justify-center items-center space-x-6">
          <motion.button
            onClick={refreshQuote}
            className="group relative p-4 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            disabled={isRefreshing}
          >
            {/* Subtle hover effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <motion.div
              animate={{ rotate: isRefreshing ? 360 : 0 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <RefreshCw className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300" />
            </motion.div>
          </motion.button>
          
          <motion.p 
            className="text-sm text-gray-500 dark:text-gray-400 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Refresh for new wisdom
          </motion.p>
        </motion.div>

        {/* Floating particles effect - more subtle */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-400/20 rounded-full"
              style={{
                left: `${25 + i * 20}%`,
                top: `${40 + (i % 2) * 30}%`
              }}
              animate={{
                y: [-8, 8, -8],
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3
              }}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};