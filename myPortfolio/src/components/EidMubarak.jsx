import toast from "react-hot-toast";
import SectionTitle from "./SectionTitle";
import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";

const EidMubarak = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const number = form.number.value;

    try {
      setLoading(true);
      const { data } = await axios.post(
        "https://portfoilo-server.vercel.app/contacts",
        {
          name,
          number,
        }
      );
      setLoading(false);
      if (data.insertedId) {
        Swal.fire({
          icon: "success",
          title: `${name}`,
          text: `MARA KHA`,
        });
      }
    } catch (error) {
      toast.error(`${error.message}`);
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="my-4">
        <SectionTitle heading={"EID MUBARAK"} />
      </div>
      <form
        onSubmit={handleSubmit}
        className="md:w-1/2 mx-auto space-y-4 my-4 p-8"
      >
        <div>
          <label className="text-gray-200" htmlFor="name">Name</label>
          <br />
          <input
            required
            type="text"
            placeholder="Enter your name"
            name="name"
            id=""
            className="bg-gray-300 text-black py-2 px-4 rounded-sm w-full"
          />
        </div>
        <div>
          <label className="text-gray-200" htmlFor="number">Bkash Number</label>
          <br />
          <input
            required
            type="number"
            placeholder="Enter your Bkash number"
            name="number"
            id=""
            className="bg-gray-300 text-black py-2 px-4 rounded-sm w-full"
          />
        </div>
        <div className="text-center ">
          <button className="py-2 px-8 bg-gray-300 hover:text-white hover:bg-gray-800 transition-transform hover:scale-105 text-black font-semibold rounded-sm">
            {loading ? "Wait..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EidMubarak;
