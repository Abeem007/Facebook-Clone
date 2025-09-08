import { FaSave, FaSearch, FaVideo } from "react-icons/fa";
import Header, {ActionIcon} from "../component/Header";
import { BiVideo, BiVideoRecording } from "react-icons/bi";

import { FaRocket } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useNav } from "../context/NavContext";
const dummyVideos = [
  {
    id: 1,
    displayName: "Titi of Comedy",
    avatar: "https://i.pravatar.cc/100?u=11",
    time: "July 20th at 10.00am",
    title: "Cat Compilation",
    url: "https://www.youtube.com/embed/J---aiyznGQ",
  },
  {
    id: 2,
    displayName: "Adedoyin Vlogs",
    avatar: "https://i.pravatar.cc/100?u=8",
    time: "August 10th at 2.00am",
    title: "Funny Dogs",
    url: "https://www.youtube.com/embed/8-9bn6ZB1n8",
  },
];
const menu = [
  { icon: FaVideo, label: "Home", link: '/dashboard' },
  { icon: BiVideoRecording, label: 'Live' },
  { icon: BiVideo, label: 'Reels' },
  { icon: FaRocket, label: 'Explore', },
  {icon:FaSave, label:'Saved Videos'}
 ]

const VideosPage: React.FC = () => {
   const {setActiveTab} = useNav()
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="flex flex-col md:flex-row">
        {/* sidebar */}
        <aside className="hidden md:block md:w-80 shrink-0 bg-white h-screen sticky top-0 overflow-y-auto ">
          <div className="p-3">
            <div className="flex justify-between items-center pb-3 ">
              <h1 className="text-2xl ">Video</h1>{" "}
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
            {menu.map(({ icon: Icon, label, link }) => (
              <div
                key={label}
                className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-gray-100 cursor-pointer transition"
              >
                {link ? (
                  <Link
                    to={link}
                    onClick={() => label === "Home" && setActiveTab("home")}
                    className="flex items-center gap-3 w-full text-sm font-medium text-gray-700"
                  >
                    <ActionIcon icon={Icon} />
                    <span className="text-md font-semi-bold">{label}</span>
                  </Link>
                ) : (
                  <div className="flex items-center gap-3 w-full text-sm font-medium text-gray-700">
                    <ActionIcon icon={Icon} />
                    <span className="text-md font-semibold">{label}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </aside>
        {/* Main Content */}
        <main className="flex-1 p-2 sm:p-4 lg:p-6">
          <h2 className="text-xl font-semibold mb-4 px-2 sm:px-4">
            Recommended Videos
          </h2>
          
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-1 p-2
          gap-6"
          >
            {dummyVideos.map((video) => (
              <div
                key={video.id}
                className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg active:shadow-md "
              >
                <div className="flex gap-3 p-3 items-center">
                  <img
                    src={video.avatar}
                    alt="Profile picture"
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <span>
                    <h4 className="font-bold">{video.displayName}</h4>
                    <p className="text-gray-500 text-sm">{video.time}</p>
                  </span>
                </div>
                <p className="px-6 pb-1"> {video.title}</p>
                <iframe
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-64 xl:h-72 object-cover "
                  src={video.url}
                  title={video.title}
                  allowFullScreen
                />
                <div className="p-3">
                  <h4 className="font-semibold text-sm">{video.title}</h4>
                  <p className="text-xs text-gray-500">2M views · 2 days ago</p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
export default VideosPage;