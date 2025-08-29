"use client";

interface SectionHeaderProps {
  subtitle: string;
  title: string;
  description: string;
}

export default function SectionHeader({ subtitle, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-16 text-center">
      <div className="mb-1.5">
        <p className="text-[#F57568] font-bold">{subtitle}</p>
      </div>
      <div className="mb-7">
        <h2 className="text-[#323232] text-[40px] font-bold">{title}</h2>
      </div>
      {description && (
        <div>
          <p className="text-[#969696] leading-7">
            {description}
          </p>
        </div>
      )}
    </div>
  );
}
