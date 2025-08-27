import { FaVideo, FaFacebookMessenger } from "react-icons/fa6";
import { FaSearch, FaHome, FaUserFriends, FaGamepad, FaQuestionCircle } from "react-icons/fa";
import {
  BiLogOut,
  BiMenu,
  
  BiNotification,
 
} from "react-icons/bi";
import { IoStorefrontOutline } from "react-icons/io5";
import type { IconType } from "react-icons";
import { useAuth } from "../auth/AuthContext";
import { useNav } from "../context/NavContext";
import { useLocation, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

import { useEffect, useState } from "react";

import { TbSettingsFilled } from "react-icons/tb";

import { PiMoonFill } from "react-icons/pi";

const Header: React.FC = () => {
  const { user } = useAuth();
  const { setActiveTab } = useNav();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    // Map URL paths to activeTab values
    const pathToTab: { [key: string]: string } = {
      "/dashboard": "home",
      "/friends": "friends",
      "/videos": "videos",
      "/marketplace": "marketplace",
      "/games": "games",
    };
    // Set activeTab based on current URL path
    const tab = pathToTab[location.pathname] || "home";
    setActiveTab(tab);
  }, [location.pathname, setActiveTab]);
  return (
    <header className="header_bg bg-white shadow-sm sticky top-0 z-30">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 md:px-6 lg:px-4 h-15 ">
        {/* ─── LEFT: logo + search ──────────────────────────────── */}
        <div className="flex items-center gap-2">
          {" "}
          <img
            src="src/assets/Images/Facebook_Logo_Primary.png"
            alt="Facebook Logo"
            className="h-8 w-auto"
          />
          {/* mobile: just a search icon */}
          <button className="p-2 rounded-full hover:bg-gray-100 md:hidden">
            <FaSearch className="text-gray-600 text-lg" />
          </button>
          {/* desktop: full search bar */}
          <div className="hidden md:flex items-center bg-gray-100 rounded-full px-3 py-1">
            <FaSearch className="text-gray-600 text-sm" />
            <input
              type="text"
              placeholder="Search Facebook"
              className="bg-transparent outline-none placeholder::text-sm ml-2 w-40 lg:w-55 h-8 pl-3 "
            />
          </div>
        </div>
        {/* ─── CENTER: nav icons (desktop only) ────────────────── */}
        <nav className="hidden md:flex flex-1 justify-center gap-12">
          <NavIcon icon={FaHome} active />
          <NavIcon icon={FaUserFriends} />
          <NavIcon icon={FaVideo} />
          <NavIcon icon={IoStorefrontOutline} />
          <NavIcon icon={FaGamepad} />
        </nav>

        {/* ─── RIGHT: action icons ─────────────────────────────── */}
        <div className="flex items-center gap-4">
          <ActionIcon icon={BiMenu} />
          <ActionIcon icon={FaFacebookMessenger} />
          <ActionIcon icon={BiNotification} />
          <button onClick={() => setOpen((o) => !o)}>
            <img
              src={
                user?.photoURL || "src/assets/Images/Facebook_Logo_Primary.png"
              }
              alt="Profile"
              className="h-8 w-8 rounded-full object-cover"
            />
          </button>
          {open && (
            <div
              className="fixed inset-0 flex items-center justify-end z-50"
              onClick={() => setOpen(false)}
            >
              <div
                className="bg-white rounded-xl shadow-lg w-80 max-h-[90vh] flex flex-col mr-4 mt-16"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="absolute right-4 top-14 z-50 w-90 bg-white rounded-lg shadow-lg border p-2 border-gray-200">
                  {/* Profile Section */}

                  <div className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-t-lg cursor-pointer">
                    <img
                      src={
                        user?.photoURL ||
                        "src/assets/Images/Facebook_Logo_Primary.png"
                      }
                      alt="Profile"
                      className="h-8 w-8 rounded-full object-cover"
                    />
                    <div>
                      <h2 className="text-lg font-semibold text-gray-900">
                        {user?.displayName}
                      </h2>
                      <p className="text-sm text-gray-500">See all profile</p>
                    </div>
                  </div>
                  <hr className=" text-gray-300 p-1" />
                  {/* Menu Items */}
                  <ul className="flex flex-col py-1 pb-2 gap-1">
                    <li className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100  hover:rounded-lg cursor-pointer">
                      <span className="bg-gray-300 h-8 w-8 flex items-center justify-center rounded-3xl">
                        <TbSettingsFilled className="text-xl " />
                      </span>
                      <p className="text-gray-800">Settings & privacy</p>
                    </li>
                    <li className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100  hover:rounded-lg cursor-pointer">
                      <span className="bg-gray-300 h-8 w-8 flex items-center justify-center rounded-3xl">
                        <FaQuestionCircle className="text-lg" />
                      </span>

                      <span className="text-gray-800">Help & support</span>
                    </li>
                    <li className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100  hover:rounded-lg cursor-pointer">
                      <span className="bg-gray-300 h-8 w-8 flex items-center justify-center rounded-3xl">
                        <PiMoonFill className="text-xl" />
                      </span>

                      <span className="text-gray-800">
                        Display & accessibility
                      </span>
                    </li>
                  </ul>
                  <hr className=" text-gray-300 pb-2" />

                  {/* Logout */}
                  <div
                    onClick={() => signOut(auth)}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 rounded-b-lg cursor-pointer"
                  >
                    <span className="bg-gray-300 h-8 w-8 flex items-center justify-center rounded-3xl">
                      <BiLogOut className="text-xl " />
                    </span>

                    <span className="text-gray-800">Log Out</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
interface NavIconProps {
  icon: IconType;
  active?: boolean;
}
const NavIcon: React.FC<NavIconProps> = ({ icon: Icon }) => {
  const navigate = useNavigate();
  const { activeTab, setActiveTab } = useNav();
  const handleClick = () => {
    switch (Icon) {
      case FaHome:
        setActiveTab("home");
        navigate("/dashboard");
        break;
      case FaUserFriends:
        setActiveTab("friends");
        navigate("/friends");
        break;
      case FaVideo:
        setActiveTab("videos");
        navigate("/videos");
        break;
      case IoStorefrontOutline:
        setActiveTab("marketplace");
        navigate("/marketplace");
        break;
      case FaGamepad:
        setActiveTab("games");
        navigate("/games");
        break;
    }
  };
  return (
    <button
      onClick={handleClick}
      className={`h-10 w-14 flex items-center justify-center rounded-lg hover:bg-gray-100 
      ${
        activeTab === getTabName(Icon)
          ? "text-blue-600 border-b-2 border-blue-600"
          : "text-gray-600"
      }`}
    >
      <Icon className="text-2xl" />
    </button>
  );
};
const getTabName = (Icon: IconType): string => {
  switch (Icon) {
    case FaHome:
      return "home";
    case FaUserFriends:
      return "friends";
    case FaVideo:
      return "videos";
    case IoStorefrontOutline:
      return "marketplace";
    case FaGamepad:
      return "games";
    default:
      return "";
  }
};
export interface ActionIconProps {
  icon: IconType;
}
export const ActionIcon: React.FC<ActionIconProps> = ({ icon: Icon }) => (
  <button className="p-2 rounded-full hover:bg-gray-100">
    <Icon className="text-2xl text-gray-600" />
  </button>
);
export default Header;
