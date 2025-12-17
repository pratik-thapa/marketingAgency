"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

const ParticleBackground = () => {
  // Fix for the TypeScript error
  const canvasRef = useRef(null as HTMLCanvasElement | null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    // ==========================================
    // 👇 CONFIGURE YOUR COLOR HERE
    // ==========================================
    const hexColor = "#EC4899"; // Example: Your brand Pink. Change to #ffffff for white.
    const particleCount = 60;
    const connectionDistance = 150;
    const moveSpeed = 0.5;
    // ==========================================

    // Helper: Convert Hex to RGB string "r, g, b,"
    const hexToRgb = (hex: string) => {
      // Remove # if present
      hex = hex.replace(/^#/, "");

      // Parse r, g, b
      const bigint = parseInt(hex, 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;

      return `${r}, ${g}, ${b},`;
    };

    const rgbBase = hexToRgb(hexColor);

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * moveSpeed,
          vy: (Math.random() - 0.5) * moveSpeed,
          size: Math.random() * 2 + 1,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, index) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Draw Dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        // Uses the converted RGB base + static opacity
        ctx.fillStyle = `rgba(${rgbBase} 0.8)`;
        ctx.fill();

        // Connect Lines
        for (let j = index + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = 1 - distance / connectionDistance;
            ctx.beginPath();
            // Uses the converted RGB base + dynamic opacity
            ctx.strokeStyle = `rgba(${rgbBase} ${opacity * 0.5})`;
            ctx.lineWidth = 1;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      init();
    };

    window.addEventListener("resize", handleResize);
    init();
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ background: "transparent" }}
    />
  );
};

export default ParticleBackground;
