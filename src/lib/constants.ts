export const NAV_LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Widgets', href: '#widgets' },
  { label: 'Contact', href: '#contact' },
]

export const STATS = [
  { value: '250+', label: 'Projects shipped' },
  { value: '21+', label: 'Countries served' },
  { value: '4.9★', label: 'Avg client rating' },
  { value: '$10M+', label: 'Client revenue enabled' },
]

export const BRANDS = [
  'BASF',
  "Larry's Lunch",
  'Rise Headwear',
  'Ironglass',
  'Khosh Kabad',
  'Salar Shirazi',
  'Leo Movement',
  'Abraham Ed.',
  'Get Sculpted',
  'Yellow.ai',
]

export interface Service {
  icon: string
  category: string
  title: string
  body: string
}

export const SERVICES: Service[] = [
  {
    icon: 'globe',
    category: 'Web & SaaS',
    title: 'Next.js apps that actually ship.',
    body: "Next.js 15, Supabase, Vercel. From marketing sites to full SaaS — auth, billing, RLS, the lot. We don't hand you a demo and disappear.",
  },
  {
    icon: 'wordpress',
    category: 'WordPress & WooCommerce',
    title: 'Custom plugins, not page-builder duct tape.',
    body: 'WooCommerce, Elementor, custom blocks. We fix the stuff other devs walked away from. Tested, documented, yours to maintain.',
  },
  {
    icon: 'brain',
    category: 'AI Integrations',
    title: 'Claude, GPT-4o, embeddings — wired into real workflows.',
    body: 'RAG pipelines, vision analysis, agent automations. Production systems built with OpenAI, Anthropic, and Supabase pgvector — not chat-with-PDF demos.',
  },
  {
    icon: 'mic',
    category: 'Voice Agents',
    title: 'Vapi + ElevenLabs + Twilio. Phones that book themselves.',
    body: 'Inbound, outbound, qualifying, scheduling. Real telephony, real conversation, measurable lift in handled calls.',
  },
  {
    icon: 'browser',
    category: 'Webflow',
    title: 'Webflow sites that look as good as they perform.',
    body: 'Custom Webflow builds from scratch or migrations from WordPress. CMS, animations, Lottie integrations, and e-commerce. Pixel-perfect, launch-ready.',
  },
  {
    icon: 'nfc',
    category: 'NFC & API Integrations',
    title: 'Smart systems that connect everything.',
    body: 'NFC redirect infrastructure, Monday.com, Pabbly, Stripe, Twilio, Australia Post, and custom API integrations. Built to run without babysitting.',
  },
]

export interface Review {
  photo: string
  name: string
  role: string
  ring: string
  quote: string
}

export const REVIEWS: Review[] = [
  {
    photo: 'https://randomuser.me/api/portraits/men/43.jpg',
    name: 'Alejandro Ascencio',
    role: 'Marketing Lead @ BASF / Nunhems Mexico',
    ring: 'from-indigo-400 to-indigo-600',
    quote:
      '"Built our World Cup prediction platform in nine weeks. The security audit caught things our internal team missed. Delivered on time, zero incidents."',
  },
  {
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    name: 'Ruth',
    role: "Founder @ Larry's Lunch, Australia",
    ring: 'from-amber-400 to-amber-600',
    quote:
      '"The plugin does things WooCommerce simply doesn\'t support. Iterated 15+ versions until it was exactly right. Still running perfectly today."',
  },
  {
    photo: 'https://randomuser.me/api/portraits/men/76.jpg',
    name: 'Tan',
    role: 'Co-founder @ Rise Headwear, USA',
    ring: 'from-violet-400 to-violet-600',
    quote:
      '"The NFC system and portal work seamlessly. Understood the product, not just the brief. Multiple projects — always clean, always on time."',
  },
  {
    photo: 'https://randomuser.me/api/portraits/men/60.jpg',
    name: 'Salar Shirazi',
    role: 'Founder @ Jake Electric, UK',
    ring: 'from-green-400 to-green-600',
    quote: '"The mega menu took three other devs weeks. Done in two days, exactly right."',
  },
  {
    photo: 'https://randomuser.me/api/portraits/men/22.jpg',
    name: 'Oliver',
    role: 'Founder @ Ironglass, Italy',
    ring: 'from-orange-400 to-orange-600',
    quote:
      '"Diagnosed the PayPal PPCP and Apple Pay issue in two hours. Fixed in four days. Completely stress-free."',
  },
  {
    photo: 'https://randomuser.me/api/portraits/men/91.jpg',
    name: 'Leo',
    role: 'Founder @ Leo Movement, Germany',
    ring: 'from-pink-400 to-pink-600',
    quote:
      '"He pushed back on one layout choice and he was right. That honest pushback is rare — and it made the product better."',
  },
]

export const TECH_STACK = [
  { name: 'Vercel',      bg: '#00000015', border: '#000000', text: '#000000' },
  { name: 'Supabase',    bg: '#3FCF8E18', border: '#3FCF8E', text: '#1a7a4a' },
  { name: 'Anthropic',   bg: '#D9775715', border: '#D97757', text: '#b85a2e' },
  { name: 'OpenAI',      bg: '#10A37F18', border: '#10A37F', text: '#0d7a5f' },
  { name: 'Vapi',        bg: '#5C4BFF18', border: '#5C4BFF', text: '#5C4BFF' },
  { name: 'ElevenLabs',  bg: '#00000015', border: '#444',    text: '#222' },
  { name: 'Twilio',      bg: '#F22F4615', border: '#F22F46', text: '#c41c32' },
  { name: 'WordPress',   bg: '#21759B18', border: '#21759B', text: '#21759B' },
  { name: 'Gemini',      bg: '#1A73E818', border: '#1A73E8', text: '#1A73E8' },
  { name: 'Cursor',      bg: '#00000015', border: '#555',    text: '#333' },
  { name: 'Lovable',     bg: '#FF478515', border: '#FF4785', text: '#d42865' },
  { name: 'Framer',      bg: '#0055FF15', border: '#0055FF', text: '#0055FF' },
  { name: 'Figma',       bg: '#F24E1E15', border: '#F24E1E', text: '#d13a0c' },
  { name: 'Next.js',     bg: '#00000015', border: '#000',    text: '#000' },
  { name: 'GitHub',      bg: '#24292E18', border: '#24292E', text: '#24292E' },
  { name: 'Stripe',      bg: '#635BFF18', border: '#635BFF', text: '#635BFF' },
]
