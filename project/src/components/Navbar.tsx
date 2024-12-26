import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Blogs', href: '#blogs' },
  { label: 'Contact', href: `mailto:${personalInfo.social.email}` },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="cyber-border bg-[var(--bg-secondary)]/60 backdrop-blur-md rounded-2xl px-6 py-3">
          <div className="flex items-center justify-between">
            <a 
              href="#" 
              className="text-2xl font-orbitron text-[var(--accent)] hover:text-[var(--accent-2)] transition-colors"
            >
              Lokesh Reddy Dodla
            </a>
            
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-rajdhani text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <button
              className="md:hidden text-[var(--accent)]"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>

          {isOpen && (
            <div className="md:hidden mt-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block font-rajdhani text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}