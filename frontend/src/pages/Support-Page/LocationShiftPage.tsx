import { ArrowLeft, MapPin, Search } from "lucide-react";
import { useNavigate } from "react-router";
import Map from "../../components/Map";

const LocationShiftPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/support");
  };

  return (
    <div className="bg-[#F8F9FC] min-h-screen p-4 md:p-6">
      <div className="relative">
        <div className="h-124 rounded-2xl overflow-hidden">
          <Map />
        </div>

        <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-1000">
          
          <div className="flex items-center gap-4">
            <button
              onClick={handleBack}
              className="flex h-12 w-12 items-center justify-center rounded-full cursor-pointer bg-white shadow-md hover:bg-gray-100"
            >
              <ArrowLeft className="text-[#24389C]" />
            </button>

            {/* <div className="rounded-full bg-white px-5 py-3 shadow-md">
              <p className="font-medium text-[#24389C]">Location Shift</p>
            </div> */}
          </div>

         
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md">
            <Search className="text-[#24389C]" />
          </div>
        </div>

        {/* form */}
        <div className="-mt-28 relative z-20 flex justify-center px-4">
          <div className="w-full max-w-3xl rounded-2xl bg-white p-8 shadow-xl">
            
            {/* <div className="mb-6 flex justify-center">
              <div className="h-1.5 w-12 rounded-full bg-gray-300"></div>
            </div> */}

            <h2 className="mb-8 text-center text-xl font-semibold">
              Select address from the map
            </h2>

            {/* current address */}
            <div className="mb-8 flex items-center gap-4 rounded-xl border border-[#DEE0FF80] bg-[#DEE0FF4D] p-5">
              <div className="rounded-lg bg-white p-2.5">
                <MapPin color="white" fill="#24389C" size={28}/>
              </div>

              <div>
                <p className="font-medium text-[#24389C]">
                  Current Address
                </p>
                <p className="text-[#454652]">Naikap, Kathmandu</p>
              </div>
            </div>

            {/* inputs */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  House No. (Optional)
                </label>

                <input
                  type="text"
                  placeholder="Your house number"
                  className="w-full rounded-xl border border-[#F2F3F6] bg-[#F2F3F6] p-3 outline-none focus:border-[#24389C]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Ward No. (Optional)
                </label>

                <input
                  type="text"
                  placeholder="Your ward number"
                  className="w-full rounded-xl border border-[#F2F3F6] bg-[#F2F3F6] p-3 outline-none focus:border-[#24389C]"
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium">
                Detail Directions (Optional)
              </label>

              <input
                type="text"
                placeholder="Detail Direction"
                className="w-full rounded-xl border border-[#F2F3F6] bg-[#F2F3F6] p-3 outline-none focus:border-[#24389C]"
              />
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium">
                Remarks (Optional)
              </label>

              <textarea
                rows={4}
                placeholder="Remarks"
                className="w-full resize-none rounded-xl border-[#F2F3F6] border bg-[#F2F3F6] p-3 outline-none focus:border-[#24389C]"
              />
            </div>

            <button className="mt-8 w-full rounded-xl bg-[#3F51B5] py-4 font-medium text-white hover:bg-[#1d2f82]">
              Send Request
            </button>

            <p className="mt-4 text-center text-xs text-[#454652]">
              By submitting, you agree to our terms for infrastructure
              relocation services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationShiftPage;
