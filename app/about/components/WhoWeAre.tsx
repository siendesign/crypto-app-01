import Image from "next/image";

const WhoWeAre = () => {
  return (
    <div className="mt-7 p-5 mx-auto max-w-7xl text-white">
      <div className="">
        <h4 className="tracking-[1em]">Who We Are</h4>
        <h2 className="font-black text-5xl text-[#AEFFDE]">Who We Are</h2>
      </div>
      <div className="">
        <p className="font-thin text-lg text-justify leading-8 mt-4">
          We are Hiro, Sakura, and Takeshi, three young Japanese NFT fanatics on
          a mission in the Web3 world! United by our love for digital art's
          potential, a crazy idea bloomed: a platform built on harmony (wa).
          <br />
          Imagine a peaceful oasis, like a tea ceremony. That's Hashihiro, where
          respect and collaboration thrive, everyone's heard, and the community
          thrives. Inspired by your support, we're building a haven based on
          "omotenashi" (hospitality). Here, all digital asset owners feel
          welcome and secure to explore the NFT universe.
          <br />
          We're not just founders, we're your fellow travelers in this
          ever-changing Web3 adventure. Join us!
        </p>
      </div>
      <div className="flex gap-3 flex-col items-center sm:flex-row sm:justify-center">
        {[1, 2, 3].map((item, index) => (
          <div className=" relative flex justify-center w-80  p-5 mt-8 ">
            <div className="flex justify-between items-start absolute top-0 right-0 gap-2">
              <div className="relative h-20 w-20 border-r-[10px] border-t-[10px] border-[#AEFFDE]"></div>
            </div>
            {/* content */}
            <div className="flex w-48 h-48 justify-center items-center p-5">
              <div className="relative h-full w-full rounded-full overflow-hidden">
                <Image src={"/assets/founder-1.svg"} fill alt="" />
              </div>
            </div>
            {/* content */}
            <div className="flex justify-between items-end absolute bottom-0 left-0 gap-2">
              <div className="relative h-20 w-20 border-l-[10px] border-b-[10px] border-[#AEFFDE]"></div>
              <div className="font-black text-md text-[#AEFFDE]">
                
              </div>
              {/* <div className="font-black text-md text-white">Total sales</div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhoWeAre;
