export const suitesData = [
  // --- Harrisonburg Location ---
  {
    id: 'hbg-101',
    name: 'Suite 101',
    location: 'Harrisonburg',
    isAvailable: true,
    details: {
      size: '150 sq. ft.',
      features: ['Styling Chair Included', 'Large Window', 'Private Sink'],
      images: ['/images/Suite101.png', '/images/Suite101.png', '/images/Suite101.png']
    },
    tenant: null
  },
  {
    id: 'hbg-102',
    name: 'Suite 102',
    location: 'Harrisonburg',
    isAvailable: false,
    details: null,
    tenant: {
      name: 'Luxe Lashes by Liz',
      logo: '/logo/Omars-Logo-Crest.png',
      socialUrl: '#',
      specialty: 'Eyelash Extensions & Brow Lamination'
    }
  },
  {
    id: 'hbg-103',
    name: 'Suite 103',
    location: 'Harrisonburg',
    isAvailable: true,
    details: {
      size: '175 sq. ft.',
      features: ['Double-Wide Suite', 'Corner Views', 'Retail Shelving'],
      images: ['/images/Suite102.png', '/images/Suite102.png', '/images/Suite102.png']
    },
    tenant: null
  },
  {
    id: 'hbg-104',
    name: 'Suite 104',
    location: 'Harrisonburg',
    isAvailable: false,
    details: null,
    tenant: {
      name: 'The Nail Bar',
      logo: '/logo/Omars-Logo-Crest.png',
      socialUrl: '#',
      specialty: 'Manicures & Pedicures'
    }
  },

  // --- Coming Soon Location ---
  {
    id: 'soon-201',
    name: 'Suite 201',
    location: 'Coming Soon',
    isAvailable: true,
    details: null,
    tenant: null
  },
  {
    id: 'soon-202',
    name: 'Suite 202',
    location: 'Coming Soon',
    isAvailable: true,
    details: null,
    tenant: null
  }
];