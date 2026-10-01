import {
  ArrowLeft,
  Asterisk,
  Mail,
  MapPinned,
  Phone,
  User,
} from "lucide-react";
import { useNavigate } from "react-router";
import Map from "../../components/Map";

const NewConnectionPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/support");
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
          <h4 className="text-2xl font-semibold">New Connection</h4>
        </div>
      </div>
       
       

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8 h-185">
          {/* map */}
          <Map />
        </div>

        <div className="col-span-4 bg-white border border-[#C5C5D433] rounded-xl p-6">
          <div className="mb-6">
            <p className="text-base mb-1 font-semibold">Customer Details</p>
            <p className="text-[#757684] text-xs">
              Fill out the information below to initiate your request.
            </p>
          </div>

          {/* form */}

          <div className="flex flex-col gap-5 mb-5">
            <div className="flex flex-col gap-2">
              <label className="text-[#454652] text-xs font-semibold flex gap-0.5">
                Your name
                <span>
                  <Asterisk color="#BA1A1A" size={10} strokeWidth={2} />
                </span>
              </label>
              <div className="bg-[#F2F3F6] border border-[#00000000] p-3 rounded-lg flex flex-row gap-4 items-center">
                <User color="#757684" size={18} />
                <input
                  type="text"
                  required={true}
                  placeholder="Shi"
                  className="w-full "
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#454652] text-xs font-semibold flex gap-0.5">
                Mobile no.
                <span>
                  <Asterisk color="#BA1A1A" size={10} strokeWidth={2} />
                </span>
              </label>
              <div className="bg-[#F2F3F6] border border-[#00000000] p-3 rounded-lg flex flex-row gap-4 items-center">
                <Phone color="#757684" size={18} />
                <input
                  type="number"
                  required={true}
                  placeholder="+977 98XXXXXXXX"
                  className="w-full "
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#454652] text-xs font-semibold flex gap-0.5">
                Email
                <span>
                  <Asterisk color="#BA1A1A" size={10} strokeWidth={2} />
                </span>
              </label>

              <div className="bg-[#F2F3F6] border border-[#00000000] p-3 rounded-lg flex flex-row gap-4 items-center">
                <Mail color="#757684" size={18} />
                <input
                  type="email"
                  required={true}
                  placeholder="shi@example.com"
                  className="w-full "
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#454652] text-xs font-semibold flex gap-0.5">
                Address
                <span>
                  <Asterisk color="#BA1A1A" size={10} strokeWidth={2} />
                </span>
              </label>

              <div className="bg-[#F2F3F6] border border-[#00000000] p-3 rounded-lg flex flex-row gap-4 items-center">
                <MapPinned color="#757684" size={18} />
                <input
                  type="text"
                  required={true}
                  placeholder="Full installation address"
                  className="w-full"
                />
              </div>
            </div>
          </div>

          <div>
            <p>Request For:</p>
            <div className="flex flex-col gap-6 mt-3">
              <label className="flex items-center gap-3 px-4 py-3 border border-[#C5C5D44D] rounded-lg cursor-pointer">
                <input type="checkbox" className="peer hidden" />

                <div className="w-5 h-5 rounded-full border-2 border-gray-400 peer-checked:border-[#24389C] peer-checked:bg-[#24389C]" />


                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-semibold">Installation Request</span>
                  <span className="text-[#757684] text-xs">Net line setup for net premises</span>
                </div>
              </label>

              <label className="flex items-center gap-3 px-4 py-3 border border-[#C5C5D44D] rounded-lg cursor-pointer">
                <input type="checkbox" className="peer hidden" />

                <div className="w-5 h-5 rounded-full border-2 border-gray-400 peer-checked:border-[#24389C] peer-checked:bg-[#24389C]" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-semibold">Service Expansion Request</span>
                  <span className="text-[#757684] text-xs">Adding infrastructure to existing zone</span>
                </div>
              </label>
            </div>

            <div className="mt-5">
              <button className="rounded-lg bg-[#3F51B5] p-4 text-white text-sm font-bold align-middle w-full cursor-pointer">
                Send Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewConnectionPage;
