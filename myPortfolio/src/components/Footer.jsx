import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaRegCopyright,
} from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-800 mt-12 py-4">
      <div className="container mx-auto text-center space-y-3">
        <div>
          <h1 className="font-kaushan text-4xl">Charlie</h1>
        </div>
        <div className="flex justify-center">
          <div className="flex md:text-xl gap-4 text-white">
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
        <div className="flex justify-center">
          <div className="flex items-center font-normal">
            <FaRegCopyright />
            <p>
              <small>2024 Riyad Hosen. All rights reserved.</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
