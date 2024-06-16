import About from "../components/About";
import Banner from "../components/Banner";
import EidMubarak from "../components/EidMubarak";
import Services from "../components/Services";


const Home = () => {
    return (
        <div id="home">
            <Banner/>
            <EidMubarak/>
            <About/>
            <Services/>
        </div>
    );
};

export default Home;