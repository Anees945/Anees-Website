import {
  DeveloperProfile,
  TrustValueItem,
  ServiceItem,
  SkillItem,
  ToolPlatformItem,
  ProjectItem,
  CertificateItem,
  ValuePropItem,
  ReviewItem,
} from '../types';

export const initialProfile: DeveloperProfile = {
  name: 'Anees Shahbaz',
  title: 'Website Developer',
  primaryPositioning:
    'I build modern websites and digital solutions that help businesses establish a strong online presence and improve the way they serve their customers.',
  shortDescription:
    'Anees Shahbaz is a Website Developer focused on creating modern, responsive, user-friendly websites and custom web solutions for businesses, entrepreneurs, and personal brands.',
  corePhilosophy: "Don't just sell a website — solve the business problem.",
  aboutIntro:
    "I’m Anees Shahbaz, a Website Developer focused on building modern, responsive, and practical web solutions. I work with modern development platforms and tools to create business websites, e-commerce experiences, custom dashboards, and web applications.",
  aboutPhilosophy:
    "My approach is simple: understand the business problem first, then build the right digital solution around it. Modern websites should do more than look good — they should help businesses attract customers, communicate clearly, receive inquiries, manage information, and improve their digital presence.",
  aboutGrowth:
    "I’m continuously improving my development skills, learning new technologies, and building real-world projects to strengthen my experience. I believe in honest craftsmanship, responsive design, and practical functionality.",
  profileImage: '/anees-shahbaz.jpg',
  email: 'aneesqadri836@gmail.com',
  whatsapp: '+92 [Your WhatsApp Number]',
  phone: '+92 [Your Phone Number]',
  location: 'Pakistan (Available for Remote Work Worldwide)',
  availability: 'Open for Business Projects & Custom Development',
  socials: {
    github: '',
    linkedin: '',
    instagram: '',
    other: '',
  },
};

export const trustValuesData: TrustValueItem[] = [
  {
    id: 'trust-1',
    title: 'Business-Focused Development',
    description:
      'Websites engineered not just for aesthetics, but to solve real operational bottlenecks, capture customer inquiries, and drive conversions.',
    iconName: 'Target',
    badge: 'Outcome Driven',
  },
  {
    id: 'trust-2',
    title: 'Responsive & Modern Interfaces',
    description:
      'Mobile-first layouts tested across smartphones, tablets, and desktops for quick loading, clean typography, and intuitive UX.',
    iconName: 'Smartphone',
    badge: 'Mobile First',
  },
  {
    id: 'trust-3',
    title: 'Custom Digital Solutions',
    description:
      'Tailored functionality from WhatsApp lead routing and booking forms to database-connected inventory systems and custom dashboards.',
    iconName: 'Sliders',
    badge: 'Tailored Workflows',
  },
  {
    id: 'trust-4',
    title: 'Continuous Learning',
    description:
      'Actively exploring cutting-edge web platforms, backend tools, and AI-assisted automation to bring modern solutions to client projects.',
    iconName: 'Zap',
    badge: 'Modern Tooling',
  },
];

export const servicesData: ServiceItem[] = [
  {
    id: 'srv-1',
    number: '01',
    title: 'Business Website Development',
    shortDesc:
      'Modern, credible websites built for salons, restaurants, clinics, local businesses, and service providers.',
    fullDesc:
      'High-impact web presences tailored to help local companies and professional services build immediate trust with visitors, showcase their services, display operating hours, and turn casual visitors into inquiries.',
    iconName: 'Briefcase',
    features: [
      'Tailored business branding and service showcases',
      'Location, operating hours, and Google Maps integration',
      'Fast-loading responsive design for mobile visitors',
      'Clear call-to-action buttons for phone and WhatsApp inquiries',
    ],
    idealFor: 'Salons, clinics, restaurants, retail shops, local consultants & contractors',
  },
  {
    id: 'srv-2',
    number: '02',
    title: 'E-commerce Website Development',
    shortDesc:
      'Online stores with structured product catalogs, shopping functionality, order handling, and mobile-friendly design.',
    fullDesc:
      'Turn products into digital storefronts with structured catalogs, category filters, cart functionality, seamless checkout flows, and practical order management that simplifies online retail.',
    iconName: 'ShoppingBag',
    features: [
      'Product listings with images, variants, and descriptions',
      'Intuitive shopping cart and customer order placement',
      'Mobile-optimized browsing and frictionless checkout',
      'Inventory and order tracking for business owners',
    ],
    idealFor: 'Retailers, boutique brands, product merchants, and direct-to-consumer businesses',
  },
  {
    id: 'srv-3',
    number: '03',
    title: 'Website Redesign',
    shortDesc:
      'Modernize outdated websites with fresh layouts, improved mobile responsiveness, clean UI, and better performance.',
    fullDesc:
      'Revamp slow, cluttered, or non-responsive legacy websites. We rethink visual presentation, optimize touch interactions on smartphones, clean up confusing navigation, and bring the site up to modern design standards.',
    iconName: 'RefreshCw',
    features: [
      'Visual overhaul with modern typography and sleek aesthetics',
      'Complete responsiveness overhaul across all screen sizes',
      'Restructured page layouts for clarity and readability',
      'Faster load times and optimized media assets',
    ],
    idealFor: 'Businesses with aging, slow, or difficult-to-navigate existing websites',
  },
  {
    id: 'srv-4',
    number: '04',
    title: 'Custom Website Features',
    shortDesc:
      'Practical business add-ons including WhatsApp chat, booking systems, custom forms, payment integration, and dashboards.',
    fullDesc:
      'Upgrade standard websites with purpose-built interactive features that automate repetitive tasks and make customer communication effortless.',
    iconName: 'Sliders',
    features: [
      'One-click WhatsApp floating chat and pre-filled inquiry buttons',
      'Interactive customer booking and appointment reservation systems',
      'Custom multi-step inquiry and quote request forms',
      'Payment gateways, product management, and order notifications',
    ],
    idealFor: 'Any business seeking to automate lead intake, bookings, or sales workflows',
  },
  {
    id: 'srv-5',
    number: '05',
    title: 'Admin Dashboard Development',
    shortDesc:
      'Custom management dashboards for products, services, customers, orders, inventory, and business data.',
    fullDesc:
      'Equip your team with intuitive back-office panels to view real-time data, manage inventory levels, process incoming customer requests, and track business operations without technical headaches.',
    iconName: 'LayoutDashboard',
    features: [
      'Secure administrative panels with role-specific views',
      'Product, service, and inventory status management',
      'Customer contact records and order processing stages',
      'Visual status badges and actionable operational metrics',
    ],
    idealFor: 'Store managers, clinic operators, and business owners managing internal data',
  },
  {
    id: 'srv-6',
    number: '06',
    title: 'Custom Web Applications',
    shortDesc:
      'Practical web applications engineered around your unique business workflow, database requirements, and user needs.',
    fullDesc:
      'When off-the-shelf software doesn’t fit how your business works, we engineer custom web applications that mirror your exact business processes, store structured records, and save manual hours.',
    iconName: 'Layers',
    features: [
      'Relational database integration (e.g. Supabase, cloud tables)',
      'Multi-user workflows with custom permissions',
      'Dynamic data filtering, search, and sorting systems',
      'Automated status updates and communication links',
    ],
    idealFor: 'Businesses needing custom internal tools, tracking systems, or specialized platforms',
  },
  {
    id: 'srv-7',
    number: '07',
    title: 'AI-Powered Business Solutions',
    shortDesc:
      'AI-assisted workflows, automated customer assistants, and smart data pipelines that streamline business operations.',
    fullDesc:
      'Harness practical AI capabilities such as WhatsApp automated response agents, knowledge-base lookups via Google Sheets/n8n, and intelligent customer intake flows that operate 24/7.',
    iconName: 'Sparkles',
    features: [
      'AI customer inquiry assistants with service/pricing knowledge',
      'n8n workflow automations connecting web forms with spreadsheets',
      'Automated inquiry sorting and instant notifications',
      'Smart customer query answering based on business FAQ databases',
    ],
    idealFor: 'Businesses receiving high volumes of repetitive inquiries on WhatsApp and web',
  },
];

export const skillsData: SkillItem[] = [
  { id: 'sk-1', name: 'Website Development', category: 'core', featured: true },
  { id: 'sk-2', name: 'Responsive Web Design', category: 'core', featured: true },
  { id: 'sk-3', name: 'Business Websites', category: 'core', featured: true },
  { id: 'sk-4', name: 'E-commerce Websites', category: 'core', featured: true },
  { id: 'sk-5', name: 'Portfolio Websites', category: 'core' },
  { id: 'sk-6', name: 'Website Redesign', category: 'core', featured: true },
  { id: 'sk-7', name: 'Custom Web Features', category: 'features', featured: true },
  { id: 'sk-8', name: 'Admin Dashboard Development', category: 'features', featured: true },
  { id: 'sk-9', name: 'Database-Connected Web Applications', category: 'features', featured: true },
  { id: 'sk-10', name: 'UI/UX-focused Website Development', category: 'core', featured: true },
  { id: 'sk-11', name: 'Mobile-Friendly Design', category: 'core' },
  { id: 'sk-12', name: 'WhatsApp Integration', category: 'features', featured: true },
  { id: 'sk-13', name: 'Contact Forms', category: 'features' },
  { id: 'sk-14', name: 'Booking Systems', category: 'features', featured: true },
  { id: 'sk-15', name: 'Payment Integration', category: 'features' },
  { id: 'sk-16', name: 'Product / Inventory Management Systems', category: 'features', featured: true },
  { id: 'sk-17', name: 'AI-powered Web Solutions', category: 'features', featured: true },
];

export const toolsPlatformsData: ToolPlatformItem[] = [
  {
    id: 'tool-1',
    name: 'Google AI Studio',
    role: 'AI Prototyping & Models',
    category: 'AI Platform',
    iconName: 'Cpu',
    usedFor: 'Developing AI assistant logic, prompt design, and intelligent business workflows.',
  },
  {
    id: 'tool-2',
    name: 'Lovable',
    role: 'Rapid Web App Building',
    category: 'Web Builder',
    iconName: 'Sparkles',
    usedFor: 'Building responsive full-stack web prototypes and modern user interfaces.',
  },
  {
    id: 'tool-3',
    name: 'Replit',
    role: 'Cloud Development',
    category: 'Dev Environment',
    iconName: 'Terminal',
    usedFor: 'Coding, testing web applications, hosting services, and backend experimentation.',
  },
  {
    id: 'tool-4',
    name: 'Google Stitch',
    role: 'Workflow Integration',
    category: 'Cloud Tools',
    iconName: 'Network',
    usedFor: 'Connecting cloud services, data handling, and automated web solutions.',
  },
  {
    id: 'tool-5',
    name: 'Supabase',
    role: 'Database & Backend',
    category: 'Database Backend',
    iconName: 'Database',
    usedFor: 'PostgreSQL database hosting, user authentication, and real-time backend state.',
  },
  {
    id: 'tool-6',
    name: 'n8n',
    role: 'Automation & Orchestration',
    category: 'Workflow Automation',
    iconName: 'Workflow',
    usedFor: 'Building multi-step automation pipelines connecting webhooks, WhatsApp, and databases.',
  },
  {
    id: 'tool-7',
    name: 'Google Sheets',
    role: 'Dynamic Knowledge Base',
    category: 'Data Management',
    iconName: 'Table',
    usedFor: 'Serving as accessible knowledge bases and operational spreadsheets for AI bots.',
  },
  {
    id: 'tool-8',
    name: 'Hostinger',
    role: 'Web Hosting & Deployment',
    category: 'Hosting & Domains',
    iconName: 'Server',
    usedFor: 'Hosting production websites, domain configuration, SSL, and server management.',
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: 'proj-1',
    number: '01',
    title: 'Multi-Business Inventory Management System',
    category: 'webapp',
    categoryLabel: 'Custom Web Application',
    subtitle: 'Tailored inventory, product, and sales workflows for retail & healthcare',
    conceptNote:
      'A multi-business inventory management system designed so different types of businesses can use dashboards and workflows suited to their operational needs.',
    statusNote:
      'Architected as a modular web application with customizable workflows for pharmacies, general stores, and retail businesses.',
    technologies: ['Supabase Backend', 'Database Integration', 'Admin Dashboards', 'Workflow Logic', 'UI/UX'],
    image: '/projects/inventory-dashboard.jpg',
    features: [
      'Business-specific tailored dashboards (Medical/Pharmacy, General Stores, Retail)',
      'Real-time inventory and stock quantity tracking with alert thresholds',
      'Product catalog management with categories, SKU codes, and pricing',
      'Sales and order-related workflows with daily activity logs',
      'Relational database architecture backed by Supabase',
      'User-specific access and role-tailored interface controls',
    ],
    useCases: [
      'Medical & Pharmacy: Expiry tracking, batch logging, prescription verification flows',
      'General Stores: Fast item lookups, low-stock notifications, supplier tracking',
      'Retail Businesses: Category management, sales transaction logging, order summaries',
    ],
    workflowDetails: {
      problemSolved:
        'Small businesses often struggle with bloated, one-size-fits-all software. This system provides focused, clutter-free dashboards configured specifically for each business type.',
      keyModules: [
        'Inventory Status & Restock Warning Table',
        'Sales Record & Order Processing Workflow',
        'Business Profile & Custom Dashboard Settings',
        'Database Sync & Supabase Backend Connectors',
      ],
      technicalArchitecture:
        'Modular frontend dashboard paired with Supabase relational database, real-time data subscriptions, and structured database tables.',
    },
  },
  {
    id: 'proj-2',
    number: '02',
    title: 'Modern Salon Website Concept',
    category: 'business',
    categoryLabel: 'Business Website',
    subtitle: 'Local salon website concept with online booking & WhatsApp communication',
    conceptNote:
      'A modern salon website concept engineered specifically for local salon businesses, beauty studios, and wellness centers.',
    statusNote:
      'Designed to help salons establish a refined online brand, display service pricing, and receive direct appointment bookings.',
    technologies: ['Responsive Design', 'Booking System', 'WhatsApp Integration', 'Gallery Showcase', 'Mobile UI'],
    image: '/projects/salon-website.jpg',
    features: [
      'Comprehensive services catalog with clear pricing and time durations',
      'Visual work gallery showcasing hair styling, treatments, and aesthetics',
      'Interactive appointment booking and reservation submission flow',
      'One-tap WhatsApp communication for instant inquiries and confirmations',
      '100% mobile-friendly responsive layout for on-the-go clients',
      'Location map, operating hours, and parking/direction guidance',
    ],
    useCases: [
      'Hair Salons & Barbershops seeking to eliminate chaotic phone appointment scheduling',
      'Beauty Clinics displaying hygienic standards, certifications, and service lists',
      'Freelance Stylists needing a credible portfolio and instant booking bridge',
    ],
    workflowDetails: {
      problemSolved:
        'Local salons lose prospective clients when prices are hidden or booking requires calling during busy hours. This website makes booking and pricing immediately clear.',
      keyModules: [
        'Service Menu with Duration & Pricing Chips',
        'Appointment Request Drawer with Date & Time Selector',
        'Floating WhatsApp Fast Inquiry Trigger',
        'Visual Gallery Grid with Responsive Lightbox',
      ],
      technicalArchitecture:
        'Mobile-first responsive frontend architecture, pre-filled WhatsApp link generation, and accessible booking state management.',
    },
  },
  {
    id: 'proj-3',
    number: '03',
    title: 'Restaurant & Food Ordering Website',
    category: 'ecommerce',
    categoryLabel: 'E-commerce & Ordering',
    subtitle: 'Digital food menu, cart, delivery status & custom admin order management',
    conceptNote:
      'A food-ordering website featuring an interactive customer menu and a dedicated custom admin management system.',
    statusNote:
      'Combines customer-facing ordering with back-of-house operational controls for orders and product updates.',
    technologies: ['Menu & Cart System', 'Admin Dashboard', 'Order Tracking', 'Product Management', 'Business Insights'],
    image: '/projects/food-ordering.jpg',
    features: [
      'Categorized interactive food menu with item descriptions and prices',
      'Frictionless customer cart with instant subtotal and tax calculation',
      'Order placement flow with delivery address and customer notes',
      'Real-time delivery status indicator (Received, Preparing, On the way)',
      'Custom Admin Dashboard for managing live orders and menu availability',
      'Business insights overview showing order volumes and popular dishes',
    ],
    useCases: [
      'Local restaurants wanting to take direct online orders without 30% aggregator commissions',
      'Cloud kitchens and bakeries needing straightforward order queues and menu updates',
      'Cafes offering pre-order pickup for morning commuters',
    ],
    workflowDetails: {
      problemSolved:
        'Restaurants need an easy way to receive online food orders directly from their customers, keep menus up-to-date, and monitor daily order flow.',
      keyModules: [
        'Dynamic Menu Grid with Category Filters & Search',
        'Flyout Cart with Order Review & Checkout Details',
        'Live Order Status Tracking Timeline',
        'Admin Kitchen Screen: Mark Orders as Preparing / Dispatched',
      ],
      technicalArchitecture:
        'Component-driven UI, stateful cart store, order status management, and clean administrative control screens.',
    },
  },
  {
    id: 'proj-4',
    number: '04',
    title: 'Mobile Phone Comparison Web Application',
    category: 'webapp',
    categoryLabel: 'Custom Web Application',
    subtitle: 'Side-by-side smartphone spec comparison with affiliate product integration',
    conceptNote:
      'A specialized web application for browsing smartphone specifications and comparing devices side-by-side.',
    statusNote:
      'Engineered with search-friendly product pages, structured spec tables, and admin management for device data.',
    technologies: ['Side-by-Side Comparison', 'Specification Engine', 'Search-Friendly UI', 'Affiliate Links', 'Admin Specs Manager'],
    image: '/projects/phone-comparison.jpg',
    features: [
      'Structured technical specifications (Processor, Camera, Battery, Display, RAM)',
      'Side-by-side comparison matrix highlighting spec differences and advantages',
      'Search and filter tool to quickly find models by brand, price range, and specs',
      'Direct affiliate product links guiding users to official purchasing channels',
      'Admin management interface to easily input, update, or remove phone specifications',
      'Clean, search-friendly layout built for fast reading and comparison',
    ],
    useCases: [
      'Tech enthusiasts and everyday buyers researching the best phone for their budget',
      'Affiliate marketers creating valuable utility content that naturally converts clicks',
      'Local mobile shops helping in-store customers compare different models visually',
    ],
    workflowDetails: {
      problemSolved:
        'Comparing phone specs across multiple tabs is tedious. This application presents differences side-by-side with clear visual highlights.',
      keyModules: [
        'Device Selector with Instant Search Autocomplete',
        'Dual-Column Spec Comparison Matrix (Display, Chipset, Camera, Battery)',
        'Affiliate Store CTA Buttons & Deal Badges',
        'Admin Form to Add & Edit Phone Specifications',
      ],
      technicalArchitecture:
        'Structured device data models, responsive comparison tables with horizontal synchronization, and accessible UI controls.',
    },
  },
  {
    id: 'proj-5',
    number: '05',
    title: 'WhatsApp AI Business Assistant',
    category: 'ai',
    categoryLabel: 'AI & Automation Solution',
    subtitle: 'Automated 24/7 customer inquiry handling via n8n & Google Sheets knowledge base',
    conceptNote:
      'An AI-powered WhatsApp business assistant designed to help businesses automatically handle customer inquiries around the clock.',
    statusNote:
      'Built using n8n automation, an AI Agent, and a Google Sheets knowledge base to answer service questions and pricing.',
    technologies: ['n8n Workflows', 'AI Agent Logic', 'Google Sheets DB', 'Conversation Memory', 'Automated Routing'],
    image: '/projects/whatsapp-automation.jpg',
    features: [
      'Automated customer inquiry handling 24/7 without manual staff delays',
      'Google Sheets dynamic knowledge base for instant updates to services and pricing',
      'AI Agent with conversation memory to retain context throughout a dialogue',
      'Accurate responses for common FAQs: business hours, locations, service terms',
      'Intelligent escalation that routes complex inquiries to human staff',
      'Multi-step n8n automation workflow connecting webhooks, AI, and messaging',
    ],
    useCases: [
      'Service businesses receiving repetitive messages about pricing and availability',
      'Clinics and salons answering common questions about treatment options and bookings',
      'E-commerce stores providing instant shipping status and return policy answers',
    ],
    workflowDetails: {
      problemSolved:
        'Customers expect instant responses on WhatsApp. Slow replies result in lost sales. This assistant answers standard inquiries in seconds.',
      keyModules: [
        'Webhook Listener for Incoming Inquiries',
        'Google Sheets Knowledge Retriever for Services & Pricing',
        'AI Processing & Context Memory Pipeline',
        'Response Formatter & Human Escalation Trigger',
      ],
      technicalArchitecture:
        'n8n automation workflow orchestration connected to Google Sheets as a low-code database, with AI agent reasoning and webhook dispatch.',
    },
  },
];

export const certificatesData: CertificateItem[] = [
  {
    id: 'cert-1',
    title: 'Training Certificate',
    courseTitle: 'WORDPRESS course under DigiSkills Training Program',
    issuingOrganization: 'DigiSkills.pk (Ministry of IT & Telecom, Govt of Pakistan & Ignite & Virtual University)',
    recipientName: 'MUHAMMAD ANEES',
    issueDate: '14/03/2026',
    credentialId: '736DY67MK',
    verificationUrl: 'https://digiskills.pk/verify',
    signatories: 'Rector, Virtual University & CEO, Ignite',
    isVerified: true,
    isPlaceholder: false,
  },
  {
    id: 'cert-placeholder-1',
    title: '[Certificate Title - Click to Add]',
    courseTitle: '[Course / Skill Focus - e.g. Responsive Web Development]',
    issuingOrganization: '[Issuing Organization / Platform]',
    recipientName: 'Anees Shahbaz',
    issueDate: '[Issue Date]',
    credentialId: '[Credential / Verification ID]',
    verificationUrl: '',
    isVerified: false,
    isPlaceholder: true,
  },
];

export const whyWorkWithMeData: ValuePropItem[] = [
  {
    id: 'wp-1',
    title: 'Business Problem First',
    description:
      'Every project starts by understanding your operational bottleneck, target audience, and customer conversion path before writing code.',
    iconName: 'Palette',
    highlightMetric: 'Strategic Clarity',
  },
  {
    id: 'wp-2',
    title: 'Responsive Everywhere',
    description:
      'Flawless mobile-first rendering, fluid typography, and fast loading speeds across phones, tablets, and desktops.',
    iconName: 'Smartphone',
    highlightMetric: '100% Mobile Ready',
  },
  {
    id: 'wp-3',
    title: 'Custom Business Functionality',
    description:
      'Tailored features — from WhatsApp lead routing and online booking to custom admin dashboards and inventory tools.',
    iconName: 'TrendingUp',
    highlightMetric: 'Tailored Workflows',
  },
  {
    id: 'wp-4',
    title: 'Continuous Growth & Transparency',
    description:
      'Honest communication, transparent milestone updates, and modern technical stacks engineered for future business expansion.',
    iconName: 'Cpu',
    highlightMetric: 'Modern Standards',
  },
];

export const initialReviewsData: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Tariq Mehmood',
    role: 'Founder & Retail Director',
    companyOrProject: 'Retail & Wholesale Store',
    projectType: 'E-Commerce Website & WhatsApp Ordering',
    rating: 5,
    content:
      'Anees developed our e-commerce storefront with seamless WhatsApp ordering. The mobile responsiveness is lightning fast, and our customer inquiries and orders increased noticeably within the first month. Very cooperative, clear, and professional throughout!',
    date: '12 March 2026',
    verified: true,
    location: 'Lahore, Pakistan',
  },
  {
    id: 'rev-2',
    name: 'Dr. Haris Khan',
    role: 'Director',
    companyOrProject: 'Health & Wellness Clinic',
    projectType: 'Corporate Website & Patient Booking',
    rating: 5,
    content:
      'Exceptional web development service! He rebuilt our medical practice website with clean typography and effortless appointment forms. He doesn’t just build templates; he suggested genuine improvements to how our patients navigate on mobile.',
    date: '28 February 2026',
    verified: true,
    location: 'Islamabad, Pakistan',
  },
  {
    id: 'rev-3',
    name: 'Farhan Akhtar',
    role: 'Operations Lead',
    companyOrProject: 'Cargo & Logistics Hub',
    projectType: 'Custom Business Web App & Tracking',
    rating: 5,
    content:
      'Anees built our customer inquiry and shipment tracking portal. Zero downtime, perfectly optimized across phones and laptops, and delivered ahead of schedule. Highly recommended for any serious business looking for reliable execution.',
    date: '10 February 2026',
    verified: true,
    location: 'Okara, Pakistan',
  },
];

