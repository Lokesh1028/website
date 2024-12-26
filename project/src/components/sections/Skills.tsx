import React from 'react';
import { Code2, Database, Terminal, Palette } from 'lucide-react';

const skills = [
  {
    category: "Frontend",
    items: ["HTML", "CSS", "JavaScript"],
    icon: <Palette className="text-[var(--accent)]" />
  },
  {
    category: "Backend",
    items: ["Python"],
    icon: <Terminal className="text-[var(--accent)]" />
  },
  {
    category: "Tools",
    items: ["MS Power BI", "Spreadsheets"],
    icon: <Database className="text-[var(--accent)]" />
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto">
        <h2 className="section-title">Skills</h2>
        <div className="max-w-4xl mx-auto grid gap-8">
          {skills.map((skillGroup, index) => (
            <div 
              key={index} 
              className="cyber-border bg-[var(--bg-secondary)]/80 backdrop-blur-sm rounded-xl p-8 hover:scale-[1.02] transform transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 flex items-center justify-center">
                  {skillGroup.icon}
                </div>
                <h3 className="text-2xl font-orbitron text-[var(--accent)] ml-4">
                  {skillGroup.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 font-rajdhani bg-[var(--bg-primary)]/50 text-[var(--text-secondary)] border border-[var(--accent)]/30 rounded-lg hover:border-[var(--accent)] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}