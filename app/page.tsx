import { Header } from "@/components/header/header";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Benefits } from "@/components/sections/benefits";
import { PromoBanner } from "@/components/sections/promo-banner";
import { Hours } from "@/components/sections/hours";
import { Location } from "@/components/sections/location";
import { FAQ } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";
import { WhatsAppFAB } from "@/components/sections/whatsapp-fab";
import { MobileNav } from "@/components/ui/mobile-nav";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <Services />
      <Benefits />
      <PromoBanner />
      <Hours />
      <Location />
      <FAQ />
      <Footer />
      <WhatsAppFAB />
      <MobileNav />
    </main>
  );
}
