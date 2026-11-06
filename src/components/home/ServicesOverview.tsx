import Link from "next/link";
import { categoryId, formatPrice, serviceCategories, startingPrice } from "@/content/services";
import { ButtonLink } from "@/components/ui/ButtonLink";

/**
 * Accueil : aperçu des quatre familles de prestations, avec leur prix de départ.
 * Les textes viennent de `src/content/services.ts` (champ `summary`).
 */
export function ServicesOverview() {
  return (
    <section
      aria-labelledby="apercu-services"
      className="px-6 py-16 md:px-[8vw] md:py-20 lg:px-[calc(4.69*var(--u))] lg:pt-[calc(6.5*var(--u))] lg:pb-[calc(6*var(--u))]"
    >
      <h2 id="apercu-services" className="titre reveal">
        Mes services
      </h2>

      <ul className="mt-8 grid md:grid-cols-2 md:gap-x-[6vw] lg:mt-[calc(3.2*var(--u))] lg:grid-cols-4 lg:gap-x-[calc(3*var(--u))]">
        {serviceCategories.map((category) => (
          <li
            key={category.title}
            className="reveal flex flex-col border-t border-texte/25 py-6 lg:py-[calc(1.9*var(--u))]"
          >
            <h3 className="entete">
              <Link
                href={`/mes-services#categorie-${categoryId(category)}`}
                className="transition-colors duration-300 hover:text-or"
              >
                {category.title}
              </Link>
            </h3>
            <p className="petit mt-2.5 lg:mt-[calc(0.9*var(--u))] lg:max-w-[22em]">{category.summary}</p>
            <p className="petit mt-3 text-or-profond lg:mt-auto lg:pt-[calc(1*var(--u))]">
              dès {formatPrice(startingPrice(category))}
            </p>
          </li>
        ))}
      </ul>

      <div className="reveal mt-8 text-center lg:mt-[calc(3*var(--u))]">
        <ButtonLink href="/mes-services">Voir les tarifs</ButtonLink>
      </div>
    </section>
  );
}
