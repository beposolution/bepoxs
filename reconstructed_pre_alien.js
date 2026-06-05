// ===========================
// BEPOSOFT — SITE CONTENT DATA
// ===========================

export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'Technologies', href: '#technologies' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES = [
  {
    id: 'web-dev',
    title: 'Website Development',
    description: 'Responsive business websites, landing pages, portfolio sites, and SEO-ready pages crafted with clean UI.',
    icon: 'Globe',
  },
  {
    id: 'web-app',
    title: 'Web App Development',
    description: 'Admin panels, dashboards, CRM/ERP modules, workflow systems, and custom operational business tools.',
    icon: 'Monitor',
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Platforms',
    description: 'Product catalogue, shopping cart, wishlist, payment gateways, stock systems, and delivery workflows.',
    icon: 'Briefcase',
  },
  {
    id: 'mobile-app',
    title: 'Mobile App Development',
    description: 'Android and iOS apps with polished UI, API integrations, logins, push alerts, and app store deployment.',
    icon: 'Smartphone',
  },
  {
    id: 'uiux',
    title: 'UI/UX Design',
    description: 'User-centered wireframes, mockups, interactive prototypes, and custom asset layouts built for conversions.',
    icon: 'Palette',
  },
  {
    id: 'cloud',
];

export const PROCESS_STEPS = [
  {
    step: 1,
    title: 'Discovery',
    description: 'We dive deep into your business goals, target audience, and technical requirements to create a strategic roadmap.',
    icon: 'Search',
  },
  {
    step: 2,
    title: 'Design',
    description: 'Our designers craft stunning wireframes and prototypes, iterating with you until every pixel is perfect.',
    icon: 'PenTool',
  },
  {
    step: 3,
    title: 'Development',
    description: 'Our engineers build your product using cutting-edge tech stacks with clean, maintainable, and tested code.',
    icon: 'Code',
  },
  {
    step: 4,
    title: 'Testing',
    description: 'Rigorous QA across devices, browsers, and edge cases. We ensure your product is bulletproof before launch.',
    icon: 'ShieldCheck',
  },
  {
    step: 5,
    title: 'Launch',
    description: 'We deploy, monitor, and optimize. Post-launch support ensures your product thrives in the real world.',
    icon: 'Rocket',
  },
];

export const PROJECTS = [
  {
  },
];

export const PROJECTS = [
  {
    id: 3,
    title: 'MEXPO Website',
    category: 'Websites',
    description: 'Corporate and industrial website with strong banner presentation and project-specific identity.',
    tech: ['React', 'Node.js', 'Express'],
    color: 'linear-gradient(135deg, #0d47a1, #1e88e5)',
    url: 'http://mexpo.org/',
    image: '/projects/mexpo.png',
    images: [
      '/images/image copy 24.png',
      '/images/image copy 25.png',
      '/images/image copy 26.png',
      '/images/image copy 27.png'
    ],
    client: 'MEXPO Group',
    duration: '2.5 Months',
    role: 'Frontend Development & UI/UX Design',
    metrics: '99.9% Uptime & 2x Load Speed',
    longDescription: 'MEXPO required a modern, performant web presence that would showcase their extensive industrial operations, manufacturing capability, and project catalog to global B2B clients.',
    challenge: 'Their existing website was built on legacy templates, leading to slow loading speeds on mobile devices, suboptimal search engine rankings, and an interface that failed to convey their scale and professionalism.',
    solution: 'We engineered a responsive corporate website using React, optimized with asset preloading and lazy-loaded galleries. The solution includes a dynamic project presentation engine and an interactive product catalog.',
    features: [
      { title: 'Interactive Project Catalog', desc: 'A custom, filterable media gallery showcasing industrial installations with high-resolution imagery and specifications.' },
      { title: 'B2B Inquiry Gateway', desc: 'A secure, responsive inquiry form connecting prospective clients directly with departmental heads for sales and partnerships.' },
      { title: 'Global SEO Optimization', desc: 'Highly optimized metadata structure and semantic HTML tags resulting in top search result listings for critical industry keywords.' }
    ]
  },
  {
    id: 4,
    title: 'Bepocart App',
    category: 'Mobile Apps',
    description: 'E-commerce mobile app experience for cycling products and accessories with cart, wishlist, and payments.',
    tech: ['Flutter', 'Android SDK', 'iOS SDK'],
    color: 'linear-gradient(135deg, #84cc16, #a3e635)',
    url: 'https://play.google.com/store/apps/details?id=com.bepocart.bepocart&hl=en_IN',
    image: '/projects/bepocart_app.png',
    images: [
      '/images/image.png',
      '/images/image copy.png',
      '/images/image copy 2.png',
      '/images/image copy 3.png'
    ],
    client: 'Bepocart Ventures',
    duration: '4 Months',
    role: 'Cross-platform Mobile Development',
    metrics: '10k+ Downloads, 4.8★ rating',
      { title: 'Seamless Payments', desc: 'Unified payment integration supporting credit cards, digital wallets, and UPI payments with absolute security.' },
      { title: 'Live Order Tracker', desc: 'Real-time order state progression tracking with automated push alerts from processing to courier delivery.' },
      { title: 'Wishlist & Cart Sync', desc: 'Cloud-synced user account states, enabling cart preservation across different mobile platforms and web sessions.' }
    ]
  },
  {
    id: 6,
    title: 'Psage',
    category: 'Mobile Apps',
    description: 'Complete internal business software operations system for billing, live inventory, and department workflows.',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    color: 'linear-gradient(135deg, #4088ed, #0eb9fb)',
    url: 'https://apps.apple.com/us/app/psage/id6748010646',
    image: '/projects/beposoft_products.png',
    images: [
      '/images/image copy 32.png',
      '/images/image copy 33.png',
      '/images/image copy 34.png',
      '/images/image copy 35.png'
    ],
    contain: true,
    client: 'Beposoft Operations',
    duration: '8 Months',
    role: 'Full Stack Enterprise Engineering',
    metrics: '35% Operational Efficiency Gain',
    longDescription: 'Psage is an enterprise resource planning and workflow automation tool designed specifically to manage live billing systems, real-time inventory counts, and multi-department product movement logs.',
    challenge: 'The organi
    name: 'Emma Thompson',
    company: 'RetailMax',
    role: 'CEO',
    rating: 5,
  },
  {
    id: 4,
    quote: 'Their UI/UX expertise completely changed how our users interact with our product. Conversion rates jumped 40% after the redesign.',
    id: 5,
    title: 'Be Call CRM',
    category: 'Mobile Apps',
    description: 'Internal calling app for tracking BDO activity, call durations, hourly sessions, and sales reports.',
    tech: ['Flutter', 'Dart', 'Firebase'],
    color: '#010000',
    url: '#',
    image: '/projects/becall.png',
    images: [
      '/images/image copy 4.png',
      '/images/image copy 5.png',
      '/images/image copy 6.png',
      '/images/image copy 7.png'
    ],
    contain: true,
    client: 'Beposoft Sales Group',
    name: 'Priya Sharma',
    role: 'Lead Designer',
    bio: 'Award-winning designer passionate about creating delightful user experiences.',
    linkedin: '#',
    github: '#',
  },
  {
    name: 'James Wilson',
    role: 'Tech Lead',
    bio: 'Full-stack architect specializing in scalable cloud-native applications.',
    linkedin: '#',
    github: '#',
  },
  {
    title: 'Grocery App',
    category: 'Web Apps',
    description: 'An online grocery shopping platform with dynamic product grids, inventory pagination, and search capabilities.',
    tech: ['Django', 'Python', 'SQLite'],
    color: 'linear-gradient(135deg, #059669, #34d399)',
    url: '#',
    image: '/projects/grocery_app.png',
    images: [
      '/images/image copy 8.png',
      '/images/image copy 9.png',
      '/images/image copy 10.png',
      '/images/image copy 11.png'
    ],
    forcePhone: true,
    client: 'GreenCart Retailers',
    duration: '2 Months',
    role: 'Backend Engineering & API Design',
    metrics: '99% Search Index Accuracy',
    longDescription: 'A dynamic online supermarket web application crafted to deliver smooth product browsing, responsive inventory pagination, and localized category exploration.',
    challenge: 'Legacy search indexing systems struggled to handle large catalogs of perishable products, leading to slow rendering times and page timeouts when listing inventory items.',
    solution: 'We designed a backend architecture in Python/Django utilizing database caching and indexed search structures. This ensures rapid data transmission even during peak concurrent traffic sessions.',
    features: [
      { title: 'Dynamic Pagination Filter', desc: 'Advanced pagination logic that updates lists instantly based on brand, price points, and fresh stock arrivals.' },
      { title: 'Smart Search Auto-suggest', desc: 'Predictive keyword match algorithm offering instant product suggestions as the user types.' },
      { title: 'Dynamic Delivery Scheduler', desc: 'Localized delivery slot assignment checking capacity bounds to assure punctual food delivery.' }
    ]
  },
  {
    id: 1,
    title: 'Bepositive Racing',
    category: 'Websites',
    description: 'Premium brand landing page with bold typography, strong visual identity, and clean navigation.',
    tech: ['React', 'Vite', 'TailwindCSS'],
    color: 'linear-gradient(135deg, #0f172a, #1e293b)',
    url: 'https://bepositiveracing.com/',
    github: '#',
  },
  {
    name: 'James Wilson',
    role: 'Tech Lead',
    bio: 'Full-stack architect specializing in scalable cloud-native applications.',
    linkedin: '#',
    github: '#',
  },
  {
    name: 'Lisa Chen',
    role: 'Mobile Lead',
    bio: 'Cross-platform expert with a deep love for performance and pixel-perfect UIs.',
    linkedin: '#',
    github: '#',
  },
];

export const MARQUEE_ITEMS = [
  'React', 'Node.js', 'Flutter', 'Swift', 'Firebase',
  {
    id: 7,
    title: 'MySkates App',
    category: 'Mobile Apps',
    description: 'Multi-purpose skating platform for shopping, community interaction, and used-product sales.',
    tech: ['Flutter', 'Firebase', 'Stripe'],
    color: '#022123',
    url: '#',
    image: '/projects/myskates.png',
    images: [
      '/images/image copy 12.png',
      '/images/image copy 13.png',
      '/images/image copy 14.png',
      '/images/image copy 15.png'
    ],
    contain: true,
};
    duration: '5 Months',
    role: 'Mobile Architecture & Payment Systems',
    metrics: '5k+ Active Community Members',
    longDescription: 'A specialized social-commerce mobile app developed for roller skating and skateboarding enthusiasts, offering equipment shopping, community hub discussions, and a peer-to-peer used gear marketplace.',
    challenge: 'Connecting community discussions with direct product checkouts, and establishing a safe, authenticated marketplace workflow where users can buy and sell used skating gear.',
    solution: 'We built the mobile app utilizing Flutter and Firebase, featuring secure database isolation and a Stripe Connect integration to facilitate safe buyer-to-seller payment distributions.',
    features: [
      { title: 'P2P Gear Marketplace', desc: 'Listing workflow with user upload flows, photo moderation assets, and automated category matching.' },
      { title: 'Community Activity Hub', desc: 'Social channels where users can share skate spot reviews, coordinate meetups, and post video clips.' },
      { title: 'Stripe Escrow Gateway', desc: 'Safe transaction flow that holds funds securely until shipment tracking confirms parcel delivery.' }
    ]
  },
  {
    id: 8,
    title: 'QDEL App',
    category: 'Mobile Apps',
    description: 'Smart delivery management platform for Local, Domestic, and International parcel operations.',
    tech: ['Django', 'Flutter', 'Google Maps API', 'REST API', 'iOS & Android'],
    color: 'linear-gradient(135deg, #ee5858ff, #f63b3bff)',
    url: '#',
    image: '/projects/qdel.png',
    images: [
      '/images/image copy 16.png',
      '/images/image copy 17.png',
      '/images/image copy 18.png',
      '/images/image copy 19.png'
    ],
    client: 'QDEL Logistical Solutions',
    duration: '6 Months',
    role: 'Lead Architect & Mobile Engineer',
    metrics: '94% On-time Delivery Rate',
    longDescription: 'QDEL is a logistical dispatch and parcel delivery management application supporting delivery routes across local, domestic, and international shipping channels.',
    challenge: 'Establishing dynamic route calculations for couriers, integrating GPS tracking that doesn\'t drain mobile batteries, and managing custom declarations for international parcels.',
    solution: 'We engineered a Flutter mobile client backed by a Node.js route-optimization API. The system utilizes low-power geo-location packages and auto-suggests parcel documentation.',
    features: [
      { title: 'Dynamic Route Optimization', desc: 'Smart algorithms plotting fastest routes checking live traffic flows, saving courier fuel and transit times.' },
      { title: 'GPS Live Location Sync', desc: 'Real-time parcel location transmission allowing customers to monitor delivery vehicles on interactive maps.' },
      { title: 'Digital Signature Handover', desc: 'Paperless confirmation of receipt via on-screen signature and immediate digital invoice receipt emailing.' }
    ]
  },
  {
    id: 2,
    title: 'Bepocart Website',
    category: 'Web Apps',
];

export const TECHNOLOGIES = [
  { name: 'React', icon: 'react' },
  { name: 'Next.js', icon: 'nextjs' },
  { name: 'HTML5', icon: 'html' },
  { name: 'Bootstrap', icon: 'bootstrap' },
  { name: 'Tailwind CSS', icon: 'tailwindcss' },
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'Flutter', icon: 'flutter' },
  { name: 'Node.js', icon: 'nodejs' },
  { name: 'Firebase', icon: 'firebase' },
  { name: 'AWS', icon: 'aws' },
  { name: 'MongoDB', icon: 'mongodb' },
  { name: 'Swift', icon: 'swift' },
  { name: 'Kotlin', icon: 'kotlin' },
  { name: 'Figma', icon: 'figma' },
  { name: 'PostgreSQL', icon: 'postgresql' },
  { name: 'Django', icon: 'django' },
  { name: 'Python', icon: 'python' },
];

export const TESTIMONIALS = [
  {
    company: 'RetailMax',
    role: 'CEO',
    rating: 5,
  },
  {
    company: 'RetailMax',
    role: 'CEO',
    rating: 5,
  },
  {
    id: 4,
    quote: 'Their UI/UX expertise completely changed how our users interact with our product. Conversion rates jumped 40% after the redesign.',
    name: 'David Park',
    company: 'CloudNova',
    role: 'Head of Product',
    rating: 5,
  },
];

export const TEAM = [
  {
    name: 'Alex Morgan',
    role: 'Founder & CEO',
    bio: 'Visionary leader with 10+ years in software engineering and product strategy.',
    linkedin: '#',
    github: '#',
  },
  {
    name: 'Priya Sharma',
    role: 'Lead Designer',
    bio: 'Award-winning designer passionate about creating delightful user experiences.',
    linkedin: '#',
    github: '#',
  },
  {
    name: 'James Wilson',
    role: 'Tech Lead',
    bio: 'Full-stack architect specializing in scalable cloud-native applications.',
    linkedin: '#',
    github: '#',
  },
  {
    name: 'Lisa Chen',
    role: 'Mobile Lead',
    bio: 'Cross-platform expert with a deep love for performance and pixel-perfect UIs.',
    linkedin: '#',
    github: '#',
  },
];

export const MARQUEE_ITEMS = [
  'React', 'Next.js', 'Node.js', 'Flutter', 'Swift', 'Firebase',
  'MongoDB', 'AWS', 'PostgreSQL', 'Tailwind CSS', 'Bootstrap',
  'JavaScript', 'TypeScript', 'HTML5', 'GraphQL', 'Figma', 'Kotlin', 'Kubernetes', 'Docker',
];

export const COMPANY_INFO = {
  name: 'Beposoft',
  tagline: 'Crafting digital experiences that drive growth.',
  email: 'info@beposoft.com',
  phone: '81578 45851',
  location: 'Kochi, Kerala, India',
  social: {
    linkedin: '#',
    github: '#',
    twitter: '#',
    instagram: '#',
  },
};

