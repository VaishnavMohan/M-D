/**
 * ===================================================================
 * FLOATING WHITE JASMINE (MOGRA) & GOLDEN ROSE PETALS
 * Taj Mahal Theme for Dr. Mahshook & Dr. Dilna
 * ===================================================================
 */

class PetalParticleSystem {
  constructor() {
    this.canvas = document.getElementById('petals-canvas');
    if (!this.canvas) return;
    
    this.ctx = this.canvas.getContext('2d');
    this.petals = [];
    this.burstParticles = [];
    
    this.maxPetals = window.innerWidth < 768 ? 22 : 36;
    this.isRunning = true;
    this.active = true;
    this.isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Taj Mahal royal white jasmine, ivory rose, gold stardust & emerald leaf accents
    this.petalColors = [
      { r: 255, g: 255, b: 255, a: 0.85, type: 'jasmine' }, // Pure white jasmine / mogra
      { r: 250, g: 247, b: 240, a: 0.80, type: 'jasmine' }, // Cream ivory petal
      { r: 245, g: 235, b: 220, a: 0.70, type: 'rose' },    // Pearl white rose
      { r: 212, g: 175, b: 55,  a: 0.65, type: 'gold' },    // Imperial gold flake
      { r: 45,  g: 106, b: 79,  a: 0.45, type: 'leaf' }     // Emerald green leaf accent
    ];

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize(), { passive: true });

    for (let i = 0; i < this.maxPetals; i++) {
      this.petals.push(this.createPetal(true));
    }

    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.maxPetals = window.innerWidth < 768 ? 22 : 36;
  }

  createPetal(randomY = false) {
    const color = this.petalColors[Math.floor(Math.random() * this.petalColors.length)];
    const isMobile = window.innerWidth < 768;
    return {
      x: Math.random() * this.canvas.width,
      y: randomY ? Math.random() * this.canvas.height : -30,
      size: Math.random() * (isMobile ? 5 : 7) + 5,
      speedY: Math.random() * 0.75 + 0.35,
      speedX: Math.random() * 0.7 - 0.35,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() * 1.0 - 0.5),
      sway: Math.random() * 1.8 + 0.8,
      swaySpeed: Math.random() * 0.02 + 0.01,
      swayAngle: Math.random() * Math.PI * 2,
      flipSpeed: Math.random() * 0.03 + 0.015,
      flipAngle: Math.random() * Math.PI * 2,
      color: color
    };
  }

  burst(originX, originY, count = 35) {
    if (!this.active) return;
    const x = originX || this.canvas.width / 2;
    const y = originY || this.canvas.height / 2;
    const isMobile = window.innerWidth < 768;
    const actualCount = isMobile ? Math.min(count, 30) : count;

    for (let i = 0; i < actualCount; i++) {
      const angle = (Math.PI * 2 / actualCount) * i + (Math.random() * 0.5 - 0.25);
      const velocity = Math.random() * 6 + 2.5;
      const color = this.petalColors[Math.floor(Math.random() * this.petalColors.length)];

      this.burstParticles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity - 2.0,
        gravity: 0.15,
        size: Math.random() * (isMobile ? 6 : 9) + 5,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() * 8 - 4),
        flipAngle: Math.random() * Math.PI,
        flipSpeed: Math.random() * 0.06 + 0.03,
        opacity: 0.9,
        fadeSpeed: Math.random() * 0.018 + 0.012,
        color: color
      });
    }
  }

  animate() {
    if (!this.isRunning) return;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    if (this.active && !this.isReducedMotion) {
      // Draw falling petals
      for (let i = 0; i < this.petals.length; i++) {
        const p = this.petals[i];

        p.swayAngle += p.swaySpeed;
        p.flipAngle += p.flipSpeed;
        p.rotation += p.rotationSpeed;

        p.y += p.speedY;
        p.x += Math.sin(p.swayAngle) * p.sway + p.speedX;

        if (p.y > this.canvas.height + 40 || p.x < -40 || p.x > this.canvas.width + 40) {
          this.petals[i] = this.createPetal(false);
          continue;
        }

        this.drawPetal(p.x, p.y, p.size, p.rotation, p.flipAngle, p.color);
      }

      // Draw burst celebration particles
      for (let i = this.burstParticles.length - 1; i >= 0; i--) {
        const bp = this.burstParticles[i];

        bp.x += bp.vx;
        bp.y += bp.vy;
        bp.vy += bp.gravity;
        bp.rotation += bp.rotationSpeed;
        bp.flipAngle += bp.flipSpeed;
        bp.opacity -= bp.fadeSpeed;

        if (bp.opacity <= 0 || bp.y > this.canvas.height + 50) {
          this.burstParticles.splice(i, 1);
          continue;
        }

        this.drawPetal(bp.x, bp.y, bp.size, bp.rotation, bp.flipAngle, bp.color, bp.opacity);
      }
    }

    requestAnimationFrame(this.animate);
  }

  drawPetal(x, y, size, rotation, flipAngle, color, overrideOpacity = null) {
    this.ctx.save();
    this.ctx.translate(x, y);
    this.ctx.rotate(rotation * Math.PI / 180);
    this.ctx.scale(Math.cos(flipAngle), 1);

    const opacity = overrideOpacity !== null ? overrideOpacity : color.a;
    this.ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity})`;

    this.ctx.beginPath();
    if (color.type === 'jasmine') {
      // Jasmine / mogra petal (pointed elongated oval)
      this.ctx.moveTo(0, -size);
      this.ctx.bezierCurveTo(size * 0.6, -size * 0.5, size * 0.7, size * 0.5, 0, size * 1.1);
      this.ctx.bezierCurveTo(-size * 0.7, size * 0.5, -size * 0.6, -size * 0.5, 0, -size);
    } else if (color.type === 'gold') {
      // Diamond gold sparkle flake
      this.ctx.moveTo(0, -size * 0.8);
      this.ctx.lineTo(size * 0.6, 0);
      this.ctx.lineTo(0, size * 0.8);
      this.ctx.lineTo(-size * 0.6, 0);
      this.ctx.closePath();
    } else {
      // Rounded rose petal
      this.ctx.moveTo(0, -size * 0.8);
      this.ctx.bezierCurveTo(size * 0.8, -size * 0.7, size * 0.9, size * 0.6, 0, size * 0.9);
      this.ctx.bezierCurveTo(-size * 0.9, size * 0.6, -size * 0.8, -size * 0.7, 0, -size * 0.8);
    }
    this.ctx.fill();

    this.ctx.restore();
  }
}

// Global instance
window.petalSystem = null;
document.addEventListener('DOMContentLoaded', () => {
  window.petalSystem = new PetalParticleSystem();
});
