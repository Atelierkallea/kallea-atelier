import { Monogram } from "@/components/ui/Monogram";

/** Monogramme K centré en haut des pages intérieures (décoratif). */
export function PageMonogram() {
  return (
    <div className="flex justify-center pt-6 md:pt-7 lg:pt-[calc(1.1*var(--u))]">
      <Monogram className="h-auto w-[52px] md:w-[60px] lg:w-[calc(4.8*var(--u))]" priority />
    </div>
  );
}
