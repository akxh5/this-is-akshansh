import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Snowflake } from 'lucide-react';

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
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(147, 51, 234, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(147, 51, 234, 0.12) 0%, transparent 50%), radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.12) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 80%, rgba(147, 51, 234, 0.08) 0%, transparent 50%), radial-gradient(circle at 60% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(147, 51, 234, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Floating Wisdom Particles */}
      {/* <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`wisdom-particle-${i}`}
            className="absolute rounded-full opacity-20"
            style={{
              width: `${4 + Math.random() * 8}px`,
              height: `${4 + Math.random() * 8}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 3 === 0 
                ? 'linear-gradient(45deg, rgba(147, 51, 234, 0.6), rgba(59, 130, 246, 0.6))'
                : i % 3 === 1
                ? 'linear-gradient(45deg, rgba(59, 130, 246, 0.6), rgba(16, 185, 129,.3))'
                : 'linear-gradient(45deg, rgba(16, 185, 129, 0.6), rgba(147, 51, 234, 0.6))'
            }}
            animate={{
              y: [-25, 25, -25],
              x: [-15, 15, -15],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.4, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 12 + Math.random() * 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 6
            }}
          />
        ))}
      </div> */}
      
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

        {/* Enhanced Quote Display with Morphing Background */}
        <motion.div
          className="relative mb-12"
          key={currentQuote}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            {/* Morphing Background Effect */}
            <motion.div
              className="absolute inset-0 rounded-3xl blur-2xl opacity-20"
              animate={{
                background: [
                  'linear-gradient(45deg, rgba(147, 51, 234, 0.3), rgba(59, 130, 246, 0.3))',
                  'linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(16, 185, 129, 0.3))',
                  'linear-gradient(45deg, rgba(16, 185, 129, 0.3), rgba(147, 51, 234, 0.3))',
                  'linear-gradient(45deg, rgba(147, 51, 234, 0.3), rgba(59, 130, 246, 0.3))'
                ],
                scale: [1, 1.05, 1],
                rotate: [0, 2, -2, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Main Quote Card */}
            <motion.div
              className="relative p-12 rounded-3xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-gray-200/30 dark:border-gray-700/30 shadow-2xl overflow-hidden"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* Quote Text with Enhanced Typography */}
              <motion.p 
                className="text-2xl md:text-4xl font-light text-gray-700 dark:text-gray-300 leading-relaxed italic relative z-10"
                whileHover={{ 
                  textShadow: "0 0 30px rgba(147, 51, 234, 0.4)"
                }}
                transition={{ duration: 0.3 }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                style={{
                  backgroundImage: 'linear-gradient(90deg, transparent, rgba(147, 51, 234, 0.1), transparent)',
                  backgroundSize: '200% 100%'
                }}
              >
                "{currentQuote}"
              </motion.p>
              
              {/* Enhanced Decorative Elements */}
              <motion.div 
                className="absolute top-6 left-6 w-8 h-8 border-l-2 border-t-2 border-purple-300/50 dark:border-purple-600/50"
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute bottom-6 right-6 w-8 h-8 border-r-2 border-b-2 border-blue-300/50 dark:border-blue-600/50"
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced Refresh Button with Snowflake */}
        <motion.div className="flex justify-center items-center space-x-6 relative">
          <motion.button
            onClick={refreshQuote}
            className="group relative p-4 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden z-10"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            disabled={isRefreshing}
          >
            {/* Button Glow Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0, 0.3, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.div
              animate={{ 
                rotate: isRefreshing ? 360 : 0
              }}
              transition={{ 
                duration: 0.5,
                repeat: isRefreshing ? Infinity : 0,
                ease: "linear"
              }}
              className="relative z-10"
            >
              <Snowflake className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-blue-400 dark:group-hover:text-blue-300 transition-colors duration-300" />
            </motion.div>
          </motion.button>
          
          <motion.p 
            className="text-sm text-gray-500 dark:text-gray-400 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            whileHover={{
              color: '#8b5cf6',
              transition: { duration: 0.2 }
            }}
          >
            Refresh for new wisdom
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};