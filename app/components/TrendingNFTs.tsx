import Image from "next/image";
import TrendingNftCard from "./TrendingNftCard";
import { GrFormView } from "react-icons/gr";
import { Button } from "@/components/ui/button";

const TrendingNFTs = () => {
  return (
    <div className="p-5 mt-8">
      <div className="flex justify-between  max-w-7xl mx-auto">
        <h2 className="text-white text-2xl font-extrabold ">
          Trending NFT<span className="text-[#AEFFDE]">s</span>
        </h2>
        <div className="">
          <Button
            variant={"outline"}
            className="space-x-2 text-white border-[#AEFFDE] hover:bg-[#AEFFDE]"
          >
            <GrFormView className="text-lg" />
            <p className="capitalize ">see all</p>
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-12 mt-10 gap-3 sm:flex sm:flex-nowrap sm:overflow-scroll sm:gap-5 md:ml-10">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
          <TrendingNftCard />
        ))}
      </div>
    </div>
  );
};

export default TrendingNFTs;
