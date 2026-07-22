export interface NavChild {
  key: string;
  href: string;
}
export interface NavItem {
  key: string;
  href: string;
  children?: NavChild[];
}

export const primaryNav: NavItem[] = [
  {
    key: 'about',
    href: '/about',
    children: [
      { key: 'aboutCompany', href: '/about' },
      { key: 'ourHistory', href: '/about/history' },
      { key: 'ourTeam', href: '/about/team' },
      { key: 'careers', href: '/careers' },
    ],
  },
  { key: 'objects', href: '/properties' },
  { key: 'complexes', href: '/complexes' },
  { key: 'rental', href: '/rental' },
  {
    key: 'services',
    href: '/services',
    children: [
      { key: 'propertyManagement', href: '/services/management' },
      { key: 'afterSales', href: '/services/after-sales' },
      { key: 'residence', href: '/services/residence' },
      { key: 'citizenship', href: '/services/citizenship' },
    ],
  },
  { key: 'blog', href: '/blog' },
  { key: 'reviews', href: '/reviews' },
  { key: 'contacts', href: '/contacts' },
];
