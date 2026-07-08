import { mockCertificates } from "@/utils/data/certificates-data";
import AboutSection from "./components/homepage/about";
import Certificate from "./components/homepage/certificate";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

export default async function Home() {
  const certificates = mockCertificates;

  return (
    <div suppressHydrationWarning >
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Certificate certificates={certificates} />
      <ContactSection />
    </div>
  )
};
