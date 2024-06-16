/* eslint-disable react/no-unescaped-entities */
import SectionTitle from "./SectionTitle";
import {
  IoIosColorFilter,
  IoMdCode,
  IoMdHelpCircle,
  IoMdPricetag,
} from "react-icons/io";

const Services = () => {
  return (
    <div>
      <SectionTitle heading={"What I Do"}></SectionTitle>
      <div id="services" className="md:mx-24 my-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-8 p-4 md:p-8 lg:p-12 bg-gray-900">
          <div className="bg-black hover:-translate-y-2 transition-transform p-4 text-center rounded-lg space-y-1 m-4">
            <div className="flex justify-center transition-transform w-full">
              <div className="h-12 w-12 bg-gray-800 py-4 relative rounded-xl flex justify-center items-center text-4xl">
                <IoIosColorFilter />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-kaushan">Web Design</h1>
            </div>
            <div>
              <p>
                <small className="font-normal">
                  I create visually appealing and user-friendly web designs that
                  capture your brand's essence and engage your audience.
                </small>
              </p>
            </div>
          </div>

          <div className="bg-black hover:-translate-y-2 transition-transform p-4 text-center rounded-lg space-y-1 m-4">
            <div className="flex justify-center transition-transform w-full">
              <div className="h-12 w-12 bg-gray-800 py-4 relative rounded-xl flex justify-center items-center text-4xl">
                <IoMdCode />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-kaushan">Development</h1>
            </div>
            <div>
              <p>
                <small className="font-normal">
                  I build responsive and robust websites using the latest
                  technologies to ensure optimal performance across all devices.
                </small>
              </p>
            </div>
          </div>

          <div className="bg-black hover:-translate-y-2 transition-transform p-4 text-center rounded-lg space-y-1 m-4">
            <div className="flex justify-center transition-transform w-full">
              <div className="h-12 w-12 bg-gray-800 py-4 relative rounded-xl flex justify-center items-center text-4xl">
                <IoMdPricetag />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-kaushan">Brand Identity</h1>
            </div>
            <div>
              <p>
                <small className="font-normal">
                  I craft cohesive brand identities, including logos and color
                  schemes, that reflect your business values and stand out in
                  the market.
                </small>
              </p>
            </div>
          </div>

          <div className="bg-black hover:-translate-y-2 transition-transform p-4 text-center rounded-lg space-y-1 m-4">
            <div className="flex justify-center transition-transform w-full">
              <div className="h-12 w-12 bg-gray-800 py-4 relative rounded-xl flex justify-center items-center text-4xl">
                <IoMdHelpCircle />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-kaushan">24/7 Support</h1>
            </div>
            <div>
              <p>
                <small className="font-normal">
                  I offer round-the-clock support to keep your website running
                  smoothly, providing assistance and troubleshooting whenever
                  needed.
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
