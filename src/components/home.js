import React, { useState, useEffect } from "react";
import EndMessage from "./end-message";
import Stage from "./stage";
import FooterBar from "./footer-bar";

const Home = () => {
  const [sessionId, setSessionId] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://gamming.herokuapp.com/hangman-game")
      .then((response) => response.json())
      .then((data) => {
        setSessionId(data.session_id);
        setMessage(data.message);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <main className="px-3">
        {message === "Congratulations! You have disarmed the bomb." ||
        message === "Sorry, the bomb has exploded." ? (
          <EndMessage message={message} />
        ) : (
          <Stage
            message={message}
            setSessionId={setSessionId}
            sessionId={sessionId}
            setMessage={setMessage}
          />
        )}
      </main>
      <FooterBar />
    </>
  );
};

export default Home;
