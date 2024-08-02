import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import Image from "next/image";

const EmailCTA = () => {
  return (
    <div className="p-7 mt-8 bg-[#2B2B2B]">
      <div className="bg-[#3B3B3B] p-4 sm:p-7 rounded grid grid-cols-12 gap-3 sm:gap-8 max-w-7xl mx-auto">
        <div className="relative col-span-6 overflow-hidden rounded sm:col-span-8 sm:h-48">
          <Image
            src={"/assets/trending-nft-img-1.svg"}
            fill
            className="object-cover"
            alt="logo"
          />
        </div>
        <div className="col-span-6 text-white space-y-3 sm:col-span-4 sm:flex sm:flex-col sm:justify-center">
          <h3 className="text-2xl sm:text-3xl font-black">Join our weekly digest</h3>
          <div className="text-xs font-thin">
            Get exclusive promotions & updates <br className=""/> straight to your inbox.
          </div>
          <div className="flex flex-col justify-center w-full max-w-sm items-center  gap-2 sm:flex-row">
            <Input
              type="email"
              className="bg-white text-black"
              placeholder="Email"
            />
            <Button
              className="w-full text-xs bg-[#AEFFDE] text-black font-bold space-x-2 sm:w-auto"
              type="submit"
            >
              <Mail color="#000000" size={16} />
              <p className="">Subscribe</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailCTA;
