import { HomeHero } from "@/components/sections/HomeHero";
import { WorkShowcase } from "@/components/sections/WorkShowcase";
import { AiTeaser } from "@/components/sections/AiTeaser";
import { EngagementStrip } from "@/components/sections/EngagementStrip";
import { CtaSection } from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <>
      <HomeHero />
      <WorkShowcase />
      <AiTeaser />
      <EngagementStrip />
      <CtaSection />
    </>
  );
}
