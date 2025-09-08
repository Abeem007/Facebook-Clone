import Header, { ActionIcon } from "../component/Header";

import {
  BiLogoShopify,
  BiNotification,
  BiShield,
  BiSolidInbox,
} from "react-icons/bi";
import { FaSearch, FaStore } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";

const dummyItems = [
  {
    id: 1,
    name: "iPhone 12",
    price: "$400",
    img: "/Images/Iphone.JPG",
  },
  {
    id: 2,
    name: "Car",
    price: "$150",
    img: "/Images/IMG_4649.JPG",
  },
  {
    id: 3,
    name: "Luxury Car",
    price: "$150",
    img: "/Images/IMG_4650.JPG",
  },
  {
    id: 4,
    name: "Clean Sports Car",
    price: "$150",
    img: "/Images/IMG_4651.JPG",
  },
  {
    id: 5,
    name: "Sports Car",
    price: "$150",
    img: "/Images/IMG_4652.JPG",
  },
  {
    id: 6,
    name: "Dining Set",
    price: "$150",
    img: "/Images/IMG_4653.JPG",
  },
  {
    id: 7,
    name: "Tv Console",
    price: "$150",
    img: "/Images/IMG_4654.JPG",
  },
  {
    id: 8,
    name: "TV",
    price: "$150",
    img: "/Images/IMG_4655.JPG",
  },
  {
    id: 9,
    name: "Luxury Perfume",
    price: "$150",
    img: "/Images/IMG_4656.JPG",
  },
  {
    id: 10,
    name: "Dolce & Gabbana Perfume",
    price: "$150",
    img: "/Images/IMG_4657.JPG",
  },
  {
    id: 11,
    name: "Perfume",
    price: "$150",
    img: "/Images/IMG_4658.JPG",
  },
  {
    id: 12,
    name: "Cocktail Perfume",
    price: "$150",
    img: "/Images/IMG_4659.JPG",
  },
];

const menu = [
  { icon: FaStore, label: "Browse all" },
  { icon: BiNotification, label: "Notifications" },
  { icon: BiSolidInbox, label: "Inbox" },
  { icon: BiShield, label: "Marketplace access" },
  { icon: BiLogoShopify, label: "Buying" },
];

const MarketplacePage: React.FC = () => {
  return (
    <div className=" bg-gray-100 min-h-screen">
      <Header />
      <div className="flex flex-col md:flex-row">
        {/* sidebar */}
        <aside className="hidden md:block md:w-80 shrink-0 bg-white h-screen sticky top-0 overflow-y-auto ">
          <div className="p-3">
            <div className="flex justify-between items-center pb-3 ">
              <h1 className="text-2xl font-bold ">Marketplace</h1>{" "}
              <IoSettings className="font-bold  text-2xl" />
            </div>
            {/* Search */}
            <div className="hidden md:flex items-center bg-gray-100 rounded-full px-3  py-1">
              <FaSearch className="text-gray-600 text-sm" />
              <input
                type="text"
                placeholder="Search Videos"
                className="bg-transparent outline-none placeholder::text-sm ml-2 w-40 lg:w-55 h-7 pl-3 "
              />
            </div>
          </div>

          <div className="px-2  space-y-1">
            {menu.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-gray-100 cursor-pointer transition"
              >
                <div className="flex items-center gap-3  w-full text-sm font-medium text-gray-700">
                  <ActionIcon icon={Icon} />
                  <span className="text-md font-semibold">{label}</span>
                </div>
              </div>
            ))}
          </div>
        </aside>
        {/* Main Content */}
        <main className="flex-1 p-1  sm:p-4 lg:p-6">
          <h2 className="text-xl font-semibold mb-4 px-2 sm:px-4 py-2 ">
            Marketplace
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-2 sm:px-4 ">
            {dummyItems.map((item) => (
              <div
                key={item.id}
                className=" rounded-t-2xl lg:pb-3 cursor-pointer "
              >
                <img
                  src={item.img}
                  className=" mb-2 rounded-t-xl hover:shadow-2xl shadow w-full h-60 object-cover"
                />
                <div className="p-3 bg-white rounded-b-xl">
                  <h4 className="font-semibold pb-2">{item.name}</h4>
                  <p className="text-gray-600 font-light text-sm">
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};
export default MarketplacePage;
