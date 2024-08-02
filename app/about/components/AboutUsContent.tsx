"use client";
import Image from "next/image";
import React from "react";

const AboutUsContent = () => {
  return (
    <div className="mt-7 p-5 mx-auto max-w-7xl">
      <p className="text-white  font-thin text-lg text-justify">
        In the spirit of the Japanese concept of "wa" (
        <span className="text-[#AEFFDE]">和</span>), meaning harmony,
        <span className="text-[#AEFFDE]">Hashihiro</span> was born. Just like
        the cherry blossoms that represent the fleeting beauty of the world, the
        Web3 space is a dynamic and ever-changing landscape.
        <br />
        <br />
        Hashihiro was founded with a similar philosophy - to create a safe and
        tranquil space for the trading of digital assets, fostering a community
        built on mutual respect and collaboration.
        <br />
        <br />
        The journey since launch has mirrored the lessons learned during a
        traditional Japanese tea ceremony. Each step has been a chance to refine
        our understanding of the Web3 space, meticulously listening to the needs
        of our users, just like a tea master listens to the subtle sounds of the
        boiling water.
        <br />
        <br />
        Inspired by the unwavering support we've received,{" "}
        <span className="text-[#AEFFDE]">Hashihiro</span> is committed to giving
        back to the Web3 community.
        <br />
        <br />
        We aim to be a sanctuary, a haven built on the foundation of
        "omotenashi" (<span className="text-[#AEFFDE]"> おもてなし</span>) -
        Japanese hospitality, where all digital asset owners can feel welcome
        and secure.
      </p>
      <div className="flex items-center gap-5 justify-between overflow-hidden my-20">
        {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
          
            <Image
              src={"/assets/WhatsApp Image 2024-02-18 at 10.45.53 1.svg"}
              width={120}
              height={70}
              alt="logo"
            />
         
        ))}
      </div>
    </div>
  );
};

export default AboutUsContent;
