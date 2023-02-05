import React from "react";

const Errors = ({ showStage, historic, isError, message }) => {
  const onlyLetters = (value) => {
    return value.replace(/[^a-zA-Z]/g, "");
  };
  const historyLetters = onlyLetters(historic);
  const messageLetters = onlyLetters(message);
  const wrongLetters = () => {
    return historyLetters.split("").filter(letter => {
      return !messageLetters.includes(letter);
    });
  };

  return (
    <>
      {showStage && (
        <>
          <p className={"lead mb-0 " + isError}>
           {wrongLetters().length} of 8 errors
          </p>
          <p className="lead text-muted">({historic}...)</p>
        </>
      )}
    </>
  );
};

export default Errors;
