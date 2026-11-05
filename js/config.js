/**
 * ===================================================================
 * WEDDING INVITATION CONFIGURATION
 * Dr. Mahshook Bin Azeez & Dr. Dilna Nasrin
 * Walima Ceremony — Sunday, 6th December 2026
 * The White Oak Castle, Moodal
 * ===================================================================
 */

const WEDDING_CONFIG = {
  // Couple Information
  couple: {
    groom: {
      name: "Dr Mahshook Bin Azeez",
      fullName: "Dr. Mahshook Bin Azeez",
      shortName: "Mahshook",
      title: "The Groom",
      parents: "Mr Azeez and Mrs Thahira Azeez",
      residence: "Kanhirangattl house, Kuttipuram road, Edappal",
      phone: "+919846000000",
      formattedPhone: "Azeez & Thahira Family (Edappal)",
      invitationNote: "Cordially invites you to the Walima ceremony of our beloved son."
    },

    bride: {
      name: "Dr Dilna Nasrin",
      fullName: "Dr. Dilna Nasrin",
      shortName: "Dilna",
      title: "The Bride",
      parents: "Mr Basheer and Mrs Laila Basheer",
      residence: "Eechiyil house, purangu",
      phone: "+919847000000",
      formattedPhone: "Basheer & Laila Family (Purangu)",
      invitationNote: "Together with families, seeking your prayers and presence on this blessed day."
    },

    monogram: "M / D",
    monogramShort: "M & D",
    hashtag: "#MahshookWedsDilna",
    sharingHappiness: "Mishal & Minha"
  },

  // Event Date & Time
  event: {
    targetDate: "2026-12-06T12:00:00",
    dayOfWeek: "SUNDAY",
    day: "6",
    month: "DEC",
    monthFull: "December",
    year: "2026",
    formattedDate: "Sunday, 6 December 2026",
    timeText: "12:00 PM ONWARDS",
    ceremonyName: "Walima Ceremony",
    
    // Calendar Event Info
    calendar: {
      title: "Walima Ceremony | Dr. Mahshook & Dr. Dilna",
      description: "Mr. Azeez & Mrs. Thahira Azeez cordially invite you to the Walima ceremony of their son Dr. Mahshook Bin Azeez with Dr. Dilna Nasrin on Sunday, 6th December 2026 at The White Oak Castle, Moodal from 12:00 PM onwards.",
      location: "The White Oak Castle Convention Centre, Moodal, Malappuram, Kerala - 679571",
      startIso: "20261206T120000",
      endIso: "20261206T163000"
    }
  },

  // Venue & Location Details
  venue: {
    name: "The White Oak Castle Moodal",
    subLocation: "Kanjippura-Moodal Bypass Road, Markaz Moodal",
    city: "Athavanad, Kuttippuram",
    district: "Malappuram",
    state: "Kerala",
    pincode: "679571",
    fullAddress: "The White Oak Castle Convention Centre, Kanjippura-Moodal Bypass Road, near Oakland Sports Arena, Markaz Moodal, Athavanad, Kuttippuram, Malappuram District, Kerala - 679571",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=White+Oak+Castle+Convention+Centre+Moodal+Kerala",
    appleMapsUrl: "https://maps.apple.com/?q=White+Oak+Castle+Convention+Centre+Moodal+Kerala"
  },

  // Audio Music Settings
  audio: {
    src: "assets/audio/mera_hua.mp3",
    title: "Mera Hua - Anmol Salh",
    defaultVolume: 0.8
  },

  // Messages from the Invitation Card
  messages: {
    bismillah: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    quranArabic: "وَمِنْ ءَايَٰتِهِۦٓ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَٰجًا لِّتَسْكُنُوٓا۟ إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةًۭ وَرَحْمَةً",
    quranEnglish: "And of His signs is that He created for you mates from yourselves, that you may find tranquility in them; and He placed between you affection and mercy.",
    quranSurah: "Surah Ar-Rum 30:21",
    prayer: "May Allah accept our union and make it a source of endless blessings for us all.",
    sharingHappiness: "Sharing the happiness Mishal & Minha",
    wishesLead: "With best Wishes :",
    wishesNames: "Kanhirangattl & Eechiyil Families"
  },

  // Photos Gallery (Taj Mahal Photoshoot - 6 Photos)
  gallery: [
    {
      id: 1,
      src: "assets/images/tajmahal/photo1_hero_flowing.jpg",
      title: "Eternal Symphony",
      caption: "Dr. Mahshook & Dr. Dilna standing in grace before the majestic Taj Mahal as Dilna's white dress flows like a dream in the Agra breeze.",
      aspect: "landscape"
    },
    {
      id: 2,
      src: "assets/images/tajmahal/photo2_forehead_kiss.jpg",
      title: "A Sacred Vow",
      caption: "A tender forehead kiss beside the tranquil lotus pool of the Taj Mahal, sealed with pure love and devotion.",
      aspect: "landscape"
    },
    {
      id: 3,
      src: "assets/images/tajmahal/photo3_pavilion_sunset.jpg",
      title: "Sunset Whispers",
      caption: "Framed under the iconic red sandstone scalloped arches of the Mughal pavilion overlooking the Yamuna river at golden hour.",
      aspect: "landscape"
    },
    {
      id: 4,
      src: "assets/images/tajmahal/photo4_bride_serenade.jpg",
      title: "Golden Hour Serenity",
      caption: "Dr. Dilna seated peacefully amidst the warm amber glow of sunset, watching the evening sun descend beside the Taj Mahal.",
      aspect: "landscape"
    },
    {
      id: 5,
      src: "assets/images/tajmahal/photo5_sunset_silhouette.jpg",
      title: "Twilight Embrace",
      caption: "An intimate silhouette of the couple softly outlined against the setting sun and shimmering reflection over the Yamuna.",
      aspect: "portrait"
    },
    {
      id: 6,
      src: "assets/images/tajmahal/photo6_twirl_joy.jpg",
      title: "A Whirl of Joy",
      caption: "Pure joy captured as Dr. Dilna twirls gracefully in her cascading gown with Dr. Mahshook smiling warmly beside her.",
      aspect: "landscape"
    }
  ],

  // Events Timeline for the Walima Celebration
  events: [
    {
      step: "01",
      title: "Guest Reception & Cordial Welcome",
      subtitle: "Welcoming Family & Friends",
      time: "12:00 PM Onwards",
      badgeText: "Welcome Reception",
      quote: "✦ Sunday, 6 December 2026 • 12:00 PM ✦",
      description: "Cordially welcoming our cherished family, friends, and esteemed guests to join us in honoring the sacred Walima celebration of Dr. Mahshook & Dr. Dilna.",
      rituals: ["Cordial Welcome", "Family Fellowship", "Festive Greetings"],
      locationName: "The White Oak Castle, Moodal",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=White+Oak+Castle+Convention+Centre+Moodal+Kerala"
    },
    {
      step: "02",
      title: "The Grand Walima Feast",
      subtitle: "Traditional Malabar Wedding Lunch",
      time: "12:30 PM Onwards",
      badgeText: "Celebration Feast",
      quote: "✦ Royal Hospitality & Flavors ✦",
      description: "Gather with us to savor a sumptuous traditional Malabar wedding feast prepared with love, warmth, and joyous fellowship.",
      rituals: ["Traditional Walima Lunch", "Celebration Dining", "Shared Happiness"],
      locationName: "The White Oak Castle, Moodal",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=White+Oak+Castle+Convention+Centre+Moodal+Kerala"
    },
    {
      step: "03",
      title: "Blessings, Du'a & Photo Moments",
      subtitle: "Heartfelt Prayers & Felicitations",
      time: "1:30 PM Onwards",
      badgeText: "Prayers & Felicitations",
      quote: "✦ Du'a & Eternal Blessings ✦",
      description: "Offer your heartfelt du'a and prayers for the newly wedded couple, share your warmest wishes, and capture timeless memories together.",
      rituals: ["Sincere Du'a", "Meet the Couple", "Timeless Memories"],
      locationName: "The White Oak Castle, Moodal",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=White+Oak+Castle+Convention+Centre+Moodal+Kerala"
    }
  ]
};

// Export to window
if (typeof window !== "undefined") {
  window.WEDDING_CONFIG = WEDDING_CONFIG;
}
