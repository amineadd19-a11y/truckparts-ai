import { Part } from '@/types';

const now = '2026-08-13T00:00:00.000Z';

export const CATALOG_PARTS: Part[] = [
  {
    id: 'volvo-fh-brake-disc',
    systemId: 'brake-system',
    name: 'Brake Disc',
    description:
      'Brake disc catalog entry for Volvo FH. Exact OEM number and fitment require verification.',
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
        id: 'source-volvo-parts',
        partId: 'volvo-fh-brake-disc',
        name: 'Volvo Trucks',
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
        name: 'Volvo Trucks',
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
    id: 'volvo-fh-air-filter',
    systemId: 'engine-system',
    name: 'Air Filter',
    description:
      'Air filter catalog entry for Volvo FH applications.',
    category: 'Filters',
    specifications: {
      type: 'Air Filter',
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
        id: 'source-volvo-air-filter',
        partId: 'volvo-fh-air-filter',
        name: 'Volvo Trucks',
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
      'Brake disc catalog entry for DAF XF applications.',
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
        id: 'source-daf-parts',
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
    id: 'daf-xf-brake-pad',
    systemId: 'brake-system',
    name: 'Brake Pad',
    description:
      'Brake pad catalog entry for DAF XF applications.',
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
        id: 'source-daf-brake-pad',
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
    id: 'mercedes-actros-brake-disc',
    systemId: 'brake-system',
    name: 'Brake Disc',
    description:
      'Brake disc catalog entry for Mercedes-Benz Actros applications.',
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
        id: 'source-mercedes-parts',
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
    name: 'Air Filter',
    description:
      'Air filter catalog entry for Mercedes-Benz Actros applications.',
    category: 'Filters',
    specifications: {
      type: 'Air Filter',
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
        id: 'source-mercedes-air-filter',
        partId: 'mercedes-actros-air-filter',
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
    id: 'mercedes-actros-air-spring',
    systemId: 'suspension-system',
    name: 'Air Spring',
    description:
      'Air spring catalog entry for Mercedes-Benz Actros applications.',
    category: 'Suspension',
    specifications: {
      type: 'Air Spring',
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
        id: 'source-mercedes-air-spring',
        partId: 'mercedes-actros-air-spring',
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
    id: 'scania-r-brake-disc',
    systemId: 'brake-system',
    name: 'Brake Disc',
    description:
      'Brake disc catalog entry for Scania R Series applications.',
    category: 'Brakes',
    specifications: {
      type: 'Brake Disc',
      vehicleType: 'Truck',
      manufacturer: 'Scania',
      model: 'R Series',
    },
    images: [],
    oemReferences: [],
    crossReferences: [],
    compatibility: [],
    sources: [
      {
        id: 'source-scania-parts',
        partId: 'scania-r-brake-disc',
        name: 'Scania',
        url: 'https://www.scania.com/',
        type: 'official',
        reliability: 'high',
      },
    ],
    verificationStatus: 'needs-verification',
    createdAt: now,
    updatedAt: now,
  },

  {
    id: 'man-tgx-brake-disc',
    systemId: 'brake-system',
    name: 'Brake Disc',
    description:
      'Brake disc catalog entry for MAN TGX applications.',
    category: 'Brakes',
    specifications: {
      type: 'Brake Disc',
      vehicleType: 'Truck',
      manufacturer: 'MAN Truck & Bus',
      model: 'TGX',
    },
    images: [],
    oemReferences: [],
    crossReferences: [],
    compatibility: [],
    sources: [
      {
        id: 'source-man-truck',
        partId: 'man-tgx-brake-disc',
        name: 'MAN Truck & Bus',
        url: 'https://www.man.eu/',
        type: 'official',
        reliability: 'high',
      },
    ],
    verificationStatus: 'needs-verification',
    createdAt: now,
    updatedAt: now,
  },

  {
    id: 'renault-t-range-brake-disc',
    systemId: 'brake-system',
    name: 'Brake Disc',
    description:
      'Brake disc catalog entry for Renault Trucks T applications.',
    category: 'Brakes',
    specifications: {
      type: 'Brake Disc',
      vehicleType: 'Truck',
      manufacturer: 'Renault Trucks',
      model: 'T',
    },
    images: [],
    oemReferences: [],
    crossReferences: [],
    compatibility: [],
    sources: [
      {
        id: 'source-renault-trucks',
        partId: 'renault-t-range-brake-disc',
        name: 'Renault Trucks',
        url: 'https://www.renault-trucks.com/',
        type: 'official',
        reliability: 'high',
      },
    ],
    verificationStatus: 'needs-verification',
    createdAt: now,
    updatedAt: now,
  },

  {
    id: 'iveco-s-way-oil-filter',
    systemId: 'engine-system',
    name: 'Oil Filter',
    description:
      'Oil filter catalog entry for Iveco S-Way applications.',
    category: 'Filters',
    specifications: {
      type: 'Oil Filter',
      vehicleType: 'Truck',
      manufacturer: 'Iveco',
      model: 'S-Way',
    },
    images: [],
    oemReferences: [],
    crossReferences: [],
    compatibility: [],
    sources: [
      {
        id: 'source-iveco-parts',
        partId: 'iveco-s-way-oil-filter',
        name: 'Iveco',
        url: 'https
