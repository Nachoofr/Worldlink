import {
  ArrowRight,
  BadgeCheck,
  BanknoteCheck,
  CalendarDays,
  Download,
  Headset,
  PrinterCheck,
  RotateCcw,
  Timer,
  User,
} from "lucide-react";
import Navbar from "./Navbar";
import GaugeComponent from "react-gauge-component";

const AccountPage = () => {
  const transactions = [
    {
      id: "INV-88210",
      date: "May 01,2025",
      amount: "$45.00",
      status: "SUCCESS",
      action: <Download />,
    },
    {
      id: "INV-87592",
      date: "Jun 01,2025",
      amount: "$45.00",
      status: "SUCCESS",
      action: <Download />,
    },
    {
      id: "INV-86941",
      date: "July 01,2025",
      amount: "$45.00",
      status: "SUCCESS",
      action: <Download />,
    },
  ];

  return (
    <div className="bg-[#F8F9FC] p-4 md:p-6">
      <Navbar />

      <div className="flex my-8 items-center justify-between">
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold">Account Diagnostics</h2>
          <p className="text-[#5C5E65] text-base">
            Administrative health check and financial overview.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex gap-2 items-center text-[#454652] py-2.5 px-4.5 bg-white rounded-lg border border-[#C5C5D4]">
            <PrinterCheck size={20} />
            <span>Print Report</span>
          </button>
          <button className="flex gap-2 items-center text-white py-2.5 px-4.5 bg-[#24389C] rounded-lg">
            <RotateCcw size={20} />
            <span>Refresh Status</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* left */}
        <div className="col-span-4">
          <div className="bg-white rounded-2xl border border-[#C5C5D44D] p-6">
            <h5 className="text-[#454652] uppercase text-base tracking-wide text-center mt-2">
              Account Vitality
            </h5>

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
                    subArcs: [{ color: "#24389C" }],
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
                  <span className=" text-[#24389C] text-5xl">82</span>
                  <span className=" text-base text-[#454652]">Admin Score</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center py-1.5 px-3 bg-[#DCFCE7] rounded-full w-fit mb-3 mx-auto">
              <span className="uppercase text-[#166534] text-xs font-bold">
                Optimal Health
              </span>
            </div>
            <div className="text-center text-[#454652] px-3">
              <p className="text-sm">
                All administrative flags are cleared and active.
              </p>
            </div>
          </div>
        </div>

        {/* right1 */}
        <div className="col-span-4 flex flex-col gap-6">
          {/* 1 */}
          <div className="bg-white border border-[#C5C5D44D] p-6 flex gap-4 h-48 rounded-2xl">
            <div className="w-fit h-fit p-3 rounded-xl bg-[#24389C1A]">
              <User fill="#24389C" color="#24389C" />
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-base text-[#454652]">Account Status</p>
              <p className="text-xl font-semibold">Active</p>
              <div className="flex gap-1 items-center text-[#16A34A]">
                <BadgeCheck size={18} />
                <span className="text-xs">Identify Verified</span>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className="bg-white border border-[#C5C5D44D] p-6 flex gap-4 h-48 rounded-2xl">
            <div className="w-fit h-fit p-3 rounded-xl bg-[#24389C1A]">
              <CalendarDays color="#24389C" />
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-base text-[#454652]">Contract Expiry</p>
              <p className="text-xl font-semibold">Dec 31, 2026</p>
              <span className="text-xs">Auto-renewal enabled</span>
            </div>
          </div>
        </div>

        {/* right1 */}
        <div className="col-span-4 flex flex-col gap-6">
          {/* 1 */}
          <div className="bg-white border border-[#C5C5D44D] p-6 flex gap-4 h-48 rounded-2xl">
            <div className="w-fit h-fit p-3 rounded-xl bg-[#24389C1A]">
              <BanknoteCheck color="#24389C" />
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-base text-[#454652]">Billing Status</p>
              <p className="text-xl font-semibold">Paid</p>
              <span className="text-xs">Next invoice: July 01,2025</span>
            </div>
          </div>

          {/* 2 */}
          <div className="bg-white border border-[#C5C5D44D] p-6 flex gap-4 h-48 rounded-2xl">
            <div className="w-fit h-fit p-3 rounded-xl bg-[#24389C1A]">
              <Timer color="#24389C" />
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-base text-[#454652]">Grace Period</p>
              <p className="text-xl font-semibold">7 Days</p>
              <span className="text-xs">Available per billing cycle</span>
            </div>
          </div>
        </div>

        {/* transaction */}
        <div className="col-span-8 rounded-2xl bg-white border border-[#C5C5D44D]">
          <div className="flex justify-between p-6 ">
            <p className="text-base font-semibold">Recent Transactions</p>
            <button className="cursor-pointer text-[#24389C] text-base">
              View All
            </button>
          </div>

          <div className="px-10 py-6 text-base font-bold bg-[#F2F3F6] justify-between flex">
            <div>
              <span>INVOICE ID</span>
            </div>
            <div>
              <span>DATE</span>
            </div>
            <div>
              <span>AMOUNT</span>
            </div>
            <div>
              <span>STATUS</span>
            </div>
            <div>
              <span>ACTION</span>
            </div>
          </div>

          <div className="flex flex-col px-10 py-3">
            {transactions.map((list) => (
              <div key={list.id} className="flex justify-between pr-4 text-sm py-5 border-b border-[#C5C5D433]">
                <div className="font-semibold">{list.id}</div>
                <div>{list.date}</div>
                <div>{list.amount}</div>
                <div>{list.status}</div>
                <div>{list.action}</div>
              </div>
            ))}
          </div>
        </div>

        {/* instant pay */}
        <div className="col-span-4 p-6 bg-[#24389C] rounded-2xl">
          <div className="mb-8">
            <h5 className="text-white text-xl font-semibold mb-2">
              Instant Pay
            </h5>
            <p className="text-[#FFFFFFCC] text-base">
              Maintain your uninterrupted connectivity. Pay for the upcoming
              month today.
            </p>
          </div>
          <div className="bg-[#FFFFFF1A] flex flex-col gap-2 rounded-xl p-4 mb-8">
            <div className="flex justify-between text-[#FFFFFFCC] text-base">
              <span>Current Balance</span>
              <span>$0.00</span>
            </div>
            <div className="flex justify-between text-[#FFFFFFCC] text-base">
              <span>Next Invoice</span>
              <span>$45.00</span>
            </div>
          </div>

          <button className="text-[#24389C] flex gap-1 bg-white py-4 w-full rounded-xl items-center justify-center">
            <span>Pay Now</span>
            <ArrowRight size={20} />
          </button>
        </div>

        {/* assiatance */}
        <div className="col-span-12 bg-[#9CB0FF33] border border-[#9CB0FF66] rounded-2xl p-6 flex justify-between items-center ">
          <div className="flex gap-6 items-center">
            <div className="p-4 rounded-full  bg-[#9CB0FF] w-fit">
              <Headset color="#2B4088" />
            </div>

            <div className="max-w-150">
              <h4 className="text-[#2B4088] font-semibold text-base">
                Need Administrative Assistance?
              </h4>
              <p className="text-[#2B4088B2] text-sm">
                Our billing specialists are available 24/7 to resolve complex
                payment issues or update your account details.
              </p>
            </div>
          </div>

          <div className="gap-4 flex">
            <button className="text-[#24389C] text-base font-semibold bg-white rounded-xl border border-[#C5C5D4] py-3 px-6">
              <span>Chat with Agent</span>
            </button>
            <button className="text-white text-base font-semibold bg-[#24389C] rounded-xl border border-[#C5C5D4] py-3 px-6">
              <span>Open Ticket</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
