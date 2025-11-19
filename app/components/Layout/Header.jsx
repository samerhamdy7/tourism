"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-linear-to-r from-blue-800 to-purple-900 shadow-xl sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-4xl font-bold text-white hover:text-yellow-300 transition-colors duration-300"
        >
          رحلاتي
        </Link>

        <nav className="flex items-center gap-10">
          <Link
            href="/"
            className={`text-xl font-semibold transition-all duration-300 ${
              pathname === "/"
                ? "text-yellow-300 border-b-2 border-yellow-300 pb-1"
                : "text-white hover:text-yellow-300 hover:scale-105"
            }`}
          >
            الرئيسية
          </Link>
          <Link
            href="/destinations"
            className={`text-xl font-semibold transition-all duration-300 ${
              pathname === "/destinations"
                ? "text-yellow-300 border-b-2 border-yellow-300 pb-1"
                : "text-white hover:text-yellow-300 hover:scale-105"
            }`}
          >
            الوجهات
          </Link>
        </nav>
      </div>
    </header>
  );
}
