import React, { useState } from "react";

const EndMessage = ({ message }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      window.location.reload();
    }, 5000);
  };

  return (
    <div>
      <h1 className="mb-5">{message}</h1>
      <button className="p-4 btn btn-lg btn-light fw-bold border-white bg-white" onClick={handleClick} disabled={isLoading}>
        New game
      </button>
    </div>
  );
};

export default EndMessage;
