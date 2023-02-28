import React from "react";

const Toast = ({ message }) => {
  return (
    <div className="fixed top-0 right-0 mr-8 mt-8 bg-gray-800 text-white px-4 py-2 rounded-md z-50">
      <p>{message}</p>
    </div>
  );
};

export default Toast;
