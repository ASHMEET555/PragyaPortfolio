import { useEffect, useRef } from 'react';

const PETAL_COUNT = 28;
const BURST_PARTICLES = 14;

class Petal {
  constructor(width, height, randomY = true) {
    this.reset(width, height, randomY);
  }

  reset(width, height, randomY = false) {
    this.x = Math.random() * width;
    this.y = randomY ? Math.random() * height : -30;
    this.size = Math.random() * 8 + 5;
    this.speedY = Math.random() * 1.2 + 0.6;
    this.speedX = Math.random() * 0.5 - 0.25;
    this.rotation = Math.random() * Math.PI * 2;
    this.rotationSpeed = (Math.random() - 0.5) * 0.04;
    this.opacity = Math.random() * 0.3 + 0.62;
    this.sway = Math.random() * 40 + 20;
    this.swaySpeed = Math.random() * 0.015 + 0.008;
  }

  update(state) {
    const { mouse, width, height, wind } = state;
    const dx = this.x - mouse.x;
    const dy = this.y - mouse.y;
    const distance = Math.sqrt(dx * dx + dy * dy) || 1;

    if (distance < 110) {
      const force = (110 - distance) / 110;
      this.x += (dx / distance) * force * 4.5;
      this.y += (dy / distance) * force * 4.5;
    }

    this.y += this.speedY;
    this.x += this.speedX + wind + Math.sin(this.y * this.swaySpeed) * 0.4;
    this.rotation += this.rotationSpeed;

    if (this.y > height + 30 || this.x < -40 || this.x > width + 40) {
      this.reset(width, height, false);
    }
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    ctx.globalAlpha = this.opacity;

    const g = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size);
    g.addColorStop(0, '#ffe9f2');
    g.addColorStop(0.45, '#ffbeda');
    g.addColorStop(1, '#f48fc0');

    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.moveTo(0, -this.size);
    ctx.bezierCurveTo(this.size * 0.7, -this.size * 0.5, this.size * 0.65, this.size * 0.6, 0, this.size);
    ctx.bezierCurveTo(-this.size * 0.65, this.size * 0.6, -this.size * 0.7, -this.size * 0.5, 0, -this.size);
    ctx.fill();

    ctx.restore();
  }
}

class BurstParticle {
  constructor(x, y) {
    const angle = Math.random() * Math.PI * 2;
    const velocity = Math.random() * 3 + 1.5;
    this.x = x;
    this.y = y;
    this.vx = Math.cos(angle) * velocity;
    this.vy = Math.sin(angle) * velocity;
    this.size = Math.random() * 6 + 3;
    this.life = 1;
    this.decay = Math.random() * 0.02 + 0.02;
    this.rotation = Math.random() * Math.PI * 2;
  }

  update(wind) {
    this.vy += 0.02;
    this.x += this.vx + wind * 2;
    this.y += this.vy;
    this.rotation += 0.08;
    this.life -= this.decay;
  }

  draw(ctx) {
    if (this.life <= 0) return;
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    ctx.globalAlpha = this.life;
    ctx.fillStyle = '#f8a8cd';
    ctx.beginPath();
    ctx.ellipse(0, 0, this.size, this.size * 0.7, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

export default function SakuraPetals() {
  const canvasRef = useRef(null);
  const petalsRef = useRef([]);
  const burstsRef = useRef([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    petalsRef.current = Array.from({ length: PETAL_COUNT }, () => new Petal(width, height, true));

    let windTime = 0;

    const handleMouseMove = (event) => {
      mouseRef.current.x = event.clientX;
      mouseRef.current.y = event.clientY;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    const handleClick = (event) => {
      for (let i = 0; i < BURST_PARTICLES; i += 1) {
        burstsRef.current.push(new BurstParticle(event.clientX, event.clientY));
      }
    };

    const onResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);
    window.addEventListener('click', handleClick);
    window.addEventListener('resize', onResize);

    const animate = () => {
      windTime += 0.004;
      const wind = Math.sin(windTime) * 0.25;

      ctx.clearRect(0, 0, width, height);

      const state = {
        mouse: mouseRef.current,
        width,
        height,
        wind
      };

      petalsRef.current.forEach((petal) => {
        petal.update(state);
        petal.draw(ctx);
      });

      burstsRef.current = burstsRef.current.filter((burst) => {
        burst.update(wind);
        burst.draw(ctx);
        return burst.life > 0;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('resize', onResize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="petal-canvas" aria-hidden="true" />;
}
