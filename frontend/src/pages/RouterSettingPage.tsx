import {
  CircleAlert,
  Eye,
  Pencil,
  Power,
  QrCode,
  Radio,
  ToggleRight,
  Wifi,
  WifiIcon,
} from "lucide-react";
import { useState } from "react";

const RouterSettingPage = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="bg-[#F8F9FC] p-4 md:p-6">
      <div className="mb-2">
        <h1 className="text-[#24389C] text-4xl font-bold tracking-wide mb-2">
          Router Settings
        </h1>
        <p className="text-[#454652] text-sm">
          Network Hardware &gt;{" "}
          <span className="text-[#24389C]">Nokia G-2425G-A</span>
        </p>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-7 flex flex-col gap-6">
          {/* band steering */}
          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-row justify-between items-center">
            <div className="flex flex-row gap-4 items-center">
              <div className="p-2 bg-[#3F51B51A] text-[#3F51B5] rounded-xl">
                <Radio />
              </div>
              <p className="text-base font-semibold">Band Steering</p>
            </div>

            <div className="relative inline-block w-12 h-6">
              <input
                id="toggle"
                type="checkbox"
                checked={enabled}
                onChange={(e) => setEnabled(e.target.checked)}
                className="sr-only"
              />

              <label
                htmlFor="toggle"
                className={`absolute inset-0 cursor-pointer rounded-full transition-colors duration-200 ${
                  enabled ? "bg-[#24389C1A]" : "bg-[#E1E2E5]"
                }`}
              >
                <span
                  className={`
        absolute
        left-0.75
        bottom-0.75
        h-4.5
        w-4.5
        rounded-full
        transition-all
        duration-300
        ${enabled ? "translate-x-6 bg-[#24389C]" : "translate-x-0 bg-white"}
      `}
                />
              </label>
            </div>
          </div>

          {/* wifi configuration */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="flex flex-row justify-between items-center mb-6">
              <div className="flex flex-row items-center gap-3.5">
                <div className="p-2 bg-[#3F51B51A] text-[#3F51B5] rounded-xl">
                  <Wifi />
                </div>

                <p className="text-xl font-semibold">Wi-Fi Configuration</p>
              </div>

              <button className="text-[#24389C] text-xs font-semibold">
                Apply Changes
              </button>
            </div>

            <button className="px-8 py-3 bg-[#24389C] text-white rounded-xl shadow-md cursor-pointer mb-6">
              5 GHz
            </button>

            <div className="grid grid-cols-12 gap-x-6">
              <div className="col-span-6 flex flex-row justify-between items-center mb-2">
                <p className="text-[#454652] text-xs font-semibold">
                  Primary SSID Name
                </p>
                <CircleAlert size={12} className="text-[#454652]" />
              </div>
              <div className="col-span-6 flex flex-row justify-between items-center mb-2">
                <p className="text-[#454652] text-xs font-semibold">
                  Wi-Fi Password
                </p>
                <p className="text-[#16A34A] text-xs font-semibold">
                  WPA3 Secure
                </p>
              </div>

              <div className="col-span-6 bg-[#F2F3F6] border border-[#C5C5D44D] rounded-xl flex flex-row items-center justify-between px-4.5 py-3 mb-6">
                <input type="text" placeholder="WorldLink_Beom_5G" />
                <Pencil size={14} className="text-[#757684]" />
              </div>

              <div className="col-span-6 bg-[#F2F3F6] border border-[#C5C5D44D] rounded-xl flex flex-row items-center justify-between px-4.5 py-3 mb-6">
                <input type="password" placeholder="Password" />
                <Eye size={14} className="text-[#757684]" />
              </div>

              <div className="col-span-6 bg-[#F2F3F6] border border-[#C5C5D44D] rounded-xl flex flex-row items-center justify-between px-4.5 py-3 mb-6">
                <p>Hide SSID</p>
                <ToggleRight className="text-[#757684]" />
              </div>

              <div className="col-span-6 bg-[#F2F3F6] border border-[#C5C5D44D] rounded-xl flex flex-row items-center justify-between px-4.5 py-3 mb-6">
                <p>Enable Wi-Fi</p>
                <ToggleRight className="text-[#757684]" />
              </div>

              <div className="col-span-12 bg-[#F2F3F6] border border-[#C5C5D44D] rounded-xl flex flex-row items-center justify-between px-4.5 py-4 gap-3">
                <div>
                  <p className="text-[#454652] text-xs">Frequency</p>
                  <p className="text-base font-semibold">Dual 2.4/5GHz</p>
                </div>
                <div>
                  <p className="text-[#454652] text-xs">Channel</p>
                  <p className="text-base font-semibold">Auto (Ch 36)</p>
                </div>
                <div>
                  <p className="text-[#454652] text-xs">Bandwidth</p>
                  <p className="text-base font-semibold">80 MHz</p>
                </div>
                <div>
                  <p className="text-[#454652] text-xs">Security</p>
                  <p className="text-base font-semibold">WPA3-SAE</p>
                </div>
              </div>
            </div>
          </div>

          {/* about router */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <p className="text-base font-semibold mb-6">About Router</p>

            <div className="grid grid-cols-12 gap-6 p-4.5 bg-[#EDEEF1] rounded-xl">
              <div className="col-span-4">
                <p className="text-[#454652] text-xs font-semibold">Status</p>
                <p className="text-base font-semibold">Online</p>
              </div>

              <div className="col-span-4">
                <p className="text-[#454652] text-xs font-semibold">
                  Optical Signal Level
                </p>
                <p className="text-base font-semibold">-21 dbm</p>
              </div>

              <div className="col-span-4">
                <p className="text-[#454652] text-xs font-semibold">
                  Last Up Time
                </p>
                <p className="text-base font-semibold">8 days, 11 hours ago</p>
              </div>

              <div className="col-span-4">
                <p className="text-[#454652] text-xs font-semibold">
                  IP Address
                </p>
                <p className="text-base font-semibold">100.91.165.184</p>
              </div>

              <div className="col-span-4">
                <p className="text-[#454652] text-xs font-semibold">
                  Last Online
                </p>
                <p className="text-base font-semibold">WPA3-SAE</p>
              </div>

              <div className="col-span-4">
                <p className="text-[#454652] text-xs font-semibold">
                  US BER Counter
                </p>
                <p className="text-base font-semibold">216284</p>
              </div>

              <div className="col-span-4">
                <p className="text-[#454652] text-xs font-semibold">
                  DS BER Counter
                </p>
                <p className="text-base font-semibold">1</p>
              </div>

              <div className="col-span-4">
                <p className="text-[#454652] text-xs font-semibold">
                  Last Down Time
                </p>
                <p className="text-base font-semibold">---</p>
              </div>

              <div className="col-span-4">
                <p className="text-[#454652] text-xs font-semibold">
                  Last Down Cause
                </p>
                <p className="text-base font-semibold"></p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-5 flex flex-col gap-6">
          {/* restart router */}
          <div className="my-7 mx-17 bg-[#3F51B5] flex flex-col justify-center items-center p-6 rounded-xl">
            <Power size={65} className="text-white mb-3" />
            <button className="text-[#24389C] bg-white rounded-lg px-6 py-2">
              Restart Router
            </button>
          </div>

          {/* connected devices */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="flex flex-row gap-2 items-center pb-6 border-b-2 border-[#C5C5D41A]">
              <h5 className="text-xl font-semibold">Connected Devices</h5>
              <span className="text-[#24389C] bg-[#24389C1A] py-1 px-2 rounded-lg">
                4
              </span>
            </div>
            <div className="mt-6">
              <button className="py-3 border-2 border-[#BAC3FF] w-full rounded-xl text-[#24389C] font-semibold cursor-pointer">
                View All Devices
              </button>
            </div>
          </div>

          {/* black listed device */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="flex flex-row gap-2 items-center pb-6 border-b-2 border-[#C5C5D41A]">
              <h5 className="text-xl font-semibold">Blacklisted Devices</h5>
              <span className="text-[#24389C] bg-[#24389C1A] py-1 px-2 rounded-lg">
                2
              </span>
            </div>
            <div className="mt-6">
              <button className="py-3 border-2 border-[#BAC3FF] w-full rounded-xl text-[#24389C] font-semibold cursor-pointer">
                View All Devices
              </button>
            </div>
          </div>

          {/* scan to connect */}

          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-row items-center gap-6">
            <div className="border-2 border-[#C5C5D433] rounded-xl p-2 w-fit">
              <QrCode size={140} />
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-[#24389C] text-base font-semibold">
                Scan to Connect
              </p>
              <p className="text-[#454652] text-sm">
                Share your network easily with guests.
              </p>
              <div className="flex flex-row gap-2 items-center text-[#24389C] bg-[#24389C1A] px-4 py-2 rounded-full text-xs w-fit font-semibold">
                <WifiIcon size={16} />
                <p>WorldLink_Beom_5G</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouterSettingPage;
