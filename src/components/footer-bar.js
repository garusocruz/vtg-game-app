import React from "react";

const FooterBar = () => {
  return (
    <footer className="mt-auto text-white-50 opacity-50 lead fs-6">
      <p>
        by{" "}
        <a
          href="https://github.com/garusocruz"
          rel="noreferrer"
          target="_blank"
          className="text-white"
        >
          @garusocruz
        </a> + {" "}
        <a
          href="https://github.com/cleitonpax"
          rel="noreferrer"
          target="_blank"
          className="text-white"
        >
          @cleitonpax
        </a>
      </p>
    </footer>
  );
};

export default FooterBar;
