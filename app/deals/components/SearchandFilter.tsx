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
import { TiTick } from "react-icons/ti";

const SearchandFilter = () => {
  const [position, setPosition] = useState("bottom");
  const [isOpen, setIsOpen] = useState(false);
   const [isOpen2, setIsOpen2] = useState(false);
  const [type, setType] = useState("all");
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
      {isOpen && (
        <div className="">
          {" "}
          <Button
            variant={"ghost"}
            className="w-full flex justify-between text-[#AEFFDE] hover:bg-transparent hover:text-[#AEFFDE]"
            onClick={() => setIsOpen2(!isOpen2)}
          >
            <p className="font-black">Type</p>{" "}
            <MdOutlineKeyboardArrowDown
              className={
                "text-lg " +
                (!isOpen && "transition ease-in-out rotate-180 duration-300")
              }
            />
          </Button>
          <div
            className={
              "w-full overflow-hidden h-auto" +
              (!isOpen2 && "transition ease-in-out h-0 duration-300")
            }
          >
            <div className="space-y-3">
              {["all", "ongoing", "confirmed", "cancelled"].map(
                (item, index) => (
                  <Button
                    key={index}
                    className="w-full flex justify-between items-center capitalize text-[#AEFFDE]"
                    variant={"ghost"}
                    onClick={() => setType(item)}
                  >
                    <p className="">{item}</p>{" "}
                    <div className="">
                      <TiTick className={type == item ? "block" : "hidden"} />
                    </div>
                  </Button>
                ),
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchandFilter;
