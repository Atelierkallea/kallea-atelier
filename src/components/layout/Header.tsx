"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navigation } from "@/content/site";
import { Monogram } from "@/components/ui/Monogram";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

/**
 * Barre de menu fixe : monogramme à gauche, liens à droite.
 * - Tablette et ordinateur (≥ 768 px) : liens affichés en ligne, comme sur la maquette.
 * - Mobile : bouton « menu » qui ouvre un panneau plein écran.
 * Mesures relevées sur la maquette de 2000 px de large, converties en vw.
 */
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Menu mobile ouvert : la page derrière ne défile plus et n'est plus atteignable au clavier.
  useEffect(() => {
    if (!open) return;

    const main = document.getElementById("contenu");
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    main?.setAttribute("inert", "");
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    // Si l'écran s'élargit (rotation d'une tablette), le menu en ligne reprend le relais.
    const wide = window.matchMedia("(min-width: 768px)");
    const onWide = () => {
      if (wide.matches) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    wide.addEventListener("change", onWide);
    return () => {
      document.body.style.overflow = previousOverflow;
      main?.removeAttribute("inert");
      document.removeEventListener("keydown", onKeyDown);
      wide.removeEventListener("change", onWide);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-[var(--header-h)] bg-ivoire">
      <div className="flex h-full items-center justify-between pr-[max(16px,1.2vw)] pl-[max(16px,1.6vw)]">
        <Link
          href="/"
          aria-label="Kalléa Atelier — accueil"
          className="-m-2 block p-2 opacity-90 transition-opacity duration-300 hover:opacity-100"
          onClick={() => setOpen(false)}
        >
          <Monogram className="h-auto w-[clamp(22px,1.45vw,36px)]" sizes="36px" priority />
        </Link>

        {/* Menu en ligne : tablette et ordinateur */}
        <nav aria-label="Navigation principale" className="hidden md:block">
          <ul className="flex items-center gap-[1.8vw]">
            {navigation.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`inline-block py-3 text-[clamp(15px,1.36vw,30px)] leading-none font-normal tracking-[0.005em] transition-colors duration-300 ${
                      active ? "text-menu-actif" : "text-menu hover:text-menu-actif"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bouton du menu mobile : deux traits fins qui se croisent à l'ouverture */}
        <button
          ref={buttonRef}
          type="button"
          className="relative -mr-2.5 flex h-11 w-11 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span
            aria-hidden="true"
            className={`absolute h-[1.5px] w-6 bg-menu-actif transition-transform duration-300 ease-out ${
              open ? "rotate-45" : "-translate-y-[4px]"
            }`}
          />
          <span
            aria-hidden="true"
            className={`absolute h-[1.5px] w-6 bg-menu-actif transition-transform duration-300 ease-out ${
              open ? "-rotate-45" : "translate-y-[4px]"
            }`}
          />
        </button>
      </div>

      {/* Panneau du menu mobile */}
      <div
        id="menu-mobile"
        ref={panelRef}
        inert={!open}
        // Fermé, le panneau est « inert » : ni cliquable, ni atteignable au clavier, ni lu par les lecteurs d'écran.
        className={`fixed inset-x-0 top-[var(--header-h)] bottom-0 bg-creme transition-opacity duration-300 ease-out md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav
          aria-label="Navigation principale"
          className="flex h-full flex-col items-center justify-center pb-[var(--header-h)]"
        >
          <ul className="flex flex-col items-center gap-3">
            {navigation.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={`block px-6 py-3 text-[22px] leading-none font-normal tracking-[0.02em] transition-colors duration-300 ${
                      active ? "text-menu-actif" : "text-menu hover:text-menu-actif"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
