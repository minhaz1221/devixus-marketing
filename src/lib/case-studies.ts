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
