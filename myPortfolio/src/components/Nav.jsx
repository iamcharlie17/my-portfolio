import { useState } from "react";
import {
  HashLink,
  NavHashLink,
} from "react-router-hash-link/dist/react-router-hash-link.cjs.production";

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
    <div>
      <div
        className={`py-4 fixed bg-transparent w-full  transition-all duration-500  z-10 ${
          fix && " bg-white text-black"
        }`}
      >
        <div className="container mx-auto">
          <div className="flex justify-between  items-center mx-4 md:mx-16 lg:mx-24">
            <div>
              <HashLink smooth to={'#home'}>
                <h1 className={`text-3xl md:text-5xl font-kaushan font-bold ${fix? 'text-black':'text-gray-200'}`}>
                  Charlie
                </h1>
              </HashLink>
            </div>
            <div>
              <ul className={`gap-4 hidden  ${fix ? "md:flex" : "hidden"}`}>
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
      </div>
    </div>
  );
};

export default Nav;
