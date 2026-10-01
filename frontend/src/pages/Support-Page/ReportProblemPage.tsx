import { ArrowLeft, ChevronDown, Info } from "lucide-react";
import { useNavigate } from "react-router";

const ReportProblemPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/support");
  };

  return (
    <div className="bg-[#F8F9FC] min-h-screen p-4 md:p-6">
      {/* back */}
      <div className="mb-4 ">
        <div className="bg-white text-[#24389C] w-fit p-3 rounded-full items-center flex hover:bg-[#e9ebf5]">
          <button onClick={handleBack} className="cursor-pointer">
            <ArrowLeft />
          </button>
        </div>
      </div>

      {/* report problem */}

      <div className="bg-white rounded-xl p-4 md:p-6 mb-6">
        <h1 className="text-[#24389C] text-4xl font-bold mb-2">
          Report a Problem
        </h1>
        <p className="text-[#454652] text-base">
          Our technical team is ready to assist you. Please fill out the details
          below.
        </p>
        <div className="flex flex-row gap-6 mt-8 mb-4">
          <div className="flex flex-col w-130 gap-2">
            <label className="text-[#454652] text-xs font-semibold">
              Problem Category
            </label>
            <div className="relative">
              <select
              id="problem"
              name="problem"
              className="p-3 py-2.5 appearance-none bg-[#F2F3F6] border border-[#C5C5D4] rounded-lg text-[#191C1E] text-sm w-full focus:outline-none"
            >
              <option value="connection-issue">Connection Issue</option>
              <option value="router-issue">Router Issue</option>
              <option value="billing-account">Billing and Account</option>
              <option value="coverage-issue">Coverage Issue</option>
            </select>
            <ChevronDown className="w-4 h-4 text-[#454652] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />

            </div>
            
          </div>
          <div className="flex flex-col w-full gap-2">
            <label className="text-[#454652] text-xs font-semibold">
              Subject
            </label>
            <input
              type="text"
              placeholder="Briefly describe the issue"
              className="p-3 bg-[#F2F3F6] border border-[#C5C5D4] rounded-lg w-full placeholder:text-[#6B7280] placeholder:text-sm"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 mb-4">
          <label className="text-[#454652] text-xs font-semibold">
            Detailed Description
          </label>
          <textarea
            name="detail-description"
            id="detail-description"
            placeholder="Provide as much detail as possible (e.g., error codes, time of occurrence, troubleshooting steps already 
taken)"
            className="p-3 h-40 bg-[#F2F3F6] border border-[#C5C5D4] rounded-lg placeholder:text-[#6B7280] placeholder:text-sm"
          ></textarea>
        </div>

        <div className="flex flex-col gap-2 mb-8">
          <label className="text-[#454652] text-xs font-semibold">
            Attachments (Screenshots or Logs)
          </label>
          <textarea
            name="detail-description"
            id="detail-description"
            placeholder="Provide as much detail as possible (e.g., error codes, time of occurrence, troubleshooting steps already 
taken)"
            className="p-3 h-40 bg-[#F2F3F6] border border-[#C5C5D4] rounded-lg placeholder:text-[#6B7280] placeholder:text-sm"
          ></textarea>
        </div>

        <div className="flex flex-row-reverse gap-4">
          <button className="px-8 py-3 bg-[#24389C] text-white rounded-lg">
            Submit Ticket
          </button>
          <button className="px-6 py-3 text-[#24389C]">Cancel</button>
        </div>
      </div>

      <div className="p-5 flex flex-row gap-3 bg-[#3F51B51A] border border-[#3F51B533] rounded-xl items-start">
        <Info fill="#24389C" color="white" />

        <div>
          <p className="text-[#24389C] text-base font-semibold mb-1">Standard Support Hours</p>
          <p className="text-[#24389C] text-sm" >
            Tickets are processed 24/7, but technical site visits are scheduled
            between 9:00 AM and 6:00 PM. Check our Network Status page before
            reporting an outage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReportProblemPage;
