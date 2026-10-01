import Logo from "../assets/worldLinkLogo.png";
import { NavLink } from "react-router-dom";
import { X } from "lucide-react";

type SidebarProps = {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar = ({
  sidebarOpen,
  setSidebarOpen,
}: SidebarProps) => {
  const links = [
    { name: "Dashboard", path: "/" },
    { name: "My Plan", path: "/my-plan" },
    {
      name: "Bills & Payments",
      path: "/bills-and-payments",
    },
    { name: "Support", path: "/support" },
    {
      name: "Router Settings",
      path: "/router-settings",
    },
    { name: "Offers", path: "/offers" },
    { name: "Benefits", path: "/benefits" },
  ];

  return (
    <aside
      className={`fixed top-0 left-0 z-50 h-screen w-64 bg-[#4251B6] text-white transition-transform duration-300
      ${
        sidebarOpen
          ? "translate-x-0"
          : "-translate-x-full"
      }
      lg:translate-x-0`}
    >
      <div className="p-6">
        <div className="flex justify-between items-center lg:justify-center">
          <NavLink to="/">
            <img src={Logo} alt="WorldLink" />
          </NavLink>

          <button
            className="lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={28} />
          </button>
        </div>

        <nav className="mt-10 flex flex-col gap-2">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `rounded-lg px-4 py-3 transition-colors ${
                  isActive
                    ? "bg-[#0F4C97]"
                    : "hover:bg-[#4E5FC6]"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;