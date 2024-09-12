import { Hero } from "@/components/hero";
import { CEOPresentation } from "@/components/ceo-presentation";
import { ForexFeatures } from "@/components/forex-features";
import { MissionVision } from "@/components/mission-vision";
import TestimonialsAndScreenshots from "@/components/testimonials-and-screenshots";
import { TradingSkillsImprovement } from "@/components/trading-skills";
import VideoCta from "@/components/video-cta";
import FAQAccordion from "@/components/faq-accordion";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <ForexFeatures />
      <MissionVision />
      <CEOPresentation />
      <TradingSkillsImprovement />
      <TestimonialsAndScreenshots />
      <FAQAccordion />
      <VideoCta />
      <Footer />
    </>
  );
}
