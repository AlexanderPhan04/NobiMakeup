import {
  FaMapMarkerAlt,
  FaRegClock,
  FaPhoneAlt,
  FaStar,
  FaHeart,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-pastel via-pink-light to-pink-main flex flex-col items-center justify-center py-12 px-4">
      {/* Hero Section */}
      <div className="w-full max-w-6xl">
        {/* Main Card */}
        <div className="bg-gradient-to-br from-pink-pastel/70 via-pink-light/50 to-pink-pastel/70 backdrop-blur-xl rounded-3xl shadow-pink overflow-hidden border border-pink-primary/20 animate-fade-in">
          {/* Header Section with Background */}
          <div className="relative bg-gradient-to-r from-pink-primary via-pink-accent to-pink-main p-8 md:p-12 text-gray-900">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-dark/20 rounded-full blur-2xl"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
              {/* Logo */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gold to-pink-light rounded-full blur-md opacity-50 animate-pulse"></div>
                <div className="relative rounded-full shadow-glow ring-4 ring-white/50 overflow-hidden w-32 h-32 md:w-40 md:h-40 flex items-center justify-center bg-white animate-float">
                  <Image
                    src="/images/534909308_1319319496220085_2818037209643681935_n.jpg"
                    alt="BookMyMakeup Logo"
                    width={160}
                    height={160}
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Brand & Tagline */}
              {/* Brand & Tagline */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-3 drop-shadow-lg text-gray-900">
                  BookMyMakeup
                </h1>
                <p className="text-lg md:text-xl text-gray-800 mb-2 font-medium">
                  ✨ Dịch vụ Makeup chuyên nghiệp - Tận tâm đưa bạn tỏa sáng ở
                  mọi sự kiện! ✨
                </p>
                <p className="text-base md:text-lg text-gray-900 mb-4 italic font-semibold">
                  Makeup Artist: Nobi
                </p>
                <div className="flex items-center justify-center md:justify-start gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-xl" />
                  ))}
                  <span className="ml-2 text-gray-900 font-bold text-sm bg-white/90 px-3 py-1 rounded-full shadow-sm">
                    (500+ đánh giá)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8 md:p-12">
            {/* Banner Gallery */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-pink-primary mb-6 text-center flex items-center justify-center gap-2">
                <FaHeart className="text-pink-accent" />
                Portfolio Của Chúng Tôi
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-pink group">
                  <Image
                    src="/images/534909308_1319319496220085_2818037209643681935_n.jpg"
                    width={800}
                    height={600}
                    alt="Makeup Portfolio 1"
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white font-semibold text-lg">
                      Makeup Cô Dâu
                    </p>
                  </div>
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-pink group">
                  <Image
                    src="/images/534909308_1319319496220085_2818037209643681935_n.jpg"
                    width={800}
                    height={600}
                    alt="Makeup Portfolio 2"
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-accent/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white font-semibold text-lg">
                      Makeup Dự Tiệc
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="bg-gradient-to-br from-pink-light/60 to-pink-pastel/40 rounded-2xl p-6 shadow-soft hover:shadow-pink transition-all duration-300 hover:-translate-y-1 border border-pink-light/50">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-primary to-pink-accent rounded-full flex items-center justify-center shadow-md">
                    <FaMapMarkerAlt className="text-white text-xl" />
                  </div>
                  <h3 className="font-bold text-pink-primary text-lg">
                    Địa chỉ
                  </h3>
                </div>
                <p className="text-gray-700 font-medium">
                  123 Phan Chu Trinh, Hà Nội
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-light to-pink-pastel rounded-2xl p-6 shadow-soft hover:shadow-pink transition-all duration-300 hover:-translate-y-1 border border-pink-primary/30">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-accent to-pink-main rounded-full flex items-center justify-center shadow-md">
                    <FaRegClock className="text-white text-xl" />
                  </div>
                  <h3 className="font-bold text-pink-dark text-lg">
                    Giờ làm việc
                  </h3>
                </div>
                <p className="text-gray-800 font-medium">
                  8:00 - 20:00 (T2-CN)
                </p>
              </div>
            </div>

            {/* Services Highlight */}
            {/* Services Highlight */}
            <div className="bg-gradient-to-r from-pink-main/50 via-pink-light/40 to-pink-main/50 rounded-2xl p-8 mb-10 shadow-soft border border-pink-light/50">
              <h3 className="text-2xl font-bold text-pink-dark mb-6 text-center">
                🌟 Dịch Vụ Nổi Bật
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 bg-pink-pastel/50 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow border border-pink-light/50">
                  <span className="text-3xl">💄</span>
                  <span className="font-semibold text-gray-800">
                    Makeup cô dâu cao cấp
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-pink-pastel/50 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow border border-pink-light/50">
                  <span className="text-3xl">✨</span>
                  <span className="font-semibold text-gray-800">
                    Trang điểm dự tiệc
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-pink-pastel/50 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow border border-pink-light/50">
                  <span className="text-3xl">📸</span>
                  <span className="font-semibold text-gray-800">
                    Makeup chụp hình/phim
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/booking" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-12 py-4 rounded-full text-gray-900 text-lg font-bold shadow-pink bg-gradient-to-r from-pink-primary via-pink-accent to-pink-main hover:shadow-glow hover:scale-105 transition-all duration-300 relative overflow-hidden group">
                  <span className="relative z-10">🎀 Đặt Lịch Ngay</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-main via-pink-accent to-pink-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </Link>

              <Link href="/services" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-12 py-4 rounded-full text-pink-primary text-lg font-bold shadow-soft bg-white border-2 border-pink-primary hover:bg-pink-primary hover:text-white hover:shadow-pink transition-all duration-300 hover:scale-105">
                  Xem Dịch Vụ
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6 animate-slide-up">
          <div className="bg-gradient-to-br from-white/70 to-pink-pastel/40 backdrop-blur-sm rounded-2xl p-6 shadow-soft hover:shadow-pink transition-all duration-300 text-center border border-pink-light/50">
            <div className="text-5xl mb-4 animate-float">👑</div>
            <h3 className="font-bold text-pink-dark text-lg mb-2">
              Chuyên Nghiệp
            </h3>
            <p className="text-sm text-gray-700">
              Đội ngũ makeup artist giàu kinh nghiệm
            </p>
          </div>

          <div className="bg-gradient-to-br from-white/70 to-pink-pastel/40 backdrop-blur-sm rounded-2xl p-6 shadow-soft hover:shadow-pink transition-all duration-300 text-center border border-pink-light/50">
            <div className="text-5xl mb-4 animate-float">✨</div>
            <h3 className="font-bold text-pink-dark text-lg mb-2">
              Sản Phẩm Cao Cấp
            </h3>
            <p className="text-sm text-gray-700">
              Sản phẩm chính hãng từ các thương hiệu nổi tiếng
            </p>
          </div>

          <div className="bg-gradient-to-br from-white/70 to-pink-pastel/40 backdrop-blur-sm rounded-2xl p-6 shadow-soft hover:shadow-pink transition-all duration-300 text-center border border-pink-light/50">
            <div className="text-5xl mb-4 animate-float">⏰</div>
            <h3 className="font-bold text-pink-dark text-lg mb-2">Đúng Giờ</h3>
            <p className="text-sm text-gray-700">
              Cam kết đến đúng giờ, phục vụ tận tâm
            </p>
          </div>

          <div className="bg-gradient-to-br from-white/70 to-pink-pastel/40 backdrop-blur-sm rounded-2xl p-6 shadow-soft hover:shadow-pink transition-all duration-300 text-center border border-pink-light/50">
            <div className="text-5xl mb-4 animate-float">💝</div>
            <h3 className="font-bold text-pink-dark text-lg mb-2">
              Giá Hợp Lý
            </h3>
            <p className="text-sm text-gray-700">
              Bảng giá minh bạch, nhiều ưu đãi hấp dẫn
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
