// ============================================================
// 👽 ALOS // CLASSIFIED OPERATIONS DATABASE (content.js)
// ============================================================

export const NAV_LINKS = [
  { label: 'Sectors', href: '#services' },
  { label: 'Artifacts', href: '#portfolio' },
  { label: 'Protocols', href: '#process' },
  { label: 'Power Grid', href: '#technologies' },
  { label: 'Uplink', href: '#contact' },
];

export const SERVICES = [
  {
    id: 'web-dev',
    title: 'Quantum Grid Core',
    description: 'Splicing bio-organic networks to create high-throughput sub-neural grids with absolute latency containment.',
    icon: 'Globe',
  },
  {
    id: 'web-app',
    title: 'Sub-Dimensional Controllers',
    description: 'Assembling centralized logic matrix systems to govern multi-layered operational facility components.',
    icon: 'Monitor',
  },
  {
    id: 'ecommerce',
    title: 'Extraterrestrial Ledgers',
    description: 'Enforcing absolute transactional consistency using secure quantum cryptographic token exchanges.',
    icon: 'Briefcase',
  },
  {
    id: 'mobile-app',
    title: 'Neural Uplink Interfaces',
    description: 'Designing high-fidelity telemetry sync receivers for sub-dermal node terminals and smart uplinks.',
    icon: 'Smartphone',
  },
  {
    id: 'uiux',
    title: 'Holographic Synaptic UI',
    description: 'User-centered wireframes, mockups, interactive prototypes, and custom asset layouts built for conversions.',
    icon: 'Palette',
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    description: 'Scalable cloud infrastructure hosting, automated CI/CD pipelines, server operations, and database systems.',
    icon: 'Cloud',
  },
];

export const STATS = [
  { value: 150, suffix: '+', label: 'Projects Delivered' },
  { value: 50, suffix: '+', label: 'Happy Clients' },
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 10, suffix: '+', label: 'Team Members' },
];

export const PROCESS_STEPS = [
  {
    step: 1,
    title: 'Discovery',
    description: 'Requirement study, business flow, feature planning, and platform selection.',
    icon: 'Search',
  },
  {
    step: 2,
    title: 'UI/UX Design',
    description: 'Wireframes, modern interface design, and responsive layout planning.',
    icon: 'Palette',
  },
  {
    step: 3,
    title: 'Development',
    description: 'Frontend, backend/API, database, admin panel, and mobile app coding.',
    icon: 'Code',
  },
  {
    step: 4,
    title: 'Testing',
    description: 'Functional testing, device testing, bug fixing, and performance checks.',
    icon: 'ShieldCheck',
  },
  {
    step: 5,
    title: 'Deployment',
    description: 'Website hosting, domain/SSL setup, and Play Store / App Store release support.',
    icon: 'Rocket',
  },
  {
    step: 6,
    title: 'Support',
    description: 'Version updates, regular maintenance, backups, analytics, and feature enhancements.',
    icon: 'Settings',
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
    client: 'MEXPO Operations',
    duration: '2.5 Cycles',
    role: 'Primary Cryptographic Engineer',
    metrics: '99.9% Core Stability',
    longDescription: 'MEXPO required a secure, classified portal capable of broadcasting manufacturing blueprints, logistics data, and asset inventories to authorized interstellar agents.',
    challenge: 'Legacy telemetry portals leaked telemetry packet structures, caused excessive buffer loads during grid bursts, and suffered from bad query resolution speeds.',
    solution: 'We engineered a responsive, high-performance secure grid network powered by vanilla assets. We established microcode buffers and built responsive diagnostic views.',
    features: [
      { title: 'Telemetry Archive', desc: 'Custom database interface indexing mineral production outputs, raw component weights, and transport cycles.' },
      { title: 'Secure Handoff Protocol', desc: 'Secure connection logs forwarding sales and partnership signals directly to department nodes.' },
      { title: 'Semantic HUD Indexes', desc: 'Top-tier diagnostic indexing allowing rapid queries for interstellar operations codes.' }
    ]
  },
  {
    id: 4,
    title: 'Bepocart Quantum Cache',
    category: 'Mobile Apps',
    description: 'E-commerce mobile app experience for premium skating components, speed accessories, and apparel.',
tech: ['Flutter', 'Android', 'iOS'],
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
    image: '/projects/beposoft_products.png',
  },
  {
  id: 5,
  title: 'Bepocart Quantum Cache',
  features: [
    {
      title: 'Seamless Payments',
      desc: 'Unified payment integration supporting credit cards, digital wallets, and UPI payments.'
    },
    {
      title: 'Live Order Tracker',
      desc: 'Real-time order state progression tracking.'
    },
    {
      title: 'Wishlist & Cart Sync',
      desc: 'Cloud-synced user account states.'
    }
  ]
},
  {
    id: 6,
    title: 'Psage Operations Console',
    category: 'Mobile Apps',
    description: 'Complete internal business operations system for billing, live inventory, and sector workflows.',
    tech: ['React', 'Redux', 'Flutter', 'Android', 'iOS', 'Django'],
    color: 'linear-gradient(135deg, #4f46e5, #06b6d4)',
    url: 'https://apps.apple.com/us/app/psage/id6748010646',
    image: '/projects/beposoft_products.png',
    images: [
      '/images/image copy 32.png',
      '/images/image copy 33.png',
      '/images/image copy 34.png',
      '/images/image copy 35.png'
    ],
    contain: true,
    client: 'ALOS Command Center',
    duration: '8.0 Cycles',
    role: 'Central Architecture Director',
    metrics: '35% Core Processing Gain',
    longDescription: 'Psage is an enterprise resource diagnostic tool engineered to monitor multi-department inventory flow, allocate fuel cells, and generate live transaction manifests.',
    challenge: 'Research sectors were logging operations in detached paper logs, leading to supply leaks, database desynchronization, and bad resource metrics.',
    solution: 'We engineered a centralized database and React dashboard that aggregates inventory telemetry and displays system status feeds in real-time.',
    features: [
      { title: 'Live Asset Tracker', desc: 'Transactional audit trail of fuel cells and components across sectors, removing duplicate log conflicts.' },
      { title: 'Decryption Billing Portal', desc: 'Automated document compilers generating ledger sheets with multi-system conversion calculations.' },
    images: [
      '/images/image copy 4.png',
      '/images/image copy 5.png',
      '/images/image copy 6.png',
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
  {
    id: 9,
    title: 'Grocery App',
    category: 'Web Apps',
    description: 'An online grocery shopping platform with dynamic product grids, inventory pagination, and search capabilities.',
    tech: ['Django', 'Python', 'SQLite'],
    color: 'linear-gradient(135deg, #0284c7, #90caf9)',
    url: '#',
    image: '/projects/grocery_app.png',
    images: [
      '/images/image copy 8.png',
      '/images/image copy 9.png',
      '/images/image copy 10.png',
      '/images/image copy 11.png'
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
    client: 'Bepositive Racing Team',
    duration: '1.5 Months',
    role: 'UI/UX Design & Frontend Development',
    metrics: '40% Bounce Rate Reduction',
    longDescription: 'A high-impact, premium brand presentation site engineered for a professional motorsport racing team. The site presents athlete biographies, race event schedules, and corporate sponsorship portfolios.',
    challenge: 'The client needed a digital presentation that conveyed high energy, speed, and premium design standards to engage fans and attract corporate sponsorship investments.',
    solution: 'We built a dark-themed visual landing page utilizing Vite, React, and custom-tailored Framer Motion assets. We designed custom interactive cards and sleek typography modules.',
    features: [
      { title: 'Immersive Video Headers', desc: 'Fluid HTML5 video backdrops that load asynchronously, maintaining optimal page loading speeds.' },
      { title: 'Interactive Race Timeline', desc: 'An animated schedule tracking historical podium finishes, active championship standings, and upcoming circuits.' },
      { title: 'Sponsor Engagement Portal', desc: 'A dedicated, high-conversion section outlining partnership assets and contact pathways for corporate branding.' }
    ]
  },
  {
    id: 7,
    title: 'MySkates App',
    category: 'Mobile Apps',
    description: 'Multi-purpose skating platform for shopping, community interaction, and used-product sales.',
    tech: ['Flutter', 'Firebase', 'Stripe'],
    color: '#022123',
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
    linkedin: '#',
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
    title: 'QDEL Dispatch Router',
    category: 'Mobile Apps',
    description: 'Smart logistics routing system managing courier coordinates and local distribution loops.',
    tech: ['Django', 'Flutter', 'Google Maps API', 'REST API', 'iOS & Android'],
    color: 'linear-gradient(135deg, #4c0519, #881337)',
    url: '#',
    image: '/projects/qdel.png',
    images: [
      '/images/image copy 16.png',
      '/images/image copy 17.png',
      '/images/image copy 18.png',
      '/images/image copy 19.png'
    ],
    client: 'QDEL Logistical Bureau',
    duration: '6.0 Cycles',
    role: 'Systems Architect',
    metrics: '94% Telemetry Dispatch Success',
    longDescription: 'QDEL is a logistics routing system connecting courier vehicles, merchant terminals, and local distribution hubs in a singular telemetry grid.',
    challenge: 'Traditional dispatch chains fail when a singular courier encounters engine delays, stalling the packet flow.',
    solution: 'We programmed a dynamic relay mapping model where logistics packages transfer smoothly between active couriers at designated depots.',
    features: [
      { title: 'GPS Vector Optimisation', desc: 'Routing models calculating shortest paths checking live traffic blockages, saving fuel.' },
      { title: 'Dynamic Location Broadcast', desc: 'Live gps transmissions mapping vehicle coordinates onto terminal screens.' },
      { title: 'Signature Handover Protocol', desc: 'Secure signature confir
    ]
  },
  {
    id: 2,
    title: 'Bepocart Website',
    category: 'Web Apps',
    description: 'Online store with product discovery, category navigation, cart flow, and conversion-focused UI.',
    tech: ['Next.js', 'React', 'PostgreSQL'],
    color: 'linear-gradient(135deg, #16a34a, #22c55e)',
    url: 'https://bepocart.com/',
    image: '/projects/bepocart_website.png',
    images: [
      '/images/image copy 20.png',
      '/images/image copy 21.png',
      '/images/image copy 22.png',
      '/images/image copy 23.png'
    ],
    client: 'Bepocart Commerce Group',
    duration: '5 Months',
    role: 'Lead Frontend Web Engineering',
    metrics: '45% Conversion Rate Improvement',
    id: 4,
    quote: 'Their UI/UX expertise completely changed how our users interact with our product. Conversion rates jumped 40% after the redesign.',
    name: 'David Park',
    company: 'CloudNova',
    role: 'Head of Product',
    rating: 5,
  },
    company: 'RetailMax',
    role: 'CEO',
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
    id: 1,
    quote:
      'Beposoft transformed our outdated platform into a modern, lightning-fast web application. Their attention to detail and commitment to quality exceeded all expectations.',
    name: 'Sarah Chen',
    company: 'FinTech Solutions Inc.',
    role: 'CTO',
    rating: 5,
  },
  {
    id: 2,
    quote:
      'The mobile app they built for us received a 4.8-star rating within the first month. The team was responsive, creative, and delivered ahead of schedule.',
    name: 'Michael Rivera',
    company: 'HealthBridge',
    role: 'Product Manager',
    rating: 5,
  },
  {
    id: 3,
    quote:
      'Their UI/UX expertise completely changed how our users interact with our product. Conversion rates jumped 40% after the redesign.',
    name: 'David Park',
    company: 'CloudNova',
    role: 'Head of Product',
    rating: 5,
  },
];

// export const TEAM = [
//   {
//     name: 'Alex Morgan',
//     role: 'Founder & CEO',
//     bio: 'Visionary leader with 10+ years in software engineering and product strategy.',
//     linkedin: '#',
//     github: '#',
//   },
//   {
//     name: 'Priya Sharma',
//     role: 'Lead Designer',
//     bio: 'Award-winning designer passionate about creating delightful user experiences.',
//     linkedin: '#',
//     github: '#',
//   },
// ];

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
    name: 'Lisa Chen',
    role: 'Mobile Lead',
    bio: 'Cross-platform expert with a deep love for performance and pixel-perfect UIs.',
    linkedin: '#',
    github: '#',
  },
];

// export const MARQUEE_ITEMS = [
//   'React', 'Next.js', 'Node.js', 'Flutter', 'Swift', 'Firebase',
//   'MongoDB', 'AWS', 'PostgreSQL', 'Tailwind CSS', 'Bootstrap',
//   'JavaScript', 'TypeScript', 'HTML5', 'GraphQL', 'Figma', 'Kotlin', 'Kubernetes', 'Docker',
// ];

export const MARQUEE_ITEMS = [
  'React',
  'Next.js',
  'Node.js',
  'Flutter',
  'Swift',
  'Firebase',
  'MongoDB',
  'AWS',
  'PostgreSQL',
  'Tailwind CSS',
  'Bootstrap',
  'JavaScript',
  'TypeScript',
  'HTML5',
  'GraphQL',
  'Figma',
  'Kotlin',
  'Kubernetes',
  'Docker',
];

export const COMPANY_INFO = {
  name: 'Beposoft',
  tagline: 'Crafting digital experiences that drive growth.',
  email: 'aazimn321@gmail.com',
  phone: '81578 45851',
  location: 'Kochi, Kerala, India',
  social: {
    linkedin: '#',
    github: '#',
    twitter: '#',
    instagram: '#',
  },
};

//   },
//   {
//     name: 'Lisa Chen',
//     role: 'Mobile Lead',
//     bio: 'Cross-platform expert with a deep love for performance and pixel-perfect UIs.',
//     linkedin: '#',
//     github: '#',
//   },
// ];

// export const MARQUEE_ITEMS = [
//   'React', 'Next.js', 'Node.js', 'Flutter', 'Swift', 'Firebase',
//   'MongoDB', 'AWS', 'PostgreSQL', 'Tailwind CSS', 'Bootstrap',
//   'JavaScript', 'TypeScript', 'HTML5', 'GraphQL', 'Figma', 'Kotlin', 'Kubernetes', 'Docker',
// ];

// export const COMPANY_INFO = {
//   name: 'Beposoft',
//   tagline: 'Crafting digital experiences that drive growth.',
//   email: 'aazimn321@gmail.com',
//   phone: '81578 45851',
//   location: 'Kochi, Kerala, India',
//   social: {
//     linkedin: '#',
//     github: '#',
//     twitter: '#',
//     instagram: '#',
//   },
// };

