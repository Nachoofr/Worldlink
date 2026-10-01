import { useNavigate } from "react-router";
import Profile from "../assets/icon/profile-icon.png";
import { Bell, LogOut, Menu, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { getUser } from "../api/user.api";

type HeaderProps = {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type User = {
  id: number;
  name: string;
  userName: string;
  email: string;
};

const Header = ({ sidebarOpen, setSidebarOpen }: HeaderProps) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getUser();
        // console.log("data:",data)

        setUser(data.result);
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");

    if (!confirmLogout) {
      return;
    }

    localStorage.removeItem("token");
    localStorage.clear();

    navigate("/login");
  };

  return (
    <header className="fixed top-0 left-0 right-0 lg:left-64 z-50 bg-[#F8F9FC] px-4 md:px-6 py-4 shadow-xs">
      <div className="flex items-center justify-between gap-4">
        {/* Left */}
        <div className="flex items-center gap-3">
          <button
            className="lg:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3 md:gap-5 flex-1 justify-end">
          {/* Search */}
          <div className="hidden md:flex items-center bg-[#E7E8EB] rounded-full px-4 py-2 w-full max-w-sm">
            <input
              type="text"
              placeholder="Search devices or settings..."
              className="flex-1 bg-transparent outline-none text-sm placeholder:text-sm"
            />
            <Search size={18} className="text-[#757684]" />
          </div>

          {/* Search Icon */}
          <button className="md:hidden">
            <Search size={20} />
          </button>

          {/* Notification */}
          <button onClick={() => navigate("notification")}>
            <Bell size={22} fill="#454652" className="text-[#454652]" />
          </button>

          {/* User */}
          <div className="flex items-center gap-2 md:gap-3">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => navigate("profile")}
            >
              <p className="hidden lg:block text-xs font-semibold whitespace-nowrap">
                {user?.userName}
              </p>

              <img
                src={Profile}
                alt="Profile"
                className="w-9 h-9 rounded-full object-cover"
              />
            </div>

            <button className="" onClick={handleLogout}>
              <LogOut
                size={24}
                className="text-[#24389C] cursor-pointer"
                strokeWidth={3}
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
