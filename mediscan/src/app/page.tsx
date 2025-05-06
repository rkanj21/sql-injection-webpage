import MainLayout from "@/components/layout/MainLayout";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import WorkflowSection from "@/components/sections/WorkflowSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";

export default function HomePage() {
  return (
    <MainLayout>
      <main>
        <HeroSection />
        <FeaturesSection />
        <WorkflowSection />
        <TestimonialsSection />
        <FAQSection />
      </main>
    </MainLayout>
  );
}
