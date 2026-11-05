/**
 * ===================================================================
 * BACKGROUND AUDIO CONTROLLER (AUTO-PAUSES ON LEAVING / TAB SWITCH)
 * Features "Mera Hua" by Anmol Salh for the Taj Mahal theme
 * ===================================================================
 */

class WeddingAudioManager {
  constructor() {
    this.audio = document.getElementById('bg-music');
    this.isPlaying = false;
    this.wasPlayingBeforeLeave = false;
    this.equalizerElement = document.querySelector('.music-equalizer');
    this.toggleButton = document.getElementById('music-toggle-btn');
    this.config = (window.WEDDING_CONFIG && window.WEDDING_CONFIG.audio) || {};
    
    this.init();
  }

  init() {
    if (!this.audio) {
      this.audio = new Audio();
      this.audio.id = 'bg-music';
      this.audio.loop = true;
      document.body.appendChild(this.audio);
    }
    
    this.audio.src = this.config.src || 'assets/audio/mera_hua.mp3';
    this.audio.loop = true;
    this.audio.volume = this.config.defaultVolume || 0.75;
    this.audio.preload = 'auto';

    if (this.toggleButton) {
      this.toggleButton.addEventListener('click', (e) => {
        e.stopPropagation();
        this.togglePlay();
        this.wasPlayingBeforeLeave = false;
      });
    }

    this.audio.addEventListener('play', () => {
      this.isPlaying = true;
      this.updateUI(true);
    });

    this.audio.addEventListener('pause', () => {
      this.isPlaying = false;
      this.updateUI(false);
    });

    // ── AUTO-PAUSE WHEN LEAVING PAGE OR SWITCHING TABS / APPS ──
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        if (this.isPlaying) {
          this.wasPlayingBeforeLeave = true;
          this.pause();
        }
      } else {
        if (this.wasPlayingBeforeLeave) {
          this.play();
          this.wasPlayingBeforeLeave = false;
        }
      }
    });

    // Extra safeguards for mobile browser exit, maps redirection, and tab unload
    window.addEventListener('pagehide', () => {
      this.pause();
    });

    window.addEventListener('beforeunload', () => {
      this.pause();
    });

    window.addEventListener('blur', () => {
      if (this.isPlaying) {
        this.wasPlayingBeforeLeave = true;
        this.pause();
      }
    });

    window.addEventListener('focus', () => {
      if (this.wasPlayingBeforeLeave && !document.hidden) {
        this.play();
        this.wasPlayingBeforeLeave = false;
      }
    });
  }

  play() {
    if (!this.audio) return;
    const playPromise = this.audio.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          this.isPlaying = true;
          this.updateUI(true);
        })
        .catch((error) => {
          console.log("Audio autoplay prevented by browser policy:", error);
          this.isPlaying = false;
          this.updateUI(false);
        });
    }
  }

  pause() {
    if (!this.audio) return;
    this.audio.pause();
    this.isPlaying = false;
    this.updateUI(false);
  }

  togglePlay() {
    if (this.isPlaying) {
      this.pause();
      if (window.showToast) window.showToast("🔇 Music Paused");
    } else {
      this.play();
      const title = (this.config && this.config.title) ? this.config.title : "Mera Hua - Anmol Salh";
      if (window.showToast) window.showToast(`🎵 Playing: ${title}`);
    }
  }

  updateUI(isPlaying) {
    if (this.toggleButton) {
      if (isPlaying) {
        this.toggleButton.classList.add('is-playing');
        this.toggleButton.setAttribute('title', 'Pause Music');
        this.toggleButton.setAttribute('aria-label', 'Pause Music');
      } else {
        this.toggleButton.classList.remove('is-playing');
        this.toggleButton.setAttribute('title', 'Play Music');
        this.toggleButton.setAttribute('aria-label', 'Play Music');
      }
    }
  }
}

// Global instance
window.weddingAudio = null;
document.addEventListener('DOMContentLoaded', () => {
  window.weddingAudio = new WeddingAudioManager();
});
