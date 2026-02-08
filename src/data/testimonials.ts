export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating?: number;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'Velocity Pro helped us launch our SaaS in half the time. The components are polished and the dark mode is flawless.',
    author: 'Sarah Chen',
    role: 'CTO',
    company: 'Streamline AI',
    avatar: '/avatars/avatar-1.webp',
    rating: 5,
  },
  {
    id: '2',
    quote: 'We switched from a custom build to Velocity Pro and saved over 200 engineering hours. The ROI was immediate.',
    author: 'Marcus Johnson',
    role: 'Head of Product',
    company: 'DataPulse',
    avatar: '/avatars/avatar-2.webp',
    rating: 5,
  },
  {
    id: '3',
    quote: 'The attention to detail is remarkable. Every animation, every transition — it all feels intentional and premium.',
    author: 'Elena Rodriguez',
    role: 'Design Lead',
    company: 'Pixelcraft Studios',
    avatar: '/avatars/avatar-3.webp',
    rating: 5,
  },
  {
    id: '4',
    quote: 'Our conversion rate jumped 34% after switching to Velocity Pro. The pricing page alone paid for itself.',
    author: 'James Park',
    role: 'Founder & CEO',
    company: 'Launchpad',
    avatar: '/avatars/avatar-4.webp',
    rating: 5,
  },
  {
    id: '5',
    quote: 'As a solo founder, Velocity Pro gave me a site that looks like a funded startup built it. Absolutely worth every penny.',
    author: 'Amara Okafor',
    role: 'Indie Hacker',
    company: 'TaskFlow',
    avatar: '/avatars/avatar-5.webp',
    rating: 5,
  },
  {
    id: '6',
    quote: 'The theming system is incredibly flexible. We customized everything in under a day to match our brand.',
    author: 'David Kim',
    role: 'Frontend Engineer',
    company: 'NovaTech',
    avatar: '/avatars/avatar-6.webp',
    rating: 4,
  },
  {
    id: '7',
    quote: 'Best template purchase we have ever made. Clean code, great docs, and the support is phenomenal.',
    author: 'Lisa Thompson',
    role: 'VP Engineering',
    company: 'CloudNine',
    avatar: '/avatars/avatar-7.webp',
    rating: 5,
  },
  {
    id: '8',
    quote: 'We use Velocity Pro for all our client projects now. It is our secret weapon for fast, beautiful launches.',
    author: 'Raj Patel',
    role: 'Agency Owner',
    company: 'PixelForge',
    avatar: '/avatars/avatar-8.webp',
    rating: 5,
  },
];

export const logos = [
  { name: 'Streamline AI', src: '/logos/logo-1.svg' },
  { name: 'DataPulse', src: '/logos/logo-2.svg' },
  { name: 'Pixelcraft', src: '/logos/logo-3.svg' },
  { name: 'Launchpad', src: '/logos/logo-4.svg' },
  { name: 'TaskFlow', src: '/logos/logo-5.svg' },
  { name: 'NovaTech', src: '/logos/logo-6.svg' },
  { name: 'CloudNine', src: '/logos/logo-7.svg' },
  { name: 'PixelForge', src: '/logos/logo-8.svg' },
];
