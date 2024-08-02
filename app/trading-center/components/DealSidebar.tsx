"use client";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { TiTick } from "react-icons/ti";

const DealSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState("all");
  const [chain, setChain] = useState("All BlockChains");

  return (
    <div className="p-5">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="w-full text-white flex justify-between items-center"
          >
            <p className="">{chain}</p>
            <IoIosArrowDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-72">
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

      {/* <Button
        variant={"ghost"}
        className="w-full flex justify-between text-[#AEFFDE] hover:bg-transparent hover:text-[#AEFFDE]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="font-black">Type</p>{" "}
        <MdOutlineKeyboardArrowDown
          className={
            "text-lg " +
            (!isOpen && "transition ease-in-out rotate-180 duration-300")
          }
        />
      </Button> */}

      {/* <div
        className={
          "w-full overflow-hidden h-auto" +
          (!isOpen && "transition ease-in-out h-0 duration-300")
        }
      >
        <div className="space-y-3">
          {["all", "ongoing", "confirmed", "cancelled"].map((item, index) => (
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
          ))}
        </div>
      </div>
      <Separator className="my-3 text-[#AEFFDE] bg-[#AEFFDE]"></Separator>
      <div className="mt-5">
        <div className="flex gap-1">
          <Input
            className="placeholder-[#AEFFDE] border-[#AEFFDE] text-white"
            placeholder="Search for User"
          />
          <Button className="">
            <FiSearch />
          </Button>
        </div>
      </div> */}
    </div>
  );
};

export default DealSidebar;
