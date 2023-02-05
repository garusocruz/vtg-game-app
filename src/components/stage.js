import React, { useState } from "react";

const Stage = ({ message, setSessionId, sessionId, setMessage }) => {
  const [historic, setHistoric] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [placeholder, setPlaceholder] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setHistoric(historic + inputValue + ", ");

    fetch("https://gamming.herokuapp.com/hangman-game", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        session: sessionId,
        letter: inputValue,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setSessionId(data.session_id);
        setMessage(data.message);
        setInputValue("");
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  };
  const isDisabled = isLoading ? " disabled " : "";
  const noValue = inputValue.length !== 0 ? "" : " opacity-25 ";
  const onChangeHandler = (value) => {
    if (value.length === 1) {
      setInputValue(isNaN(value) ? value : "");
    } else if (value.length === 2) {
      setInputValue(isNaN(value[1]) ? value[1] : value[0]);
    } else if (value.length === 0) {
      setInputValue("");
    }
  };
  const onlyLetters = (value) => {
    return value.replace(/[^a-zA-Z]/g, "");
  };
  const isElementActive = (isActive) => {
    return !isActive ? "-light" : "-primary text-white";
  };
  const isValueEmpty = inputValue.length === 0;

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (inputValue.length === 0) {
        setPlaceholder(placeholder === "_" ? "" : "_");
      }
    }, 500);

    return () => clearInterval(interval);
  });

  return (
    <div>
      <h1 className="mb-5">{message}</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group d-flex flex-column mb-5">
          <input
            className={
              "h1 text-uppercase form-control border-0 form-control-lg mb-3 mx-auto text-center bg" +
              isElementActive(isValueEmpty) + isDisabled}
            type="text"
            value={inputValue}
            onChange={(event) => onChangeHandler(event.target.value)}
            style={{ width: "160px", height: "160px", fontSize: "60px" }}
            placeholder={placeholder}
          />
          <button
            className={
              "btn btn-lg fw-bold border-0 py-3 mx-auto btn" + isElementActive(!isValueEmpty) +
              noValue}
            type="submit"
            disabled={isLoading || isValueEmpty}
            title="Try"
          >
            Guess a letter
          </button>
        </div>
        <p className="lead mb-0">
          You tried {onlyLetters(historic).length} times
        </p>
        <p className="lead text-muted">({historic}...)</p>
      </form>
    </div>
  );
};

export default Stage;
