/**
 * Informations générales du site.
 * Tous les textes et réglages modifiables se trouvent dans le dossier `src/content`.
 */

export const site = {
  name: "Kalléa Atelier",
  tagline: "L’art de révéler le regard",
  // À remplacer par le nom de domaine définitif avant la mise en ligne.
  url: "https://www.kallea-atelier.fr",
  locale: "fr_FR",
  city: "Puget-sur-Argens",
  postalCode: "83480",
  description:
    "Kalléa Atelier, l’art de révéler le regard à Puget-sur-Argens : extensions de cils, rehaussement de cils, brow lift et teinture.",

  contact: {
    // Affichage (comme sur la maquette) et lien d'appel
    phone: "07.83.40.87.19",
    phoneHref: "tel:+33783408719",
    email: "atelierkallea.pro@gmail.com",
    instagram: "@kallea.atelier",
    instagramUrl: "https://www.instagram.com/kallea.atelier/",
    // Lieu affiché sur la page contact (pas d'adresse précise)
    location: ["Puget-sur-Argens", "& ses alentours"],
  },
} as const;

/**
 * Prise de rendez-vous (Calendly) — prévue pour une prochaine version.
 * Pour l'activer : coller le lien Calendly dans `url` et passer `enabled` à true.
 * Le composant `BookingButton` s'affichera alors là où il est placé.
 */
export const booking: { enabled: boolean; url: string; label: string } = {
  enabled: false,
  url: "",
  label: "Prendre rendez-vous",
};

export type NavItem = { label: string; href: string };

export const navigation: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "Me connaître", href: "/me-connaitre" },
  { label: "Mes services", href: "/mes-services" },
  { label: "À savoir", href: "/a-savoir" },
  { label: "Me contacter", href: "/me-contacter" },
];
