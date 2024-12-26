import React, { useEffect } from 'react';

export default function Background() {
  useEffect(() => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    const container = document.querySelector('.space-background');
    if (!container || !ctx) return;
    
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '0';
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    container.appendChild(canvas);

    // Create gradient background
    const createBackground = () => {
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#030014');
      gradient.addColorStop(1, '#1a0b2e');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    // Stars
    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2,
      speed: Math.random() * 0.5,
      opacity: Math.random()
    }));

    // Nebula particles
    const particles = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 100 + 50,
      hue: Math.random() * 60 + 240, // Blue to purple
      opacity: Math.random() * 0.05
    }));

    const animate = () => {
      createBackground();

      // Draw nebula
      particles.forEach(particle => {
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size
        );
        gradient.addColorStop(0, `hsla(${particle.hue}, 100%, 50%, ${particle.opacity})`);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Slowly move particles
        particle.x += Math.sin(Date.now() * 0.001) * 0.2;
        particle.y += Math.cos(Date.now() * 0.001) * 0.2;
        particle.opacity = Math.sin(Date.now() * 0.001) * 0.03 + 0.02;
      });

      // Draw and update stars
      stars.forEach(star => {
        star.opacity = Math.sin(Date.now() * 0.01 + star.x) * 0.5 + 0.5;
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        
        star.y = (star.y + star.speed) % canvas.height;
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.remove();
    };
  }, []);

  return <div className="space-background fixed inset-0 -z-10" />;
}