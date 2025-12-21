// --- Helper to get unique event names ---
const eventNames = [
  ...new Set([
    'Yantra', 'Riviera', 'Codeathon', 'Pregravitas', 'Gravitas', 'Guest lectures',
    'Outreach', 'Casa', 'Sdg', 'Curagen (since it is the whole thing )',
    'Comic muse(quality week it was )', 'Engineers for tomorrow (coz it was Engineers day)',
    'bidathon yantra', "visionary tales riviera'25", 'Quality Week - The Comic Muse',
    'Act for Impact : SDG Talks', 'industrial visit', 'Evolution of Modern Battery',
    'Embedded C with AI Code-a-thon', 'GenAI In motion', 'Curagen',
    'Blue Horizon: Endless Energy, Inspiring Young Stars', 'engineers for tomorrow',
    "enervision pregravitas'25", "grid grab gravitas'25", "twincontrol studio gravitas'25",
    'CASA: Breaking the Silence',
  ]),
];

// --- New Gallery Data Structure ---
export const galleryItems = eventNames.map((name) => {
  // Use the name to create a consistent set of placeholder images
  const seed = name.replace(/[^a-z0-9]/gi, ''); // Create a simple seed
  return {
    title: name,
    heroImage: `https://picsum.photos/seed/${seed}/800/600`, // The main image for the gallery
    images: [ // An array of images for the detail view
      `https://picsum.photos/seed/${seed}1/800/600`,
      `https://picsum.photos/seed/${seed}2/800/600`,
      `https://picsum.photos/seed/${seed}3/800/600`,
      `https://picsum.photos/seed/${seed}4/800/600`,
      `https://picsum.photos/seed/${seed}5/800/600`,
      `https://picsum.photos/seed/${seed}6/800/600`,
    ],
  };
});


// --- Navigation Data (Unchanged) ---
const SESI_BLACK = '#111111';
const SESI_YELLOW = '#F0E68C';

export const navData = {
  // ... (Your existing navData object)
  logo: 'https://via.placeholder.com/150x50.png?text=SESI-VIT', 
  items: [
    {
      label: 'About Us',
      bgColor: SESI_YELLOW,
      textColor: SESI_BLACK,
      links: [
        { label: 'Our Mission', href: '/about' },
        { label: 'The Team', href: '/team' },
        { label: 'History', href: '/history' },
      ],
    },
    {
      label: 'Events',
      bgColor: '#333333',
      textColor: SESI_YELLOW,
      links: [
        { label: 'Upcoming', href: '/events/upcoming' },
        { label: 'Past Events', href: '/events/past' },
        { label: 'Gallery', href: '/gallery' },
      ],
    },
    {
      label: 'Contact',
      bgColor: SESI_YELLOW,
      textColor: SESI_BLACK,
      links: [
        { label: 'Email Us', href: 'mailto:sesi@vit.ac.in' },
        { label: 'LinkedIn', href: '#' },
        { label: 'Instagram', href: '#' },
      ],
    },
  ],
};