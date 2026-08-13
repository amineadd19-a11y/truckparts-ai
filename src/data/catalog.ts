import { Part, Source } from '@/types';

const now = '2026-08-13T00:00:00.000Z';

/**
 * TruckParts AI Catalog
 *
 * IMPORTANT:
 * - No OEM numbers are invented.
 * - No compatibility is claimed without verified generation/engine data.
 * - Official manufacturer sources are attached to catalog entries.
 * - The catalog is generated from structured definitions to reduce errors.
 */

type SystemId =
  | 'brake-system'
  | 'engine-system'
  | 'suspension-system'
  | 'transmission-system'
  | 'electrical-system'
  | 'cooling-system';

type PartTemplate = {
  slug: string;
  name: string;
  category: string;
  systemId: SystemId;
  tags: string[];
};

type ModelDefinition = {
  id: string;
  name: string;
};

type ManufacturerDefinition = {
  id: string;
  name: string;
  source: SourceDefinition;
  models: ModelDefinition[];
};

type SourceDefinition = {
  id: string;
  name: string;
  url: string;
};

/* ============================================================
   PART TEMPLATES
   ============================================================ */

const PART_TEMPLATES: PartTemplate[] = [
  {
    slug: 'brake-disc',
    name: 'Brake Disc',
    category: 'Brakes',
    systemId: 'brake-system',
    tags: ['brake', 'disc'],
  },
  {
    slug: 'brake-pad',
    name: 'Brake Pad',
    category: 'Brakes',
    systemId: 'brake-system',
    tags: ['brake', 'pad'],
  },
  {
    slug: 'oil-filter',
    name: 'Oil Filter',
    category: 'Filters',
    systemId: 'engine-system',
    tags: ['filter', 'oil', 'engine'],
  },
  {
    slug: 'air-filter',
    name: 'Air Filter',
    category: 'Filters',
    systemId: 'engine-system',
    tags: ['filter', 'air', 'engine'],
  },
  {
    slug: 'fuel-filter',
    name: 'Fuel Filter',
    category: 'Filters',
    systemId: 'engine-system',
    tags: ['filter', 'fuel', 'engine'],
  },
  {
    slug: 'air-compressor',
    name: 'Air Compressor',
    category: 'Engine',
    systemId: 'engine-system',
    tags: ['compressor', 'air', 'engine'],
  },
  {
    slug: 'clutch-kit',
    name: 'Clutch Kit',
    category: 'Transmission',
    systemId: 'transmission-system',
    tags: ['clutch', 'transmission'],
  },
  {
    slug: 'shock-absorber',
    name: 'Shock Absorber',
    category: 'Suspension',
    systemId: 'suspension-system',
    tags: ['suspension', 'shock absorber'],
  },
  {
    slug: 'alternator',
    name: 'Alternator',
    category: 'Electrical',
    systemId: 'electrical-system',
    tags: ['alternator', 'electrical'],
  },
  {
    slug: 'water-pump',
    name: 'Water Pump',
    category: 'Cooling System',
    systemId: 'cooling-system',
    tags: ['cooling', 'water pump'],
  },
];

/* ============================================================
   OFFICIAL MANUFACTURER SOURCES
   ============================================================ */

const MANUFACTURERS: ManufacturerDefinition[] = [
  {
    id: 'volvo-trucks',
    name: 'Volvo Trucks',
    source: {
      id: 'source-volvo',
      name: 'Volvo Trucks',
      url: 'https://www.volvotrucks.com/',
    },
    models: [
      { id: 'volvo-fh', name: 'FH' },
      { id: 'volvo-fm', name: 'FM' },
      { id: 'volvo-fmx', name: 'FMX' },
    ],
  },

  {
    id: 'daf-trucks',
    name: 'DAF Trucks',
    source: {
      id: 'source-daf',
      name: 'DAF Trucks',
      url: 'https://www.daf.com/',
    },
    models: [
      { id: 'daf-xf', name: 'XF' },
      { id: 'daf-xg', name: 'XG' },
      { id: 'daf-cf', name: 'CF' },
    ],
  },

  {
    id: 'mercedes-benz-trucks',
    name: 'Mercedes-Benz Trucks',
    source: {
      id: 'source-mercedes',
      name: 'Mercedes-Benz Trucks',
      url: 'https://www.mercedes-benz-trucks.com/',
    },
    models: [
      { id: 'mercedes-actros', name: 'Actros' },
      { id: 'mercedes-arocs', name: 'Arocs' },
      { id: 'mercedes-atego', name: 'Atego' },
    ],
  },

  {
    id: 'scania',
    name: 'Scania',
    source: {
      id: 'source-scania',
      name: 'Scania',
      url: 'https://www.scania.com/',
    },
    models: [
      { id: 'scania-r', name: 'R-Series' },
      { id: 'scania-s', name: 'S-Series' },
      { id: 'scania-p', name: 'P-Series' },
    ],
  },

  {
    id: 'man-truck-bus',
    name: 'MAN Truck & Bus',
    source: {
      id: 'source-man',
      name: 'MAN Truck & Bus',
      url: 'https://www.man.eu/',
    },
    models: [
      { id: 'man-tgx', name: 'TGX' },
      { id: 'man-tgs', name: 'TGS' },
      { id: 'man-tgm', name: 'TGM' },
    ],
  },

  {
    id: 'renault-trucks',
    name: 'Renault Trucks',
    source: {
      id: 'source-renault',
      name: 'Renault Trucks',
      url: 'https://www.renault-trucks.com/',
    },
    models: [
      { id: 'renault-t', name: 'T' },
      { id: 'renault-c', name: 'C' },
      { id: 'renault-k', name: 'K' },
    ],
  },

  {
    id: 'iveco',
    name: 'Iveco',
    source: {
      id: 'source-iveco',
      name: 'Iveco',
      url: 'https://www.iveco.com/',
    },
    models: [
      { id: 'iveco-s-way', name: 'S-Way' },
      { id: 'iveco-x-way', name: 'X-Way' },
      { id: 'iveco-eurocargo', name: 'Eurocargo' },
    ],
  },
];

/* ============================================================
   HELPERS
   ============================================================ */

function createSource(
  source: SourceDefinition,
  partId: string,
): Source {
  return {
    id: `${source.id}-${partId}`,
    partId,
    name: source.name,
    url: source.url,
    type: 'official',
    reliability: 'high',
  };
}

function createPart(
  manufacturer: ManufacturerDefinition,
  model: ModelDefinition,
  template: PartTemplate,
): Part {
  const id = `${model.id}-${template.slug}`;

  const tags = [
    ...template.tags,
    manufacturer.id,
    model.name.toLowerCase().replace(/\s+/g, '-'),
  ];

  return {
    id,
    systemId: template.systemId,
    name: template.name,

    description:
      `${template.name} catalog entry for ` +
      `${manufacturer.name} ${model.name} truck applications. ` +
      `OEM reference and exact compatibility require verification ` +
      `against manufacturer-specific technical data.`,

    category: template.category,

    specifications: {
      type: template.name,
      vehicleType: 'Truck',
      manufacturer: manufacturer.name,
      manufacturerId: manufacturer.id,
      model: model.name,
      tags: tags.join(', '),
    },

    /*
     * Images are intentionally empty until a legally usable
     * image source is verified for the specific part.
     */
    images: [],

    /*
     * NEVER invent OEM numbers.
     *
     * These remain empty until we verify:
     * - manufacturer catalog
     * - official parts documentation
     * - trusted parts catalog
     */
    oemReferences: [],

    /*
     * Cross references require verified OEM relationships.
     */
    crossReferences: [],

    /*
     * Exact compatibility requires:
     * generationId + optional engineId.
     */
    compatibility: [],

    sources: [
      createSource(manufacturer.source, id),
    ],

    verificationStatus: 'needs-verification',

    createdAt: now,
    updatedAt: now,
  };
}

/* ============================================================
   GENERATED CATALOG
   ============================================================ */

export const CATALOG_PARTS: Part[] = MANUFACTURERS.flatMap(
  (manufacturer) =>
    manufacturer.models.flatMap((model) =>
      PART_TEMPLATES.map((template) =>
        createPart(manufacturer, model, template),
      ),
    ),
);

/* ============================================================
   CATALOG HELPERS
   ============================================================ */

export const CATALOG_MANUFACTURERS = MANUFACTURERS.map(
  ({ id, name }) => ({
    id,
    name,
  }),
);

export const CATALOG_MODELS = MANUFACTURERS.flatMap(
  (manufacturer) =>
    manufacturer.models.map((model) => ({
      id: model.id,
      manufacturerId: manufacturer.id,
      name: model.name,
    })),
);

export const CATALOG_CATEGORIES = Array.from(
  new Set(CATALOG_PARTS.map((part) => part.category)),
);

export const CATALOG_SYSTEMS = Array.from(
  new Set(CATALOG_PARTS.map((part) => part.systemId)),
);

/**
 * Simple catalog search.
 *
 * Searches:
 * - part name
 * - category
 * - manufacturer
 * - model
 * - tags
 * - part id
 */
export function searchCatalog(query: string): Part[] {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return CATALOG_PARTS;
  }

  return CATALOG_PARTS.filter((part) => {
    const searchableText = [
      part.id,
      part.name,
      part.category,
      part.description ?? '',
      part.specifications?.manufacturer ?? '',
      part.specifications?.manufacturerId ?? '',
      part.specifications?.model ?? '',
      part.specifications?.tags ?? '',
    ]
      .join(' ')
      .toLowerCase();

    return searchableText.includes(normalizedQuery);
  });
}

/**
 * Find parts for one manufacturer.
 */
export function getPartsByManufacturer(
  manufacturerId: string,
): Part[] {
  return CATALOG_PARTS.filter(
    (part) =>
      part.specifications?.manufacturerId === manufacturerId,
  );
}

/**
 * Find parts for one truck model.
 */
export function getPartsByModel(model: string): Part[] {
  const normalizedModel = model.trim().toLowerCase();

  return CATALOG_PARTS.filter(
    (part) =>
      part.specifications?.model?.toLowerCase() ===
      normalizedModel,
  );
}

/**
 * Find parts by category.
 */
export function getPartsByCategory(category: string): Part[] {
  const normalizedCategory = category.trim().toLowerCase();

  return CATALOG_PARTS.filter(
    (part) =>
      part.category.toLowerCase() === normalizedCategory,
  );
  }
