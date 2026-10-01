import { useState } from "react";
import {
  Router,
  FileText,
  Gift,
  Settings,
  ChevronDown,
  Info,
} from "lucide-react";
import TimeRangePicker from "../../components/TimeRangePicker";

const Toggle = ({
  id,
  checked,
  onChange,
}: {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) => (
  <div className="relative inline-block w-12 h-6">
    <input
      id={id}
      type="checkbox"
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
      className="sr-only"
    />
    <label
      htmlFor={id}
      className={`absolute inset-0 cursor-pointer rounded-full transition-colors duration-200 ${
        checked ? "bg-[#24389C1A]" : "bg-[#E1E2E5]"
      }`}
    >
      <span
        className={`absolute left-0.75 bottom-0.75 h-4.5 w-4.5 rounded-full transition-all duration-300 ${
          checked ? "translate-x-6 bg-[#24389C]" : "translate-x-0 bg-white"
        }`}
      />
    </label>
  </div>
);

const NotificationSettingPage = () => {
  const [networkPush, setNetworkPush] = useState(false);
  const [networkEmail, setNetworkEmail] = useState(true);
  const [networkSms, setNetworkSms] = useState(false);

  const [billingPush, setBillingPush] = useState(false);
  const [billingEmail, setBillingEmail] = useState(true);
  const [billingSms, setBillingSms] = useState(false);

  const [offersPush, setOffersPush] = useState(false);
  const [offersEmail, setOffersEmail] = useState(false);
  const [offersSms, setOffersSms] = useState(false);

  const [systemPush, setSystemPush] = useState(true);
  const [systemEmail, setSystemEmail] = useState(false);
  const [systemSms, setSystemSms] = useState(false);

  const [quietHours, setQuietHours] = useState(true);

   const [quietHoursStart, setQuietHoursStart] = useState("22:00");
  const [quietHoursEnd, setQuietHoursEnd] = useState("07:00");


  return (
    <div className="bg-[#F8F9FC] p-4 md:p-6">
      <div className="mb-6">
        <h1 className="text-[#191C1E] text-4xl font-semibold tracking-tight mb-1">
          Notification Settings
        </h1>
        <p className="text-[#454652] text-base">
          Manage how and when you receive updates from WorldLink.
        </p>
      </div>

      <div className="border border-[#C5C5D4] rounded-xl mb-6 overflow-hidden">
        <div className="py-4 px-6 border-b border-[#C5C5D4] bg-[#F6F3F2]">
          <span className="uppercase text-[#24389C] text-sm font-semibold tracking-wide">
            Channel Preferences
          </span>
        </div>

        {/* table header */}
        <div className="grid grid-cols-[1fr_160px_160px_160px] items-center px-8 py-4 bg-[#F6F3F280]">
          <span className="text-[#454652] text-sm">Category</span>
          <span className="text-[#454652] text-sm text-center">Push</span>
          <span className="text-[#454652] text-sm text-center">Email</span>
          <span className="text-[#454652] text-sm text-center">SMS</span>
        </div>

        {/* network */}
        <div className="grid grid-cols-[1fr_160px_160px_160px] items-center px-8 py-6 border-b border-[#C5C5D44D] bg-white">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#FCE9E7] flex items-center justify-center shrink-0">
              <Router className="w-4 h-4 text-[#D64545]" />
            </div>
            <div>
              <p className="text-[#191C1E] text-sm font-semibold">
                Network Alerts
              </p>
              <p className="text-[#8A8C99] text-xs">
                Maintenance, outages, speed boosters
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <Toggle
              id="network-push"
              checked={networkPush}
              onChange={setNetworkPush}
            />
          </div>
          <div className="flex justify-center">
            <Toggle
              id="network-email"
              checked={networkEmail}
              onChange={setNetworkEmail}
            />
          </div>
          <div className="flex justify-center">
            <Toggle
              id="network-sms"
              checked={networkSms}
              onChange={setNetworkSms}
            />
          </div>
        </div>

        {/* billing */}
        <div className="grid grid-cols-[1fr_160px_160px_160px] items-center px-8 py-6 border-b border-[#EDEDF2] bg-white">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#E4E7F5] flex items-center justify-center shrink-0">
              <FileText className="w-4 h-4 text-[#24389C]" />
            </div>
            <div>
              <p className="text-[#191C1E] text-sm font-semibold">
                Billing & Account
              </p>
              <p className="text-[#8A8C99] text-xs">
                Payments, invoices, plan changes
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <Toggle
              id="billing-push"
              checked={billingPush}
              onChange={setBillingPush}
            />
          </div>
          <div className="flex justify-center">
            <Toggle
              id="billing-email"
              checked={billingEmail}
              onChange={setBillingEmail}
            />
          </div>
          <div className="flex justify-center">
            <Toggle
              id="billing-sms"
              checked={billingSms}
              onChange={setBillingSms}
            />
          </div>
        </div>

        {/* exclusive */}
        <div className="grid grid-cols-[1fr_160px_160px_160px] items-center px-8 py-6 border-b border-[#EDEDF2] bg-white">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#EDEEF3] flex items-center justify-center shrink-0">
              <Gift className="w-4 h-4 text-[#454652]" />
            </div>
            <div>
              <p className="text-[#191C1E] text-sm font-semibold">
                Exclusive Offers
              </p>
              <p className="text-[#8A8C99] text-xs">
                Upgrades, partner discounts, rewards
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <Toggle
              id="offers-push"
              checked={offersPush}
              onChange={setOffersPush}
            />
          </div>
          <div className="flex justify-center">
            <Toggle
              id="offers-email"
              checked={offersEmail}
              onChange={setOffersEmail}
            />
          </div>
          <div className="flex justify-center">
            <Toggle
              id="offers-sms"
              checked={offersSms}
              onChange={setOffersSms}
            />
          </div>
        </div>

        {/* system */}
        <div className="grid grid-cols-[1fr_160px_160px_160px] items-center px-8 py-6 bg-white">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#E4E7F5] flex items-center justify-center shrink-0">
              <Settings className="w-4 h-4 text-[#24389C]" />
            </div>
            <div>
              <p className="text-[#191C1E] text-sm font-semibold">
                System Updates
              </p>
              <p className="text-[#8A8C99] text-xs">
                New features, security patches, firmware
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <Toggle
              id="system-push"
              checked={systemPush}
              onChange={setSystemPush}
            />
          </div>
          <div className="flex justify-center">
            <Toggle
              id="system-email"
              checked={systemEmail}
              onChange={setSystemEmail}
            />
          </div>
          <div className="flex justify-center">
            <Toggle
              id="system-sms"
              checked={systemSms}
              onChange={setSystemSms}
            />
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* quiet hours */}
        <div className="border border-[#C5C5D4] rounded-xl bg-white p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[#191C1E] text-2xl font-semibold">
              Quiet Hours
            </h2>
            <Toggle
              id="quiet-hours"
              checked={quietHours}
              onChange={setQuietHours}
            />
          </div>
          <p className="text-[#454652] text-sm mb-6 leading-relaxed">
            Disable non-critical alerts during your rest time. High-priority
            network outages will still be delivered.
          </p>

          {/* <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[#454652] text-sm mb-2">
                Start Time
              </label>
              <div className="relative">
                <input
                  type="text"
                  defaultValue="10:00 PM"
                  className="w-full px-3 py-2.5 rounded-lg border border-[#C5C5D4] text-[#191C1E] text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#24389C]/30"
                />
                <Moon className="w-4 h-4 text-[#8A8C99] absolute right-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>
            <div>
              <label className="block text-[#454652] text-sm mb-2">
                End Time
              </label>
              <div className="relative">
                <input
                  type="text"
                  defaultValue="07:00 AM"
                  className="w-full px-3 py-2.5 rounded-lg border border-[#C5C5D4] text-[#191C1E] text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#24389C]/30"
                />
                <Sun className="w-4 h-4 text-[#8A8C99] absolute right-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>
          </div> */}
           <div>
      <h2 className="text-lg font-semibold mb-4">Quiet Hours</h2>
      <TimeRangePicker
        startTime={quietHoursStart}
        endTime={quietHoursEnd}
        onStartTimeChange={setQuietHoursStart}
        onEndTimeChange={setQuietHoursEnd}
      />
    </div>




        </div>

        {/* frequency limits */}
        <div className="border border-[#C5C5D4] rounded-xl bg-white p-6">
          <h2 className="text-[#191C1E] text-2xl font-semibold mb-4">
            Frequency Limits
          </h2>
          <p className="text-[#454652] text-sm mb-6 leading-relaxed">
            Control the noise level for marketing and system insights.
          </p>

          <label className="block text-[#454652] text-xs mb-2">
            Marketing messages per week
          </label>
          <div className="relative mb-6">
            <select className="w-full appearance-none px-3 py-2.5 rounded-lg border border-[#C5C5D4] text-[#191C1E] text-sm bg-[#F6F3F2] focus:outline-none">
              <option>Maximum 3 messages</option>
              <option>Maximum 5 messages</option>
              <option>Maximum 10 messages</option>
              <option>No limit</option>
            </select>
            <ChevronDown className="w-4 h-4 text-[#454652] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          <div className="flex gap-3 p-4 rounded-lg bg-[#96A5FF1A]">
            <Info className="w-4 h-4 text-[#4858AB] shrink-0 mt-1 " />
            <p className="text-[#27378A] text-sm leading-relaxed">
              Setting a lower limit may cause you to miss some time-sensitive
              partner discounts.
            </p>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="border-t border-[#C5C5D4] pt-6 flex justify-end gap-4">
        <button className="px-5 py-2.5 rounded-lg border border-[#24389C] text-[#24389C] text-sm font-semibold ">
          Reset to Default
        </button>
        <button className="px-5 py-2.5 rounded-lg bg-[#3F51B5] text-white text-sm font-semibold">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default NotificationSettingPage;
