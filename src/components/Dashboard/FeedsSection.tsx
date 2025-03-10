import React from "react";
export const FeedsSection = () => {
  return <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-4">
          <h2 className="text-[#00bcd4] font-medium">FEEDS</h2>
          <div className="flex gap-2">
            <button className="text-[#00bcd4] text-sm">SYSTEM</button>
            <button className="text-gray-400 text-sm">ACTIVITIES</button>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-[#00bcd4] flex items-center justify-center text-white">
            A
          </div>
          <div>
            <span>You successfully logged in</span>
            <span className="text-gray-400 text-sm ml-2">just now</span>
          </div>
        </div>
      </div>
    </div>;
};