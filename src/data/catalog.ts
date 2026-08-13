import { Part } from '@/types';

const now = '2026-08-13T00:00:00.000Z';

export const CATALOG_PARTS: Part[] = [
  {
    id: 'volvo-fh-brake-disc',
    systemId: 'brake-system',
    name: 'Brake Disc',
    description:
      'Brake disc catalog entry for Volvo FH applications. Exact part number and vehicle fitment must be verified before ordering.',
    category: 'Brakes',
    specifications: {
      type: 'Brake Disc',
      vehicleType: 'Truck',
      manufacturer: 'Volvo Trucks',
      model: 'FH',
    },
    images: [],
    oemReferences: [],
    crossReferences: [],
    compatibility: [],
    sources: [
      {
        id: 'source-volvo-parts-catalog',
        partId: 'volvo-fh-brake-disc',
        name: 'Volvo Trucks Genuine Parts Catalog',
        url: 'https://www.volvotrucks.com/en-en/services/parts-accessories/parts.html',
        type: 'official',
        reliability: 'high',
      },
    ],
    verificationStatus: 'needs-verification',
    createdAt: now,
    updatedAt: now,
  },

  {
    id: 'volvo-fh-air-bellows',
    systemId: 'suspension-system',
    name: 'Air Bellows',
    description:
      'Air suspension bellows catalog entry for Volvo FH applications.',
    category: 'Suspension',
    specifications: {
      type: 'Air Bellows',
      vehicleType: 'Truck',
      manufacturer: 'Volvo Trucks',
      model: 'FH',
    },
    images: [],
    oemReferences: [],
    crossReferences: [],
    compatibility: [],
    sources: [
      {
        id: 'source-volvo-air-bellows',
        partId: 'volvo-fh-air-bellows',
        name: 'Volvo Trucks Genuine Parts Catalog',
        url: 'https://www.volvotrucks.com/en-en/services/parts-accessories/parts.html',
        type: 'official',
        reliability: 'high',
      },
    ],
    verificationStatus: 'needs-verification',
    createdAt: now,
    updatedAt: now,
  },

  {
    id: 'volvo-fh-air-drier-filter',
    systemId: 'brake-system',
    name: 'Air Drier Filter',
    description:
      'Air drier filter catalog entry for Volvo truck applications.',
    category: 'Filters',
    specifications: {
      type: 'Air Drier Filter',
      vehicleType: 'Truck',
      manufacturer: 'Volvo Trucks',
      model: 'FH',
    },
    images: [],
    oemReferences: [],
    crossReferences: [],
    compatibility: [],
    sources: [
      {
        id: 'source-volvo-air-drier',
        partId: 'volvo-fh-air-drier-filter',
        name: 'Volvo Trucks Genuine Parts Catalog',
        url: 'https://www.volvotrucks.com/en-en/services/parts-accessories/parts.html',
        type: 'official',
        reliability: 'high',
      },
    ],
    verificationStatus: 'needs-verification',
    createdAt: now,
    updatedAt: now,
  },

  {
    id: 'volvo-fh-oil-filter',
    systemId: 'engine-system',
    name: 'Oil Filter',
    description:
      'Oil filter catalog entry for Volvo FH applications.',
    category: 'Filters',
    specifications: {
      type: 'Oil Filter',
      vehicleType: 'Truck',
      manufacturer: 'Volvo Trucks',
      model: 'FH',
    },
    images: [],
    oemReferences: [],
    crossReferences: [],
    compatibility: [],
    sources: [
      {
        id: 'source-volvo-oil-filter',
        partId: 'volvo-fh-oil-filter',
        name: 'Volvo Trucks Genuine Parts Catalog',
        url: 'https://www.volvotrucks.com/en-en/services/parts-accessories/parts.html',
        type: 'official',
        reliability: 'high',
      },
    ],
    verificationStatus: 'needs-verification',
    createdAt: now,
    updatedAt: now,
  },

  {
    id: 'daf-xf-brake-disc',
    systemId: 'brake-system',
    name: 'Brake Disc',
    description:
      'DAF Genuine brake disc catalog entry for XF applications.',
    category: 'Brakes',
    specifications: {
      type: 'Brake Disc',
      vehicleType: 'Truck',
      manufacturer: 'DAF Trucks',
      model: 'XF',
    },
    images: [],
    oemReferences: [],
    crossReferences: [],
    compatibility: [],
    sources: [
      {
        id: 'source-daf-genuine-parts',
        partId: 'daf-xf-brake-disc',
        name: 'DAF Genuine Parts',
        url: 'https://parts.daf.com/en-gb/daf-original-parts',
        type: 'official',
        reliability: 'high',
      },
    ],
    verificationStatus: 'needs-verification',
    createdAt: now,
    updatedAt: now,
  },

  {
    id: 'daf-xf-brake-pad',
    systemId: 'brake-system',
    name: 'Brake Pad',
    description:
      'DAF Genuine brake pad catalog entry for truck applications.',
    category: 'Brakes',
    specifications: {
      type: 'Brake Pad',
      vehicleType: 'Truck',
      manufacturer: 'DAF Trucks',
      model: 'XF',
    },
    images: [],
    oemReferences: [],
    crossReferences: [],
    compatibility: [],
    sources: [
      {
        id: 'source-daf-brake-pads',
        partId: 'daf-xf-brake-pad',
        name: 'DAF Genuine Parts',
        url: 'https://parts.daf.com/en-gb/daf-original-parts',
        type: 'official',
        reliability: 'high',
      },
    ],
    verificationStatus: 'needs-verification',
    createdAt: now,
    updatedAt: now,
  },

  {
    id: 'daf-xf-air-filter',
    systemId: 'engine-system',
    name: 'Air Filter',
    description:
      'Air filter catalog entry for DAF XF applications.',
    category: 'Filters',
    specifications: {
      type: 'Air Filter',
      vehicleType: 'Truck',
      manufacturer: 'DAF Trucks',
      model: 'XF',
    },
    images: [],
    oemReferences: [],
    crossReferences: [],
    compatibility: [],
    sources: [
      {
        id: 'source-daf-air-filter',
        partId: 'daf-xf-air-filter',
        name: 'DAF Genuine Parts',
        url: 'https://parts.daf.com/en-gb/daf-original-parts',
        type: 'official',
        reliability: 'high',
      },
    ],
    verificationStatus: 'needs-verification',
    createdAt: now,
    updatedAt: now,
  },

  {
    id: 'mercedes-actros-brake-disc',
    systemId: 'brake-system',
    name: 'Genuine Brake Disc',
    description:
      'Mercedes-Benz Trucks Genuine brake disc catalog entry for selected truck applications.',
    category: 'Brakes',
    specifications: {
      type: 'Brake Disc',
      vehicleType: 'Truck',
      manufacturer: 'Mercedes-Benz Trucks',
      model: 'Actros',
    },
    images: [],
    oemReferences: [],
    crossReferences: [],
    compatibility: [],
    sources: [
      {
        id: 'source-mercedes-genuine-parts',
        partId: 'mercedes-actros-brake-disc',
        name: 'Mercedes-Benz Trucks Genuine Parts',
        url: 'https://www.mercedes-benz-trucks.com/int/en/parts/replacement-parts/genuine-parts.html',
        type: 'official',
        reliability: 'high',
      },
    ],
    verificationStatus: 'needs-verification',
    createdAt: now,
    updatedAt: now,
  },

  {
    id: 'mercedes-actros-air-filter',
    systemId: 'engine-system',
    name: 'Genuine Air Filter',
    description:
      'Mercedes-Benz Trucks Genuine air filter catalog entry.',
    category: 'Filters',
    specifications: {
      type: 'Air
