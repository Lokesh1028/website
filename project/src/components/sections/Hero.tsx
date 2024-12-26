import React from 'react';
import { personalInfo } from '../../data/personalInfo';
import { Mail } from 'lucide-react';
import '../../styles/animations.css';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20">
      <div className="text-center">
        <p className="animate-fadeIn font-iceberg text-2xl text-gray-600 dark:text-gray-400 mb-2">
          Hello, this is 👋
        </p>
        <h1 
          className="font-caesar text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white mb-6 hover:glitch-text transition-all duration-300"
        >
          {personalInfo.name}
        </h1>
        <p className="typewriter font-iceberg text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-4">
          {personalInfo.title}
        </p>
        <div className="animate-fadeIn flex justify-center space-x-4 opacity-0" style={{ animationDelay: '1s' }}>
          <a
            href={`mailto:${personalInfo.social.email}`}
            className="px-8 py-4 text-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            <Mail className="w-6 h-6 mr-2" />
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}