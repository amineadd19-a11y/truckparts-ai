import { Part } from '@/types';

export const CATALOG_PARTS: Part[] = [
  {
    id: 'catalog-volvo-fh-brake-disc-001',
    systemId: 'brake-system',
    name: 'Brake Disc',
    description:
      'Brake disc catalog entry for selected Volvo FH applications. Exact application must be verified before ordering.',
    category: 'Brakes',
    specifications: {
      type: 'Brake Disc',
      vehicleType: 'Truck',
      manufacturer: 'Volvo Trucks',
      model: 'FH',
      engine: 'D13',
    },
    images: [],
    oemReferences: [
      {
        id: 'oem-volvo-fh-brake-disc-001',
        partId: 'catalog-volvo-fh-brake-disc-001',
        manufacturerId: 'volvo-trucks',
        referenceNumber: 'VOLVO-BD-FH',
        alternateNumbers: [],
        verificationStatus: 'unverified',
        source: 'https://www.volvotrucks.com/',
      },
    ],
    crossReferences: [],
    compatibility: [
      {
        id: 'compat-volvo-fh-brake-disc-001',
        partId: 'catalog-volvo-fh-brake-disc-001',
        generationId: 'volvo-fh-generation',
        engineId: 'volvo-d13',
        notes:
          'Application must be verified by VIN, axle configuration and exact vehicle specification.',
        verified: false,
      },
    ],
    sources: [
      {
        id: 'source-volvo-fh-brake-disc-001',
        partId: 'catalog-volvo-fh-brake-disc-001',
        name: 'Volvo Trucks',
        url: 'https://www.volvotrucks.com/',
        type: 'official',
        reliability: 'high',
      },
    ],
    verificationStatus: 'needs-verification',
    createdAt: '2026-08-13T00:00:00.000Z',
    updatedAt: '2026-08-13T00:00:00.000Z',
  },

  {
    id: 'catalog-scania-r-brake-disc-001',
    systemId: 'brake-system',
    name: 'Brake Disc',
    description:
      'Brake disc catalog entry for selected Scania R Series applications. Exact application must be verified before ordering.',
    category: 'Brakes',
    specifications: {
      type: 'Brake Disc',
      vehicleType: 'Truck',
      manufacturer: 'Scania',
      model: 'R Series',
      engine: 'DC13',
    },
    images: [],
    oemReferences: [
      {
        id: 'oem-scania-r-brake-disc-001',
        partId: 'catalog-scania-r-brake-disc-001',
        manufacturerId: 'scania',
        referenceNumber: 'SCANIA-BD-R',
        alternateNumbers: [],
        verificationStatus: 'unverified',
        source: 'https://www.scania.com/',
      },
    ],
    crossReferences: [],
    compatibility: [
      {
        id: 'compat-scania-r-brake-disc-001',
        partId: 'catalog-scania-r-brake-disc-001',
        generationId: 'scania-r-generation',
        engineId: 'scania-dc13',
        notes:
          'Verify exact vehicle configuration before ordering.',
        verified: false,
      },
    ],
    sources: [
      {
        id: 'source-scania-r-brake-disc-001',
        partId: 'catalog-scania-r-brake-disc-001',
        name: 'Scania',
        url: 'https://www.scania.com/',
        type: 'official',
        reliability: 'high',
      },
    ],
    verificationStatus: 'needs-verification',
    createdAt: '2026-08-13T00:00:00.000Z',
    updatedAt: '2026-08-13T00:00:00.000Z',
  },

  {
    id: 'catalog-daf-xf-air-filter-001',
    systemId: 'engine-system',
    name: 'Air Filter',
    description:
      'Air filter catalog entry for selected DAF XF applications. Exact engine and filter housing must be verified.',
    category: 'Filters',
    specifications: {
      type: 'Air Filter',
      vehicleType: 'Truck',
      manufacturer: 'DAF Trucks',
      model: 'XF',
      engine: 'MX-13',
    },
    images: [],
    oemReferences: [
      {
        id: 'oem-daf-xf-air-filter-001',
        partId: 'catalog-daf-xf-air-filter-001',
        manufacturerId: 'daf-trucks',
        referenceNumber: 'DAF-XF-AF',
        alternateNumbers: [],
        verificationStatus: 'unverified',
        source: 'https://www.daf.com/',
      },
    ],
    crossReferences: [],
    compatibility: [
      {
        id: 'compat-daf-xf-air-filter-001',
        partId: 'catalog-daf-xf-air-filter-001',
        generationId: 'daf-xf-generation',
        engineId: 'daf-mx13',
        notes:
          'Verify exact engine, production specification and filter housing.',
        verified: false,
      },
    ],
    sources: [
      {
        id: 'source-daf-xf-air-filter-001',
        partId: 'catalog-daf-xf-air-filter-001',
        name: 'DAF Trucks',
        url: 'https://www.daf.com/',
        type: 'official',
        reliability: 'high',
      },
    ],
    verificationStatus: 'needs-verification',
    createdAt: '2026-08-13T00:00:00.000Z',
    updatedAt: '2026-08-13T00:00:00.000Z',
  },
];
