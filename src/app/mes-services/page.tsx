import type { Metadata } from "next";
import { serviceCategories } from "@/content/services";
import { images } from "@/content/images";
import { PageMonogram } from "@/components/ui/PageMonogram";
import { ClosingBanner } from "@/components/ui/ClosingBanner";
import { ServiceCategoryBlock } from "@/components/services/ServiceCategoryBlock";
import { toneAt } from "@/components/ui/Section";
import { ContactCta } from "@/components/ContactCta";

export const metadata: Metadata = {
  title: "Mes services",
  description:
    "Extensions de cils (cil à cil, volume mixte, volume russe), rehaussement de cils, brow lift et teinture à Puget-sur-Argens : durées et tarifs.",
  alternates: { canonical: "/mes-services" },
};

export default function MesServicesPage() {
  return (
    <>
      <PageMonogram />

      <div className="px-6 pt-8 md:px-[8vw] md:pt-10 lg:px-[calc(4.69*var(--u))] lg:pt-[calc(3.3*var(--u))]">
        <h1 className="titre reveal lg:pl-[calc(0.12*var(--u))]">Mes services</h1>
      </div>

      {serviceCategories.map((category, index) => (
        <ServiceCategoryBlock key={category.title} category={category} tone={toneAt(index)} first={index === 0} />
      ))}

      <ContactCta tone={toneAt(serviceCategories.length)} title={"Une question, un rendez-vous\u00a0?"} />

      <ClosingBanner image={images.bandeauServices} />
    </>
  );
}
