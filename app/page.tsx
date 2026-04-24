import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { MenuSection } from "@/components/Menu";
import { Story } from "@/components/Story";
import { Visit } from "@/components/Visit";
import { RecipeBook } from "@/components/RecipeBook";
import { Footer } from "@/components/Footer";
import { AgencyPreview } from "@/components/AgencyPreview";

export default function Page() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Story />
      <MenuSection />
      <Visit />
      <RecipeBook />
      <Footer />
      <AgencyPreview />
    </main>
  );
}
