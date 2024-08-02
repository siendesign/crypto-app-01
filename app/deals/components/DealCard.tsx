import Image from "next/image";
import Link from "next/link";

const DealCard = () => {
  return (
    <>
      <Link href={"/deals/1234"}>
        <div className="border border-[#AEFFDE] p-4 rounded-lg space-y-4 sm:hidden">
          <div className="flex justify-start items-center gap-3 flex-wrap">
            <div className="">
              <Image
                src={"/assets/eth-logo.svg"}
                width={25}
                height={25}
                alt=""
              />
            </div>
            <div className="border border-[#AEFFDE] p-1 rounded">
              <p className="text-[#AEFFDE] text-sm font-extrabold">
                Direct Deal
              </p>
            </div>
            <div className="">
              <p className="text-[#AEFFDE] opacity-50 text-sm font-bold">
                Ongoing Deal
              </p>
            </div>
            <div className="">
              <p className="text-xs text-gray-400">Wed June 12 2024 04:34</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex gap-2 items-center">
              <div className="relative h-12 w-12 overflow-hidden rounded-full">
                <Image src={"/assets/deal-avatar-1.svg"} fill alt="" />
              </div>
              <div className="">
                <h3 className="font-bold text-[#AEFFDE] ">@semklifer23.eth</h3>
                <p className="text-xs font-thin text-[#AEFFDE]">
                  0x345756ce...5adhdyxeu
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="relative h-12 w-12 overflow-hidden rounded-full">
                <Image src={"/assets/deal-avatar-2.svg"} fill alt="" />
              </div>
              <div className="">
                <h3 className="font-bold text-[#AEFFDE] ">@coolcathunter</h3>
                <p className="text-xs font-thin text-[#AEFFDE]">
                  0x345756ce...5adhdyxeu
                </p>
              </div>
            </div>
            <div className="flex justify-center gap-2 items-center">
              <div className="relative h-16 w-16 overflow-hidden rounded-full">
                <Image src={"/assets/eth-logo.svg"} fill alt="" />
              </div>

              <div className="relative h-8 w-8 overflow-hidden rounded-full">
                <Image src={"/assets/deal-symbol.svg"} fill alt="" />
              </div>
              <div className="relative h-16 w-16 overflow-hidden rounded-full">
                <Image src={"/assets/infinix-logo.svg"} fill alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* destop view */}
        <div className="hidden border border-[#AEFFDE] p-4 rounded-lg space-y-4 sm:flex justify-between items-stretch">
          <div className="flex items-center justify-center">
            <div className="relative h-16 w-16 overflow-hidden rounded-full">
              <Image src={"/assets/eth-logo.svg"} fill alt="" />
            </div>
          </div>
          <div className="">
            <div className="flex justify-center items-center gap-3 flex-wrap">
              <div className="">
                <Image
                  src={"/assets/eth-logo.svg"}
                  width={25}
                  height={25}
                  alt=""
                />
              </div>
              <div className="border border-[#AEFFDE] p-1 rounded">
                <p className="text-[#AEFFDE] text-sm font-extrabold">
                  Direct Deal
                </p>
              </div>
              <div className="">
                <p className="text-[#AEFFDE] opacity-50 text-sm font-bold">
                  Ongoing Deal
                </p>
              </div>
              <div className="">
                <p className="text-xs text-gray-400">Wed June 12 2024 04:34</p>
              </div>
            </div>
            <div className="flex items-center gap-3 my-3">
              <div className="flex gap-2 items-center">
                <div className="relative h-16 w-16 overflow-hidden rounded-full">
                  <Image src={"/assets/deal-avatar-1.svg"} fill alt="" />
                </div>
                <div className="">
                  <h2 className="text-sm mb-3 font-extrabold text-[#AEFFDE]">
                    Initiator
                  </h2>
                  <h3 className="font-bold text-[#AEFFDE] ">
                    @semklifer23.eth
                  </h3>
                  <p className="text-xs font-thin text-[#AEFFDE]">
                    0x345756ce...5adhdyxeu
                  </p>
                </div>
              </div>
              <div className="relative h-8 w-8 overflow-hidden rounded-full">
                <Image src={"/assets/deal-symbol.svg"} fill alt="" />
              </div>
              <div className="flex gap-2 items-center">
                <div className="relative h-16 w-16 overflow-hidden rounded-full">
                  <Image src={"/assets/deal-avatar-2.svg"} fill alt="" />
                </div>
                <div className="">
                  <h2 className="text-sm mb-3 font-extrabold text-[#AEFFDE]">
                    Target
                  </h2>
                  <h3 className="font-bold text-[#AEFFDE] ">@coolcathunter</h3>
                  <p className="text-xs font-thin text-[#AEFFDE]">
                    0x345756ce...5adhdyxeu
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-16 w-16 overflow-hidden rounded-full">
              <Image src={"/assets/infinix-logo.svg"} fill alt="" />
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default DealCard;
