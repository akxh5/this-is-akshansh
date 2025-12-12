import React from 'react';
import { motion } from 'framer-motion';

interface ExperienceItem {
  role: string;
  org: string;
}

export const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    { role: "Contributor", org: "Superteam India" },
    { role: "Research", org: "Solana Turbin3" },
    { role: "Developer", org: "syn8x" },
    { role: "Founder", org: "Oper8a" },
  ];

  return (
    <section className="min-h-screen py-20 px-6 flex items-center relative overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-25"
        animate={{
          background: [
            'radial-gradient(circle at 30% 40%, rgba(147, 51, 234, 0.08) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)',
            'radial-gradient(circle at 70% 40%, rgba(147, 51, 234, 0.12) 0%, transparent 50%), radial-gradient(circle at 30% 60%, rgba(59, 130, 246, 0.12) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.08) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)',
            'radial-gradient(circle at 30% 40%, rgba(147, 51, 234, 0.08) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)'
          ]
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
      />

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`exp-particle-${i}`}
            className="absolute w-2 h-2 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 2 === 0
                ? 'linear-gradient(45deg, rgba(147, 51, 234, 0.6), rgba(59, 130, 246, 0.6))'
                : 'linear-gradient(45deg, rgba(59, 130, 246, 0.6), rgba(147, 51, 234, 0.6))'
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.3, 1]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
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
          Experience
        </motion.h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.org}-${index}`}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              <motion.div
                className="relative bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
                whileHover={{ x: 10, scale: 1.02 }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <motion.h3
                      className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2"
                      whileHover={{
                        textShadow: "0 0 20px rgba(147, 51, 234, 0.3)"
                      }}
                    >
                      {exp.role}
                    </motion.h3>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 font-light">
                      {exp.org}
                    </p>
                  </div>

                  <motion.div
                    className="hidden md:block w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>

                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
                  viewport={{ once: true }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
