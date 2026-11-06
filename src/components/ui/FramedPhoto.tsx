import Image from "next/image";
import type { SiteImage } from "@/content/images";

/**
 * Photo dans un cadre au filet fin, avec une marge intérieure (page « Me connaître »).
 * Maquette : filet de 0,1 % de la largeur, marge intérieure de 1,86 %.
 */
export function FramedPhoto({
  image,
  className = "",
  sizes,
  priority = false,
}: {
  image: SiteImage;
  className?: string;
  sizes: string;
  priority?: boolean;
}) {
  return (
    <figure
      className={`border border-cadre p-3 md:p-4 lg:border-[length:max(1px,calc(0.1*var(--u)))] lg:p-[calc(1.86*var(--u))] ${className}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes={sizes}
        priority={priority}
        quality={90}
        className="h-auto w-full"
      />
    </figure>
  );
}
