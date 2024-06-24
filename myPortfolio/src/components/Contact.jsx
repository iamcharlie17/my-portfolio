import toast from "react-hot-toast";
import SectionTitle from "./SectionTitle";
import axios from "axios";
import { useState } from "react";
import SimpleMap from "./SimpleMap";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const message = form.message.value;

    try {
      setLoading(true);
      const { data } = await axios.post(
        "https://portfoilo-server.vercel.app/contacts",
        { name, phone, email, subject, message }
      );
      if (data.insertedId) {
        toast.success("Thanks for your message.");
        form.reset();
        setLoading(false);
      }
    } catch (error) {
      toast.error(`${error.message}`);
      form.reset();
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="relative mt-12 md:mt-24">
      <div>
        <div>
          <SectionTitle heading={"Contact"} />
        </div>
        <div className="flex flex-col lg:flex-row items-center py-12 gap-8 mx-4 md:mx-12 lg:mx-24">
          <div className="space-y-4 text-center lg:text-start lg:w-1/3 ">
            <div className="space-y-2 ">
              <h1 className="text-yellow-500">Phone:</h1>
              <p className="text-gray-200">+8801827885889</p>
            </div>
            <div className="space-y-2">
              <h1 className="text-yellow-500">Address:</h1>
              <p className="text-gray-200">Dhaka, Bangladesh</p>
            </div>
            <div className="space-y-2">
              <h1 className="text-yellow-500">Email:</h1>
              <p className="text-gray-200">riyadhosen40@gmail.com</p>
            </div>
          </div>
          <div className="w-full">
            <form onSubmit={handleSubmit} className="grid gap-4 lg:gap-8">
              <div>
                <input
                  type="text"
                  className="w-full py-3 text-gray-200 bg-gray-800 px-4 rounded-full"
                  name="name"
                  placeholder="Name"
                  id="name"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="w-full py-3 text-gray-200 bg-gray-800 px-4 rounded-full"
                  name="phone"
                  placeholder="Phone"
                  id="phone"
                />
              </div>
              <div>
                <input
                  type="email"
                  className="w-full py-3 text-gray-200 bg-gray-800 px-4 rounded-full"
                  name="email"
                  placeholder="Email"
                  id="email"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="w-full py-3 text-gray-200 bg-gray-800 px-4 rounded-full"
                  name="subject"
                  placeholder="Subject"
                  id="subject"
                />
              </div>
              <div className="md:col-span-2">
                <textarea
                  className="w-full py-3 text-gray-200 bg-gray-800 px-4 rounded-3xl"
                  name="message"
                  placeholder="Message"
                  id="message"
                  rows="8"
                ></textarea>
              </div>
              <div className="text-center md:col-span-2">
                <button
                  disabled={loading}
                  className="py-2 px-12 bg-gray-400 hover:bg-yellow-400 transition-colors duration-500 text-black font-semibold rounded-full"
                >
                  {loading ? "Wait..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="mx-4 md:mx-12 lg:mx-24">
        <SimpleMap />
      </div>
    </div>
  );
};

export default Contact;
