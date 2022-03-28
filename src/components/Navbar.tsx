import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

type LinkProps = { text: string; href: string };

const RenderSection = ({ text, href }: LinkProps) => {
  return (
    <NavItem>
      <NavLink href={href}>{text}</NavLink>
    </NavItem>
  );
};
const LINKS: LinkProps[] = [
  { text: "Služby", href: "#services" },
  { text: "Gelarie", href: "#gallery" },
  { text: "O nás", href: "#aboutUs" },
  { text: "Kontakty", href: "#contacts" },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((prevState) => !prevState);

  return (
    <Navbar
      color="faded"
      expand="md"
      className="position-fixed section-left"
      id="navbar"
    >
      <div className="blur" />
      <NavbarToggler onClick={toggle} className="mr-2" />
      <Collapse
        isOpen={open}
        navbar
        className="d-flex justify-content-center align-items-center"
        style={{ zIndex: 10 }}
      >
        <Nav navbar>{LINKS.map(RenderSection)}</Nav>
      </Collapse>
    </Navbar>
  );
};

export default Navigation;
