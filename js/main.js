/**
 * ===================================================================
 * MAIN APPLICATION CONTROLLER, THEME ENGINE, ROYAL CAROUSEL & LIGHTBOX
 * Dr. Mahshook Bin Azeez & Dr. Dilna Nasrin — Sunday, 6 December 2026
 * The White Oak Castle, Moodal
 * ===================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Theme Engine (Royal Marble Day / Midnight Emerald Night)
  initThemeManager();

  // 2. Setup Scroll Reveal Animations
  setupScrollReveal();

  // 3. Setup Floating Action Buttons
  setupActionButtons();

  // 4. Setup Copy Address Button
  setupCopyAddress();

  // 5. Setup Gallery Lightbox & Physical Invitation Modal
  const openLightbox = setupLightboxAndModals();

  // 6. Setup Luxury Royal Photo Carousel
  initRoyalCarousel(openLightbox);
});

/**
 * ===================================================================
 * THEME ENGINE: Auto Detection + Smooth Switching
 * ===================================================================
 */
function initThemeManager() {
  const root = document.documentElement;
  const body = document.body;
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeToggleIcon = document.getElementById('theme-toggle-icon');
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');

  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  const savedTheme = localStorage.getItem('wedding_theme_preference');

  function applyTheme(theme, showNotification = false) {
    root.setAttribute('data-theme', theme);
    body.setAttribute('data-theme', theme);

    if (theme === 'dark') {
      if (themeToggleIcon) themeToggleIcon.textContent = '☀️';
      if (metaThemeColor) metaThemeColor.setAttribute('content', '#07160E');
      if (showNotification) showToast("🌙 Switched to Midnight Emerald Theme");
    } else {
      if (themeToggleIcon) themeToggleIcon.textContent = '🌙';
      if (metaThemeColor) metaThemeColor.setAttribute('content', '#FAF7F2');
      if (showNotification) showToast("☀️ Switched to Royal Marble Theme");
    }
  }

  // Determine initial theme
  let activeTheme = savedTheme;
  if (!activeTheme) {
    activeTheme = systemPrefersDark.matches ? 'dark' : 'light';
  }
  applyTheme(activeTheme, false);

  // Listen for system changes
  systemPrefersDark.addEventListener('change', (e) => {
    if (!localStorage.getItem('wedding_theme_preference')) {
      applyTheme(e.matches ? 'dark' : 'light', true);
    }
  });

  // Manual Toggle
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const current = root.getAttribute('data-theme') || (systemPrefersDark.matches ? 'dark' : 'light');
      const nextTheme = current === 'dark' ? 'light' : 'dark';
      
      localStorage.setItem('wedding_theme_preference', nextTheme);
      applyTheme(nextTheme, true);
    });
  }
}

/**
 * ===================================================================
 * SCROLL REVEAL OBSERVER
 * ===================================================================
 */
function setupScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -30px 0px'
  });

  revealElements.forEach(el => observer.observe(el));

  window.revealSections = function() {
    revealElements.forEach(el => el.classList.add('is-revealed'));
  };
}

/**
 * ===================================================================
 * ACTION BUTTONS: WhatsApp Share, Scroll to Top, Petals Toggle
 * ===================================================================
 */
function setupActionButtons() {
  const scrollTopBtn = document.getElementById('scroll-top-btn');
  const shareWhatsappBtn = document.getElementById('share-whatsapp-btn');
  const petalsToggleBtn = document.getElementById('petals-toggle-btn');

  // Scroll to Top
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 350) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }, { passive: true });

    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Share on WhatsApp
  if (shareWhatsappBtn) {
    shareWhatsappBtn.addEventListener('click', () => {
      const shareUrl = window.location.href;
      const shareText = encodeURIComponent(
        `✨ Wedding Invitation ✨\n\n` +
        `Mr. Azeez & Mrs. Thahira Azeez cordially invite you to the Walima ceremony of their son\n` +
        `💍 Dr. Mahshook Bin Azeez with Dr. Dilna Nasrin 💍\n\n` +
        `📅 Date: Sunday, 6 December 2026\n` +
        `⏰ Time: 12:00 PM Onwards\n` +
        `📍 Venue: The White Oak Castle, Moodal\n\n` +
        `Tap the link below to view the digital invitation, Taj Mahal gallery & GPS directions:\n` +
        `${shareUrl}`
      );
      window.open(`https://api.whatsapp.com/send?text=${shareText}`, '_blank');
    });
  }

  // Petals Toggle
  if (petalsToggleBtn) {
    let petalsActive = true;
    petalsToggleBtn.addEventListener('click', () => {
      petalsActive = !petalsActive;
      const canvas = document.getElementById('petals-canvas');
      if (canvas) {
        canvas.style.display = petalsActive ? 'block' : 'none';
      }
      if (window.petalSystem) {
        window.petalSystem.active = petalsActive;
      }
      petalsToggleBtn.classList.toggle('is-muted', !petalsActive);
      showToast(petalsActive ? "🌸 Falling Petals Enabled" : "🌸 Falling Petals Paused");
    });
  }
}

/**
 * ===================================================================
 * COPY ADDRESS TO CLIPBOARD
 * ===================================================================
 */
function setupCopyAddress() {
  const copyBtn = document.getElementById('btn-copy-address');
  if (!copyBtn) return;

  copyBtn.addEventListener('click', async () => {
    const address = "The White Oak Castle Convention Centre, Kanjippura-Moodal Bypass Road, near Oakland Sports Arena, Markaz Moodal, Athavanad, Kuttippuram, Malappuram District, Kerala - 679571";
    
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(address);
      } else {
        const tempInput = document.createElement('textarea');
        tempInput.value = address;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
      }
      showToast("📍 Venue address copied to clipboard!");
    } catch (e) {
      showToast("📍 Address: The White Oak Castle, Moodal, Malappuram");
    }
  });
}

/**
 * ===================================================================
 * LUXURY ROYAL CAROUSEL CONTROLLER
 * ===================================================================
 */
function initRoyalCarousel(openLightboxCallback) {
  const track = document.getElementById('carousel-track');
  const slides = document.querySelectorAll('.carousel-slide');
  const ambientBg = document.getElementById('carousel-ambient-bg');
  const counterBadge = document.getElementById('carousel-counter-badge');
  const slideTag = document.getElementById('carousel-slide-tag');
  const slideTitle = document.getElementById('carousel-slide-title');
  const slideCaption = document.getElementById('carousel-slide-caption');
  const prevBtn = document.getElementById('carousel-btn-prev');
  const nextBtn = document.getElementById('carousel-btn-next');
  const dots = document.querySelectorAll('.carousel-dot');
  const thumbs = document.querySelectorAll('.thumb-strip-item');
  const autoplayBtn = document.getElementById('carousel-autoplay-toggle');
  const autoplayIcon = document.getElementById('autoplay-icon');
  const viewport = document.getElementById('carousel-slide-viewport');

  const galleryData = (window.WEDDING_CONFIG && window.WEDDING_CONFIG.gallery) || [];
  if (!track || slides.length === 0) return;

  let currentIndex = 0;
  let isAutoplaying = true;
  let autoplayTimer = null;
  const slideCount = slides.length;

  function goToSlide(index, manual = false) {
    currentIndex = (index + slideCount) % slideCount;
    const item = galleryData[currentIndex];

    // Smooth Slide Translation
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Active state on slides
    slides.forEach((slide, idx) => {
      slide.classList.toggle('active', idx === currentIndex);
    });

    // Update ambient blurred backdrop
    if (ambientBg && item) {
      ambientBg.style.backgroundImage = `url('${item.src}')`;
    }

    // Update story card & badges
    if (item) {
      if (counterBadge) counterBadge.textContent = `Moment 0${currentIndex + 1} / 0${slideCount}`;
      if (slideTag) slideTag.textContent = `MOMENT 0${currentIndex + 1} OF 0${slideCount}`;
      if (slideTitle) slideTitle.textContent = item.title;
      if (slideCaption) slideCaption.textContent = item.caption;
    }

    // Update pagination dots
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentIndex);
    });

    // Update filmstrip thumbnails
    thumbs.forEach((thumb, idx) => {
      const isActive = idx === currentIndex;
      thumb.classList.toggle('active', isActive);
      if (isActive && manual) {
        thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    });

    if (manual && isAutoplaying) {
      resetAutoplay();
    }
  }

  function nextSlide() {
    goToSlide(currentIndex + 1);
  }

  function prevSlide() {
    goToSlide(currentIndex - 1);
  }

  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(() => {
      nextSlide();
    }, 4500);
    isAutoplaying = true;
    if (autoplayIcon) autoplayIcon.textContent = '⏸';
  }

  function stopAutoplay() {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  function resetAutoplay() {
    stopAutoplay();
    if (isAutoplaying) {
      startAutoplay();
    }
  }

  // Navigation button clicks
  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      goToSlide(currentIndex + 1, true);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      goToSlide(currentIndex - 1, true);
    });
  }

  // Dots clicks
  dots.forEach((dot, idx) => {
    dot.addEventListener('click', (e) => {
      e.stopPropagation();
      goToSlide(idx, true);
    });
  });

  // Thumbnail clicks
  thumbs.forEach((thumb, idx) => {
    thumb.addEventListener('click', (e) => {
      e.stopPropagation();
      goToSlide(idx, true);
    });
  });

  // Autoplay toggle button
  if (autoplayBtn) {
    autoplayBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (isAutoplaying) {
        stopAutoplay();
        isAutoplaying = false;
        if (autoplayIcon) autoplayIcon.textContent = '▶';
        showToast("⏸ Slideshow Paused");
      } else {
        startAutoplay();
        isAutoplaying = true;
        if (autoplayIcon) autoplayIcon.textContent = '⏸';
        showToast("▶ Slideshow Playing");
      }
    });
  }

  // Pause autoplay on mouse enter, resume on mouse leave
  const carouselWrapper = document.getElementById('taj-carousel');
  if (carouselWrapper) {
    carouselWrapper.addEventListener('mouseenter', () => stopAutoplay());
    carouselWrapper.addEventListener('mouseleave', () => {
      if (isAutoplaying) startAutoplay();
    });
  }

  // Click on slide viewport triggers full resolution lightbox
  if (viewport && typeof openLightboxCallback === 'function') {
    viewport.addEventListener('click', () => {
      openLightboxCallback(currentIndex);
    });
  }

  // Mobile Touch Swipe gestures
  let touchStartX = 0;
  let touchEndX = 0;
  if (viewport) {
    viewport.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      stopAutoplay();
    }, { passive: true });

    viewport.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const deltaX = touchEndX - touchStartX;
      if (Math.abs(deltaX) > 40) {
        if (deltaX < 0) {
          goToSlide(currentIndex + 1, true);
        } else {
          goToSlide(currentIndex - 1, true);
        }
      }
      if (isAutoplaying) startAutoplay();
    }, { passive: true });
  }

  // Initialize first slide & start timer
  goToSlide(0);
  startAutoplay();
}

/**
 * ===================================================================
 * GALLERY LIGHTBOX & PHYSICAL INVITATION MODAL
 * ===================================================================
 */
function setupLightboxAndModals() {
  const lightboxModal = document.getElementById('gallery-lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxCounter = document.getElementById('lightbox-counter');
  const closeBtn = document.getElementById('lightbox-close-btn');
  const prevBtn = document.getElementById('lightbox-prev-btn');
  const nextBtn = document.getElementById('lightbox-next-btn');

  const galleryData = (window.WEDDING_CONFIG && window.WEDDING_CONFIG.gallery) || [];
  let currentIndex = 0;

  function openLightbox(index) {
    if (!lightboxModal || !galleryData[index]) return;
    currentIndex = index;
    updateLightboxContent();
    lightboxModal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  function updateLightboxContent() {
    const item = galleryData[currentIndex];
    if (!item || !lightboxImg) return;
    lightboxImg.src = item.src;
    lightboxImg.alt = item.title;
    if (lightboxTitle) lightboxTitle.textContent = item.title;
    if (lightboxCaption) lightboxCaption.textContent = item.caption;
    if (lightboxCounter) lightboxCounter.textContent = `${currentIndex + 1} of ${galleryData.length}`;
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % galleryData.length;
    updateLightboxContent();
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
    updateLightboxContent();
  }

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (nextBtn) nextBtn.addEventListener('click', (e) => { e.stopPropagation(); showNext(); });
  if (prevBtn) prevBtn.addEventListener('click', (e) => { e.stopPropagation(); showPrev(); });

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal || e.target.classList.contains('lightbox-backdrop')) {
        closeLightbox();
      }
    });
  }

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightboxModal || !lightboxModal.classList.contains('is-open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
  });

  // Physical Card Modal Handler
  const viewOriginalBtn = document.getElementById('btn-view-physical-card');
  const cardModal = document.getElementById('physical-card-modal');
  const cardModalClose = document.getElementById('card-modal-close-btn');

  if (viewOriginalBtn && cardModal) {
    viewOriginalBtn.addEventListener('click', () => {
      cardModal.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    });
  }

  if (cardModalClose && cardModal) {
    cardModalClose.addEventListener('click', () => {
      cardModal.classList.remove('is-open');
      document.body.style.overflow = '';
    });
  }

  if (cardModal) {
    cardModal.addEventListener('click', (e) => {
      if (e.target === cardModal || e.target.classList.contains('card-modal-backdrop')) {
        cardModal.classList.remove('is-open');
        document.body.style.overflow = '';
      }
    });
  }

  return openLightbox;
}

/**
 * ===================================================================
 * TOAST NOTIFICATION UTILITY
 * ===================================================================
 */
let toastTimeout = null;
function showToast(message) {
  let toast = document.querySelector('.toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add('visible');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('visible');
  }, 3200);
}
window.showToast = showToast;
