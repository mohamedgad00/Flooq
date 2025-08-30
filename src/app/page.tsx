import About from "@/components/About";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Projects />
      <Testimonials />
    </>
  );
}
