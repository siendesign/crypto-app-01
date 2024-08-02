import { Button } from "@/components/ui/button";
import { IoMdArrowBack } from "react-icons/io";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const DetailContent = () => {
  return (
    <div className="max-w-7xl mx-auto p-5 text-white border my-4 rounded-lg border-[#AEFFDE] ">
      <div className="space-y-7">
        <div className="">
          <Button
            className="space-x-2 border-[#AEFFDE] text-[#AEFFDE] hover:bg-[#AEFFDE]"
            variant={"outline"}
            asChild
          >
            <Link href={"/deals"}>
              <IoMdArrowBack />
              <p className="">Back</p>
            </Link>
          </Button>
        </div>
        <div className="flex flex-row justify-center gap-5 items-center">
          <div className="flex flex-col gap-2 px-5 items-center">
            <div className="relative h-24 w-24 overflow-hidden rounded-full">
              <Image src={"/assets/eth-logo.svg"} fill alt="" />
            </div>
            <p className="font-bold">0.212 Eth</p>
          </div>
          <div className="">
            <div className="relative h-10 w-10 overflow-hidden rounded-full">
              <Image src={"/assets/deal-symbol.svg"} fill alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-2 px-5 items-center">
            <div className="relative h-24 w-24 overflow-hidden rounded-full">
              <Image src={"/assets/infinix-logo.svg"} fill alt="" />
            </div>
            <p className="font-bold">Infilux #23421</p>
          </div>
        </div>
        <div className="p-5 space-y-5">
          <div className="space-y-4">
            <h3 className="text-[#AEFFDE] font-black">Initiator</h3>
            <div className="flex gap-2 items-center">
              <div className="relative h-20 w-20 overflow-hidden rounded-full">
                <Image src={"/assets/deal-avatar-1.svg"} fill alt="" />
              </div>
              <div className="">
                <h3 className="font-bold text-[#AEFFDE] ">@coolcathunter</h3>
                <p className="text-xs font-thin text-[#AEFFDE]">
                  0x345756ce...5adhdyxeu
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-[#AEFFDE] font-black">Traget</h3>
            <div className="flex gap-2 items-center">
              <div className="relative h-20 w-20 overflow-hidden rounded-full">
                <Image src={"/assets/deal-avatar-2.svg"} fill alt="" />
              </div>
              <div className="">
                <h3 className="font-bold text-[#AEFFDE] ">@coolcathunter</h3>
                <p className="text-xs font-thin text-[#AEFFDE]">
                  0x345756ce...5adhdyxeu
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <div className="flex justify-start items-center gap-3 flex-wrap mt-5">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailContent;
