import type { Metadata } from "next";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BookMyMakeup - Nobi - Đặt lịch makeup chuyên nghiệp",
  description:
    "Dịch vụ Makeup chuyên nghiệp bởi Nobi - Đặt lịch nhanh chóng và tiện lợi. Makeup cô dâu, dự tiệc, chụp ảnh chuyên nghiệp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="font-poppins bg-gradient-to-br from-pink-pastel via-pink-light to-pink-main text-gray-800 min-h-screen antialiased flex flex-col">
        {/* Header cố định */}
        <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-lg shadow-soft border-b border-pink-light/50">
          <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
            {/* Logo & Brand */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-primary to-pink-accent rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative rounded-full shadow-md ring-2 ring-pink-accent/50 overflow-hidden w-12 h-12 bg-white group-hover:ring-pink-primary transition-all">
                  <Image
                    src="/images/534909308_1319319496220085_2818037209643681935_n.jpg"
                    width={48}
                    height={48}
                    alt="Logo"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-pink-primary tracking-tight group-hover:text-pink-accent transition-colors">
                  BookMyMakeup
                </span>
                <span className="text-xs text-gray-500 hidden sm:block">
                  Tỏa sáng mỗi khoảnh khắc
                </span>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="flex items-center gap-2 md:gap-6">
              <Link
                href="/"
                className="px-4 py-2 text-gray-700 hover:text-pink-primary font-semibold text-sm md:text-base transition-all duration-300 hover:bg-pink-pastel/50 rounded-full"
              >
                Trang chủ
              </Link>
              <Link
                href="/services"
                className="px-4 py-2 text-gray-700 hover:text-pink-primary font-semibold text-sm md:text-base transition-all duration-300 hover:bg-pink-pastel/50 rounded-full"
              >
                Dịch vụ
              </Link>
              <Link
                href="/booking"
                className="px-6 py-2.5 bg-gradient-to-r from-pink-primary to-pink-accent text-gray-900 font-bold text-sm md:text-base rounded-full shadow-md hover:shadow-pink transition-all duration-300 hover:scale-105"
              >
                Đặt lịch
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-1 w-full">{children}</main>

        {/* Footer */}
        <footer className="w-full bg-white/90 backdrop-blur-lg shadow-inner border-t border-pink-light/50 mt-auto">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
              {/* About */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-full shadow-md ring-2 ring-pink-accent/50 overflow-hidden w-10 h-10 bg-white">
                    <Image
                      src="/images/534909308_1319319496220085_2818037209643681935_n.jpg"
                      width={40}
                      height={40}
                      alt="Logo"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-lg text-pink-primary">
                    BookMyMakeup
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Dịch vụ makeup chuyên nghiệp, mang đến vẻ đẹp tự nhiên và rực
                  rỡ cho mọi sự kiện đặc biệt của bạn.
                </p>
                <p className="text-sm text-pink-primary font-semibold mt-3">
                  Makeup Artist: Nobi
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-bold text-pink-primary mb-4">
                  Liên Kết Nhanh
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="/"
                      className="text-gray-600 hover:text-pink-primary transition-colors"
                    >
                      → Trang chủ
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="text-gray-600 hover:text-pink-primary transition-colors"
                    >
                      → Dịch vụ
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/booking"
                      className="text-gray-600 hover:text-pink-primary transition-colors"
                    >
                      → Đặt lịch
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact & Social */}
              <div>
                <h4 className="font-bold text-pink-primary mb-4">Liên Hệ</h4>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center gap-2">
                    <span>📍</span>
                    <span>123 Phan Chu Trinh, Hà Nội</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>🕐</span>
                    <span>8:00 - 20:00 (T2-CN)</span>
                  </li>
                </ul>

                {/* Social Links */}
                <h5 className="font-semibold text-gray-700 mb-3 text-sm">
                  Kết nối với chúng tôi:
                </h5>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.facebook.com/nobiii.taaaa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-gradient-to-br from-pink-primary to-pink-accent rounded-full flex items-center justify-center text-white hover:shadow-pink hover:scale-110 transition-all duration-300"
                    aria-label="Facebook"
                  >
                    <svg
                      width="18"
                      height="18"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/_imnobii_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-gradient-to-br from-pink-accent to-pink-main rounded-full flex items-center justify-center text-white hover:shadow-pink hover:scale-110 transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <svg
                      width="18"
                      height="18"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-pink-light/30 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-gray-500 text-center md:text-left">
                © {new Date().getFullYear()} BookMyMakeup - Nobi. All rights
                reserved.
              </p>
              <p className="text-xs text-pink-accent font-semibold">
                ✨ Tỏa sáng từng khoảnh khắc! ✨
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
