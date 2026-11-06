import { site } from "@/content/site";
import { Section, type Tone } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { BookingButton } from "@/components/booking/BookingButton";

type Props = {
  tone?: Tone;
  title?: string;
};

/**
 * Invitation à prendre contact (accueil, page des services).
 * Le bouton « Prendre rendez-vous » (Calendly) apparaîtra ici quand il sera activé.
 */
export function ContactCta({ tone = "sombre", title = "Envie de révéler votre regard\u00a0?" }: Props) {
  return (
    <Section
      tone={tone}
      aria-labelledby={`cta-${tone}`}
      className="px-6 py-16 text-center md:py-20 lg:py-[calc(6*var(--u))]"
    >
      <h2 id={`cta-${tone}`} className={`titre reveal ${tone === "sombre" ? "text-texte-clair" : ""}`}>
        {title}
      </h2>
      <p className="texte reveal mx-auto mt-5 max-w-[34em] lg:mt-[calc(1.6*var(--u))]">
        Pour une question ou un rendez-vous, contactez-moi par téléphone, par email ou sur Instagram.
      </p>
      <div className="reveal mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 lg:mt-[calc(2.6*var(--u))] lg:gap-[calc(1.2*var(--u))]">
        <BookingButton />
        <ButtonLink href="/me-contacter" tone={tone} className="w-full max-w-[260px] sm:w-auto sm:max-w-none">
          Me contacter
        </ButtonLink>
        <ButtonLink href={site.contact.phoneHref} tone={tone} className="w-full max-w-[260px] sm:w-auto sm:max-w-none">
          Appeler
        </ButtonLink>
      </div>
    </Section>
  );
}
