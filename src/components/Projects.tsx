import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  emoji: string;
  color: string;
  liveUrl?: string;
  githubUrl?: string;
  status: 'live' | 'development' | 'coming-soon';
}

export const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "syn8x.tech",
      description: "Next-generation blockchain infrastructure platform revolutionizing Web3 development with cutting-edge tools and seamless integration.",
      emoji: "✨",
      color: "from-purple-500 to-pink-500",
      liveUrl: "https://syn8x.tech",
      githubUrl: "https://github.com/akxh5/syn8x",
      status: "live"
    },
    {
      title: "DD-DAS Portal",
      description: "Distributed Data Architecture System providing scalable, secure, and efficient data management solutions for modern applications.",
      emoji: "🌐",
      color: "from-blue-500 to-teal-500",
      liveUrl: "https://dd-das.vercel.app",
      githubUrl: "https://github.com/akxh5/dd-das",
      status: "live"
    },
    {
      title: "The Akshansh Experience",
      description: "The Akshansh Experience is a poetic fusion of technology, design, and identity — built to feel, not just function.",
      emoji: "🎭",
      color: "from-indigo-500 to-purple-500",
      liveUrl: "https://akshansh.dev",
      githubUrl: "https://github.com/akxh5/akshansh-experience",
      status: "live"
    },
    {
      title: "De-Post",
      description: "DePost is a decentralized publishing platform that lets anyone share content permanently and censorship-free on-chain.",
      emoji: "📝",
      color: "from-emerald-500 to-teal-500",
      githubUrl: "https://github.com/akxh5/de-post",
      status: "coming-soon"
    }
  ];

  const getStatusBadge = (status: string) => {
    const badges = {
      live: { text: "Live", color: "bg-green-500/20 text-green-600 dark:text-green-400" },
      development: { text: "In Dev", color: "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400" },
      "coming-soon": { text: "Soon", color: "bg-purple-500/20 text-purple-600 dark:text-purple-400" }
    };
    return badges[status as keyof typeof badges];
  };

  return (
    <section className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <motion.p 
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 text-center mb-20 font-light"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Building the future, one commit at a time.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              
              <motion.div
                className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-3xl p-8 h-full hover:shadow-2xl transition-all duration-500"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Header with Emoji and Status */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <motion.div
                      className="text-4xl"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.emoji}
                    </motion.div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBadge(project.status).color}`}>
                      {getStatusBadge(project.status).text}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                        whileHover={{ scale: 1.1, rotate: 45 }}
                        whileTap={{ scale: 0.95 }}
                        title="View Live"
                      >
                        <ExternalLink className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        title="View Code"
                      >
                        <Github className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                      </motion.a>
                    )}
                  </div>
                </div>
                
                {/* Project Title */}
                <motion.h3 
                  className="text-2xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {project.title}
                </motion.h3>
                
                {/* Project Description */}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Interactive Bottom Border */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${project.color} rounded-b-3xl`}
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                />

                {/* Hover Overlay for Coming Soon */}
                {project.status === 'coming-soon' && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-3xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-center">
                      <motion.div
                        className="text-3xl mb-2"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        🔮
                      </motion.div>
                      <p className="text-sm font-medium text-purple-600 dark:text-purple-400">
                        Coming Soon
                      </p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://github.com/akxh5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            <span>View All Projects</span>
            <motion.div
              className="text-lg"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};