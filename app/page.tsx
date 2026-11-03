import { About } from "@/components/sections/about";
import { Career } from "@/components/sections/career";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Insights } from "@/components/sections/insights";
import { SiteNavigation } from "@/components/sections/site-navigation";
import { SelectedWork } from "@/components/sections/selected-work";
import { Services } from "@/components/sections/services";
import { Skills } from "@/components/sections/skills";

export default function Home() {
  return (
    <>
      <SiteNavigation />
      <main>
        <Hero />
        <Insights />
        <Services />
        <About />
        <Career />
        <Skills />
        <SelectedWork />
        <Contact />
      </main>
    </>
  );
}
