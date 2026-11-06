import type { Metadata } from "next";
import { PageMonogram } from "@/components/ui/PageMonogram";
import { ButtonLink } from "@/components/ui/ButtonLink";

export const metadata: Metadata = {
  title: "Page introuvable",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <>
      <PageMonogram />
      <section className="flex min-h-[55vh] flex-col items-center justify-center px-6 py-16 text-center">
        <h1 className="titre">Page introuvable</h1>
        <p className="texte mt-5 max-w-[30em]">La page que vous cherchez n’existe pas ou a été déplacée.</p>
        <ButtonLink href="/" className="mt-8">
          Retour à l’accueil
        </ButtonLink>
      </section>
    </>
  );
}
