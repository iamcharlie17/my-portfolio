import About from "../components/About";
import Banner from "../components/Banner";
import Services from "../components/Services";


const Home = () => {
    return (
        <div id="home">
            <Banner/>
            <About/>
            <Services/>
        </div>
    );
};

export default Home;