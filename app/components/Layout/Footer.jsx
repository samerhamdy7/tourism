"use client";
export default function Footer() {
  return (
    <footer className="bg-linear-to-b from-gray-900 to-black text-white pt-16 pb-8 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="text-center md:text-right">
            <h3 className="text-4xl font-bold mb-6 text-yellow-400">رحلاتي</h3>
            <p className="text-gray-300 text-lg leading-8">
              نقدم لكم أفضل التجارب السياحية حول العالم برحلة لا تنسى
            </p>
          </div>

          <div className="text-center">
            <h4 className="text-2xl font-bold mb-6 text-white border-b-2 border-yellow-400 pb-2 inline-block">
              خدماتنا
            </h4>
            <div className="flex flex-col gap-4 mt-4">
              <a
                href="/flights"
                className="text-gray-300 hover:text-yellow-400 transition-all duration-300 hover:pr-2"
              >
                حجوزات الطيران
              </a>
              <a
                href="/hotels"
                className="text-gray-300 hover:text-yellow-400 transition-all duration-300 hover:pr-2"
              >
                حجوزات الفنادق
              </a>
              <a
                href="/tours"
                className="text-gray-300 hover:text-yellow-400 transition-all duration-300 hover:pr-2"
              >
                الجولات السياحية
              </a>
              <a
                href="/visa"
                className="text-gray-300 hover:text-yellow-400 transition-all duration-300 hover:pr-2"
              >
                تأشيرات السفر
              </a>
            </div>
          </div>

          <div className="text-center ">
            <h4 className="text-2xl font-bold mb-6 text-white border-b-2 border-yellow-400 pb-2 inline-block">
              تواصل معنا
            </h4>
            <div className="space-y-4 mt-4">
              <p className="text-gray-300 flex items-center justify-center md:justify-start gap-2">
                <span className="text-yellow-400">✉️</span>
                info@rihlati.com
              </p>
              <p className="text-gray-300 flex items-center justify-center md:justify-start gap-2">
                <span className="text-yellow-400">📞</span>
                01212345678
              </p>
              <p className="text-gray-300 flex items-center justify-center md:justify-start gap-2">
                <span className="text-yellow-400">📍</span>
                جمهورية مصر العظمى
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-lg">
            © {new Date().getFullYear()} شركة رحلاتي للسياحة والسفر. جميع الحقوق
            محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
