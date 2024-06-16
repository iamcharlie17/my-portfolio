import { useState } from "react";
import { NavHashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";

const Nav = () => {
  const [fix, setFix] = useState(false);

  const handleFixed = () => {
    if (window.scrollY >= 100) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  window.addEventListener("scroll", handleFixed);

  const links = [
    { to: "#home", label: "Home" },
    { to: "#about", label: "About" },
    { to: "#services", label: "Services" },
    { to: "#works", label: "Works" },
    { to: "#contact", label: "Contact" },
  ];

  return (
    <div
      className={`container py-8 fixed bg-transparent w-full mx-auto transition-all duration-500  z-10 ${
        fix && "bg-white text-black py-4"
      }`}
    >
      <div className="flex justify-between items-center mx-24">
        <div>
          <h1 className="text-5xl font-kaushan font-bold">Charlie</h1>
        </div>
        <div>
          <ul className={`gap-4 hidden md:flex ${fix && "text-black"}`}>
            {links.map((link) => (
              <li key={link.to}>
                <NavHashLink smooth to={link.to} className={``}>
                  {link.label}
                </NavHashLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
