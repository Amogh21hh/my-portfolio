import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212]">
      <div className="relative">
        <ScrollyCanvas />
        <Overlay />
      </div>
      <Skills />
      <Certifications />
      <Projects />
      <Footer />
    </main>
  );
}
