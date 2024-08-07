"use client";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const tabs = [
  { name: "Home", href: "/" },
  { name: "Deals", href: "/deals" },
  { name: "Trading Center", href: "/trading-center" },
  { name: "About Us", href: "/about" },
];

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  console.log(pathname);
  return (
    <>
      <div className="flex justify-between items-center pt-10  p-5 max-w-7xl mx-auto sm:hidden">
        <div className="">
          <Link href={"/"}>
            <Image
              src={"/assets/WhatsApp Image 2024-02-18 at 10.45.53 1.svg"}
              width={120}
              height={70}
              alt="logo"
            />
          </Link>
        </div>
        <div className="flex gap-5">
          <Button variant={"ghost"} onClick={() => setIsOpen(!isOpen)}>
            <Menu color="#ffffff" />
          </Button>
        </div>
      </div>
      {isOpen && (
        <div className="p-5 sm:hidden">
          <ul className="flex flex-col gap-3 text-gray-300">
            {tabs.map((tab, index) => (
              <Link
                href={tab.href}
                className="w-full p-2 hover:bg-slate-500 rounded"
              >
                <li className={ pathname == tab.href ? "text-[#AEFFDE] w-full" : "text-gray-400 w-full" }>{tab.name}</li>
              </Link>
            ))}
            {/* <Link href={"/"} className="w-full p-2 hover:bg-slate-500 rounded">
              <li className="text-[#AEFFDE] w-full">Home</li>
            </Link>
            <Link
              href={"/deals"}
              className={"w-full p-2 hover:bg-slate-500 rounded"}
            >
              <li
                className={
                  pathname == "/deals"
                    ? "text-[#AEFFDE] w-full"
                    : "text-gray-400 w-full"
                }
              >
                Deals
              </li>
            </Link>
            <Link
              href={"/trading-center"}
              className="w-full p-2 hover:bg-slate-500 rounded"
            >
              <li className="text-gray-400  w-full">Trading Center</li>
            </Link>
            <Link
              href={"/about"}
              className="w-full p-2 hover:bg-slate-500 rounded"
            >
              <li className="text-gray-400  w-full">About Us</li>
            </Link> */}
          </ul>
          <div className="mt-3">
            <Button
              className="bg-[#AEFFDE] text-gray-900 font-bold text-sm hover:text-[#AEFFDE] w-full"
              size={"lg"}
            >
              Connect wallet
            </Button>
          </div>
        </div>
      )}

      {/* desktop */}
      <div className="hidden  sm:flex justify-between items-center pt-10  p-5 max-w-7xl mx-auto">
        <div className="">
          <Link href={"/"}>
            <Image
              src={"/assets/WhatsApp Image 2024-02-18 at 10.45.53 1.svg"}
              width={120}
              height={70}
              alt="logo"
            />
          </Link>
        </div>

        <div className="">
          <ul className="flex gap-3 text-gray-300">
            {tabs.map((tab, index) => (
              <li
                className={
                  pathname == tab.href ? "text-[#AEFFDE]" : "text-gray-400"
                }
              >
              <Link href={tab.href}>{tab.name}</Link>
              </li>
            ))}
            {/* <li className="text-[#AEFFDE]">
              <Link href={"/"}>Home</Link>
            </li>
            <li
              className={
                pathname == "/deals" ? "text-[#AEFFDE]" : "text-gray-400"
              }
            >
              <Link href={"/deals"}>Deals</Link>
            </li>
            <li className="">
              <Link href={"/trading-center"}>Trading Center</Link>
            </li>
            <li className="">
              <Link href={"/about"}>About Us</Link>
            </li> */}
          </ul>
        </div>

        <div className="">
          <Button
            className="bg-[#AEFFDE] text-gray-900 font-bold text-sm hover:text-[#AEFFDE]"
            size={"lg"}
          >
            Connect wallet
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
