import {
  ArrowRight,
  ChevronDown,
  History,
  Link2,
  Mail,
  MapPin,
  MapPinPen,
  MessageCircleQuestionMark,
  Phone,
  RouterIcon,
  Ticket,
  TriangleAlert,
  Zap,
} from "lucide-react";

import { useNavigate } from "react-router";

const SupportPage = () => {

  const navigate = useNavigate()

  return (
    <div className="bg-[#F8F9FC] p-4 md:p-6">
      {/* head customer support */}
      <div className="flex flex-row justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-semibold">Customer Support</h1>
          <p className="text-base text-[#454652]">
            How can we help you today with your WorldLink connection?
          </p>
        </div>
        <div>
          <button className="flex flex-row px-6 py-3 bg-[#EA580C] rounded-xl text-white gap-2 items-center" onClick={()=> navigate('/support/report-problem')}>
            <TriangleAlert size={26} />
            <span>Report Problem</span>
          </button>
        </div>
      </div>

      {/* 2 */}
      <div className="grid grid-cols-12 gap-6 mb-6">
        {/* latest ticket */}
        <div className="col-span-5 bg-white rounded-2xl shadow-md p-6 ">
          <div className="flex flex-row justify-between items-center mb-6">
            <div className="flex flex-row gap-2">
              <Ticket className="text-[#24389C]" size={22} />
              <p className="text-base font-semibold">Latest Ticket</p>
            </div>

            <p className="uppercase text-[#2B4088] bg-[#9CB0FF] py-1 px-3 text-[10px] rounded-2xl">
              In Progress
            </p>
          </div>

          <div className="flex flex-row gap-3 items-center mb-4">
            <span className="bg-[#EDEEF1] rounded-full p-2.5">
              {" "}
              <RouterIcon className="text-[#24389C]" />
            </span>
            <div>
              <p className="text-base font-bold">
                Issue: Intermittent Connection
              </p>
              <p className="text-[#454652] text-sm">Ticket ID: #WL-902421</p>
            </div>
          </div>

          <p className="text-[#454652] text-base tracking-wide mb-16">
            Our technical team is currently investigating the node in your area.
            Estimated resolution time is 2-4 hours.
          </p>
          <div className=" border-t border-[#C5C5D41A] pt-8">
            <button className="flex flex-row cursor-pointer text-[#24389C]  ">
              <span>View Full History</span>
              <ArrowRight />
            </button>
          </div>
        </div>

        {/* ticket history */}
        <div className="col-span-7 bg-white rounded-2xl shadow-md p-6">
          <div className="flex flex-row justify-between mb-6">
            <div className="flex flex-row gap-2">
              <History className="text-[#24389C]" />
              <p>Ticket History</p>
            </div>
            <button className="text-[#24389C] cursor-pointer text-base">
              View All
            </button>
          </div>
          <div className="flex flex-row justify-between items-center border-b border-[#C5C5D41A] py-3">
            <div>
              <p className="text-[#454652] text-xs">#WL-882103</p>
              <h4 className="text-base">Bandwidth Upgrade Request</h4>
              <p className="text-[#454652] text-xs">Oct 24,2023</p>
            </div>
            <div>
              <p className="text-[#4ADE80] text-[10px] uppercase bg-[#4ADE801A] px-3 py-1 rounded-2xl">
                Resolved
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center border-b border-[#C5C5D41A] py-3">
            <div>
              <p className="text-[#454652] text-xs">#WL-882103</p>
              <h4 className="text-base">Bandwidth Upgrade Request</h4>
              <p className="text-[#454652] text-xs">Oct 24,2023</p>
            </div>
            <div>
              <p className="text-[#2B4088] text-[10px] uppercase bg-[#9CB0FF] px-3 py-1 rounded-2xl">
                In Progress
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center py-3">
            <div>
              <p className="text-[#454652] text-xs">#WL-882103</p>
              <h4 className="text-base">Bandwidth Upgrade Request</h4>
              <p className="text-[#454652] text-xs">Oct 24,2023</p>
            </div>
            <div>
              <p className="text-[#4ADE80] text-[10px] uppercase bg-[#4ADE801A] px-3 py-1 rounded-2xl">
                Resolved
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3 */}
      <div className="grid grid-cols-12 gap-6 mb-6">
        <div className="col-span-12 flex flex-row items-center gap-2">
          <Zap className="text-[#24389C]" size={20} />
          <h4 className="text-base">Quick Requests</h4>
        </div>

        {/* location shift */}
        <div className="col-span-6 bg-white rounded-2xl shadow-md p-6">
          <div className="flex flex-row gap-4 items-center mb-4">
            <div className="bg-[#24389C1A] rounded-full p-4">
              <MapPinPen className="text-[#24389C]" size={22} />
            </div>

            <div>
              <h5 className="text-[#191C1E] text-base font-bold mb-1">
                Location Shift
              </h5>
              <p className="text-[#454652] text-sm">
                Moving to a new home? Request a connection transfer to your new
                address.
              </p>
            </div>
          </div>

          <button className="flex flex-row gap-2 items-center text-[#24389C]" onClick={()=> navigate('/support/location-shift')}>
            <span className="text-base">Request Now</span>
            <ArrowRight size={15} />
          </button>
      
        </div>

          {/* new connection */}
        <div className="col-span-6 bg-white rounded-2xl shadow-md p-6">
          <div className="flex flex-row gap-4 items-center mb-4">
            <div className="bg-[#24389C1A] rounded-full p-4">
              <Link2 className="text-[#24389C]" size={22} />
            </div>

            <div>
              <h5 className="text-[#191C1E] text-base font-bold mb-1">
                New Connection
              </h5>
              <p className="text-[#454652] text-sm">
                Add a secondary line or recommend WorldLink to a neighbor for
                exciting rewards.
              </p>
            </div>
          </div>

          <button className="flex flex-row gap-2 items-center text-[#24389C]" onClick={()=> navigate('/support/new-connection')}>
            <span className="text-base">Request Now</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </div>


          {/* 4 */}
      <div className="bg-white rounded-2xl shadow-md p-6 h-auto mb-6">
        <div className="flex flex-row gap-2 items-center mb-8">
          <MessageCircleQuestionMark className="text-[#24389C]" size={20} />
          <h3>Frequently Asked Questions</h3>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-6 py-4 mr-6 flex flex-row justify-between items-center border-b border-[#C5C5D41A]">
            <p className="text-base font-semibold">
              How do I restart my router remotely?
            </p>
            <ChevronDown size={12} strokeWidth={3} />
          </div>
          <div className="col-span-6 py-4 mr-6  flex flex-row justify-between items-center border-b border-[#C5C5D41A]">
            <p className="text-base font-semibold">
              How do I restart my router remotely?
            </p>
            <ChevronDown size={12} strokeWidth={3} />
          </div>
          <div className="col-span-6 py-4 mr-6  flex flex-row justify-between items-center border-b border-[#C5C5D41A]">
            <p className="text-base font-semibold">
              How do I restart my router remotely?
            </p>
            <ChevronDown size={12} strokeWidth={3} />
          </div>
          <div className="col-span-6 py-4 mr-6  flex flex-row justify-between items-center border-b border-[#C5C5D41A]">
            <p className="text-base font-semibold">
              How do I restart my router remotely?
            </p>
            <ChevronDown size={12} strokeWidth={3} />
          </div>
        </div>
      </div>

      {/* 5 */}
      <div className="grid grid-cols-12 gap-6 mx-10">
        {/* phone */}
        <div className="col-span-4 bg-[#F2F3F6] rounded-2xl shadow-md p-6">
          <div className="flex flex-row gap-4 items-center">
            <div className="bg-[#24389C1A] text-[#24389C] p-4 rounded-full">
              <Phone size={20} />
            </div>
            <div>
              <p className="text-[#757684] uppercase text-xs">Phone Support</p>
              <span className="text-base font-semibold">9801234567</span>
            </div>
          </div>
        </div>

        {/* email */}
        <div className="col-span-4 bg-[#F2F3F6] rounded-2xl shadow-md p-6">
          <div className="flex flex-row gap-4 items-center">
            <div className="bg-[#510CBA1A] text-[#510CBA] p-4 rounded-full">
              <Mail size={20} />
            </div>
            <div>
              <p className="text-[#757684] uppercase text-xs">Emila Inquiry</p>
              <span className="text-base font-semibold">
                support@worldlink.com
              </span>
            </div>
          </div>
        </div>
        {/* branch */}
        <div className="col-span-4 bg-[#F2F3F6] rounded-2xl shadow-md p-6">
          <div className="flex flex-row gap-4 items-center">
            <div className="bg-[#EA580C1A] text-[#EA580C] p-4 rounded-full">
              <MapPin size={20} />
            </div>
            <div>
              <p className="text-[#757684] uppercase text-xs">Branch Locator</p>
              <span className="text-base font-semibold">
                Find Nearest Office
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
