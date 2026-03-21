import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import Features from "@/components/landing/Features";
import DisciplinesSection from "@/components/landing/Disciplines";
import RankingLadder from "@/components/landing/RankingLadder";
import Stats from "@/components/landing/Stats";
import Pricing from "@/components/landing/Pricing";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <DisciplinesSection />
        <RankingLadder />
        <Stats />
        <Pricing />
        <Footer />
      </main>
    </>
  );
}
