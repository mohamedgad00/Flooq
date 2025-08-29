// import Image from "next/image";
// import Button from "./shared/Button";
import InfoSection from "./shared/InfoSection";


export default function About() {
  return (
    <>
    <InfoSection 
      id="about"
      title="عن فريقنا"
      subtitle="عنا"
      description="إذا كنت ترغب في تطوير هوية علامتك التجارية أو بناء موقع إلكتروني مميز ولا تعرف من أين تبدأ، نحن هنا لنرشدك. نقدم خدمة نصمم، نبرمج، أنت تطور لتلبي احتياجاتك كاملة. سواء كنت بحاجة إلى تصميم جرافيكي، تطوير موقع، أو تطبيق، فريقنا المتخصص سيقوم بذلك باحترافية. الخدمة متاحة الآن عبر الإنترنت أو بحجز موعد."
      buttonText= "تفاصيل اكثر"
      imageSrc="/about.svg"
      imageAlt="about"
    />
    <InfoSection 
      id="tricks"
      title="كيف ينمو مشروعك"
      subtitle="نصائح وحيل"
      description="أحضر فكرتك وسنساعدك في تحويلها إلى مشروع رقمي متكامل. سواء كنت بحاجة إلى تصميم إبداعي أو تطوير برمجي، فريقنا سيعمل معك على تحقيق رؤيتك خلال وقت قصير. نقوم بتسليم المشاريع بسرعة عالية ، ونتيح لك خيارات التعديل والدعم المستمر."
      buttonText= "تفاصيل اكثر"
      imageSrc="/about-2.svg"
      imageAlt="about"
    />
    </>
  )
}