import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Snowflake } from 'lucide-react';

export const Poetry: React.FC = () => {
  const stoicQuotes = [
    "Throughout Heaven and Earth, I Alone Am The Honored One",
    "The best revenge is not to be like your enemy. - Marcus Aurelius",
    "You have power over your mind - not outside events. Realize this, and you will find strength. - Marcus Aurelius",
    "The happiness of your life depends upon the quality of your thoughts. - Marcus Aurelius",
    "We suffer more often in imagination than in reality. - Seneca",
    "It is not what happens to you, but how you react to it that matters. - Epictetus",
    "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion. - Camus",
    "Man is disturbed not by things, but by the views he takes of things. - Epictetus",
    "First say to yourself what you would be; and then do what you have to do. - Epictetus",
    "Waste no more time arguing about what a good man should be. Be one. - Marcus Aurelius",
    "The obstacle is the way. - Ryan Holiday",
    "If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment. - Marcus Aurelius",
    "He who is brave is free. - Seneca",
    "A gem cannot be polished without friction, nor a man perfected without trials. - Seneca",
    "I am not a product of my circumstances. I am a product of my decisions. - Stephen Covey",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "If your actions inspire others to dream more, learn more, do more and become more, you are a leader. - John Quincy Adams",
    "The pessimist complains about the wind; the optimist expects it to change; the leader adjusts the sails. - John Maxwell"
  ];

  const [currentQuote, setCurrentQuote] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const getRandomQuote = () => {
    // Pick from the array starting from the second element
    const quotesForRandom = stoicQuotes.slice(1);
    const randomIndex = Math.floor(Math.random() * quotesForRandom.length);
    return quotesForRandom[randomIndex];
  };

  useEffect(() => {
    // Always start with the first quote
    setCurrentQuote(stoicQuotes[0]);
  }, []);

  const refreshQuote = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setCurrentQuote(getRandomQuote());
      setIsRefreshing(false);
    }, 300);
  };

  return (
    <section className="py-20 px-4 sm:px-6 relative overflow-hidden">
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
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center max-w-5xl mx-auto relative z-10"
      >
        <motion.h2 
          className="text-4xl sm:text-5xl md:text-7xl font-semibold text-gray-900 dark:text-white mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Philosophy
        </motion.h2>

        <motion.div
          className="relative mb-12"
          key={currentQuote}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="relative p-8 md:p-12 rounded-2xl bg-white/90 dark:bg-gray-800/60 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 shadow-xl"
            whileHover={{
              scale: 1.03,
              y: -5,
              boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.2)"
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <p className="text-xl sm:text-2xl md:text-3xl font-light text-gray-700 dark:text-gray-200 leading-relaxed italic">
              "{
                currentQuote
              }"
            </p>
          </motion.div>
        </motion.div>

        {/* Enhanced Refresh Button with Snowflake */}
        <motion.div className="flex justify-center items-center space-x-4 sm:space-x-6 relative">
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