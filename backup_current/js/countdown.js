/**
 * ===================================================================
 * LIVE WEDDING COUNTDOWN & CALENDAR INTEGRATION
 * Mohammed Nadeer & Fathima Rinsi — Saturday, October 31, 2026
 * { 20 Jumada al-Awwal (Jumada I) 1448 AH }
 * ===================================================================
 */

class WeddingCountdown {
  constructor() {
    this.daysEl = document.getElementById('cd-days');
    this.hoursEl = document.getElementById('cd-hours');
    this.minutesEl = document.getElementById('cd-minutes');
    this.secondsEl = document.getElementById('cd-seconds');

    this.googleCalBtn = document.getElementById('add-google-cal');
    this.icalBtn = document.getElementById('add-ical');

    this.config = (window.WEDDING_CONFIG && window.WEDDING_CONFIG.event) ? window.WEDDING_CONFIG.event : {
      targetDate: "2026-10-31T16:00:00"
    };

    this.targetTime = new Date(this.config.targetDate).getTime();
    this.timerInterval = null;

    this.init();
  }

  init() {
    this.update();
    this.timerInterval = setInterval(() => this.update(), 1000);

    if (this.googleCalBtn) {
      this.googleCalBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.openGoogleCalendar();
      });
    }

    if (this.icalBtn) {
      this.icalBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.downloadICal();
      });
    }
  }

  update() {
    const now = new Date().getTime();
    const distance = this.targetTime - now;

    if (distance < 0) {
      if (this.daysEl) this.daysEl.textContent = "00";
      if (this.hoursEl) this.hoursEl.textContent = "00";
      if (this.minutesEl) this.minutesEl.textContent = "00";
      if (this.secondsEl) this.secondsEl.textContent = "00";
      clearInterval(this.timerInterval);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (this.daysEl) this.daysEl.textContent = String(days).padStart(2, '0');
    if (this.hoursEl) this.hoursEl.textContent = String(hours).padStart(2, '0');
    if (this.minutesEl) this.minutesEl.textContent = String(minutes).padStart(2, '0');
    if (this.secondsEl) this.secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  openGoogleCalendar() {
    const cal = this.config.calendar || {};
    const title = encodeURIComponent(cal.title || "Wedding of Mohammed Nadeer & Fathima Rinsi");
    const details = encodeURIComponent(cal.description || "Together with their families, Mohammed Nadeer and Fathima Rinsi cordially invite you to celebrate their wedding on Saturday, 31 October 2026 (20 Jumada al-Awwal 1448 AH) at CN Auditorium Kumbidi from 4:00 PM to 8:30 PM.");
    const location = encodeURIComponent(cal.location || "CN Auditorium, Old Anakkara Road, Kumbidi, Palakkad – 679553, Kerala");
    const dates = `${cal.startIso || '20261031T160000'}/${cal.endIso || '20261031T203000'}`;

    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${dates}&ctz=Asia/Kolkata`;
    window.open(url, '_blank');
  }

  downloadICal() {
    const cal = this.config.calendar || {};
    const title = cal.title || "Wedding of Mohammed Nadeer & Fathima Rinsi";
    const details = cal.description || "Together with their families, Mohammed Nadeer and Fathima Rinsi cordially invite you to celebrate their wedding on Saturday, 31 October 2026 (20 Jumada al-Awwal 1448 AH) at CN Auditorium Kumbidi from 4:00 PM to 8:30 PM.";
    const location = cal.location || "CN Auditorium, Old Anakkara Road, Kumbidi, Palakkad – 679553, Kerala";

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Mohammed Nadeer and Fathima Rinsi Wedding//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      'SUMMARY:' + title,
      'DESCRIPTION:' + details,
      'LOCATION:' + location,
      'DTSTART;TZID=Asia/Kolkata:20261031T160000',
      'DTEND;TZID=Asia/Kolkata:20261031T203000',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Nadeer_Rinsi_Wedding.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

// Global instance
window.weddingCountdown = null;
document.addEventListener('DOMContentLoaded', () => {
  window.weddingCountdown = new WeddingCountdown();
});
