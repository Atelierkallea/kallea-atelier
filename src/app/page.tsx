import { Hero } from "@/components/home/Hero";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { ContactCta } from "@/components/ContactCta";
import { StructuredData } from "@/components/StructuredData";

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <Hero />
      <ServicesOverview />
      <ContactCta tone="sombre" />
    </>
  );
}
