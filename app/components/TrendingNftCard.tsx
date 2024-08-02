import Image from "next/image";

const TrendingNftCard = () => {
  return (
    <div className="col-span-6 bg-[#2B2B2B] flex flex-col gap-2 rounded-lg sm:min-w-52">
      <div className="relative w-full h-60  overflow-hidden rounded">
        {" "}
        <Image
          src={"/assets/trending-nft-img-1.svg"}
          className="object-cover"
          fill
          alt=""
        />
      </div>
      <div className="grid grid-cols-12 gap-1 p-2">
        <div className="col-span-4">
          <div className="relative w-full h-16 rounded-md overflow-hidden">
            <Image
              src={"/assets/trending-nft-img-1.svg"}
              className="object-cover"
              fill
              alt=""
            />
          </div>
        </div>
        <div className="col-span-4">
          <div className="relative w-full h-16 rounded-md overflow-hidden">
            <Image
              src={"/assets/trending-nft-img-1.svg"}
              className="object-cover"
              fill
              alt=""
            />
          </div>
        </div>
        <div className="col-span-4">
          <div className="relative w-full h-16 rounded-md overflow-hidden bg-[#AEFFDE] flex justify-center items-center">
            1204+
          </div>
        </div>
        <div className=""></div>
        <div className=""></div>
      </div>
      <div className="px-2 pb-2">
        <h3 className="text-white font-extrabold">Rat skee</h3>
        <div className="flex items-center gap-2">
          <div className="relative h-8 w-8 rounded-full overflow-hidden">
            <Image
              src={"/assets/trending-nft-img-1.svg"}
              className="object-cover"
              fill
              alt=""
            />
          </div>
          <div className="text-white font-light text-sm">Mrfox</div>
        </div>
      </div>
    </div>
  );
};

export default TrendingNftCard;
