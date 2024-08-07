import Footer from "../components/Footer";
import Navbar from "../components/Navigation";
import AboutUsContent from "./components/AboutUsContent";
import CallToAction from "./components/CallToAction";
import Header from "./components/Header";
import Partners from "./components/Partners";
import WhoWeAre from "./components/WhoWeAre";

const page = () => {
  return <div>    <Header/>
    <AboutUsContent/>
    <WhoWeAre/>
    <Partners/>
    <CallToAction />
    <Footer/>
  </div>;
};

export default page;
