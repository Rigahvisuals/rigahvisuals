// Real business content, sourced from the Rigahvisuals_Portfolio.pdf you
// shared. Update any of this as your business grows — it's all in one place.

export const studio = {
  name: 'Rigahvisuals',
  founder: 'Joshua Rigah',
  role: 'Visual Storytelling Company in Film & Photography',
  tagline: 'Storytelling through photography & film.',
  intro:
    'We are a visual storytelling company specializing in photography, videography, and cinematography. Through creative and authentic visuals, we capture moments, tell stories, and help brands connect with their audience.',
  founderBio:
    'Joshua Rigah is a photographer, videographer, and visual storyteller passionate about creating impactful and authentic visual experiences. As the founder of Rigahvisuals, he specializes in photography, cinematography, and content creation, helping individuals and brands tell their stories through compelling imagery and film.',
  aboutStudio:
    'At Rigahvisuals, we believe every story deserves to be documented beautifully and authentically. We specialize in photography, videography, cinematography, content creation, and brand storytelling, helping individuals and businesses preserve moments and create impactful visual content. From intimate love stories and weddings to corporate events, real estate showcases, and commercial productions, our mission is simple: to transform moments into timeless visual stories.',
  vision:
    'To become a leading visual storytelling brand, recognized for creating impactful, timeless, and authentic visual experiences that inspire people and elevate brands.',
  mission:
    'To capture and tell meaningful stories through exceptional photography, videography, and cinematography while delivering creative, professional, and memorable visual content that connects with audiences and preserves moments for generations.',
  closingQuote:
    "We don't just take photos or shoot videos. We tell stories that preserve memories, build brands, and inspire audiences.",
  location: 'Ongata Rongai, Langata, Nairobi',
  phone: '+254794629664',
  whatsapp: '+254794629664',
  whatsappUrl: 'https://wa.me/254794629664',
  email: 'rigahvisuals@gmail.com',
  website: 'www.rigahvisuals.com',
  instagram: '@rigahvisuals',
  instagramUrl: 'https://instagram.com/rigahvisuals',
  tiktok: '@rigahvisuals',
  tiktokUrl: 'https://tiktok.com/@rigahvisuals',
  facebook: '@rigahvisuals',
  facebookUrl: 'https://www.facebook.com/joshuarigah',
  youtube: '@rigahvisuals',
  youtubeUrl: 'https://www.youtube.com/@rigahvisuals',
  pinterest: '@rigahvisuals',
  pinterestUrl: 'https://www.pinterest.com/jrigah1/_created/',
}

// Featured service categories, straight from the portfolio deck.
export const categories = [
  { id: 'weddings', label: 'Weddings & Love Stories', description: 'Capturing authentic emotions and unforgettable moments from engagement to wedding day.' },
  { id: 'corporate', label: 'Corporate & Brands', description: 'Helping businesses communicate their message through compelling visuals.' },
  { id: 'events', label: 'Events', description: 'Professional coverage for conferences, launches, graduations, and celebrations.' },
  { id: 'real-estate', label: 'Real Estate', description: 'Showcasing properties through stunning photography and cinematic tours.' },
  { id: 'automotive', label: 'Automotive', description: 'Creative photography and video content for car enthusiasts, dealerships, and brands.' },
]

export const whyChooseUs = [
  'Professional storytelling approach',
  'High-quality photography and cinematic films',
  'Creative and modern editing techniques',
  'Reliable delivery timelines',
  'Personalized client experience',
  'One team from courtship to wedding and beyond',
]

export const deliverables = [
  { label: 'High-Resolution Images', detail: 'Fully edited, print- and web-ready files from every shoot.' },
  { label: 'Cinematic Highlight Films', detail: 'A polished, story-driven edit of the day or project.' },
  { label: 'Social Media Reels', detail: 'Short-form cuts ready for Instagram and TikTok.' },
  { label: 'Commercial Videos', detail: 'Brand and product films built for campaigns.' },
  { label: 'Online Gallery Delivery', detail: 'A private online gallery for easy viewing and download.' },
]

export const process = [
  { step: 'Discovery', detail: 'Understanding your story, vision, and goals.' },
  { step: 'Planning', detail: 'Developing creative concepts and production schedules.' },
  { step: 'Production', detail: 'Capturing visuals with precision and creativity.' },
  { step: 'Post-Production', detail: 'Professional editing, colour grading, and sound design.' },
  { step: 'Delivery', detail: 'Providing high-quality final content optimised for your needs.' },
]

// Photo projects from "My Favorite Portfolio" in the deck — real client work.
export const photography = [
  { id: 'tanzania', title: 'Tanzania, Dar es Salaam', category: 'events', meta: 'A music concert · 2025', image: '/images/photo-tanzania.jpg' },
  { id: 'shofar', title: 'Shofar @ 10', category: 'events', meta: 'Nairobi, Kenya · 2024', image: '/images/photo-shofar.jpg' },
  { id: 'gabs', title: 'GABS', category: 'corporate', meta: 'Radisson Blu · 2024', image: '/images/photo-gabs.jpg' },
  { id: 'meso-kitchen', title: 'Meso Kitchen', category: 'corporate', meta: 'Nairobi, Kenya · 2025', image: '/images/photo-meso-kitchen.jpg' },
  { id: 'bambino', title: 'Bambino', category: 'corporate', meta: 'Nairobi, Kenya · 2025', image: '/images/photo-bambino.jpg' },
  { id: 'itel-kenya', title: 'Itel Kenya', category: 'corporate', meta: 'Sarova · 2024', image: '/images/photo-itel.jpg' },
  // These two are real portfolio photos illustrating services offered
  // (weddings, automotive) rather than named client projects — swap for a
  // real named project image as soon as you have one to credit.
  { id: 'wedding-sample', title: 'Rings', category: 'weddings', meta: 'Weddings & love stories', image: '/images/photo-wedding-sample.jpg' },
  { id: 'automotive-sample', title: 'Automotive', category: 'automotive', meta: 'Automotive', image: '/images/photo-automotive-sample.jpg' },
]

export const photoCategories = ['weddings', 'corporate', 'events', 'automotive', 'Real-Estate']

// Short-form vertical clips for the Films page "Reels" section — styled
// like YouTube Shorts/Instagram Reels (tall 9:16 tiles).
// PLACEHOLDER: reusing existing images as stand-in covers — swap `image`
// for a real vertical thumbnail and fill in `url` or `videoFile` for each.
// `date` controls the order they're shown in (newest first) — use any
// format JavaScript's Date can parse, e.g. '2025-11-20'.
export const reels = [
  { id: 'reel-1', title: 'Bambino', image: '/images/film-bambino-kitchen.jpg', url: '', videoFile: '/videos/Food.mp4', date: '2025-03-10' },
  { id: 'reel-2', title: 'Restraunt Foodie', image: '/images/photo-bambino.jpg', url: '', videoFile: '/videos/Foodie.mp4', date: '2025-06-02' },
  { id: 'reel-3', title: 'Cinematics', image: '/images/photo-portrait-2.jpg', url: '', videoFile: 'videos/Ivy.mp4', date: '2025-09-18' },
  { id: 'reel-4', title: 'The Maangis', image: '/images/film-maangis.jpg', url: '', videoFile: 'videos/Maangi.mp4', date: '2025-11-05' },
  { id: 'reel-5', title: 'LC 300 GR SPORT X LEXUS 570', image: '/images/photo-automotive-sample.jpg', url: '', videoFile: 'videos/LC 300 GR SPORT X LEXUS 570.mp4', date: '2025-11-05' },
  { id: 'reel-6', title: 'Before & After', image: '/images/house.jpg', url: '', videoFile: 'videos/Before and after.mp4', date: '2025-11-05' },

]

// Video projects from "Single Projects" in the deck.
export const filmSpotlightId = 'burning-spear'

export const films = [
  { id: 'porsche-cayenne-2020-coupe', title: 'Porsche Cayenne 2020 Coupe', meta: 'Automotive film', image: '/images/porsche.jpg', url: '', videoFile: '/videos/Automotive.mp4' },
  { id: 'subaru-impreza-g4', title: 'Subaru Impreza G4', meta: 'Atomotive film', image: '/images/subaru.jpg', url: '', videoFile: '/videos/Subaru.mp4' },
  { id: 'bambino-kitchen', title: 'Bambino Kitchen Westlands', meta: 'Brand film', image: '/images/film-bambino-kitchen.jpg', url: '', videoFile: '/videos/Food.mp4' },
  { id: 'joy-&-kelvin', title: 'Joy & Kelvin', meta: 'Wedding', image: '/images/joy x kelvin.jpg', url: '', videoFile: '/videos/wedding.mp4' },
  { id: 'phoebe-&-marvin', title: 'Phoebe & Marvin', meta: 'Wedding', image: '/images/phoebe.jpg', url: '', videoFile: '/videos/Phoebe.mp4' },
  { id: 'maangis', title: 'The Maangis ', meta: 'Content creation', image: '/images/film-maangis.jpg', url: '', videoFile: '/videos/Maangi.mp4' },
]

// Real clients/collaborators named in the portfolio deck — shown as a
// scrolling marquee on the home page.
export const collaborators = [
  'GABS', 'Itel Kenya', 'Meso Kitchen', 'Bambino', 'Shofar', 'Sarova', 'Radisson Blu', 'Burning Spear', 'Desty Events', 'IEEE', 'The Maangis',
]

// Before/after edit comparisons — replace with your own raw vs. graded pairs.
export const edits = [
  { id: 'edit-1', before: '/images/edit-1-before.jpg', after: '/images/edit-1-after.jpg', caption: 'Raw capture vs. final grade' },
  { id: 'edit-2', before: '/images/edit-2-before.jpg', after: '/images/edit-2-after.jpg', caption: 'Exposure and colour work' },
  { id: 'edit-3', before: '/images/edit-3-before.jpg', after: '/images/edit-3-after.jpg', caption: 'Film still, colour graded' },
]

// Team — Joshua Rigah is the documented founder from the portfolio deck.
// The other two are PLACEHOLDER entries (no real team members were
// provided) — replace the bracketed names/roles/photos with real people,
// or remove them if it's currently a team of one.
export const team = [
  {
    id: 'joshua-rigah',
    name: 'Joshua Rigah',
    role: 'Founder · Photographer & Cinematographer',
    bio: 'Passionate about creating impactful, authentic visual experiences across photography, cinematography, and content creation.',
    image: '/images/ceo.jpg',
    placeholder: false,
  },
  {
    id: 'calleb riga',
    name: 'Calleb Riga',
    role: 'Developer | Website & Digital Platforms',
    bio: 'Management of the website and other digital platforms.',
    image: '/images/dev.jpg',
    placeholder: false,
  },
  {
    id: 'rigah joshua',
    name: 'Rigah Joshua',
    role: 'Social Media Manager',
    bio: 'Management of social media platforms and content creation.',
    image: '/images/md.jpg',
    placeholder: false,
  },
]

// Shown in the "Selected work" reel on the home page — a mix of real
// photo and film projects.
export const featuredWork = [
  { id: 'burning-spear-feat', title: 'Burning Spear', type: 'film', meta: 'Film', image: '/images/film-burning-spear.jpg', href: '/films' },
  { id: 'gabs-feat', title: 'GABS', type: 'photo', meta: 'Corporate · 2024', image: '/images/photo-gabs.jpg', href: '/photography' },
  { id: 'stand-music-feat', title: 'Stand Music Zimbabwe', type: 'film', meta: 'Film', image: '/images/film-stand-music.jpg', href: '/films' },
  { id: 'shofar-feat', title: 'Shofar @ 10', type: 'photo', meta: 'Events · 2024', image: '/images/photo-shofar.jpg', href: '/photography' },
  { id: 'bambino-feat', title: 'Bambino Kitchen Westlands', type: 'film', meta: 'Film', image: '/images/film-bambino-kitchen.jpg', href: '/films' },
  { id: 'itel-feat', title: 'Itel Kenya', type: 'photo', meta: 'Corporate · 2024', image: '/images/photo-itel.jpg', href: '/photography' },
]

// Testimonials — PLACEHOLDER. No real client quotes were provided. Do not
// publish these as-is; replace with actual feedback from actual clients,
// with their permission, or remove the section entirely.
export const testimonials = [
  { quote: '"Working with Rigah Visuals was a great experience. They understood the creative direction I was going for and brought it to life through high-quality visuals. The professionalism, attention to detail, and final editing really stood out. I’d definitely recommend Rigah Visuals to anyone looking for creative photography and videography."', name: 'The Maangi', role: 'Content Creation' },
  { quote: '"Rigah Visuals did an amazing job capturing our wedding day. From the beautiful details to the special moments we shared with our family and friends, every memory was captured so beautifully. The team was professional, creative, and easy to work with, and the final photos and videos exceeded our expectations. We’re truly grateful to Rigah Visuals for giving us memories we’ll cherish forever"', name: 'Phoebe & Marvin', role: 'Wedding Photography & Cinematography' },
]

export const contactChecklist = [
  { item: 'Project type : photo, film, or both', note: 'Helps scope the quote' },
  { item: 'Rough dates and location', note: 'Confirms availability' },
  { item: 'Budget range, if you have one', note: 'Speeds up the proposal' },
  { item: 'Any reference work you like', note: 'Helps align on style' },
]

// ── Add this near the bottom of content.js, or anywhere after `studio` ──

// Builds a WhatsApp "click to chat" link pre-filled with a message asking
// about a specific product. Edit the wording here if you'd like a
// different default message.
export function whatsappOrderLink(productName) {
  const message = `Hi! I'd like to order: ${productName}`
  return `${studio.whatsappUrl}?text=${encodeURIComponent(message)}`
}

// Portrait print products — PLACEHOLDER. Replace names, prices, sizes,
// and images with your real print offerings.
export const prints = [
  {
    id: 'print-1',
    title: 'Signature Portrait Print',
    image: '/images/photo-portrait-1.jpg',
    price: 'KSh 2,500',
    sizes: 'A4 / A3 / A2',
    description: 'Museum-quality print on premium matte paper, from a selection of portrait work.',
  },
  {
    id: 'print-2',
    title: 'Travel & Editorial Print',
    image: '/images/photo-portrait-2.jpg',
    price: 'KSh 3,000',
    sizes: 'A4 / A3 / A2',
    description: 'A limited selection of travel and editorial frames, printed on demand.',
  },
]

// Preset packs — PLACEHOLDER. Replace with your real Lightroom/Photoshop
// preset products.
export const presets = [
  {
    id: 'preset-1',
    title: 'Cinematic Warm Pack',
    image: '/images/edit-1-after.jpg',
    price: 'KSh 1,500',
    format: '5 Lightroom presets (.xmp)',
    description: 'The warm, moody grade used across recent film and photo work.',
  },
  {
    id: 'preset-2',
    title: 'Editorial Clean Pack',
    image: '/images/edit-2-after.jpg',
    price: 'KSh 1,500',
    format: '5 Lightroom presets (.xmp)',
    description: 'A cleaner, higher-contrast look built for portrait and corporate work.',
  },
]