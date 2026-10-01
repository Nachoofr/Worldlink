import { CircleCheck, Gauge, Wallet, WifiOff, Zap } from "lucide-react";
import { useNavigate } from "react-router";

const DiagnosticPage = () => {
    const navigate = useNavigate()
  return (
    <div className="bg-[#F8F9FC] p-4 md:p-6">
      <div className="bg-linear-to-r from-[#24389CCC] via-[#24389C66] to-[#24389C00] px-12 py-22 rounded-2xl mb-6">
        <div className="w-138">
          <h3 className="text-white text-3xl font-semibold mb-4">
            How can we help your network today?
          </h3>
          <p className="text-white text-base mb-8 ">
            Real-time monitoring and advanced troubleshooting at your
            fingertips. Run a comprehensive scan or select a specific area to
            investigate.
          </p>
        </div>

        <button className="mt-6 flex items-center justify-center gap-2 bg-white hover:bg-[#d6e4f5] text-[#24389C] font-semibold tracking-wide py-4 px-8 rounded-lg transition-colors cursor-pointer w-fit">
          <Zap size={18} fill="#24389C" />
          <span>Run Full System Scan</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* no internet */}
        <div className="col-span-3 bg-white rounded-2xl border border-[#C5C5D44D] shadow-md p-6">
          <div className="p-3 rounded-xl bg-[#FFDAD6] mb-4 w-fit">
            <WifiOff color="#93000A" />
          </div>
          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-2">No Internet</h4>
            <p className="text-sm font-normal text-[#454652]">
              Total connectivity loss? We'll check your gateway, DNS, and local
              signal path.
            </p>
          </div>

          <div className="flex flex-col gap-3 mb-8">
            <div className="flex gap-2 items-center">
              <CircleCheck color="#454652CC" size={15} />
              <span className="text-[#454652CC] text-sm">
                Check Connectivity
              </span>
            </div>
            <div className="flex gap-2 items-center">
              <CircleCheck color="#454652CC" size={15} />
              <span className="text-[#454652CC] text-sm">
                DNS & Gateway Status
              </span>
            </div>
            <div className="flex gap-2 items-center">
              <CircleCheck color="#454652CC" size={15} />
              <span className="text-[#454652CC] text-sm">
                Packet Loss Analysis
              </span>
            </div>
          </div>

          <button className="text-[#24389C] border border-[#24389C] rounded-lg p-2 w-full cursor-pointer hover:bg-[#f5f7ff]" onClick={()=> navigate('/diagnostic/no-internet')}>
            Start Troublshooting
          </button>
        </div>

        {/* slow net */}
        <div className="col-span-3 bg-white rounded-2xl border border-[#C5C5D44D] shadow-md p-6">
          <div className="p-3 rounded-xl bg-[#9CB0FF] mb-4 w-fit">
            <Gauge color="#2B4088" />
          </div>
          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-2">Slow Internet</h4>
            <p className="text-sm font-normal text-[#454652]">
              Experience lag or buffering? Latency and jitter testing for gaming
              and streaming.
            </p>
          </div>

          <div className="flex flex-col gap-3 mb-8">
            <div className="flex gap-2 items-center">
              <CircleCheck color="#454652CC" size={15} />
              <span className="text-[#454652CC] text-sm">Jitter & Latency</span>
            </div>
            <div className="flex gap-2 items-center">
              <CircleCheck color="#454652CC" size={15} />
              <span className="text-[#454652CC] text-sm">
                Gaming Optimization
              </span>
            </div>
            <div className="flex gap-2 items-center">
              <CircleCheck color="#454652CC" size={15} />
              <span className="text-[#454652CC] text-sm">
                Advanced Site Tests
              </span>
            </div>
          </div>

          <button className="text-[#24389C] border border-[#24389C] rounded-lg p-2 w-full hover:bg-[#f5f7ff] cursor-pointer" onClick={()=> navigate('/diagnostic/slow-speed')}>
            Start Troublshooting
          </button>
        </div>

        {/* account status */}
        <div className="col-span-3 bg-white rounded-2xl border border-[#C5C5D44D] shadow-md p-6">
          <div className="p-3 rounded-xl bg-[#3F51B533] mb-4 w-fit">
            <Wallet color="#24389C" />
          </div>
          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-2">Account Status</h4>
            <p className="text-sm font-normal text-[#454652]">
              Verify your subscription, recent payments, and any service
              interruptions.
            </p>
          </div>

          <div className="flex flex-col gap-3 mb-8">
            <div className="flex gap-2 items-center">
              <CircleCheck color="#454652CC" size={15} />
              <span className="text-[#454652CC] text-sm">
                Billing & Payments
              </span>
            </div>
            <div className="flex gap-2 items-center">
              <CircleCheck color="#454652CC" size={15} />
              <span className="text-[#454652CC] text-sm">Expiry Date</span>
            </div>
            <div className="flex gap-2 items-center">
              <CircleCheck color="#454652CC" size={15} />
              <span className="text-[#454652CC] text-sm">Grace Period</span>
            </div>
          </div>

          <button className="text-[#24389C] border border-[#24389C] rounded-lg p-2 w-full hover:bg-[#f5f7ff] cursor-pointer" onClick={()=> navigate('/diagnostic/account')}>
            Check Account
          </button>
        </div>

        {/* nettv */}
        <div className="col-span-3 bg-white rounded-2xl border border-[#C5C5D44D] shadow-md p-6">
          <div className="p-3 rounded-xl bg-[#E9DDFF] mb-4 w-fit">
            <WifiOff color="#5516BE" />
          </div>
          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-2">NetTV / IPTV</h4>
            <p className="text-sm font-normal text-[#454652]">
              Signal drops on your TV? Let's check your STB status and streaming
              quality.
            </p>
          </div>

          <div className="flex flex-col gap-3 mb-8">
            <div className="flex gap-2 items-center">
              <CircleCheck color="#454652CC" size={15} />
              <span className="text-[#454652CC] text-sm">
                STB Connection
              </span>
            </div>
            <div className="flex gap-2 items-center">
              <CircleCheck color="#454652CC" size={15} />
              <span className="text-[#454652CC] text-sm">
                Channel Signal
              </span>
            </div>
            <div className="flex gap-2 items-center">
              <CircleCheck color="#454652CC" size={15} />
              <span className="text-[#454652CC] text-sm">
                Streaming Health
              </span>
            </div>
          </div>

          <button className="text-[#24389C] border border-[#24389C] rounded-lg p-2 w-full hover:bg-[#f5f7ff] cursor-pointer" onClick={()=> navigate('/diagnostic/nettv-status')}>
            Check Service
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiagnosticPage;
