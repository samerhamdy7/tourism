"use client";
import { useState } from "react";

export default function BookingForm({ destination, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    people: 1,
    date: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "الاسم مطلوب";
    }

    if (!formData.email.trim()) {
      newErrors.email = "البريد الإلكتروني مطلوب";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "البريد الإلكتروني غير صالح";
    }

    if (!formData.date) {
      newErrors.date = "تاريخ السفر مطلوب";
    } else if (new Date(formData.date) < new Date()) {
      newErrors.date = "تاريخ السفر يجب أن يكون في المستقبل";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      onSubmit({
        ...formData,
        destination: destination.name,
        totalPrice: formData.people * destination.price,
        bookingDate: new Date().toISOString(),
      });
    }
  };

  const totalPrice = formData.people * destination.price;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-black mb-2 font-semibold">
          الاسم الكامل
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full text-black px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
            errors.name
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-blue-500 focus:border-transparent"
          }`}
          placeholder="أدخل اسمك الكامل"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
        )}
      </div>

      <div>
        <label className="block text-black mb-2 font-semibold">
          البريد الإلكتروني
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full text-black px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
            errors.email
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-blue-500 focus:border-transparent"
          }`}
          placeholder="example@email.com"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-black mb-2 font-semibold">
            عدد الأشخاص
          </label>
          <select
            name="people"
            value={formData.people}
            onChange={handleChange}
            className="w-full text-black px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          >
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <option key={num} value={num}>
                {num} أشخاص
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-black mb-2 font-semibold">
            تاريخ السفر
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className={`w-full text-black px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
              errors.date
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500 focus:border-transparent"
            }`}
          />
          {errors.date && (
            <p className="text-red-500 text-sm mt-1">{errors.date}</p>
          )}
        </div>
      </div>

      <div className="bg-linear-to-r from-blue-50 to-green-50 p-4 rounded-lg border border-blue-200">
        <div className="flex justify-between items-center mb-2">
          <span className="text-black font-semibold">سعر الفرد:</span>
          <span className="text-blue-600 font-bold">${destination.price}</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-black font-semibold">عدد الأشخاص:</span>
          <span className="text-gray-600">{formData.people}</span>
        </div>
        <div className="border-t border-blue-200 pt-2 mt-2">
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-gray-800">المجموع:</span>
            <span className="text-2xl font-bold text-green-600">
              ${totalPrice}
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-3 space-x-reverse pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-6 py-3 border border-gray-300 text-black rounded-lg hover:bg-gray-50 transition-all duration-300 font-semibold"
        >
          إلغاء
        </button>
        <button
          type="submit"
          className="px-6 py-3 bg-linear-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
        >
          تأكيد الحجز
        </button>
      </div>
    </form>
  );
}
