import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface SectionDividerProps {
  variant?: 'wave' | 'diagonal' | 'zigzag' | 'curve';
  direction?: 'left' | 'right';
  className?: string;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({ 
  variant = 'wave', 
  direction = 'left',
  className = ''
}) => {
  const { scrollYProgress } = useScroll();
  
  // Transform scroll progress to different animation values
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  const getPath = () => {
    const width = 1200;
    const height = 200;
    
    switch (variant) {
      case 'wave':
        return `M0,${height/2} Q${width/4},${height*0.2} ${width/2},${height/2} T${width},${height/2}`;
      
      case 'diagonal':
        return direction === 'left' 
          ? `M0,${height} L${width},0`
          : `M0,0 L${width},${height}`;
      
      case 'zigzag':
        return `M0,${height/2} L${width/6},${height*0.2} L${width/3},${height*0.8} L${width/2},${height*0.2} L${width*2/3},${height*0.8} L${width*5/6},${height*0.2} L${width},${height/2}`;
      
      case 'curve':
        return `M0,${height} Q${width/2},${height*0.3} ${width},${height}`;
      
      default:
        return `M0,${height/2} Q${width/4},${height*0.2} ${width/2},${height/2} T${width},${height/2}`;
    }
  };

  return (
    <div className={`relative w-full h-32 overflow-hidden ${className}`}>
      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{ scale }}
        animate={{
          background: [
            'linear-gradient(90deg, rgba(147, 51, 234, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)',
            'linear-gradient(90deg, rgba(59, 130, 246, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%)',
            'linear-gradient(90deg, rgba(16, 185, 129, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)',
            'linear-gradient(90deg, rgba(147, 51, 234, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)'
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      {/* Main SVG Line */}
      <motion.svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
        style={{ opacity }}
      >
        <defs>
          <linearGradient id={`gradient-${variant}-${direction}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(147, 51, 234, 0.8)" />
            <stop offset="50%" stopColor="rgba(59, 130, 246, 1)" />
            <stop offset="100%" stopColor="rgba(16, 185, 129, 0.8)" />
          </linearGradient>
          
          <filter id={`glow-${variant}-${direction}`}>
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Glow Effect Line */}
        <motion.path
          d={getPath()}
          stroke={`url(#gradient-${variant}-${direction})`}
          strokeWidth="6"
          fill="none"
          filter={`url(#glow-${variant}-${direction})`}
          style={{ pathLength }}
          opacity={0.6}
        />
        
        {/* Main Line */}
        <motion.path
          d={getPath()}
          stroke={`url(#gradient-${variant}-${direction})`}
          strokeWidth="2"
          fill="none"
          style={{ pathLength }}
          strokeLinecap="round"
        />
        
        {/* Animated Dots Along Path */}
        <motion.circle
          r="4"
          fill="rgba(147, 51, 234, 0.8)"
          style={{
            offsetDistance: useTransform(scrollYProgress, [0, 1], ['0%', '100%']),
            offsetPath: `path('${getPath()}')`
          }}
        >
          <animate
            attributeName="r"
            values="4;8;4"
            dur="2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.8;0.3;0.8"
            dur="2s"
            repeatCount="indefinite"
          />
        </motion.circle>
      </motion.svg>

      {/* Floating Geometric Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`geo-particle-${i}`}
            className="absolute w-2 h-2 rounded-full opacity-30"
            style={{
              left: `${10 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
              background: i % 3 === 0 
                ? 'linear-gradient(45deg, rgba(147, 51, 234, 0.6), rgba(59, 130, 246, 0.6))'
                : i % 3 === 1
                ? 'linear-gradient(45deg, rgba(59, 130, 246, 0.6), rgba(16, 185, 129, 0.6))'
                : 'linear-gradient(45deg, rgba(16, 185, 129, 0.6), rgba(147, 51, 234, 0.6))'
            }}
            animate={{
              y: [-10, 10, -10],
              x: [-5, 5, -5],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
    </div>
  );
};