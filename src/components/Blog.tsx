import SectionHeader from "./shared/SectionHeader";


export default function Blog() {
  return (
    <div className="bg-gradient-to-r from-[#feffff] pt-36" id='blog'>
      <div className="container mx-auto px-6">
        <SectionHeader
          subtitle="مقالتنا "
          title="اقرأ مقالاتنا المميزة"
          description={
            <>
              مقالات محدثة بانتظام حول أحدث الاتجاهات في البرمجة
              <br />
              والتصميم. نقدم لك نصائح ورؤى حصرية في هذا المجال.
            </>
          }
        />
      </div>
    </div>
  )
}


