# Implementation Plan — Fluid-Width Layout, Hash-Routing, and Premium Project Details
- [x] Add detailed case study data fields to PROJECTS in data/content.js
We will update the projects data to rename the flagship app to **Psage**, verify and enforce that ongoing/internal projects (**QDEL, MySkates, Grocery App, and Be Call CRM**) remain unlinked, adjust the desktop Bento Grid layout to perfectly balance 9 project cards, and generate/integrate premium mockup images for these sections.
- [x] Update Portfolio.jsx with card click handlers to trigger routes (with event propagation handling)
  - `[ ]` Update `index.css` (neon design vars, HUD elements, CRT scan lines)
Mode                 LastWriteTime         Length Name                                                                 
The following code has been modified to include a line number before every line, in the format: <line_number>: <original_line>. Please note that any changes targeting the original code should remove the line number, colon, and leading space.
> We will use standard React state combined with `window.location.hash` changes. This enables deep-linking (e.g. `/#/project/3` will open directly in the browser, supports the back/forward buttons, and is 100% stable in build production without needing server rewrites). 
> - **Internal/Ongoing Links**: As requested, the following projects will not have external links (their `url` will be set to `#` so they show 
![Updated Hero section with a 2-column layout showing the mock Code Editor, System Health Chart, and concentric orbits background](C:/Users/GRACE/.gemini/antigravity-ide/brain/1547ccb2-1fd9-4085-9e6b-d54068f9c922/hero_section
  - `[ ]` Update `Hero.jsx` (add Quantum Core, decrypting characters, sci-fi stats)
  - `[ ]` Update `Hero.css` (concentric rotating rings, core glow, laser grid scans)
>   - **Be Call CRM** (Internal calling app)
Mode                 LastWriteTime         Length Name                                                                 
>   - On desktop (3 columns), we will set **Card 1** to `row-span 2`, **Card 4** to `col-span 2`, and **Card 8** to `col-span 2`. This ensures that Card 9 perfectly fills the final slot in row 4, resulting in a balanced grid with no empty spaces.
103:     description: 'Corporate and industrial website with strong banner presentation and project-specific identity.',
    description: 'Splicing bio-organic networks to create high-throughput sub-neural grids with absolute latency containment.',
    description: 'Stunning, responsive websites crafted with modern frameworks. Fast loading, SEO-optimized, and built to convert visitors into customers.',
#### [MODIFY] [index.css](file:///c:/Users/GRACE/beposoft_website/src/index.css)
- Increase `--container-max` from `1200px` to `100%` (or a capped fluid limit like `1600px` to preserve readability on wide screens).
- Update `--container-padding` to `0 clamp(1.5rem, 6vw, 6rem)` to offer wider, high-end breathing margins on massive screens.
Mode                 LastWriteTime         Length Name                                                                 
    description: 'Assembling centralized logic matrix systems to govern multi-layered operational facility components.',
    description: 'Scalable web applications with robust backends, real-time features, and seamless user experiences that drive business growth.',
112:       '/images/image copy 27.png'
### Project Data & Content
114:     client: 'MEXPO Group',
#### [MODIFY] [content.js](file:///c:/Users/G
    description: 'Product catalogue, shopping cart, wishlist, payment gateways, stock systems, and delivery workflows.',
    description: 'Native and cross-platform Android apps with fluid animations, offline support, and Play Store optimization built in.',
118:     longDescription: 'MEXPO required a modern, performant web presence that would showcase their extensive industrial operations, manufacturing capability, and project catalog to global B2B clients.',
- [x] main.jsx update
    id: 'mobile-app',
    title: 'Neural Uplink Interfaces',
122:       { title: 'Interactive Project Catalog', desc: 'A custom, filterable media gallery showcasing industrial installations with high-resolution imagery and specifications.' },
123:       { title: 'B2B Inquiry Gateway', desc: 'A secure, responsive inquiry form connecting prospective clients directly with departmental heads for sales and partnerships.' },
124:       { title: 'Global SEO Optimization', desc: 'Highly optimized metadata structure and semantic HTML tags resulting in top search result listings for critical industry keywords.' }
125:     ]
    id: 'uiux',
    title: 'Holographic Synaptic UI',
    description: 'User-centered wireframes, mockups, interactive prototypes, and custom asset layouts built for conversions.',
    description: 'User-centered wireframes, mockups, interactive prototypes, and custom asset layouts built for conversions.',
#### [NEW] [becall_premium.png](file:///c:/Users/GRACE/beposoft_website/public/projects/becall_premium.png)
131:     description: 'E-commerce mobile app experience for cycling products and accessories with cart, wishlist, and payments.',
132:     tech: ['Flutter', 'Android SDK', 'iOS SDK'],
#### [NEW] [psage_premium.png](file:///c:/Users/GRACE/beposoft_website/public/projects/psage_premium.png)
    description: 'Scalable cloud infrastructure hosting, automated CI/CD pipelines, server operations, and database systems.',
135:     image: '/projects/bepocart_app.png',
#### [NEW] [myskates_premium.png](file:///c:/Users/GRACE/beposoft_website/public/projects/myskates_premium.png)
- Generate a premium mockup of a skating gear e-commerce shop page.
138:       '/images/image copy.png',
#### [NEW] [qdel_premium.png](file:///c:/Users/GRACE/beposoft_website/public/projects/qdel_premium.png)
- Generate a premium mockup of a delivery logistics mapping and tracking interface.
  { value: 50, suffix: '+', label: 'Happy Clients' },
#### [NEW] [grocery_premium.png](file:///c:/Users/GRACE/beposoft_website/public/projects/grocery_premium.png)
- Generate a premium mockup of a grocery web/mobile app interface with fresh items.
144:     role: 'Cross-platform Mobile Development',
145:     metrics: '10k+ Downloads, 4.8★ rating',
The above content does NOT show the entire file contents. If you need to view any lines of the file which were not shown to complete your task, call this tool again to view those lines.
export const PROCESS_STEPS = [
  - **Interactive Back Button**: Gliding back button updating hash back to `#/` (with smooth Framer Motion entrance).
  - **Split Details Layout**:
    - **Left Column**: High-fidelity timeline describing *The Challenge*, *The Solution*, and a grid of *Key Features* with bullet points/icons.
    description: 'We dive deep into your business goals, target audience, and technical requirements to create a strategic roadmap.',
  - **Interactive Preview Container**: Renders a mockup placeholder (e.g., an animated IDE workspace for Web Apps, browser device frame for Websites, or phone mockup for Mobile Apps) to make the details page extremely dynamic and professional.
  - **Bottom CTA**: Elegant, large call-to-action encouraging users to start a project with us, transitioning back to the Contact Form.
- Verify that the 9 cards fit together with no empty holes or alignment issues.
- Hover over each card to verify the interactive overlays and check that links are not present/disabled for Be Call, QDEL, MySkates, and Grocery App.
    description: 'Wireframes, modern interface design, and responsive layout planning.',
    description: 'Our designers craft stunning wireframes and prototypes, iterating with you until every pixel is perfect.',
    icon: 'PenTool',
  },
    step: 3,
    title: 'Development',
    description: 'Frontend, backend/API, database, admin panel, and mobile app coding.',
    description: 'Our engineers build your product using cutting-edge tech stacks with clean, maintainable, and tested code.',
- Run the website locally (`npm run dev`) and test container scaling by resizing the browser.
- Verify that clicking a project card changes the URL hash to `#/project/<id>` and renders the `ProjectDetails` view.
- Verify that clicking the 
- Verify that clicking 
    description: 'Functional testing, device testing, bug fixing, and performance checks.',
    description: 'Rigorous QA across devices, browsers, and edge cases. We ensure your product is bulletproof before launch.',
    icon: 'ShieldCheck',
  },
    step: 5,
Mode                 LastWriteTime         Length Name                                                                 
----                 -------------         ------ ----                                                                 
    description: 'We deploy, monitor, and optimize. Post-launch support ensures your product thrives in the real world.',
    icon: 'Rocket',
  },
    Directory: C:
    title: 'Support',
    description: 'Version updates, regular maintenance, backups, analytics, and feature enhancements.',
Mode                 LastWriteTime         Length Name                                                                 
----                 -------------         ------ ----                                                                 
-a----        06-03-2026  09.34 AM          24029 content.js                                                           

export const PROJECTS = [
export const PROJECTS = [
    id: 3,
    title: 'MEXPO Website',
Mode                 LastWriteTime         Length Name                                                                 
----                 -------------         ------ ----                                                                 
-a----        06-03-2026  09.34 AM          23645 content.js                                                           
    color: 'linear-gradient(135deg, #0d47a1, #1e88e5)',
    color: 'linear-gradient(135deg, #0d47a1, #1e88e5)',
    image: '/projects/mexpo.png',
    image: '/projects/mexpo.png',
      '/images/image copy 24.png',
Mode                 LastWriteTime         Length Name                                                                 
----                 -------------         ------ ----                                                                 
    longDescription: 'MEXPO required a modern, performant web presence that would showcase their extensive industrial operations, manufacturing capability, and project catalog to global B2B clients.',
    challenge: 'Their existing website was built on legacy templates, leading to slow loading speeds on mobile devices, suboptimal search engine rankings, and an interface that failed to convey their scale and professionalism.',
    solution: 'We engineered a responsive corporate website using React, optimized with asset preloading and lazy-loaded galleries. The solution includes a dynamic project presentation engine and an interactive product catalog.',
    tech: ['Flutter', 'Android SDK', 'iOS SDK'],
      { title: 'Interactive Project Catalog', desc: 'A custom, filterable media gallery showcasing industrial installations with high-resolution imagery and specifications.' },
      { title: 'B2B Inquiry Gateway', desc: 'A secure, responsive inquiry form connecting prospective clients directly with departm
    longDescription: 'MEXPO required a modern, performant web presence that would showcase their extensive industrial operations, manufacturing capability, and project catalog to global B2B clients.',
    challenge: 'Their existing website was built on legacy templates, leading to slow loading speeds on mobile devices, suboptimal search engine rankings, and an interface that failed to convey their scale and professionalism.',
    solution: 'We engineered a responsive corporate website using React, optimized with asset preloading and lazy-loaded galleries. The solution includes a dynamic project presentation engine and an interactive product catalog.',
    features: [
      { title: 'Interactive Project Catalog', desc: 'A custom, filterable media gallery showcasing industrial installations with high-resolution imagery and specifications.' },
      { title: 'B2B Inquiry Gateway', desc: 'A secure, responsive inquiry form connecting prospective clients directly with departmental heads for sales and partnerships.' },
      { title: 'Global SEO Optimization', desc: 'Highly optimized metadata structure and semantic HTML tags resulting in top search result listings for critical industry keywords.' }
    tech: ['React', 'Vite', 'TailwindCSS'],
    color: 'linear-gradient(135deg, #0f172a, #1e293b)',
    url: 'https://bepositiveracing.com/',
    id: 4,
    title: 'Bepocart Quantum Cache',
    category: 'Mobile Apps',
    description: 'E-commerce mobile app experience for cycling products and accessories with cart, wishlist, and payments.',
    tech: ['Flutter', 'Android SDK', 'iOS SDK'],
    description: 'Online store with product discovery, category navigation, cart flow, and conversion-focused UI.',
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
    color: 'linear-gradient(135deg, #1e293b, #475569)',
    url: 'https://apps.apple.com/us/app/psage/id6748010646',
    image: '/projects/beposoft_products.png',
  },
  {
    id: 5,
      { title: 'Seamless Payments', desc: 'Unified payment integration supporting credit cards, digital wallets, and UPI payments with absolute security.' },
      { title: 'Live Order Tracker', desc: 'Real-time order state progression tracking with automated push alerts from processing to courier delivery.' },
      { title: 'Wishlist & Cart Sync', desc: 'Cloud-synced user account states, enabling cart preservation across different mobile platforms and web sessions.' }
    tech: ['Flutter', 'Dart', 'Firebase'],
    color: 'linear-gradient(135deg, #0284c7, #38bdf8)',
    url: '#',
    image: '/projects/becall.png',
    title: 'Psage Operations Console',
    category: 'Mobile Apps',
    description: 'Complete internal business software operations system for billing, live inventory, and department workflows.',
    tech: ['React', 'Redux', 'Flutter', 'Android', 'iOS', 'Django'],
    color: 'linear-gradient(135deg, #1e293b, #475569)',
    description: 'Multi-purpose skating platform for shopping, community interaction, and used-product sales.',
    image: '/projects/beposoft_products.png',
    color: 'linear-gradient(135deg, #0d47a1, #64b5f6)',
      '/images/image copy 32.png',
    image: '/projects/myskates.png',
      '/images/image copy 34.png',
      '/images/image copy 35.png'
    id: 9,
    title: 'Grocery App',
    client: 'Beposoft Operations',
    description: 'An online grocery shopping platform with dynamic product grids, inventory pagination, and search capabilities.',
    role: 'Full Stack Enterprise Engineering',
    color: 'linear-gradient(135deg, #0284c7, #90caf9)',
    longDescription: 'Psage is an enterprise resource planning and workflow automation tool designed specifically to manage live billing systems, real-time inventory counts, and multi-department product movement logs.',
    challenge: 'The organization was managing operations through separated spreadsheets and legacy localized databases, causing inventory sync discrepancies, delayed reporting, and manual errors in billing.',
    solution: 'We engineered a centralized database and React dashboard that aggregates inventory telemetry and displays system status feeds in real-time.',
    company: 'RetailMax',
      { title: 'Live Asset Tracker', desc: 'Transactional audit trail of fuel cells and components across sectors, removing duplicate log conflicts.' },
      { title: 'Decryption Billing Portal', desc: 'Automated document compilers generating ledger sheets with multi-system conversion calculations.' },
    category: 'Mobile Apps',
    description: 'Smart delivery management platform for Local, Domestic, and International parcel operations.',
    tech: ['Flutter', 'Google Maps API', 'Node.js'],
    quote: 'Their UI/UX expertise completely changed how our users interact with our product. Conversion rates jumped 40% after the redesign.',
      '/images/image copy 7.png'
    image: '/projects/beposoft_logistics.png',
    role: 'Head of Product',
    description: 'Internal calling app for tracking BDO activity, call durations, hourly sessions, and sales reports.',
    tech: ['Flutter', 'Dart', 'Firebase'],
    role: 'Mobile CRM Engineering',
    metrics: '2.5x Active Lead Follow-ups',
    longDescription: 'Be Call CRM is a specialized mobile calling app designed for business development officers (BDOs) to manage sales outbound communication, log contact interactions, and report daily progress indicators.',
    challenge: 'Sales leadership lacked clear visibility into outbound lead follow-up durations, success metrics, and daily engagement schedules, making sales strategy optimization difficult.',
    solution: 'We developed a Flutter application that links securely with telephony services to log call sessions, track durations, and sync sales logs to a centralized cloud dashboard in real time.',
    color: 'linear-gradient(135deg, #0284c7, #90caf9)',
      { title: 'Intelligent Call Logs', desc: 'Automated logging of business call durations and timestamp summaries directly syncable to customer profiles.' },
      { title: 'Sales Performance Metrics', desc: 'Dashboard tracking active dialing hours, success call rates, and prospective lead feedback grids.' },
      { title: 'Daily Scheduler Integration', desc: 'Smart lead follow-up calendars that send push notifications to BDOs when contacts are due for a touchpoint.' }
  { name: 'Figma', icon: 'figma' },
  { name: 'PostgreSQL', icon: 'postgresql' },
    metrics: '99% Search Index Accuracy',
    longDescription: 'A dynamic online supermarket web application crafted to deliver smooth product browsing, responsive inventory pagination, and localized category exploration.',
    challenge: 'Legacy search indexing systems struggled to handle large catalogs of perishable products, leading to slow rendering times and page timeouts when listing inventory items.',
    solution: 'We designed a backend architecture in Python/Django utilizing database caching and indexed search structures. This ensures rapid data transmission even during peak concurrent traffic sessions.',
    description: 'An online grocery shopping platform with dynamic product grids, inventory pagination, and search capabilities.',
      { title: 'Dynamic Pagination Filter', desc: 'Advanced pagination logic that updates lists instantly based on brand, price points, and fresh stock arrivals.' },
      { title: 'Smart Search Auto-suggest', desc: 'Predictive keyword match algorithm offering instant product suggestions as the user types.' },
      { title: 'Dynamic Delivery Scheduler', desc: 'Localized delivery slot assignment checking capacity bounds to assure punctual food delivery.' }
    image: '/projects/grocery_app.png',
    bio: 'Full-stack architect specializing in scalable cloud-native applications.',
      '/images/image copy 8.png',
    role: 'Backend Engineering & API Design',
    metrics: '99% Search Index Accuracy',
    longDescription: 'A dynamic online supermarket web application crafted to deliver smooth product browsing, responsive inventory pagination, and localized category exploration.',
    challenge: 'Legacy search indexing systems struggled to handle large catalogs of perishable products, leading to slow rendering times and page timeouts when listing inventory items.',
    solution: 'We designed a backend architecture in Python/Django utilizing database caching and indexed search structures. This ensures rapid data transmission even during peak concurrent traffic sessions.',
    description: 'An online grocery shopping platform with dynamic product grids, inventory pagination, and search capabilities.',
      { title: 'Dynamic Pagination Filter', desc: 'Advanced pagination logic that updates lists instantly based on brand, price points, and fresh stock arrivals.' },
      { title: 'Smart Search Auto-suggest', desc: 'Predictive keyword match algorithm offering instant product suggestions as the user types.' },
    longDescription: 'A dynamic online supermarket web application crafted to deliver smooth product browsing, responsive inventory pagination, and localized category exploration.',
    challenge: 'Legacy search indexing systems struggled to handle large catalogs of perishable products, leading to slow rendering times and page timeouts when listing inventory items.',
    solution: 'We designed a backend architecture in Python/Django utilizing database caching and indexed search structures. This ensures rapid data transmission even during peak concurrent traffic sessions.',
    bio: 'Cross-platform expert with a deep love for performance and pixel-perfect UIs.',
      { title: 'Dynamic Pagination Filter', desc: 'Advanced pagination logic that updates lists instantly based on brand, price points, and fresh stock arrivals.' },
  'MongoDB', 'AWS', 'Kubernetes', 'Docker', 'PostgreSQL',
  'TypeScript', 'GraphQL', 'Figma', 'Kotlin', 'Next.js',
    name: 'Emma Thompson',
      { title: 'Immersive Video Headers', desc: 'Fluid HTML5 video backdrops that load asynchronously, maintaining optimal page loading speeds.' },
      { title: 'Interactive Race Timeline', desc: 'An animated schedule tracking historical podium finishes, active championship standings, and upcoming circuits.' },
      { title: 'Sponsor Engagement Portal', desc: 'A dedicated, high-conversion section outlining partnership assets and contact pathways for corporate branding.' }
  tagline: 'Crafting digital experiences that drive growth.',
    quote: 'Their UI/UX expertise completely changed how our users interact with our product. Conversion rates jumped 40% after the redesign.',
    longDescription: 'A dynamic online supermarket web application crafted to deliver smooth product browsing, responsive inventory pagination, and localized category exploration.',
    challenge: 'Legacy search indexing systems struggled to handle large catalogs of perishable products, leading to slow rendering times and page timeouts when listing inventory items.',
    solution: 'We designed a backend architecture in Python/Django utilizing database caching and indexed search structures. This ensures rapid data transmission even during peak concurrent traffic sessions.',
    category: 'Mobile Apps',
      { title: 'Dynamic Pagination Filter', desc: 'Advanced pagination logic that updates lists instantly based on brand, price points, and fresh stock arrivals.' },
      { title: 'Smart Search Auto-suggest', desc: 'Predictive keyword match algorithm offering instant product suggestions as the user types.' },
      { title: 'Dynamic Delivery Scheduler', desc: 'Localized delivery slot assignment checking capacity bounds to assure punctual food delivery.' }
  location: 'San Francisco, CA',
    bio: 'Visionary leader with 10+ years in software engineering and product strategy.',
    name: 'Alex Morgan',
    client: 'MySkates Community',
    bio: 'Visionary leader with 10+ years in software engineering and product strategy.',
    role: 'Mobile Architecture & Payment Systems',
    description: 'Premium brand landing page with bold typography, strong visual identity, and clean navigation.',
    longDescription: 'A specialized social-commerce mobile app developed for roller skating and skateboarding enthusiasts, offering equipment shopping, community hub discussions, and a peer-to-peer used gear marketplace.',
    challenge: 'Connecting community discussions with direct product checkouts, and establishing a safe, authenticated marketplace workflow where users can buy and sell used skating gear.',
    solution: 'We built the mobile app utilizing Flutter and Firebase, featuring secure database isolation and a Stripe Connect integration to facilitate safe buyer-to-seller payment distributions.',
    client: 'Bepositive Racing Team',
      { title: 'P2P Gear Marketplace', desc: 'Listing workflow with user upload flows, photo moderation assets, and automated category matching.' },
      { title: 'Community Activity Hub', desc: 'Social channels where users can share skate spot reviews, coordinate meetups, and post video clips.' },
      { title: 'Stripe Escrow Gateway', desc: 'Safe transaction flow that holds funds securely until shipment tracking confirms parcel delivery.' }
    longDescription: 'A high-impact, premium brand presentation site engineered for a professional motorsport racing team. The site presents athlete biographies, race event schedules, and corporate sponsorship portfolios.',
    challenge: 'The client needed a digital presentation that conveyed high energy, speed, and premium design standards to engage fans and attract corporate sponsorship investments.',
    solution: 'We built a dark-themed visual landing page utilizing Vite, React, and custom-tailored Framer Motion assets. We designed custom interactive cards and sleek typography modules.',
    role: 'Tech Lead',
      { title: 'Immersive Video Headers', desc: 'Fluid HTML5 video backdrops that load asynchronously, maintaining optimal page loading speeds.' },
      { title: 'Interactive Race Timeline', desc: 'An animated schedule tracking historical podium finishes, active championship standings, and upcoming circuits.' },
      { title: 'Sponsor Engagement Portal', desc: 'A dedicated, high-conversion section outlining partnership assets and contact pathways for corporate branding.' }
    tech: ['Flutter', 'Google Maps API', 'Node.js'],
    bio: 'Cross-platform expert with a deep love for performance and pixel-perfect UIs.',
    name: 'Lisa Chen',
    image: '/projects/qdel.jpg',
    bio: 'Cross-platform expert with a deep love for performance and pixel-perfect UIs.',
    category: 'Mobile Apps',
    description: 'Multi-purpose skating platform for shopping, community interaction, and used-product sales.',
    tech: ['Flutter', 'Firebase', 'Stripe'],
    longDescription: 'QDEL is a logistical dispatch and parcel delivery management application supporting delivery routes across local, domestic, and international shipping channels.',
    challenge: 'Establishing dynamic route calculations for couriers, integrating GPS tracking that doesn
    solution: 'We engineered a Flutter mobile client backed by a Node.js route-optimization API. The system utilizes low-power geo-location package
  'React', 'Node.js', 'Flutter', 'Swift', 'Firebase',
  'MongoDB', 'AWS', 'Kubernetes', 'Docker', 'PostgreSQL',
    description: 'Multi-purpose skating platform for shopping, community interaction, and used-product sales.',
  'MongoDB', 'AWS', 'Kubernetes', 'Docker', 'PostgreSQL',
  tagline: 'Crafting digital experiences that drive growth.',
  email: 'info@beposoft.com',
    image: '/projects/myskates.png',
  tagline: 'Crafting digital experiences that drive growth.',
      '/images/image copy 12.png',
  tagline: 'Crafting digital experiences that drive growth.',
  location: 'Kochi, Kerala, India',
      '/images/image copy 15.png'
  location: 'Kochi, Kerala, India',
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
export const TECHNOLOGIES = [
    description: 'Smart delivery management platform for Local, Domestic, and International parcel operations.',
      { title: 'GPS Live Location Sync', desc: 'Real-time parcel location transmission allowing customers to monitor delivery vehicles on interactive maps.' },
      { title: 'Digital Signature Handover', desc: 'Paperless confirmation of receipt via on-screen signature and immediate digital invoice receipt emailing.' }
  { name: 'Firebase', icon: 'firebase' },
    image: '/projects/qdel.png',
  { name: 'MongoDB', icon: 'mongodb' },
  { name: 'Swift', icon: 'swift' },
  { name: 'Kotlin', icon: 'kotlin' },
  { name: 'Figma', icon: 'figma' },
    description: 'Online store with product discovery, category navigation, cart flow, and conversion-focused UI.',
    tech: ['Next.js', 'React', 'PostgreSQL'],
    color: 'linear-gradient(135deg, #16a34a, #22c55e)',
    url: 'https://bepocart.com/',
    role: 'Lead Architect & Mobile Engineer',
    metrics: '94% Telemetry Dispatch Success',
    longDescription: 'QDEL is a logistical dispatch and parcel delivery management application supporting delivery routes across local, domestic, and international shipping channels.',
    challenge: 'Traditional dispatch chains fail when a singular courier encounters engine delays, stalling the packet flow.',
    solution: 'We engineered a Flutter mobile client backed by a Node.js route-optimization API. The system utilizes low-power geo-location packages and auto-suggests parcel documentation.',
      '/images/image copy 23.png'
      { title: 'Dynamic Route Optimization', desc: 'Smart algorithms plotting fastest routes checking live traffic flows, saving courier fuel and transit times.' },
      { title: 'GPS Live Location Sync', desc: 'Real-time parcel location transmission allowing customers to monitor delivery vehicles on interactive maps.' },
      { title: 'Digital Signature Handover', desc: 'Paperless confirmation of receipt via on-screen signature and immediate digital invoice receipt emailing.' }
    role: 'Lead Frontend Web Engineering',
    quote: 'The mobile app they built for us received a 4.8-star rating within the first month. The team was responsive, creative, and delivered ahead of schedule.',
    longDescription: 'Bepocart Website is a highly scalable storefront optimized for search engines and high traffic loads, designed to showcase cycling products and skate inventory online.',
    challenge: 'Maximizing performance, lowering Time-to-First-Byte (TTFB) to retain search engine visibility, and delivering a responsive checkout flow to reduce abandoned shopping carts.',
    solution: 'We built the storefront in Next.js using Server-Side Rendering (SSR) for product listing pages. We built a customized Redis cache layer and customized checkout screens.',
    category: 'Web Apps',
    description: 'Online store with product discovery, category navigation, cart flow, and conversion-focused UI.',
    tech: ['Next.js', 'React', 'PostgreSQL'],
    color: 'linear-gradient(135deg, #16a34a, #22c55e)',
    quote: 'Working with Beposoft felt like having an in-house team. They understood our vision perfectly and built exactly what we needed — no compromises.',
    image: '/projects/bepocart_website.png',
    company: 'RetailMax',
      '/images/image copy 20.png',
      '/images/image copy 21.png',
      '/images/image copy 22.png',
      '/images/image copy 23.png'
    company: 'RetailMax',
    quote: 'Their UI/UX expertise completely changed how our users interact with our product. Conversion rates jumped 40% after the redesign.',
    duration: '5 Months',
    role: 'Lead Frontend Web Engineering',
    metrics: '45% Conversion Rate Improvement',
    rating: 5,
    quote: 'Their UI/UX expertise completely changed how our users interact with our product. Conversion rates jumped 40% after the redesign.',
    name: 'David Park',
    company: 'CloudNova',
    role: 'Head of Product',
    rating: 5,
    name: 'Alex Morgan',
    role: 'Founder & CEO',
    bio: 'Visionary leader with 10+ years in software engineering and product strategy.',
export const TEAM = [
    github: '#',
export const TECHNOLOGIES = [
  { name: 'React', icon: 'react' },
    quote: 'Their UI/UX expertise completely changed how our users interact with our product. Conversion rates jumped 40% after the redesign.',
  { name: 'HTML5', icon: 'html' },
    bio: 'Award-winning designer passionate about creating delightful user experiences.',
  { name: 'Tailwind CSS', icon: 'tailwindcss' },
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'Flutter', icon: 'flutter' },
  { name: 'Node.js', icon: 'nodejs' },
    bio: 'Award-winning designer passionate about creating delightful user experiences.',
  { name: 'AWS', icon: 'aws' },
    bio: 'Full-stack architect specializing in scalable cloud-native applications.',
  { name: 'Swift', icon: 'swift' },
  { name: 'Kotlin', icon: 'kotlin' },
    bio: 'Visionary leader with 10+ years in software engineering and product strategy.',
  { name: 'PostgreSQL', icon: 'postgresql' },
    bio: 'Full-stack architect specializing in scalable cloud-native applications.',
  { name: 'Python', icon: 'python' },
    bio: 'Cross-platform expert with a deep love for performance and pixel-perfect UIs.',
    name: 'Priya Sharma',
export const TESTIMONIALS = [
    bio: 'Award-winning designer passionate about creating delightful user experiences.',
    role: 'Mobile Lead',
    bio: 'Cross-platform expert with a deep love for performance and pixel-perfect UIs.',
export const MARQUEE_ITEMS = [
  'React', 'Node.js', 'Flutter', 'Swift', 'Firebase',
    quote: 'Beposoft transformed our outdated platform into a modern, lightning-fast web application. Their attention to detail and commitment to quality exceeded all expectations.',
  'TypeScript', 'GraphQL', 'Figma', 'Kotlin', 'Next.js',
    bio: 'Full-stack architect specializing in scalable cloud-native applications.',
export const MARQUEE_ITEMS = [
  'React', 'Next.js', 'Node.js', 'Flutter', 'Swift', 'Firebase',
  'MongoDB', 'AWS', 'PostgreSQL', 'Tailwind CSS', 'Bootstrap',
  'JavaScript', 'TypeScript', 'HTML5', 'GraphQL', 'Figma', 'Kotlin', 'Kubernetes', 'Docker',
  email: 'info@beposoft.com',
    quote: 'The mobile app they built for us received a 4.8-star rating within the first month. The team was responsive, creative, and delivered ahead of schedule.',
    bio: 'Cross-platform expert with a deep love for performance and pixel-perfect UIs.',
    company: 'HealthBridge',
  tagline: 'Crafting digital experiences that drive growth.',
  email: 'info@beposoft.com',
    company: 'RetailMax',
  location: 'Kochi, Kerala, India',
export const MARQUEE_ITEMS = [
  'React', 'Next.js', 'Node.js', 'Flutter', 'Swift', 'Firebase',
  'MongoDB', 'AWS', 'PostgreSQL', 'Tailwind CSS', 'Bootstrap',
  'JavaScript', 'TypeScript', 'HTML5', 'GraphQL', 'Figma', 'Kotlin', 'Kubernetes', 'Docker',
    quote: 'Their UI/UX expertise completely changed how our users interact with our product. Conversion rates jumped 40% after the redesign.',
    bio: 'Visionary leader with 10+ years in software engineering and product strategy.',
export const COMPANY_INFO = {
    role: 'Head of Product',
  tagline: 'Crafting digital experiences that drive growth.',
    quote: 'Their UI/UX expertise completely changed how our users interact with our product. Conversion rates jumped 40% after the redesign.',
    name: 'Priya Sharma',
  location: 'Kochi, Kerala, India',
    bio: 'Award-winning designer passionate about creating delightful user experiences.',
    linkedin: '#',
    name: 'Alex Morgan',
    role: 'Founder & CEO',
    bio: 'Visionary leader with 10+ years in software engineering and product strategy.',
export const TEAM = [
export const MARQUEE_ITEMS = [
  'React', 'Next.js', 'Node.js', 'Flutter', 'Swift', 'Firebase',
  'MongoDB', 'AWS', 'PostgreSQL', 'Tailwind CSS', 'Bootstrap',
  'JavaScript', 'TypeScript', 'HTML5', 'GraphQL', 'Figma', 'Kotlin', 'Kubernetes', 'Docker',
    role: 'Lead Designer',
    bio: 'Award-winning designer passionate about creating delightful user experiences.',
export const COMPANY_INFO = {
  name: 'ALOS Command',
  tagline: 'Reverse-engineering advanced alien software architectures.',
  email: 'uplink@beposoft.com',
    bio: 'Award-winning designer passionate about creating delightful user experiences.',
  location: 'Sector 5 Classified Lab, Kerala, India',
    bio: 'Full-stack architect specializing in scalable cloud-native applications.',
    linkedin: '#',
    github: '#',
    name: 'James Wilson',
    role: 'Tech Lead',
    bio: 'Full-stack architect specializing in scalable cloud-native applications.',
    role: 'Mobile Lead',
    bio: 'Cross-platform expert with a deep love for performance and pixel-perfect UIs.',
    linkedin: '#',
    github: '#',
    name: 'Lisa Chen',
    role: 'Mobile Lead',
    bio: 'Cross-platform expert with a deep love for performance and pixel-perfect UIs.',
export const MARQUEE_ITEMS = [
  'React', 'Next.js', 'Node.js', 'Flutter', 'Swift', 'Firebase',
  'MongoDB', 'AWS', 'PostgreSQL', 'Tailwind CSS', 'Bootstrap',
  'JavaScript', 'TypeScript', 'HTML5', 'GraphQL', 'Figma', 'Kotlin', 'Kubernetes', 'Docker',
];
export const MARQUEE_ITEMS = [
  'React', 'Next.js', 'Node.js', 'Flutter', 'Swift', 'Firebase',
  'MongoDB', 'AWS', 'PostgreSQL', 'Tailwind CSS', 'Bootstrap',
  'JavaScript', 'TypeScript', 'HTML5', 'GraphQL', 'Figma', 'Kotlin', 'Kubernetes', 'Docker',
  email: 'info@beposoft.com',
  phone: '81578 45851',
  location: 'Kochi, Kerala, India',
  name: 'Beposoft',
  tagline: 'Crafting digital experiences that drive growth.',
  email: 'aazimn321@gmail.com',
  phone: '81578 45851',
  location: 'Kochi, Kerala, India',
  social: {
    linkedin: 'https://www.linkedin.com/company/michael-exportand-import-pvt-ltd/',
    github: '#',
    twitter: '#',
    instagram: 'https://www.instagram.com/mexpogroup?igsh=MXNxZG56dTRwcjNiMQ==',
  },
};

