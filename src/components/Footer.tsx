import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

// Re-using the socials data structure for consistency
const socials = [
  { 
    icon: () => (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ), 
    href: 'https://x.com/akxh_5',
    name: 'X (Twitter)'
  },
  { 
    icon: Github, 
    href: 'https://github.com/akxh5',
    name: 'GitHub'
  },
  { 
    icon: Linkedin, 
    href: 'https://www.linkedin.com/in/akshansh-sharma-256604332/',
    name: 'LinkedIn'
  },
  { 
    icon: Mail, 
    href: 'mailto:aksh11ansh@gmail.com',
    name: 'Email'
  }
];

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <motion.footer 
      className="relative px-6 pt-5 pb-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-1/3 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
      
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
        <div className="flex justify-center space-x-6">
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300"
              whileHover={{ y: -3, scale: 1.1 }}
              title={social.name}
            >
              {typeof social.icon === 'function' ? (
                <social.icon />
              ) : (
                <social.icon className="w-5 h-5" />
              )}
            </motion.a>
          ))}
        </div>

        <p className="text-sm text-gray-400 dark:text-gray-500">
          © {year} Akshansh Sharma. All Rights Reserved.
        </p>

        <a href="#" className="absolute bottom-8 right-8 p-3 rounded-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg hover:scale-110 transition-transform duration-300">
          <ArrowUp className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </a>
      </div>
    </motion.footer>
  );
};
