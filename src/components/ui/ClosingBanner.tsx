import type { SiteImage } from "@/content/images";
import { PhotoBackground } from "@/components/ui/PhotoBackground";
import { Wordmark } from "@/components/ui/Wordmark";

/**
 * Bandeau photo de fin de page, avec le logo « KALLÉA ATELIER » en bas (décoratif).
 * Maquettes : hauteur ≈ 36 % de la largeur, logo de 14,4 % de large à 2 % du bas.
 */
export function ClosingBanner({ image }: { image: SiteImage }) {
  return (
    <div
      aria-hidden="true"
      className="relative isolate flex h-[64vw] items-end justify-center md:h-[46vw] lg:h-[calc(36*var(--u))]"
    >
      <PhotoBackground image={image} position={image.position} />
      <Wordmark
        alt=""
        className="reveal mb-[6vw] h-auto w-[42vw] md:mb-[3.5vw] md:w-[26vw] lg:mb-[calc(2.07*var(--u))] lg:w-[calc(14.4*var(--u))]"
      />
    </div>
  );
}
