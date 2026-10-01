import {
  ChevronsLeftRightEllipsis,
  CircleAlert,
  CircleUser,
  Dot,
  RotateCcw,
  RouterIcon,
  Server,
  Sun,
  Timer,
  X,
} from "lucide-react";
import Navbar from "./Navbar";
import GaugeComponent from "react-gauge-component";

const SlowSpeedPage = () => {
  const results = [
    {
      icon: <CircleUser />,
      name: "Account Status",
      info: "Subscription Active",
      status: "HEALTHY",
      detail: "Details",
    },
    {
      icon: <ChevronsLeftRightEllipsis />,
      name: "ONU Status",
      info: "ZTE-F670L Online",
      status: "HEALTHY",
      detail: "Details",
    },
    {
      icon: <Sun />,
      name: "RX Optical Power",
      info: "-19.45 dBm",
      status: "HEALTHY",
      detail: "Details",
    },
    {
      icon: <Timer />,
      name: "Network Latency",
      info: "12ms (avg)",
      status: "HEALTHY",
      detail: "Details",
    },
    {
      icon: <Server />,
      name: "DNS Resolving",
      info: "Cloudflare (1.1.1.1)",
      status: "HEALTHY",
      detail: "Details",
    },
  ];

  return (
    <div className="bg-[#F8F9FC] p-4 md:p-6">
      <Navbar />

      <div className="flex my-8 items-center justify-between">
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold">Network Diagnostics</h2>
          <p className="text-[#5C5E65] text-base">
            Deep system scan of your fiber connection and hardware status.
          </p>
        </div>
        <button className="flex gap-2 items-center text-white py-2.5 px-4.5 bg-[#003EC7] rounded-full">
          <RotateCcw size={20} />
          <span>Re-run Scan</span>
        </button>
      </div>

      <div className="grid grid-cols-12 gap-6 mb-6">
        <div className="col-span-4 bg-white rounded-xl border border-[#C3C5D9] p-8">
          <div className="flex justify-center">
            <h4 className="uppercase text-[#737688] text-sm font-semibold">
              Network Health
            </h4>
          </div>
          <div className="my-6">
            <div className="relative h-40 flex justify-center items-center">
              <GaugeComponent
                type="radial"
                minValue={0}
                maxValue={360}
                startAngle={-180}
                endAngle={180}
                arc={{
                  width: 0.18,
                  cornerRadius: 0,
                  subArcs: [{ color: "#003EC7" }],
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

              <div className="absolute flex flex-col items-center">
                <span className="font-bold text-5xl">79</span>
                <span className=" text-sm  text-[#737688]">/ 100</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center mb-6">
            <div className="flex text-[#005569] pl-2.5 pr-4 py-2 rounded-full bg-[#006F891A] w-fit items-center">
              <Dot size={20} strokeWidth={6} />
              <span className="text-sm font-semibold">Overall: Good</span>
            </div>
          </div>

          <div className="flex justify-center">
            <p className="text-xs text-[#5C5E65] text-center">
              Your connection is currently stable. A minor latency spike was
              detected in the last hour.
            </p>
          </div>
        </div>

        <div className="col-span-8 bg-white rounded-xl border border-[#C3C5D9] p-8">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold">Smart Recommendations</h1>
          </div>
          <div className="grid grid-cols-6 gap-6 mb-6">

            <div className="col-span-3 border border-[#C3C5D94D] bg-[#EFF4FF] rounded-xl p-6">
              <div className="p-3 rounded-xl bg-[#003EC71A] w-fit mb-4">
                <RouterIcon color="#003EC7" />
              </div>
              <div className="py-2">
                <h4 className="text-sm mb-2">Firmware Update Available</h4>
                <p className="text-[#5C5E65] text-xs">
                  A new security patch is available for your router. Updating
                  will improve stability.
                </p>
              </div>
            </div>
            <div className="col-span-3 border border-[#C3C5D94D] bg-[#EFF4FF] rounded-xl p-6">
              <div className="p-3 rounded-xl bg-[#0055691A] w-fit mb-4">
                <RouterIcon color="#005569" />
              </div>
              <div className="py-2">
                <h4 className="text-sm mb-2">Optimize CHannel</h4>
                <p className="text-[#5C5E65] text-xs">
                  Switching to 5GHz Channel 48 might reduce interference from
                  neighbors.
                </p>
              </div>
            </div>

            
          </div>

          <div className="flex p-4 bg-[#003EC7] rounded-xl text-white justify-between">
            <div className="flex gap-3 items-center">
              <CircleAlert size={20} />
              <p>
                Premium users get 24/7 dedicated monitoring.
                <span className="underline">Upgrade now</span>
              </p>
            </div>
            <X />
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-[#C3C5D9] bg-white mb-6">
        {/* top */}
        <div className="bg-[#EFF4FF80] p-6 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-semibold">All Diagnostics Results</h2>
          </div>
          <div className="flex gap-4 ">
            <div className="flex items-center">
              <Dot color="#22C55E" strokeWidth={5} />
              <span className="text-[#737688] text-xs">Pass</span>
            </div>
            <div className="flex items-center">
              <Dot color="#F59E0B" strokeWidth={5} />
              <span className="text-[#737688] text-xs">Warning</span>
            </div>
          </div>
        </div>

        {/* result */}
        <div>
          {results.map((result, index) => (
            <div
              key={index}
              className="grid grid-cols-[250px_1fr_300px_100px] items-center gap-4 border-t border-[#C3C5D9] px-16 py-6"
            >
              <div className="flex items-center gap-4">
                <div className="flex p-2 items-center text-[#003EC7] justify-center rounded-full bg-[#E5EEFF]">
                  {result.icon}
                </div>

                <div className="font-semibold text-[#15263D]">
                  {result.name}
                </div>
              </div>

              <div className="text-xs text-[#5C5E65]">{result.info}</div>

              <div>{result.status}</div>

              <div className="font-semibold text-sm text-[#003EC7]">
                {result.detail}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-4 rounded-xl border border-[#C3C5D9] bg-white p-6">
          <h5 className="mb-4 text-base font-semibold">Hardware Info</h5>

          <table className="w-full">
            <tbody>
              <tr>
                <td className="pb-3 text-xs text-[#5C5E65]">Model</td>
                <td className="pb-3 text-right text-xs font-medium text-[#0B1C30]">
                  Nokia G-2425G-A
                </td>
              </tr>

              <tr className="">
                <td className="pb-3 text-xs text-[#737688]">Uptime</td>
                <td className="pb-3 text-right text-xs font-medium text-[#15263D]">
                  14 days, 2h 11m
                </td>
              </tr>

              <tr className="">
                <td className="pb-3 text-xs text-[#737688]">CPU Load</td>
                <td className="pb-3 text-right text-xs font-medium text-[#15263D]">
                  12%
                </td>
              </tr>

              <tr>
                <td className=" text-xs text-[#737688]">Temperature</td>
                <td className=" text-right text-xs font-medium text-[#15263D]">
                  42°C
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="col-span-4 rounded-xl border border-[#C3C5D9] bg-white p-6">
          <div className="mb-4">
            <h4 className="text-sm font-semibold">Connected Devices</h4>
          </div>
          <div className="mb-10">
            <p>5 Active Devices</p>
          </div>
          <button className="text-[#003EC7] bg-[#E5EEFF] rounded-lg w-full p-2">
            Manage Network
          </button>
        </div>

        <div className="col-span-4 rounded-xl border border-[#C3C5D9] bg-[#003EC7] p-6">
          <p className="text-white text-sm font-semibold mb-2">
            Need Professional help?
          </p>
          <p className="text-[#FFFFFFCC] text-xs mb-6">
            Our engineers can remotely optimize your router settings for gaming
            or streaming.
          </p>
          <button className="rounded-lg text-xs  font-semibold bg-white text-[#003EC7] px-4 py-2">
            Chat with Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default SlowSpeedPage;
