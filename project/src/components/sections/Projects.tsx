import React from 'react';
import { personalInfo } from '../../data/personalInfo';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto">
        <h2 className="section-title">Projects</h2>
        <div className="max-w-4xl mx-auto grid gap-8">
          {personalInfo.projects.map((project, index) => (
            <div 
              key={index} 
              className="cyber-border group bg-[var(--bg-secondary)]/80 backdrop-blur-sm rounded-xl p-8 hover:scale-[1.02] transform transition-all duration-300"
            >
              <h3 className="text-2xl font-orbitron text-[var(--accent)] mb-4 group-hover:text-[var(--accent-2)] transition-colors">
                {project.title}
              </h3>
              <p className="font-rajdhani text-[var(--text-secondary)] text-lg mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-4 py-2 font-rajdhani bg-[var(--bg-primary)]/50 text-[var(--text-secondary)] border border-[var(--accent)]/30 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center font-rajdhani text-[var(--accent)] hover:text-[var(--accent-2)] transition-colors"
              >
                <Github className="w-5 h-5 mr-2" />
                View Code
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}