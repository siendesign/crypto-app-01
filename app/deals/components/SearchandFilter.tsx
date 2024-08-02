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

const SearchandFilter = () => {
  const [position, setPosition] = useState("bottom");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="max-w-7xl  mx-auto mt-5 space-y-3">
      <div className="flex gap-1 md:hidden">
        <Input
          className="placeholder-[#AEFFDE] border-[#AEFFDE] text-white"
          placeholder="Search for User"
        />
        <Button className="">
          <FiSearch />
        </Button>
      </div>
      <div className="flex items-center ">
        <Button variant={"ghost"} className="text-[#AEFFDE] text-xl md:hidden" onClick={() => setIsOpen(!isOpen)}>
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
