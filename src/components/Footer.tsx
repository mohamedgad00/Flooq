import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import Image from 'next/image'

const socialIcons = [Facebook, Instagram, Twitter, Youtube];

export default function Footer() {
  return (
    <footer className="bg-[#27bbad] pt-14" id='footer'>
      <div className="container mx-auto px-6 md:px-24 text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-60">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <Image src="/logo.png" alt="Logo" width={60} height={60} />
            </div>
            <div>
              <p className="text-white font-bold leading-[30px]">
                نحن نحب مساعدتك <br /> في بناء المستقبل <br /> بذكاء وابتكار
              </p>
            </div>
          </div>

          <div className="">
            <div className='mb-5'>
              <h5 className='text-white font-bold'>حول</h5>
            </div>
            <div>
              <ul>
                <li className='text-[#F4F4F4] text-sm font-bold mb-6'>الخدمات</li>
                <li className='text-[#F4F4F4] text-sm font-bold'>الاعمال</li>
              </ul>
            </div>
          </div>
          <div className="">
            <div className='mb-5'>
              <h5 className='text-white font-bold'>تواصل</h5>
            </div>
            <div>
              <p className='text-[#F4F4F4] text-sm font-bold leading-6'>المملكة العربية السعودية</p>
              <p className='text-[#F4F4F4] text-sm font-bold leading-6'>جوال : 9666666666 +</p>
              <p className='text-[#F4F4F4] text-sm font-bold leading-6'>جوال : 9666666666 +</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-5 mt-10 border-b border-gray-300 pb-6">
          {socialIcons.map((Icon, idx) => (
            <div
              key={idx}
              className="size-8 rounded-full bg-[#5bcbc1] flex justify-center items-center"
            >
              <Icon className="text-white w-6 h-6 cursor-pointer" />
            </div>
          ))}
        </div>

        <div className='py-6'>
          <p className='text-center text-[#F4F4F4] text-sm'>حقوق الطباعة والنشر محفوظة لمؤسسة فلوق</p>
        </div>
      </div>
    </footer>
  )
}


