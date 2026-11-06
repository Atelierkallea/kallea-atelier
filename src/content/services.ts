/**
 * Page « Mes services ».
 *
 * - Pour modifier un tarif ou une durée : changer `price` (en euros) ou `duration` (en minutes).
 * - Pour ajouter une prestation : copier un bloc { name, description, duration, price }.
 * - Pour ajouter une catégorie : copier un bloc { title, services }.
 *   Les fonds clairs et sombres s'alternent automatiquement.
 *
 * Tarifs repris des maquettes, en attente de confirmation.
 */

export type Service = {
  name: string;
  description: string;
  duration: number; // minutes
  price: number; // euros
};

export type ServiceCategory = {
  title: string;
  /** Résumé d'une phrase, affiché sur la page d'accueil */
  summary: string;
  services: Service[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    title: "Extensions de cils",
    summary: "Cil à cil, volume mixte ou volume russe\u00a0: un regard sublimé, du plus naturel au plus intense.",
    services: [
      {
        name: "Le cil à cil",
        description: "Une extension posée sur chaque cil naturel pour un résultat naturel et élégant.",
        duration: 60,
        price: 120,
      },
      {
        name: "Le volume mixte",
        description: "Un mélange de cil à cil et de volume russe pour un regard plus fourni tout en restant naturel.",
        duration: 60,
        price: 135,
      },
      {
        name: "Le volume russe",
        description:
          "Plusieurs extensions très fines posées sur chaque cil naturel pour un effet dense, intense et glamour.",
        duration: 75,
        price: 155,
      },
    ],
  },
  {
    title: "Rehaussement de cils",
    summary: "Le Lash Lift recourbe vos cils naturels pour un regard ouvert, sans extensions.",
    services: [
      {
        name: "Lash Lift",
        description:
          "Sublime vos cils naturels grâce à une jolie courbure, pour un effet plus intense sans extensions.",
        duration: 50,
        price: 125,
      },
    ],
  },
  {
    title: "Brow Lift",
    summary: "Des sourcils disciplinés et structurés, en version naturelle, fluffy ou intense.",
    services: [
      {
        name: "Brow Lift Naturel",
        description:
          "Discipline les sourcils et leur donne une jolie forme tout en conservant un résultat doux et naturel.",
        duration: 60,
        price: 120,
      },
      {
        name: "Brow Lift Fluffy",
        description:
          "Apporte un effet fourni et aérien, avec des sourcils brossés vers le haut pour un résultat tendance.",
        duration: 60,
        price: 135,
      },
      {
        name: "Brow Lift Intense",
        description: "Offre un effet plus structuré et marqué, avec des sourcils relevés pour ouvrir le regard.",
        duration: 75,
        price: 155,
      },
    ],
  },
  {
    title: "Teinture",
    summary: "Des cils et des sourcils intensifiés pour un regard plus profond, sans maquillage.",
    services: [
      {
        name: "Teinture cils",
        description: "Intensifie la couleur de vos cils naturels pour un regard plus profond et sublimé, sans mascara.",
        duration: 50,
        price: 125,
      },
      {
        name: "Teinture sourcils",
        description:
          "Intensifie la couleur des sourcils pour un résultat harmonieux et un regard naturellement structuré.",
        duration: 50,
        price: 125,
      },
      {
        name: "Teinture cils & sourcils",
        description:
          "Un duo idéal pour intensifier le regard, révéler la beauté naturelle des cils et structurer les sourcils tout en douceur.",
        duration: 50,
        price: 125,
      },
    ],
  },
];

/** Prix de départ d'une catégorie (« dès 120 € » sur l'accueil) */
export const startingPrice = (category: ServiceCategory) => Math.min(...category.services.map((s) => s.price));

/** Identifiant d'ancre d'une catégorie (ex. « extensions-de-cils ») */
export const categoryId = (category: ServiceCategory) =>
  category.title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

/** « 120 € » avec une espace insécable */
export const formatPrice = (euros: number) => `${euros} €`;
/** « 60 min » avec une espace insécable */
export const formatDuration = (minutes: number) => `${minutes} min`;
