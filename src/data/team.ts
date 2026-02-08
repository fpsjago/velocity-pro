export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
  featured?: boolean;
}

export const team: TeamMember[] = [
  {
    id: '1',
    name: 'Alex Rivera',
    role: 'Co-Founder & CEO',
    bio: 'Former product lead at Stripe. Passionate about making developer tools accessible to everyone. Built three startups before Velocity.',
    avatar: '/avatars/team-1.webp',
    social: { twitter: '#', linkedin: '#', github: '#' },
    featured: true,
  },
  {
    id: '2',
    name: 'Mia Zhang',
    role: 'Co-Founder & CTO',
    bio: 'Ex-Google engineer with 12 years of experience in distributed systems. Leads the platform architecture and engineering culture.',
    avatar: '/avatars/team-2.webp',
    social: { twitter: '#', linkedin: '#', github: '#' },
    featured: true,
  },
  {
    id: '3',
    name: 'Jordan Williams',
    role: 'Head of Design',
    bio: 'Award-winning designer who believes great products are invisible. Previously at Figma and Notion.',
    avatar: '/avatars/team-3.webp',
    social: { twitter: '#', linkedin: '#' },
  },
  {
    id: '4',
    name: 'Priya Sharma',
    role: 'Head of Engineering',
    bio: 'Full-stack engineer passionate about performance and developer experience. Open-source contributor.',
    avatar: '/avatars/team-4.webp',
    social: { twitter: '#', github: '#' },
  },
  {
    id: '5',
    name: 'Tom Nakamura',
    role: 'Product Manager',
    bio: 'Customer-obsessed PM who turns user feedback into delightful features. Previously at Linear.',
    avatar: '/avatars/team-5.webp',
    social: { twitter: '#', linkedin: '#' },
  },
  {
    id: '6',
    name: 'Sofia Martinez',
    role: 'Growth Lead',
    bio: 'Data-driven marketer focused on sustainable growth. Scaled previous startup from 0 to 50K users.',
    avatar: '/avatars/team-6.webp',
    social: { twitter: '#', linkedin: '#' },
  },
  {
    id: '7',
    name: 'Liam O\'Brien',
    role: 'Senior Engineer',
    bio: 'React specialist and performance nerd. Loves optimizing every millisecond of load time.',
    avatar: '/avatars/team-7.webp',
    social: { github: '#' },
  },
  {
    id: '8',
    name: 'Aisha Patel',
    role: 'Customer Success',
    bio: 'Ensures every customer has a stellar experience. Believer in proactive support and documentation.',
    avatar: '/avatars/team-8.webp',
    social: { twitter: '#', linkedin: '#' },
  },
];
