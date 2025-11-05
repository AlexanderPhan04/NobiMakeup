"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import {
  FaUser,
  FaPhone,
  FaCalendar,
  FaClipboard,
  FaCheckCircle,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";

interface FormData {
  name: string;
  phone: string;
  date: string;
  time: string;
  service: string;
  location: string;
  note: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  date?: string;
  time?: string;
  service?: string;
  location?: string;
}

export default function BookingPage() {
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    date: "",
    time: "",
    service: "",
    location: "",
    note: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const services = [
    "Makeup Cô Dâu",
    "Makeup Dự Tiệc",
    "Makeup Chụp Ảnh/Phim",
    "Makeup Nhóm",
    "Dạy Makeup 1-1",
    "Gói VIP Premium",
  ];

  const timeSlots = [
    "8:00 - 10:00",
    "10:00 - 12:00",
    "12:00 - 14:00",
    "14:00 - 16:00",
    "16:00 - 18:00",
    "18:00 - 20:00",
  ];

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors({ ...errors, [name]: "" });
    }
  }

  function validateForm(): boolean {
    const newErrors: FormErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Vui lòng nhập họ tên";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Vui lòng nhập số điện thoại";
    } else if (!/^(0[0-9]{9,10}|\+84[0-9]{9,10})$/.test(form.phone)) {
      newErrors.phone = "Số điện thoại không hợp lệ";
    }

    if (!form.date) {
      newErrors.date = "Vui lòng chọn ngày";
    }

    if (!form.time) {
      newErrors.time = "Vui lòng chọn giờ";
    }

    if (!form.service) {
      newErrors.service = "Vui lòng chọn dịch vụ";
    }

    if (!form.location.trim()) {
      newErrors.location = "Vui lòng nhập địa điểm";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      // Here you would typically send the data to your backend
      console.log("Booking data:", form);
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-pastel via-pink-light to-pink-main flex items-center justify-center px-4 py-12">
        <div className="max-w-2xl w-full bg-gradient-to-br from-white/70 to-pink-pastel/40 backdrop-blur-sm rounded-3xl shadow-pink p-8 md:p-12 text-center border border-pink-light/50 animate-fade-in">
          <div className="mb-6 flex justify-center">
            <div className="w-24 h-24 bg-gradient-to-r from-pink-primary to-pink-accent rounded-full flex items-center justify-center shadow-glow animate-bounce">
              <FaCheckCircle className="text-white text-5xl" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-pink-primary mb-4">
            🎉 Đặt Lịch Thành Công!
          </h1>

          <div className="bg-gradient-to-r from-pink-pastel/50 to-cream/50 rounded-2xl p-6 mb-6 border border-pink-light/30">
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Cảm ơn bạn{" "}
              <strong className="text-pink-primary">{form.name}</strong> đã đặt
              lịch với BookMyMakeup!
            </p>
            <div className="space-y-2 text-left max-w-md mx-auto">
              <div className="flex items-center gap-3 text-gray-700">
                <FaCalendar className="text-pink-primary" />
                <span>
                  <strong>Ngày:</strong>{" "}
                  {new Date(form.date).toLocaleDateString("vi-VN")}
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <FaClock className="text-pink-primary" />
                <span>
                  <strong>Giờ:</strong> {form.time}
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <FaClipboard className="text-pink-primary" />
                <span>
                  <strong>Dịch vụ:</strong> {form.service}
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <FaMapMarkerAlt className="text-pink-primary" />
                <span>
                  <strong>Địa điểm:</strong> {form.location}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-pink-light/30 rounded-xl p-4 mb-6">
            <p className="text-gray-700">
              📱 Chúng tôi sẽ liên hệ qua số điện thoại{" "}
              <strong className="text-pink-primary">{form.phone}</strong> để xác
              nhận lịch hẹn trong vòng 24 giờ.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                setSubmitted(false);
                setForm({
                  name: "",
                  phone: "",
                  date: "",
                  time: "",
                  service: "",
                  location: "",
                  note: "",
                });
              }}
              className="px-8 py-3 rounded-full font-semibold bg-white border-2 border-pink-primary text-pink-primary shadow-md hover:bg-pink-primary hover:text-white transition-all duration-300 hover:scale-105"
            >
              Đặt lịch khác
            </button>
            <a
              href="/"
              className="px-8 py-3 rounded-full font-semibold bg-gradient-to-r from-pink-primary to-pink-accent text-white shadow-md hover:shadow-pink transition-all duration-300 hover:scale-105 text-center"
            >
              Về trang chủ
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-pastel via-pink-light to-pink-main py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-pink-primary mb-4 drop-shadow-md">
            Đặt Lịch Makeup
          </h1>
          <p className="text-xl text-gray-700">
            Điền thông tin bên dưới để đặt lịch hẹn với chúng tôi
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <form
              className="bg-gradient-to-br from-white/70 to-pink-pastel/40 backdrop-blur-sm rounded-2xl shadow-soft p-8 border border-pink-light/50 animate-slide-up"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                    <FaUser className="text-pink-primary" />
                    Họ và tên <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-xl outline-none transition-all duration-300 ${
                      errors.name
                        ? "border-red-400"
                        : "border-pink-light/50 focus:border-pink-primary"
                    }`}
                    placeholder="Nguyễn Văn A"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                    <FaPhone className="text-pink-primary" />
                    Số điện thoại <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-xl outline-none transition-all duration-300 ${
                      errors.phone
                        ? "border-red-400"
                        : "border-pink-light/50 focus:border-pink-primary"
                    }`}
                    placeholder="0989123456"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Date */}
                <div>
                  <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                    <FaCalendar className="text-pink-primary" />
                    Ngày đặt lịch <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split("T")[0]}
                    className={`w-full px-4 py-3 border-2 rounded-xl outline-none transition-all duration-300 ${
                      errors.date
                        ? "border-red-400"
                        : "border-pink-light/50 focus:border-pink-primary"
                    }`}
                  />
                  {errors.date && (
                    <p className="text-red-500 text-sm mt-1">{errors.date}</p>
                  )}
                </div>

                {/* Time */}
                <div>
                  <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                    <FaClock className="text-pink-primary" />
                    Khung giờ <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-xl outline-none transition-all duration-300 ${
                      errors.time
                        ? "border-red-400"
                        : "border-pink-light/50 focus:border-pink-primary"
                    }`}
                  >
                    <option value="">Chọn khung giờ</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                  {errors.time && (
                    <p className="text-red-500 text-sm mt-1">{errors.time}</p>
                  )}
                </div>

                {/* Service */}
                <div className="md:col-span-2">
                  <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                    <FaClipboard className="text-pink-primary" />
                    Dịch vụ <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-xl outline-none transition-all duration-300 ${
                      errors.service
                        ? "border-red-400"
                        : "border-pink-light/50 focus:border-pink-primary"
                    }`}
                  >
                    <option value="">Chọn dịch vụ</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.service}
                    </p>
                  )}
                </div>

                {/* Location */}
                <div className="md:col-span-2">
                  <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                    <FaMapMarkerAlt className="text-pink-primary" />
                    Địa điểm makeup <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-xl outline-none transition-all duration-300 ${
                      errors.location
                        ? "border-red-400"
                        : "border-pink-light/50 focus:border-pink-primary"
                    }`}
                    placeholder="123 Đường ABC, Quận XYZ, Hà Nội"
                  />
                  {errors.location && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.location}
                    </p>
                  )}
                </div>

                {/* Note */}
                <div className="md:col-span-2">
                  <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                    Ghi chú thêm
                  </label>
                  <textarea
                    name="note"
                    value={form.note}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-pink-light/50 rounded-xl outline-none focus:border-pink-primary transition-all duration-300"
                    placeholder="Yêu cầu đặc biệt, phong cách makeup mong muốn, số lượng người..."
                    rows={4}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full py-4 rounded-full text-white text-lg font-bold shadow-pink bg-gradient-to-r from-pink-primary via-pink-accent to-pink-main hover:shadow-glow hover:scale-105 transition-all duration-300 relative overflow-hidden group border-2 border-pink-dark"
                >
                  <span className="relative z-10 drop-shadow-sm">
                    🎀 Xác Nhận Đặt Lịch
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-main via-pink-accent to-pink-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>

              <p className="text-sm text-gray-500 text-center mt-4">
                <span className="text-red-500">*</span> Trường bắt buộc
              </p>
            </form>
          </div>

          {/* Info Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div className="bg-gradient-to-br from-white/70 to-pink-pastel/40 backdrop-blur-sm rounded-2xl shadow-soft p-6 border border-pink-light/50 animate-fade-in">
              <h3 className="text-xl font-bold text-pink-primary mb-4 flex items-center gap-2">
                📞 Thông Tin Liên Hệ
              </h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-pink-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Địa chỉ</p>
                    <p className="text-sm">123 Phan Chu Trinh, Hà Nội</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaClock className="text-pink-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Giờ làm việc</p>
                    <p className="text-sm">8:00 - 20:00 (T2-CN)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-gradient-to-br from-pink-light/50 to-pink-pastel/60 rounded-2xl shadow-soft p-6 border border-pink-light/50">
              <h3 className="text-xl font-bold text-pink-primary mb-4">
                💡 Lưu Ý
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-pink-accent mt-1">•</span>
                  <span>
                    Đặt lịch trước ít nhất 2 ngày để được phục vụ tốt nhất
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-accent mt-1">•</span>
                  <span>Miễn phí thử makeup cho dịch vụ cô dâu</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-accent mt-1">•</span>
                  <span>Có thể thay đổi/hủy lịch trước 24h</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-accent mt-1">•</span>
                  <span>Phục vụ tại nhà/studio theo yêu cầu</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
