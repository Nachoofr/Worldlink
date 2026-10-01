import { ArrowLeft, Info } from "lucide-react";
import { useNavigate } from "react-router";

const ChangePasswordPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/profile");
  };

  return (
    <div className="bg-[#F8F9FC] min-h-screen p-4 md:p-6">
      {/* back */}
      <div className="mb-4">
        <div className="bg-white text-[#24389C] w-fit p-3 rounded-full items-center flex hover:bg-[#e9ebf5]">
          <button onClick={handleBack} className="cursor-pointer">
            <ArrowLeft />
          </button>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-base font-semibold mb-2">Security Settings</p>
        <p className="text-[#454652] text-base">
          Change your password to keep your account secure.
        </p>
      </div>

      <div className="bg-white rounded-xl p-6 mb-6">
        <div className="flex flex-col mb-6">
          <label className="text-base mb-2">Current Password</label>
          <input
            type="password"
            placeholder="Enter your current password"
            className="p-4 bg-[#F8F9FC] border border-[#C5C5D4] rounded-lg placeholder:text-[#6B7280]"
          />
        </div>

        <div className="flex flex-col mb-6">
          <label className="text-base mb-2">New Password</label>
          <input
            type="password"
            placeholder="Min. 8 characters"
            className="p-4 bg-[#F8F9FC] border border-[#C5C5D4] rounded-lg placeholder:text-[#6B7280]"
          />
        </div>

        {/* <div>
          <p className="text-base mb-2">Strength: None</p>
        </div> */}
        {/* points */}

        <div className="flex flex-col mb-6">
            <label className="text-base mb-2">Confirm New Password</label>
          <input
            type="password"
            placeholder="Repeat new password"
            className="p-4 bg-[#F8F9FC] border border-[#C5C5D4] rounded-lg placeholder:text-[#6B7280]"
          />

        </div>

        <div className="pt-6 flex gap-4">
            <button className="bg-[#011D86] rounded-xl px-6 py-4 text-white">Update Password</button>
            <button onClick={handleBack} className="text-[#011D86] px-6">Back to Profile</button>
        </div>
      </div>

      <div className="bg-[#011D860D] border border-[#011D861A] rounded-xl p-6 flex gap-4">
        <Info color="white" fill="#011D86"/>
        <div>
            <p className="text-[#011D86] text-base">Safety Tip</p>
            <p className="text-[#454652] text-base">Don't reuse passwords from other sites. A unique password ensures your
network data remains confidential.</p>
        </div>

      </div>


    </div>
  );
};

export default ChangePasswordPage;
