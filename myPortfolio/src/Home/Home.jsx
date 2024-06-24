import About from "../components/About";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import EidMubarak from "../components/EidMubarak";
import Projects from "../components/Projects";
import Services from "../components/Services";


const Home = () => {
    return (
        <div>
            <Banner/>
            {/* <EidMubarak/> */}
            <About/>
            <Services/>
            <Projects/>
            <Contact/>
        </div>
    );
};

export default Home;