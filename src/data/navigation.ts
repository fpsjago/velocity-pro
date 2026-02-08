const BASE_URL = import.meta.env.BASE_URL;

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
    href: `${BASE_URL}features/`,
    children: [
      { label: 'Analytics', href: `${BASE_URL}features/#analytics`, description: 'Real-time insights and reporting', icon: 'BarChart3' },
      { label: 'Automation', href: `${BASE_URL}features/#automation`, description: 'Streamline your workflows', icon: 'Zap' },
      { label: 'Integrations', href: `${BASE_URL}features/#integrations`, description: 'Connect your favorite tools', icon: 'Plug' },
      { label: 'Security', href: `${BASE_URL}features/#security`, description: 'Enterprise-grade protection', icon: 'Shield' },
    ],
  },
  { label: 'Pricing', href: `${BASE_URL}pricing/` },
  { label: 'About', href: `${BASE_URL}about/` },
  { label: 'Blog', href: `${BASE_URL}blog/` },
  { label: 'Docs', href: `${BASE_URL}docs/getting-started/` },
];

export const footerNav = {
  product: [
    { label: 'Features', href: `${BASE_URL}features/` },
    { label: 'Pricing', href: `${BASE_URL}pricing/` },
    { label: 'Changelog', href: `${BASE_URL}changelog/` },
    { label: 'Docs', href: `${BASE_URL}docs/getting-started/` },
  ],
  company: [
    { label: 'About', href: `${BASE_URL}about/` },
    { label: 'Blog', href: `${BASE_URL}blog/` },
    { label: 'Case Studies', href: `${BASE_URL}case-studies/` },
    { label: 'Contact', href: `${BASE_URL}contact/` },
  ],
  resources: [
    { label: 'FAQ', href: `${BASE_URL}faq/` },
    { label: 'Support', href: `${BASE_URL}contact/` },
    { label: 'Status', href: '#' },
    { label: 'API', href: `${BASE_URL}docs/getting-started/` },
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
