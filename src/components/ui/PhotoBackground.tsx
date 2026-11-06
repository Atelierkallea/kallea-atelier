import Image, { getImageProps } from "next/image";
import type { SiteImage } from "@/content/images";

type Props = {
  image: SiteImage;
  priority?: boolean;
  /** Cadrage de la photo (CSS object-position), ex. "50% 45%". */
  position?: string;
  sizes?: string;
};

/**
 * Photo en fond de section, recadrée pour remplir son conteneur (qui doit être `relative`).
 * Si la photo a une version verticale (`portrait`), celle-ci est utilisée sur les écrans en hauteur.
 */
export function PhotoBackground({ image, priority, position = "50% 50%", sizes = "100vw" }: Props) {
  return (
    <div aria-hidden={image.alt ? undefined : true} className="absolute inset-0 -z-10 overflow-hidden">
      {image.portrait ? (
        <ArtDirectedPhoto image={image} priority={priority} position={position} sizes={sizes} />
      ) : (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={priority}
          sizes={sizes}
          quality={85}
          className="object-cover"
          style={{ objectPosition: position }}
        />
      )}
      {image.tint ? (
        <div className="absolute inset-0 mix-blend-multiply" style={{ backgroundColor: image.tint }} />
      ) : null}
    </div>
  );
}

/** Photo large sur les écrans à l'horizontale, recadrage vertical sur les écrans en hauteur. */
function ArtDirectedPhoto({
  image,
  priority,
  position,
  sizes,
}: Required<Omit<Props, "priority">> & { priority?: boolean }) {
  const common = { alt: image.alt, fill: true, sizes, quality: 85 } as const;
  const {
    props: { srcSet: wide },
  } = getImageProps({ ...common, src: image.src });
  const {
    props: { srcSet: tall, ...rest },
  } = getImageProps({ ...common, src: image.portrait!.src });

  return (
    <picture>
      <source media="(orientation: landscape)" srcSet={wide} sizes={sizes} />
      <source srcSet={tall} sizes={sizes} />
      <img
        {...rest}
        alt={image.alt}
        fetchPriority={priority ? "high" : undefined}
        loading={priority ? "eager" : "lazy"}
        className="object-cover"
        style={{ ...rest.style, objectPosition: position }}
      />
    </picture>
  );
}
