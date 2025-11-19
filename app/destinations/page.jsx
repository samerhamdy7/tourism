"use client";

import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import DestinationCard from "@/app/components/ui/DestinationCard";
import { destinations } from "@/app/data/destinations";

export default function DestinationsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
            جميع الوجهات
          </h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            اكتشف جميع وجهاتنا السياحية المميزة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
