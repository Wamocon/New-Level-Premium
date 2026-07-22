export interface NavItem {
  key: string;
  /** section id (when hash) or route path */
  href: string;
  /** true = in-page anchor to a homepage section */
  hash?: boolean;
}

export const primaryNav: NavItem[] = [
  { key: 'about', href: 'values', hash: true },
  { key: 'objects', href: '/properties' },
  { key: 'complexes', href: 'projects', hash: true },
  { key: 'rental', href: '/properties' },
  { key: 'services', href: 'services', hash: true },
  { key: 'blog', href: 'blog', hash: true },
  { key: 'reviews', href: 'reviews', hash: true },
  { key: 'contacts', href: 'contacts', hash: true },
];
