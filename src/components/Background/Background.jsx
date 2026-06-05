import { useEffect, useRef } from 'react';
import './Background.css';

export default function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let W = window.innerWidth;
    let H = window.innerHeight;

    const resize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
    };
    resize();
    window.addEventListener('resize', resize);

    // Particle nodes
    const NODES = 60;
    const nodes = Array.from({ length: NODES }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.8 + 0.6,
      opacity: Math.random() * 0.5 + 0.2,
    }));

    const LINK_DIST = 160;

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // Move nodes
      nodes.forEach(n => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
      });

      // Draw links
      for (let i = 0; i < NODES; i++) {
        for (let j = i + 1; j < NODES; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DIST) {
            const alpha = (1 - dist / LINK_DIST) * 0.18;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 200, 240, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach(n => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 200, 240, ${n.opacity})`;
        ctx.shadowColor = '#00c8f0';
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="global-bg">
      {/* Canvas neural network */}
      <canvas ref={canvasRef} className="global-bg__canvas" />

      {/* Layered mesh gradient */}
      <div className="global-bg__mesh" />

      {/* Hex grid pattern */}
      <div className="global-bg__grid" />

      {/* Animated aurora orbs */}
      <div className="global-bg__orb global-bg__orb--1" />
      <div className="global-bg__orb global-bg__orb--2" />
      <div className="global-bg__orb global-bg__orb--3" />
      <div className="global-bg__orb global-bg__orb--4" />

      {/* Horizontal scan line */}
      <div className="global-bg__scanline" />

      {/* Corner HUD decorators */}
      <div className="global-bg__corner global-bg__corner--tl" />
      <div className="global-bg__corner global-bg__corner--tr" />
      <div className="global-bg__corner global-bg__corner--bl" />
      <div className="global-bg__corner global-bg__corner--br" />

      {/* Floating data streams */}
      <div className="global-bg__stream global-bg__stream--1" />
      <div className="global-bg__stream global-bg__stream--2" />
    </div>
  );
}
