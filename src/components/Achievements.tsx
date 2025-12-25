import React from 'react';
import { motion } from 'framer-motion';
import { Award, Sparkles, Trophy } from 'lucide-react';

export const Achievements: React.FC = () => {
  const achievements = [
    { title: "Finalist — EUREKA! IIT Bombay", icon: Trophy, delay: 0 },
    { title: "Research Paper @ ICoEIT-2025", icon: Sparkles, delay: 0.15 },
    { title: "Speaker at Web3 events", icon: Award, delay: 0.3 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen py-20 px-6 flex items-center relative overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            'radial-gradient(circle at 25% 35%, rgba(59, 130, 246, 0.12) 0%, transparent 50%), radial-gradient(circle at 75% 65%, rgba(147, 51, 234, 0.12) 0%, transparent 50%)',
            'radial-gradient(circle at 75% 35%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 25% 65%, rgba(147, 51, 234, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.12) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.12) 0%, transparent 50%)',
            'radial-gradient(circle at 25% 35%, rgba(59, 130, 246, 0.12) 0%, transparent 50%), radial-gradient(circle at 75% 65%, rgba(147, 51, 234, 0.12) 0%, transparent 50%)'
          ]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={`achievement-particle-${i}`}
            className="absolute rounded-full opacity-20"
            style={{
              width: `${3 + Math.random() * 7}px`,
              height: `${3 + Math.random() * 7}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 3 === 0
                ? 'linear-gradient(45deg, rgba(59, 130, 246, 0.6), rgba(147, 51, 234, 0.6))'
                : i % 3 === 1
                ? 'linear-gradient(45deg, rgba(147, 51, 234, 0.6), rgba(59, 130, 246, 0.6))'
                : 'linear-gradient(45deg, rgba(59, 130, 246, 0.5), rgba(147, 51, 234, 0.5))'
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-15, 15, -15],
              opacity: [0.15, 0.5, 0.15],
              scale: [1, 1.5, 1],
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
      </div>

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <motion.h2
          className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white mb-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Achievements
        </motion.h2>

        <motion.p
          className="text-center text-gray-600 dark:text-gray-400 mb-16 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Milestones that mark the journey
        </motion.p>

        <motion.div
          className="grid md:grid-cols-1 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-blue-600/30 to-purple-600/30 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10"
                  whileHover={{ scale: 1.08 }}
                />

                <motion.div
                  className="relative h-full bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-800/90 dark:to-gray-900/90 backdrop-blur-md border border-gradient-to-r from-gray-200/50 to-gray-100/50 dark:from-gray-700/50 dark:to-gray-600/50 rounded-2xl p-8 overflow-hidden flex flex-col items-center text-center"
                  whileHover={{
                    scale: 1.05,
                    y: -10,
                    boxShadow: "0 25px 50px rgba(147, 51, 234, 0.2)"
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-40"
                    style={{
                      background: "radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.2), transparent 80%)"
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  <motion.div
                    className="mb-6 p-4 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl relative z-10"
                    whileHover={{
                      scale: 1.15,
                      rotate: [0, -10, 10, 0]
                    }}
                    animate={{
                      y: [0, -5, 0]
                    }}
                    transition={{
                      hover: { duration: 0.4 },
                      y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                    }}
                  >
                    <IconComponent className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                  </motion.div>

                  <motion.h3
                    className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-3 relative z-10 leading-relaxed"
                    whileHover={{
                      color: "rgba(147, 51, 234, 1)",
                      transition: { duration: 0.2 }
                    }}
                  >
                    {achievement.title}
                  </motion.h3>

                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 w-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: achievement.delay + 0.3 }}
                    viewport={{ once: true }}
                  />

                  <motion.div
                    className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-0 blur-3xl group-hover:opacity-30"
                    style={{
                      background: 'radial-gradient(circle, rgba(147, 51, 234, 0.4) 0%, transparent 70%)'
                    }}
                    animate={{
                      scale: [1, 1.3, 1],
                      y: [0, -10, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />

                  <motion.div
                    className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full opacity-0 blur-2xl group-hover:opacity-20"
                    style={{
                      background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)'
                    }}
                    animate={{
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
