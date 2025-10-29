import Navbar from "@/components/Navbar";
import HeroAlt from "@/components/HeroAlt";
import MarqueeStats from "@/components/MarqueeStats";
import BentoServices from "@/components/BentoServices";
import DiagonalFeatures from "@/components/DiagonalFeatures";
import ProcessTimeline from "@/components/ProcessTimeline";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <main className="pt-20">
        <HeroAlt />
        <MarqueeStats />
        <BentoServices />
        <DiagonalFeatures />
        <ProcessTimeline />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
