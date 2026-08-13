import { Part, Source } from '@/types';

const now = '2026-08-13T00:00:00.000Z';

type SystemId =
  | 'brake-system'
  | 'engine-system'
  | 'suspension-system'
  | 'transmission-system'
  | 'electrical-system'
  | 'cooling-system'
  | 'exhaust-system'
  | 'steering-system'
  | 'cabin-system';

type SourceDefinition = {
  id: string;
  name: string;
  url: string;
};

type PartTemplate = {
  slug: string;
  name: string;
  category: string;
  systemId: SystemId;
  tags: string[];
  aftermarketBrands: string[];
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

/*
 * IMPORTANT:
 * Do not invent OEM numbers.
 * OEM references are added separately only after verification.
 */

const FILTER_BRANDS = [
  'MANN-FILTER',
  'MAHLE',
  'HENGST',
  'DONALDSON',
  'PURFLUX',
  'UFI',
  'SOGEFI',
];

const BRAKE_BRANDS = [
  'KNORR-BREMSE',
  'WABCO',
  'TRW',
  'BREMBO',
  'FEBI',
  'HALDEX',
];

const SUSPENSION_BRANDS = [
  'SACHS',
  'ZF',
  'FEBI',
  'LEMFÖRDER',
  'SKF',
];

const TRANSMISSION_BRANDS = [
  'SACHS',
  'LuK',
  'ZF',
  'VALEO',
];

const ELECTRICAL_BRANDS = [
  'BOSCH',
  'HELLA',
  'DENSO',
  'VALEO',
];

const COOLING_BRANDS = [
  'MAHLE',
  'BEHR',
  'NRF',
  'DAYCO',
  'GATES',
];

const ENGINE_BRANDS = [
  'BOSCH',
  'DENSO',
  'GATES',
  'DAYCO',
  'CONTITECH',
  'SKF',
  'FAG',
];

const STEERING_BRANDS = [
  'ZF',
  'TRW',
  'FEBI',
  'LEMFÖRDER',
];

const EXHAUST_BRANDS = [
  'BOSAL',
  'FEBI',
  'HJS',
];

const CABIN_BRANDS = [
  'HELLA',
  'FEBI',
  'VALEO',
];

const PART_TEMPLATES: PartTemplate[] = [
  // ============================================================
  // BRAKES
  // ============================================================

  {
    slug: 'brake-disc',
    name: 'Brake Disc',
    category: 'Brakes',
    systemId: 'brake-system',
    tags: ['brake', 'disc'],
    aftermarketBrands: BRAKE_BRANDS,
  },
  {
    slug: 'brake-pad',
    name: 'Brake Pad',
    category: 'Brakes',
    systemId: 'brake-system',
    tags: ['brake', 'pad'],
    aftermarketBrands: BRAKE_BRANDS,
  },
  {
    slug: 'brake-drum',
    name: 'Brake Drum',
    category: 'Brakes',
    systemId: 'brake-system',
    tags: ['brake', 'drum'],
    aftermarketBrands: BRAKE_BRANDS,
  },
  {
    slug: 'brake-caliper',
    name: 'Brake Caliper',
    category: 'Brakes',
    systemId: 'brake-system',
    tags: ['brake', 'caliper'],
    aftermarketBrands: BRAKE_BRANDS,
  },
  {
    slug: 'brake-chamber',
    name: 'Brake Chamber',
    category: 'Brakes',
    systemId: 'brake-system',
    tags: ['brake', 'air', 'chamber'],
    aftermarketBrands: ['KNORR-BREMSE', 'WABCO', 'HALDEX'],
  },
  {
    slug: 'brake-valve',
    name: 'Brake Valve',
    category: 'Brakes',
    systemId: 'brake-system',
    tags: ['brake', 'valve'],
    aftermarketBrands: ['KNORR-BREMSE', 'WABCO'],
  },
  {
    slug: 'brake-lining',
    name: 'Brake Lining Kit',
    category: 'Brakes',
    systemId: 'brake-system',
    tags: ['brake', 'lining'],
    aftermarketBrands: BRAKE_BRANDS,
  },
  {
    slug: 'abs-sensor',
    name: 'ABS Sensor',
    category: 'Brakes',
    systemId: 'brake-system',
    tags: ['brake', 'abs', 'sensor'],
    aftermarketBrands: ['KNORR-BREMSE', 'WABCO', 'BOSCH'],
  },

  // ============================================================
  // FILTERS
  // ============================================================

  {
    slug: 'oil-filter',
    name: 'Oil Filter',
    category: 'Filters',
    systemId: 'engine-system',
    tags: ['filter', 'oil', 'engine'],
    aftermarketBrands: FILTER_BRANDS,
  },
  {
    slug: 'air-filter',
    name: 'Air Filter',
    category: 'Filters',
    systemId: 'engine-system',
    tags: ['filter', 'air', 'engine'],
    aftermarketBrands: FILTER_BRANDS,
  },
  {
    slug: 'fuel-filter',
    name: 'Fuel Filter',
    category: 'Filters',
    systemId: 'engine-system',
    tags: ['filter', 'fuel', 'engine'],
    aftermarketBrands: FILTER_BRANDS,
  },
  {
    slug: 'cabin-air-filter',
    name: 'Cabin Air Filter',
    category: 'Filters',
    systemId: 'cabin-system',
    tags: ['filter', 'cabin', 'air'],
    aftermarketBrands: FILTER_BRANDS,
  },
  {
    slug: 'hydraulic-filter',
    name: 'Hydraulic Filter',
    category: 'Filters',
    systemId: 'engine-system',
    tags: ['filter', 'hydraulic'],
    aftermarketBrands: FILTER_BRANDS,
  },

  // ============================================================
  // ENGINE
  // ============================================================

  {
    slug: 'fuel-pump',
    name: 'Fuel Pump',
    category: 'Engine',
    systemId: 'engine-system',
    tags: ['fuel', 'pump', 'engine'],
    aftermarketBrands: ['BOSCH', 'DENSO'],
  },
  {
    slug: 'oil-pump',
    name: 'Oil Pump',
    category: 'Engine',
    systemId: 'engine-system',
    tags: ['oil', 'pump', 'engine'],
    aftermarketBrands: ['FEBI'],
  },
  {
    slug: 'turbocharger',
    name: 'Turbocharger',
    category: 'Engine',
    systemId: 'engine-system',
    tags: ['turbo', 'turbocharger', 'engine'],
    aftermarketBrands: ['GARRETT', 'BOSCH'],
  },
  {
    slug: 'air-compressor',
    name: 'Air Compressor',
    category: 'Engine',
    systemId: 'engine-system',
    tags: ['compressor', 'air', 'engine'],
    aftermarketBrands: ['KNORR-BREMSE', 'WABCO'],
  },
  {
    slug: 'injector',
    name: 'Fuel Injector',
    category: 'Engine',
    systemId: 'engine-system',
    tags: ['injector', 'fuel', 'engine'],
    aftermarketBrands: ['BOSCH', 'DENSO'],
  },
  {
    slug: 'timing-belt-kit',
    name: 'Timing Belt Kit',
    category: 'Engine',
    systemId: 'engine-system',
    tags: ['timing', 'belt', 'engine'],
    aftermarketBrands: ['GATES', 'DAYCO', 'CONTITECH'],
  },
  {
    slug: 'drive-belt',
    name: 'Drive Belt',
    category: 'Engine',
    systemId: 'engine-system',
    tags: ['drive', 'belt', 'engine'],
    aftermarketBrands: ['GATES', 'DAYCO', 'CONTITECH'],
  },
  {
    slug: 'engine-mount',
    name: 'Engine Mount',
    category: 'Engine',
    systemId: 'engine-system',
    tags: ['engine', 'mount'],
    aftermarketBrands: ['FEBI', 'LEMFÖRDER'],
  },
  {
    slug: 'egr-valve',
    name: 'EGR Valve',
    category: 'Engine',
    systemId: 'engine-system',
    tags: ['egr', 'valve', 'engine'],
    aftermarketBrands: ['BOSCH', 'FEBI'],
  },

  // ============================================================
  // COOLING
  // ============================================================

  {
    slug: 'water-pump',
    name: 'Water Pump',
    category: 'Cooling System',
    systemId: 'cooling-system',
    tags: ['cooling', 'water', 'pump'],
    aftermarketBrands: COOLING_BRANDS,
  },
  {
    slug: 'radiator',
    name: 'Radiator',
    category: 'Cooling System',
    systemId: 'cooling-system',
    tags: ['radiator', 'cooling'],
    aftermarketBrands: COOLING_BRANDS,
  },
  {
    slug: 'thermostat',
    name: 'Thermostat',
    category: 'Cooling System',
    systemId: 'cooling-system',
    tags: ['thermostat', 'cooling'],
    aftermarketBrands: COOLING_BRANDS,
  },
  {
    slug: 'radiator-fan',
    name: 'Radiator Fan',
    category: 'Cooling System',
    systemId: 'cooling-system',
    tags: ['fan', 'radiator', 'cooling'],
    aftermarketBrands: COOLING_BRANDS,
  },
  {
    slug: 'intercooler',
    name: 'Intercooler',
    category: 'Cooling System',
    systemId: 'cooling-system',
    tags: ['intercooler', 'cooling'],
    aftermarketBrands: ['MAHLE', 'NRF'],
  },

  // ============================================================
  // TRANSMISSION
  // ============================================================

  {
    slug: 'clutch-kit',
    name: 'Clutch Kit',
    category: 'Transmission',
    systemId: 'transmission-system',
    tags: ['clutch', 'transmission'],
    aftermarketBrands: TRANSMISSION_BRANDS,
  },
  {
    slug: 'clutch-disc',
    name: 'Clutch Disc',
    category: 'Transmission',
    systemId: 'transmission-system',
    tags: ['clutch', 'disc', 'transmission'],
    aftermarketBrands: TRANSMISSION_BRANDS,
  },
  {
    slug: 'clutch-cover',
    name: 'Clutch Cover',
    category: 'Transmission',
    systemId: 'transmission-system',
    tags: ['clutch', 'cover', 'transmission'],
    aftermarketBrands: TRANSMISSION_BRANDS,
  },
  {
    slug: 'release-bearing',
    name: 'Clutch Release Bearing',
    category: 'Transmission',
    systemId: 'transmission-system',
    tags: ['clutch', 'bearing', 'transmission'],
    aftermarketBrands: ['SACHS', 'SKF', 'FAG'],
  },
  {
    slug: 'gearbox',
    name: 'Gearbox',
    category: 'Transmission',
    systemId: 'transmission-system',
    tags: ['gearbox', 'transmission'],
    aftermarketBrands: ['ZF'],
  },
  {
    slug: 'propeller-shaft',
    name: 'Propeller Shaft',
    category: 'Transmission',
    systemId: 'transmission-system',
    tags: ['driveshaft', 'propeller shaft', 'transmission'],
    aftermarketBrands: ['ZF', 'GKN'],
  },

  // ============================================================
  // SUSPENSION
  // ============================================================

  {
    slug: 'shock-absorber',
    name: 'Shock Absorber',
    category: 'Suspension',
    systemId: 'suspension-system',
    tags: ['suspension', 'shock absorber'],
    aftermarketBrands: SUSPENSION_BRANDS,
  },
  {
    slug: 'air-spring',
    name: 'Air Spring',
    category: 'Suspension',
    systemId: 'suspension-system',
    tags: ['suspension', 'air spring'],
    aftermarketBrands: SUSPENSION_BRANDS,
  },
  {
    slug: 'control-arm',
    name: 'Control Arm',
    category: 'Suspension',
    systemId: 'suspension-system',
    tags: ['suspension', 'control arm'],
    aftermarketBrands: SUSPENSION_BRANDS,
  },
  {
    slug: 'stabilizer-link',
    name: 'Stabilizer Link',
    category: 'Suspension',
    systemId: 'suspension-system',
    tags: ['suspension', 'stabilizer'],
    aftermarketBrands: SUSPENSION_BRANDS,
  },
  {
    slug: 'leaf-spring',
    name: 'Leaf Spring',
    category: 'Suspension',
    systemId: 'suspension-system',
    tags: ['suspension', 'leaf spring'],
    aftermarketBrands: ['SACHS', 'FEBI'],
  },
  {
    slug: 'air-bellow',
    name: 'Air Suspension Bellow',
    category: 'Suspension',
    systemId: 'suspension-system',
    tags: ['suspension', 'air bellow'],
    aftermarketBrands: SUSPENSION_BRANDS,
  },

  // ============================================================
  // STEERING
  // ============================================================

  {
    slug: 'steering-pump',
    name: 'Steering Pump',
    category: 'Steering',
    systemId: 'steering-system',
    tags: ['steering', 'pump'],
    aftermarketBrands: STEERING_BRANDS,
  },
  {
    slug: 'tie-rod',
    name: 'Tie Rod',
    category: 'Steering',
    systemId: 'steering-system',
    tags: ['steering', 'tie rod'],
    aftermarketBrands: STEERING_BRANDS,
  },
  {
    slug: 'steering-gearbox',
    name: 'Steering Gearbox',
    category: 'Steering',
    systemId: 'steering-system',
    tags: ['steering', 'gearbox'],
    aftermarketBrands: ['ZF', 'TRW'],
  },

  // ============================================================
  // ELECTRICAL
  // ============================================================

  {
    slug: 'starter-motor',
    name: 'Starter Motor',
    category: 'Electrical',
    systemId: 'electrical-system',
    tags: ['starter', 'motor', 'electrical'],
    aftermarketBrands: ELECTRICAL_BRANDS,
  },
  {
    slug: 'alternator',
    name: 'Alternator',
    category: 'Electrical',
    systemId: 'electrical-system',
    tags: ['alternator', 'electrical'],
    aftermarketBrands: ELECTRICAL_BRANDS,
  },
  {
    slug: 'battery',
    name: 'Truck Battery',
    category: 'Electrical',
    systemId: 'electrical-system',
    tags: ['battery', 'electrical'],
    aftermarketBrands: ['BOSCH', 'VARTA'],
  },
  {
    slug: 'glow-plug',
    name: 'Glow Plug',
    category: 'Electrical',
    systemId: 'electrical-system',
    tags: ['glow plug', 'electrical', 'engine'],
    aftermarketBrands: ['BOSCH', 'DENSO'],
  },
  {
    slug: 'engine-sensor',
    name: 'Engine Sensor',
    category: 'Electrical',
    systemId: 'electrical-system',
    tags: ['sensor', 'electrical', 'engine'],
    aftermarketBrands: ['BOSCH', 'DENSO'],
  },
  {
    slug: 'headlamp',
    name: 'Headlamp',
    category: 'Electrical',
    systemId: 'electrical-system',
    tags: ['lamp', 'headlamp', 'electrical'],
    aftermarketBrands: ['HELLA', 'VALEO'],
  },

  // ============================================================
  // EXHAUST
  // ============================================================

  {
    slug: 'exhaust-pipe',
    name: 'Exhaust Pipe',
    category: 'Exhaust',
    systemId: 'exhaust-system',
    tags: ['exhaust', 'pipe'],
    aftermarketBrands: EXHAUST_BRANDS,
  },
  {
    slug: 'muffler',
    name: 'Muffler',
    category: 'Exhaust',
    systemId: 'exhaust-system',
    tags: ['exhaust', 'muffler'],
    aftermarketBrands: EXHAUST_BRANDS,
  },
  {
    slug: 'dpf-filter',
    name: 'DPF Filter',
    category: 'Exhaust',
    systemId: 'exhaust-system',
    tags: ['exhaust', 'dpf', 'filter'],
    aftermarketBrands: ['BOSAL', 'HJS'],
  },

  // ============================================================
  // CABIN
  // ============================================================

  {
    slug: 'cabin-air-spring',
    name: 'Cabin Suspension Air Spring',
    category: 'Cabin',
    systemId: 'cabin-system',
    tags: ['cabin', 'suspension', 'air spring'],
    aftermarketBrands: ['FEBI', 'VALEO'],
  },
  {
    slug: 'wiper-motor',
    name: 'Wiper Motor',
    category: 'Cabin',
    systemId: 'cabin-system',
    tags: ['cabin', 'wiper', 'motor'],
    aftermarketBrands: ['HELLA', 'VALEO'],
  },
  {
    slug: 'mirror-assembly',
    name: 'Mirror Assembly',
    category: 'Cabin',
    systemId: 'cabin-system',
    tags: ['cabin', 'mirror'],
    aftermarketBrands: ['HELLA', 'FEBI'],
  },
];

/* ============================================================
   OFFICIAL MANUFACTURERS
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
      { id: 'volvo-fh16', name: 'FH16' },
      { id: 'volvo-fm', name: 'FM' },
      { id: 'volvo-fmx', name: 'FMX' },
      { id: 'volvo-fe', name: 'FE' },
      { id: 'volvo-fl', name: 'FL' },
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
      { id: 'daf-xg-plus', name: 'XG+' },
      { id: 'daf-cf', name: 'CF' },
      { id: 'daf-lf', name: 'LF' },
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
      { id: 'mercedes-axor', name: 'Axor' },
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
      { id: 'scania-g', name: 'G-Series' },
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
      { id: 'man-tgl', name: 'TGL' },
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
      { id: 'renault-d', name: 'D' },
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
      { id: 'iveco-t-way', name: 'T-Way' },
      { id: 'iveco-eurocargo', name: 'Eurocargo' },
    ],
  },

  {
    id: 'kenworth',
    name: 'Kenworth',
    source: {
      id: 'source-kenworth',
      name: 'Kenworth',
      url: 'https://www.kenworth.com/',
    },
    models: [
      { id: 'kenworth-t680', name: 'T680' },
      { id: 'kenworth-t880', name: 'T880' },
      { id: 'kenworth-w990', name: 'W990' },
    ],
  },

  {
    id: 'peterbilt',
    name: 'Peterbilt',
    source: {
      id: 'source-peterbilt',
      name: 'Peterbilt',
      url: 'https://www.peterbilt.com/',
    },
    models: [
      { id: 'peterbilt-579', name: '579' },
      { id: 'peterbilt-389', name: '389' },
      { id: 'peterbilt-567', name: '567' },
    ],
  },

  {
    id: 'freightliner',
    name: 'Freightliner',
    source: {
      id: 'source-freightliner',
      name: 'Freightliner',
      url: 'https://www.freightliner.com/',
    },
    models: [
      { id: 'freightliner-cascadia', name: 'Cascadia' },
      { id: 'freightliner-m2-106', name: 'M2 106' },
      { id: 'freightliner-122sd', name: '122SD' },
    ],
  },
];

/* ============================================================
   OEM DATA
   ============================================================ */

/*
 * Keep this list intentionally conservative.
 *
 * Only verified OEM references should be added here.
 * Never generate an OEM number from a model name or a part name.
 */

type VerifiedOEM = {
  manufacturerId: string;
  modelId: string;
  partSlug: string;
  referenceNumber: string;
  sourceUrl: string;
  application?: string;
};

const VERIFIED_OEMS: VerifiedOEM[] = [
  /*
   * Add manufacturer-confirmed references here.

   Example:

   {
     manufacturerId: 'scania',
     modelId: 'scania-r',
     partSlug: 'oil-filter',
     referenceNumber: 'XXXXXXXX',
     sourceUrl: 'OFFICIAL_SOURCE',
     application: 'Exact application confirmed',
   },

   Do NOT add a number unless the source confirms it.
   */
];

/* ============================================================
   HELPERS
   ============================================================ */

function slugify(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/(^-|-$)/g, '');
}

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

function getVerifiedOEMs(
  manufacturerId: string,
  modelId: string,
  partSlug: string,
) {
  return VERIFIED_OEMS
    .filter(
      (oem) =>
        oem.manufacturerId === manufacturerId &&
        oem.modelId === modelId &&
        oem.partSlug === partSlug,
    )
    .map((oem) => ({
      id: `oem-${oem.manufacturerId}-${oem.modelId}-${oem.partSlug}-${oem.referenceNumber}`,
      partId: `${modelId}-${partSlug}`,
      manufacturerId: oem.manufacturerId,
      referenceNumber: oem.referenceNumber,
      verificationStatus: 'verified' as const,
      source: oem.sourceUrl,
      application: oem.application,
    }));
}

/* ============================================================
   PART BUILDER
   ============================================================ */

function createPart(
  manufacturer: ManufacturerDefinition,
  model: ModelDefinition,
  template: PartTemplate,
): Part {
  const id = `${model.id}-${template.slug}`;

  const tags = Array.from(
    new Set([
      ...template.tags,
      slugify(manufacturer.name),
      slugify(model.name),
      manufacturer.id,
      model.id,
    ]),
  );

  const oemReferences = getVerifiedOEMs(
    manufacturer.id,
    model.id,
    template.slug,
  );

  return {
    id,

    systemId: template.systemId,

    name: template.name,

    description:
      `${template.name} catalog entry for ${manufacturer.name} ${model.name} truck applications. ` +
      `Exact OEM references and vehicle compatibility must be verified against manufacturer-specific technical data.`,

    category: template.category,

    specifications: {
      type: template.name,
      vehicleType: 'Truck',
      manufacturer: manufacturer.name,
      manufacturerId: manufacturer.id,
      model: model.name,
      tags,
      aftermarketBrands: [...template.aftermarketBrands],
    },

    images: [],

    oemReferences,

    crossReferences: [],

    compatibility: [],

    sources: [
      createSource(manufacturer.source, id),
    ],

    verificationStatus:
      oemReferences.length > 0
        ? 'verified'
        : 'needs-verification',

    createdAt: now,

    updatedAt: now,
  };
}

/* ============================================================
   FINAL CATALOG
   ============================================================ */

export const CATALOG_PARTS: Part[] =
  MANUFACTURERS.flatMap((manufacturer) =>
    manufacturer.models.flatMap((model) =>
      PART_TEMPLATES.map((template) =>
        createPart(
          manufacturer,
          model,
          template,
        ),
      ),
    ),
  );

/* ============================================================
   PUBLIC CATALOG DATA
   ============================================================ */

export const CATALOG_MANUFACTURERS =
  MANUFACTURERS.map(({ id, name }) => ({
    id,
    name,
  }));

export const CATALOG_MODELS =
  MANUFACTURERS.flatMap((manufacturer) =>
    manufacturer.models.map((model) => ({
      id: model.id,
      manufacturerId: manufacturer.id,
      name: model.name,
    })),
  );

export const CATALOG_CATEGORIES =
  Array.from(
    new Set(
      CATALOG_PARTS.map(
        (part) => part.category,
      ),
    ),
  ).sort();

export const CATALOG_SYSTEMS =
  Array.from(
    new Set(
      CATALOG_PARTS.map(
        (part) => part.systemId,
      ),
    ),
  ).sort();

export const CATALOG_AFTERMARKET_BRANDS =
  Array.from(
    new Set(
      PART_TEMPLATES.flatMap(
        (template) =>
          template.aftermarketBrands,
      ),
    ),
  ).sort();

export const CATALOG_STATS = {
  manufacturers: MANUFACTURERS.length,
  models: CATALOG_MODELS.length,
  partTemplates: PART_TEMPLATES.length,
  parts: CATALOG_PARTS.length,
  categories: CATALOG_CATEGORIES.length,
  systems: CATALOG_SYSTEMS.length,
  aftermarketBrands:
    CATALOG_AFTERMARKET_BRANDS.length,
};

/* ============================================================
   SEARCH
   ============================================================ */

export function searchCatalog(
  query: string,
): Part[] {
  const normalizedQuery = query
    .trim()
    .toLowerCase();

  if (!normalizedQuery) {
    return CATALOG_PARTS;
  }

  const queryWords = normalizedQuery
    .split(/\s+/)
    .filter(Boolean);

  return CATALOG_PARTS
    .map((part) => {
      const searchableText = [
        part.id,
        part.name,
        part.category,
        part.description ?? '',
        part.specifications?.manufacturer ?? '',
        part.specifications?.manufacturerId ?? '',
        part.specifications?.model ?? '',
        ...(part.specifications?.tags ?? []),
        ...(part.specifications
          ?.aftermarketBrands ?? []),
        ...part.oemReferences.map(
          (oem) =>
            oem.referenceNumber,
        ),
      ]
        .join(' ')
        .toLowerCase();

      const score = queryWords.reduce(
        (total, word) =>
          searchableText.includes(word)
            ? total + 1
            : total,
        0,
      );

      return {
        part,
        score,
      };
    })
    .filter(({ score }) => score > 0)
    .sort(
      (a, b) =>
        b.score - a.score ||
        a.part.name.localeCompare(
          b.part.name,
        ),
    )
    .map(({ part }) => part);
}

/* ============================================================
   FILTERS
   ============================================================ */

export function getPartsByManufacturer(
  manufacturerId: string,
): Part[] {
  const normalized = manufacturerId
    .trim()
    .toLowerCase();

  return CATALOG_PARTS.filter(
    (part) =>
      part.specifications
        ?.manufacturerId
        ?.toLowerCase() === normalized,
  );
}

export function getPartsByModel(
  manufacturerId: string,
  model: string,
): Part[] {
  const manufacturer =
    manufacturerId.trim().toLowerCase();

  const normalizedModel =
    model.trim().toLowerCase();

  return CATALOG_PARTS.filter(
    (part) =>
      part.specifications
        ?.manufacturerId
        ?.toLowerCase() === manufacturer &&
      part.specifications?.model
        ?.toLowerCase() === normalizedModel,
  );
}

export function getPartsByCategory(
  category: string,
): Part[] {
  const normalized =
    category.trim().toLowerCase();

  return CATALOG_PARTS.filter(
    (part) =>
      part.category.toLowerCase() ===
      normalized,
  );
}

export function getPartsBySystem(
  systemId: string,
): Part[] {
  return CATALOG_PARTS.filter(
    (part) => part.systemId === systemId,
  );
}

export function getPartsByAftermarketBrand(
  brand: string,
): Part[] {
  const normalized =
    brand.trim().toLowerCase();

  return CATALOG_PARTS.filter((part) =>
    (
      part.specifications
        ?.aftermarketBrands ?? []
    ).some(
      (item) =>
        item.toLowerCase() === normalized,
    ),
  );
}

export function getPartsByOEM(
  referenceNumber: string,
): Part[] {
  const normalized =
    referenceNumber.trim().toLowerCase();

  return CATALOG_PARTS.filter((part) =>
    part.oemReferences.some(
      (oem) =>
        oem.referenceNumber
          .toLowerCase() === normalized ||
        (oem.alternateNumbers ?? []).some(
          (number) =>
            number.toLowerCase() ===
            normalized,
        ),
    ),
  );
}

export function getPartById(
  id: string,
): Part | undefined {
  return CATALOG_PARTS.find(
    (part) => part.id === id,
  );
}

export function getVerifiedOEMCount(): number {
  return CATALOG_PARTS.reduce(
    (count, part) =>
      count + part.oemReferences.length,
    0,
  );
      }
