import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import NumbersStrip from "@/components/NumbersStrip";
import About from "@/components/About";
import Skills from "@/components/Skills";
import FeaturedProjects from "@/components/FeaturedProjects";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212]">
      <div className="relative">
        <ScrollyCanvas />
        <Overlay />
      </div>
      <NumbersStrip />
      <About />
      <Skills />
      <FeaturedProjects />
      <Certifications />
      <Footer />
    </main>
  );
}
