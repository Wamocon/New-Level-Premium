import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
  },
  transpilePackages: ['three'],
  experimental: {
    optimizePackageImports: ['lucide-react', '@react-three/drei'],
  },
};

export default withNextIntl(nextConfig);
