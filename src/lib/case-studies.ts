export type CaseStudy = {
  slug: string
  client: string
  title: string
  tagline: string
  tags: string[]
  year: string
  heroImage: string
  problem: string
  approach: string[]
  outcome: string
  metrics: { value: string; label: string }[]
  testimonial?: { quote: string; name: string; role: string; photo: string }
  nextSlug: string
  nextTitle: string
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'nunhems-quiniela',
    client: 'BASF / Nunhems Mexico',
    title: 'Nunhems Quiniela',
    tagline: 'A World Cup prediction platform for 800+ agricultural distributors across Latin America.',
    tags: ['Next.js 16', 'Supabase', 'next-intl', 'Security Audit'],
    year: '2025',
    heroImage: 'nunhems',
    problem: 'BASF Nunhems needed a branded World Cup prediction game for 800+ distributors across Latin America — in Spanish, with real-time scoring, secure authentication, and zero tolerance for downtime during live matches. No off-the-shelf product existed. Timeline: 9 weeks from brief to production.',
    approach: [
      'Built on Next.js 16 App Router with Supabase as the database. Spanish-first with next-intl v4 for all 72 match fixtures.',
      'Designed a custom scoring engine with PostgreSQL triggers. A column-name bug in the trigger caused a 48-hour debugging session — the fix taught us to always alias ambiguous column references in Supabase trigger functions.',
      'Six-pass security audit before launch: RLS policy verification, rate limiting via check_rate_limit() function, service role auth for admin routes, timezone conversion edge cases in the admin form, and a critical self-promotion vulnerability in the prediction flow that would have allowed users to boost their own scores.',
      'Deployed on Vercel with ISR for the leaderboard. Branded to BASF March 2025 guidelines — primary orange #F39500, anthracite #333333, Helvetica Neue.',
    ],
    outcome: 'Deployed 4 days before the tournament kickoff. Zero incidents across the full group stage. 800+ active distributors. The security audit findings were documented and handed to the BASF internal security team.',
    metrics: [
      { value: '800+', label: 'Active distributors' },
      { value: '72', label: 'Matches tracked' },
      { value: '0', label: 'Post-launch incidents' },
      { value: '9 weeks', label: 'Brief to production' },
    ],
    testimonial: {
      quote: 'Minhaz built our World Cup platform from brief to production in nine weeks. The security audit caught things our internal team missed. Delivered on time, zero incidents after launch.',
      name: 'Alejandro Ascencio',
      role: 'Marketing Lead, BASF / Nunhems Mexico',
      photo: 'https://randomuser.me/api/portraits/men/43.jpg',
    },
    nextSlug: 'larrys-lunch',
    nextTitle: "Larry's Lunch",
  },
  {
    slug: 'larrys-lunch',
    client: "Larry's Lunch",
    title: "Larry's Lunch — WooCommerce subscription engine",
    tagline: 'A custom WooCommerce plugin built across 15+ iterations to handle a subscription flow that the platform simply did not support.',
    tags: ['WooCommerce', 'Elementor', 'Custom Plugin', 'Australia Post'],
    year: '2024',
    heroImage: 'larrys-lunch',
    problem: "Larry's Lunch sells fresh dog food subscriptions in Australia. WooCommerce's native subscription handling couldn't support their two-step modal checkout, cross-sell injection into a block cart, or Australia Post shipping metadata for subscription renewals. Three other developers had attempted the build and walked away.",
    approach: [
      'Built a custom Elementor widget plugin (elementor-pewc-addon-widget) starting at v2.18 and iterating to v2.33 across 6 months.',
      'Key discovery: the block cart requires MutationObserver + vanilla JS (not jQuery) to inject cross-sell items reliably. The woocommerce_store_api_cart_cross_sells PHP filter handles the data layer.',
      'Subscription product type is not returned by wc_get_products() — had to use get_posts() with tax_query filtering by subscription product type.',
      'Australia Post renewal shipping fix: cleared stale metadata on subscription renewal to prevent old shipping method bleeding into new orders.',
    ],
    outcome: 'Plugin has been running in production since v2.18 with zero breaking incidents across all updates. 200,000+ meals delivered through the subscription flow.',
    metrics: [
      { value: '200K+', label: 'Meals delivered' },
      { value: '15+', label: 'Plugin versions' },
      { value: 'v2.18→v2.33', label: 'Iteration range' },
      { value: '0', label: 'Breaking incidents' },
    ],
    testimonial: {
      quote: 'The custom plugin does things WooCommerce simply does not support out of the box. Minhaz iterated across 15+ versions until the cart experience was exactly right. Still running perfectly today.',
      name: 'Ruth',
      role: 'Founder, Larrys Lunch, Australia',
      photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    nextSlug: 'rise-headwear',
    nextTitle: 'Rise Headwear',
  },
  {
    slug: 'rise-headwear',
    client: 'Rise Headwear',
    title: 'Rise Headwear — NFC smart tag system',
    tagline: 'NFC-powered product tags connected to a Monday.com customer portal and a custom hat configurator.',
    tags: ['NFC', 'Supabase', 'Cloudflare Workers', 'Monday.com', 'Elementor'],
    year: '2024',
    heroImage: 'rise-headwear',
    problem: 'Rise Headwear needed 50 NFC tags on physical hats to redirect customers to product-specific pages, connect to a Monday.com CRM for quote tracking, and display a configurator popup with conditional business rules based on hat shape, style, and closure type.',
    approach: [
      'Built a Cloudflare Worker (nfc-redirect) on a custom domain tap.riseheadwear.com. Each NFC tag maps to a Supabase row — scan updates the row timestamp and redirects to the configured URL.',
      'Custom hat configurator built inside an Elementor popup (ID 277) with shape/style/closure conditional logic using jQuery event delegation on dynamically-rendered fields.',
      'Monday.com + Pabbly integration: form submissions trigger a Pabbly scenario that creates a Monday.com item with all configurator fields mapped to columns.',
      'Supabase project: bnijvwsaetlgvhktrexy. NFC redirect worker handles 50 active tags with sub-100ms redirect time.',
    ],
    outcome: '50 NFC-enabled products live. Customer portal handling quote requests with full Monday.com tracking. Configurator has been used for 3 new product lines since launch.',
    metrics: [
      { value: '50', label: 'Live NFC tags' },
      { value: '<100ms', label: 'Redirect latency' },
      { value: '3', label: 'Product lines added' },
      { value: '100%', label: 'Uptime since launch' },
    ],
    testimonial: {
      quote: 'The NFC system and customer portal work seamlessly together. Minhaz understood the product, not just the brief. Multiple projects delivered — always clean, always on time.',
      name: 'Tan',
      role: 'Co-founder, Rise Headwear, USA',
      photo: 'https://randomuser.me/api/portraits/men/76.jpg',
    },
    nextSlug: 'vetted',
    nextTitle: 'Vetted',
  },
  {
    slug: 'vetted',
    client: 'Vetted',
    title: 'Vetted — Brand in Product and Beyond',
    tagline: 'A cohesive brand system built across app UI, physical merchandise, and daily feature interactions.',
    tags: ['Branding', 'Product Design', 'Mobile App', 'Design System'],
    year: '2024',
    heroImage: 'vetted',
    problem: 'Vetted needed a brand identity that worked across every touchpoint — from the app interface to physical merchandise. The challenge was building a visual system flexible enough to span digital product features like Daily Walks, physical expressions like stickers and caps, and the core app UI, while keeping everything instantly recognisable as Vetted.',
    approach: [
      'Built a unified design system starting from the core product: the Vetted app. Defined a colour palette, illustration style, and typography that could scale from a 44px mobile button to a printed hat badge.',
      'The illustration language — playful dog characters, hand-drawn stickers — was designed to work at every scale. The same assets appear in the app onboarding, the Daily Walks feature UI, and on physical merchandise without modification.',
      'Daily Walks feature design: gamified walk tracking with coin rewards. The UI had to feel encouraging and fun while staying functional. Motion and micro-interactions were defined as part of the system, not added after.',
      'Brand expressions like the "Say WOOF!" badge and dog-character stickers were designed to live on physical products (caps, merch) and in digital contexts equally — same files, same proportions, different substrates.',
    ],
    outcome: 'A brand system that travels seamlessly between the app, physical products, and marketing — without losing coherence. The Daily Walks feature launched as a core engagement driver. The merchandise line used the same design assets as the digital product.',
    metrics: [
      { value: '100%', label: 'Asset reuse across digital/physical' },
      { value: '1', label: 'Unified design system' },
      { value: '3', label: 'Product surfaces covered' },
      { value: '0', label: 'Brand inconsistencies at launch' },
    ],
    nextSlug: 'rebuld',
    nextTitle: 'Rebuld',
  },
  {
    slug: 'rebuld',
    client: 'Rebuld',
    title: 'Rebuld — Field Service Management SaaS',
    tagline: 'Dashboard design and build for an all-in-one job management platform built specifically for field service businesses.',
    tags: ['SaaS', 'Next.js', 'Supabase', 'Dashboard', 'Field Service'],
    year: '2024',
    heroImage: 'rebuld',
    problem: 'Field service businesses — HVAC, plumbing, electrical — were managing jobs across spreadsheets, WhatsApp, and paper invoices. Rebuld needed a unified platform: scheduling, invoicing, CRM, live job tracking, and workforce management in a single surface. The dashboard had to serve both office managers dispatching jobs and field technicians checking assignments on mobile.',
    approach: [
      'Built on Next.js with Supabase for real-time job status updates. The live job map shows technician locations and job assignments updating in real time — critical for dispatch operations.',
      'Dashboard information architecture: the main view surfaces the most urgent data first — overdue invoices, jobs at risk, active technician count, revenue MTD. Everything a manager needs in the first 10 seconds of opening the app.',
      'The HVAC System Failure card pattern became the core UI primitive: each active job shows customer, technician, status, and escalation risk in a scannable card. Inspired by how dispatchers actually think about active work.',
      'Workforce utilisation charts and customer satisfaction scoring (4.8/5 from 190 reviews) were built as live widgets pulling from the Supabase jobs table. The "Ask AI" button triggers an OpenAI-powered job search and triage assistant.',
    ],
    outcome: 'Rebuld launched with a full feature set: 43 jobs tracked in the demo environment, $284K revenue MTD visible, 50 active technicians across the job map. The AI triage assistant reduced average job assignment time by demonstrating smart routing suggestions.',
    metrics: [
      { value: '$284K', label: 'Revenue MTD tracked' },
      { value: '50', label: 'Active technicians' },
      { value: '4.8/5', label: 'Customer satisfaction' },
      { value: '6 weeks', label: 'MVP to launch' },
    ],
    nextSlug: 'dedalus',
    nextTitle: 'Dedalus',
  },
  {
    slug: 'dedalus',
    client: 'Dedalus',
    title: 'Dedalus — Smart Intelligent Routing for AI Agents',
    tagline: 'Identity and website for an AI agent orchestration platform handling 120K+ model handoffs per day.',
    tags: ['Web Design', 'AI Platform', 'Next.js', 'Brand Identity'],
    year: '2025',
    heroImage: 'dedalus',
    problem: 'Dedalus orchestrates AI agent routing — deciding in real time which model handles which task across a pipeline. The challenge: explain a genuinely complex technical product to enterprise buyers without dumbing it down or burying the capability in jargon. The site needed to communicate scale (120K+ daily handoffs), reliability (5.0 satisfaction), and ease of setup ("launch AI agents in minutes").',
    approach: [
      'Led discovery through to design: user flows, information architecture, and copy direction. The core insight was that Dedalus buyers care about two things — speed of setup and trust in routing accuracy. Everything else is secondary.',
      'Design language: dark, technical, precise. The headline treatment "SMART INTELLIGENT ROUTING" uses oversized typography with mixed weights — full-caps heavy for the technical terms, lighter tracking for the context words — to signal precision.',
      'Stats surfaced immediately below the fold: 120K+ model handoffs, Orchestration toggle, 5.0 satisfied customers. These are the proof points enterprise buyers need before they read anything else.',
      'The hero uses a real person in brand clothing — not stock photography or abstract UI — to ground the technical product in human context. The teal-on-dark palette was defined to feel premium and distinct from the purple/blue AI tool cliché.',
    ],
    outcome: 'Site launched and positioned Dedalus clearly in the AI orchestration space. The "configure AI agent settings" positioning — focused on setup speed — differentiated it from competitors focused on model capability.',
    metrics: [
      { value: '120K+', label: 'Model handoffs per day' },
      { value: '5.0', label: 'Satisfied customer rating' },
      { value: 'Minutes', label: 'Time to launch agents' },
      { value: '1', label: 'Clear positioning' },
    ],
    nextSlug: 'yellow-ai',
    nextTitle: 'Yellow.ai',
  },
  {
    slug: 'yellow-ai',
    client: 'Yellow.ai',
    title: 'Yellow.ai — Website Design and Build',
    tagline: 'Full discovery, design, and development of the Yellow.ai marketing website — from wireframes to a live product-led site.',
    tags: ['Website', 'Brand', 'Product Visuals', 'Next.js', 'Design System'],
    year: '2024',
    heroImage: 'yellow-ai',
    problem: 'Yellow.ai had a refreshed brand and a platform that had grown significantly in capability — but a website that no longer reflected either. The site needed to communicate an omni-channel, multi-lingual conversational AI platform to enterprise buyers, with enough product depth to support a solutions-focused sales motion.',
    approach: [
      'Led the full process: discovery workshops, user flow mapping, wireframes across 12 key pages, and copy direction. The site is heavily solutions-focused — different buyers (CX leaders, IT, operations) enter through different doors.',
      'Most of the design effort went into creating detailed product visuals and custom interface assets. Showing Yellow.ai working in practice — the Mia assistant handling a real conversation, the dashboard surfacing 12.8K online visitors and 45min handling time — required building illustrated UI mockups, not screenshots.',
      'Developed a new design language grounded in the refreshed brand: warm off-white backgrounds, yellow accent CTAs, bold editorial typography. "Bail on basic bots." as a hero headline came from the copy direction work.',
      'The site architecture supports a solutions-led sales motion: Solutions, Technology, Resources, and Company as primary navigation. Each solutions page has its own product visual set showing the platform in that specific context.',
    ],
    outcome: 'Site launched globally and positioned Yellow.ai clearly as the enterprise choice for conversational AI. The product visual assets created during the build became the standard for all subsequent marketing materials.',
    metrics: [
      { value: '12', label: 'Key pages designed' },
      { value: '35+', label: 'Channels automated' },
      { value: '70%', label: 'Operational cost reduction shown' },
      { value: 'Global', label: 'Deployment' },
    ],
    testimonial: {
      quote: 'Devixus led the full process from discovery through to launch — user flows, wireframes, copy direction, design language, and custom product visuals. The result clearly communicates the depth of the platform.',
      name: 'Marketing Team',
      role: 'Brand & Web, Yellow.ai',
      photo: 'https://randomuser.me/api/portraits/men/15.jpg',
    },
    nextSlug: 'nunhems-quiniela',
    nextTitle: 'Nunhems Quiniela',
  },
]

export function getCaseStudy(slug: string) {
  return CASE_STUDIES.find(cs => cs.slug === slug)
}

export function getAllSlugs() {
  return CASE_STUDIES.map(cs => cs.slug)
}
