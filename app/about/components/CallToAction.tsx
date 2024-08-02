import { Button } from "@/components/ui/button";
import React from "react";

const CallToAction = () => {
  return (
    <div className="bg-[#AEFFDE] py-10">
      <div className="max-w-7xl mx-auto relative  flex flex-col gap-5 items-center space-y-5 p-5">
        <div className="mt-10">
          <h1 className="font-black text-3xl">Interested in our project?</h1>
        </div>
        <div className="">
          <p className="text-center font-thin">
            Do you share our vision for the future of NFTs? We're on the lookout
            for an NFT art expert to join our team and help us bring innovative
            ideas to life.
            <br />
            Let's discuss if this aligns with your goals!
          </p>
        </div>
        <div className="mb-10">
          <Button
            className="capitlize text-[#AEFFDE] font-bold text-lg"
            size={"lg"}
          >
            Email us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
