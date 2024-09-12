import { CEOPresentation } from "@/components/ceo-presentation";
import FAQAccordion from "@/components/faq-accordion";
import { Footer } from "@/components/footer";
import { ForexFeatures } from "@/components/forex-features";
import { Hero } from "@/components/hero";
import { MissionVision } from "@/components/mission-vision";
import { TestimonialsAndScreenshots } from "@/components/testimonials-and-screenshots";
import { TradingSkillsImprovement } from "@/components/trading-skills";
import VideoCta from "@/components/video-cta";

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
