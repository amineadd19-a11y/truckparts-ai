/**
 * Search utilities — name, OEM, and chassis number (VIN)
 */

import { Part } from '@/types';
import { DEMO_PARTS } from '@/types/catalog';

export type SearchType = 'all' | 'name' | 'oem' | 'chassis';

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number,
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

const normalizeChassis = (value: string): string =>
  value.replace(/[\s\-]/g, '').toUpperCase();

export const searchParts = (
  query: string,
  parts: Part[] = DEMO_PARTS as Part[],
  searchType: SearchType = 'all',
): Part[] => {
  const normalizedQuery = query.trim();
  if (!normalizedQuery) return [];

  const q = normalizedQuery.toLowerCase();
  const chassisQ = normalizeChassis(normalizedQuery);

  return parts.filter((part) => {
    const matchName =
      part.name.toLowerCase().includes(q) ||
      part.description?.toLowerCase().includes(q) ||
      part.category.toLowerCase().includes(q);

    const matchOem = part.oemReferences?.some(
      (ref) =>
        ref.referenceNumber.toLowerCase().includes(q) ||
        ref.alternateNumbers?.some((alt) => alt.toLowerCase().includes(q)),
    );

    const matchChassis = part.compatibility?.some((comp: any) => {
      const prefixes: string[] = comp.chassisPrefixes || [];
      const examples: string[] = comp.exampleChassis || [];
      return (
        prefixes.some(
          (p) =>
            chassisQ.startsWith(normalizeChassis(p)) ||
            normalizeChassis(p).startsWith(chassisQ),
        ) ||
        examples.some(
          (ex) =>
            normalizeChassis(ex).includes(chassisQ) ||
            chassisQ.includes(normalizeChassis(ex)),
        )
      );
    });

    if (searchType === 'name') return matchName;
    if (searchType === 'oem') return !!matchOem;
    if (searchType === 'chassis') return !!matchChassis;
    return matchName || !!matchOem || !!matchChassis;
  });
};

export const filterPartsByCategory = (parts: Part[], category: string): Part[] => {
  return parts.filter((part) => part.category === category);
};

export const sortPartsByRelevance = (parts: Part[], query: string): Part[] => {
  const normalized = query.toLowerCase();
  return [...parts].sort((a, b) => {
    const aMatch = a.name.toLowerCase().startsWith(normalized) ? 1 : 0;
    const bMatch = b.name.toLowerCase().startsWith(normalized) ? 1 : 0;
    return bMatch - aMatch;
  });
};

class SearchCache {
  private cache: Map<string, Part[]> = new Map();
  private maxSize = 50;

  get(key: string): Part[] | null {
    return this.cache.get(key) || null;
  }

  set(key: string, results: Part[]): void {
    if (this.cache.size >= this.maxSize) {
      const firstKey = this.cache.keys().next().value;
      if (firstKey) this.cache.delete(firstKey);
    }
    this.cache.set(key, results);
  }

  clear(): void {
    this.cache.clear();
  }
}

export const searchCache = new SearchCache();
