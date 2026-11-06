import Link from "next/link";
import { site } from "@/content/site";
import { legal } from "@/content/legal";

/** Pied de page discret, présent sur toutes les pages : coordonnées et liens utiles. */
export function Footer() {
  const { contact } = site;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ivoire px-6 py-8 text-center text-[13px] leading-relaxed text-menu-actif lg:py-[max(28px,calc(1.8*var(--u)))] lg:text-[max(13px,calc(0.9*var(--u)))]">
      <p className="font-serif text-[1.15em] text-or-profond">{site.name}</p>
      <p className="mt-1">{contact.location.join(" ")}</p>
      <ul className="mt-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
        <li>
          <a href={contact.phoneHref} className="inline-block py-1.5 transition-colors hover:text-or">
            {contact.phone}
          </a>
        </li>
        <li>
          <a href={`mailto:${contact.email}`} className="inline-block py-1.5 transition-colors hover:text-or">
            {contact.email}
          </a>
        </li>
        <li>
          <a
            href={contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block py-1.5 transition-colors hover:text-or"
          >
            Instagram {contact.instagram}
            <span className="sr-only"> (nouvel onglet)</span>
          </a>
        </li>
      </ul>
      <p className="mt-3">
        © {year} {site.name}
        {legal.ready ? (
          <>
            {" · "}
            <Link href="/mentions-legales" className="transition-colors hover:text-or">
              Mentions légales
            </Link>
          </>
        ) : null}
      </p>
    </footer>
  );
}
