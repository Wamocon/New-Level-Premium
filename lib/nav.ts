export interface NavItem {
  key: string;
  /** section id (when hash) or route path */
  href: string;
  /** true = in-page anchor to a homepage section */
  hash?: boolean;
}

export const primaryNav: NavItem[] = [
  { key: 'about', href: '/about' },
  { key: 'objects', href: '/properties' },
  { key: 'complexes', href: '/complexes' },
  { key: 'rental', href: '/rent' },
  { key: 'services', href: '/services' },
  { key: 'blog', href: '/blog' },
  { key: 'reviews', href: '/reviews' },
  { key: 'contacts', href: '/contacts' },
];
