import React from 'react';
import { personalInfo } from '../data/personalInfo';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function SocialLinks() {
  return (
    <footer className="py-10 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto">
        <div className="flex justify-center space-x-6">
          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href={personalInfo.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="w-6 h-6" />
          </a>
          <a
            href={personalInfo.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}