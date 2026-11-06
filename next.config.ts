import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Formats modernes, plus légers (le navigateur choisit le meilleur qu'il sait lire)
    formats: ["image/avif", "image/webp"],
    // Niveaux de qualité autorisés pour les photos (85-90 pour les portraits et grandes photos)
    qualities: [75, 85, 90],
  },
};

export default nextConfig;
