export const siteConfig = {
  title: 'Martin Sakowski',
  description:
    'Website and blog of Martin Sakowski, Principal Solutions Architect at AWS, based in Hamburg, Germany.',
  siteUrl: 'https://martinsakowski.com',
  secondaryDomains: ['https://m12i.de'],
  person: {
    name: 'Martin Sakowski',
    role: 'Principal Solutions Architect',
    brandTitle: 'Technology Leader',
    tagline: 'I work with large retail organizations to make architecture simpler, delivery faster, and systems easier to evolve.',
    summary:
      'I help large retail organizations turn ideas into scalable systems, from early architecture decisions to delivery and long-term operation.',
    location: 'Hamburg, Germany',
  },
  links: {
    github: 'https://github.com/msakowski',
    linkedin: 'https://www.linkedin.com/in/martin-sakowski-596a60b8',
  },
  nav: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'CV' },
    { href: '/speaking', label: 'Talks' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ],
} as const;
