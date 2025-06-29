import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="min-h-screen py-20 px-6 flex items-center relative overflow-hidden">
      {/* Animated Background with Gradient Shifts */}
      <motion.div
        className="absolute inset-0 opacity-25"
        animate={{
          background: [
            'radial-gradient(circle at 25% 25%, rgba(147, 51, 234, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 75% 25%, rgba(147, 51, 234, 0.15) 0%, transparent 50%), radial-gradient(circle at 25% 75%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 25% 25%, rgba(147, 51, 234, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)'
          ]
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating Contact Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`contact-particle-${i}`}
            className="absolute w-2 h-2 rounded-full opacity-30"
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
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.5, 1]
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
          className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Contact
        </motion.h2>

        <motion.p 
          className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Let's build something poetic.
        </motion.p>

        {/* Enhanced Contact Form */}
        <motion.div
          className="max-w-2xl mx-auto relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Form Glow Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-3xl blur-xl opacity-0 hover:opacity-100 transition-opacity duration-500"
            animate={{
              scale: [1, 1.02, 1],
              opacity: [0, 0.3, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <motion.input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                whileFocus={{
                  scale: 1.02,
                  boxShadow: "0 0 20px rgba(147, 51, 234, 0.3)"
                }}
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <motion.input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                whileFocus={{
                  scale: 1.02,
                  boxShadow: "0 0 20px rgba(147, 51, 234, 0.3)"
                }}
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <motion.textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 resize-none"
                whileFocus={{
                  scale: 1.02,
                  boxShadow: "0 0 20px rgba(147, 51, 234, 0.3)"
                }}
              />
            </motion.div>

            <motion.button
              type="submit"
              className="group relative w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Button Shimmer Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />

              {/* Pulsing Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-20"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0, 0.2, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <span className="relative z-10">Send Message</span>
              <motion.div
                className="relative z-10"
                whileHover={{ 
                  x: 4,
                  rotate: 15
                }}
                transition={{ duration: 0.2 }}
              >
                <Send className="w-4 h-4" />
              </motion.div>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};