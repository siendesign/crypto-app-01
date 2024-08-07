import React from "react";
import Navbar from "../components/Navigation";
import Header from "./components/Header";
import Footer from "../components/Footer";
import DealSidebar from "./components/DealSidebar";
import DealCards from "./components/DealCards";

const page = () => {
  return (
    <div>
      <Header/>
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
