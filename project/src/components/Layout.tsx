import React from 'react';
import Navbar from './Navbar';
import ThemeToggle from './ThemeToggle';
import { ScrollToTop } from './ScrollToTop';
import Background from './Background';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen text-[var(--text-primary)] transition-colors duration-300">
      <Background />
      <div className="fixed inset-0 bg-gradient-to-b from-transparent to-[var(--bg-secondary)] pointer-events-none opacity-40" />
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {children}
      </main>
      <ScrollToTop />
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
    </div>
  );
}