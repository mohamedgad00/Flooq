
import ServiceCard from './shared/ServiceCard';

export default function Services() {
  const services = [
    {
      icon: "/web.svg",
      title: "تصميم المواقع",
      description:
        "ليس هناك حدود للإبداع عندما تتعاون مع فريقنا. نقدم تصاميم مواقع مخصصة تلبي احتياجاتك وتطلعاتك.",
      link: "/services/web",
    },
    {
      icon: "/ux.svg",
      title: "تصميم واجهات المستخدم",
      description:
        "تصاميمنا المخصصة للواجهات تضمن لك إضافة الجمالية والسهولة في الاستخدام لموقعك أو تطبيقك.",
      link: "/services/ui",
    },
    {
      icon: "/mobile.svg",
      title: "برمجة تطبيقات",
      description:
        "فريقنا المميز يصمم وينفذ تطبيقات مخصصة تناسب احتياجات عملك. سواء كنت بحاجة إلى حلول برمجية مخصصة أو تطبيقات مدمجة.",
      link: "/services/apps",
    },
    {
      icon: "/ui.svg",
      title: "الشعارات والهويات البصرية",
      description:
        "نقوم بتصميم شعارات وهوية بصرية تعبر عن علامتك التجارية بشكل فريد وجذاب، ما يعزز من تميزك وسط المنافسين.",
      link: "/services/branding",
    },
    {
      icon: "/cut.svg",
      title: "مونتاج الفيديو",
      description:
        "فريقنا المختص بالمونتاج يقوم بتحرير الفيديوهات باحترافية عالية، سواء كنت بحاجة إلى فيديو إعلاني أو توضيحي.",
      link: "/services/video",
    },
    {
      icon: "/support.svg",
      title: "دعم فني وصيانة",
      description:
        "من تطوير البرمجيات إلى إصلاح الأعطال وتحديث الأنظمة، نقدم لك جميع خدمات الدعم الفني والصيانة لضمان عمل الأنظمة بسلاسة.",
      link: "/services/support",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-[#feffff] pt-20">
      <div className="container mx-auto px-6 md:px-24">
        <>
          <div className="mb-1.5">
            <p className="text-[#F57568] font-bold text-center">أفضل الخدمات</p>
          </div>
          <div className="mb-7">
            <h2 className="text-[#323232] text-[40px] font-bold text-center">ماذا نقدم لك ؟</h2>
          </div>
          <div className="mb-16">
            <p className="text-center text-[#969696] leading-7">
              بينما يمكننا تخصيص خطتنا لتناسب احتياجاتك، فإن
              <br />
              معظم العملاء يطلبون الخدمات التالية بشكل منتظم:
            </p>
          </div>
        </>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </div>
  )
}