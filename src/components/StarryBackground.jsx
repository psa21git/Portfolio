import { useEffect, useRef } from 'react';

const StarryBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let mouse = { x: null, y: null, lastX: null, lastY: null, speed: 0 };

    const handleMouseMove = (event) => {
      if (mouse.x !== null) {
        const dx = event.clientX - mouse.x;
        const dy = event.clientY - mouse.y;
        mouse.speed = Math.sqrt(dx * dx + dy * dy);
      }
      mouse.lastX = mouse.x;
      mouse.lastY = mouse.y;
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', () => { mouse.x = null; mouse.y = null; mouse.speed = 0; });

    // Speed lines radiating from the center
    const speedLines = [];
    const maxLines = window.innerWidth > 768 ? 160 : 70;
    
    // Manga Sound Effects floating in the background
    const sfxs = ['ドン!!', 'ゴゴゴ', 'ドドド', 'ニカッ', 'バァァァン', 'ドンッ!'];
    const sfxParticles = [];

    const isDark = () => document.documentElement.classList.contains('dark');

    // Initialize speed lines
    for (let i = 0; i < maxLines; i++) {
      speedLines.push({
        angle: Math.random() * Math.PI * 2,
        length: Math.random() * 120 + 40,
        distance: Math.random() * Math.max(window.innerWidth, window.innerHeight),
        speed: Math.random() * 6 + 2,
        width: Math.random() * 1.5 + 0.5
      });
    }

    // Initialize SFX particles
    const numSFX = window.innerWidth > 768 ? 14 : 7;
    for (let i = 0; i < numSFX; i++) {
      sfxParticles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        text: sfxs[Math.floor(Math.random() * sfxs.length)],
        fontSize: Math.random() * 22 + 18,
        opacity: Math.random() * 0.15 + 0.05,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4,
        scale: Math.random() * 0.4 + 0.8,
        rotate: (Math.random() - 0.5) * 0.4
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const dark = isDark();
      const lineColor = dark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)';
      const sfxColor = dark ? '255, 255, 255' : '15, 23, 42';
      const accentSfxColor = '220, 38, 38'; // Red for Straw Hat action pops
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Draw Speed Lines
      ctx.strokeStyle = lineColor;
      for (let i = 0; i < speedLines.length; i++) {
        let line = speedLines[i];
        
        // Boost lines speed using mouse speed
        const currentSpeed = line.speed * (1 + (mouse.speed * 0.03));
        line.distance += currentSpeed;

        if (line.distance > Math.max(canvas.width, canvas.height)) {
          line.distance = Math.random() * 50;
          line.angle = Math.random() * Math.PI * 2;
        }

        const startX = centerX + Math.cos(line.angle) * line.distance;
        const startY = centerY + Math.sin(line.angle) * line.distance;
        const endX = centerX + Math.cos(line.angle) * (line.distance + line.length);
        const endY = centerY + Math.sin(line.angle) * (line.distance + line.length);

        ctx.beginPath();
        ctx.lineWidth = line.width;
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
      }

      // Decay mouse speed input
      mouse.speed *= 0.96;

      // Draw drifting SFX characters
      for (let i = 0; i < sfxParticles.length; i++) {
        let sfx = sfxParticles[i];
        
        sfx.x += sfx.speedX * (1 + mouse.speed * 0.08);
        sfx.y += sfx.speedY * (1 + mouse.speed * 0.08);

        // Wrap boundaries
        if (sfx.x < -100) sfx.x = canvas.width + 100;
        if (sfx.x > canvas.width + 100) sfx.x = -100;
        if (sfx.y < -100) sfx.y = canvas.height + 100;
        if (sfx.y > canvas.height + 100) sfx.y = -100;

        // Hover proximity effect
        let isClose = false;
        let dist = 9999;
        if (mouse.x !== null) {
          const dx = mouse.x - sfx.x;
          const dy = mouse.y - sfx.y;
          dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            isClose = true;
          }
        }

        ctx.save();
        ctx.translate(sfx.x, sfx.y);
        ctx.rotate(sfx.rotate);

        const currentOpacity = isClose 
          ? Math.min(sfx.opacity + 0.5, 0.7) 
          : sfx.opacity;
        
        const scaleVal = isClose 
          ? sfx.scale * 1.35 
          : sfx.scale;

        ctx.scale(scaleVal, scaleVal);
        // Style font with manga fonts
        ctx.font = `italic bold ${sfx.fontSize}px 'Permanent Marker', 'Bangers', sans-serif`;
        
        if (isClose) {
          ctx.fillStyle = `rgba(${accentSfxColor}, ${currentOpacity})`;
          ctx.strokeStyle = dark ? '#ffffff' : '#000000';
          ctx.lineWidth = 2;
          ctx.fillText(sfx.text, 0, 0);
          ctx.strokeText(sfx.text, 0, 0);
        } else {
          ctx.fillStyle = `rgba(${sfxColor}, ${currentOpacity})`;
          ctx.fillText(sfx.text, 0, 0);
        }

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
};

export default StarryBackground;
