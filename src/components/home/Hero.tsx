import { images } from "@/content/images";
import { site } from "@/content/site";
import { Monogram } from "@/components/ui/Monogram";
import { Wordmark } from "@/components/ui/Wordmark";
import { PhotoBackground } from "@/components/ui/PhotoBackground";

/**
 * Accueil : photo plein écran, monogramme, logo et phrase d'accroche.
 *
 * Les espaces verticaux reprennent les proportions de la maquette
 * (83 / 156 / 211 / 52 px sur une hauteur de 992 px) grâce à flex-grow.
 *
 * Phrase d'accroche : sur mobile et tablette, bronze un peu plus profond et trait un peu plus épais
 * pour rester lisible en petite taille sur la photo.
 *
 * Tailles :
 * - ordinateur (lg, ≥ 1024 px) : mesures exactes de la maquette, en vw ;
 * - tablette (md) et mobile : éléments agrandis pour rester lisibles,
 *   et limités par la hauteur de l'écran (svh) pour tenir aussi à l'horizontale.
 */
export function Hero() {
  return (
    <section
      aria-label="Accueil"
      className="relative isolate flex min-h-[calc(100svh-var(--header-h))] flex-col items-center px-4 text-center lg:min-h-[max(49.6vw,calc(100svh-var(--header-h)))]"
    >
      {/* 53,5 % : place la pupille au centre de l'écran quand la photo est recadrée */}
      <PhotoBackground image={images.accueil} priority position="53.5% 45%" />

      <div className="grow-[83]" />
      <Monogram
        className="fade-in h-auto w-[min(24vw,13svh)] md:w-[min(12vw,11svh)] lg:w-[8.05vw]"
        sizes="(min-width: 1024px) 9vw, (min-width: 768px) 12vw, 24vw"
        priority
      />

      <div className="grow-[156]" />
      <h1 className="fade-in fade-in-delay-1">
        <Wordmark
          className="h-auto w-[min(78vw,46svh)] md:w-[min(58vw,50svh)] lg:w-[44.45vw]"
          sizes="(min-width: 1024px) 45vw, (min-width: 768px) 58vw, 78vw"
          priority
          alt={site.name}
        />
      </h1>

      <div className="grow-[211]" />
      <p className="fade-in fade-in-delay-2 mr-[-0.26em] text-[clamp(12px,min(4vw,2.2svh),17px)] leading-none font-medium tracking-[0.26em] text-[#7a6040] md:text-[clamp(12px,min(2.4vw,2.2svh),20px)] lg:text-[1.82vw] lg:font-normal lg:text-or">
        {site.tagline}
      </p>
      <div className="grow-[52]" />
    </section>
  );
}
