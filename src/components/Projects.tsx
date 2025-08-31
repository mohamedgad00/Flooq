import Button from "./shared/Button";
import SectionHeader from "./shared/SectionHeader";
import Image from "next/image";

export default function Projects() {
  return (
    <div className="bg-gradient-to-r from-[#feffff] py-36" id='projects'>
      <div className="container mx-auto px-6 md:px-24 text-center">
        <div data-aos="fade-up" data-aos-duration="500">
          <SectionHeader
            subtitle="نتائج اعمالنا"
            title="مشاريعنا الاخيرة"
            description={
              <>
                يمكنك مشاهدة اخر مشاريعنا
                <br />
                بمجرد النقر على احدها
              </>
            }
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {/* Column 1 */}
          <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="50">
            <Image
              src="/projects.jpg"
              alt="projects image"
              width={360}
              height={280}
              className="rounded-3xl w-full h-auto object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="100">
            <Image
              src="/projects.jpg"
              alt="projects image"
              width={360}
              height={280}
              className="rounded-3xl w-full h-auto object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
            />
          </div>
          {/* Column 2 */}
          <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="150">
            <Image
              src="/projects.jpg"
              alt="projects image"
              width={360}
              height={280}
              className="rounded-3xl w-full h-auto object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="200">
            <Image
              src="/projects.jpg"
              alt="projects image"
              width={360}
              height={280}
              className="rounded-3xl w-full h-auto object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
            />
          </div>
          {/* Column 3 */}
          <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="250">
            <Image
              src="/projects.jpg"
              alt="projects image"
              width={360}
              height={280}
              className="rounded-3xl w-full h-auto object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="300">
            <Image
              src="/projects.jpg"
              alt="projects image"
              width={360}
              height={280}
              className="rounded-3xl w-full h-auto object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        <Button variant="primary" size="lg" className="mt-8">
          مشاهدة المزيد
        </Button>
      </div>
    </div>
  );
}