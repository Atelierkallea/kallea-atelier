import Image from "next/image";
import { logos } from "@/content/images";

type Props = {
  className?: string;
  /** Laisser vide quand le logo est décoratif (le nom figure déjà à côté). */
  alt?: string;
  priority?: boolean;
  sizes?: string;
};

/** Monogramme K avec l'étoile. La taille se règle par la largeur (className). */
export function Monogram({ className, alt = "", priority, sizes = "160px" }: Props) {
  return (
    <Image
      src={logos.monogram.src}
      width={logos.monogram.width}
      height={logos.monogram.height}
      alt={alt}
      priority={priority}
      sizes={sizes}
      className={className}
    />
  );
}
