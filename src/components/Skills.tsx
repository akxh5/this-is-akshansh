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
    <section className="min-h-screen py-20 px-6 flex items-center relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 30% 40%, rgba(147, 51, 234, 0.05) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)',
            'radial-gradient(circle at 70% 40%, rgba(147, 51, 234, 0.08) 0%, transparent 50%), radial-gradient(circle at 30% 60%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 30%, rgba(147, 51, 234, 0.05) 0%, transparent 50%), radial-gradient(circle at 50% 70%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)',
            'radial-gradient(circle at 30% 40%, rgba(147, 51, 234, 0.05) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)'
          ]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating Tech Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`tech-particle-${i}`}
            className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-30"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`
            }}
            animate={{
              y: [-15, 15, -15],
              x: [-10, 10, -10],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.3, 1]
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 4
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
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

        {/* Skills Grid with Enhanced Animations */}
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
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.05,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.3, 
                y: -12,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              className="group cursor-pointer relative"
              title={skill.name}
            >
              {/* Glow Effect on Hover */}
              <motion.div
                className="absolute inset-0 rounded-full blur-lg opacity-0 group-hover:opacity-60"
                style={{
                  background: 'radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, rgba(59, 130, 246, 0.3) 100%)'
                }}
                initial={{ scale: 0.5 }}
                whileHover={{ scale: 2 }}
                transition={{ duration: 0.3 }}
              />

              <motion.div 
                className="w-16 h-16 flex items-center justify-center relative z-10"
                whileHover={{ 
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.4 }
                }}
              >
                <img 
                  src={skill.icon} 
                  alt={skill.name}
                  className="w-12 h-12 object-contain filter group-hover:drop-shadow-2xl transition-all duration-200 opacity-70 group-hover:opacity-100"
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

              {/* Skill Name Tooltip */}
              <motion.div
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none"
                initial={{ y: 10 }}
                whileHover={{ y: 0 }}
              >
                {skill.name}
              </motion.div>
            </motion.div>
          ))}

          {/* Enhanced More Coming Up Indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: skills.length * 0.05,
              ease: "easeOut"
            }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.3, 
              y: -12,
              transition: { duration: 0.2, ease: "easeOut" }
            }}
            className="group cursor-pointer relative"
            title="More coming up..."
          >
            {/* Animated Glow */}
            <motion.div
              className="absolute inset-0 rounded-full blur-lg opacity-0 group-hover:opacity-40"
              style={{
                background: 'radial-gradient(circle, rgba(147, 51, 234, 0.4) 0%, rgba(59, 130, 246, 0.4) 100%)'
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0, 0.2, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <motion.div 
              className="w-16 h-16 flex items-center justify-center relative z-10"
              whileHover={{ 
                rotate: 180,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="w-12 h-12 rounded-full border-2 border-dashed border-gray-400 dark:border-gray-500 flex items-center justify-center group-hover:border-purple-500 transition-colors duration-200"
                animate={{
                  rotate: [0, 360],
                  borderColor: [
                    'rgba(156, 163, 175, 1)',
                    'rgba(147, 51, 234, 0.5)',
                    'rgba(59, 130, 246, 0.5)',
                    'rgba(156, 163, 175, 1)'
                  ]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <Plus className="w-6 h-6 text-gray-400 dark:text-gray-500 group-hover:text-purple-500 transition-colors duration-200" />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced Footer Text with Floating Animation */}
        <motion.div
          className="mt-16 text-center relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-sm text-gray-400 dark:text-gray-500 font-light"
            animate={{
              y: [-2, 2, -2]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Always learning, always evolving
          </motion.p>
          
          {/* Subtle Sparkles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`sparkle-${i}`}
                className="absolute w-1 h-1 bg-purple-400 rounded-full"
                style={{
                  left: `${30 + i * 20}%`,
                  top: '50%'
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.7,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};