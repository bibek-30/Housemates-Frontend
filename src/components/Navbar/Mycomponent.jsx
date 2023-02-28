import React, { useState } from "react";
import Toast from "./Toast";

const MyComponent = () => {
  const [showToast, setShowToast] = useState(false);

  const handleButtonClick = () => {
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Show Toast</button>
      {showToast && <Toast message="Hello, world!" />}
    </div>
  );
};

export default MyComponent;
