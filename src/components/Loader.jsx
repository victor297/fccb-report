import React from "react";

const Loader = () => {
  const colors = ["bg-red-500", "bg-yellow-500", "bg-green-500", "bg-blue-500", "bg-indigo-500", "bg-purple-500"];
  
  return (
    <div className="flex justify-center items-center ">
      <div className="flex space-x-2">
        {colors.map((color, index) => (
          <div 
            key={index} 
            className={`w-4 h-4 ${color} rounded-full animate-bounce`} 
            style={{ animationDelay: `${index * -0.1}s` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Loader;
