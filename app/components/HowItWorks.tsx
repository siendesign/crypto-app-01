import Image from "next/image";

const HowItWorks = () => {
  return (
    <div className="p-5 mt-8 max-w-7xl mx-auto">
      <h2 className="text-white text-2xl font-extrabold">
        How It Work<span className="text-[#AEFFDE]">s</span>
      </h2>
      <p className="text-white font-thin text-sm">
        Find out how to get started
      </p>

      <div className="flex flex-col gap-6 sm:flex-row sm: items-center">
        <div className="w-full h-80 relative mt-4 sm:order-1 sm:flex-1 sm:h-[30rem]">
          <Image
            src={"/assets/how-it-works-img-1.svg"}
            className="object-fit"
            fill
            alt=""
          />
        </div>

        <div className="flex justify-center sm:flex-1 sm:hidden">
          <Image
            src={"/assets/WhatsApp Image 2024-02-18 at 10.45.53 1.svg"}
            width={100}
            height={70}
            alt="logo"
          />
        </div>
        <div className="justify-center sm:flex-1 hidden sm:flex h-24 w-32 relative">
          <Image
            src={"/assets/WhatsApp Image 2024-02-18 at 10.45.53 1.svg"}
            className="object-fit"
            fill
            alt="logo"
          />
        </div>
        <div className="flex justify-center gap-1 sm:flex-col">
            <div className="bg-[#AEFFDE] h-3 w-3 rounded-full border-[#AEFFDE] border"></div>
            <div className="bg-gray-400 h-3 w-3 rounded-full border-black border"></div>
            <div className="bg-gray-400 h-3 w-3 rounded-full border-black border"></div>
            <div className="bg-gray-400 h-3 w-3 rounded-full border-black border"></div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
