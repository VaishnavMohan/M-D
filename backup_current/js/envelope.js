/**
 * ===================================================================
 * SACRED GOLDEN THREAD (UNTIE THE KNOT) CONTROLLER
 * Mohammed Nadeer & Fathima Rinsi — October 31, 2026
 * ===================================================================
 */

// Ensure browser starts at top of page
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

document.addEventListener('DOMContentLoaded', () => {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;

  const overlay = document.getElementById('envelope-overlay');
  const card = document.querySelector('.thread-folio-card');
  const knot = document.querySelector('.sacred-knot-wrap');
  const untieBtn = document.querySelector('.thread-untie-btn');

  if (!overlay) return;

  let hasUntied = false;

  /* ── 1. 3D Perspective Tilt on Mouse Movement ──────────────── */
  if (card && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    overlay.addEventListener('mousemove', (e) => {
      if (hasUntied) return;
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) / (window.innerWidth / 2);
      const deltaY = (e.clientY - centerY) / (window.innerHeight / 2);

      const rotateY = deltaX * 6;
      const rotateX = -deltaY * 5;

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(8px)`;
    });

    overlay.addEventListener('mouseleave', () => {
      if (card && !hasUntied) {
        card.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0px)';
      }
    });
  }

  /* ── 2. Untie the Knot Animation Sequence ────────────────────── */
  function untieTheThread(e) {
    if (hasUntied) return;
    hasUntied = true;

    // Reset scroll position immediately
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    if (card) {
      card.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0px)';
    }

    // Add opening state to trigger CSS untying animations
    overlay.classList.add('opening');

    const cx = window.innerWidth / 2;
    const cy = window.innerHeight * 0.48;

    // A. Golden Stardust & Magic Sparkle Flash
    if (window.magicSparkleTrail) {
      window.magicSparkleTrail.burst(cx, cy, 60);
      setTimeout(() => window.magicSparkleTrail.burst(cx - 60, cy, 35), 180);
      setTimeout(() => window.magicSparkleTrail.burst(cx + 60, cy, 35), 180);
      setTimeout(() => window.magicSparkleTrail.burst(cx, cy - 40, 40), 360);
    }

    // B. Celebration Flower Petal Cascade
    if (window.petalSystem) {
      setTimeout(() => window.petalSystem.burst(cx, cy, 60), 200);
      setTimeout(() => window.petalSystem.burst(cx - 80, cy, 40), 400);
      setTimeout(() => window.petalSystem.burst(cx + 80, cy, 40), 400);
    }

    // C. Complete Dissolve to Couple Hero & Wedding Card
    setTimeout(() => {
      overlay.classList.add('opened');
      document.body.classList.add('envelope-opened');
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      // Reveal all sections
      document.querySelectorAll('.reveal-on-scroll').forEach(el => {
        el.classList.add('is-revealed');
      });

      if (window.revealSections) {
        window.revealSections();
      }
    }, 1000);
  }

  // Bind triggers (knot, button, card, overlay)
  const triggers = [knot, untieBtn, card, overlay].filter(Boolean);
  triggers.forEach(elem => {
    elem.addEventListener('click', untieTheThread);
    elem.addEventListener('touchend', untieTheThread, { passive: true });
  });
});
