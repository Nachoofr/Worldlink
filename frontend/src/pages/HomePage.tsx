import GaugeComponent from "react-gauge-component";

import ReferBanner from "../components/ReferBanner";

import {
 
  ArrowUpFromLine,
  
  Dot,
  NotepadText,
  Power,
  Rocket,
  ShieldCheck,
  Square,
  Zap,
} from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";
import offer1 from "../assets/o1.jpg";
import offer2 from "../assets/o2.jpg";
import offer3 from "../assets/o3.jpg";
import { useNavigate } from "react-router";

const HomePage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"7" | "30">("7");

  const weeklyData = [
    { day: "Mon", upload: 30, download: 80 },
    { day: "Tue", upload: 50, download: 150 },
    { day: "Wed", upload: 40, download: 110 },
    { day: "Thu", upload: 20, download: 55 },
    { day: "Fri", upload: 15, download: 45 },
    { day: "Sat", upload: 30, download: 80 },
  ];

  const monthlyData = [
    { day: "W1", upload: 120, download: 340 },
    { day: "W2", upload: 140, download: 410 },
    { day: "W3", upload: 95, download: 280 },
    { day: "W4", upload: 110, download: 310 },
  ];

  const currentData = activeTab === "7" ? weeklyData : monthlyData;

  return (
    <>
      <div className="bg-[#F8F9FC] p-4 md:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-12 gap-6">
          {/* Live Network Status Card */}
          <div className="col-span-12 bg-white rounded-xl shadow-md p-6 lg:p-8 text-[#424751] flex flex-col lg:flex-row justify-between gap-8">
            <div>
              <div className="flex items-center pb-2">
                <Dot color="#22C55E" strokeWidth={6} />

                <h3 className=" text-[16px] font-normal">
                  Live Network Status
                </h3>
              </div>

              <p className="pb-2">Connect & Optimal</p>
              <p className="text-[#424751]">
                Your connection is performing at 98% efficiency. No outages
                reported in the Kathmandu Valley area.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 p-5 border border-[#C2C6D31A] rounded-xl text-center bg-[#FFFFFF80]">
                <p className="text-[#424751]">Latency</p>
                <span className="text-[#003D7C]">12ms</span>
              </div>
              <div className="flex-1 p-5 border border-[#C2C6D31A] rounded-xl text-center bg-[#FFFFFF80]">
                <p className="text-[#424751]">Uptime</p>
                <span className="text-[#003D7C]">24d 5h</span>
              </div>
            </div>
          </div>

          {/* current download speed */}
          <div className="col-span-12 md:col-span-6 xl:col-span-4 bg-[#FFFFFFB2] p-6 lg:p-8 rounded-lg shadow-md">
            <h3 className="text-[#444653] uppercase text-center text-base font-normal tracking-[0.8px] mb-4">
              Worldlink Diagnostic
            </h3>

            <div className=" relative h-32 flex justify-center items-center">
              <GaugeComponent
                value={245}
                type="radial"
                minValue={0}
                maxValue={360}
                startAngle={-180}
                endAngle={180}
                arc={{
                  width: 0.15,
                  padding: 0,
                  cornerRadius: 0,
                  // 0 -> 245 is colored blue; everything after that
                  // (245 -> 360) falls through to the gray subArc, so
                  // the ring is always a full circle, only the
                  // proportion up to the current value is blue.
                  subArcs: [
                    { limit: 245, color: "#003D7C" },
                    { color: "#E5E7EB" },
                  ],
                }}
                labels={{
                  valueLabel: {
                    formatTextValue: () => ``,
                  },
                  tickLabels: {
                    hideMinMax: true,
                  },
                }}
                pointer={{ hide: true }}
              />

              <div className="absolute flex flex-col items-center">
                <span className="text-2xl font-bold text-[#002D89]">245</span>
                <span className="text-xs text-[#444653]">Mbps</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="flex flex-col items-center bg-[#F5F3EF] rounded-lg py-2">
                <p className="text-[#444653]">Download</p>
                <span className="text-[#002D89] font-bold">245 Mbps</span>
              </div>
              <div className="flex flex-col items-center bg-[#F5F3EF] rounded-lg py-2">
                <p className="text-[#444653]">Ping</p>
                <span className="text-[#002D89] font-bold">32ms</span>
              </div>
              <div className="flex flex-col items-center bg-[#F5F3EF] rounded-lg py-2">
                <p className="text-[#444653]">Upload</p>
                <span className="text-[#002D89] font-bold">112 Mbps</span>
              </div>
              <div className="flex flex-col items-center bg-[#F5F3EF] rounded-lg py-2">
                <p className="text-[#444653]">Jitter</p>
                <span className="text-[#002D89] font-bold">12ms</span>
              </div>
            </div>

            <button className="mt-6 w-full flex items-center justify-center gap-2 bg-[#0C3D81] hover:bg-[#0a3369] text-white font-semibold tracking-wide py-2.5 rounded-lg transition-colors cursor-pointer" onClick={()=> navigate('/diagnostic')}>
              <Zap size={18} fill="white" />
              <span>Run Diagnostic</span>
            </button>
          </div>

          {/* active subscriptions */}
          <div className="col-span-12 md:col-span-6 xl:col-span-5 bg-white p-6 lg:p-8 flex flex-col rounded-lg shadow-md text-[#424751]">
            <div className="flex flex-col sm:flex-row justify-between gap-4 items-center">
              <div>
                <h3 className="uppercase text-[16px] tracking-wide">
                  Active Subscriptions
                </h3>
                <p className="text-[#003D7C] text-[16px]">
                  Fiber Advantage Plus
                </p>
              </div>

              <span className="bg-[#003D7C1A] text-[#003D7C] px-4 py-2 rounded-full">
                300 Mbps
              </span>
            </div>
            <div className="grid grid-cols-2 gap-y-4 mt-10 font-normal text-[16px]">
              <p>Billing Cycle</p>

              <p className="text-right">Monthly</p>

              <p>Next Renewal</p>

              <p className="text-right">Oct 24,2023</p>

              <p>Status</p>

              <p className="text-right text-[#16A34A]">Auto-pay Active</p>
            </div>
            <div className="bg-[#C2C6D31A] rounded-xl p-4 mt-14">
              <div className="flex flex-row gap-3">
                <div className="bg-[#003D7C] text-white rounded-lg py-3 px-2">
                  <ArrowUpFromLine size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0D1C2E]">
                    Upgrade Available
                  </h3>
                  <p className="text-sm text-[#424751]">
                    Switch to 1Gbps for just NPR 500 more.
                  </p>
                </div>
              </div>

              <button className="text-[#003D7C] bg-white mt-5 w-full rounded-lg border border-[#C2C6D34D] py-3 font-medium">
                Renew or Upgrade Plan
              </button>
            </div>
          </div>

          {/* speed test & refer*/}
          <div className="col-span-12 md:col-span-6 xl:col-span-3 flex flex-col gap-6">
            <div className="bg-white rounded-xl shadow-md p-6 lg:p-8">
              <p className="text-[#1E40AF] font-bold mb-6">Speed Test</p>
              <button className="bg-[#4251B6] w-full cursor-pointer text-white rounded-xl flex flex-row items-center justify-center gap-2 px-6 py-3">
                <Rocket size={20} fill="white" />
                <span>Start Test</span>
              </button>
            </div>
            <div className="flex-1">
              <ReferBanner />
            </div>
          </div>

          {/* WeeklyUsage */}
          <div className="col-span-12 lg:col-span-6 xl:col-span-8 bg-white rounded-xl shadow-md p-6 lg:p-8">
            <p className="text-[#424751] text-base uppercase tracking-widest mb-5">
              Weekly Usage (GB)
            </p>

            <div className="mb-5 flex gap-2 text-[#424751] text-xs">
              <button
                onClick={() => setActiveTab("7")}
                className={` cursor-pointer text-xs px-3 py-1  ${activeTab === "7" ? "bg-[#DCE9FF] text-[#0D1C2E] rounded-lg" : "bg-white  text-[#424751 ]"}`}
              >
                7 Days
              </button>
              <button
                onClick={() => setActiveTab("30")}
                className={`cursor-pointer text-xs px-3 py-1 ${activeTab === "30" ? "bg-[#DCE9FF] text-[#0D1C2E]  rounded-lg" : "bg-white  text-[#424751 ]"}`}
              >
                30 Days
              </button>
            </div>

            <div className="mb-5 flex justify-center gap-6 flex-wrap">
              <div className="flex flex-row gap-1">
                <Square fill="#4251B6" strokeWidth="0" />
                <span>Upload</span>
              </div>
              <div className="flex flex-row gap-1">
                <Square fill="#a0a8da" strokeWidth="0" />
                <span>Download</span>
              </div>
            </div>

            <div className="h-75 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={currentData}>
                  <CartesianGrid stroke="#ccc" vertical={false} />

                  <XAxis
                    dataKey="day"
                    axisLine={false}
                    tickLine={false}
                    style={{
                      fill: "#6B7280",
                      fontSize: 14,
                    }}
                  />

                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    style={{
                      fill: "#6B7280",
                      fontSize: 14,
                    }}
                  />

                  <Bar
                    dataKey="upload"
                    fill="#4251B6"
                    radius={[20, 20, 20, 20]}
                  />

                  <Bar
                    dataKey="download"
                    fill="#A0A8DA"
                    radius={[20, 20, 20, 20]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Latest Ticket */}
          <div className="col-span-12 lg:col-span-6 xl:col-span-4 bg-white rounded-xl shadow-md p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
              <div className="flex flex-row gap-1">
                <h3 className="font-bold text-[#1E40AF]">Latest Ticket</h3>
                <p className="text-[#1E40AF] font-bold">(0)</p>
              </div>
              <button
                className="bg-[#E67E22] rounded-lg text-white px-4 py-2 w-full sm:w-auto"
                onClick={() => navigate("/support/report-problem")}
              >
                Report Problem
              </button>
            </div>
            <div className="flex flex-col items-center mt-10 lg:mt-14">
              <div className="px-5 py-6  bg-[#F3F4F6] rounded-full text-[#9CA3AF]">
                <NotepadText size={42} />
              </div>

              <h3 className="mt-6 font-semibold">No Ticket Yet</h3>
              <p className="text-center text-[#6B7280] mt-3 max-w-sm">
                Facing issues with the internet? Report a problem if you need
                support.
              </p>
              <button className="uppercase mt-8 rounded-full bg-[#0C3D81] text-white py-3 px-8 w-full sm:w-auto">
                Chat with live agent
              </button>
            </div>
          </div>

          {/* AI Diagnostic */}
          {/* <div className="col-span-12 lg:col-span-6 xl:col-span-3 bg-white rounded-xl shadow-md p-6 lg:p-8">
            <div className="flex flex-col items-center mt-4">
              <div className="p-6 bg-[#F3F4F6] text-[#003D7C] rounded-full">
                <BrainCog size={40} />
              </div>
              <h3 className="font-medium mt-4 text-[16px]">AI Diagnostic</h3>
              <p className="mt-4 text-[#424751] text-center text-[14px]">
                WorldLink AI has scanned your hardware. No bottlenecks detected.
              </p>
              <div className="mt-6 px-4 py-2 text-[12px] text-center bg-[#F0FDF4] text-[#16A34A] w-full">
                Signal Strength: Excellent
              </div>
              <div className="mt-3 px-4 py-2 text-[12px] text-center bg-[#EFF6FF] text-[#2563EB] w-full">
                Router Heat: Normal
              </div>

              <button className="mt-12 text-[#003D7C] text-[16px] items-center flex flex-row gap-2 cursor-pointer">
                <span>Run Full Scan</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div> */}

          {/* connected devices */}

          <div className="col-span-12 md:col-span-8 lg:col-span-8 xl:col-span-9 bg-white rounded-xl shadow-md p-8 flex lg:flex-row flex-col justify-between items-center">
            <div className="flex items-center px-8 lg:px-8 xl:px-18 ">
              <p className="uppercase text-[#757684] text-base">
                Connected Devices
              </p>
            </div>

            <div className="flex flex-col items-center gap-1 px-8 lg:px-8 xl:px-18 ">
              <p className="uppercase text-[#757684] text-base">
                Security Status
              </p>
              <p className="flex flex-row text-[#10B981] text-base font-semibold">
                <ShieldCheck />
                <span>Firewall Active</span>
              </p>
            </div>

            <div className="flex flex-col items-center gap-1 px-8 lg:px-8 xl:px-18">
              <p className="uppercase text-[#757684] text-base">IP Address</p>
              <span>192.168.1.104</span>
            </div>
          </div>

          {/* restart router */}
          <div className="col-span-12 md:col-span-4 lg:col-span-4 xl:col-span-3">
            <div className="bg-[#3F51B5] flex flex-col justify-center items-center p-6 rounded-xl">
              <Power size={65} className="text-white mb-3" />
              <button className="text-[#24389C] bg-white rounded-lg px-6 py-2 w-full sm:w-auto">
                Restart Router
              </button>
            </div>
          </div>

          {/* exclusive offers */}
          <div className="col-span-12 ">
            <h3 className="text-xl font-normal mb-4">Exclusive Offers</h3>
            <div className="flex gap-4 overflow-x-auto snap-mandatory snap-x scroll-smooth pb-6">
              <div className="  snap-start shrink-0 w-full md:w-[70%] lg:w-[50%] xl:w-[33%]">
                <img
                  src={offer1}
                  alt="image-one"
                  className="rounded-2xl w-full object-cover h-52 sm:h-60 lg:h-64"
                />
              </div>

              <div className="  snap-start shrink-0 w-full md:w-[70%] lg:w-[50%] xl:w-[33%]">
                <img
                  src={offer2}
                  alt="image-two"
                  className="rounded-2xl w-full object-cover h-52 sm:h-60 lg:h-64"
                />
              </div>

              <div className="  snap-start shrink-0 w-full md:w-[70%] lg:w-[50%] xl:w-[33%]">
                <img
                  src={offer3}
                  alt="image-thress"
                  className="rounded-2xl w-full object-cover h-52 sm:h-60 lg:h-64"
                />
              </div>

              <div className="  snap-start shrink-0 w-full md:w-[70%] lg:w-[50%] xl:w-[33%]">
                <img
                  src={offer3}
                  alt="image-thress"
                  className="rounded-2xl w-full object-cover h-52 sm:h-60 lg:h-64"
                />
              </div>

              <div className="  snap-start shrink-0 w-full md:w-[70%] lg:w-[50%] xl:w-[33%]">
                <img
                  src={offer3}
                  alt="image-thress"
                  className="rounded-2xl w-full object-cover h-52 sm:h-60 lg:h-64"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
