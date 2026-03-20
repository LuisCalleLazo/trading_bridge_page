import { useState, useCallback } from "react";

export type PageId = "home" | "about" | "services" | "contact";

export interface NavItem {
  id: PageId;
  label: string;
  labelEs: string;
}

export const navItems: NavItem[] = [
  { id: "home", label: "Home", labelEs: "Inicio" },
  { id: "about", label: "About", labelEs: "Nosotros" },
  { id: "services", label: "Services", labelEs: "Servicios" },
  { id: "contact", label: "Contact", labelEs: "Contacto" },
];

const pageOrder: PageId[] = ["home", "about", "services", "contact"];

export function useNavigation() {
  const [currentPage, setCurrentPage] = useState<PageId>("home");
  const [direction, setDirection] = useState<1 | -1>(1);

  const navigateTo = useCallback(
    (page: PageId) => {
      const currentIndex = pageOrder.indexOf(currentPage);
      const nextIndex = pageOrder.indexOf(page);
      setDirection(nextIndex >= currentIndex ? 1 : -1);
      setCurrentPage(page);
    },
    [currentPage]
  );

  return { currentPage, direction, navigateTo };
}