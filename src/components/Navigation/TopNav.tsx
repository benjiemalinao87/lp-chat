import { useState, useEffect } from "react";
import { BellIcon, PhoneIcon, SearchIcon, MessageSquareIcon, ArrowLeftIcon } from "lucide-react";
import { LiveChat } from "../LiveChat/LiveChat";
import { Sidebar } from "./Sidebar";

export const TopNav = () => {
  const [showLiveChat, setShowLiveChat] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [hasIncomingCall, setHasIncomingCall] = useState(false);

  // Simulate incoming calls
  useEffect(() => {
    const simulateIncomingCall = () => {
      setHasIncomingCall(true);
      // Reset after 3 seconds
      setTimeout(() => setHasIncomingCall(false), 3000);
    };

    // Simulate a call every 5-15 seconds
    const interval = setInterval(() => {
      if (Math.random() > 0.5) { // 50% chance of incoming call
        simulateIncomingCall();
      }
    }, Math.random() * 10000 + 5000);

    return () => clearInterval(interval);
  }, []);

  return <div className={`${showLiveChat ? "z-50" : ""}`}>
      <header className="flex items-center justify-between px-4 py-2 bg-white border-b">
        <div className="flex items-center">
          <button className="p-2" onClick={() => setShowSidebar(!showSidebar)}>
            <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
            <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
            <div className="w-6 h-0.5 bg-gray-600"></div>
          </button>
          <img src="https://channelautomation.com/wp-content/uploads/2022/11/logofooter2.png" alt="OneLeg Logo" className="h-8 ml-4" />
        </div>
        <div className="flex items-center gap-4">
          {showLiveChat ? (
            <ArrowLeftIcon 
              className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800" 
              onClick={() => setShowLiveChat(false)}
            />
          ) : null}
          <MessageSquareIcon 
            className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800" 
            onClick={() => setShowLiveChat(!showLiveChat)} 
          />
          <div className="relative">
            <PhoneIcon className={`w-5 h-5 text-gray-600 ${hasIncomingCall ? 'animate-bounce text-green-500' : ''}`} />
            {hasIncomingCall && (
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-ping" />
            )}
          </div>
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
      <Sidebar isOpen={showSidebar} onClose={() => setShowSidebar(false)} />
      {showLiveChat && <LiveChat />}
    </div>;
};