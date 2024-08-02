import { Button } from "@/components/ui/button";
import Image from "next/image";

const Header = () => {
  return (
    <div className="p-5 bg-[#AEFFDE] relative overflow-hidden h-44">
      <Image
        src={"/assets/heroPattern.svg"}
        className="object-fit object-top"
        fill
        alt=""
      />
      <div className="max-w-7xl mx-auto flex flex-col gap-5 p-5 justify-center sm:flex-row sm:justify-between">
        <div className="space-y-4">
          <h1 className="text-2xl font-black sm:text-5xl">Deals Details</h1>
          <p className="font-thin text-sm">
            Trade <span className="font-black">#3245</span>
          </p>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default Header;
