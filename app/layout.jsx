import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
});

export const metadata = {
  title: "سياحة - اكتشف العالم",
  description: "موقع سياحة متكامل لاكتشاف الوجهات السياحية حول العالم",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.variable}>{children}</body>
    </html>
  );
}
