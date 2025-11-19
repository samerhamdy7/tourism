"use client";
import { useState, useEffect } from "react";

export default function SearchFilter({
  searchTerm,
  setSearchTerm,
  countryFilter,
  setCountryFilter,
  priceRange,
  setPriceRange,
  countries,
  maxPrice,
}) {
  const [localPriceRange, setLocalPriceRange] = useState(priceRange);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPriceRange(localPriceRange);
    }, 300);

    return () => clearTimeout(timer);
  }, [localPriceRange, setPriceRange]);

  const clearFilters = () => {
    setSearchTerm("");
    setCountryFilter("all");
    setLocalPriceRange([0, maxPrice]);
  };

  const hasActiveFilters =
    searchTerm ||
    countryFilter !== "all" ||
    localPriceRange[0] > 0 ||
    localPriceRange[1] < maxPrice;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-gray-800">بحث وتصفية الوجهات</h3>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-sm text-red-600 hover:text-red-700 font-semibold transition-colors"
          >
            مسح الفلاتر
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-gray-700 mb-2 font-semibold">
            ابحث عن وجهة
          </label>
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="اسم الوجهة أو البلد..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-black"
            />
            <svg
              className="absolute left-3 top-3.5 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <div>
          <label className="block text-gray-700 mb-2 font-semibold">
            فلتر حسب البلد
          </label>
          <select
            value={countryFilter}
            onChange={(e) => setCountryFilter(e.target.value)}
            className="w-full text-black px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none"
          >
            <option value="all">جميع البلدان</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-gray-700 mb-2 font-semibold">
            نطاق السعر:{" "}
            <span className="text-blue-600">
              ${localPriceRange[0]} - ${localPriceRange[1]}
            </span>
          </label>
          <div className="space-y-3">
            <div className="flex space-x-4">
              <input
                type="range"
                min="0"
                max={maxPrice}
                value={localPriceRange[0]}
                onChange={(e) =>
                  setLocalPriceRange([
                    parseInt(e.target.value),
                    localPriceRange[1],
                  ])
                }
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <input
                type="range"
                min="0"
                max={maxPrice}
                value={localPriceRange[1]}
                onChange={(e) =>
                  setLocalPriceRange([
                    localPriceRange[0],
                    parseInt(e.target.value),
                  ])
                }
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>$0</span>
              <span>${maxPrice}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
