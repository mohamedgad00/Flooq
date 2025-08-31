"use client";

import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  link: string;
}

export default function ServiceCard({ icon, title, description, link }: ServiceCardProps) {
  return (
    <div className="rounded-3xl p-8 bg-[#FDFDFD] transition-all duration-300 ease-in-out hover:scale-[1.02]" data-aos="fade-up">
      <div className="size-16 rounded-3xl bg-[#FFF5F1] flex justify-center items-center mb-5 transition-colors duration-300 hover:bg-[#FFE8E4]">
        <Image src={icon} alt={title} width={30} height={30} />
      </div>
      <div className="mb-5">
        <h3 className="text-[#323232] text-xl font-bold">{title}</h3>
      </div>
      <div className="mb-7">
        <p className="text-[#969696] leading-7">{description}</p>
      </div>
      <div className="flex items-center gap-0.5">
        <Link
          href={link}
          className="text-[#F57568] font-bold underline transition-colors duration-300 hover:text-[#d94c3e]"
        >
          اطلب الخدمة
        </Link>
        <Image
          src="/arrow.svg"
          alt="arrow"
          width={24}
          height={24}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </div>
    </div>

  );
}
