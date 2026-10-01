import {
  ArrowLeft,
  IdCard,
  Info,
  Phone,
  Search,
  ShieldCheck,
} from "lucide-react";
import { useNavigate } from "react-router";

const EmployeeVerificationPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/profile");
  };


  return (
    <div className="bg-[#F8F9FC] min-h-screen p-4 md:p-6">
      {/* back */}
      <div className="mb-4 flex flex-row gap-5 items-center">
        <div className="bg-white text-[#24389C] w-fit p-3 rounded-full items-center flex hover:bg-[#e9ebf5]">
          <button onClick={handleBack} className="cursor-pointer">
            <ArrowLeft />
          </button>
        </div>

        <div>
          <h4 className="text-2xl font-semibold">Employee Verification</h4>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-[#C5C5D44D] p-6">
        <div className="bg-[#24389C0D] border-l-5 border-[#24389C] rounded-xl p-6 flex flex-row gap-4 mb-10">
          <Info color="#24389C" className="pt-1" size={28} />
          <div>
            <h4 className="text-[#24389C] text-2xl font-medium mb-1">
              About Employee Verification
            </h4>
            <p className="text-[#454652] text-lg">
              This feature confirms the current or former employee's employment
              status. We request you to enter the Employee Phone Number and
              Employee Id to confirm the status accurately.
            </p>
          </div>
        </div>

        <div className="mb-10">
          <div className="mb-8">
            <label className="uppercase text-base font-semibold text-[#454652]">
              Employee Number
            </label>
            <div className="border border-[#C5C5D4] bg-[#F2F3F6] p-4 rounded-xl flex flex-row gap-4 mt-2 items-center">
              <Phone color="#757684" size={20} />

              <input
                type="number"
                placeholder="e.g. +977"
                className="placeholder:text-[#757684] outline-none w-full"
              />
            </div>
          </div>

          <div className="mb-8">
            <label className="uppercase text-base font-semibold text-[#454652]">
              Employee ID
            </label>
            <div className="border border-[#C5C5D4] bg-[#F2F3F6] p-4 rounded-xl flex flex-row gap-4 mt-2 items-center">
              <IdCard color="#757684" size={20} />

              <input
                type="number"
                placeholder="Enter Employee Identification Code"
                className="placeholder:text-[#757684] outline-none w-full"
              />
            </div>
          </div>

          <button className="w-full bg-[#24389C] cursor-pointer rounded-xl p-6 flex flex-row items-center gap-2 justify-center hover:bg-[#1e2f8c] mb-5">
            <Search color="white" size={20} />

            <span className="text-white text-xl">Search Employee</span>
          </button>
        </div>

        <div className="border-t border-[#C5C5D4] pt-10 p-2 flex flex-row gap-4 items-center">
          <div className="p-6 bg-[#E7E8EB] rounded-xl w-fit">
            <ShieldCheck color="#24389C" size={32} />
          </div>
          <div className="text-[#454652]">
            <h5>SECURE VERIFICATION SYSTEM</h5>
            <p>
              Authorized users only. All verification searches are logged for
              security and compliance purposes to protect employee privacy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeVerificationPage;
