/**
 * TruckParts AI - Smart Search Utilities
 */

import { Part, SearchResult } from '@/types';
import { DEMO_PARTS } from '@/types/catalog';

/**
 * Normalize search text.
 *
 * Makes references such as:
 * 2170-7132
 * 2170 7132
 * 21707132
 *
 * searchable as the same value.
 */
const normalizeSearchText = (value: string): string => {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '');
};

/**
 * Debounce function for search
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number,
): ((...args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout> | undefined;

  return (...args: Parameters<T>) => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Calculate how relevant a part is to a search query.
 *
 * Higher score = better match.
 */
const getSearchScore = (part: Part, query: string): number => {
  const normalizedQuery = normalizeSearchText(query);

  if (!normalizedQuery) {
    return 0;
  }

  const name = normalizeSearchText(part.name);
  const description = normalizeSearchText(part.description || '');
  const category = normalizeSearchText(part.category);

  let score = 0;

  // Exact part name
  if (name === normalizedQuery) {
    score += 100;
  }

  // Name starts with query
  if (name.startsWith(normalizedQuery)) {
    score += 70;
  }

  // Name contains query
  if (name.includes(normalizedQuery)) {
    score += 50;
  }

  // Category
  if (category === normalizedQuery) {
    score += 35;
  } else if (category.includes(normalizedQuery)) {
    score += 20;
  }

  // Description
  if (description.includes(normalizedQuery)) {
    score += 15;
  }

  // OEM and alternate references
  for (const oem of part.oemReferences || []) {
    const reference = normalizeSearchText(oem.referenceNumber);

    if (reference === normalizedQuery) {
      score += 200;
    } else if (reference.includes(normalizedQuery)) {
      score += 120;
    }

    for (const alternate of oem.alternateNumbers || []) {
      const normalizedAlternate = normalizeSearchText(alternate);

      if (normalizedAlternate === normalizedQuery) {
        score += 180;
      } else if (normalizedAlternate.includes(normalizedQuery)) {
        score += 110;
      }
    }
  }

  // Cross-reference IDs
  for (const crossReference of part.crossReferences || []) {
    const referencedPartId = normalizeSearchText(
      crossReference.referencedPartId,
    );

    if (referencedPartId === normalizedQuery) {
      score += 80;
    } else if (referencedPartId.includes(normalizedQuery)) {
      score += 40;
    }
  }

  // Specifications
  for (const [key, value] of Object.entries(part.specifications || {})) {
    const normalizedKey = normalizeSearchText(key);
    const normalizedValue = normalizeSearchText(value);

    if (normalizedValue === normalizedQuery) {
      score += 60;
    } else if (normalizedValue.includes(normalizedQuery)) {
      score += 30;
    }

    if (normalizedKey.includes(normalizedQuery)) {
      score += 10;
    }
  }

  return score;
};

/**
 * Smart full-text search.
 *
 * Searches:
 * - Part name
 * - Description
 * - Category
 * - OEM references
 * - Alternate OEM numbers
 * - Cross references
 * - Specifications
 */
export const searchParts = (
  query: string,
  parts: Part[] = DEMO_PARTS,
): Part[] => {
  const trimmedQuery = query.trim();

  if (!trimmedQuery) {
    return [];
  }

  return parts
    .map((part) => ({
      part,
      score: getSearchScore(part, trimmedQuery),
    }))
    .filter((result) => result.score > 0)
    .sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }

      return a.part.name.localeCompare(b.part.name);
    })
    .map((result) => result.part);
};

/**
 * Filter parts by category
 */
export const filterPartsByCategory = (
  parts: Part[],
  category: string,
): Part[] => {
  return parts.filter((part) => part.category === category);
};

/**
 * Sort parts by relevance
 */
export const sortPartsByRelevance = (
  parts: Part[],
  query: string,
): Part[] => {
  return [...parts].sort((a, b) => {
    const scoreA = getSearchScore(a, query);
    const scoreB = getSearchScore(b, query);

    if (scoreA !== scoreB) {
      return scoreB - scoreA;
    }

    return a.name.localeCompare(b.name);
  });
};

/**
 * Search history storage
 */
export const searchHistoryStorage = {
  get(): string[] {
    if (typeof window === 'undefined') {
      return [];
    }

    try {
      const stored = localStorage.getItem('searchHistory');

      if (!stored) {
        return [];
      }

      const parsed = JSON.parse(stored);

      return Array.isArray(parsed)
        ? parsed.filter((item): item is string => typeof item === 'string')
        : [];
    } catch {
      return [];
    }
  },

  add(query: string): void {
    if (typeof window === 'undefined') {
      return;
    }

    const normalizedQuery = query.trim();

    if (!normalizedQuery) {
      return;
    }

    try {
      const history = this.get().filter(
        (item) => item !== normalizedQuery,
      );

      const updatedHistory = [
        normalizedQuery,
        ...history,
      ].slice(0, 20);

      localStorage.setItem(
        'searchHistory',
        JSON.stringify(updatedHistory),
      );
    } catch {
      // Ignore localStorage errors
    }
  },

  clear(): void {
    if (typeof window === 'undefined') {
      return;
    }

    try {
      localStorage.removeItem('searchHistory');
    } catch {
      // Ignore localStorage errors
    }
  },
};

/**
 * Search cache
 */
class SearchCache {
  private cache: Map<string, SearchResult[]> = new Map();

  private maxSize = 50;

  get(key: string): SearchResult[] | null {
    return this.cache.get(key) || null;
  }

  set(key: string, results: SearchResult[]): void {
    if (this.cache.size >= this.maxSize) {
      const firstKey = this.cache.keys().next().value;

      if (firstKey !== undefined) {
        this.cache.delete(firstKey);
      }
    }

    this.cache.set(key, results);
  }

  clear(): void {
    this.cache.clear();
  }
}

export const searchCache = new SearchCache();
