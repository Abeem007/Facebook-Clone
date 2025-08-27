import React from "react";
import { BiSearch } from "react-icons/bi";

import { IoOptions } from "react-icons/io5";

const contactList = [
  {
    id: "1",
    name: "Tinuke Phillips",
    avatar: "https://i.pravatar.cc/100?u=1",
  },
  {
    id: "2",
    name: "Doyin Ajanlekoko",
    avatar: "https://i.pravatar.cc/100?u=2",
  },
  {
    id: "3",
    name: "Diwura Ajanlekoko",
    avatar: "https://i.pravatar.cc/100?u=3",
  },
  {
    id: "4",
    name: "Tee Philips",
    avatar: "https://i.pravatar.cc/100?u=4",
  },
  {
    id: "5",
    name: "Coker Tijani",
    avatar: "https://i.pravatar.cc/100?u=5",
  },
  {
    id: "6",
    name: "Tosin Williams",
    avatar: "https://i.pravatar.cc/100?u=6",
  },
  {
    id: "7",
    name: "Innocent Owoblow",
    avatar: "https://i.pravatar.cc/100?u=7",
  },
  {
    id: "8",
    name: "Godwin James",
    avatar: "https://i.pravatar.cc/100?u=8",
  },
  {
    id: "9",
    name: "Philip Reese",
    avatar: "https://i.pravatar.cc/100?u=9",
  },
  {
    id: "10",
    name: "Yemi Ade",
    avatar: "https://i.pravatar.cc/100?u=10",
  },
  {
    id: "11",
    name: "Diwura Ademide",
    avatar: "https://i.pravatar.cc/100?u=11",
  },
  {
    id: "12",
    name: "Tomike Adams",
    avatar: "https://i.pravatar.cc/100?u=12",
  },
];

const sponsoredAds = [
  {
    id: 1,
    title: "Nike Running Shoes",
    img: "src/assets/Images/IMG_4706.JPG",
    link: "https://www.nike.com",
    description: "Step up your run with comfort & style.",
  },
  {
    id: 2,
    title: "Samsung Galaxy Z Fold",
    img: "src/assets/Images/IMG_4707.JPG",
    link: "https://www.samsung.com",
    description: "Experience the future of mobile devices.",
  },
  {
    id: 3,
    title: "Coca-Cola",
    img: "src/assets/Images/IMG_4708.JPG",
    link: "https://www.coca-cola.com",
    description: "Open happiness, refresh your moments.",
  },
];

const Advert: React.FC = () => {
  return (
    <div className="pt-3 text-sm text-gray-700 ">
      <aside>
        {/* Sponsored */}
        <div className="mb-4">
          <h2 className="text-gray-500 font-medium text-base mb-2">
            Sponsored
          </h2>
      
          <div className="space-y-4 pb-2">
            {sponsoredAds.map((ad) => (
              <a
                key={ad.id}
                href={ad.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 hover:bg-gray-200 py-3 rounded-lg"
              >
                <img
                  src={ad.img}
                  alt={ad.title}
                  className="w-28 h-20 object-cover rounded-md"
                />
                <div className="flex flex-col">
                  <p className="font-medium">{ad.title}</p>
                  <p className="text-xs text-gray-500">{ad.description}</p>
                  <span className="text-xs text-gray-400">Sponsored</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <hr className="pb-2  text-gray-300" />

        {/* Friend Requests */}
        <div className=" pb-2">
          <div className="flex justify-between items-center mb-2 py-3 pr-2">
            <h2 className="text-gray-500  text-base font-semibold">
              Friend requests
            </h2>
            <button className="text-blue-600 text-sm font-light hover:underline">
              See all
            </button>
          </div>
          {/* Example request */}
          <div className="flex items-start gap-2 mb-3">
            <img
              src="https://i.pravatar.cc/100?u=22"
              alt="friend request"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1 pr-2">
              <div className="flex justify-between items-center ">
                <h3 className="font-medium">John Doe</h3>
                <span className="text-xs text-gray-500">1w</span>
              </div>
              <p className="text-xs text-gray-500 py-1">2 mutual friends</p>
              <div className="flex gap-3 mt-2 py-2">
                <button className="bg-blue-600 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                  Confirm
                </button>
                <button className="bg-gray-200 px-5 py-2 rounded-md text-sm font-medium hover:bg-gray-300">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-3 pb-2 text-gray-300" />
        {/* Contacts */}
        <div>
          <div className="flex justify-between items-center text-lg mb-2 pr-2">
            <h2 className="text-gray-500 font-semibold py-1 ">Contacts</h2>
            <div className="flex items-center gap-2 text-gray-500">
              <BiSearch className="cursor-pointer hover:text-gray-700" />
              <IoOptions className="cursor-pointer hover:text-gray-700" />
            </div>
          </div>
          <div className="space-y-2">
            {contactList.map((contact) => (
              <div
                key={contact.id}
                className="flex items-center gap-3 p-2 rounded-md cursor-pointer hover:bg-gray-100"
              >
                <div className="relative">
                  <img
                    src={contact.avatar}
                    alt="friend"
                    className="w-10 h-10 rounded-full object-cover border border-gray-200 "
                  />
                  
                  <span className="absolute bottom-0 right-0 block w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></span>
                </div>

                <p>{contact.name}</p>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Advert;
