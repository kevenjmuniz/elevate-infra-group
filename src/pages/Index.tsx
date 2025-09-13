import Navigation from "@/components/ui/navigation";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/ui/whatsapp-button";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
