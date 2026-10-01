import { useState } from "react";
import ReferBanner from "../components/ReferBanner";
import {
  Filter,
  Download,
  SquareArrowOutUpRight,
  Eye,
  ChevronRight,
  ChevronLeft,
  CalendarSync,
  PlusCircle,
  CreditCard,
  ArrowRight,
} from "lucide-react";

const BillsPaymentPage = () => {
  const amountHistory = [
    ["Sep 28, 2023", "#WL-2023-0928", "NPR 4,850.00", "Paid"],
    ["Aug 28, 2023", "#WL-2023-0828", "NPR 4,850.00", "Paid"],
    ["Jul 28, 2023", "#WL-2023-0728", "NPR 5,200.00", "Paid"],
    ["Jun 28, 2023", "#WL-2023-0628", "NPR 4,850.00", "Failed"],
    ["May 28, 2023", "#WL-2023-0528", "NPR 4,850.00", "Paid"],
  ];

  const [enabled, setEnabled] = useState(false);

  return (
    <div className="bg-[#F8F9FC] p-4 md:p-6">
      <div className="flex flex-col gap-6">
        {/* 1 */}
        <div className="grid grid-cols-12 gap-6">
          {/* amount due */}
          <div className="col-span-7 flex bg-white rounded-xl shadow-sm px-8 py-16 justify-between items-center">
            <div>
              <p className="uppercase text-xs text-[#757684] font-semibold mb-2">
                Current Amount Due
              </p>
              <span className="text-[#24389C] text-4xl font-bold">
                NPR 4,850.00
              </span>
              <div className="flex flex-row mt-2 gap-4">
                <p className="bg-[#FFDAD6] text-[#93000A] text-xs px-4 py-1 rounded-2xl">
                  Due in 3 days
                </p>
                <p className="text-[#757684] text-sm font-normal">
                  Billing Period: Oct 01 - Oct 31
                </p>
              </div>
            </div>
            <div>
              <button className="bg-[#24389C] cursor-pointer text-white px-9 py-3 mb-4 rounded-xl font-semibold shadow-sm hover:bg-[#14288d] duration-200">
                Pay Now
              </button>
              <div className="flex flex-row gap-2 text-[#24389C] items-center justify-center">
                <Download size={12} />
                <button className="text-[#24389C] cursor-pointer text-xs text-center ">
                  Download Invoice
                </button>
              </div>
            </div>
          </div>

          {/* autopay status */}
          <div className="col-span-5 bg-white rounded-xl shadow-sm p-6 flex flex-col justify-between">
            <div className="flex flex-row justify-between">
              <div className="rounded-xl bg-[#9CB0FF33] w-12 h-12 flex items-center justify-center">
                <CalendarSync className="text-[#465AA3]" size={22} />
              </div>
              {/* Toggle  left to do*/}
              {/* <button className="w-12 h-7 rounded-full bg-[#3046C9]">
              </button> */}

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
        ${
          enabled
            ? "translate-x-6 bg-[#24389C]"
            : "translate-x-0 bg-white"
        }
      `}
                  />
                </label>
              </div>

              
            </div>
            <div className="my-4">
              <h4 className="text-xl font-semibold">Auto-pay Status</h4>
              <p className="text-[#757684] text-sm">
                Enabled for Visa ending in **4421. Your next payment will be
                processed automatically on Oct 24.
              </p>
            </div>

            <div className="flex flex-row items-center gap-2 text-sm text-[#24389C]">
              <button>Manage Auto-pay Settings</button>
              <span>
                <ArrowRight size={16} />
              </span>
            </div>
          </div>
        </div>

        {/* 2 */}
        <div className="grid grid-cols-12 gap-6">
          {/* saved payment */}
          <div className="col-span-8 bg-white rounded-xl shadow-sm p-6">
            <div className="flex flex-row justify-between mb-6">
              <h4 className="font-semibold text-lg">Saved Payment Methods</h4>
              <button className="flex items-center gap-2 cursor-pointer text-[#24389C] ">
                <PlusCircle size={18} />
                Add New
              </button>
            </div>
            <div className="flex flex-row justify-between">
              {/* visa */}
              <div className="flex flex-row gap-5 items-center justify-between border border-[#C5C5D44D] rounded-xl py-4.5 px-6">
                <span>
                  <CreditCard size={45} />
                </span>
                <div>
                  <p className="text-xs font-semibold tracking-wider">
                    Visa Signature
                  </p>
                  <p className="text-[#757684] text-sm tracking-wider">
                    •••• •••• •••• 4421
                  </p>
                </div>
                <div>
                  <p className="uppercase px-2 py-1 text-[10px] text-[#24389C] bg-[#24389C1A] ">
                    Primary
                  </p>

                  <p className="text-xs text-[#757684]">Exp: 09/26</p>
                </div>
              </div>

              {/* mastecard */}
              <div className="flex flex-row items-center gap-5 justify-between border border-[#C5C5D44D] rounded-xl py-4.5 px-6">
                <span>
                  <CreditCard size={45} />
                </span>
                <div>
                  <p className="text-xs font-semibold tracking-wider">
                    Mastercard Gold
                  </p>
                  <p className="text-[#757684] text-sm tracking-wider">
                    •••• •••• •••• 8802
                  </p>
                </div>
                <div>
                  <p className="text-xs text-[#757684]">Exp: 12/25</p>
                </div>
              </div>
            </div>
          </div>
          {/* refer and earn */}
          <div className="col-span-4">
            <ReferBanner />
          </div>
        </div>

        {/* 3 */}
        <div className="bg-white rounded-t-xl">
          <div className="flex justify-between items-center p-6 border-b-[#C5C5D41A]">
            <div>
              <h2 className="text-lg font-semibold">Billing History</h2>
              <p className="text-[#757684] text-[16px] mt-1">
                Showing transactions for the last 12 months
              </p>
            </div>
            <div className="flex flex-row gap-2">
              <button className="border border-gray-300 rounded-lg px-5 py-2 flex items-center gap-2">
                <Filter size={16} />
                Filter
              </button>
              <button className="border border-gray-300 rounded-lg px-5 py-2 flex items-center gap-2">
                <SquareArrowOutUpRight size={16} />
                Export
              </button>
            </div>
          </div>

          <table className="w-full">
            <thead>
              <tr className="uppercase bg-[#F2F3F6] text-[#757684] text-xs font-bold">
                <th className="text-left py-5 px-6">Date</th>
                <th className="text-left py-5 px-6">Invoice ID</th>
                <th className="text-left py-5 px-6">Amount</th>
                <th className="text-left py-5 px-6">Status</th>
                <th className="text-right py-5 px-6">Actions</th>
              </tr>
            </thead>

            <tbody>
              {amountHistory.map((item) => (
                <tr key={item[1]} className="border-t border-[#C5C5D41A]">
                  <td className="px-6 py-7">{item[0]}</td>
                  <td className="px-6 py-7 text-[#24389C]">{item[1]}</td>
                  <td className="px-6 py-7">{item[2]}</td>

                  <td className="px-8 py-7">
                    <span
                      className={`inline-flex items-right rounded-full px-3 py-1 text-sm font-medium ${
                        item[3] === "Paid"
                          ? "bg-[#DCFCE7] text-[#15803D]"
                          : "bg-[#FEE2E2] text-[#B91C1C]"
                      }`}
                    >
                      {item[3]}
                    </span>
                  </td>

                  <td className="px-8 py-7">
                    <div className="flex justify-end items-right gap-2">
                      {item[3] === "Failed" && (
                        <button className="border border-[#D8DCE8] rounded-lg px-4 py-2 text-[#3046C9] text-sm font-medium hover:bg-[#F5F7FF]">
                          Retry
                        </button>
                      )}

                      <button className="text-[#3046C9]">
                        <Eye size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="bg-[#F2F3F6] flex px-6 py-6 justify-between">
            <p className="text-[#757684] text-sm">Page 1 of 3</p>
            <div className="flex gap-2">
              <button className="w-9 h-9 flex justify-center items-center rounded-lg border border-[#D8DCE8] text-[#9CA3AF]">
                <ChevronLeft />
              </button>

              <button className="w-9 h-9 flex justify-center items-center rounded-lg border border-[#D8DCE8] text-[#3046C9]">
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillsPaymentPage;
