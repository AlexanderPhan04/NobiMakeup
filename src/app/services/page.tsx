import {
  FaCrown,
  FaStar,
  FaCamera,
  FaUserFriends,
  FaPalette,
  FaGift,
} from "react-icons/fa";
import Link from "next/link";

const services = [
  {
    icon: <FaCrown className="text-4xl" />,
    title: "Makeup Cô Dâu",
    price: "Từ 2.000.000đ",
    description:
      "Trang điểm cô dâu theo phong cách Hàn Quốc, Châu Âu hoặc Á Đông. Bao gồm: makeup, làm tóc, phụ kiện.",
    features: [
      "Thử makeup miễn phí",
      "Làm tóc chuyên nghiệp",
      "Phục vụ tại nhà",
      "Trang điểm phù dâu",
    ],
    gradient: "from-pink-primary to-pink-accent",
    popular: true,
  },
  {
    icon: <FaStar className="text-4xl" />,
    title: "Makeup Dự Tiệc",
    price: "Từ 800.000đ",
    description:
      "Trang điểm dự tiệc cưới, sinh nhật, event. Phong cách sang trọng, lộng lẫy theo sự kiện.",
    features: [
      "Makeup lâu trôi",
      "Phong cách đa dạng",
      "Tư vấn miễn phí",
      "Chỉnh sửa theo yêu cầu",
    ],
    gradient: "from-pink-accent to-pink-main",
    popular: false,
  },
  {
    icon: <FaCamera className="text-4xl" />,
    title: "Makeup Chụp Ảnh/Phim",
    price: "Từ 1.200.000đ",
    description:
      "Trang điểm cho chụp ảnh cưới, lookbook, TVC, MV. Chuyên nghiệp phù hợp với ánh sáng studio.",
    features: [
      "Makeup HD chuyên nghiệp",
      "Phù hợp mọi concept",
      "Hỗ trợ nhiều outfit",
      "Makeup artist có kinh nghiệm",
    ],
    gradient: "from-pink-main to-pink-light",
    popular: false,
  },
  {
    icon: <FaUserFriends className="text-4xl" />,
    title: "Makeup Nhóm",
    price: "Từ 600.000đ/người",
    description:
      "Dịch vụ makeup cho nhóm bạn đi dự tiệc, event, team building. Ưu đãi đặc biệt cho nhóm từ 5 người.",
    features: [
      "Giảm giá nhóm",
      "Phong cách đồng nhất",
      "Linh hoạt thời gian",
      "Makeup tại địa điểm yêu cầu",
    ],
    gradient: "from-pink-light to-pink-pastel",
    popular: false,
  },
  {
    icon: <FaPalette className="text-4xl" />,
    title: "Dạy Makeup 1-1",
    price: "Từ 1.500.000đ/buổi",
    description:
      "Khóa học makeup cá nhân, được hướng dẫn trực tiếp bởi chuyên gia. Phù hợp mọi trình độ.",
    features: [
      "Học 1 kèm 1",
      "Tài liệu chi tiết",
      "Thực hành thực tế",
      "Tư vấn sản phẩm",
    ],
    gradient: "from-pink-pastel to-cream",
    popular: false,
  },
  {
    icon: <FaGift className="text-4xl" />,
    title: "Gói VIP Premium",
    price: "Từ 5.000.000đ",
    description:
      "Gói dịch vụ trọn gói cho sự kiện đặc biệt: makeup, làm tóc, nail, spa. Đội ngũ phục vụ riêng.",
    features: [
      "Dịch vụ toàn diện",
      "Đội ngũ chuyên nghiệp",
      "Chăm sóc cả ngày",
      "Phục vụ tại nhà/venue",
    ],
    gradient: "from-gold to-pink-accent",
    popular: false,
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-pastel via-pink-light to-pink-main py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-pink-dark mb-4 drop-shadow-md">
            Dịch Vụ Của Chúng Tôi
          </h1>
          <p className="text-xl text-gray-800 max-w-2xl mx-auto">
            Khám phá các gói dịch vụ makeup chuyên nghiệp được thiết kế riêng
            cho từng nhu cầu của bạn
          </p>
          <p className="text-lg text-pink-primary font-semibold mt-3">
            Makeup Artist: Nobi
          </p>
          <div className="mt-6 flex items-center justify-center gap-2 text-pink-primary">
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <span className="ml-2 font-semibold">
              4.9/5.0 từ 500+ khách hàng
            </span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br from-white/70 to-pink-pastel/40 backdrop-blur-sm rounded-2xl shadow-soft hover:shadow-pink transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-pink-light/50 group ${
                index % 2 === 0 ? "animate-slide-up" : "animate-fade-in"
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-gold text-white px-4 py-1 rounded-full text-sm font-bold shadow-md z-10">
                  ⭐ Phổ biến
                </div>
              )}

              {/* Icon Header */}
              <div
                className={`bg-gradient-to-r ${service.gradient} p-8 text-gray-900 relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <div className="relative z-10 flex flex-col items-center">
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-2 text-gray-900">
                    {service.title}
                  </h3>
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <p className="text-lg font-semibold text-gray-900">
                      {service.price}
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <div className="w-5 h-5 bg-gradient-to-r from-pink-primary to-pink-accent rounded-full flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-3 h-3 text-gray-900"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <Link href="/booking">
                  <button className="w-full py-3 rounded-full font-semibold bg-gradient-to-r from-pink-primary to-pink-accent text-gray-900 shadow-md hover:shadow-pink transition-all duration-300 hover:scale-105">
                    Đặt lịch ngay
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="bg-gradient-to-br from-white/70 to-pink-pastel/40 backdrop-blur-sm rounded-2xl shadow-soft p-8 md:p-12 border border-pink-light/50">
          <h2 className="text-3xl font-bold text-pink-dark mb-6 text-center">
            💝 Ưu Đãi Đặc Biệt
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-pink-light/60 to-pink-pastel/50 rounded-xl p-6 border border-pink-light/50">
              <h3 className="font-bold text-lg text-pink-dark mb-3">
                🎁 Khuyến mãi tháng này
              </h3>
              <ul className="space-y-2 text-gray-800">
                <li>✨ Giảm 15% cho khách hàng đặt lịch lần đầu</li>
                <li>✨ Tặng voucher 200.000đ khi giới thiệu bạn bè</li>
                <li>✨ Miễn phí thử makeup cho dịch vụ cô dâu</li>
              </ul>
            </div>
            <div className="bg-gradient-to-r from-pink-pastel/50 to-pink-light/60 rounded-xl p-6 border border-pink-light/50">
              <h3 className="font-bold text-lg text-pink-dark mb-3">
                📋 Chính sách dịch vụ
              </h3>
              <ul className="space-y-2 text-gray-800">
                <li>💎 Sử dụng 100% mỹ phẩm chính hãng</li>
                <li>💎 Cam kết đúng giờ, hoàn tiền nếu trễ</li>
                <li>💎 Bảo hành makeup, chỉnh sửa miễn phí trong ngày</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/booking">
              <button className="px-12 py-4 rounded-full text-gray-900 text-lg font-bold shadow-pink bg-gradient-to-r from-pink-primary via-pink-accent to-pink-main hover:shadow-glow hover:scale-105 transition-all duration-300">
                🎀 Đặt Lịch Tư Vấn Miễn Phí
              </button>
            </Link>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center bg-gradient-to-r from-pink-primary to-pink-accent rounded-2xl p-8 text-gray-900 shadow-pink">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            Bạn cần tư vấn thêm?
          </h3>
          <p className="mb-6 text-gray-800">
            Liên hệ ngay với chúng tôi để được hỗ trợ tốt nhất!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://www.facebook.com/nobiii.taaaa"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-pink-primary px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              💬 Chat Facebook
            </a>
            <a
              href="https://www.instagram.com/_imnobii_"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-pink-primary px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              📸 Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
