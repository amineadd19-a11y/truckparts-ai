import { Part, Source } from '@/types';

const now = '2026-08-13T00:00:00.000Z';

/**
 * TruckParts AI — Structured Truck Parts Catalog
 *
 * Important:
 * - No OEM number is invented.
 * - No exact compatibility is claimed without verification.
 * - Manufacturer sources are official manufacturer websites.
 * - specifications follows the current Part type:
 *   Record<string, string>
 */

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

/* ============================================================
   OFFICIAL SOURCES
   ============================================================ */

const SOURCES = {
  volvo: {
    id: 'source-volvo',
    name: 'Volvo Trucks',
    url: 'https://www.volvotrucks.com/',
  },

  daf: {
    id: 'source-daf',
    name: 'DAF Trucks',
    url: 'https://www.daf.com/',
  },

  mercedes: {
    id: 'source-mercedes',
    name: 'Mercedes-Benz Trucks',
    url: 'https://www.mercedes-benz-trucks.com/',
  },

  scania: {
    id: 'source-scania',
    name: 'Scania',
    url: 'https://www.scania.com/',
  },

  man: {
    id: 'source-man',
    name: 'MAN Truck & Bus',
    url: 'https://www.man.eu/',
  },

  renault: {
    id: 'source-renault',
    name: 'Renault Trucks',
    url: 'https://www.renault-trucks.com/',
  },

  iveco: {
    id: 'source-iveco',
    name: 'Iveco',
    url: 'https://www.iveco.com/',
  },

  kenworth: {
    id: 'source-kenworth',
    name: 'Kenworth',
    url: 'https://www.kenworth.com/',
  },

  peterbilt: {
    id: 'source-peterbilt',
    name: 'Peterbilt',
    url: 'https://www.peterbilt.com/',
  },

  freightliner: {
    id: 'source-freightliner',
    name: 'Freightliner',
    url: 'https://www.freightliner.com/',
  },
} as const;

/* ============================================================
   AFTERMARKET BRANDS
   ============================================================ */

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

const CLUTCH_BRANDS = [
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

/* ============================================================
   PART TEMPLATES
   ============================================================ */

const PART_TEMPLATES: PartTemplate[] = [
  // ---------------- BRAKES ----------------

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
    aftermarketBrands: [
      'KNORR-BREMSE',
      'WABCO',
      'HALDEX',
    ],
  },

  {
    slug: 'brake-valve',
    name: 'Brake Valve',
    category: 'Brakes',
    systemId: 'brake-system',
    tags: ['brake', 'valve'],
    aftermarketBrands: [
      'KNORR-BREMSE',
      'WABCO',
    ],
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
    aftermarketBrands: [
      'KNORR-BREMSE',
      'WABCO',
      'BOSCH',
    ],
  },

  // ---------------- FILTERS ----------------

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

  // ---------------- ENGINE ----------------

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
    aftermarketBrands: ['GARRETT', 'BORGWARNER'],
  },

  {
    slug: 'air-compressor',
    name: 'Air Compressor',
    category: 'Engine',
    systemId: 'engine-system',
    tags: ['compressor', 'air', 'engine'],
    aftermarketBrands: [
      'KNORR-BREMSE',
      'WABCO',
    ],
  },

  {
    slug: 'injector',
    name: 'Fuel Injector',
    category: 'Engine',
    systemId: 'engine-system',
    tags: ['injector', 'fuel', 'engine'],
    aftermarketBrands: [
      'BOSCH',
      'DENSO',
    ],
  },

  {
    slug: 'timing-belt-kit',
    name: 'Timing Belt Kit',
    category: 'Engine',
    systemId: 'engine-system',
    tags: ['timing', 'belt', 'engine'],
    aftermarketBrands: [
      'GATES',
      'DAYCO',
      'CONTITECH',
    ],
  },

  {
    slug: 'drive-belt',
    name: 'Drive Belt',
    category: 'Engine',
    systemId: 'engine-system',
    tags: [
      'drive',
      'belt',
      'engine',
    ],
    aftermarketBrands: [
      'GATES',
      'DAYCO',
      'CONTITECH',
    ],
  },

  {
    slug: 'engine-mount',
    name: 'Engine Mount',
    category: 'Engine',
    systemId: 'engine-system',
    tags: [
      'engine',
      'mount',
    ],
    aftermarketBrands: [
      'FEBI',
      'LEMFÖRDER',
    ],
  },

  {
    slug: 'egr-valve',
    name: 'EGR Valve',
    category: 'Engine',
    systemId: 'engine-system',
    tags: [
      'egr',
      'valve',
      'engine',
    ],
    aftermarketBrands: [
      'BOSCH',
      'FEBI',
    ],
  },

  // ---------------- COOLING ----------------

  {
    slug: 'water-pump',
    name: 'Water Pump',
    category: 'Cooling System',
    systemId: 'cooling-system',
    tags: [
      'cooling',
      'water',
      'pump',
    ],
    aftermarketBrands: COOLING_BRANDS,
  },

  {
    slug: 'radiator',
    name: 'Radiator',
    category: 'Cooling System',
    systemId: 'cooling-system',
    tags: [
      'radiator',
      'cooling',
    ],
    aftermarketBrands: COOLING_BRANDS,
  },

  {
    slug: 'thermostat',
    name: 'Thermostat',
    category: 'Cooling System',
    systemId: 'cooling-system',
    tags: [
      'thermostat',
      'cooling',
    ],
    aftermarketBrands: COOLING_BRANDS,
  },

  {
    slug: 'radiator-fan',
    name: 'Radiator Fan',
    category: 'Cooling System',
    systemId: 'cooling-system',
    tags: [
      'fan',
      'radiator',
      'cooling',
    ],
    aftermarketBrands: COOLING_BRANDS,
  },

  {
    slug: 'intercooler',
    name: 'Intercooler',
    category: 'Cooling System',
    systemId: 'cooling-system',
    tags: [
      'intercooler',
      'cooling',
    ],
    aftermarketBrands: [
      'MAHLE',
      'NRF',
    ],
  },

  // ---------------- TRANSMISSION ----------------

  {
    slug: 'clutch-kit',
    name: 'Clutch Kit',
    category: 'Transmission',
    systemId: 'transmission-system',
    tags: [
      'clutch',
      'transmission',
    ],
    aftermarketBrands: CLUTCH_BRANDS,
  },

  {
    slug: 'clutch-disc',
    name: 'Clutch Disc',
    category: 'Transmission',
    systemId: 'transmission-system',
    tags: [
      'clutch',
      'disc',
      'transmission',
    ],
    aftermarketBrands: CLUTCH_BRANDS,
  },

  {
    slug: 'clutch-cover',
    name: 'Clutch Cover',
    category: 'Transmission',
    systemId: 'transmission-system',
    tags: [
      'clutch',
      'cover',
      'transmission',
    ],
    aftermarketBrands: CLUTCH_BRANDS,
  },

  {
    slug: 'release-bearing',
    name: 'Clutch Release Bearing',
    category: 'Transmission',
    systemId: 'transmission-system',
    tags: [
      'clutch',
      'bearing',
      'transmission',
    ],
    aftermarketBrands: [
      'SACHS',
      'SKF',
      'FAG',
    ],
  },

  {
    slug: 'gearbox',
    name: 'Gearbox',
    category: 'Transmission',
    systemId: 'transmission-system',
    tags: [
      'gearbox',
      'transmission',
    ],
    aftermarketBrands: ['ZF'],
  },

  {
    slug: 'propeller-shaft',
    name: 'Propeller Shaft',
    category: 'Transmission',
    systemId: 'transmission-system',
    tags: [
      'driveshaft',
      'propeller shaft',
      'transmission',
    ],
    aftermarketBrands: ['GKN'],
  },

  // ---------------- SUSPENSION ----------------

  {
    slug: 'shock-absorber',
    name: 'Shock Absorber',
    category: 'Suspension',
    systemId: 'suspension-system',
    tags: [
      'suspension',
      'shock absorber',
    ],
    aftermarketBrands: SUSPENSION_BRANDS,
  },

  {
    slug: 'air-spring',
    name: 'Air Spring',
    category: 'Suspension',
    systemId: 'suspension-system',
    tags: [
      'suspension',
      'air spring',
    ],
    aftermarketBrands: SUSPENSION_BRANDS,
  },

  {
    slug: 'control-arm',
    name: 'Control Arm',
    category: 'Suspension',
    systemId: 'suspension-system',
    tags: [
      'suspension',
      'control arm',
    ],
    aftermarketBrands: SUSPENSION_BRANDS,
  },

  {
    slug: 'stabilizer-link',
    name: 'Stabilizer Link',
    category: 'Suspension',
    systemId: 'suspension-system',
    tags: [
      'suspension',
      'stabilizer',
    ],
    aftermarketBrands: SUSPENSION_BRANDS,
  },

  {
    slug: 'leaf-spring',
    name: 'Leaf Spring',
    category: 'Suspension',
    systemId: 'suspension-system',
    tags: [
      'suspension',
      'leaf spring',
    ],
    aftermarketBrands: [
      'SACHS',
      'FEBI',
    ],
  },

  {
    slug: 'air-bellow',
    name: 'Air Suspension Bellow',
    category: 'Suspension',
    systemId: 'suspension-system',
    tags: [
      'suspension',
      'air bellow',
    ],
    aftermarketBrands: SUSPENSION_BRANDS,
  },

  // ---------------- STEERING ----------------

  {
    slug: 'steering-pump',
    name: 'Steering Pump',
    category: 'Steering',
    systemId: 'steering-system',
    tags: [
      'steering',
      'pump',
    ],
    aftermarketBrands: STEERING_BRANDS,
  },

  {
    slug: 'tie-rod',
    name: 'Tie Rod',
    category: 'Steering',
    systemId: 'steering-system',
    tags: [
      'steering',
      'tie rod',
    ],
    aftermarketBrands: STEERING_BRANDS,
  },

  {
    slug: 'steering-gearbox',
    name: 'Steering Gearbox',
    category: 'Steering',
    systemId: 'steering-system',
    tags: [
      'steering',
      'gearbox',
    ],
    aftermarketBrands: [
      'ZF',
      'TRW',
    ],
  },

  // ---------------- ELECTRICAL ----------------

  {
    slug: 'starter-motor',
    name: 'Starter Motor',
    category: 'Electrical',
    systemId: 'electrical-system',
    tags: [
      'starter',
      'motor',
      'electrical',
    ],
    aftermarketBrands: ELECTRICAL_BRANDS,
  },

  {
    slug: 'alternator',
    name: 'Alternator',
    category: 'Electrical',
    systemId: 'electrical-system',
    tags: [
      'alternator',
      'electrical',
    ],
    aftermarketBrands: ELECTRICAL_BRANDS,
  },

  {
    slug: 'battery',
    name: 'Truck Battery',
    category: 'Electrical',
    systemId: 'electrical-system',
    tags: [
      'battery',
      'electrical',
    ],
    aftermarketBrands: [
      'BOSCH',
      'VARTA',
    ],
  },

  {
    slug: 'glow-plug',
    name: 'Glow Plug',
    category: 'Electrical',
    systemId: 'electrical-system',
    tags: [
      'glow plug',
      'electrical',
      'engine',
    ],
    aftermarketBrands: [
      'BOSCH',
      'DENSO',
    ],
  },

  {
    slug: 'engine-sensor',
    name: 'Engine Sensor',
    category: 'Electrical',
    systemId: 'electrical-system',
    tags: [
      'sensor',
      'electrical',
      'engine',
    ],
    aftermarketBrands: [
      'BOSCH',
      'DENSO',
    ],
  },

  {
    slug: 'headlamp',
    name: 'Headlamp',
    category: 'Electrical',
    systemId: 'electrical-system',
    tags: [
      'lamp',
      'headlamp',
      'electrical',
    ],
    aftermarketBrands: [
      'HELLA',
      'VALEO',
    ],
  },

  // ---------------- EXHAUST ----------------

  {
    slug: 'exhaust-pipe',
    name: 'Exhaust Pipe',
    category: 'Exhaust',
    systemId: 'exhaust-system',
    tags: [
      'exhaust',
      'pipe',
    ],
    aftermarketBrands: EXHAUST_BRANDS,
  },

  {
    slug: 'muffler',
    name: 'Muffler',
    category: 'Exhaust',
    systemId: 'exhaust-system',
    tags: [
      'exhaust',
      'muffler',
    ],
    aftermarketBrands: EXHAUST_BRANDS,
  },

  {
    slug: 'dpf-filter',
    name: 'DPF Filter',
    category: 'Exhaust',
    systemId: 'exhaust-system',
    tags: [
      'exhaust',
      'dpf',
      'filter',
    ],
    aftermarketBrands: [
      'HJS',
      'BOSAL',
    ],
  },

  // ---------------- CABIN ----------------

  {
    slug: 'cabin-air-spring',
    name: 'Cabin Suspension Air Spring',
    category: 'Cabin',
    systemId: 'cabin-system',
    tags: [
      'cabin',
      'suspension',
      'air spring',
    ],
    aftermarketBrands: CABIN_BRANDS,
  },

  {
    slug: 'wiper-motor',
    name: 'Wiper Motor',
    category: 'Cabin',
    systemId: 'cabin-system',
    tags: [
      'cabin',
      'wiper',
      'motor',
    ],
    aftermarketBrands: CABIN_BRANDS,
  },

  {
    slug: 'mirror-assembly',
    name: 'Mirror Assembly',
    category: 'Cabin',
    systemId: 'cabin-system',
    tags: [
      'cabin',
      'mirror',
    ],
    aftermarketBrands: [
      'HELLA',
      'FEBI',
    ],
  },
];

/* ============================================================
   MANUFACTURERS & MODELS
   ============================================================ */

const MANUFACTURERS: ManufacturerDefinition[] = [
  {
    id: 'volvo-trucks',
    name: 'Volvo Trucks',
    source: SOURCES.volvo,
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
    source: SOURCES.daf,
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
    source: SOURCES.mercedes,
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
    source: SOURCES.scania,
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
    source: SOURCES.man,
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
    source: SOURCES.renault,
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
    source: SOURCES.iveco,
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
    source: SOURCES.kenworth,
    models: [
      { id: 'kenworth-t680', name: 'T680' },
      { id: 'kenworth-t880', name: 'T880' },
      { id: 'kenworth-w990', name: 'W990' },
    ],
  },

  {
    id: 'peterbilt',
    name: 'Peterbilt',
    source: SOURCES.peterbilt,
    models: [
      { id: 'peterbilt-579', name: '579' },
      { id: 'peterbilt-389', name: '389' },
      { id: 'peterbilt-567', name: '567' },
    ],
  },

  {
    id: 'freightliner',
    name: 'Freightliner',
    source: SOURCES.freightliner,
    models: [
      { id: 'freightliner-cascadia', name: 'Cascadia' },
      { id: 'freightliner-m2-106', name: 'M2 106' },
      { id: 'freightliner-122sd', name: '122SD' },
    ],
  },
];

/* ============================================================
   HELPERS
   ============================================================ */

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function unique(values: string[]): string[] {
  return Array.from(new Set(values));
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

/**
 * Part type requires specifications values to be strings.
 * Arrays are serialized using comma-separated values.
 */
function createPart(
  manufacturer: ManufacturerDefinition,
  model: ModelDefinition,
  template: PartTemplate,
): Part {
  const id = `${model.id}-${template.slug}`;

  const tags = unique([
    ...template.tags,
    slugify(manufacturer.id),
    slugify(model.name),
  ]);

  const aftermarketBrands = unique(
    template.aftermarketBrands,
  );

  return {
    id,

    systemId: template.systemId,

    name: template.name,

    description:
      `${template.name} catalog entry for ` +
      `${manufacturer.name} ${model.name} truck applications. ` +
      `OEM references and exact compatibility require verification ` +
      `against manufacturer technical documentation.`,

    category: template.category,

    specifications: {
      type: template.name,
      vehicleType: 'Truck',
      manufacturer: manufacturer.name,
      manufacturerId: manufacturer.id,
      model: model.name,

      /**
       * IMPORTANT:
       * These are strings because Part.specifications is
       * Record<string, string>.
       */
      tags: tags.join(', '),

      aftermarketBrands:
        aftermarketBrands.join(', '),
    },

    images: [],

    /**
     * OEM references intentionally empty.
     *
     * Do NOT put guessed OEM numbers here.
     * A correct OEM record needs:
     * manufacturer + exact part + reference + source.
     */
    oemReferences: [],

    /**
     * Cross references require verified OEM mapping.
     */
    crossReferences: [],

    /**
     * Exact compatibility requires:
     * generation + engine + production range + axle/configuration.
     */
    compatibility: [],

    sources: [
      createSource(
        manufacturer.source,
        id,
      ),
    ],

    verificationStatus:
      'needs-verification',

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
   MANUFACTURERS
   ============================================================ */

export const CATALOG_MANUFACTURERS =
  MANUFACTURERS.map((manufacturer) => ({
    id: manufacturer.id,
    name: manufacturer.name,
  }));

/* ============================================================
   MODELS
   ============================================================ */

export const CATALOG_MODELS =
  MANUFACTURERS.flatMap((manufacturer) =>
    manufacturer.models.map((model) => ({
      id: model.id,
      manufacturerId: manufacturer.id,
      name: model.name,
    })),
  );

/* ============================================================
   CATEGORIES
   ============================================================ */

export const CATALOG_CATEGORIES =
  Array.from(
    new Set(
      CATALOG_PARTS.map(
        (part) => part.category,
      ),
    ),
  );

/* ============================================================
   SYSTEMS
   ============================================================ */

export const CATALOG_SYSTEMS =
  Array.from(
    new Set(
      CATALOG_PARTS.map(
        (part) => part.systemId,
      ),
    ),
  );

/* ============================================================
   AFTERMARKET BRANDS
   ============================================================ */

export const CATALOG_AFTERMARKET_BRANDS =
  Array.from(
    new Set(
      PART_TEMPLATES.flatMap(
        (template) =>
          template.aftermarketBrands,
      ),
    ),
  ).sort();

/* ============================================================
   STATS
   ============================================================ */

export const CATALOG_STATS = {
  manufacturers:
    MANUFACTURERS.length,

  models:
    CATALOG_MODELS.length,

  partTemplates:
    PART_TEMPLATES.length,

  parts:
    CATALOG_PARTS.length,

  categories:
    CATALOG_CATEGORIES.length,

  systems:
    CATALOG_SYSTEMS.length,

  aftermarketBrands:
    CATALOG_AFTERMARKET_BRANDS.length,
};

/* ============================================================
   STRING LIST HELPERS
   ============================================================ */

function parseList(
  value: string | undefined,
): string[] {
  if (!value) {
    return [];
  }

  return value
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
}

/* ============================================================
   SEARCH
   ============================================================ */

export function searchCatalog(
  query: string,
): Part[] {
  const normalizedQuery =
    query.trim().toLowerCase();

  if (!normalizedQuery) {
    return CATALOG_PARTS;
  }

  return CATALOG_PARTS.filter((part) => {
    const tags = parseList(
      part.specifications?.tags,
    );

    const aftermarketBrands =
      parseList(
        part.specifications
          ?.aftermarketBrands,
      );

    const searchableText = [
      part.id,
      part.name,
      part.category,
      part.description ?? '',
      part.specifications
        ?.manufacturer ?? '',
      part.specifications
        ?.manufacturerId ?? '',
      part.specifications
        ?.model ?? '',
      ...tags,
      ...aftermarketBrands,
    ]
      .join(' ')
      .toLowerCase();

    return searchableText.includes(
      normalizedQuery,
    );
  });
}

/* ============================================================
   GET BY MANUFACTURER
   ============================================================ */

export function getPartsByManufacturer(
  manufacturerId: string,
): Part[] {
  const normalized =
    manufacturerId
      .trim()
      .toLowerCase();

  return CATALOG_PARTS.filter(
    (part) =>
      part.specifications
        ?.manufacturerId
        ?.toLowerCase() === normalized,
  );
}

/* ============================================================
   GET BY MODEL
   ============================================================ */

export function getPartsByModel(
  manufacturerId: string,
  model: string,
): Part[] {
  const normalizedManufacturer =
    manufacturerId
      .trim()
      .toLowerCase();

  const normalizedModel =
    model.trim().toLowerCase();

  return CATALOG_PARTS.filter(
    (part) =>
      part.specifications
        ?.manufacturerId
        ?.toLowerCase() ===
        normalizedManufacturer &&
      part.specifications
        ?.model
        ?.toLowerCase() ===
        normalizedModel,
  );
}

/* ============================================================
   GET BY CATEGORY
   ============================================================ */

export function getPartsByCategory(
  category: string,
): Part[] {
  const normalized =
    category.trim().toLowerCase();

  return CATALOG_PARTS.filter(
    (part) =>
      part.category
        .toLowerCase() === normalized,
  );
}

/* ============================================================
   GET BY SYSTEM
   ============================================================ */

export function getPartsBySystem(
  systemId: string,
): Part[] {
  return CATALOG_PARTS.filter(
    (part) =>
      part.systemId === systemId,
  );
}

/* ============================================================
   GET BY AFTERMARKET BRAND
   ============================================================ */

export function getPartsByAftermarketBrand(
  brand: string,
): Part[] {
  const normalized =
    brand.trim().toLowerCase();

  return CATALOG_PARTS.filter(
    (part) =>
      parseList(
        part.specifications
          ?.aftermarketBrands,
      ).some(
        (item) =>
          item.toLowerCase() ===
          normalized,
      ),
  );
}

/* ============================================================
   GET BY TAG
   ============================================================ */

export function getPartsByTag(
  tag: string,
): Part[] {
  const normalized =
    tag.trim().toLowerCase();

  return CATALOG_PARTS.filter(
    (part) =>
      parseList(
        part.specifications?.tags,
      ).some(
        (item) =>
          item.toLowerCase() ===
          normalized,
      ),
  );
}

/* ============================================================
   GET PART
   ============================================================ */

export function getPartById(
  id: string,
): Part | undefined {
  return CATALOG_PARTS.find(
    (part) => part.id === id,
  );
}

/* ============================================================
   OEM STATUS
   ============================================================ */

export function hasVerifiedOEM(
  part: Part,
): boolean {
  return (
    Array.isArray(part.oemReferences) &&
    part.oemReferences.length > 0
  );
}

/* ============================================================
   VERIFICATION HELPERS
   ============================================================ */

export function getUnverifiedParts(): Part[] {
  return CATALOG_PARTS.filter(
    (part) =>
      part.verificationStatus !==
      'verified',
  );
}

export function getVerifiedParts(): Part[] {
  return CATALOG_PARTS.filter(
    (part) =>
      part.verificationStatus ===
      'verified',
  );
           }
