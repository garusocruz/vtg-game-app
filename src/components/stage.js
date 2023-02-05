import React, { useState } from "react";
import Errors from "./errors";

const Stage = ({ message, setSessionId, sessionId, setMessage }) => {
  const [historic, setHistoric] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [placeholder, setPlaceholder] = useState("");
  const [isError, setIsError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const letter = String(inputValue);
    setInputValue("");
    setIsLoading(true);
    setHistoric(historic + inputValue + ", ");

    fetch("https://gamming.herokuapp.com/hangman-game", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        session: sessionId,
        letter,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.message.includes(letter)) {
          setIsError(" blink ");
          setTimeout(() => {
            setIsError("");
          }, 3000);
        }
        setIsLoading(false);
        setSessionId(data.session_id);
        setMessage(data.message);
        setInputValue("");
      })
      .catch((error) => {
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
  const isElementActive = (isActive) => {
    return !isActive ? "-light" : "-primary text-white";
  };
  const isValueEmpty = inputValue.length === 0;
  const showStage = message?.length !== 0;

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (isLoading) {
        setPlaceholder("");
      } else if (inputValue.length === 0) {
        setPlaceholder(placeholder === "_" ? "" : "_");
      }
    }, 500);

    return () => clearInterval(interval);
  });

  return (
    <div>
      <div className="card mb-5 pt-5" style={{ "--bs-card-bg": "#282c31", height: "440px" }}>
        {!showStage ? (
          <div className="d-flex justify-content-center py-5 my-5">
            <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw my-5"></i>
          </div>
        ) : (
          <>
            <h1 className="mb-5">{message}</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-group d-flex flex-column mb-5 position-relative">
                {
                  isLoading && (
                    <div className="position-absolute top-0 end-50" style={{transform: "translateX(30px)"}}>
                      <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw my-5"></i>
                    </div>
                  )
                }
                <input
                  className={
                    "h1 text-uppercase form-control border-0 form-control-lg mb-3 mx-auto text-center bg" +
                    isElementActive(isValueEmpty) +
                    isDisabled
                  }
                  type="text"
                  value={inputValue}
                  onChange={(event) => onChangeHandler(event.target.value)}
                  style={{ width: "143px", height: "143px", fontSize: "60px", transition: "all 1s ease-out" }}
                  placeholder={placeholder}
                  title="Type a letter"
                />
                <button
                  className={
                    "btn btn-lg fw-bold border-0 py-3 mx-auto btn" +
                    isElementActive(!isValueEmpty) +
                    noValue
                  }
                  type="submit"
                  disabled={isLoading || isValueEmpty}
                  title="Try"
                >
                  Guess letter
                </button>
              </div>
            </form>
          </>
        )}
      </div>
      <Errors showStage={showStage} message={message} historic={historic} isError={isError} />
    </div>
  );
};

export default Stage;
