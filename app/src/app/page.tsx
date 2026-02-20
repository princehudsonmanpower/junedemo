import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Hub from "@/components/sections/Hub";
import Jobs from "@/components/sections/Jobs";
import WhyJuneHire from "@/components/sections/WhyJuneHire";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Hub />
      <Jobs />
      <WhyJuneHire />
      <Testimonials />
      <Footer />
    </main>
  );
}
