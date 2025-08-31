"use client";

import { ReactNode } from "react";

interface SectionHeaderProps {
  subtitle: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center" | "right";
}

export default function SectionHeader({ subtitle, title, description, align = "center" }: SectionHeaderProps) {
  return (
    <div className={`mb-16 text-${align}`}>
      <div className="mb-1.5" data-aos="fade-up" data-aos-delay="100">
        <p className="text-[#F57568] font-bold">{subtitle}</p>
      </div>
      <div className="mb-7" data-aos="fade-up" data-aos-delay="200">
        <h2 className="text-[#323232] text-[40px] font-bold">{title}</h2>
      </div>
      {description && (
        <div data-aos="fade-up" data-aos-delay="300">
          <p className="text-[#969696] leading-7">
            {description}
          </p>
        </div>
      )}
    </div>
  );
}
