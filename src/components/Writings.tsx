import React from 'react';
import { motion } from 'framer-motion';
import { writings, Writing } from '../data/writings';

const platformStyles = {
  Medium: 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300',
  Substack: 'bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-300',
  Notion: 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300',
};

const PlatformBadge: React.FC<{ platform: Writing['platform'] }> = ({ platform }) => (
  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${platformStyles[platform]}`}>
    {platform}
  </span>
);

const WritingCard: React.FC<{ writing: Writing }> = ({ writing }) => {
  return (
    <motion.a
      href={writing.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.05,
        y: -5,
        boxShadow: '0px 15px 25px -10px rgba(0,0,0,0.2)',
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
    >
      <motion.div
        className="absolute inset-0 rounded-lg blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-300"
        style={{
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.4) 0%, rgba(59, 130, 246, 0.4) 100%)'
        }}
      />
      <div className="relative bg-white dark:bg-gray-800 rounded-lg h-full overflow-hidden">
        <div className="overflow-hidden">
          <img
            src={writing.cover}
            alt={writing.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4 h-full">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2 leading-snug">
            {writing.title}
          </h3>
          {writing.excerpt && (
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              {writing.excerpt}
            </p>
          )}
          <div className="flex justify-between items-center mt-4">
            <div className="text-sm font-semibold text-purple-600 dark:text-purple-400 flex items-center">
              <span className="relative">
                Read more
                <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-purple-600 dark:bg-purple-400 group-hover:w-full transition-all duration-200"></span>
              </span>
              <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">→</span>
            </div>
            <PlatformBadge platform={writing.platform} />
          </div>
        </div>
      </div>
    </motion.a>
  );
};

export const Writings: React.FC = () => {
  return (
    <section id="writings" className="pt-20 pb-5 px-4 sm:px-6" aria-labelledby="what-i-write-heading">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          id="what-i-write-heading"
          className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          What I Write
        </motion.h2>
        <motion.p 
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 text-center mb-20 font-light"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Signaling thinking depth and shipping ideas, not just code.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {writings.map((writing) => (
            <WritingCard key={writing.id} writing={writing} />
          ))}
        </div>
      </div>
    </section>
  );
};