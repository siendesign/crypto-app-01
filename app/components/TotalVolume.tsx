import Image from "next/image";

const TotalVolume = () => {
  return (
    <>
      <div className="p-5 mt-8 max-w-7xl mx-auto sm:hidden">
        <div className="flex justify-between items-start">
          <div className="font-black text-md text-white">Total Volume</div>
          <div className="font-black text-md text-[#AEFFDE]">20.78k ETH</div>
          <div className="relative h-52 w-52 border-r-[20px] border-t-[20px] border-[#AEFFDE]">
            <Image src={"/assets/total-volume-img-1.svg"} fill alt="" />
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src={"/assets/WhatsApp Image 2024-02-18 at 10.45.53 1.svg"}
            width={200}
            height={70}
            alt="logo"
          />
        </div>
        <div className="flex justify-between items-end">
          <div className="relative h-52 w-52 border-l-[20px] border-b-[20px] border-[#AEFFDE]">
            <Image src={"/assets/total-volume-img-2.svg"} fill alt="" />
          </div>
          <div className="font-black text-md text-[#AEFFDE]">20.78k ETH</div>
          <div className="font-black text-md text-white">Total Sales</div>
        </div>
      </div>

      {/* destop view */}
      <div className="hidden sm:flex relative p-5 mt-8 max-w-5xl mx-auto h-96">
        <div className="flex justify-between items-start absolute top-0 right-0 gap-2">
          <div className="font-black text-md text-white">Total Volume</div>
          <div className="font-black text-md text-[#AEFFDE]">20.78k ETH</div>
          <div className="relative h-52 w-52 border-r-[20px] border-t-[20px] border-[#AEFFDE]"></div>
        </div>
        {/* content */}
        <div className="flex w-full h-full justify-between items-center px-5">
          <div className="">
            <Image
              src={"/assets/total-volume-img-1.svg"}
              width={380}
              height={200}
              alt="logo"
            />
          </div>
          <div className="">
            <Image
              src={"/assets/WhatsApp Image 2024-02-18 at 10.45.53 1.svg"}
              width={200}
              height={70}
              alt="logo"
            />
          </div>
          <div className="">
            <Image
              src={"/assets/total-volume-img-2.svg"}
              width={380}
              height={70}
              alt="logo"
            />
          </div>
        </div>
        {/* content */}
        <div className="flex justify-between items-end absolute bottom-0 left-0 gap-2">
          <div className="relative h-52 w-52 border-l-[20px] border-b-[20px] border-[#AEFFDE]"></div>
          <div className="font-black text-md text-[#AEFFDE]">20.78k ETH</div>
          <div className="font-black text-md text-white">Total sales</div>
        </div>
      </div>
    </>
  );
};

export default TotalVolume;
