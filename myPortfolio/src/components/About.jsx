/* eslint-disable react/no-unescaped-entities */
import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";
import profile from "../assets/images/profile.jpeg";
import Skills from "./Skills";

const About = () => {
  return (
    <div id="about">
      <div className="flex py-12 flex-col lg:flex-row md:mx-16 lg:mx-24 mx-4 gap-8 items-center ">
        <div className="flex-1 ">
          <img src={profile} alt="" />
          {/* <h1>Profile Picture</h1> */}
        </div>
        <div className="text-white md:space-y-16 space-y-8 flex-1">
          <div className="md:text-4xl text-2xl font-semibold space-y-2 md:space-y-4 text-gray-400 font-kaushan">
            <h1>I'm Riyad Hosen,</h1>
            <h1>MERN Stack Developer</h1>
            <h1>from Bangladesh</h1>
          </div>
          <div>
            <p className="text-gray-500 font-normal text-sm">
              I have rich experience in website design & development. Also I am
              good at HTML, CSS, JavaScript, Tailwind, React, NEXT.js, MongoDB,
              Express and NodeJS. I love to talk with you about my unique
              approach. Feel to contact me writing an email with your project
              idea.
            </p>
          </div>
          <div>
            <button className="uppercase bg-gray-600 px-4 py-1  transition-transform hover:text-yellow-400 rounded-sm">
              Download resume
            </button>
            <HashLink smooth to="#contact">
              <button className="uppercase bg-yellow-400 text-gray-600 px-4 py-1 transition-transform hover:text-white rounded-sm">
                Contact
              </button>
            </HashLink>
          </div>
        </div>
      </div>

      {/* skills here */}
      <div>
        <Skills />
      </div>
    </div>
  );
};

export default About;
