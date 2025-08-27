import Header, { ActionIcon } from "../component/Header";
import { FaUser, FaUserFriends } from "react-icons/fa";
import { FaGift } from "react-icons/fa6";

import FriendsPostCard from "./FriendsPostCard";
import { RxAvatar } from "react-icons/rx";

import { GiThreeFriends } from "react-icons/gi";

import { IoSettings } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNav } from "../context/NavContext";

const initialFriends = [
  {
    id: "1",
    name: "Tinuke Phillips",
    avatar: "https://i.pravatar.cc/100?u=1",
    mutualFriends: 5,
  },
  {
    id: "2",
    name: "Doyin Ajanlekoko",
    avatar: "https://i.pravatar.cc/100?u=2",
    mutualFriends: 3,
  },
  {
    id: "3",
    name: "Diwura Ajanlekoko",
    avatar: "https://i.pravatar.cc/100?u=3",
    mutualFriends: 6,
  },
  {
    id: "4",
    name: "Tee Philips",
    avatar: "https://i.pravatar.cc/100?u=4",
    mutualFriends: 9,
  },
  {
    id: "5",
    name: "Coker Tijani",
    avatar: "https://i.pravatar.cc/100?u=5",
    mutualFriends: 4,
  },
  {
    id: "6",
    name: "Tosin Williams",
    avatar: "https://i.pravatar.cc/100?u=6",
    mutualFriends: 2,
  },
  {
    id: "7",
    name: "Innocent Owoblow",
    avatar: "https://i.pravatar.cc/100?u=7",
    mutualFriends: 10,
  },
  {
    id: "8",
    name: "Godwin James",
    avatar: "https://i.pravatar.cc/100?u=8",
    mutualFriends: 3,
  },
  {
    id: "9",
    name: "Philip Reese",
    avatar: "https://i.pravatar.cc/100?u=9",
    mutualFriends: 3,
  },
  {
    id: "10",
    name: "Yemi Ade",
    avatar: "https://i.pravatar.cc/100?u=10",
    mutualFriends: 3,
  },
  {
    id: "11",
    name: "Diwura Ademide",
    avatar: "https://i.pravatar.cc/100?u=11",
    mutualFriends: 3,
  },
  {
    id: "12",
    name: "Tomike Adams",
    avatar: "https://i.pravatar.cc/100?u=12",
    mutualFriends: 3,
  },
  
];
const menu = [
  { icon: FaUserFriends, label: "Home", link:'/dashboard' },
  { icon: FaUser, label: "Friend Requests" },
  { icon: FaUser, label: "Suggestions" },
  { icon: GiThreeFriends, label: "All Friends" },
  { icon: FaGift, label: "Birthdays" },
  { icon: RxAvatar, label: "FriendList " },
];
interface Friend {
  id: string;
  name: string;
  avatar: string;
  mutualFriends: number;
}
const FriendsPage: React.FC = () => {
  const [friends, setFriends] = useState<Friend[]>(initialFriends)
  const {setActiveTab} = useNav()
  const handleConfirm = (id: string) => {
    alert(`Confirmed friend with id:${id}`);
  };
  const handleDelete = (id: string) => {
    setFriends(friends.filter((friend)=>friend.id !==id))
    alert(`Deleted friend with id:${id}`);
  };
  return (
    <div className=" bg-gray-100 min-h-screen">
      <Header  />
      {/* <h2 className="text-xl font-semibold mb-4">Friends</h2> */}
      <div className="flex  flex-col md:flex-row ">
        <div className="hidden md:block md:w-80 shrink-0 bg-white  ">
          <span className="flex justify-between items-center font-bold px-4 pt-4">
            <h1 className="text-2xl ">Friends</h1>{" "}
            <IoSettings className="font-bold  text-2xl" />
          </span>
          {/* <SideBar /> */}
          <aside className="hidden  lg:block w-72 shrink-0 px-2 pt-4 overflow-y-auto scrollbar-thin scrollbar-thumb-rounded">
            {menu.map(({ icon: Icon, label,link }) => (
              <div
                key={label}
                className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-gray-100 cursor-pointer"
              >
                {link ? (<Link to={link} onClick={()=>label === "Home" && setActiveTab("home")} className="flex items-center gap-3 pl-0.5 w-full"><ActionIcon icon={Icon} />
                  <span className="text-md  ">{label}</span>
                </Link>) : (
                  <>
                    <ActionIcon icon={Icon} />
                    <span className="text-md ">{label}</span>
                  </>
                )}
              </div>
            ))}
          </aside>
        </div>
        {/* {MENU ITEMS} */}

        <div className="flex-1 p-4">
          <h2 className="text-2xl font-semibold mb-4 pb-4 pl-4 text-gray-900">
            Friend Requests
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pl-4">
            {friends.map((friend) => (
              <li key={friend.id} className="flex justify-center">
                <FriendsPostCard
                  friend={friend}
                  onConfirm={handleConfirm}
                  onDelete={handleDelete}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default FriendsPage;