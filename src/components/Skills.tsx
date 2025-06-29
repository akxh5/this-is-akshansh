import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

interface Skill {
  name: string;
  icon: string;
  category: string;
}

export const Skills: React.FC = () => {
  const skills: Skill[] = [
    // Frontend
    { name: "React", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg", category: "frontend" },
    { name: "TypeScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg", category: "frontend" },
    { name: "JavaScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg", category: "frontend" },
    { name: "TailwindCSS", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg", category: "frontend" },
    { name: "Vue.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg", category: "frontend" },
    
    // Backend
    { name: "Node.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg", category: "backend" },
    { name: "Python", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", category: "backend" },
    { name: "Java", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg", category: "backend" },
    
    // Blockchain
    { name: "Solidity", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/solidity/solidity-original.svg", category: "blockchain" },
    { name: "Ethereum", icon: "https://cryptologos.cc/logos/ethereum-eth-logo.svg", category: "blockchain" },
    
    // Tools
    { name: "Git", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg", category: "tools" },
    { name: "GitHub", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg", category: "tools" },
    { name: "WordPress", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/wordpress/wordpress-original.svg", category: "tools" },
    { name: "Docker", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg", category: "tools" },
    { name: "Figma", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg", category: "tools" },
    
    // Database
    { name: "MongoDB", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg", category: "database" },
    { name: "PostgreSQL", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg", category: "database" },
  ];

  return (
    <section className="min-h-screen py-20 px-6 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            What I Work With
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-light"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Tools, libraries & frameworks that help me build & breathe.
          </motion.p>
        </motion.div>

        {/* Skills Grid - Clean Icons Only */}
        <motion.div 
          className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-12 items-center justify-items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.03,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.2, y: -8 }}
              className="group cursor-pointer"
              title={skill.name}
            >
              <motion.div 
                className="w-16 h-16 flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={skill.icon} 
                  alt={skill.name}
                  className="w-12 h-12 object-contain filter group-hover:drop-shadow-2xl transition-all duration-150 opacity-70 group-hover:opacity-100"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      const fallbackEmojis: { [key: string]: string } = {
                        'React': '⚛️',
                        'TypeScript': '📘',
                        'JavaScript': '🟨',
                        'TailwindCSS': '🎨',
                        'Vue.js': '💚',
                        'Node.js': '🟢',
                        'Python': '🐍',
                        'Java': '☕',
                        'Solidity': '💎',
                        'Ethereum': '⟠',
                        'Git': '📚',
                        'GitHub': '🐙',
                        'WordPress': '📝',
                        'Docker': '🐳',
                        'Figma': '🎨',
                        'MongoDB': '🍃',
                        'PostgreSQL': '🐘'
                      };
                      const emoji = fallbackEmojis[skill.name] || '⚡';
                      parent.innerHTML = `<div class="text-3xl opacity-70 group-hover:opacity-100">${emoji}</div>`;
                    }
                  }}
                />
              </motion.div>
            </motion.div>
          ))}

          {/* More Coming Up Indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.4, 
              delay: skills.length * 0.03,
              ease: "easeOut"
            }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.2, y: -8 }}
            className="group cursor-pointer"
            title="More coming up..."
          >
            <motion.div 
              className="w-16 h-16 flex items-center justify-center"
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-12 h-12 rounded-full border-2 border-dashed border-gray-400 dark:border-gray-500 flex items-center justify-center group-hover:border-purple-500 transition-colors duration-150">
                <Plus className="w-6 h-6 text-gray-400 dark:text-gray-500 group-hover:text-purple-500 transition-colors duration-150" />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Subtle Footer Text */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-gray-400 dark:text-gray-500 font-light">
            Always learning, always evolving
          </p>
        </motion.div>
      </div>
    </section>
  );
};