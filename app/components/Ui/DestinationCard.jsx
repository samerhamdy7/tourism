"use client";
import Link from "next/link";

export default function DestinationCard({ destination }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-100">
      <div className="h-48 overflow-hidden relative">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 rounded-md text-sm font-semibold">
          {destination.country}
        </div>
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-800 flex-1">
            {destination.name}
          </h3>
          <span className="text-lg font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-md ml-2">
            ${destination.price}
          </span>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
          {destination.description}
        </p>

        <div className="flex justify-between items-center">
          <span className="text-gray-500 text-sm bg-gray-100 px-2 py-1 rounded">
            {destination.duration}
          </span>
          <Link
            href={`/destinations/${destination.id}`}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-all duration-300 font-semibold hover:shadow-lg"
          >
            تفاصيل الرحلة
          </Link>
        </div>
      </div>
    </div>
  );
}
