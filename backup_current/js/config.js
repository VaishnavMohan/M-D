/**
 * ===================================================================
 * WEDDING INVITATION CONFIGURATION
 * Mohammed Nadeer & Fathima Rinsi — Saturday, October 31, 2026
 * { 20 Jumada al-Awwal (Jumada I) 1448 AH }
 * ===================================================================
 */

const WEDDING_CONFIG = {
  // Couple Information
  couple: {
    groom: {
      name: "Mohammed Nadeer",
      fullName: "Mohammed Nadeer",
      title: "The Groom",
      parents: "Mr. Mohammed Basheer & Mrs. Shahanaz",
      grandParents: "Late Hamza Haji & Late Abdul Kader",
      residence: "Pulaparambil (H), Chekanoor, Malappuram",
      phone: "+919846000000",
      formattedPhone: "Pulaparambil Family",
      invitationNote: "With warm hearts and sincere prayers, we cordially invite you with family to bless our sacred union."
    },

    bride: {
      name: "Fathima Rinsi",
      fullName: "Fathima Rinsi",
      title: "The Bride",
      parents: "Mr. Subair & Mrs. Soubanath Subair",
      residence: "Chandaparambil (H), Edappal",
      phone: "+919847000000",
      formattedPhone: "Chandaparambil Family",
      invitationNote: "With love, joy, and gratitude, we invite you to celebrate this blessed milestone in our lives."
    },
    monogram: "N / R",
    monogramShort: "N/R",
    hashtag: "#NadeerWedsRinsi"
  },

  // Event Date & Time
  event: {
    targetDate: "2026-10-31T16:00:00",
    dayOfWeek: "SATURDAY",
    day: "31",
    month: "OCT",
    monthFull: "October",
    year: "2026",
    formattedDate: "Saturday, 31 October 2026",
    hijriDate: "{ 20 JUMADA AL-AWWAL (JUMADA I) 1448 AH }",
    timeText: "4:00PM TO 8:30PM",
    
    // Calendar Event Info
    calendar: {
      title: "Wedding of Mohammed Nadeer & Fathima Rinsi",
      description: "Together with their families, Mohammed Nadeer and Fathima Rinsi cordially invite you to celebrate their wedding on Saturday, 31 October 2026 (20 Jumada al-Awwal 1448 AH) at CN Auditorium Kumbidi from 4:00 PM to 8:30 PM.",
      location: "CN Auditorium, Old Anakkara Road, Kumbidi, Palakkad – 679553, Kerala",
      startIso: "20261031T160000",
      endIso: "20261031T203000"
    }
  },

  // Venue & Location
  venue: {
    name: "CN Auditorium Kumbidi",
    subLocation: "Old Anakkara Road, Kumbidi",
    city: "Palakkad",
    state: "Kerala",
    pincode: "679553",
    fullAddress: "CN Auditorium (See Yen Auditorium), Old Anakkara Road, Kumbidi, Palakkad – 679553, Kerala",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=See+Yen+Auditorium+Kumbidi+Palakkad",
    appleMapsUrl: "https://maps.apple.com/?q=CN+Auditorium+Kumbidi"
  },

  // Invitation Messages from the Card
  messages: {
    bismillah: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    monogramText: "N/R",
    introLine: "TOGETHER WITH THEIR FAMILIES",
    groomName: "MOHAMMED NADEER",
    groomParents: "S/O MR. MOHAMMED BASHEER & MRS. SHAHANAZ",
    groomGrandParents: "GRAND S/O LATE HAMZA HAJI & LATE ABDUL KADER",
    groomResidence: "PULAPARAMBIL (H), CHEKANOOR, MALAPPURAM",
    andText: "and",
    brideName: "FATHIMA RINSI",
    brideParents: "D/O MR. SUBAIR & MRS. SOUBANATH SUBAIR",
    brideResidence: "CHANDAPARAMBIL (H), EDAPPAL",
    invocationText: "In sha allah on",
    dayOfWeek: "SATURDAY",
    day: "31",
    month: "OCTOBER",
    year: "2026",
    hijriDate: "{ 20 JUMADA AL-AWWAL (JUMADA I) 1448 AH }",
    venueName: "CN AUDITORIUM KUMBIDI",
    timingText: "4:00PM TO 8:30PM",
    wishesLead: "With best Wishes :",
    wishesNames: "Pulaparambil & Chandaparambil Families"
  },

  // Events Timeline
  events: [
    {
      step: "01",
      title: "Guest Reception & Welcome Gathering",
      subtitle: "Festive Welcome & Fellowship",
      time: "4:00 PM Onwards",
      badgeText: "Auspicious Welcome",
      quote: "✦ 20 Jumada al-Awwal 1448 AH ✦",
      description: "Welcoming beloved family, friends, and esteemed guests to celebrate this blessed union and joyous occasion.",
      rituals: ["Warm Welcome", "Family Gathering", "Festive Celebrations"],
      locationName: "CN Auditorium, Kumbidi",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=See+Yen+Auditorium+Kumbidi+Palakkad"
    },
    {
      step: "02",
      title: "Wedding Celebrations & Grand Feast",
      subtitle: "Nikah Blessings & Celebration Dinner",
      time: "4:00 PM TO 8:30 PM",
      badgeText: "Celebration Feast",
      quote: "✦ Prayers, Joy & Fellowship ✦",
      description: "Join us in offering du'a and prayers for the couple, followed by a delicious celebratory dinner and memorable moments with the newlyweds.",
      rituals: ["Nikah & Du'a", "Celebration Feast", "Meet the Couple"],
      locationName: "CN Auditorium, Kumbidi",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=See+Yen+Auditorium+Kumbidi+Palakkad"
    }
  ]
};

// Export to window
if (typeof window !== "undefined") {
  window.WEDDING_CONFIG = WEDDING_CONFIG;
}
