import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Writings } from './components/Writings';
import { Poetry } from './components/Poetry';
import { Footer } from './components/Footer';
import { ThemeToggle } from './components/ThemeToggle';
import { useLenis } from './hooks/useLenis';


export const App: React.FC = () => {
  useLenis();

  return (
    <div className="relative bg-apple-gray-light dark:bg-apple-gray text-gray-800 dark:text-gray-200 antialiased">
      <ThemeToggle />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Writings />
      <Poetry />
      <Footer />
    </div>
  );
};