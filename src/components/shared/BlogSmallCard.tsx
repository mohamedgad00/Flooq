"use client";

import Image from "next/image";

interface BlogCardProps {
  image: string;
  title: string;
  date: string;
}

export default function BlogCard({ image, title, date }: BlogCardProps) {
  return (
    <div className="flex items-center gap-6 border-b border-gray-200 py-3">
      <div>
        <Image src={image} alt={title} width={80} height={80} />
      </div>
      <div className="flex flex-col">
        <p className="text-[#323232] font-bold leading-7 mb-3">{title}</p>
        <span className="text-[#969696] text-sm self-start" dir="ltr">
          {date}
        </span>
      </div>
    </div>
  );
}
