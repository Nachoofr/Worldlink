import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Dot,
  LockKeyhole,
  LogOut,
  Pencil,
  RectangleEllipsis,
  ShieldCheck,
  User,
} from "lucide-react";
import { useNavigate } from "react-router";
import Profile from "../assets/p.jpg";
import { useEffect, useState } from "react";
import { getUser } from "../api/user.api";

type User = {
  id: number;
  name: string;
  email: string;
};

const ProfilePage = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  const handleVerification = () => {
    navigate("/employee-verification");
  };

  const handlePasswordChange = () => {
    navigate("/change-password");
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getUser();

        console.log("Profile user:", data);

        setUser(data.result);
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="bg-[#F8F9FC] min-h-screen p-4 md:p-6">
      {/* back arrow */}
      <div className="mb-6">
        <div className="bg-white text-[#24389C] w-fit p-3 rounded-full items-center flex hover:bg-[#e9ebf5]">
          <button onClick={handleBack} className="cursor-pointer">
            <ArrowLeft />
          </button>
        </div>
      </div>

      <div className="flex justify-between items-end mb-10">
        <div className="p-2 flex gap-6">
          <div className="overflow-visible w-fit">
            <div className="border-4 border-[#EDEEF1] rounded-2xl relative">
              <img
                src={Profile}
                alt="profile-image"
                className="h-30 w-30 rounded-xl object-cover"
              />
            </div>
            <div className="absolute rounded-full w-fit p-2 top-73 left-98 z-20 bg-[#24389C]">
              <Pencil color="white" size={14} />
            </div>
          </div>

          <div className="flex flex-col justify-between py-4">
            <h3 className="text-3xl font-semibold">{user?.name}</h3>
            <p className="text-sm">Customer ID: WL-882931</p>
          </div>
        </div>

        <div className="flex gap-4">
          <button className="text-[#24389C] px-6 py-3 rounded-lg border cursor-pointer border-[#C5C5D4] hover:bg-[#ededed]">
            Edit Profile
          </button>
          <button className="text-white bg-[#24389C] px-6 py-3 rounded-lg cursor-pointer hover:bg-[#37489d]">
            Save Changes
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* left */}
        <div className="col-span-9 flex flex-col gap-6">
          {/* personal info */}
          <div className=" bg-white p-6 border border-[#C5C5D44D] rounded-xl">
            <div className="flex flex-row justify-between items-center mb-6">
              <p className="text-xl font-semibold">Personal Information</p>
              <User color="#757684" size={20} />
            </div>
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-3 flex flex-col gap-2">
                <label className="text-[#454652] text-xs font-semibold">
                  Full Name
                </label>
                <input
                  type="text"
                  value={user?.name}
                  placeholder="Choi Beomgyu"
                  className="p-3 bg-[#F2F3F6] border border-[#C5C5D4] rounded-lg placeholder:text-sm outline-none"
                />
              </div>

              <div className="col-span-3 flex flex-col gap-2">
                <label className="text-[#454652] text-xs font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  value={user?.email}
                  placeholder="choibeomgyu@example.com"
                  className="p-3 bg-[#F2F3F6] border border-[#C5C5D4] rounded-lg placeholder:text-sm outline-none"
                />
              </div>

              <div className="col-span-3 flex flex-col gap-2">
                <label className="text-[#454652] text-xs font-semibold">
                  Mobile Number
                </label>
                <input
                  type="number"
                  placeholder="+977 98XXXXXXXX"
                  className="p-3 bg-[#F2F3F6] border border-[#C5C5D4] rounded-lg placeholder:text-sm outline-none"
                />
              </div>

              <div className="col-span-3 flex flex-col gap-2">
                <label className="text-[#454652] text-xs font-semibold">
                  Alternative Number
                </label>
                <input
                  type="number"
                  placeholder="Add secondary contact"
                  className="p-3 bg-[#F2F3F6] border border-[#C5C5D4] rounded-lg placeholder:text-sm outline-none"
                />
              </div>

              <div className="col-span-3 flex flex-col gap-2">
                <label className="text-[#454652] text-xs font-semibold">
                  Gender
                </label>

                <input
                  type="text"
                  placeholder="Male"
                  className="p-3 bg-[#F2F3F6] border border-[#C5C5D4] rounded-lg placeholder:text-sm outline-none"
                />
              </div>

              <div className="col-span-3 flex flex-col gap-2">
                <label className="text-[#454652] text-xs font-semibold">
                  Address
                </label>
                <input
                  type="text"
                  placeholder="Naikap"
                  className="p-3 bg-[#F2F3F6] border border-[#C5C5D4] rounded-lg placeholder:text-sm outline-none"
                />
              </div>
            </div>
          </div>

          {/* additional details */}
          <div className="bg-white p-6 border border-[#C5C5D44D] rounded-xl">
            <div className="flex flex-row justify-between items-center mb-6">
              <p className="text-xl font-semibold">Additional Details</p>
              <User color="#757684" size={20} />
            </div>

            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-3 flex flex-col gap-2">
                <label className="text-[#454652] text-xs font-semibold">
                  Full Name
                </label>
                <input
                  type="text"
                  value={user?.name}
                  placeholder="Choi Beomgyu"
                  className="p-3 bg-[#F2F3F6] border border-[#C5C5D4] rounded-lg placeholder:text-sm outline-none"
                />
              </div>

              <div className="col-span-3 flex flex-col gap-2">
                <label className="text-[#454652] text-xs font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  value={user?.email}
                  placeholder="choibeomgyu@example.com"
                  className="p-3 bg-[#F2F3F6] border border-[#C5C5D4] rounded-lg placeholder:text-sm outline-none"
                />
              </div>

              <div className="col-span-3 flex flex-col gap-2">
                <label className="text-[#454652] text-xs font-semibold">
                  Mobile Number
                </label>
                <input
                  type="number"
                  placeholder="+977 98XXXXXXXX"
                  className="p-3 bg-[#F2F3F6] border border-[#C5C5D4] rounded-lg placeholder:text-sm outline-none"
                />
              </div>

              <div className="col-span-3 flex flex-col gap-2">
                <label className="text-[#454652] text-xs font-semibold">
                  Mobile Number
                </label>
                <input
                  type="number"
                  placeholder="+977 98XXXXXXXX"
                  className="p-3 bg-[#F2F3F6] border border-[#C5C5D4] rounded-lg placeholder:text-sm outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* right */}

        <div className="col-span-3 flex flex-col gap-6">
          {/* employee verification */}
          <div className="col-span-3 bg-[#24389C] p-5.5 rounded-xl">
            <div className="flex gap-2 mb-3">
              <ShieldCheck color="white" />
              <p className="uppercase text-white">Quick Verify</p>
            </div>

            <div className="mb-3">
              <p className="text-white text-sm">
                Verify your status as a WorldLink Employee to unlock special
                corporate benefits and direct support.
              </p>
            </div>

            <div>
              <button
                className="w-full p-2 bg-white text-[#24389C] text-base rounded-lg cursor-pointer hover:bg-amber-50"
                onClick={handleVerification}
              >
                Employee Verification
              </button>
            </div>
          </div>

          {/* security */}
          <div className="bg-white p-5 border border-[#C5C5D44D] rounded-xl">
            <div className="flex justify-between items-center mb-3">
              <p>Security</p>
              <LockKeyhole color="#757684" size={20} />
            </div>
            <div
              className="flex justify-between mb-3 p-4 cursor-pointer bg-[#F2F3F6] border border-[#C5C5D433] rounded-lg items-center"
              onClick={handlePasswordChange}
            >
              <div className="flex items-center gap-1.5">
                <RectangleEllipsis color="#465AA3" />
                <p className="text-sm">Change Password</p>
              </div>

              <ChevronRight />
            </div>

            <div className="flex justify-between mb-2 p-4 bg-[#F2F3F6] border border-[#C5C5D433] rounded-lg items-center">
              <div className="flex items-center gap-1.5">
                <ShieldCheck color="#465AA3" />
                <p className="text-sm">Two-Factor Auth</p>
              </div>

              <ChevronRight />
            </div>

            <div className="flex text-sm items-center px-2 pt-2  border-t border-[#C5C5D433] text-[#BA1A1A] gap-2 justify-center">
              <LogOut size={18} />
              <p>Sign Out of All Devices</p>
            </div>
          </div>

          {/* need help */}

          <div className="bg-[#9CB0FF33] border border-[#9CB0FF80] rounded-xl p-5">
            <p className="text-[#2B4088] text-base mb-2">Need Help?</p>
            <p className="text-[#2B4088CC] text-sm">
              Our specialized profile support team is available 24/7 to assist
              with account changes.{" "}
            </p>
            <div className="flex items-center gap-2 mt-4 text-[#24389C]">
              <p className="text-xs font-black">CONTACT SUPPORT</p>
              <ArrowRight size={12} />
            </div>
          </div>
        </div>

        {/* bottom */}

        <div className="col-span-12 p-6 bg-white">
          <p className="font-semibold text-xl mb-6">Accoount Details</p>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-4 bg-[#F2F3F6] border border-[#C5C5D433] rounded-lg p-4">
              <p className="text-[#454652] text-xs font-semibold mb-0.5">
                Account Status
              </p>
              <div className="flex items-center">
                <Dot color="#22C55E" strokeWidth={4} />
                <p className="text-[#15803D] text-base font-semibold">Active</p>
              </div>
            </div>

            <div className="col-span-8 bg-[#F2F3F6] border border-[#C5C5D433] rounded-lg p-4">
              <p className="text-[#454652] text-xs font-semibold mb-0.5">
                Account Status
              </p>
              <p className="text-base font-semibold">
                Jawalakhel, Lalitpur, NP
              </p>
            </div>

            <div className="col-span-4 bg-[#F2F3F6] border border-[#C5C5D433] rounded-lg p-4">
              <p className="text-[#454652] text-xs font-semibold mb-0.5">
                Registered Date
              </p>
              <p className="text-base font-semibold">Oct 12,2021</p>
            </div>

            <div className="col-span-4 bg-[#F2F3F6] border border-[#C5C5D433] rounded-lg p-4">
              <p className="text-[#454652] text-xs font-semibold mb-0.5">
                Current Plan
              </p>
              <p className="text-base font-semibold">Smart Offer 250 Mbps</p>
            </div>

            <div className="col-span-4 bg-[#F2F3F6] border border-[#C5C5D433] rounded-lg p-4">
              <p className="text-[#454652] text-xs font-semibold mb-0.5">
                Next Renewal
              </p>
              <p className="text-base font-semibold">Nov 12, 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
