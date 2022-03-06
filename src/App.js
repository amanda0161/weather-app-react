import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Weather weather-app-wrapper">
        <Weather defaultCity="Manchester" />

        <footer>
          This project is{" "}
          <a
            href="https://github.com/amanda0161/weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced
          </a>{" "}
          and was coded by 📸{" "}
          <a
            href="https://www.urbexadventure.com/"
            target="_blank"
            rel="noreferrer"
          >
            Amanda Charlesworth
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
