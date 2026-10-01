import GaugeComponent from "react-gauge-component";
import Navbar from "./Navbar";
import {
  CircleAlert,
  CircleCheck,
  CircleEllipsis,
  MessagesSquare,
  Phone,
  RotateCcw,
  Smartphone,
  Ticket,
  TriangleAlert,
} from "lucide-react";

const NoInternetPage = () => {
  const status = [
    {
      name: "Account Status",
      info: "Your account is active and billing is up to date.",
      status: "ACTIVE",
      statusIcon: (
        <CircleCheck
          color="white"
          fill="#16A34A"
          className="p-2 rounded-full bg-[#F0FDF4]"
          size={38}
        />
      ),
    },
    {
      name: "ONU Status",
      info: "Your Optical Network Unit is powered on and synchronized.",
      status: "ONLINE",
      statusIcon: (
        <CircleCheck
          color="white"
          fill="#16A34A"
          size={38}
          className="p-2 rounded-full bg-[#F0FDF4]"
        />
      ),
    },
    {
      name: "DNS Resolution",
      info: "Your account is active and billing is up to date.",
      status: "ONLINE",
      statusIcon: (
        <CircleCheck
          color="white"
          fill="#16A34A"
          size={38}
          className="p-2 rounded-full bg-[#F0FDF4]"
        />
      ),
    },
    {
      name: "Outage Status",
      info: "Potential maintenance activity detected in your area.",
      status: "ALERT",
      statusIcon: (
        <CircleAlert
          fill="#BA1A1A"
          color="white"
          size={38}
          className="p-2 rounded-full bg-[#FFDAD6]"
        />
      ),
    },
    {
      name: "RX Power Status",
      info: "Signal strength within operational parameters.",
      status: "-21.80 dBm",
      statusIcon: (
        <CircleEllipsis
          color="#454652"
          size={38}
          className="p-2 rounded-full bg-[#F2F3F6]"
        />
      ),
    },
    {
      name: "RX Power Status",
      info: "Signal strength within operational parameters.",
      status: "-21.80 dBm",
      statusIcon: (
        <CircleEllipsis
          color="#454652"
          size={38}
          className="p-2 rounded-full bg-[#F2F3F6]"
        />
      ),
    },
  ];

  return (
    <div className="bg-[#F8F9FC] p-4 md:p-6">
      <Navbar />

      <div className="my-6">
        <div className="relative h-50 flex justify-center items-center">
          <GaugeComponent
            type="radial"
            minValue={0}
            maxValue={360}
            startAngle={-180}
            endAngle={180}
            arc={{
              width: 0.15,
              cornerRadius: 0,
              subArcs: [{ color: "#BA1A1A" }],
            }}
            labels={{
              valueLabel: {
                formatTextValue: () => "",
              },
              tickLabels: {
                hideMinMax: true,
              },
            }}
            pointer={{ hide: true }}
          />

          <div className="absolute flex flex-col items-center gap-2">
            <TriangleAlert color="#BA1A1A" size={48} />
            <span className=" uppercase text-base  text-[#454652]">
              No access
            </span>
          </div>
        </div>
        <div className="mt-6 flex flex-col items-center gap-2">
          <p className="text-[#BA1A1A] text-base">No Internet Connection</p>
          <p className="text-[#454652] text-base">
            Your router is connected, but we've detected an issue reaching the
            global network. Let's troubleshoot.
          </p>
        </div>
      </div>

      <div className="flex gap-4 bg-[#FFDAD680] text-[#BA1A1A] text-base border border-[#BA1A1A33] rounded-xl p-4 mb-6">
        <TriangleAlert color="#BA1A1A" />
        <p>
          <span className="font-bold">System Alert: </span>Measurements indicate
          local network resolution is fine, but the upstream gateway is not
          responding. (Error Code: ERR_GATEWAY_TIMEOUT)
        </p>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* left */}

        <div className="col-span-8">
          <div className="bg-white rounded-2xl p-6 mb-6 border-[#C5C5D44D] border">
            <div className="flex justify-between mb-4">
              <span className="text-base">Diagnosis Checklist</span>
              <span className="uppercase text-base">Full Scan Incomplete</span>
            </div>

            <div>
              {status.map((task) => (
                <div className="py-4 border-b border-[#C5C5D44D] flex justify-between items-center">
                  <div className="flex gap-4">
                    <span>{task.statusIcon}</span>
                    <div>
                      <p className="text-base font-semibold">{task.name}</p>
                      <p className="text-sm">{task.info}</p>
                    </div>
                  </div>

                  <div className="py-1 px-3 text-[#16A34A] bg-[#DCFCE7] rounded-2xl w-fit">
                    <span>{task.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border-[#C5C5D44D] border">
            <div className="mb-4">
              <p className="text-base">Next Steps</p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-center">
                <span className="py-0.5 px-2.5 rounded-full bg-[#3F51B5] text-white">
                  1
                </span>
                <p>Power cycle your router by unplugging it for 30 seconds.</p>
              </div>
              <div className="flex gap-3 items-center">
                <span className="py-0.5 px-2.5 rounded-full bg-[#3F51B5] text-white">
                  2
                </span>
                <p>
                  Ensure the optical fiber cable is securely plugged into the
                  ONU device.
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <span className="py-0.5 px-2.5 rounded-full bg-[#3F51B5] text-white">
                  3
                </span>
                <p>
                  If problems persist, contact our support team using the tools
                  below.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* right */}

        <div className="col-span-4">
          <div className="bg-[#24389C] p-6 rounded-2xl mb-6">
            <p className="text-white text-base">Still Offline?</p>
            <p className="text-[#FFFFFFCC] mb-6 mt-2">
              A full system re-scan can sometimes force a gateway handshake.
            </p>
            <button className="flex justify-center w-full bg-white text-[#24389C] gap-2 items-center py-4 rounded-xl mb-2">
              <RotateCcw size={16}/>
              <span>Run Again</span>
            </button>
            <button className="flex justify-center w-full border border-[#FFFFFF33] bg-[#FFFFFF1A] text-white items-center py-4 rounded-xl">
              Back to Home
            </button>
          </div>

          <div className="bg-white p-6 rounded-2xl mb-6  border-[#C5C5D44D] border">
            <p className="mb-6 text-[#454652]">Support Center</p>
            <div className="flex flex-col gap-6 text-[#465AA3] mb-8">
              <div className="flex gap-3 items-center pb-4 border-b border-[#C5C5D433]">
                <Smartphone />
                <div>
                  <span className="text-[#454652]">Hotline(Ncell) : </span>
                  <span>+977-9801523051</span>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <Phone />
                <div>
                  <span className="text-[#454652]">Hotline(NTC) : </span>
                  <span>+977-01-5970050</span>
                </div>
              </div>
            </div>

            <div className="gap-4 grid grid-cols-2 gap">
              <button className="py-4 bg-[#24389C0D] border border-[#24389C33] text-[#24389C] rounded-xl flex flex-col gap-2 items-center">
                <MessagesSquare />
                <span>Chat Now</span>
              </button>
              <button className="py-4 bg-[#24389C0D] border border-[#24389C33] text-[#24389C] rounded-xl flex flex-col gap-2 items-center">
                <Ticket />
                <span>Ticket</span>
              </button>
            </div>




          </div>

          <div className="bg-white p-6 rounded-2xl mb-6 border-[#C5C5D44D] border" >

            <p>Was this diagnostic helpful?</p>

          </div>



        </div>
      </div>
    </div>
  );
};

export default NoInternetPage;
