// import { useState } from "react";
import { useAuth } from "../auth/AuthContext";

import { ActionIcon } from "./Header";
import { FaSave, FaUserFriends } from "react-icons/fa";
import { RiMemoriesFill } from "react-icons/ri";
import { FaCalendar, FaUserGroup, FaVideo } from "react-icons/fa6";
import { IoStorefront } from "react-icons/io5";
import { LuCassetteTape } from "react-icons/lu";

const menu = [
  { icon: FaUserFriends, label: "Friends" },
  { icon: RiMemoriesFill, label: "Memories" },
  { icon: FaSave, label: "Saved" },
  { icon: FaUserGroup, label: "Groups" },
  { icon: FaVideo, label: "Reels" },
  { icon: IoStorefront, label: "Marketplace" },
  { icon: LuCassetteTape, label: "Feeds" },
  { icon: FaCalendar, label: "Events" },
];
const SideBar: React.FC = () => {
  const { user } = useAuth();
  return (
    <div>
      <aside className="hidden lg:block w-72 shrink-0 px-2 pt-4 overflow-y-auto scrollbar-thin scrollbar-thumb-rounded">
        <div className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
          <img
            src={user?.photoURL || "src/assets/Images/avatar-placeholder.jpg"}
            alt="Profile"
            className="rounded-full h-8 w-8 object-cover"
          />
          <p className="font-medium text-sm">{user?.displayName || "Profile Name"}</p>
        </div>
        {/* {MENU ITEMS} */}
        {menu.map(({ icon: Icon, label }) => (
          <div key={label}
          className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-gray-200 cursor-pointer">
            <ActionIcon icon= {Icon}/>
            <span className="text-sm">{label}</span>
          </div>
        ))}
      </aside>
    </div>
  );
};

export default SideBar;
