"use client";
import { useState, useEffect } from "react";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import Banner from "@/app/components/ui/Banner";
import DestinationCard from "@/app/components/ui/DestinationCard";
import SearchFilter from "@/app/components/ui/SearchFilter";
import { destinations } from "@/app/data/destinations";

export default function Home() {
  const [filteredDestinations, setFilteredDestinations] =
    useState(destinations);
  const [searchTerm, setSearchTerm] = useState("");
  const [countryFilter, setCountryFilter] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 5000]);

  const countries = [...new Set(destinations.map((dest) => dest.country))];

  useEffect(() => {
    let results = destinations;

    if (searchTerm) {
      results = results.filter(
        (dest) =>
          dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          dest.country.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (countryFilter !== "all") {
      results = results.filter((dest) => dest.country === countryFilter);
    }

    results = results.filter(
      (dest) => dest.price >= priceRange[0] && dest.price <= priceRange[1]
    );

    setFilteredDestinations(results);
  }, [searchTerm, countryFilter, priceRange]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <Banner
        title="اكتشف العالم معنا"
        subtitle="استمتع بأجمل الوجهات السياحية حول العالم بأسعار مناسبة"
      />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            وجهاتنا المميزة
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            اختر من بين مجموعة مختارة من أفضل الوجهات السياحية حول العالم
          </p>
        </div>

        <SearchFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          countryFilter={countryFilter}
          setCountryFilter={setCountryFilter}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          countries={countries}
          maxPrice={5000}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredDestinations.length > 0 ? (
            filteredDestinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-xl text-gray-600">
                لم نعثر على وجهات تطابق معايير البحث
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
