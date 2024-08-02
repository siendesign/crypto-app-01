import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { RiDiscordLine } from "react-icons/ri";
import { PiYoutubeLogo } from "react-icons/pi";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <div className="bg-[#3B3B3B] text-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-5 p-5 sm:flex-row ">
        <div className="space-y-4 sm:flex-1">
          <div className="">
            <Image
              src={"/assets/WhatsApp Image 2024-02-18 at 10.45.53 1.svg"}
              width={100}
              height={70}
              alt="logo"
            />
          </div>
          <p className="font-thin text-sm">
            NFT marketplace with love from <br /> Tokyo, Japan.
          </p>
          <p className="font-thin text-sm">Join our community</p>
          <div className="flex items-center text-gray-300 gap-3">
            <div className="text-2xl">
              <RiDiscordLine />
            </div>
            <div className="text-2xl">
              <PiYoutubeLogo />
            </div>
            <div className="text-xl">
              <FaXTwitter />
            </div>
            <div className="texl-xl">
              <FaInstagram />
            </div>
          </div>
        </div>
        <div className="sm:flex-1">
          <h3 className="text-xl font-bold">Explore</h3>
          <ul className="font-thin text-sm space-y-4 mt-3">
            <li className="">Marketplace</li>
            <li className="">Rankings</li>
            <li className="">Connect a wallet</li>
          </ul>
        </div>
        <div className="space-y-3 sm:flex-1">
          <h3 className="text-xl font-black">Join our weekly digest</h3>
          <p className="font-thin text-sm">
            Get exclusive promotions & <br />
            updates straight to your inbox.
          </p>

          <div className="flex justify-center w-full max-w-sm items-center  gap-2 bg-white rounded">
            <Input
              type="email"
              className="bg-white text-black"
              placeholder="Email"
              
            />
            <Button
              className=" text-xs bg-[#AEFFDE] text-black font-bold space-x-2"
              type="submit"
            >
              <Mail color="#000000" size={16} />
              <p className="">Subscribe</p>
            </Button>
          </div>
        </div>
      </div>
      <div className="p-4 max-w-7xl mx-auto">
        <hr />
        <div className="my-3 text-sm text-gray-400">Ⓒ Hashihiro </div>
      </div>
    </div>
  );
};

export default Footer;
