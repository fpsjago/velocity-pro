export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
  icon?: string;
  description?: string;
}

export const mainNav: NavLink[] = [
  {
    label: 'Features',
    href: '/features',
    children: [
      { label: 'Analytics', href: '/features#analytics', description: 'Real-time insights and reporting', icon: 'BarChart3' },
      { label: 'Automation', href: '/features#automation', description: 'Streamline your workflows', icon: 'Zap' },
      { label: 'Integrations', href: '/features#integrations', description: 'Connect your favorite tools', icon: 'Plug' },
      { label: 'Security', href: '/features#security', description: 'Enterprise-grade protection', icon: 'Shield' },
    ],
  },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Docs', href: '/docs' },
];

export const footerNav = {
  product: [
    { label: 'Features', href: '/features' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Changelog', href: '/changelog' },
    { label: 'Docs', href: '/docs' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Contact', href: '/contact' },
  ],
  resources: [
    { label: 'FAQ', href: '/faq' },
    { label: 'Support', href: '/contact' },
    { label: 'Status', href: '#' },
    { label: 'API', href: '/docs' },
  ],
  legal: [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Cookies', href: '#' },
  ],
};

export const socialLinks = [
  { label: 'Twitter', href: '#', icon: 'Twitter' },
  { label: 'GitHub', href: '#', icon: 'Github' },
  { label: 'LinkedIn', href: '#', icon: 'Linkedin' },
  { label: 'Discord', href: '#', icon: 'MessageCircle' },
];
