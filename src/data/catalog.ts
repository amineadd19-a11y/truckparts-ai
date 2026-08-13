import { Part } from '@/types';

export const CATALOG_PARTS: Part[] = [
  {
    id: 'volvo-fh-brake-disc-001',
    name: 'Brake Disc',
    description: 'Front brake disc for selected Volvo FH applications.',
    category: 'Brakes',
    subcategory: 'Brake Discs',
    brand: 'Volvo',
    manufacturer: 'Volvo Trucks',
    partNumber: 'VOLVO-BD-FH',
    oemReferences: [
      {
        brand: 'Volvo',
        referenceNumber: 'VOLVO-BD-FH',
        alternateNumbers: [],
      },
    ],
    crossReferences: [],
    compatibility: [
      {
        manufacturer: 'Volvo',
        model: 'FH',
        yearFrom: 2013,
        yearTo: 2026,
        engine: 'D13',
        notes: 'Application must be verified by VIN and axle configuration.',
      },
    ],
    specifications: {
      type: 'Brake Disc',
      vehicleType: 'Truck',
    },
    images: [],
    sources: [
      {
        name: 'Volvo Trucks',
        url: 'https://www.volvotrucks.com/',
        verified: true,
      },
    ],
    tags: ['volvo', 'fh', 'brake', 'disc', 'truck'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },

  {
    id: 'scania-r-brake-disc-001',
    name: 'Brake Disc',
    description: 'Brake disc for selected Scania R applications.',
    category: 'Brakes',
    subcategory: 'Brake Discs',
    brand: 'Scania',
    manufacturer: 'Scania',
    partNumber: 'SCANIA-BD-R',
    oemReferences: [
      {
        brand: 'Scania',
        referenceNumber: 'SCANIA-BD-R',
        alternateNumbers: [],
      },
    ],
    crossReferences: [],
    compatibility: [
      {
        manufacturer: 'Scania',
        model: 'R Series',
        yearFrom: 2013,
        yearTo: 2026,
        engine: 'DC13',
        notes: 'Verify exact application before ordering.',
      },
    ],
    specifications: {
      type: 'Brake Disc',
      vehicleType: 'Truck',
    },
    images: [],
    sources: [
      {
        name: 'Scania',
        url: 'https://www.scania.com/',
        verified: true,
      },
    ],
    tags: ['scania', 'r-series', 'brake', 'disc', 'truck'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },

  {
    id: 'daf-xf-air-filter-001',
    name: 'Air Filter',
    description: 'Air filter for selected DAF XF applications.',
    category: 'Filters',
    subcategory: 'Air Filters',
    brand: 'DAF',
    manufacturer: 'DAF Trucks',
    partNumber: 'DAF-XF-AF',
    oemReferences: [
      {
        brand: 'DAF',
        referenceNumber: 'DAF-XF-AF',
        alternateNumbers: [],
      },
    ],
    crossReferences: [],
    compatibility: [
      {
        manufacturer: 'DAF',
        model: 'XF',
        yearFrom: 2013,
        yearTo: 2026,
        engine: 'MX-13',
        notes: 'Verify exact engine and filter housing.',
      },
    ],
    specifications: {
      type: 'Air Filter',
      vehicleType: 'Truck',
    },
    images: [],
    sources: [
      {
        name: 'DAF Trucks',
        url: 'https://www.daf.com/',
        verified: true,
      },
    ],
    tags: ['daf', 'xf', 'air-filter', 'filter', 'truck'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];
