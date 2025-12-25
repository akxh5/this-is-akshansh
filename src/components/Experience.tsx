import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ArrowRight } from 'lucide-react';

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50, y: 20 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
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
            'radial-gradient(circle at 20% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(147, 51, 234, 0.15) 0%, transparent 50%), radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)'
          ]
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
      />

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`exp-particle-${i}`}
            className="absolute w-1.5 h-1.5 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 2 === 0
                ? 'linear-gradient(45deg, rgba(147, 51, 234, 0.6), rgba(59, 130, 246, 0.6))'
                : 'linear-gradient(45deg, rgba(59, 130, 246, 0.6), rgba(147, 51, 234, 0.6))'
            }}
            animate={{
              y: [-25, 25, -25],
              x: [-15, 15, -15],
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5
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
          Experience
        </motion.h2>

        <motion.p
          className="text-center text-gray-600 dark:text-gray-400 mb-16 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Roles that shaped my journey
        </motion.p>

        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.org}-${index}`}
              variants={itemVariants}
              className="group relative"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-purple-600/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10"
                whileHover={{ scale: 1.05 }}
              />

              <motion.div
                className="relative bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-800/90 dark:to-gray-900/90 backdrop-blur-md border border-gradient-to-r from-gray-200/50 to-gray-100/50 dark:from-gray-700/50 dark:to-gray-600/50 rounded-2xl p-8 overflow-hidden group"
                whileHover={{
                  scale: 1.02,
                  y: -8,
                  boxShadow: "0 20px 60px rgba(147, 51, 234, 0.15)"
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-30"
                  style={{
                    background: "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(147, 51, 234, 0.2), transparent 80%)"
                  }}
                  transition={{ duration: 0.3 }}
                />

                <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="flex-1 flex items-start space-x-4">
                    <motion.div
                      className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center"
                      whileHover={{
                        scale: 1.2,
                        rotate: [0, -10, 10, 0]
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      <Briefcase className="w-7 h-7 text-purple-600 dark:text-purple-400" />
                    </motion.div>

                    <div className="flex-1">
                      <motion.h3
                        className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1"
                        whileHover={{
                          color: "rgba(147, 51, 234, 1)",
                          transition: { duration: 0.2 }
                        }}
                      >
                        {exp.role}
                      </motion.h3>
                      <motion.p
                        className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-light"
                        whileHover={{
                          color: "rgba(147, 51, 234, 0.8)",
                          transition: { duration: 0.2 }
                        }}
                      >
                        {exp.org}
                      </motion.p>
                    </div>
                  </div>

                  <motion.div
                    className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-purple-600/10 to-blue-600/10"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 5, 0]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    whileHover={{
                      scale: 1.3,
                      rotate: 90
                    }}
                  >
                    <ArrowRight className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </motion.div>
                </div>

                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
                  viewport={{ once: true }}
                />

                <motion.div
                  className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-0 blur-3xl group-hover:opacity-20"
                  style={{
                    background: 'radial-gradient(circle, rgba(147, 51, 234, 0.4) 0%, transparent 70%)'
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
