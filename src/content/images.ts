/**
 * Photos et logos du site.
 * Pour remplacer une photo : déposer le nouveau fichier dans `public/images`
 * puis modifier le chemin (`src`), les dimensions et la description (`alt`) ci-dessous.
 *
 * - `alt` : description lue par les lecteurs d'écran et par Google.
 *   Laisser vide ("") pour une photo purement décorative.
 * - `tint` : léger filtre chaud posé sur la photo pour retrouver le rendu des maquettes.
 * - `veil` : voile clair posé sur la photo (couleur et opacité de 0 à 1), comme sur les maquettes.
 * - `position` : cadrage de la photo quand elle est recadrée (horizontal vertical).
 *
 * Les photos d'origine sont conservées dans `design/photos`.
 */

export type SiteImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  tint?: string;
  veil?: { color: string; opacity: number };
  position?: string;
  /** Recadrage vertical utilisé sur les écrans en hauteur (téléphones, tablettes à la verticale) */
  portrait?: { src: string; width: number; height: number };
};

export const images = {
  accueil: {
    src: "/images/accueil-regard.jpg",
    alt: "Gros plan sur un regard aux longs cils et à l’iris ambré",
    width: 2000,
    height: 1125,
    tint: "#ede4da",
    // Recadrage centré sur la pupille : plus net et plus léger sur téléphone
    portrait: { src: "/images/accueil-regard-portrait.jpg", width: 900, height: 1125 },
  },
  // Cadrage de la maquette (photo d'origine : design/photos/portrait-plage-original.webp)
  portrait: {
    src: "/images/portrait-elisa.jpg",
    alt: "Elisa, fondatrice de Kalléa Atelier, en robe de dentelle blanche sur une plage de galets au coucher du soleil",
    width: 1125,
    height: 1672,
  },
  // Photo entière, cadrée sur le visage, avec le voile clair de la maquette
  bandeauMeConnaitre: {
    src: "/images/me-connaitre-bandeau.jpg",
    alt: "",
    width: 1125,
    height: 2000,
    position: "50% 21%",
    veil: { color: "#f8f5f1", opacity: 0.68 },
  },
  bandeauServices: {
    src: "/images/services-regard.jpg",
    alt: "",
    width: 2000,
    height: 1125,
    position: "50% 58%",
  },
  bandeauASavoir: {
    src: "/images/a-savoir-regard.jpg",
    alt: "",
    width: 2000,
    height: 1125,
    position: "50% 69%",
  },
  contact: {
    src: "/images/contact-regards.jpg",
    alt: "Regard aux yeux noisette, cils naturels et sourcils structurés",
    width: 2000,
    height: 1125,
    position: "50% 52%",
  },
} satisfies Record<string, SiteImage>;

/**
 * Logos au format vectoriel (SVG) : nets sur tous les écrans.
 * Ils ont été convertis à partir des fichiers d'origine, conservés dans `design/logos`.
 */
export const logos = {
  monogram: { src: "/logo/kallea-monogramme.svg", width: 562, height: 684 },
  wordmark: { src: "/logo/kallea-atelier.svg", width: 822, height: 247 },
  // « KALLÉA » seul, pour le logo horizontal de la page contact
  name: { src: "/logo/kallea.svg", width: 822, height: 181 },
} as const;
