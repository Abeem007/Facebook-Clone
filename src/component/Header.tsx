import { FaVideo, FaFacebookMessenger } from "react-icons/fa6";
import {
  FaSearch,
  FaHome,
  FaUserFriends,
  FaGamepad,
  FaQuestionCircle,
} from "react-icons/fa";
import { BiLogOut, BiMenu, BiNotification } from "react-icons/bi";
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
    const tab = pathToTab[location.pathname] || "home";
    setActiveTab(tab);
  }, [location.pathname, setActiveTab]);

  return (
    <header className="bg-white sticky top-0 z-30">
      {/* ─── MOBILE TOP BAR ──────────────────────────────── */}
      <div className="sm:hidden shadow-sm">
        {/* Top bar: logo + right icons */}
        <div className="flex items-center justify-between px-3 py-2">
         
          <h1 className="text-blue-600 font-bold text-2xl">facebook</h1>

          {/* Right: Search + Messenger + Hamburger */}
          <div className="flex items-center gap-1">
            <ActionIcon icon={FaSearch} />

            <button onClick={() => setOpen((o) => !o)}>
              <BiMenu className="text-3xl text-gray-600" />
            </button>
          </div>
        </div>

        {/* Mobile nav icons (under the top bar) */}
        <nav className="flex justify-around items-center shadow-sm h-10">
          <NavIcon icon={FaHome} />
          <NavIcon icon={FaUserFriends} />
          <NavIcon icon={FaVideo} />
          <NavIcon icon={IoStorefrontOutline} />
          <NavIcon icon={BiNotification} />
        </nav>
      </div>

      {/* ─── DESKTOP HEADER ──────────────────────────────── */}
      <div className="hidden sm:flex max-w-screen-xl mx-auto justify-between items-center px-3 sm:px-4 md:px-6 lg:px-6 h-15 shadow-sm">
        {/* LEFT: logo + search */}
        <div className="flex items-center gap-2">
          <img
            src="/Images/Facebook_Logo_Primary.png"
            alt="Facebook Logo"
            className="h-7 sm:h-6 md:hidden lg:flex w-auto"
          />
          {/* Tablet Header: Logo + search icon */}
          <div className="hidden md:flex lg:hidden items-center  gap-2">
            <img
              src="/Images/Facebook_Logo_Primary.png"
              alt="Facebook Logo"
              className="h-7 w-auto"
            />
            <span className="bg-gray-100 w-8 h-8 flex items-center justify-center rounded-full">
              {" "}
              <FaSearch className="  text-gray-600 text-sm  " />{" "}
            </span>
          </div>

          {/* Search bar */}
          <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-2 py-1 sm:px-3 sm:py-1.5">
            <FaSearch className="text-gray-600 text-sm sm:text-base" />
            <input
              type="text"
              placeholder="Search Facebook"
              className="bg-transparent outline-none ml-2 w-35 lg:w-50 h-8 pl-1"
            />
          </div>
        </div>

        {/* CENTER: nav icons */}
        <nav className="flex flex-1 justify-center gap-6 sm:gap-3 md:gap-4 lg:gap-12">
          <NavIcon icon={FaHome} active />
          <NavIcon icon={FaUserFriends} />
          <NavIcon icon={FaVideo} />
          <NavIcon icon={IoStorefrontOutline} />
          <NavIcon icon={FaGamepad} />
        </nav>

        {/* RIGHT: action icons */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-3">
          <ActionIcon icon={BiMenu} />
          <ActionIcon icon={FaFacebookMessenger} />
          <ActionIcon icon={BiNotification} />
          <button onClick={() => setOpen((o) => !o)}>
            <img
              src={user?.photoURL || "/Images/Facebook_Logo_Primary.png"}
              alt="Profile"
              className="h-8 w-8 rounded-full object-cover"
            />
          </button>
        </div>
      </div>

      {/* ─── PROFILE DROPDOWN (WORKS FOR MOBILE & DESKTOP) ──────────────────────────────── */}
      {open && (
        <div
          className="fixed inset-0 flex items-start justify-end z-50 bg-black/20 sm:bg-transparent"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white rounded-xl shadow-lg w-72 sm:w-80 max-h-[90vh] flex flex-col mt-14 sm:mt-16 mr-3 sm:mr-6 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Profile Section */}
            <div className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-t-lg cursor-pointer">
              <img
                src={user?.photoURL || "/Images/Facebook_Logo_Primary.png"}
                alt="Profile"
                className="h-8 w-8 rounded-full object-cover"
              />
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  {user?.displayName}
                </h2>
                <p className="text-sm text-gray-500">See all profiles</p>
              </div>
            </div>
            <hr className="text-gray-300" />

            {/* Menu Items */}
            <ul className="flex flex-col py-1 gap-1">
              <li className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                <span className="bg-gray-300 h-8 w-8 flex items-center justify-center rounded-full">
                  <TbSettingsFilled className="text-xl" />
                </span>
                <p className="text-gray-800">Settings & privacy</p>
              </li>
              <li className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                <span className="bg-gray-300 h-8 w-8 flex items-center justify-center rounded-full">
                  <FaQuestionCircle className="text-lg" />
                </span>
                <span className="text-gray-800">Help & support</span>
              </li>
              <li className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                <span className="bg-gray-300 h-8 w-8 flex items-center justify-center rounded-full">
                  <PiMoonFill className="text-xl" />
                </span>
                <span className="text-gray-800">Display & accessibility</span>
              </li>
            </ul>
            <hr className="text-gray-300" />

            {/* Logout */}
            <div
              onClick={() => signOut(auth)}
              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 rounded-b-lg cursor-pointer"
            >
              <span className="bg-gray-300 h-8 w-8 flex items-center justify-center rounded-full">
                <BiLogOut className="text-xl" />
              </span>
              <span className="text-gray-800">Log Out</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

/* NavIcon Component */
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
      case BiNotification:
        setActiveTab("notifications");
        break;
      case BiMenu:
        setActiveTab("menu");
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
    case BiNotification:
      return "notifications";
    case BiMenu:
      return "menu";
    default:
      return "";
  }
};

/* ActionIcon Component */
export interface ActionIconProps {
  icon: IconType;
}
export const ActionIcon: React.FC<ActionIconProps> = ({ icon: Icon }) => (
  <button className="p-2 rounded-full hover:bg-gray-100">
    <Icon className="text-2xl text-gray-600" />
  </button>
);

export default Header;
