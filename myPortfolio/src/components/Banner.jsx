import banner from "../assets/images/portfolioBanner.jpg"

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${banner})`
     
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-7xl font-bold">Developer</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
