import React, { useState } from "react";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("For you");

  const tabs = [
    "For you",
    "Following",
    "Web3",
    "Web Development",
    "Programming",
  ];

  return (
    <div className="flex space-x-4 py-4 border-b px-[30px]">
      {tabs.map((tab) => (
        <div
          key={tab}
          className={`cursor-pointer pb-2 ${
            activeTab === tab
              ? "border-b-2 border-indigo-500 font-bold text-indigo-600"
              : "text-gray-600 hover:text-gray-800"
          }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </div>
      ))}
    </div>
  );
}
