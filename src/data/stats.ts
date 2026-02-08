export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { id: '1', value: 10000, suffix: '+', label: 'Active Users' },
  { id: '2', value: 99, suffix: '.9%', label: 'Uptime SLA' },
  { id: '3', value: 150, suffix: '+', label: 'Countries' },
  { id: '4', value: 4, suffix: '.9/5', label: 'Customer Rating' },
];
