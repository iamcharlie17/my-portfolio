import SectionTitle from "./SectionTitle";

const EidMubarak = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const number = form.number.value;
    console.log(name, number);
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
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            id=""
            className="bg-gray-300 text-black py-2 px-4 rounded-sm w-full"
          />
        </div>
        <div>
          <label htmlFor="number">Bkash Number</label>
          <br />
          <input
            type="number"
            placeholder="Enter your Bkash number"
            name="number"
            id=""
            className="bg-gray-300 text-black py-2 px-4 rounded-sm w-full"
          />
        </div>
        <div className="text-center ">
          <button className="py-2 px-8 bg-gray-300 hover:text-white hover:bg-gray-800 transition-transform hover:scale-105 text-black font-semibold rounded-sm">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EidMubarak;
