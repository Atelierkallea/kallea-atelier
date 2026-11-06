/**
 * Mentions légales (obligatoires pour un site professionnel en France).
 *
 * À COMPLÉTER avant la mise en ligne, puis passer `ready` à true :
 * la page /mentions-legales sera alors référencée et un lien apparaîtra en bas de chaque page.
 */

export const legal = {
  ready: false,

  publisher: {
    name: "[Prénom Nom]", // nom de l'entrepreneuse
    status: "Entrepreneur individuel (micro-entreprise)",
    tradeName: "Kalléa Atelier",
    siret: "[numéro SIRET]",
    address: "[adresse de domiciliation de l’entreprise]",
  },

  // Hébergeur du site (Vercel). Adresse à vérifier sur vercel.com au moment de la mise en ligne.
  host: {
    name: "Vercel Inc.",
    address: "440 N Barranca Ave #4133, Covina, CA 91723, États-Unis",
    website: "https://vercel.com",
  },
};
