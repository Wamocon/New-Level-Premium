import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { projects } from '@/lib/data/projects';
import { complexDetails } from '@/lib/data/complexDetails';
import { ComplexDetail } from '@/components/complexes/ComplexDetail';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }));
}

export default async function ComplexPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const project = projects.find((p) => p.id === slug);
  if (!project) notFound();
  return <ComplexDetail project={project} detail={complexDetails[slug] ?? null} />;
}
