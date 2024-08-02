import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-[#AEFFDE] p-4  overflow-hidden relative flex items-center justify-center -z-30 max-w-7xl mx-auto sm:rounded-md sm:justify-start">
      <Image
        src={"/assets/heroPattern.svg"}
        className="object-cover "
        fill
        alt=""
      />

      <div className="absolute -right-10 top-0 -z-10 pt-10 md:hidden">
        <div className=" relative h-48 w-48">
          <Image src={"/assets/hero-mobile-img-1.svg"} fill alt="" />
        </div>
      </div>
      <div className="absolute -left-10 bottom-0 -z-10 pb-10 md:hidden">
        <div className=" relative h-48 w-48">
          <Image src={"/assets/hero-mobile-img-2.svg"} fill alt="" />
        </div>
      </div>

      {/* desktop imgs */}
      <div className="hidden absolute right-40 -top-20 md:block -z-10">
        <Image
          src={"/assets/total-volume-img-2.svg"}
          width={250}
          height={200}
          alt="logo"
        />
      </div>
      <div className="absolute right-80 top-4 hidden md:block -z-10">
        <Image
          src={"/assets/total-volume-img-1.svg"}
          width={250}
          height={200}
          alt="logo"
        />
      </div>
      <div className="absolute right-20 hidden md:block -z-10">
        <Image
          src={"/assets/total-volume-img-1.svg"}
          width={250}
          height={200}
          alt="logo"
        />
      </div>
      <div className="absolute right-64 top-52 hidden md:block -z-10">
        <Image
          src={"/assets/total-volume-img-2.svg"}
          width={200}
          height={200}
          alt="logo"
        />
      </div>
      {/* desktop imgs */}

      <div className="h-96  pt-5 space-y-4 sm:flex sm:flex-col sm:justify-start sm:px-10">
        <div className="font-black text-4xl text-center mt-4 w-[26rem] sm:text-left sm:text-5xl">
          Discover, Collect, <br /> and sell NFTs
        </div>
        <div className="text-sm font-light text-center w-80 mx-auto leading-6 sm:text-left sm:mx-0 sm:w-96">
          Enhance Security and Social Connectivity with Digital Asset Swaps.
          NFTs provide a revolutionary method to establish ownership and value
          for digital assets like tweets, memes, and virtual real estate.
        </div>
        <div className="w-full flex justify-center sm:justify-start">
          <Button
            className="capitalize text-center font-bold text-[#AEFFDE] mt-4"
            size={"lg"}
          >
            Start trade
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
