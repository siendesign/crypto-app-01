import Footer from "../components/Footer";
import Navbar from "../components/Navigation";
import DealCards from "./components/DealCards";
import DealSidebar from "./components/DealSidebar";
import Header from "./components/Header";

const page = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="grid grid-cols-12 p-5 max-w-7xl mx-auto">
        <div className="col-span-3 hidden md:block">
          <DealSidebar />
        </div>
        <DealCards />
      </div>
      <Footer />
    </div>
  );
};

export default page;
