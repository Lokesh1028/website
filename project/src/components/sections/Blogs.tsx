import React from 'react';
import { personalInfo } from '../../data/personalInfo';
import { ExternalLink } from 'lucide-react';

export default function Blogs() {
  return (
    <section id="blogs" className="py-20">
      <div className="container mx-auto">
        <h2 className="section-title">Blogs & Articles</h2>
        <div className="max-w-4xl mx-auto grid gap-8">
          {personalInfo.blogs.map((blog, index) => (
            <a
              key={index}
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-border group bg-[var(--bg-secondary)]/80 backdrop-blur-sm rounded-xl p-8 hover:scale-[1.02] transform transition-all duration-300"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-orbitron text-[var(--accent)] mb-4 group-hover:text-[var(--accent-2)] transition-colors">
                    {blog.title}
                  </h3>
                  <p className="font-rajdhani text-[var(--text-secondary)] text-lg">
                    {blog.description}
                  </p>
                </div>
                <ExternalLink className="w-6 h-6 text-[var(--accent)] group-hover:text-[var(--accent-2)] transition-colors" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}