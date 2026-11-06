import { booking } from "@/content/site";

/**
 * Bouton « Prendre rendez-vous » (Calendly), prêt pour une prochaine version.
 * Il ne s'affiche que lorsque la prise de rendez-vous est activée dans `src/content/site.ts`.
 * Exemple d'utilisation : <BookingButton /> dans une page.
 */
export function BookingButton({ className = "" }: { className?: string }) {
  if (!booking.enabled || !booking.url) return null;

  return (
    <a
      href={booking.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-11 items-center justify-center border border-or px-8 py-3 text-or transition-colors duration-300 hover:bg-or hover:text-creme ${className}`}
    >
      {booking.label}
    </a>
  );
}
