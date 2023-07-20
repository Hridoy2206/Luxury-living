import Contact from "./Contact";
import Landing from "./Landing";
import Projects from "./Projects";
import Services from "./Services";
import Testimonial from "./Testimonial";

const Home = () => {
    return (
        <div>
            <Landing />
            <Projects />
            <Services />
            <Testimonial />
            <Contact />
        </div>
    );
};

export default Home;