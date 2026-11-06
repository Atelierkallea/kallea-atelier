import type { Metadata } from "next";
import { adviceBlocks } from "@/content/a-savoir";
import { images } from "@/content/images";
import { PageMonogram } from "@/components/ui/PageMonogram";
import { ClosingBanner } from "@/components/ui/ClosingBanner";
import { HeartList } from "@/components/ui/HeartList";
import { Section, toneAt } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "À savoir",
  description:
    "Conseils avant et après une pose d’extensions de cils, et contre-indications : tout ce qu’il faut savoir pour préparer et entretenir sa pose.",
  alternates: { canonical: "/a-savoir" },
};

export default function ASavoirPage() {
  return (
    <>
      <PageMonogram />
      <h1 className="sr-only">À savoir</h1>

      {adviceBlocks.map((block, index) => {
        const tone = toneAt(index);
        const top =
          index === 0 ? "pt-8 md:pt-10 lg:pt-[calc(4.2*var(--u))]" : "pt-12 md:pt-14 lg:pt-[calc(3.55*var(--u))]";
        return (
          <Section
            key={block.title}
            tone={tone}
            aria-labelledby={`bloc-${index}`}
            className={`px-6 pb-12 md:px-[8vw] md:pb-14 lg:px-[calc(5.4*var(--u))] lg:pb-[calc(3.2*var(--u))] ${top}`}
          >
            <h2 id={`bloc-${index}`} className={`titre reveal ${tone === "sombre" ? "text-texte-clair" : ""}`}>
              {block.title}
            </h2>
            <HeartList items={block.items} className="reveal mt-6 md:mt-7 lg:mt-[calc(2.1*var(--u))]" />
          </Section>
        );
      })}

      <ClosingBanner image={images.bandeauASavoir} />
    </>
  );
}
