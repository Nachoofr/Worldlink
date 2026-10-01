import { useState } from "react";
import {
  AlertTriangle,
  Tag,
  Info,
  FileText,
  Check,
  Settings,
  Headset,
} from "lucide-react";
import { useNavigate } from "react-router";

const tabs = ["All (12)", "Network Alerts", "Billing", "Offers", "System"];

const NotificationPage = () => {
  const [activeTab, setActiveTab] = useState("All (12)");

  const navigate = useNavigate()



  return (
    <div className="bg-[#F8F9FC] p-4 md:p-6">
     
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <div>
          <h1 className="text-[#191C1E] text-4xl font-bold tracking-tight mb-2">
            Notification Center
          </h1>
          <p className="text-[#454652] text-base">
            Stay updated with your network status, billing, and exclusive
            offers.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#24389C33] text-[#24389C] text-sm font-medium">
            <Check className="w-4 h-4" color="#24389C" />
            Mark all as read
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-[#454652] text-sm font-medium" onClick={()=> navigate('/notification/settings')}>
            <Settings className="w-4 h-4" />
            Notification Settings
          </button>
        </div>
      </div>

      {/* tabs */}
      <div className="flex items-center gap-8 border-b border-[#C5C5D4] mb-6 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 text-sm font-medium border-b-2 whitespace-nowrap transition-colors ${
              activeTab === tab
                ? "text-[#24389C] border-[#24389C]"
                : "text-[#454652] border-transparent hover:text-[#191C1E]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

    
      <div className="flex flex-col gap-4 mb-6">
        {/* billing success */}
        <div className="relative bg-white rounded-xl border border-[#C5C5D4] border-l-4 border-l-[#24389C] overflow-hidden flex">
          
          <div className="flex-1 flex gap-6 p-6">
            <div className="w-10 h-10 rounded-full bg-[#E4E7F5] flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5 text-[#24389C]" />
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between gap-4">
                <p className="text-[#191C1E] text-sm font-semibold">
                  Billing Success: Invoice #WL-2023-011
                </p>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs text-[#454652] whitespace-nowrap">
                    2 hours ago
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#24389C]" />
                </div>
              </div>
              <p className="text-[#454652] text-sm mt-1 leading-relaxed">
                Your payment for the month of November has been processed
                successfully. Your account balance is now $0.00. Thank you for
                choosing WorldLink.
              </p>
              <div className="flex items-center gap-4 mt-6">
                <button className="px-4 py-2 rounded-lg bg-[#24389C] text-white text-sm font-medium">
                  View Bill
                </button>
                <button className="text-[#454652] text-sm font-medium">
                  Archive
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* scheduled maintenance */}
        <div className="relative bg-white rounded-xl border border-[#E4E5EB] border-l-4 border-l-[#BA1A1A] overflow-hidden flex">
         
          <div className="flex-1 flex gap-6 p-6">
            <div className="w-10 h-10 rounded-full bg-[#FCE9E7] flex items-center justify-center shrink-0">
              <AlertTriangle className="w-5 h-5 text-[#D64545]" />
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between gap-4">
                <p className="text-[#191C1E] text-sm font-semibold">
                  Scheduled Maintenance Alert
                </p>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs text-[#454652] whitespace-nowrap">
                    5 hours ago
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#24389C]" />
                </div>
              </div>
              <p className="text-[#454652] text-sm mt-1 leading-relaxed">
                We will be performing scheduled network maintenance in your area
                tomorrow between 2:00 AM and 5:00 AM. You may experience brief
                intermittent connectivity during this window.
              </p>
              <div className="flex items-center gap-4 mt-6">
                <button className="px-4 py-2 rounded-lg border border-[#24389C] text-[#24389C] text-sm font-medium">
                  Run Diagnostic
                </button>
                <button className="text-[#454652] text-sm font-medium">
                  More Details
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* exclusive reward */}
        <div className="relative bg-[#F6F3F280] rounded-xl border border-[#E4E5EB] overflow-hidden flex">
          <div className="flex-1 flex gap-6 p-6">
            <div className="w-10 h-10 rounded-full bg-[#4F58851A] flex items-center justify-center shrink-0">
              <Tag className="w-5 h-5 text-[#454652]" />
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between gap-4">
                <p className="text-[#191C1E] text-sm font-semibold">
                  Exclusive Reward: Double Data Weekend
                </p>
                <span className="text-xs text-[#454652] whitespace-nowrap">
                  Yesterday
                </span>
              </div>
              <p className="text-[#454652] text-sm mt-1 leading-relaxed">
                Activate your Double Data Reward for the upcoming weekend at no
                extra cost. This is our way of saying thank you for being a
                loyal WorldLink customer.
              </p>
              <div className="flex items-center gap-4 mt-6">
                <button className="px-4 py-2 rounded-lg bg-[#24389C] text-white text-sm font-medium">
                  Claim Offer
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* wi-Fi scheduling */}
        <div className="relative bg-[#F6F3F280] rounded-xl border border-[#E4E5EB] overflow-hidden flex">
          <div className="flex-1 flex gap-6 p-6">
            <div className="w-10 h-10 rounded-full bg-[#4F58851A] flex items-center justify-center shrink-0">
              <Info className="w-5 h-5 text-[#454652]" />
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between gap-6">
                <p className="text-[#191C1E] text-sm font-semibold">
                  New Feature: Wi-Fi Scheduling
                </p>
                <span className="text-xs text-[#454652] whitespace-nowrap">
                  2 days ago
                </span>
              </div>
              <p className="text-[#454652] text-sm mt-1 leading-relaxed">
                You can now schedule when your Wi-Fi is active through the
                Router Settings page. Great for controlling evening usage!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*  banners */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-8 rounded-2xl bg-[#24389C] p-8 flex flex-col justify-center">
          <span className="inline-block w-fit px-3 py-1 rounded-full bg-white/20 text-[#CACFFF] text-xs font-semibold tracking-wide mb-4">
            UPGRADE HUB
          </span>
          <h2 className="text-[#CACFFF] text-3xl font-bold mb-3">Unleash Speeds</h2>
          <p className="text-[#CACFFF] text-base max-w-md mb-8 leading-relaxed">
            Upgrade your plan today and get a free premium router installation.
            Power your entire home with lightning-fast fiber connectivity.
          </p>
          <button className="w-fit px-5 py-3 rounded-xl bg-white text-[#24389C] text-base font-semibold">
            Check Availability
          </button>
        </div>

        <div className="md:col-span-4 rounded-2xl bg-[#EAE7E7] p-8 flex flex-col items-center justify-center text-center">
          <div className="p-6 rounded-xl bg-white flex items-center justify-center mb-4 shadow-sm">
            <Headset className="w-8 h-8 text-[#24389C]" />
          </div>
          <p className="text-[#191C1E] text-sm font-semibold mb-2">
            Need help?
          </p>
          <p className="text-[#454652] text-sm mb-6 max-w-55">
            Our experts are available 24/7 for network support.
          </p>
          <button className="text-[#24389C] text-sm font-semibold">
            Chat with Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationPage;
