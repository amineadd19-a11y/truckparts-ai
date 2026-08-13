import { Part } from '@/types';

const now = '2026-08-13T00:00:00.000Z';

type PartInput = {
  id: string;
  systemId: string;
  name: string;
  category: string;
  manufacturer: string;
  model: string;
  vehicleType?: string;
  description?: string;
  source?: {
    id: string;
    name: string;
    url: string;
  };
};

function makePart(input: PartInput): Part {
  const {
    id,
    systemId,
    name,
    category,
    manufacturer,
    model,
    vehicleType = 'Truck',
    description,
    source,
  } = input;

  return {
    id,
    systemId,
    name,
    description:
      description ?? `${name} for ${manufacturer} ${model} applications.`,
    category,
    specifications: {
      type: name,
      vehicleType,
      manufacturer,
      model,
    },
    images: [],
    oemReferences: [],
    crossReferences: [],
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

const SOURCES = {
  volvo: {
    id: 'src-volvo',
    name: 'Volvo Trucks',
    url: 'https://www.volvotrucks.com/',
  },
  daf: {
    id: 'src-daf',
    name: 'DAF Trucks',
    url: 'https://www.daf.com/',
  },
  mercedes: {
    id: 'src-mercedes',
    name: 'Mercedes-Benz Trucks',
    url: 'https://www.mercedes-benz-trucks.com/',
  },
  scania: {
    id: 'src-scania',
    name: 'Scania',
    url: 'https://www.scania.com/',
  },
  man: {
    id: 'src-man',
    name: 'MAN Truck & Bus',
    url: 'https://www.man.eu/',
  },
  renault: {
    id: 'src-renault',
    name: 'Renault Trucks',
    url: 'https://www.renault-trucks.com/',
  },
  iveco: {
    id: 'src-iveco',
    name: 'Iveco',
    url: 'https://www.iveco.com/',
  },
} as const;

export const CATALOG_PARTS: Part[] = [
  // ==================== VOLVO FH ====================

  makePart({
    id: 'volvo-fh-brake-disc',
    systemId: SYSTEMS.brake,
    name: 'Brake Disc',
    category: 'Brakes',
    manufacturer: 'Volvo Trucks',
    model: 'FH',
    source: SOURCES.volvo,
  }),

  makePart({
    id: 'volvo-fh-brake-pad',
    systemId: SYSTEMS.brake,
    name: 'Brake Pad',
    category: 'Brakes',
    manufacturer: 'Volvo Trucks',
    model: 'FH',
    source: SOURCES.volvo,
  }),

  makePart({
    id: 'volvo-fh-oil-filter',
    systemId: SYSTEMS.engine,
    name: 'Oil Filter',
    category: 'Filters',
    manufacturer: 'Volvo Trucks',
    model: 'FH',
    source: SOURCES.volvo,
  }),

  makePart({
    id: 'volvo-fh-air-filter',
    systemId: SYSTEMS.engine,
    name: 'Air Filter',
    category: 'Filters',
    manufacturer: 'Volvo Trucks',
    model: 'FH',
    source: SOURCES.volvo,
  }),

  makePart({
    id: 'volvo-fh-air-compressor',
    systemId: SYSTEMS.engine,
    name: 'Air Compressor',
    category: 'Engine',
    manufacturer: 'Volvo Trucks',
    model: 'FH',
    source: SOURCES.volvo,
  }),

  makePart({
    id: 'volvo-fh-clutch-kit',
    systemId: SYSTEMS.transmission,
    name: 'Clutch Kit',
    category: 'Transmission',
    manufacturer: 'Volvo Trucks',
    model: 'FH',
    source: SOURCES.volvo,
  }),

  // ==================== DAF XF ====================

  makePart({
    id: 'daf-xf-air-filter',
    systemId: SYSTEMS.engine,
    name: 'Air Filter',
    category: 'Filters',
    manufacturer: 'DAF Trucks',
    model: 'XF',
    source: SOURCES.daf,
  }),

  makePart({
    id: 'daf-xf-oil-filter',
    systemId: SYSTEMS.engine,
    name: 'Oil Filter',
    category: 'Filters',
    manufacturer: 'DAF Trucks',
    model: 'XF',
    source: SOURCES.daf,
  }),

  makePart({
    id: 'daf-xf-brake-pad',
    systemId: SYSTEMS.brake,
    name: 'Brake Pad',
    category: 'Brakes',
    manufacturer: 'DAF Trucks',
    model: 'XF',
    source: SOURCES.daf,
  }),

  makePart({
    id: 'daf-xf-brake-disc',
    systemId: SYSTEMS.brake,
    name: 'Brake Disc',
    category: 'Brakes',
    manufacturer: 'DAF Trucks',
    model: 'XF',
    source: SOURCES.daf,
  }),

  makePart({
    id: 'daf-xf-radiator',
    systemId: SYSTEMS.cooling,
    name: 'Radiator',
    category: 'Cooling System',
    manufacturer: 'DAF Trucks',
    model: 'XF',
    source: SOURCES.daf,
  }),

  makePart({
    id: 'daf-xf-alternator',
    systemId: SYSTEMS.electrical,
    name: 'Alternator',
    category: 'Electrical',
    manufacturer: 'DAF Trucks',
    model: 'XF',
    source: SOURCES.daf,
  }),

  // ==================== MERCEDES ACTROS ====================

  makePart({
    id: 'mercedes-actros-air-spring',
    systemId: SYSTEMS.suspension,
    name: 'Air Spring',
    category: 'Suspension',
    manufacturer: 'Mercedes-Benz Trucks',
    model: 'Actros',
    source: SOURCES.mercedes,
  }),

  makePart({
    id: 'mercedes-actros-brake-disc',
    systemId: SYSTEMS.brake,
    name: 'Brake Disc',
    category: 'Brakes',
    manufacturer: 'Mercedes-Benz Trucks',
    model: 'Actros',
    source: SOURCES.mercedes,
  }),

  makePart({
    id: 'mercedes-actros-brake-pad',
    systemId: SYSTEMS.brake,
    name: 'Brake Pad',
    category: 'Brakes',
    manufacturer: 'Mercedes-Benz Trucks',
    model: 'Actros',
    source: SOURCES.mercedes,
  }),

  makePart({
    id: 'mercedes-actros-fuel-filter',
    systemId: SYSTEMS.engine,
    name: 'Fuel Filter',
    category: 'Filters',
    manufacturer: 'Mercedes-Benz Trucks',
    model: 'Actros',
    source: SOURCES.mercedes,
  }),

  makePart({
    id: 'mercedes-actros-starter-motor',
    systemId: SYSTEMS.electrical,
    name: 'Starter Motor',
    category: 'Electrical',
    manufacturer: 'Mercedes-Benz Trucks',
    model: 'Actros',
    source: SOURCES.mercedes,
  }),

  // ==================== SCANIA R ====================

  makePart({
    id: 'scania-r-brake-disc',
    systemId: SYSTEMS.brake,
    name: 'Brake Disc',
    category: 'Brakes',
    manufacturer: 'Scania',
    model: 'R-Series',
    source: SOURCES.scania,
  }),

  makePart({
    id: 'scania-r-brake-pad',
    systemId: SYSTEMS.brake,
    name: 'Brake Pad',
    category: 'Brakes',
    manufacturer: 'Scania',
    model: 'R-Series',
    source: SOURCES.scania,
  }),

  makePart({
    id: 'scania-r-oil-filter',
    systemId: SYSTEMS.engine,
    name: 'Oil Filter',
    category: 'Filters',
    manufacturer: 'Scania',
    model: 'R-Series',
    source: SOURCES.scania,
  }),

  makePart({
    id: 'scania-r-shock-absorber',
    systemId: SYSTEMS.suspension,
    name: 'Shock Absorber',
    category: 'Suspension',
    manufacturer: 'Scania',
    model: 'R-Series',
    source: SOURCES.scania,
  }),

  // ==================== MAN TGX ====================

  makePart({
    id: 'man-tgx-air-filter',
    systemId: SYSTEMS.engine,
    name: 'Air Filter',
    category: 'Filters',
    manufacturer: 'MAN Trucks',
    model: 'TGX',
    source: SOURCES.man,
  }),

  makePart({
    id: 'man-tgx-brake-pad',
    systemId: SYSTEMS.brake,
    name: 'Brake Pad',
    category: 'Brakes',
    manufacturer: 'MAN Trucks',
    model: 'TGX',
    source: SOURCES.man,
  }),

  makePart({
    id: 'man-tgx-water-pump',
    systemId: SYSTEMS.cooling,
    name: 'Water Pump',
    category: 'Cooling System',
    manufacturer: 'MAN Trucks',
    model: 'TGX',
    source: SOURCES.man,
  }),

  // ==================== RENAULT T ====================

  makePart({
    id: 'renault-t-air-spring',
    systemId: SYSTEMS.suspension,
    name: 'Air Spring',
    category: 'Suspension',
    manufacturer: 'Renault Trucks',
    model: 'T',
    source: SOURCES.renault,
  }),

  makePart({
    id: 'renault-t-brake-disc',
    systemId: SYSTEMS.brake,
    name: 'Brake Disc',
    category: 'Brakes',
    manufacturer: 'Renault Trucks',
    model: 'T',
    source: SOURCES.renault,
  }),

  makePart({
    id: 'renault-t-fuel-pump',
    systemId: SYSTEMS.engine,
    name: 'Fuel Pump',
    category: 'Engine',
    manufacturer: 'Renault Trucks',
    model: 'T',
    source: SOURCES.renault,
  }),

  // ==================== IVECO S-WAY ====================

  makePart({
    id: 'iveco-sway-oil-filter',
    systemId: SYSTEMS.engine,
    name: 'Oil Filter',
    category: 'Filters',
    manufacturer: 'Iveco',
    model: 'S-Way',
    source: SOURCES.iveco,
  }),

  makePart({
    id: 'iveco-sway-brake-pad',
    systemId: SYSTEMS.brake,
    name: 'Brake Pad',
    category: 'Brakes',
    manufacturer: 'Iveco',
    model: 'S-Way',
    source: SOURCES.iveco,
  }),

  makePart({
    id: 'iveco-sway-turbocharger',
    systemId: SYSTEMS.engine,
    name: 'Turbocharger',
    category: 'Engine',
    manufacturer: 'Iveco',
    model: 'S-Way',
    source: SOURCES.iveco,
  }),
];
