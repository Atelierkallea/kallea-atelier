import type { Metadata } from "next";
import Link from "next/link";
import { about } from "@/content/about";
import { images } from "@/content/images";
import { PageMonogram } from "@/components/ui/PageMonogram";
import { FramedPhoto } from "@/components/ui/FramedPhoto";
import { HeartIcon } from "@/components/ui/HeartIcon";
import { ClosingBanner } from "@/components/ui/ClosingBanner";

export const metadata: Metadata = {
  title: "Me connaître",
  description:
    "Passionnée d’esthétique depuis l’adolescence et titulaire d’un Bac Pro Esthétique Cosmétique Parfumerie, Elisa s’est spécialisée dans la beauté du regard.",
  alternates: { canonical: "/me-connaitre" },
};

/*
  Ordinateur (maquette) : texte à gauche, photo encadrée à droite, centrés verticalement.
  Mobile et tablette : titre, photo, puis texte.
*/
export default function MeConnaitrePage() {
  return (
    <>
      <PageMonogram />

      <section
        aria-labelledby="titre-me-connaitre"
        className="grid px-6 pt-8 pb-14 md:mx-auto md:max-w-[680px] md:px-0 md:pt-10 md:pb-16 lg:mx-0 lg:max-w-none lg:grid-cols-[44.2fr_34fr] lg:grid-rows-[1fr_auto_auto_1fr] lg:gap-x-[calc(12.2*var(--u))] lg:pt-[calc(4.33*var(--u))] lg:pr-[calc(3.9*var(--u))] lg:pb-[calc(3.77*var(--u))] lg:pl-[calc(5.8*var(--u))]"
      >
        <h1 id="titre-me-connaitre" className="titre reveal lg:col-start-1 lg:row-start-2">
          {about.title.map((line, i) => (
            <span key={line} className="block">
              {line}
              {i < about.title.length - 1 ? " " : ""}
            </span>
          ))}
        </h1>

        <FramedPhoto
          image={images.portrait}
          priority
          sizes="(min-width: 1024px) 31vw, (min-width: 768px) 440px, 90vw"
          className="reveal mx-auto mt-8 w-full max-w-[420px] md:mt-10 md:max-w-[440px] lg:col-start-2 lg:row-span-4 lg:row-start-1 lg:mt-0 lg:max-w-none lg:self-center"
        />

        <div className="texte justifie reveal mt-8 md:mt-10 lg:col-start-1 lg:row-start-3 lg:mt-[calc(1.94*var(--u))]">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mb-[1.305em]">
              {paragraph}
            </p>
          ))}
          <p>
            {about.signature}
            {" "}
            <HeartIcon className="inline-block h-[0.8em] w-[0.8em] -translate-y-[0.05em] align-baseline" />
          </p>
          <p className="mt-8 text-left lg:mt-[calc(2.2*var(--u))]">
            <Link
              href="/mes-services"
              className="petit inline-block py-2 font-medium tracking-[0.12em] text-or-profond uppercase underline-offset-[6px] transition-colors hover:underline lg:py-0"
            >
              Découvrir mes services&nbsp;→
            </Link>
          </p>
        </div>
      </section>

      <ClosingBanner image={images.bandeauMeConnaitre} />
    </>
  );
}
