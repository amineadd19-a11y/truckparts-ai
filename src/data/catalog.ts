import { Part } from '@/types';

const now = '2026-08-13T00:00:00.000Z';

type SourceInput = {
  id: string;
  name: string;
  url: string;
};

type PartInput = {
  id: string;
  systemId: string;
  name: string;
  category: string;
  manufacturer: string;
  model: string;
  manufacturerId: string;
  vehicleType?: string;
  description?: string;
  source?: SourceInput;
  tags?: string[];
};

function makePart(input: PartInput): Part {
  const {
    id,
    systemId,
    name,
    category,
    manufacturer,
    model,
    manufacturerId,
    vehicleType = 'Truck',
    description,
    source,
    tags = [],
  } = input;

  return {
    id,
    systemId,
    name,
    description:
      description ??
      `${name} for ${manufacturer} ${model} applications.`,
    category,

    specifications: {
      type: name,
      vehicleType,
      manufacturer,
      manufacturerId,
      model,
      tags: tags.join(', '),
    },

    images: [],

    // OEM numbers are intentionally left empty
    // until they are verified against a reliable source.
    oemReferences: [],

    // Cross references will be added after OEM verification.
    crossReferences: [],

    // Detailed compatibility will be added when
    // truck generation/engine data is connected.
    compatibility: [],

    sources: source
      ? [
          {
            id: source.id,
            partId: id,
            name: source.name,
            url: source.url,
            type: 'official',
            reliability: 'high',
          },
        ]
      : [],

    verificationStatus: 'needs-verification',
    createdAt: now,
    updatedAt: now,
  };
}

const SYSTEMS = {
  brake: 'brake-system',
  engine: 'engine-system',
  suspension: 'suspension-system',
  transmission: 'transmission-system',
  electrical: 'electrical-system',
  cooling: 'cooling-system',
} as const;

const MANUFACTURERS = {
  volvo: 'volvo-trucks',
  daf: 'daf-trucks',
  mercedes: 'mercedes-benz-trucks',
  scania: 'scania',
  man: 'man-truck-bus',
  renault: 'renault-trucks',
  iveco: 'iveco',
} as const;

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
} as const;

export const CATALOG_PARTS: Part[] = [
  // ============================================================
  // VOLVO FH
  // ============================================================

  makePart({
    id: 'volvo-fh-brake-disc',
    systemId: SYSTEMS.brake,
    name: 'Brake Disc',
    category: 'Brakes',
    manufacturer: 'Volvo Trucks',
    manufacturerId: MANUFACTURERS.volvo,
    model: 'FH',
    source: SOURCES.volvo,
    tags: ['brake', 'disc', 'volvo', 'fh'],
  }),

  makePart({
    id: 'volvo-fh-brake-pad',
    systemId: SYSTEMS.brake,
    name: 'Brake Pad',
    category: 'Brakes',
    manufacturer: 'Volvo Trucks',
    manufacturerId: MANUFACTURERS.volvo,
    model: 'FH',
    source: SOURCES.volvo,
    tags: ['brake', 'pad', 'volvo', 'fh'],
  }),

  makePart({
    id: 'volvo-fh-oil-filter',
    systemId: SYSTEMS.engine,
    name: 'Oil Filter',
    category: 'Filters',
    manufacturer: 'Volvo Trucks',
    manufacturerId: MANUFACTURERS.volvo,
    model: 'FH',
    source: SOURCES.volvo,
    tags: ['filter', 'oil', 'engine', 'volvo', 'fh'],
  }),

  makePart({
    id: 'volvo-fh-air-filter',
    systemId: SYSTEMS.engine,
    name: 'Air Filter',
    category: 'Filters',
    manufacturer: 'Volvo Trucks',
    manufacturerId: MANUFACTURERS.volvo,
    model: 'FH',
    source: SOURCES.volvo,
    tags: ['filter', 'air', 'engine', 'volvo', 'fh'],
  }),

  makePart({
    id: 'volvo-fh-fuel-filter',
    systemId: SYSTEMS.engine,
    name: 'Fuel Filter',
    category: 'Filters',
    manufacturer: 'Volvo Trucks',
    manufacturerId: MANUFACTURERS.volvo,
    model: 'FH',
    source: SOURCES.volvo,
    tags: ['filter', 'fuel', 'volvo', 'fh'],
  }),

  makePart({
    id: 'volvo-fh-air-compressor',
    systemId: SYSTEMS.engine,
    name: 'Air Compressor',
    category: 'Engine',
    manufacturer: 'Volvo Trucks',
    manufacturerId: MANUFACTURERS.volvo,
    model: 'FH',
    source: SOURCES.volvo,
    tags: ['compressor', 'air', 'engine', 'volvo', 'fh'],
  }),

  makePart({
    id: 'volvo-fh-clutch-kit',
    systemId: SYSTEMS.transmission,
    name: 'Clutch Kit',
    category: 'Transmission',
    manufacturer: 'Volvo Trucks',
    manufacturerId: MANUFACTURERS.volvo,
    model: 'FH',
    source: SOURCES.volvo,
    tags: ['clutch', 'transmission', 'volvo', 'fh'],
  }),

  // ============================================================
  // DAF XF
  // ============================================================

  makePart({
    id: 'daf-xf-air-filter',
    systemId: SYSTEMS.engine,
    name: 'Air Filter',
    category: 'Filters',
    manufacturer: 'DAF Trucks',
    manufacturerId: MANUFACTURERS.daf,
    model: 'XF',
    source: SOURCES.daf,
    tags: ['filter', 'air', 'daf', 'xf'],
  }),

  makePart({
    id: 'daf-xf-oil-filter',
    systemId: SYSTEMS.engine,
    name: 'Oil Filter',
    category: 'Filters',
    manufacturer: 'DAF Trucks',
    manufacturerId: MANUFACTURERS.daf,
    model: 'XF',
    source: SOURCES.daf,
    tags: ['filter', 'oil', 'daf', 'xf'],
  }),

  makePart({
    id: 'daf-xf-fuel-filter',
    systemId: SYSTEMS.engine,
    name: 'Fuel Filter',
    category: 'Filters',
    manufacturer: 'DAF Trucks',
    manufacturerId: MANUFACTURERS.daf,
    model: 'XF',
    source: SOURCES.daf,
    tags: ['filter', 'fuel', 'daf', 'xf'],
  }),

  makePart({
    id: 'daf-xf-brake-pad',
    systemId: SYSTEMS.brake,
    name: 'Brake Pad',
    category: 'Brakes',
    manufacturer: 'DAF Trucks',
    manufacturerId: MANUFACTURERS.daf,
    model: 'XF',
    source: SOURCES.daf,
    tags: ['brake', 'pad', 'daf', 'xf'],
  }),

  makePart({
    id: 'daf-xf-brake-disc',
    systemId: SYSTEMS.brake,
    name: 'Brake Disc',
    category: 'Brakes',
    manufacturer: 'DAF Trucks',
    manufacturerId: MANUFACTURERS.daf,
    model: 'XF',
    source: SOURCES.daf,
    tags: ['brake', 'disc', 'daf', 'xf'],
  }),

  makePart({
    id: 'daf-xf-radiator',
    systemId: SYSTEMS.cooling,
    name: 'Radiator',
    category: 'Cooling System',
    manufacturer: 'DAF Trucks',
    manufacturerId: MANUFACTURERS.daf,
    model: 'XF',
    source: SOURCES.daf,
    tags: ['radiator', 'cooling', 'daf', 'xf'],
  }),

  makePart({
    id: 'daf-xf-alternator',
    systemId: SYSTEMS.electrical,
    name: 'Alternator',
    category: 'Electrical',
    manufacturer: 'DAF Trucks',
    manufacturerId: MANUFACTURERS.daf,
    model: 'XF',
    source: SOURCES.daf,
    tags: ['alternator', 'electrical', 'daf', 'xf'],
  }),

  // ============================================================
  // MERCEDES-BENZ ACTROS
  // ============================================================

  makePart({
    id: 'mercedes-actros-air-spring',
    systemId: SYSTEMS.suspension,
    name: 'Air Spring',
    category: 'Suspension',
    manufacturer: 'Mercedes-Benz Trucks',
    manufacturerId: MANUFACTURERS.mercedes,
    model: 'Actros',
    source: SOURCES.mercedes,
    tags: ['suspension', 'air spring', 'mercedes', 'actros'],
  }),

  makePart({
    id: 'mercedes-actros-brake-disc',
    systemId: SYSTEMS.brake,
    name: 'Brake Disc',
    category: 'Brakes',
    manufacturer: 'Mercedes-Benz Trucks',
    manufacturerId: MANUFACTURERS.mercedes,
    model: 'Actros',
    source: SOURCES.mercedes,
    tags: ['brake', 'disc', 'mercedes', 'actros'],
  }),

  makePart({
    id: 'mercedes-actros-brake-pad',
    systemId: SYSTEMS.brake,
    name: 'Brake Pad',
    category: 'Brakes',
    manufacturer: 'Mercedes-Benz Trucks',
    manufacturerId: MANUFACTURERS.mercedes,
    model: 'Actros',
    source: SOURCES.mercedes,
    tags: ['brake', 'pad', 'mercedes', 'actros'],
  }),

  makePart({
    id: 'mercedes-actros-oil-filter',
    systemId: SYSTEMS.engine,
    name: 'Oil Filter',
    category: 'Filters',
    manufacturer: 'Mercedes-Benz Trucks',
    manufacturerId: MANUFACTURERS.mercedes,
    model: 'Actros',
    source: SOURCES.mercedes,
    tags: ['filter', 'oil', 'mercedes', 'actros'],
  }),

  makePart({
    id: 'mercedes-actros-fuel-filter',
    systemId: SYSTEMS.engine,
    name: 'Fuel Filter',
    category: 'Filters',
    manufacturer: 'Mercedes-Benz Trucks',
    manufacturerId: MANUFACTURERS.mercedes,
    model: 'Actros',
    source: SOURCES.mercedes,
    tags: ['filter', 'fuel', 'mercedes', 'actros'],
  }),

  makePart({
    id: 'mercedes-actros-starter-motor',
    systemId: SYSTEMS.electrical,
    name: 'Starter Motor',
    category: 'Electrical',
    manufacturer: 'Mercedes-Benz Trucks',
    manufacturerId: MANUFACTURERS.mercedes,
    model: 'Actros',
    source: SOURCES.mercedes,
    tags: ['starter', 'electrical', 'mercedes', 'actros'],
  }),

  // ============================================================
  // SCANIA R-SERIES
  // ============================================================

  makePart({
    id: 'scania-r-brake-disc',
    systemId: SYSTEMS.brake,
    name: 'Brake Disc',
    category: 'Brakes',
    manufacturer: 'Scania',
    manufacturerId: MANUFACTURERS.scania,
    model: 'R-Series',
    source: SOURCES.scania,
    tags: ['brake', 'disc', 'scania', 'r-series'],
  }),

  makePart({
    id: 'scania-r-brake-pad',
    systemId: SYSTEMS.brake,
    name: 'Brake Pad',
    category: 'Brakes',
    manufacturer: 'Scania',
    manufacturerId: MANUFACTURERS.scania,
    model: 'R-Series',
    source: SOURCES.scania,
    tags: ['brake', 'pad', 'scania', 'r-series'],
  }),

  makePart({
    id: 'scania-r-oil-filter',
    systemId: SYSTEMS.engine,
    name: 'Oil Filter',
    category: 'Filters',
    manufacturer: 'Scania',
    manufacturerId: MANUFACTURERS.scania,
    model: 'R-Series',
    source: SOURCES.scania,
    tags: ['filter', 'oil', 'scania', 'r-series'],
  }),

  makePart({
    id: 'scania-r-air-filter',
    systemId: SYSTEMS.engine,
    name: 'Air Filter',
    category: 'Filters',
    manufacturer: 'Scania',
    manufacturerId: MANUFACTURERS.scania,
    model: 'R-Series',
    source: SOURCES.scania,
    tags: ['filter', 'air', 'scania', 'r-series'],
  }),

  makePart({
    id: 'scania-r-shock-absorber',
    systemId: SYSTEMS.suspension,
    name: 'Shock Absorber',
    category: 'Suspension',
    manufacturer: 'Scania',
    manufacturerId: MANUFACTURERS.scania,
    model: 'R-Series',
    source: SOURCES.scania,
    tags: ['suspension', 'shock absorber', 'scania', 'r-series'],
  }),

  makePart({
    id: 'scania-r-gearbox',
    systemId: SYSTEMS.transmission,
    name: 'Gearbox',
    category: 'Transmission',
    manufacturer: 'Scania',
    manufacturerId: MANUFACTURERS.scania,
    model: 'R-Series',
    source: SOURCES.scania,
    tags: ['gearbox', 'transmission', 'scania', 'r-series'],
  }),

  // ============================================================
  // MAN TGX
  // ============================================================

  makePart({
    id: 'man-tgx-air-filter',
    systemId: SYSTEMS.engine,
    name: 'Air Filter',
    category: 'Filters',
    manufacturer: 'MAN Trucks',
    manufacturerId: MANUFACTURERS.man,
    model: 'TGX',
    source: SOURCES.man,
    tags: ['filter', 'air', 'man', 'tgx'],
  }),

  makePart({
    id: 'man-tgx-oil-filter',
    systemId: SYSTEMS.engine,
    name: 'Oil Filter',
    category: 'Filters',
    manufacturer: 'MAN Trucks',
    manufacturerId: MANUFACTURERS.man,
    model: 'TGX',
    source: SOURCES.man,
    tags: ['filter', 'oil', 'man', 'tgx'],
  }),

  makePart({
    id: 'man-tgx-brake-pad',
    systemId: SYSTEMS.brake,
    name: 'Brake Pad',
    category: 'Brakes',
    manufacturer: 'MAN Trucks',
    manufacturerId: MANUFACTURERS.man,
    model: 'TGX',
    source: SOURCES.man,
    tags: ['brake', 'pad', 'man', 'tgx'],
  }),

  makePart({
    id: 'man-tgx-brake-disc',
    systemId: SYSTEMS.brake,
    name: 'Brake Disc',
    category: 'Brakes',
    manufacturer: 'MAN Trucks',
    manufacturerId: MANUFACTURERS.man,
    model: 'TGX',
    source: SOURCES.man,
    tags: ['brake', 'disc', 'man', 'tgx'],
  }),

  makePart({
    id: 'man-tgx-water-pump',
    systemId: SYSTEMS.cooling,
    name: 'Water Pump',
    category: 'Cooling System',
    manufacturer: 'MAN Trucks',
    manufacturerId: MANUFACTURERS.man,
    model: 'TGX',
    source: SOURCES.man,
    tags: ['cooling', 'water pump', 'man', 'tgx'],
  }),

  // ============================================================
  // RENAULT TRUCKS T
  // ============================================================

  makePart({
    id: 'renault-t-air-spring',
    systemId: SYSTEMS.suspension,
    name: 'Air Spring',
    category: 'Suspension',
    manufacturer: 'Renault Trucks',
    manufacturerId: MANUFACTURERS.renault,
    model: 'T',
    source: SOURCES.renault,
    tags: ['suspension', 'air spring', 'renault', 't'],
  }),

  makePart({
    id: 'renault-t-brake-disc',
    systemId: SYSTEMS.brake,
    name: 'Brake Disc',
    category: 'Brakes',
    manufacturer: 'Renault Trucks',
    manufacturerId: MANUFACTURERS.renault,
    model: 'T',
    source: SOURCES.renault,
    tags: ['brake', 'disc', 'renault', 't'],
  }),

  makePart({
    id: 'renault-t-brake-pad',
    systemId: SYSTEMS.brake,
    name: 'Brake Pad',
    category: 'Brakes',
    manufacturer: 'Renault Trucks',
    manufacturerId: MANUFACTURERS.renault,
    model: 'T',
    source: SOURCES.renault,
    tags: ['brake', 'pad', 'renault', 't'],
  }),

  makePart({
    id: 'renault-t-fuel-pump',
    systemId: SYSTEMS.engine,
    name: 'Fuel Pump',
    category: 'Engine',
    manufacturer: 'Renault Trucks',
    manufacturerId: MANUFACTURERS.renault,
    model: 'T',
    source: SOURCES.renault,
    tags: ['fuel', 'pump', 'engine', 'renault', 't'],
  }),

  makePart({
    id: 'renault-t-oil-filter',
    systemId: SYSTEMS.engine,
    name: 'Oil Filter',
    category: 'Filters',
    manufacturer: 'Renault Trucks',
    manufacturerId: MANUFACTURERS.renault,
    model: 'T',
    source: SOURCES.renault,
    tags: ['filter', 'oil', 'renault', 't'],
  }),

  // ============================================================
  // IVECO S-WAY
  // ============================================================

  makePart({
    id: 'iveco-sway-oil-filter',
    systemId: SYSTEMS.engine,
    name: 'Oil Filter',
    category: 'Filters',
    manufacturer: 'Iveco',
    manufacturerId: MANUFACTURERS.iveco,
    model: 'S-Way',
    source: SOURCES.iveco,
    tags: ['filter', 'oil', 'iveco', 's-way'],
  }),

  makePart({
    id: 'iveco-sway-air-filter',
    systemId: SYSTEMS.engine,
    name: 'Air Filter',
    category: 'Filters',
    manufacturer: 'Iveco',
    manufacturerId: MANUFACTURERS.iveco,
    model: 'S-Way',
    source: SOURCES.iveco,
    tags: ['filter', 'air', 'iveco', 's-way'],
  }),

  makePart({
    id: 'iveco-sway-brake-pad',
    systemId: SYSTEMS.brake,
    name: 'Brake Pad',
    category: 'Brakes',
    manufacturer: 'Iveco',
    manufacturerId: MANUFACTURERS.iveco,
    model: 'S-Way',
    source: SOURCES.iveco,
    tags: ['brake', 'pad', 'iveco', 's-way'],
  }),

  makePart({
    id: 'iveco-sway-brake-disc',
    systemId: SYSTEMS.brake,
    name: 'Brake Disc',
    category: 'Brakes',
    manufacturer: 'Iveco',
    manufacturerId: MANUFACTURERS.iveco,
    model: 'S-Way',
    source: SOURCES.iveco,
    tags: ['brake', 'disc', 'iveco', 's-way'],
  }),

  makePart({
    id: 'iveco-sway-turbocharger',
    systemId: SYSTEMS.engine,
    name: 'Turbocharger',
    category: 'Engine',
    manufacturer: 'Iveco',
    manufacturerId: MANUFACTURERS.iveco,
    model: 'S-Way',
    source: SOURCES.iveco,
    tags: ['turbocharger', 'engine', 'iveco', 's-way'],
  }),
];
