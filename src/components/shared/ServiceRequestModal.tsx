"use client";

import { X } from "lucide-react";
import Swal from "sweetalert2";
import Button from "./Button";

interface ServiceRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ServiceRequestModal({ isOpen, onClose }: ServiceRequestModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] p-4">
      <div className="bg-white rounded-2xl w-full max-w-4xl p-4 sm:p-8 relative shadow-lg mx-auto overflow-y-auto md:overflow-visible max-h-[90vh] md:max-h-none mt-0">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-red-500 hover:text-red-700"
        >
          <X size={28} />
        </button>

        {/* Modal Content */}
        <h2 className="text-xl sm:text-2xl font-bold text-center text-teal-600 mb-4 sm:mb-8 mt-2">
          طلب خدمة
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Left Side */}
          <div>
            <label className="block mb-2 text-sm font-medium">اختر الفئة</label>
            <select
              className="w-full border border-teal-400 rounded-md p-2"
              defaultValue=""
            >
              <option value="" disabled>
                -- اختر الفئة --
              </option>
              <option>برمجة مواقع</option>
              <option>برمجة تطبيقات</option>
              <option>تصميم جرافيك</option>
              <option>تسويق رقمي</option>
              <option>ذكاء اصطناعي</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">اختر خدمة</label>
            <select className="w-full border border-teal-400 rounded-md p-2"
              defaultValue=""
            >
              <option value="" disabled>
                -- اختر الخدمة --
              </option>
              <option>تصميم واجهات مستخدم</option>
              <option>تطوير موقع تعريفي</option>
              <option>متجر إلكتروني</option>
              <option>تطبيق موبايل</option>
              <option>حملات إعلانية</option>
              <option>تحليل بيانات</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">طريقة انجاز محددة</label>
            <select className="w-full border border-teal-400 rounded-md p-2"
              defaultValue=""
            >
              <option value="" disabled>
                -- اختر الطريقة --
              </option>
              <option>اشتراك شهري</option>
              <option>بالساعة</option>
              <option>بالإنجاز</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">ماهو حجم عملك</label>
            <select className="w-full border border-teal-400 rounded-md p-2"
              defaultValue=""
            >
              <option value="" disabled>
                -- اختر الحجم --
              </option>
              <option>مشروع فردي</option>
              <option>شركة ناشئة</option>
              <option>شركة متوسطة</option>
              <option>شركة كبيرة</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">اسم العمل</label>
            <input
              type="text"
              placeholder="أدخل اسم مشروعك"
              className="w-full border border-teal-400 rounded-md p-2"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              رابط عمل مشابه <span className="text-gray-400">(اختياري)</span>
            </label>
            <input
              type="url"
              placeholder="https://"
              className="w-full border border-teal-400 rounded-md p-2"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-2 text-sm font-medium">تفاصيل العمل</label>
            <textarea
              className="w-full border border-teal-400 rounded-md p-2"
              rows={3}
            ></textarea>
          </div>

          <div className="md:col-span-2">
            <label className="block mb-2 text-sm font-medium">البريد</label>
            <input
              type="email"
              placeholder="ادخل بريدك الالكتروني للمراجعة"
              className="w-full border border-teal-400 rounded-md p-2"
            />
          </div>

          <div className="md:col-span-2 flex justify-center">
            <Button
              variant="primary"
              size="md"
              type="button"
              onClick={() => {
                onClose(); // Close the modal first
                Swal.fire({
                  title: "نجح الارسال!",
                  text: "تم ارسال طلبك بنجاح",
                  icon: "success",
                  confirmButtonText: "حسناً",
                  confirmButtonColor: "#27bbad"
                });
              }}>
              إرسال
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
