import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="book" />
        </main>
        <footer className="App-footer">
          This project was coded by{" "}
          <a
            href="https://github.com/DikamogeloM"
            target="_blank"
            rel="noopener noreferrer "
          >
            Dikamogelo Mabusela
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/DikamogeloM/react-dictionary-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github{" "}
          </a>
          and hosted on{" "}
          <a
            href="https://jolly-bienenstitch-8c3da7.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify.
          </a>
        </footer>
      </div>
    </div>
  );
}
