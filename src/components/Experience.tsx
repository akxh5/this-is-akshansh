import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const images = [
  "1738935069111.jpeg", "1738935077783.jpeg", "1739198701641.jpeg",
  "1739862149994.jpeg", "1740457097145.jpeg", "1741276654551.jpeg",
  "1743754660260.jpeg", "1745910714055.jpeg", "1745910715371.jpeg",
  "1745910739111.jpeg", "1751336281469.jpeg", "1762071634893.jpeg",
  "1762071635116.jpeg", "1762141702299.jpeg", "1766479142129.jpeg",
  "1766479149408.gif"
];

const experienceImages = images.map(img => `/carousel-images/${img}`);

const CarouselContent = () => (
  <div className="flex flex-shrink-0" style={{ perspective: '1000px' }}>
    {experienceImages.map((src, index) => (
      <motion.div
        key={index}
        className="group relative flex-shrink-0 w-64 h-80 mx-4"
        whileHover={{
          scale: 1.05,
          y: -10, // Slight lift
          rotateY: '4deg', // Reduced tilt
          boxShadow: '0px 15px 25px -10px rgba(0,0,0,0.2)', // Softer shadow
          transition: { type: "spring", stiffness: 300, damping: 20 }
        }}
      >
        <motion.div
          className="absolute inset-0 rounded-lg blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-300"
          style={{
            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.4) 0%, rgba(59, 130, 246, 0.4) 100%)'
          }}
        />
        <img
          src={src}
          alt={`Experience image ${index + 1}`}
          className="relative w-full h-full object-cover rounded-lg shadow-lg"
          style={{ transform: 'translateZ(0)' }} // Promote to new layer for better performance
        />
      </motion.div>
    ))}
  </div>
);

export const Experience: React.FC = () => {
  const controls = useAnimation();

  const startAnimation = (duration: number) => {
    controls.start({
      x: '-50%',
      transition: {
        x: {
          duration: duration,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
        },
      },
    });
  };

  useEffect(() => {
    startAnimation(35); // Normal speed
  }, [controls]);

  return (
    <section className="py-20 relative w-full overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-10 px-6">
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
      </div>

      <div
        className="w-full cursor-grab"
        onMouseEnter={() => startAnimation(70)} // Slow down on hover
        onMouseLeave={() => startAnimation(35)}   // Resume normal speed
      >
        <motion.div
          className="flex flex-nowrap"
          style={{ width: '200%', willChange: 'transform' }} // Added will-change
          animate={controls}
        >
          <CarouselContent />
          <CarouselContent />
        </motion.div>
      </div>
    </section>
  );
};
