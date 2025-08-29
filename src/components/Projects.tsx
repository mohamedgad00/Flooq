import Button from "./shared/Button";
import SectionHeader from "./shared/SectionHeader";
import Image from "next/image";

export default function Projects() {
  return (
    <div className="bg-gradient-to-r from-[#feffff] pt-36" id='projects'>
      <div className="container mx-auto px-6 md:px-24 text-center">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {/* Column 1 */}
          <Image
            src="/projects.jpg"
            alt="projects image"
            width={360}
            height={280}
            className="rounded-3xl w-full h-auto object-cover cursor-pointer"
          />

          <Image
            src="/projects.jpg"
            alt="projects image"
            width={360}
            height={280}
            className="rounded-3xl w-full h-auto object-cover cursor-pointer"
          />
          {/* Column 2 */}
          <Image
            src="/projects.jpg"
            alt="projects image"
            width={360}
            height={280}
            className="rounded-3xl w-full h-auto object-cover cursor-pointer"
          />
          <Image
            src="/projects.jpg"
            alt="projects image"
            width={360}
            height={280}
            className="rounded-3xl w-full h-auto object-cover cursor-pointer"
          />
          {/* Column 3 */}
          <Image
            src="/projects.jpg"
            alt="projects image"
            width={360}
            height={280}
            className="rounded-3xl w-full h-auto object-cover cursor-pointer"
          />
          <Image
            src="/projects.jpg"
            alt="projects image"
            width={360}
            height={280}
            className="rounded-3xl w-full h-auto object-cover cursor-pointer"
          />
        </div>

        <Button variant="primary" size="lg">
          مشاهدة المزيد
        </Button>
      </div>
    </div>
  );
}