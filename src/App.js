import "./App.css";
import Home from "./components/home";

function App() {
  const handleClick = () => {
    window.location.reload();
  };

  return (
    <>
      <header className="mb-auto">
        <div>
          <button
            onClick={handleClick}
            className="h3 float-md-center mb-0 mt-3 btn btn-dark"
            title="Restart game"
          >
            Hanging Game
          </button>
        </div>
      </header>
      <Home />
    </>
  );
}

export default App;
