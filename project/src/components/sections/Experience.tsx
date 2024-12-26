import React from 'react';
import { personalInfo } from '../../data/personalInfo';

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto">
        <h2 className="section-title">Experience</h2>
        <div className="max-w-4xl mx-auto grid gap-8">
          {personalInfo.experience.map((exp, index) => (
            <div 
              key={index} 
              className="cyber-border bg-[var(--bg-secondary)]/80 backdrop-blur-sm rounded-xl p-8 hover:scale-[1.02] transform transition-all duration-300"
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-orbitron text-[var(--accent)] mb-4">
                  {exp.title}
                </h3>
                <p className="font-rajdhani text-[var(--text-secondary)] text-lg">
                  {exp.organization}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}