import Image from "next/image";
import Button from "./shared/Button";

export default function About() {
  return (
    <div className="bg-gradient-to-r from-[#feffff] pt-20" id="about">
      <div className="container mx-auto px-6 md:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content (left only on lg+, below image otherwise) */}
          <div className="order-2 lg:order-2 pt-14">
            <div className="mb-1">
              <span className="text-[#F57568] font-bold">عنا</span>
            </div>
            <div className="mb-7">
              <h2 className="text-[#323232] text-[40px] font-bold">عن فريقنا</h2>
            </div>
            <div className="mb-12">
              <p className="text-[#969696] leading-7">
                إذا كنت ترغب في تطوير هوية علامتك التجارية أو بناء موقع إلكتروني مميز ولا تعرف من أين تبدأ، نحن هنا لنرشدك. نقدم خدمة نصمم، نبرمج، أنت تطور لتلبي احتياجاتك كاملة. سواء كنت بحاجة إلى تصميم جرافيكي، تطوير موقع، أو تطبيق، فريقنا المتخصص سيقوم بذلك باحترافية. الخدمة متاحة الآن عبر الإنترنت أو بحجز موعد.
              </p>
            </div>
            <div>
              <Button variant="primary" size="lg">تفاصيل اكثر</Button>
            </div>
          </div>
          {/* Image (first until lg, then on the right) */}
          <div className="order-1 lg:order-1 size-[300px] sm:size-[400px] md:size-[460px] lg:size-[566px] rounded-full border border-[#27BBAD] overflow-hidden mx-auto">
            <Image src="/about.svg" alt="about" width={500} height={500} />
          </div>
        </div>
      </div>
    </div>

  )
}