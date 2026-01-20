import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";
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
  tags?: string[];
}

export const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "syn8x.tech",
      description: "Next-generation blockchain infrastructure platform revolutionizing Web3 development with cutting-edge tools and seamless integration.",
      emoji: "✨",
      color: "from-purple-500 to-pink-500",
      liveUrl: "www.syn8x.tech",
      githubUrl: "https://github.com/akxh5/syn8x-terminal-web",
      status: "live"
    },
    {
      title: "DDDAS",
      description: "DDDAS (Decentralized Data Download Duplication Alert System) is a real-time system that detects and prevents duplicate file downloads across devices using hash-based verification and smart alerts.",
      emoji: "🌐",
      color: "from-blue-500 to-teal-500",
      liveUrl: "https://oper8a.vercel.app",
      githubUrl: "https://github.com/akxh5/oper8a",
      status: "live"
    },
    {
      title: "The Akshansh Experience",
      description: "The Akshansh Experience is a poetic fusion of technology, design, and identity — built to feel, not just function.",
      emoji: "🎭",
      color: "from-indigo-500 to-purple-500",
      liveUrl: "https://the-akshansh-experience.netlify.app",
      githubUrl: "https://github.com/akxh5/the-akshansh-experience",
      status: "live"
    },
    {
      title: "De-Post",
      description: "DePost is a decentralized publishing platform that lets anyone share content permanently and censorship-free on-chain.",
      emoji: "📝",
      color: "from-emerald-500 to-teal-500",
      liveUrl: "https://port-depost.netlify.app/",
      githubUrl: "https://port-depost.netlify.app/",
      status: "live"
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
    <section className="min-h-screen py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-4xl sm:text-5xl md:text-7xl font-semibold text-gray-900 dark:text-white mb-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          What I Built
        </motion.h2>

        <motion.p 
          className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 text-center mb-20 font-light"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Building the future, one commit at a time.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="relative h-full list-none">
              {/* Outer container handles the border and relative positioning */}
              <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
                
                {/* The Glow Primitive - Configured for hover proximity */}
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={3}
                />

                {/* INNER CONTENT: This is where your existing project data goes */}
                <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)]"
                  whileHover={{
                    scale: 1.03,
                    y: -5,
                    boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.2)"
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <div className="flex items-start justify-between">
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
                    <div className="flex space-x-2">
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
                  <div className="relative flex flex-1 flex-col justify-between gap-3">
                    
                    {/* RETAIN YOUR DATA HERE: Title, Description, Image, etc. */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-foreground">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {project.description}
                      </p>
                    </div>

                    {/* If you have tech tags or links, keep them here */}
                    <div className="flex gap-2">
                      {project.tags?.map((tag: string) => (
                        <span key={tag} className="text-xs bg-muted px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              </div>
            </div>
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
            <span>View All My Builds</span>
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
