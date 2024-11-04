import { Button } from "@/components/ui/button";
import {
  SheetContent,
  SheetTrigger,
  Sheet,
  SheetClose,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Logo from "@/assets/logo.png";
import "@/styles/modules/header.css";

const Header = () => {
  return (
    <header className="header header--lg-padding">
      <nav className="header__nav">
        <a href="/" className="header__logo">
          <img src={Logo.src} alt="QuakeNet" className="header__logo-image" />
          <h1 className="header__logo-text">QueakeNet</h1>
        </a>
        <ul className="header__nav-list header__nav-list--lg-gap header__nav-list--visible">
          <li>
            <a
              href="/#soluciones"
              className="header__nav-item"
            >
              Soluciones
            </a>
          </li>
          <li>
            <a
              href="/sobre-nosotros"
              className="header__nav-item"
            >
              Sobre Nosotros
            </a>
          </li>
          <li>
            <a
              href="#contacto-empresa"
              className="header__nav-item"
            >
              Contacto Empresa
            </a>
          </li>
        </ul>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="header__menu-button">
              <MenuIcon className="header__menu-icon" />
              <span className="header__sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="header__sheet">
            <ul>
              <li>
                <SheetClose asChild>
                  <a
                    href="/#soluciones"
                    className="header__sheet-item"
                  >
                    Soluciones
                  </a>
                </SheetClose>
              </li>
              <li>
                <SheetClose asChild>
                  <a
                    href="/sobre-nosotros"
                    className="header__sheet-item"
                  >
                    Sobre Nosotros
                  </a>
                </SheetClose>
              </li>
              <li>
                <SheetClose asChild>
                  <a
                    href="#contacto-empresa"
                    className="header__sheet-item"
                  >
                    Contacto Empresa
                  </a>
                </SheetClose>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Header;
