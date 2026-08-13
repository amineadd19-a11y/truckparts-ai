import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Truck } from 'lucide-react';
import AdSlot from '@/components/ads/AdSlot';
import ManufacturerCard from '@/components/catalog/ManufacturerCard';
import { TRUCK_MANUFACTURERS } from '@/types/catalog';

interface ManufacturerPageProps {
  params: {
    manufacturer: string;
  };
}

export default function ManufacturerPage({
  params,
}: ManufacturerPageProps) {
  const manufacturer = TRUCK_MANUFACTURERS.find(
    (item) => item.id === params.manufacturer,
  );

  if (!manufacturer) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="max-w-6xl mx-auto px-4 py-8">
        <Link
          href="/trucks"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8"
        >
          <ArrowLeft size={18} />
          Back to manufacturers
        </Link>

        <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Truck className="text-blue-600" size={40} />

            <div>
              <h1 className="text-4xl font-bold text-gray-900">
                {manufacturer.name}
              </h1>

              {manufacturer.country && (
                <p className="text-gray-600">
                  Country: {manufacturer.country}
                </p>
              )}
            </div>
          </div>
        </div>

        <AdSlot placement="manufacturer-top" />

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Manufacturer Information
          </h2>

          <ManufacturerCard manufacturer={manufacturer} />
        </section>

        <section className="mt-10 bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Chassis Prefixes
          </h2>

          {manufacturer.chassisPrefixes.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {manufacturer.chassisPrefixes.map((prefix) => (
                <span
                  key={prefix}
                  className="px-3 py-2 bg-gray-100 rounded-lg text-sm font-mono"
                >
                  {prefix}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">
              No chassis prefixes available.
            </p>
          )}
        </section>
      </section>
    </main>
  );
}
