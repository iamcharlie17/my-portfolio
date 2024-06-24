import { useState } from "react";
// import { ImMenu } from "react-icons/im";
import {
  HashLink,
  NavHashLink,
} from "react-router-hash-link/dist/react-router-hash-link.cjs.production";


const Nav = () => {
  const [fix, setFix] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleFixed = () => {
    if (window.scrollY >= 100) {
      setFix(true);
    } else {
      setFix(false);
      setToggleMenu(false)
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

  // console.log(toggleMenu);

  return (
    <div>
      <div
        className={`py-4 fixed bg-transparent w-full  transition-all duration-500 z-10 ${
          fix && " bg-white text-black"
        }`}
      >
        <div className="container mx-auto">
          <div className="flex justify-between  items-center mx-4 md:mx-16 lg:mx-24">
            <div>
              <HashLink smooth to={"#home"}>
                <h1
                  className={`text-3xl md:text-5xl font-kaushan font-bold ${
                    fix ? "text-black" : "text-gray-200"
                  }`}
                >
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
            <div className={`md:hidden ${fix ? "flex" : "hidden"}`}>
              <button onClick={() => setToggleMenu(!toggleMenu)}>
                {toggleMenu ? "Close" : "Menu"}
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
