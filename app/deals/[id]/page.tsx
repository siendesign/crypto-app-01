import Navbar from "@/app/components/Navigation";
import Header from "./components/Header";
import DetailContent from "./components/DetailContent";
import Footer from "@/app/components/Footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <DetailContent />
      <Footer/>
    </div>
  );
};

export default page;
