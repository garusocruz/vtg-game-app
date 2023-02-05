import React from "react";

const EndMessage = ({ message }) => {
  const handleClick = () => {
    window.location.reload();
  };

  return (
    <div>
      <h1 className="mb-5">{message}</h1>
      <button
        className="p-4 btn btn-lg btn-primary fw-bold"
        onClick={handleClick}
      >
        New game
      </button>
    </div>
  );
};

export default EndMessage;
