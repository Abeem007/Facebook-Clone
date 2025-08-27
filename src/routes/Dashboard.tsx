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
      <div className="grid grid-cols-15 py-6">
        <div className="hidden lg:block col-span-4">
          <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
            <SideBar />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-7">
          <Feed />
        </div>
        <div className="hidden xl:block col-span-4 ">
          <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
            <Advert />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
