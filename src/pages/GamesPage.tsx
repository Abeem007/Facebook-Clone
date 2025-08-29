import {
  IoNotifications,
  
  IoSave,
  IoSettings,
} from "react-icons/io5";
import Header, { ActionIcon } from "../component/Header";
import {  FaSearch } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa6";
import {
  BiGame,
  
  BiSolidGame,

} from "react-icons/bi";
import { CgGames, } from "react-icons/cg";
import { GrAction } from "react-icons/gr";
import {
  GiAmericanFootballBall,
  GiGameConsole,
 
} from "react-icons/gi";
import { MdQuiz } from "react-icons/md";

const dummyGames = [
  {
    id: 1,
    name: "Super Mario",
    members: "120k players",
    img: "public/assets/Images/IMG_4669.JPG",
  },
  {
    id: 2,
    name: "Mario",
    members: "890k players",
    img: "public/assets/Images/IMG_4670.JPG",
  },
  {
    id: 3,
    name: "Dog Ninja",
    members: "800k players",
    img: "public/assets/Images/IMG_4671.JPG",
  },
  {
    id: 4,
    name: "M Lovers",
    members: "590k players",
    img: "public/assets/Images/IMG_4672.JPG",
  },
  {
    id: 5,
    name: "Nintendo",
    members: "490k players",
    img: "public/assets/Images/IMG_4673.JPG",
  },
  {
    id: 6,
    name: "Nintendo Switch",
    members: "900k players",
    img: "public/assets/Images/IMG_4674.JPG",
  },
  {
    id: 7,
    name: "Dice",
    members: "890k players",
    img: "public/assets/Images/IMG_4675.JPG",
  },
  {
    id: 8,
    name: "Mario Race",
    members: "300k players",
    img: "public/assets/Images/IMG_4676.JPG",
  },
  {
    id: 9,
    name: "Mario Lovers",
    members: "400k players",
    img: "public/assets/Images/IMG_4677.JPG",
  },
  {
    id: 10,
    name: "Ninja Pizza",
    members: "20k players",
    img: "public/assets/Images/IMG_4678.JPG",
  },
  {
    id: 11,
    name: "Super Mario",
    members: "120k players",
    img: "public/assets/Images/IMG_4684.JPG",
  },
  {
    id: 12,
    name: "Mario World",
    members: "20k players",
    img: "public/assets/Images/IMG_4685.JPG",
  },
];
const topGames = [
  {
    id: 13,
    name: "Super Nintendo",
    members: "120k players",
    img: "public/assets/Images/IMG_4679.JPG",
  },
  {
    id: 14,
    name: "Mario",
    members: "600k players",
    img: "public/assets/Images/IMG_4687.JPG",
  },
  {
    id: 15,
    name: "Mario Galaxy",
    members: "250k players ",
    img: "public/assets/Images/IMG_4681.JPG",
  },
  {
    id: 16,
    name: "Overcooked",
    members: "450k players",
    img: "public/assets/Images/IMG_4682.JPG",
  },
  {
    id: 17,
    name: "Mario Guys",
    members: "460k players",
    img: "public/assets/Images/IMG_4680.JPG",
  },
  {
    id: 18,
    name: "Stumble Guys",
    members: "460k players",
    img: "public/assets/Images/IMG_4686.JPG",
  },
  {
    id: 19,
    name: "Sonic",
    members: "460k players",
    img: "public/assets/Images/IMG_4689.JPG",
  },
  {
    id: 20,
    name: "Stumble Guys",
    members: "460k players",
    img: "public/assets/Images/IMG_4683.JPG",
  },
];

const menu = [
  { icon: CgGames, label: "All Games" },
  { icon: GrAction, label: "Action" },
  { icon: BiGame, label: "Arcade" },
  { icon: BiSolidGame, label: "Board" },
  { icon: GiGameConsole, label: "Card" },
  { icon: GiAmericanFootballBall, label: "Sports" },
  { icon: MdQuiz, label: "Quiz" },
];

const GamesPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />

      <div className="flex flex-col md:flex-row">
        {/* sidebar */}
        <aside className="hidden md:block md:w-85 shrink-0  bg-white h-screen sticky top-0 overflow-y-auto ">
          <div className="p-3">
            <div className="flex justify-between items-center pb-3 ">
              <h1 className="text-2xl font-bold ">Games</h1>{" "}
              <IoSettings className="font-bold  text-2xl" />
            </div>
            {/* Search */}
            <div className="flex flex-col gap-5">
              <div className="hidden md:flex items-center bg-gray-100 rounded-full px-3 py-1">
                <FaSearch className="text-gray-600 text-sm" />
                <input
                  type="text"
                  placeholder="Search games"
                  className="bg-transparent outline-none placeholder::text-sm ml-2 w-40 lg:w-55 h-7 pl-3 "
                />
              </div>
              <div className="hidden  md:flex items-center  bg-gray-100 rounded-xl px-2 ">
                <span className="bg-blue-600 rounded-full w-9 h-9 flex items-center  justify-center ">
                  <FaGamepad className="text-white w-8" />
                </span>
                <input
                  type="text"
                  placeholder="Play games"
                  className="bg-transparent outline-none placeholder:text-black placeholder:text-md  ml-2 w-40 lg:w-55 h-12 pl-3  "
                />
              </div>
            </div>
            <div className="flex justify-start items-center pt-3 pb-3 px-2 gap-3">
              <span className="bg-gray-200 rounded-full w-9 h-9 flex items-center  justify-center ">
                <IoNotifications className="w-8 h-5" />
              </span>{" "}
              <h2 className="text-md">Notifications</h2>
            </div>
            <div className="pt-3  ">
              <hr className="text-gray-300   " />
            </div>
            <div className="flex justify-start items-center pt-3 pb-3 px-2 gap-3">
              <span className="bg-gray-200 rounded-full w-9 h-9 flex items-center  justify-center">
                <IoSave />
              </span>
              <h2 className="text-md">Save games</h2>
            </div>
            <div className="pt-3 ">
              <hr className="text-gray-300   " />
            </div>
          </div>

          <div className="px-2  space-y-1">
            <h2 className="p-2  font-medium text-md">Categories</h2>
            {menu.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-gray-100 cursor-pointer transition"
              >
                <div className="flex items-center gap-3 w-full text-sm font-medium text-gray-700">
                  <span className="bg-gray-200  rounded-full w-9 h-9 flex items-center  justify-center">
                    <ActionIcon icon={Icon} />
                  </span>
                  <span className="text-md text-black font-semibold">
                    {label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6">
          <h2 className="text-2xl font-semibold px-4">Games we love</h2>
          <ul className="  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-3">
            {dummyGames.map((game) => (
              <div
                key={game.id}
                className="rounded-2xl border-transparent  cursor-pointer transform transition-transform duration-300 hover:scale-110 "
              >
                <img
                  src={game.img}
                  className=" mb-2 rounded-t-2xl hover:shadow-2xl shadow w-full h-60 object-cover "
                />
                <div className="bg-gray-400 text-white p-2  rounded-b-2xl flex flex-col gap-1 ">
                  <h4 className="font-semibold text-lg">{game.name}</h4>
                  <span className="bg-black  rounded-full flex items-center w-25 h-7 p-2 justify-start">
                    <p className="text-sm  text-white">{game.members}</p>
                  </span>
                </div>
              </div>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold px-4">Top picks for you</h2>
          <ul className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
            {topGames.map((games) => (
              <div
                key={games.id}
                className=" rounded-2xl border-transparent  cursor-pointer transform transition-transform duration-300 hover:scale-110 "
              >
                <img
                  src={games.img}
                  className=" mb-2 rounded-t-2xl hover:shadow-2xl shadow w-full h-60 object-cover "
                />
                <div className="bg-gray-300 text-white p-2 rounded-b-2xl flex flex-col gap-1 ">
                  <h4 className="font-semibold text-lg">{games.name}</h4>
                  <span className="bg-black  rounded-full flex items-center w-25 h-7 p-2 justify-start">
                    <p className="text-sm text-white ">{games.members}</p>
                  </span>
                </div>
              </div>
            ))}
          </ul>
        </main>
      </div>
    </div>
  );
};
export default GamesPage;
