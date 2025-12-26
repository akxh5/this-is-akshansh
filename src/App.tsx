import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Poetry } from './components/Poetry';
import { ThemeToggle } from './components/ThemeToggle';


export const App: React.FC = () => {
  return (
    <div className="relative text-gray-800 dark:text-gray-200 antialiased">
      <ThemeToggle />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Poetry />
    </div>
  );
};