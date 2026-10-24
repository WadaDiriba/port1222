// Everything you see on the site is edited here. No need to touch the components.

export const site = {
  brand: 'Wada Technologies',
  role: 'Founder · Web developer . Mobile App Developer',
  status: 'Taking on new projects',
  // Put your photo at public/photo.jpg (portrait, about 800 x 1000 px works well).
  photo: '/photo.jpg',
  // Web3Forms access key for the contact form.
  accessKey: '7ebd849a-2604-4b56-b2cc-1d185d5f77fb',
};

export const links = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Work' },
  { id: 'contact', label: 'Contact' },
];

export const hero = {
  lead: 'Websites and apps with real',
  accent: 'depth',
  body:
    'Wada Technologies designs and builds fast, animated, carefully engineered web products, from the first sketch to the live site.',
};

export const about = {
  heading: 'Engineering with an eye for how things feel.',
  body: [
    'I handle design, code and launch, so the thing you approve is the thing that ships.',
    'I care about the details people notice without being able to name them: motion that explains what is happening, pages that load fast on a weak connection, and forms that send on the first try.',
  ],
  toolkit: ['Next.js', 'React', 'Node.js', 'Prisma', 'JavaScript', 'CSS & motion', 'Cpannel', 'Git'],
};

export const services = [
  {
    title: 'Web applications',
    text: 'Full stack apps built with Next.js and Prisma, with a data model that fits the job and code you can keep extending.',
    icon: 'app',
  },
  {
    title: 'Interfaces & motion',
    text: 'Layout, typography and animation that make a product feel finished, tuned so it stays smooth on ordinary phones.',
    icon: 'motion',
  },
  {
    title: 'Launch & hosting',
    text: 'Deployment on Vercel with sensible performance, search metadata and a contact flow that reaches your inbox.',
    icon: 'launch',
  },
];

// Each project has a logo and, optionally, a live link.
// To change a logo: overwrite the file in public/logos/ with your own image,
// or point `logo` at a new file (png, jpg, svg or webp all work).
export const projects = [
  {
    name: 'Wada Technologies Portfolio',
    text: 'This site. A Next.js build with a live 3D star field, tilting interface layers and a contact form that delivers straight to my inbox.',
    tags: ['Next.js', 'Canvas', 'Web3Forms'],
    here: true,
    logo: '/logos/wada.svg',
    c1: 'rgba(255,179,71,.55)',
    c2: 'rgba(127,214,255,.45)',
  },
  {
    name: 'Ethiopian Berhane Kristos Church',
    text: 'The official website of the Ethiopian Berhane Kristos Church.',
    tags: ['Next.js', 'Responsive Design'],
    link: 'https://berhanekristoschurch.org/',
    logo: '/logos/ebkc.png',
    c1: 'rgba(120,140,255,.55)',
    c2: 'rgba(255,120,150,.40)',
  },
  {
    name: 'Berhane Kristos Theological College',
    text: 'The website of the Berhane Kristos Theological College.',
    tags: ['Next.js', 'Responsive Design'],
    link: 'http://college.berhanekristoschurch.org/',
    logo: '/logos/ebkc.png',
    c1: 'rgba(110,230,190,.45)',
    c2: 'rgba(255,179,71,.40)',
  },
  {
    name: 'Source of Life Theological College',
    text: 'A website for a theological college in Ethiopia, built with Next.js and Prisma.',
    tags: ['Next.js', 'Prisma', 'Tailwind CSS'],
    link: 'https://sourceoflifecollege.com/',
    logo: '/logos/source.png',
    c1: 'rgba(255,120,150,.55)',
    c2: 'rgba(120,140,255,.45)',
  },
  {
    name: 'Weanin Generation from Addiction Organization',
    text: 'A website for an organization that helps people overcome addiction, built with Next.js and Tailwind CSS.',
    tags: ['Next.js', 'Tailwind CSS', 'Responsive Design'],
    link: 'https://weaninggeneration.org/',
    logo: '/logos/wean.png',
    c1: 'rgba(120,140,255,.55)',
    c2: 'rgba(255,179,71,.45)',
  },
  {
    name: 'Ozer Hulentenawi Agelgilot',
    text: 'A website for a non-profit organization that provides education and support to children in Ethiopia, built with Next.js and Tailwind CSS.',
    tags: ['Next.js', 'Tailwind CSS', 'Responsive Design'],
    link: 'https://ozerhulentenawiagelgilot.com',
    logo: '/logos/ozer.png',
    c1: 'rgba(255,179,71,.55)',
    c2: 'rgba(120,140,255,.45)',
  },
  {
    name: 'ONESMOS BIBLE HUB',
    text: 'A website for a Bible study organization, built with Next.js and Tailwind CSS.',
    tags: ['Next.js', 'Tailwind CSS', 'Responsive Design'],
    link: 'https://onesmosbiblehub.com',
    logo: '/logos/onesmos.png',
    c1: 'rgba(120,140,255,.55)',
    c2: 'rgba(255,179,71,.45)',
  },
];

export const contact = {
  heading: 'Start a project',
  body: 'Tell me what you want to build, who it is for and when you need it. Messages go straight to my inbox.',
};