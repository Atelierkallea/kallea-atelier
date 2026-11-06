import Image from "next/image";
import { logos } from "@/content/images";

type Props = {
  className?: string;
  alt?: string;
  priority?: boolean;
  sizes?: string;
};

/** Logo « KALLÉA ATELIER » empilé. La taille se règle par la largeur (className). */
export function Wordmark({ className, alt = "Kalléa Atelier", priority, sizes = "50vw" }: Props) {
  return (
    <Image
      src={logos.wordmark.src}
      width={logos.wordmark.width}
      height={logos.wordmark.height}
      alt={alt}
      priority={priority}
      sizes={sizes}
      className={className}
    />
  );
}
