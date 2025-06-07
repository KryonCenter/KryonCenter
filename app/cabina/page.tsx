'use client';

import dynamic from 'next/dynamic';

const QuantumCabin = dynamic(
  () => import('@/components/cabina').then((mod) => mod.default),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-screen items-center justify-center bg-gray-900">
        <p className="animate-pulse text-xl text-gray-500">Cargando cabina...</p>
      </div>
    )
  }
);

export default function Page() {
  return (
    <div className="h-screen w-full bg-gray-900">
      <QuantumCabin />
    </div>
  );
}