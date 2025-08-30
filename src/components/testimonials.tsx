"use client";

import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import SectionHeader from "./shared/SectionHeader";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    name: "محمد جاد",
    role: "مطور برمجيات",
    review:
      "العمل مع فريق البرمجة كان رائعًا. تمكنوا من تحويل فكرتي إلى موقع تفاعلي متميز",
    image: "/testimonials.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "سامي أحمد",
    role: "طالب في علوم الحاسوب",
    review:
      "تعلمت الكثير من خلال تعاملي معهم، الشرح كان واضح والخدمات ساعدتني أطور مشروعي الجامعى",
    image: "/testimonials.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "خالد مصطفى",
    role: "مصمم واجهات",
    review:
      "تصميماتهم عصرية ومتجاوبة مع جميع الشاشات، ساعدوني في إبراز أفكاري بشكل أنيق وسهل الاستخدام.",
    image: "/testimonials.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "أحمد السيد",
    role: "مسؤول مشاريع",
    review:
      "أكثر ما أعجبني هو سرعة الإنجاز مع الحفاظ على الجودة العالية. كانوا متعاونين في كل مرحلة من المشروع.",
    image: "/testimonials.jpg",
    rating: 5,
  },
  {
    id: 5,
    name: "محمود عادل",
    role: "مصمم جرافيك",
    review:
      "الخدمة ممتازة والتواصل دائمًا واضح وسلس. أنصح أي شخص يبحث عن فريق موثوق للتطوير أو التصميم.",
    image: "/testimonials.jpg",
    rating: 5,
  },
];



export default function Testimonials() {
  return (
    <div className="bg-gradient-to-r from-[#feffff] pt-36" id="projects">
      <div className="container mx-auto px-6 md:px-24">
        <SectionHeader
          subtitle="الشهادات"
          title="ماذا يقول عنا عملاؤنا"
          description={
            <>
              هذه بعض الآراء من العملاء الذين استخدموا خدماتنا
              <br />
              في البرمجة والتصميم
            </>
          }
          align="right"
        />

        {/* Navigation buttons */}
        <div className="flex justify-end ml-[7.5%] gap-5 mb-14">
          <button className="swiper-prev bg-[#F57568] text-white size-[50px] rounded-full flex justify-center items-center cursor-pointer">
            <ChevronRight />
          </button>
          <button className="swiper-next bg-[#F57568] text-white size-[50px] rounded-full flex justify-center items-center cursor-pointer">
            <ChevronLeft />
          </button>
        </div>

        {/* Swiper slider */}
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full h-auto"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="relative bg-[#FDFDFD] rounded-3xl p-8 text-center">
                <div>
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={80}
                    height={80}
                    className="rounded-full border-4 border-white shadow"
                  />
                </div>
                <div className="mt-12 mb-6">
                  <p className="text-[#969696] leading-7">
                    {t.review}
                  </p>
                </div>
                <hr className="my-6 border-gray-200" />
                <div>
                  <h3 className="font-bold text-[#323232] text-lg">{t.name}</h3>
                  <p className="text-[#969696] text-sm mb-3">{t.role}</p>
                  <div className="flex justify-center items-center gap-1 text-[#F57568]">
                    <span className="ml-2 text-sm text-[#F57568]">
                      {t.rating}.0
                    </span>
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
