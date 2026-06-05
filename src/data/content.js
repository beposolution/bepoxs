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
    title: 'Cloud & DevOps',
    description: 'Scalable cloud infrastructure hosting, automated CI/CD pipelines, server operations, and database systems.',
    icon: 'Cloud',
  },
];

export const STATS = [
  { value: 25, suffix: '+', label: 'Projects Delivered' },
  { value: 10, suffix: '+', label: 'Happy Clients' },
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
    tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
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
    tech: ['Flutter', 'Android SDK', 'iOS SDK', 'Django', 'Python'],
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
    longDescription: 'An e-commerce mobile application designed to offer cycling enthusiasts a seamless shopping journey for premium bicycles, components, skating gear, and active apparel.',
    challenge: 'Developing a unified code structure that performs natively on both Android and iOS devices, with fast product rendering, secure checkout logic, and support for push notifications to boost customer retention.',
    solution: 'We built a high-performance cross-platform app using Flutter. We implemented localized state management, a secure payment gateway bridge, and an offline-first shopping cart sync module.',
    features: [
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
    tech: ['React', 'Redux', 'Flutter', 'Android', 'iOS', 'Django'],
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
    challenge: 'The organization was managing operations through separated spreadsheets and legacy localized databases, causing inventory sync discrepancies, delayed reporting, and manual errors in billing.',
    solution: 'We built a centralized Node.js and PostgreSQL backend paired with an interactive React frontend interface. We established transactional ledger pipelines to enforce absolute consistency in inventory states.',
    features: [
      { title: 'Real-Time Inventory Ledger', desc: 'Transactional tracking of stock movements across departments, removing dual-allocation errors and sync delays.' },
      { title: 'Automated Billing Portal', desc: 'Instant PDF invoice generator with multi-currency tax calculators and historical payment tracking.' },
      { title: 'Dynamic Access Roles', desc: 'Granular workspace permissions for sales, inventory managers, auditors, and executive teams.' }
    ]
  },
  {
    id: 5,
    title: 'Be Call CRM',
    category: 'Mobile Apps',
    description: 'Internal calling app for tracking BDO activity, call durations, hourly sessions, and sales reports.',
    tech: ['Flutter', 'Dart', 'Firebase', 'Django', 'Android', 'iOS'],
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
    duration: '3 Months',
    role: 'Mobile CRM Engineering',
    metrics: '2.5x Active Lead Follow-ups',
    longDescription: 'Be Call CRM is a specialized mobile calling app designed for business development officers (BDOs) to manage sales outbound communication, log contact interactions, and report daily progress indicators.',
    challenge: 'Sales leadership lacked clear visibility into outbound lead follow-up durations, success metrics, and daily engagement schedules, making sales strategy optimization difficult.',
    solution: 'We developed a Flutter application that links securely with telephony services to log call sessions, track durations, and sync sales logs to a centralized cloud dashboard in real time.',
    features: [
      { title: 'Intelligent Call Logs', desc: 'Automated logging of business call durations and timestamp summaries directly syncable to customer profiles.' },
      { title: 'Sales Performance Metrics', desc: 'Dashboard tracking active dialing hours, success call rates, and prospective lead feedback grids.' },
      { title: 'Daily Scheduler Integration', desc: 'Smart lead follow-up calendars that send push notifications to BDOs when contacts are due for a touchpoint.' }
    ]
  },
  {
    id: 9,
    title: 'Grocery App',
    category: 'Web Apps',
    description: 'An online grocery shopping platform with dynamic product grids, inventory pagination, and search capabilities.',
    tech: ['Django', 'Python', 'SQLite', 'Flutter'],
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
    image: '/projects/bepositiveracing.png',
    images: [
      '/images/image copy 28.png',
      '/images/image copy 29.png',
      '/images/image copy 30.png',
      '/images/image copy 31.png'
    ],
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
    url: '#',
    image: '/projects/myskates.png',
    images: [
      '/images/image copy 12.png',
      '/images/image copy 13.png',
      '/images/image copy 14.png',
      '/images/image copy 15.png'
    ],
    contain: true,
    client: 'MySkates Community',
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
    longDescription: 'QDEL is a multi-role parcel delivery management platform designed for local, domestic, and international logistics operations. It connects clients, carrier shops, and delivery carriers in a single ecosystem — enabling flexible drop-off and pickup workflows while ensuring every stakeholder is compensated automatically at each stage of the delivery chain.',
    challenge: 'Traditional delivery systems are rigid — a single carrier handles the full route or the parcel sits undelivered.',
    solution: 'QDEL was built to solve the last-mile problem by introducing a shop-based relay model, where parcels move across carriers and hubs seamlessly, without losing track of accountability or earnings at any handoff point.',
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
    longDescription: 'Bepocart Website is a highly scalable storefront optimized for search engines and high traffic loads, designed to showcase cycling products and skate inventory online.',
    challenge: 'Maximizing performance, lowering Time-to-First-Byte (TTFB) to retain search engine visibility, and delivering a responsive checkout flow to reduce abandoned shopping carts.',
    solution: 'We built the storefront in Next.js using Server-Side Rendering (SSR) for product listing pages. We built a customized Redis cache layer and customized checkout screens.',
    features: [
      { title: 'Server-Side Rendering (SSR)', desc: 'Instant product page loading with pre-rendered server nodes, yielding index ratings for Google SEO bots.' },
      { title: 'Smart Search & Filters', desc: 'High-speed search capability parsing category matrices and product tags to return accurate results in milliseconds.' },
      { title: 'Secure One-Page Checkout', desc: 'A frictionless checkout design combining address autocompletion and multiple secure gateways to minimize buyer drop-offs.' }
    ]
  }
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
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'Docker', icon: 'docker' },
  { name: 'GraphQL', icon: 'graphql' },
];

export const TESTIMONIALS = [
  {
    id: 1,
    quote: 'Beposoft transformed our outdated platform into a modern, lightning-fast web application. Their attention to detail and commitment to quality exceeded all expectations.',
    name: 'Sarah Chen',
    company: 'FinTech Solutions Inc.',
    role: 'CTO',
    rating: 5,
  },
  {
    id: 2,
    quote: 'The mobile app they built for us received a 4.8-star rating within the first month. The team was responsive, creative, and delivered ahead of schedule.',
    name: 'Michael Rivera',
    company: 'HealthBridge',
    role: 'Product Manager',
    rating: 5,
  },
  {
    id: 3,
    quote: 'Working with Beposoft felt like having an in-house team. They understood our vision perfectly and built exactly what we needed — no compromises.',
    name: 'Emma Thompson',
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
    linkedin: 'https://www.linkedin.com/company/michael-exportand-import-pvt-ltd/',
    github: '#',
    twitter: '#',
    instagram: 'https://www.instagram.com/mexpogroup?igsh=MXNxZG56dTRwcjNiMQ=='
  },
};
