import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import FloatingNav from "@/components/layout/FloatingNav";
import ScrollToTop from "@/components/layout/ScrollToTop";
import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import WorkGrid from "@/components/home/WorkGrid";
import Showcase from "@/components/home/Showcase";
import AiConnected from "@/components/home/AiConnected";
import AiSection from "@/components/home/AiSection";
import WidgetsCard from "@/components/home/WidgetsCard";
import Reviews from "@/components/home/Reviews";
import Stats from "@/components/home/Stats";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Showcase />
        <WorkGrid />
        <AiConnected />
        <AiSection />
        <WidgetsCard />
        <Reviews />
        <Stats />
        <Contact />
      </main>
      <Footer />
      <FloatingNav />
      <ScrollToTop />
    </>
  );
}
