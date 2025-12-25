import React from 'react';
import { motion } from 'framer-motion';

interface Tech {
  name: string;
  icon: string;
  color: string;
}

export const TechStack: React.FC = () => {
  const techs: Tech[] = [
    { name: "React", icon: "⚛️", color: "hover:text-blue-500" },
    { name: "Tailwind", icon: "🎨", color: "hover:text-cyan-500" },
    { name: "Solidity", icon: "💎", color: "hover:text-gray-600" },
    { name: "Chainlink", icon: "🔗", color: "hover:text-blue-600" },
    { name: "Wagmi", icon: "🎯", color: "hover:text-purple-500" },
    { name: "Vercel", icon: "▲", color: "hover:text-black dark:hover:text-white" },
    { name: "TypeScript", icon: "📘", color: "hover:text-blue-600" },
    { name: "Node.js", icon: "🟢", color: "hover:text-green-500" },
  ];

  return (
    <section className="min-h-screen py-20 px-6 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2 
          className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Tech Stack
        </motion.h2>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {techs.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, y: -10 }}
              className="group"
            >
              <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-500">
                <motion.div 
                  className="text-4xl mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {tech.icon}
                </motion.div>
                <h3 className={`text-lg font-semibold text-gray-600 dark:text-gray-300 transition-colors duration-300 ${tech.color}`}>
                  {tech.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};