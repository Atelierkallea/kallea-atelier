import type { Metadata } from "next";
import { legal } from "@/content/legal";
import { site } from "@/content/site";
import { PageMonogram } from "@/components/ui/PageMonogram";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site Kalléa Atelier.",
  alternates: { canonical: "/mentions-legales" },
  // Non référencée tant que les informations ne sont pas complétées
  robots: legal.ready ? undefined : { index: false, follow: false },
};

export default function MentionsLegalesPage() {
  const { publisher, host } = legal;
  const { contact } = site;

  return (
    <>
      <PageMonogram />
      <article className="mx-auto max-w-[760px] px-6 pt-8 pb-20 md:pt-10 lg:pt-[calc(3.3*var(--u))]">
        <h1 className="titre">Mentions légales</h1>

        <div className="texte mt-8 space-y-8">
          <section>
            <h2 className="entete mb-2 text-or-profond">Éditeur du site</h2>
            <p>
              {publisher.tradeName}, {publisher.name}, {publisher.status}.<br />
              SIRET : {publisher.siret}
              <br />
              Adresse : {publisher.address}
              <br />
              Téléphone : {contact.phone} · Email : {contact.email}
            </p>
            <p className="mt-2">Directrice de la publication : {publisher.name}.</p>
          </section>

          <section>
            <h2 className="entete mb-2 text-or-profond">Hébergement</h2>
            <p>
              {host.name}, {host.address} — {host.website}
            </p>
          </section>

          <section>
            <h2 className="entete mb-2 text-or-profond">Propriété intellectuelle</h2>
            <p>
              Les textes, photographies, logos et éléments graphiques de ce site sont la propriété de{" "}
              {publisher.tradeName}. Toute reproduction, même partielle, est interdite sans autorisation écrite
              préalable.
            </p>
          </section>

          <section>
            <h2 className="entete mb-2 text-or-profond">Données personnelles</h2>
            <p>
              Ce site ne comporte pas de formulaire et n’utilise ni cookie publicitaire ni outil de mesure d’audience.
              Les informations que vous transmettez par téléphone, email ou Instagram servent uniquement à répondre à
              vos demandes et ne sont jamais cédées à des tiers. Vous pouvez demander leur consultation ou leur
              suppression à l’adresse {contact.email}.
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
