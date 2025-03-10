import React from "react";
export const TasksSection = () => {
  return <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[#00bcd4] font-medium">MY TASKS</h2>
        <button className="bg-gray-200 text-sm px-3 py-1 rounded">
          Past Due
        </button>
      </div>
      <div className="h-48"></div>
      <div className="text-right">
        <button className="text-blue-600 text-sm">See All Records</button>
      </div>
    </div>;
};