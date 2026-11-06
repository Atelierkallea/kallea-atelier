import { HeartIcon } from "@/components/ui/HeartIcon";

/**
 * Liste à puces en forme de cœur (page « À savoir »).
 * Les lignes longues restent alignées sur le texte, pas sous le cœur.
 */
export function HeartList({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`texte leading-[1.5] lg:leading-[1.4] ${className}`}>
      {items.map((item) => (
        <li
          key={item}
          className="mb-2.5 grid grid-cols-[1.45em_1fr] last:mb-0 lg:mb-[calc(0.69*var(--u))] lg:grid-cols-[1.21em_1fr]"
        >
          <HeartIcon className="mt-[0.3em] h-[0.82em] w-[0.82em] lg:mt-[0.22em]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
