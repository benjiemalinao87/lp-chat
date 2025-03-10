import React, { useState } from "react";
import { BellIcon, PhoneIcon, SearchIcon, MessageSquareIcon } from "lucide-react";
import { LiveChat } from "../LiveChat/LiveChat";
export const TopNav = () => {
  const [showLiveChat, setShowLiveChat] = useState(false);
  return <div className={`${showLiveChat ? "z-50" : ""}`}>
      <header className="flex items-center justify-between px-4 py-2 bg-white border-b">
        <div className="flex items-center">
          <button className="p-2">
            <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
            <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
            <div className="w-6 h-0.5 bg-gray-600"></div>
          </button>
          <img src="https://channelautomation.com/wp-content/uploads/2022/11/logofooter2.png" alt="OneLeg Logo" className="h-8 ml-4" />
        </div>
        <div className="flex items-center gap-4">
          <MessageSquareIcon className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800" onClick={() => setShowLiveChat(!showLiveChat)} />
          <PhoneIcon className="w-5 h-5 text-gray-600" />
          <SearchIcon className="w-5 h-5 text-gray-600" />
          <BellIcon className="w-5 h-5 text-gray-600" />
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-sm">1</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-300"></div>
            <span className="text-sm text-gray-600">Benjie Malinao</span>
          </div>
        </div>
      </header>
      {showLiveChat && <LiveChat />}
    </div>;
};