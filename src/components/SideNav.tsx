import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HomeIcon,
  BuildingOfficeIcon,
  UsersIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  PowerIcon,
} from "@heroicons/react/24/outline";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const SideNav = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: "Dashboard", icon: HomeIcon, path: "/" },
    { name: "Properties", icon: BuildingOfficeIcon, path: "/properties" },
    { name: "Tenants", icon: UsersIcon, path: "/tenants" },
  ];

  const bottomNavItems = [{ name: "Logout", icon: PowerIcon, path: "/login" }];

  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <>
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md  text-black"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? (
          <ChevronLeftIcon className="h-6 w-6" />
        ) : (
          <ChevronRightIcon className="h-6 w-6" />
        )}
      </button>
      {mobileOpen && (
        <div
          className=" fixed inset-0 bg-black opacity-80  z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}
      <aside
        className={`fixed top-0 left-0 h-full bg-gray-200 text-black transition-all duration-300 ease-in-out z-50 bo w-64 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <div className="flex w-1/2 justify-center">
              <img src="/public/logo@2x.png" alt="company logo" />
            </div>
          </div>

          <nav className="flex-1 overflow-y-auto ">
            <ul className="space-y-2 p-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`flex items-center p-3 rounded-lg hover:bg-gray-300 transition-colors `}
                    onClick={() => setMobileOpen(false)}
                  >
                    <item.icon className="h-6 w-6" />
                    <span className="ml-3">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-4 border-t border-gray-700">
            <ul className="space-y-2">
              {bottomNavItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`flex items-center p-3 rounded-lg hover:bg-gray-300 transition-colors`}
                    onClick={handleLogout}
                  >
                    <item.icon className="h-6 w-6" />
                    <span className="ml-3">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideNav;
