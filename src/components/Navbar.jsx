import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Experience", to: "/experience" },
  { name: "Projects", to: "/projects" },
  { name: "Skills", to: "/skills" },
  { name: "Awards", to: "/awards" },
  { name: "Contact", to: "/contact" },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#071325]/80 backdrop-blur border-b border-white/5">
      <div className="container flex items-center justify-between py-3">
        <div className="flex items-center gap-4">
          <div className="text-teal-300 font-bold text-lg">Arvind Negi</div>
          <div className="hidden md:block text-sm muted">
            Senior Software Engineer • Java / Springboot / React
          </div>
        </div>
        <nav className="flex gap-2 items-center">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm ${
                  isActive ? "nav-active" : "text-gray-300 hover:text-white"
                }`
              }
              end
            >
              {l.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
