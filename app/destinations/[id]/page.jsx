"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import BookingForm from "@/app/components/forms/BookingForm";
import { destinations } from "@/app/data/destinations";
import { Toaster, toast } from "react-hot-toast";

export default function DestinationDetail() {
  const params = useParams();
  const id = params.id;
  const destination = destinations.find((dest) => dest.id === parseInt(id));

  const [showBookingForm, setShowBookingForm] = useState(false);

  if (!destination) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Header />
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">
            الوجهة غير موجودة
          </h1>
        </div>
        <Footer />
      </div>
    );
  }

  const handleBookingSubmit = (bookingData) => {
    toast.success("تم إرسال طلب الحجز بنجاح! سنتواصل معك قريبًا.");
    console.log("بيانات الحجز:", bookingData);
    setShowBookingForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-96 overflow-hidden">
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-800">
                  {destination.name}
                </h1>
                <div className="flex items-center mt-2">
                  <span className="text-gray-600 mr-4">
                    {destination.country}
                  </span>
                  <span className="text-gray-600">{destination.duration}</span>
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="text-3xl font-bold text-green-600">
                  ${destination.price}
                </span>
                <button
                  onClick={() => setShowBookingForm(true)}
                  className="ml-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors duration-300"
                >
                  احجز الآن
                </button>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                وصف الرحلة
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {destination.details}
              </p>
            </div>
          </div>
        </div>

        {showBookingForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">
                  احجز رحلتك إلى {destination.name}
                </h2>
                <button
                  onClick={() => setShowBookingForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <BookingForm
                destination={destination}
                onSubmit={handleBookingSubmit}
                onCancel={() => setShowBookingForm(false)}
              />
            </div>
          </div>
        )}
      </main>

      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}
