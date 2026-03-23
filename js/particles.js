// Floating ember/particle effect
(function() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let particles = [];
  let W, H;

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  function rand(min, max) { return Math.random() * (max - min) + min; }

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = rand(0, W);
      this.y = rand(H, H + 20);
      this.size = rand(1, 3);
      this.speedY = rand(0.3, 1.2);
      this.speedX = rand(-0.3, 0.3);
      this.opacity = rand(0.1, 0.5);
      this.color = Math.random() > 0.5
        ? `rgba(201,168,76,${this.opacity})`
        : `rgba(200,90,10,${this.opacity * 0.5})`;
      this.flicker = rand(0, Math.PI * 2);
      this.flickerSpeed = rand(0.02, 0.06);
    }
    update() {
      this.y -= this.speedY;
      this.x += this.speedX + Math.sin(this.flicker) * 0.3;
      this.flicker += this.flickerSpeed;
      this.opacity -= 0.001;
      if (this.y < -20 || this.opacity <= 0) this.reset();
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  }

  for (let i = 0; i < 80; i++) {
    const p = new Particle();
    p.y = rand(0, H); // spread initially
    particles.push(p);
  }

  function animate() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animate);
  }
  animate();
})();
