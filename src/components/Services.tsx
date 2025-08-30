
import SectionHeader from './shared/SectionHeader';
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
    <div className="bg-gradient-to-r from-[#feffff] pt-36" id='services'>
      <div className="container mx-auto px-6 md:px-24">
        <SectionHeader
          subtitle="أفضل الخدمات"
          title="ماذا نقدم لك ؟"
          description={
            <>
              بينما يمكننا تخصيص خطتنا لتناسب احتياجاتك، فإن
              <br />
              معظم العملاء يطلبون الخدمات التالية بشكل منتظم
            </>
          }
        />

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