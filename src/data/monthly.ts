import { getCollection, type CollectionEntry } from 'astro:content';

export type MonthlyEntry = CollectionEntry<'monthly'>;

export interface MonthlyHighlight {
  label: string;
  icon: 'file' | 'scan' | 'care';
  title: string;
  summary: string;
  details?: string[];
}

export const previewHighlights: MonthlyHighlight[] = [
  {
    label: 'Update',
    icon: 'file',
    title: 'News from the clinic',
    summary:
      'Clinic news, appointment information and practical updates will appear here.',
  },
  {
    label: 'Did you know?',
    icon: 'scan',
    title: 'Ultrasound, beyond pregnancy',
    summary:
      'Ultrasound can also assess the thyroid, breast, muscles, tendons and other soft tissues.',
  },
  {
    label: 'Good to know',
    icon: 'care',
    title: 'One scan or question, explained',
    summary:
      'Each month we will take a closer look at a common examination or patient question.',
  },
];

export function highlightsFor(entry: MonthlyEntry): MonthlyHighlight[] {
  return [
    { label: 'Update', icon: 'file', ...entry.data.update },
    { label: 'Did you know?', icon: 'scan', ...entry.data.didYouKnow },
    { label: 'Good to know', icon: 'care', ...entry.data.goodToKnow },
  ];
}

export function monthLabel(id: string): string {
  if (!/^\d{4}-(0[1-9]|1[0-2])$/.test(id)) {
    throw new Error(`Monthly blog file must be named YYYY-MM.yml: ${id}`);
  }
  return new Intl.DateTimeFormat('en-NZ', {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${id}-01T00:00:00Z`));
}

export async function publishedMonthlyEntries(): Promise<MonthlyEntry[]> {
  const entries = (await getCollection('monthly')).filter(
    (entry) => !entry.data.draft,
  );
  entries.forEach((entry) => monthLabel(entry.id));
  return entries.sort((a, b) => b.id.localeCompare(a.id));
}
