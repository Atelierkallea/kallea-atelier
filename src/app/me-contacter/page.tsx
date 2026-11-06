import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/content/site";
import { images, logos } from "@/content/images";
import { PageMonogram } from "@/components/ui/PageMonogram";
import { PhotoBackground } from "@/components/ui/PhotoBackground";
import { Monogram } from "@/components/ui/Monogram";

export const metadata: Metadata = {
  title: "Me contacter",
  description: "Contacter Kalléa Atelier à Puget-sur-Argens et ses alentours : téléphone, email et Instagram.",
  alternates: { canonical: "/me-contacter" },
};

const { contact } = site;

const links = [
  { label: "Tel", value: contact.phone, href: contact.phoneHref, external: false },
  { label: "Email", value: contact.email, href: `mailto:${contact.email}`, external: false },
  { label: "Insta", value: contact.instagram, href: contact.instagramUrl, external: true },
];

/*
  Ordinateur (maquette) : grande photo des deux yeux, puis trois colonnes
  (logo horizontal, lieu, coordonnées) centrées verticalement.
  Mobile : les trois blocs l'un sous l'autre, centrés.
*/
export default function MeContacterPage() {
  return (
    <>
      <PageMonogram />
      <h1 className="sr-only">Me contacter</h1>

      <div className="relative isolate mt-6 h-[62vw] md:mt-7 md:h-[44vw] lg:mt-[calc(0.7*var(--u))] lg:h-[calc(34.1*var(--u))]">
        <PhotoBackground image={images.contact} position={images.contact.position} sizes="100vw" priority />
      </div>

      <section
        aria-label="Coordonnées"
        className="grid justify-items-center gap-y-9 px-6 pt-10 pb-14 text-center md:pt-12 md:pb-16 lg:grid-cols-[38.9fr_23.45fr_30.05fr] lg:items-center lg:justify-items-start lg:gap-y-0 lg:pt-[calc(3.15*var(--u))] lg:pr-[calc(2*var(--u))] lg:pb-[calc(3.1*var(--u))] lg:pl-[calc(5.6*var(--u))] lg:text-left"
      >
        {/* Logo horizontal : K + KALLÉA */}
        <div className="reveal flex items-center gap-5 lg:gap-[calc(1.95*var(--u))]">
          <Monogram className="h-auto w-[56px] md:w-[64px] lg:w-[calc(6.55*var(--u))]" />
          <Image
            src={logos.name.src}
            width={logos.name.width}
            height={logos.name.height}
            alt={site.name}
            className="h-auto w-[180px] md:w-[210px] lg:w-[calc(20.55*var(--u))]"
          />
        </div>

        {/* Lieu */}
        <p className="petit reveal leading-[1.4] text-or-profond lg:leading-[1.21]">
          {contact.location.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>

        {/* Coordonnées cliquables */}
        <address className="petit reveal leading-[1.29] text-or-profond not-italic">
          <ul className="space-y-1 lg:space-y-0">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="inline-block py-2 underline-offset-4 transition-opacity duration-300 hover:underline hover:opacity-80 lg:py-[3px]"
                >
                  <strong className="font-bold">{link.label}&nbsp;:</strong> {link.value}
                  {link.external ? <span className="sr-only"> (ouvre Instagram dans un nouvel onglet)</span> : null}
                </a>
              </li>
            ))}
          </ul>
        </address>
      </section>
    </>
  );
}
