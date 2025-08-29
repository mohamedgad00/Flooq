"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "@/components/shared/Button";

const navItems = [
  { name: "الرئيسية", href: "/", isActive: true },
  { name: "خدماتنا", href: "#services" },
  { name: "عنا", href: "#about" },
  { name: "اخر المشاريع", href: "/projects" },
  { name: "مدونة", href: "/blog" },
  { name: "تواصل معنا", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-gray-200 py-4 bg-gradient-to-r from-[#feffff]">
      <div className="container mx-auto px-6 md:px-24">
        <div className="flex justify-between items-center">
          <Link href="/" className="shrink-0 order-1">
            <Image src="/logo.png" alt="Logo" width={40} height={40} priority />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-12 order-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`font-bold transition-colors ${
                    item.isActive
                      ? "text-[#f57568]"
                      : "text-[#646464] hover:text-[#f57568]"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <Button 
            variant="outline" 
            size="md"
            className="hidden lg:block order-3 cursor-pointer"
          >
            طلب خدمة
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden order-3 p-2 cursor-pointer hover:text-[#f57568] active:scale-95 transition-all"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
          lg:hidden 
          fixed left-0 right-0 
          top-[72px] 
          z-50
          bg-white/95
          shadow-lg 
          backdrop-blur-sm
          transition-all duration-300 ease-in-out
          ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-full pointer-events-none"
          }
        `}
        >
          <ul className="flex flex-col py-4 px-6">
            {navItems.map((item) => (
              <li key={item.name} className="py-2">
                <Link
                  href={item.href}
                  className={`block font-bold transition-all text-right hover:scale-105 ${
                    item.isActive
                      ? "text-[#f57568]"
                      : "text-[#646464] hover:text-[#f57568]"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="py-4">
              <Button 
                variant="outline" 
                size="md"
                fullWidth = {true}
                className="hover:bg-[#f57568] transition-all cursor-pointer"
              >
                طلب خدمة
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
