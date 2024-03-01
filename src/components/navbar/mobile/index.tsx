import { useState } from "react";
import { Header } from "./header";
import { NavItems } from "./nav-items";

export function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    window.document.body.classList.toggle("open-mb-menu");
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <Header setIsMenuOpen={handleToggleMenu} />
      {isMenuOpen && <NavItems setIsMenuOpen={handleToggleMenu} />}
    </>
  );
}
