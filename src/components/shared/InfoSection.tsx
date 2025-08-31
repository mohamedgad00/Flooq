"use client";

import Image from "next/image";
import Button from "@/components/shared/Button";

interface SectionProps {
  id?: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText?: string;
  imageSrc: string;
  imageAlt: string;
}

export default function InfoSection({
  id,
  title,
  subtitle,
  description,
  buttonText,
  imageSrc,
  imageAlt,
}: SectionProps) {
  return (
    <div className="bg-gradient-to-r from-[#feffff] pt-36" id={id}>
      <div className="container mx-auto px-6 md:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Content (left only on lg+, below image otherwise) */}
          <div className="order-2 lg:order-2 pt-12" data-aos="fade-up" data-aos-delay="200">
            <div className="mb-1">
              <span className="text-[#F57568] font-bold" data-aos="fade-up" data-aos-delay="400">{subtitle}</span>
            </div>
            <div className="mb-7">
              <h2 className="text-[#323232] text-[40px] font-bold" data-aos="fade-up" data-aos-delay="500">{title}</h2>
            </div>
            <div className="mb-12">
              <p className="text-[#969696] leading-7" data-aos="fade-up" data-aos-delay="600">{description}</p>
            </div>
            {buttonText && (
              <div>
                <Button variant="primary" size="lg">
                  {buttonText}
                </Button>
              </div>
            )}
          </div>

          {/* Image (first until lg, then on the right) */}
          <div className="order-1 lg:order-1 size-[300px] sm:size-[400px] md:size-[460px] lg:size-[566px] rounded-full border border-[#27BBAD] overflow-hidden mx-auto" 
            data-aos="zoom-in" 
            data-aos-delay="200">
            <Image src={imageSrc} alt={imageAlt} width={500} height={500} />
          </div>
        </div>
      </div>
    </div>
  );
}
