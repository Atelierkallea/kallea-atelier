/**
 * Page « À savoir ».
 * Chaque bloc a un titre et une liste de conseils (une ligne = un conseil).
 * Les fonds clairs et sombres s'alternent automatiquement.
 */

export type AdviceBlock = {
  title: string;
  items: string[];
};

export const adviceBlocks: AdviceBlock[] = [
  {
    title: "Avant votre pose de cils",
    items: [
      "Venir les yeux propres et démaquillés.",
      "Ne pas porter de lentilles de contact.",
      "Éviter crèmes grasses et huiles autour des yeux.",
      "Signaler toute allergie ou sensibilité oculaire.",
      "Prévenir en cas d’irritation ou de rougeur des yeux.",
      "Prévoir suffisamment de temps pour la pose.",
    ],
  },
  {
    title: "Après votre pose de cils",
    items: [
      "Éviter l’eau pendant 24 à 48 h, selon la colle utilisée.",
      "Éviter la vapeur et le sauna juste après la pose.",
      "Ne pas frotter ni tirer sur les extensions.",
      "Éviter les produits gras autour des yeux.",
      "Nettoyer régulièrement les cils avec un shampoing adapté.",
      "Les brosser chaque jour avec une brosse propre.",
      "Éviter de dormir le visage dans l’oreiller.",
      "Pas de recourbe-\u2060cils ni de mascara, surtout waterproof.",
      "Ne jamais retirer ses extensions soi-\u2060même.",
      "Faire un remplissage toutes les 2 à 3 semaines.",
      "En cas de douleur ou de gonflement, consulter rapidement.",
    ],
  },
  {
    title: "Contre-indications",
    items: [
      "Aucune pose en cas d’orgelet ou d’infection oculaire.",
      "Aucune pose en cas de conjonctivite ou de blépharite inflammatoire.",
      "Aucune pose sur des paupières irritées, gonflées ou infectées.",
      "Aucune pose en cas d’allergie active des yeux ou des paupières.",
      "Sécheresse ou maladie des yeux : avis médical préalable.",
      "Après une opération des yeux : accord de l’ophtalmologue requis.",
    ],
  },
];
