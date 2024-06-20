import { Typewriter } from "react-simple-typewriter";
import banner from "../assets/images/portfolioBanner.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaArrowDownLong, FaInstagram } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";

const Banner = () => {
  const [hidden, setHidden] = useState(false);

  const handleHidden = () => {
    if (window.scrollY >= 400) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  };

  window.addEventListener("scroll", handleHidden);

  // console.log(hidden)

  return (
    <div>
      <div
        className="hero min-h-screen mb-12 "
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="hero-overlay bg-opacity-0"></div>
        <div className="hero-content flex flex-col text-center text-neutral-content">
          <div className="h-24">
            <h1 className="mb-5 text-3xl md:text-5xl lg:text-7xl font-bold text-white">
              <Typewriter
                loop={true}
                words={[
                  "MERN DEVELOPER",
                  "CODER",
                  "SOFTWARE ENGINEER",
                  "PROGRAMMER",
                ]}
              />
            </h1>
          </div>
          <div className="flex gap-6 text-white">
            <Link
              to={"https://www.facebook.com/profile.php?id=61553430014777"}
              target="_blank"
            >
              <FaFacebookF />
            </Link>
            <Link to={"https://www.instagram.com/"} target="_blank">
              <FaInstagram />
            </Link>
            <Link to={"https://x.com/"} target="_blank">
              <RiTwitterXFill />
            </Link>
            <Link to={"https://linkein.com/"} target="_blank">
              <FaLinkedinIn />
            </Link>
            <Link to={"https://github.com/iamcharlie17"} target="_blank">
              <FaGithub />
            </Link>
          </div>
        </div>
        <div className="text-gray-400 text-2xl absolute bottom-12">
          <div
            className={`flex flex-col items-center transition-transform duration-500 gap-4 ${
              hidden && ""
            }`}
          >
            <h1 className="text-sm ">Scroll</h1>
            <HashLink smooth to={"#about"}>
              <div className="animate-bounce transition-transform">
                <FaArrowDownLong />
              </div>
            </HashLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
