import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

import {
  HashLink,
  NavHashLink,
} from "react-router-hash-link/dist/react-router-hash-link.cjs.production";

const Nav = () => {
  const [fix, setFix] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const home = document.getElementById("home");
      const about = document.getElementById("about");
      const services = document.getElementById("services");
      const projects = document.getElementById("projects");
      const contact = document.getElementById("contact");

      const scrollPosition = window.scrollY;

      if (
        scrollPosition >= home.offsetTop &&
        scrollPosition < home.offsetTop + home.offsetHeight
      ) {
        setActiveLink("Home");
      } else if (
        scrollPosition >= about.offsetTop &&
        scrollPosition < about.offsetTop + about.offsetHeight
      ) {
        setActiveLink("About");
      } else if (
        scrollPosition >= services.offsetTop &&
        scrollPosition < services.offsetTop + services.offsetHeight
      ) {
        setActiveLink("Services");
      } else if (
        scrollPosition >= projects.offsetTop &&
        scrollPosition < projects.offsetTop + projects.offsetHeight
      ) {
        setActiveLink("Projects");
      } else if (
        scrollPosition >= contact.offsetTop &&
        scrollPosition < contact.offsetTop + contact.offsetHeight
      ) {
        setActiveLink("Contact");
      } else {
        setActiveLink("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(activeLink);

  const handleFixed = () => {
    if (window.scrollY >= 100) {
      setFix(true);
    } else {
      setFix(false);
      setToggleMenu(false);
    }
  };

  window.addEventListener("scroll", handleFixed);

  const links = [
    { to: "#home", label: "Home" },
    { to: "#about", label: "About" },
    { to: "#services", label: "Services" },
    { to: "#projects", label: "Projects" },
    { to: "#contact", label: "Contact" },
  ];

  return (
    <div>
      <div
        className={`py-4 fixed bg-transparent w-full transition-all duration-500 z-10 ${
          fix && " bg-slate-800 text-gray-200"
        }`}
      >
        <div className="container mx-auto">
          <div className="flex justify-between  items-center mx-4 md:mx-16 lg:mx-24">
            <div>
              <HashLink smooth to={"#home"}>
                <h1
                  className={`text-3xl md:text-5xl font-kaushan text-gray-200  font-bold`}
                >
                  Cha<span className="text-yellow-500">r</span>lie
                </h1>
              </HashLink>
            </div>
            <div>
              <ul className={`gap-4 hidden  ${fix ? "md:flex transition-colors duration-500" : "hidden "}`}>
                {links.map((link) => (
                  <li key={link.to}>
                    <NavHashLink
                      smooth
                      to={link.to}
                      className={`${
                        activeLink === link.label ? "font-bold  text-yellow-500 " : "font-medium"
                      } hover:text-yellow-500 `}
                    >
                      {link.label} 
                    </NavHashLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`md:hidden ${fix ? "flex" : "hidden"}`}>
              <button onClick={() => setToggleMenu(!toggleMenu)}>
                {toggleMenu ? <FaXmark size={25} /> : <FaBars size={25} />}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={` md:hidden bg-white z-10 fixed text-black w-full -mt-4 top-20 p-8 ${
          fix ? "flex" : "hidden"
        }  ${
          toggleMenu
            ? "flex flex-col text-center gap-8 translate-x-0 transition ease-out duration-500"
            : "-translate-x-[1000px] transition ease-in duration-500 w-full -mt-4 top-20 p-8 flex flex-col text-center gap-8"
        }`}
      >
        {links.map((link) => (
          <h1 key={link.to}>
            <div onClick={() => setToggleMenu(false)}>
              <NavHashLink smooth to={link.to} className={``}>
                {link.label}
              </NavHashLink>
            </div>
          </h1>
        ))}
      </div>
    </div>
  );
};

export default Nav;
