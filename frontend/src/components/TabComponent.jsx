import React from "react";

const TabComponent = ({ activeTab, onTabClick, onReset }) => {
  return (
    <div className="flex justify-between mb-4">
      <button
        onClick={() => onTabClick("needToGet")}
        className={`flex-1 mr-2 p-2 text-sm font-semibold rounded-md ${
          activeTab === "needToGet" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
      >
        Need to Get
      </button>
      <button
        onClick={() => onTabClick("alreadyHave")}
        className={`flex-1 ml-2 p-2 text-sm font-semibold rounded-md ${
          activeTab === "alreadyHave" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
      >
        Already Have
      </button>
      <button
        onClick={onReset}
        className="p-2 text-sm font-semibold text-yellow-600 bg-yellow-200 hover:bg-yellow-300 rounded-md transition duration-150 ease-in-out ml-4"
      >
        Reset
      </button>
    </div>
  );
};

export default TabComponent;
