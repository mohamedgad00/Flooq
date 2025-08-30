import Image from "next/image";
import SectionHeader from "./shared/SectionHeader";
import Button from "./shared/Button";

export default function Contact() {
  return (
    <div className="bg-gradient-to-r from-[#feffff] pt-36" id='contact'>
      <div className="container mx-auto px-6 md:px-24 text-center">
        <SectionHeader
          subtitle="ابقَ على تواصل "
          title="اشترك في النشرة الإخبارية"
          description={
            <>
              احصل على إشعارات حول العروض الخاصة، المنتجات الجديدة، وأحدث الأخبار في عالم البرمجة والتصميم. اشترك الآن لتكون أول من يعرف!
            </>
          }
        />
        <div className="w-full md:w-2/3 lg:w-2/5 mx-auto flex justify-between items-center bg-white rounded-[14px] p-2 mb-20">
          <div className="pr-4">
            <Image src={"/envolp.svg"} alt="message" width={40} height={40}></Image>
          </div>
          <input
            type="email"
            placeholder="ادخل بريدك الالكتروني"
            className="w-full border-none outline-none focus:outline-none focus:ring-0 placeholder:text-[#969696] mr-[5px]" />
          <Button variant="primary" size="md">
            اشتراك
          </Button>
        </div>
      </div>
    </div>
  )
}
