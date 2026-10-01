import { NavLink, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Navbar = () => {
  const navigation = [
    { name: "No Internet", href: "/diagnostic/no-internet" },
    { name: "Slow Speed", href: "/diagnostic/slow-speed" },
    { name: "Account", href: "/diagnostic/account" },
    { name: "NetTV Status", href: "/diagnostic/nettv-status" },
  ];

  return (
    <nav className="flex">
      {/* back arrow*/}
      <Link
        to="/diagnostic"
        className="flex items-center gap-2 text-sm text-[#454652] hover:text-[#24389C]"
      >
        <ArrowLeft size={18} />
        <span>Back to Home</span>
      </Link>

      {/* navigation */}
      <div className="flex items-center flex-1 gap-6 justify-center">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              `pb-2 text-base ${
                isActive
                  ? "font-semibold text-[#24389C] border-b-2 border-[#24389C]"
                  : "text-[#454652] hover:text-[#24389C]"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;