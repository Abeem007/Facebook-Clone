import React from "react";

import { useAuth } from "../auth/AuthContext";
import Feed from "../component/Feed";
import Header from "../component/Header";
import SideBar from "../component/SideBar";
import Advert from "../component/Advert";
const Dashboard: React.FC = () => {
  const { user } = useAuth();
  if (!user) return null;
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
        <div className="flex justify-center gap-4 py-3 px-2 sm:px-4 lg:py-6 ">
          <div className="hidden lg:block w-72 shhrink-0">
            <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
              <SideBar />
            </div>
          </div>
          <div className="flex-1 max-w-2xl ">
            <Feed />
          </div>
          <div className="hidden lg:block w-80 shrink-0 ">
            <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
              <Advert />
            </div>
          </div>
        </div>
     
    </div>
  );
};
export default Dashboard;
