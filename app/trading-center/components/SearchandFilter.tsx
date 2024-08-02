"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FiSearch } from "react-icons/fi";
import { LuSettings2 } from "react-icons/lu";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const SearchandFilter = () => {
  const [position, setPosition] = useState("bottom");
  const [isOpen, setIsOpen] = useState(false);
  const [chain, setChain] = useState("All BlockChains");
  return (
    <div className="max-w-7xl  mx-auto mt-5 space-y-3">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="w-full text-white flex justify-between items-center md:hidden"
          >
            <p className="">{chain}</p>
            <IoIosArrowDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-80">
          <DropdownMenuLabel>Blockcains</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={chain} onValueChange={setChain}>
            <DropdownMenuRadioItem value="All BlockChains">
              All BlockChains
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="Bitcoin">
              Bitcoin
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="Etherium">
              Etherium
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="flex items-center ">
        <Button
          variant={"ghost"}
          className="text-[#AEFFDE] text-xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <LuSettings2 />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="text-white font-extrabold hover:bg-transparent"
            >
              {" "}
              <p className="">Order Status: {position}</p>{" "}
              <MdOutlineKeyboardArrowDown className="text-lg" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-slate-900 border-none text-gray-300">
            <DropdownMenuLabel>Order Status</DropdownMenuLabel>
            <DropdownMenuSeparator color="#AEFFDE" />
            <DropdownMenuRadioGroup
              value={position}
              onValueChange={setPosition}
            >
              <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="bottom">
                Bottom
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {isOpen && <div className="">lknlknldknpkn</div>}
    </div>
  );
};

export default SearchandFilter;
