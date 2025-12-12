import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

export const Achievements: React.FC = () => {
  const achievements: string[] = [
    "Finalist — EUREKA! IIT Bombay",
    "Research Paper @ ICoEIT-2025",
    "Speaker at Web3 events"
  ];

  return (
    <section className="min-h-screen py-20 px-6 flex items-center relative overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-25"
        animate={{
          background: [
            'radial-gradient(circle at 25% 35%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 65%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 75% 35%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 25% 65%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 25% 35%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 65%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)'
          ]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`achievement-particle-${i}`}
            className="absolute rounded-full opacity-25"
            style={{
              width: `${4 + Math.random() * 6}px`,
              height: `${4 + Math.random() * 6}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 3 === 0
                ? 'linear-gradient(45deg, rgba(59, 130, 246, 0.6), rgba(16, 185, 129, 0.6))'
                : i % 3 === 1
                ? 'linear-gradient(45deg, rgba(16, 185, 129, 0.6), rgba(147, 51, 234, 0.6))'
                : 'linear-gradient(45deg, rgba(147, 51, 234, 0.6), rgba(59, 130, 246, 0.6))'
            }}
            animate={{
              y: [-15, 15, -15],
              x: [-10, 10, -10],
              opacity: [0.25, 0.6, 0.25],
              scale: [1, 1.4, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 10 + Math.random() * 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto w-full relative z-10">
        <motion.h2
          className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Achievements
        </motion.h2>

        <div className="space-y-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              <motion.div
                className="relative bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500"
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    className="flex-shrink-0 p-3 bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-2xl"
                    whileHover={{
                      rotate: [0, -10, 10, 0],
                      scale: 1.1
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </motion.div>

                  <div className="flex-1">
                    <motion.p
                      className="text-xl md:text-2xl font-light text-gray-700 dark:text-gray-200 leading-relaxed"
                      whileHover={{
                        x: 5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      {achievement}
                    </motion.p>
                  </div>
                </div>

                <motion.div
                  className="absolute top-0 right-0 w-20 h-20 rounded-full opacity-20 blur-2xl"
                  style={{
                    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)'
                  }}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
