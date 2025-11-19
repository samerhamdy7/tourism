"use client";
export default function Banner({ title, subtitle }) {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-700 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
          {title}
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        <div className="mt-12 flex justify-center space-x-4">
          <div className="w-3 h-3 bg-white rounded-full opacity-60"></div>
          <div className="w-3 h-3 bg-yellow-300 rounded-full opacity-80"></div>
          <div className="w-3 h-3 bg-white rounded-full opacity-60"></div>
        </div>
      </div>
    </div>
  );
}
