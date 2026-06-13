import { SatinBackground } from "@/components/SatinBackground";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Collections } from "@/components/sections/Collections";
import { WhyLtag } from "@/components/sections/WhyLtag";
import { Process } from "@/components/sections/Process";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <SatinBackground />
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Collections />
        <WhyLtag />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
