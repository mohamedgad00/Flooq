import SectionHeader from "./shared/SectionHeader";
import BlogSmallCard from "./shared/BlogSmallCard";
import Image from "next/image";
import Button from "./shared/Button";

export default function Blog() {
  return (
    <div className="bg-gradient-to-r from-[#feffff] pt-36" id='blog'>
      <div className="container mx-auto px-6 md:px-24 text-center">
        <SectionHeader
          subtitle="مقالتنا "
          title="اقرأ مقالاتنا المميزة"
          description={
            <>
              مقالات محدثة بانتظام حول أحدث الاتجاهات في البرمجة
              <br />
              نقدم لك نصائح ورؤى حصرية في هذا المجال.
            </>
          }
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-4">
          {/* Left Column: BlogSmallCards */}
          <div className="flex flex-col gap-4">
            <BlogSmallCard
              image="/blog-1.svg"
              title="هل يستحق الاستثمار في موقع ألكتروني جديد؟"
              date="12 Jan 2025"
            />
            <BlogSmallCard
              image="/blog-2.svg"
              title="أهمية تصميم هوية بصرية متكاملة"
              date="20 Feb 2025"
            />
            <BlogSmallCard
              image="/blog-3.svg"
              title="كيفية اختيار مطور برمجي لعملك؟"
              date="14 Apr 2025"
            />
          </div>

          {/* Middle Column: Big Blog Card */}
          <div className="flex flex-col items-center text-center p-4 rounded-2xl">
            <Image src="/blog-2.svg" alt="blog-1" width={250} height={250} />
            <h3 className="text-[#323232] text-xl font-bold leading-9 mt-4">
              أهمية تصميم هوية بصرية متكاملة
            </h3>
            <p className="text-[#969696] leading-6 text-sm">
              اكتشف كيف يمكن أن يساعدك الموقع فى التصميم.
            </p>
          </div>

          {/* Right Column: Big Blog Card */}
          <div className="flex flex-col items-center text-center p-4 rounded-2xl">
            <Image src="/blog-3.svg" alt="blog-2" width={250} height={250} />
            <h3 className="text-[#323232] text-xl font-bold leading-9 mt-4">
              كيفية اختيار مطور برمجي لعملك؟
            </h3>
            <p className="text-[#969696] leading-6 text-sm">
              اعرف أهمية اختيار مطور برمجي موثوق ومؤهل لعملك.
            </p>
          </div>
        </div>
        <Button variant="primary" size="lg" className="mt-10">
          مشاهدة المزيد
        </Button>
      </div>
    </div>
  )
}


