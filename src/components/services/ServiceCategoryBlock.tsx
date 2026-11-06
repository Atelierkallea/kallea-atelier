import type { ServiceCategory } from "@/content/services";
import { categoryId, formatDuration, formatPrice } from "@/content/services";
import { Section, type Tone } from "@/components/ui/Section";

/*
  Colonnes sur ordinateur, mesurées sur la maquette (en % de la largeur) :
  filets de 4,69 % à 95,21 % ; « Durée » centrée sur 56,35 % ; « Prix » centré sur 82,3 %.
*/
const DESKTOP_COLUMNS = "lg:grid-cols-[41.01fr_21.3fr_2.3fr_25.91fr]";

type Props = {
  category: ServiceCategory;
  tone: Tone;
  /** Première catégorie, placée juste sous le titre « Mes services » : espace du haut réduit. */
  first?: boolean;
};

/**
 * Une catégorie de prestations (ex. « Extensions de cils »).
 * - Ordinateur : tableau à trois colonnes (prestation, durée, prix).
 * - Mobile : une fiche par prestation, prix à côté du nom, durée en dessous.
 */
export function ServiceCategoryBlock({ category, tone, first = false }: Props) {
  const line = tone === "sombre" ? "border-texte-clair/45" : "border-texte/25";
  const top = first ? "pt-8 md:pt-10 lg:pt-[calc(4.32*var(--u))]" : "pt-12 md:pt-14 lg:pt-[calc(4.88*var(--u))]";

  return (
    <Section
      tone={tone}
      aria-labelledby={`categorie-${categoryId(category)}`}
      className={`px-6 pb-12 md:px-[8vw] md:pb-14 lg:px-[calc(4.69*var(--u))] lg:pb-[calc(2.75*var(--u))] ${top}`}
    >
      {/* En-tête : nom de la catégorie (+ « Durée » et « Prix » sur ordinateur) */}
      <div className={`reveal grid border-b pb-4 ${line} ${DESKTOP_COLUMNS} lg:pb-[calc(2.1*var(--u))]`}>
        <h2
          id={`categorie-${categoryId(category)}`}
          className="entete scroll-mt-[calc(var(--header-h)+32px)] lg:pl-[calc(0.69*var(--u))]"
        >
          {category.title}
        </h2>
        <span aria-hidden="true" className="entete hidden text-center lg:col-start-2 lg:block">
          Durée
        </span>
        <span aria-hidden="true" className="entete hidden text-center lg:col-start-4 lg:block">
          Prix
        </span>
      </div>

      <ul>
        {category.services.map((service, index) => (
          <li
            key={service.name}
            className={`reveal grid grid-cols-[1fr_auto] gap-x-4 py-5 ${index > 0 ? `border-t ${line}` : ""} ${DESKTOP_COLUMNS} lg:gap-x-0 lg:pt-[calc(1.85*var(--u))] lg:pb-[calc(1.7*var(--u))]`}
          >
            <h3 className="presta col-start-1 row-start-1 lg:pl-[calc(0.69*var(--u))]">{service.name}</h3>
            <p className="petit col-span-2 col-start-1 row-start-2 mt-1.5 max-w-[34em] lg:col-span-1 lg:mt-[calc(0.1*var(--u))] lg:max-w-[calc(36.5*var(--u))] lg:pl-[calc(0.69*var(--u))] lg:leading-[1.38]">
              {service.description}
            </p>
            <p className="petit col-span-2 col-start-1 row-start-3 mt-2 opacity-80 lg:col-span-1 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mt-0 lg:self-center lg:text-center lg:opacity-100">
              <span className="sr-only">Durée : </span>
              {formatDuration(service.duration)}
            </p>
            <p className="petit col-start-2 row-start-1 self-baseline text-right whitespace-nowrap lg:col-start-4 lg:row-span-2 lg:self-center lg:text-center">
              <span className="sr-only">Prix : </span>
              {formatPrice(service.price)}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
