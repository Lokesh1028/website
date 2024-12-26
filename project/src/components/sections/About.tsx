import React from 'react';
import { personalInfo } from '../../data/personalInfo';

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto">
        <h2 className="section-title">About Me</h2>
        <div className="max-w-4xl mx-auto">
          <div className="cyber-border bg-[var(--bg-secondary)]/80 backdrop-blur-sm rounded-xl p-8 hover:scale-[1.02] transform transition-all duration-300">
            <p className="font-rajdhani text-[var(--text-secondary)] text-lg mb-8">
              {personalInfo.description}
            </p>
            <div className="relative">
              <h3 className="text-2xl font-orbitron text-[var(--accent)] mb-4">
                Education
              </h3>
              <div className="space-y-2">
                <p className="font-rajdhani text-[var(--text-primary)] text-xl">
                  {personalInfo.education.degree}
                </p>
                <p className="font-rajdhani text-[var(--text-secondary)]">
                  {personalInfo.education.institute}
                </p>
                <p className="font-tech-mono text-[var(--accent-2)]">
                  {personalInfo.education.duration}
                </p>
                <p className="font-rajdhani text-[var(--text-secondary)]">
                  CGPA: <span className="text-[var(--accent)]">{personalInfo.education.cgpa}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}