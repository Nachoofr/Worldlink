import { MapPin, Phone, Search, Send } from "lucide-react";
import Map from "../components/Map";

const Benefits = () => {
  return (
    <div className="bg-[#F8F9FC] p-4 md:p-6">
      {/* top section */}
      <div className=" p-8 bg-[#E8EAF6] rounded-sm  mb-8 grid grid-cols-12 gap-6">
        <div className="col-span-6 w-100 flex flex-col gap-4 py-8">
          <h3 className="text-4xl font-bold">myWorldLink Benefits</h3>
          <p className="text-[#4B5563] text-lg">
            Exciting discount offers for our loyal subscribers.
          </p>

          <div className="flex flex-row gap-3 text-[#6B7280] items-center bg-white rounded-lg p-4">
            <Search size={16} />
            <input
              type="text"
              placeholder="Search Outlet, Area"
              className="placeholder:text-[#6B7280] text-base"
            />
          </div>
        </div>

        <div className="col-span-6 w-full h-64 border border-[#E5E7EB] rounded-2xl shadow-md">
          <Map />
        </div>
      </div>

      {/* second section */}
      <div className="p-8">
        {/* head */}
        <div className="flex flex-row items-center justify-between mb-8">
          <h4 className="text-xl font-semibold">Available Offers</h4>

          <div className="flex flex-row gap-2">
            <button className="text-[#4B5563] px-4 py-2 bg-white border border-[#E5E7EB] rounded-lg">
              All Categories
            </button>
            <button className="text-[#4B5563] px-4 py-2 bg-white border border-[#E5E7EB] rounded-lg">
              Food & Beverage
            </button>
            <button className="text-[#4B5563] px-4 py-2 bg-white border border-[#E5E7EB] rounded-lg">
              Lifestyle
            </button>
          </div>
        </div>

        <div>
          <div className=" flex flex-col w-full items-center gap-4">
            <div className="p-8 bg-white rounded-lg w-full flex flex-row justify-between items-center">
              <div className="flex flex-col gap-1">
                <h4>Hungry Treat Home</h4>
                <span className="text-[#16A34A]">
                  10% discount on Total Bill
                </span>
                <div className="flex flex-row gap-4 text-[#6B7280]">
                  <div className="flex flex-row items-center gap-1">
                    <Phone size={16} />
                    <span>015543360</span>
                  </div>
                  <div className="flex flex-row items-center gap-1">
                    <MapPin size={16} />
                    <span>Jawalakhel Lalitpur</span>
                  </div>
                </div>
              </div>
              <div>
                <Send />
              </div>
            </div>
            <div className="p-8 bg-white rounded-lg w-full flex flex-row justify-between items-center">
              <div className="flex flex-col gap-1">
                <h4>Moon Walker Bar & Grill</h4>
                <span className="text-[#16A34A]">
                  10% discount on Total Bill
                </span>
                <div className="flex flex-row gap-4 text-[#6B7280]">
                  <div className="flex flex-row items-center gap-1">
                    <Phone size={16} />
                    <span>015171679</span>
                  </div>
                  <div className="flex flex-row items-center gap-1">
                    <MapPin size={16} />
                    <span>Tikhedewal Kathmandu </span>
                  </div>
                </div>
              </div>
              <div>
                <Send />
              </div>
            </div>

            <div className="p-8 bg-white rounded-lg w-full flex flex-row justify-between items-center">
              <div className="flex flex-col gap-1">
                <h4>Makoo Bakery</h4>
                <span className="text-[#16A34A]">
                  15% discount on Total Bill
                </span>
                <div className="flex flex-row gap-4 text-[#6B7280]">
                  <div className="flex flex-row items-center gap-1">
                    <Phone size={16} />
                    <span>015522997</span>
                  </div>
                  <div className="flex flex-row items-center gap-1">
                    <MapPin size={16} />
                    <span>Jawalakhel Lalitpur</span>
                  </div>
                </div>
              </div>
              <div>
                <Send />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
