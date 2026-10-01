import { CircleCheck, Gauge, Headset, Rocket, Timer, Wifi } from "lucide-react";
import offer from "../assets/o2.jpg";
import o3 from "../assets/o3.jpg";
import o4 from "../assets/o1.jpg";

const OfferPage = () => {
  return (
    <div className="bg-[#F8F9FC] p-4 min-h-screen md:p-6">
      <div className="mb-6">
        <h1 className="text-[#24389C] text-4xl font-bold tracking-wide mb-2">
          Exclusive Offers
        </h1>
        <p className="text-[#454652] text-base">
          Upgrade your experience with our latest technology and entertainment
          packages.
        </p>
      </div>

      <div className="bg-[#3F51B5] rounded-xl p-6 flex flex-col-reverse lg:flex-row justify-between mb-6">
        {/* left */}

        <div className="w-100">
          <div className="bg-[#FFFFFF1A] rounded-full flex flex-row gap-2 items-center py-1 px-3 w-fit mb-6 mt-4">
            <Gauge color="white" />
            <span className="uppercase text-white text-xs font-semibold">
              Next Gen Connectivity
            </span>
          </div>

          <div className="mb-8">
            <h1 className="text-white text-5xl mb-4">6G Future of Internet</h1>
            <p className="text-[#CACFFF] text-xl font-medium">
              The Future of Internet is here with unprecedented speed and
              reliability.
            </p>
          </div>
          <div className="mb-8">
            <div className="flex flex-row gap-3 items-center mb-4">
              <div className="p-3 rounded-xl bg-[#FFFFFF33]">
                <Wifi color="white" />
              </div>
              <div>
                <p className="text-white text-base font-medium">
                  40% More Coverage
                </p>
                <p className="text-[#FFFFFF90] text-sm">
                  Wider reach across all floors
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-3 items-center mb-4">
              <div className="p-3 rounded-xl bg-[#FFFFFF33]">
                <Timer color="white" />
              </div>
              <div>
                <p className="text-white text-base font-medium">
                  75% Less Latency
                </p>
                <p className="text-[#FFFFFF90] text-sm">
                  Optimized for competitive gaming
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-3 items-center">
              <div className="p-3 rounded-xl bg-[#FFFFFF33]">
                <Rocket color="white" />
              </div>
              <div>
                <p className="text-white text-base font-medium">
                  4X Faster Performance
                </p>
                <p className="text-[#FFFFFF90] text-sm">
                  Stream 8K content effortlessly
                </p>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <button className="px-8 py-3 bg-white text-[#24389C] rounded-xl">
              Upgrade to 6G Now
            </button>
          </div>
        </div>

        {/* right */}

        <div className="flex items-center">
          <img src={offer} alt="Offer" />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6 mb-6">
        <div className="col-span-6 rounded-xl bg-white flex flex-col">
          <div>
            <img src={o3} alt="offer1" className="rounded-xl" />
          </div>
          <div className="p-5">
            <p className="text-[#24389C] text-xl font-medium mb-2">
              NETTV Premium Upgrade
            </p>
            <p className="text-[#454652] text-sm mb-6">
              Elevate your home entertainment with Nepal's premier OTT and live
              TV experience.
            </p>

            <div className="flex flex-row gap-2 w-full mb-20">
              <div className="bg-[#F2F3F6] rounded-xl flex flex-col gap-2 p-3 items-center justify-center w-full">
                <span className="text-[#24389C] text-base">4000+</span>
                <span className="text-[#191C1E] text-xs">MOVIES</span>
              </div>
              <div className="bg-[#F2F3F6] rounded-xl flex flex-col gap-2 p-3 items-center justify-center w-full">
                <span className="text-[#24389C] text-base">100+</span>
                <span className="text-[#191C1E] text-xs">EXCLUSIVE</span>
              </div>
              <div className="bg-[#F2F3F6] rounded-xl flex flex-col gap-2 p-3 items-center justify-center w-full">
                <span className="text-[#24389C] text-base">300</span>
                <span className="text-[#191C1E] text-xs">HD CHANNELS</span>
              </div>
            </div>

            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-col">
                <p className="text-xs font-semibold">INTRODUCTORY PRICE</p>
                <p className="text-[#454652] text-base">
                  <span className="text-[#24389C] text-2xl">Rs. 50</span>/month
                </p>
              </div>
              <button className="px-6 py-3 rounded-xl bg-[#24389C] text-white">
                Get Offer
              </button>
            </div>
          </div>
        </div>

        <div className="col-span-6 rounded-xl bg-white flex flex-col">
          <div className="h-76">
            <img
              src={o4}
              alt="offer2"
              className="rounded-t-xl object-cover h-76 w-full"
            />
          </div>
          <div className="p-5 bg-white flex flex-col flex-1 rounded-xl">
            <p className="text-[#24389C] text-xl font-medium mb-4">
              Eliminate Blind Spots
            </p>

            <div className="flex flex-col gap-4 mb-8">
              <div className="flex flex-row gap-3 items-start">
                <div className="flex items-center justify-center shrink-0 mt-0.5">
                  <CircleCheck color="white" fill="#24389C" size={28} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[#191C1E] text-base font-medium">
                    Full ON Coverage
                  </span>
                  <span className="text-[#454652] text-sm">
                    Seamless connectivity in every corner of your home.
                  </span>
                </div>
              </div>

              <div className="flex flex-row gap-3 items-start">
                <div className="flex items-center justify-center shrink-0 mt-0.5">
                  <CircleCheck color="white" fill="#24389C" size={28} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[#191C1E] text-base font-medium">
                    Full ON Speed
                  </span>
                  <span className="text-[#454652] text-sm">
                    High-bandwidth support for multiple simultaneous devices.
                  </span>
                </div>
              </div>

              <div className="flex flex-row gap-3 items-start">
                <div className="flex items-center justify-center shrink-0 mt-0.5">
                  <CircleCheck color="white" fill="#24389C" size={28} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[#191C1E] text-base font-medium">
                    Full ON Experience
                  </span>
                  <span className="text-[#454652] text-sm">
                    Intelligent routing for the most stable signal possible.
                  </span>
                </div>
              </div>
            </div>

            <button className="w-full py-4 rounded-xl bg-[#24389C] text-white mt-auto">
              Upgrade Now
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#9CB0FF] p-8 rounded-xl flex justify-between items-center">
        <div className="flex gap-3 items-center">
           <div className="rounded-full p-4 bg-[#2B40881A] w-fit">
          <Headset color="#2B4088" />
        </div>
        <div>
          <p className="text-[#2B4088] text-xl font-medium">Need assistance with these offers?</p>
          <p className="text-[#2B4088] text-sm">
            Our experts are available 24/7 to help you choose the right plan.
          </p>
        </div>

        </div>

        <div>
          <button className="px-6 py-3 border border-[#2B4088] text-[#2B4088] rounded-xl">
            Chat Now
          </button>
          <button className="px-6 py-3 bg-[#2B4088] text-white rounded-xl ml-4">
            Call 9801523050
          </button>
        </div>
       
      </div>
    </div>
  );
};

export default OfferPage;
