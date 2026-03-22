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

    let mouse = { x: null, y: null };

    const handleMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', () => { mouse.x = null; mouse.y = null; });

    const numStars = window.innerWidth > 768 ? 200 : 80;
    let stars = [];

    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            origX: Math.random() * canvas.width,
            origY: Math.random() * canvas.height,
            radius: Math.random() * 1.5 + 0.5,
            vx: (Math.random() - 0.5) * 0.2, 
            vy: (Math.random() - 0.5) * 0.2,
        });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const mouseActive = mouse.x !== null;
      // We check if dark mode is active by looking at HTML class!
      const isDark = document.documentElement.classList.contains('dark');

      for (let i = 0; i < stars.length; i++) {
        let star = stars[i];

        star.origX += star.vx;
        star.origY += star.vy;
        
        if (star.origX < -50) star.origX = canvas.width + 50;
        if (star.origX > canvas.width + 50) star.origX = -50;
        if (star.origY < -50) star.origY = canvas.height + 50;
        if (star.origY > canvas.height + 50) star.origY = -50;

        let targetX = star.origX;
        let targetY = star.origY;
        
        if (mouseActive) {
            const dx = mouse.x - star.origX;
            const dy = mouse.y - star.origY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            const radiusOfInfluence = 400; 
            if (distance < radiusOfInfluence && distance > 0) {
                const force = Math.pow(1 - distance / radiusOfInfluence, 1.5);
                const pullStrength = force * 150; 
                
                const dirX = dx / distance;
                const dirY = dy / distance;
                
                targetX = star.origX + dirX * pullStrength;
                targetY = star.origY + dirY * pullStrength;
            }
        }

        if (typeof star.x === 'undefined') {
            star.x = star.origX;
            star.y = star.origY;
        }

        star.x += (targetX - star.x) * 0.08;
        star.y += (targetY - star.y) * 0.08;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        
        let opacity = 0.3 + (star.radius / 3);
        if (mouseActive) {
           const distToDisplay = Math.sqrt(Math.pow(mouse.x - star.x, 2) + Math.pow(mouse.y - star.y, 2));
           if (distToDisplay < 400) {
              opacity += (1 - distToDisplay / 400) * 0.4;
           }
        }
        
        // Use dark dots on light mode, white stars on dark mode
        if (isDark) {
            ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        } else {
            ctx.fillStyle = `rgba(15, 23, 42, ${opacity * 0.8})`; // Slate-900 dots
        }
        
        ctx.fill();
        ctx.closePath();
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
