import { MonitorPlay } from "lucide-react";
import Navbar from "./Navbar";

const NetTVStatusPage = () => {
  return (
    <div className="bg-[#F8F9FC] p-4 md:p-6">
      <Navbar />

      <div className="flex my-6 items-center justify-between">
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold">NetTV / IPTV Diagnostic</h2>
          {/* <p className="text-[#5C5E65] text-base">
            Administrative health check and financial overview.
          </p> */}
        </div>
        <div className="flex gap-3">
          {/* <button className="flex gap-2 items-center text-[#454652] py-2.5 px-4.5 bg-white rounded-lg border border-[#C5C5D4]">
            <PrinterCheck size={20} />
            <span>Print Report</span>
          </button> */}
          <button className="flex gap-2 items-center text-[#CACFFF] py-2.5 px-4.5 bg-[#24389C] rounded-lg">
            <MonitorPlay size={20} />
            <span>Active Service</span>
          </button>
        </div>
      </div>

      <div className="bg-white border border-[#E1E2E5] p-5 mb-4 rounded-xl">
        <div className="flex justify-between ">
          <p className="text-base font-semibold">Overall Health</p>
          <span className="text-[#15803D] bg-[#DCFCE7] text-xs py-1 px-3 rounded-full">
            OPTIMAL
          </span>
        </div>
      </div>

      <div className="bg-[#465AA3] rounded-xl p-5">
        <p>Device Info</p>
        <div className="grid-cols-2">
          
        </div>
      </div>
    </div>
  );
};

export default NetTVStatusPage;
