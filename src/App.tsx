import React from 'react';
import { ThemeToggle } from './components/ThemeToggle';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Poetry } from './components/Poetry';
import { Contact } from './components/Contact';
import { SectionDivider } from './components/SectionDivider';
import { useTheme } from './hooks/useTheme';

function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="font-apple antialiased bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black transition-colors duration-500">
      <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      
      <main>
        <Hero />
        
        <SectionDivider variant="wave" direction="left" />
        
        <About />
        
        <SectionDivider variant="diagonal" direction="right" />
        
        <Projects />
        
        <SectionDivider variant="curve" direction="left" />
        
        <Skills />
        
        <SectionDivider variant="zigzag" direction="right" />
        
        <Poetry />
        
        <SectionDivider variant="wave" direction="left" />
        
        <Contact />
      </main>
    </div>
  );
}

export default App;