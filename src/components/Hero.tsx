"use client";

import Button from "@/components/shared/Button";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";
import ServiceRequestModal from "@/components/shared/ServiceRequestModal";

const slides = [
  {
    image: "/slider-1.png",
    text: "من اخر مشاريعنا تطبيق App Gyms الذي وصل لاكثر من مليون مستخدم",
  },
  {
    image: "/slider-2.png",
    text: "الموقع الخاص بنا يضم اكثر من 1000 عميل حول العالم",
  },
  {
    image: "/slider-3.png",
    text: "نقدم افضل الخدمات البرمجية والتقنية",
  },
];

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative bg-gradient-to-r from-[#feffff] pt-[72px]">
      <div className="container mx-auto py-20 px-6 md:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <div className="mb-3">
              <span className="text-[#f57568]" data-aos="fade-up" data-aos-duration="500">مؤسسة فلوق</span>
            </div>

            <div className="mb-6">
              <p className="text-[55px] font-bold text-[#323232]" data-aos="fade-up" data-aos-duration="500" data-aos-delay="50">
                <span className="text-[#27bbad]">نحن</span> نحب مساعدتك
                <br />
                في بناء <span className="text-[#27bbad]">المستقبل</span>
                <br />
                بذكاء وابتكار
              </p>
            </div>

            <div className="mb-10">
              <p className="text-[#646464] leading-8" data-aos="fade-up" data-aos-duration="500" data-aos-delay="100">
                نحن نساعد أفكارك على النمو في عالم البرمجة والتصميم. سواء كنت
                بحاجة إلى
                <br />
                نصيحة بسيطة أو لديك مشروع كبير لتطويره.
              </p>
            </div>

            <div className="mb-12" data-aos="fade-up" data-aos-delay="400">
              <Button variant="primary" size="lg" onClick={() => setOpen(true)}>
                طلب خدمة
              </Button>
              <Link href="#services">
                <Button variant="outline" size="lg" className="mr-5">
                  خدماتنا
                </Button>
              </Link>
            </div>

            <div className="flex gap-4" data-aos="fade-up" data-aos-delay="500">
              <div className="size-12 bg-[#EDFAF8] rounded-full flex items-center justify-center">
                <Image src="/call.svg" alt="hero" width={48} height={48} />
              </div>
              <div>
                <p className="text-[#27BBAD] font-bold text-sm">
                  تواصل معنا الان :
                </p>
                <p dir="ltr" className="text-[#969696] font-bold">
                  +966 55 555 5555
                </p>
              </div>
            </div>
          </div>

          {/* Swiper Section */}
          <div className="hidden md:block" data-aos="fade-left" data-aos-delay="400">
            <Swiper
              modules={[Autoplay, Pagination]}
              pagination={{
                el: ".pagination-custom",
                clickable: true,
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="w-full h-auto"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col items-center">
                    {/* Image */}
                    <div className="relative w-full h-[450px]">
                      <Image
                        src={slide.image}
                        alt={`Slide ${index + 1}`}
                        fill
                        className="object-cover rounded-t-2xl"
                      />
                    </div>

                    {/* Text under image */}
                    <p className="text-center text-[#646464] leading-8 mb-8">
                      {slide.text}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Pagination container */}
            <div className="pagination-custom mt-4 flex justify-center" />
          </div>
        </div>
      </div>

      {/* Service Request Modal */}
      <ServiceRequestModal isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
}
