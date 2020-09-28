import React from "react";
import "./styles/App.scss";

import { Container } from "./components/container/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree, faCopyright } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  return (
    <div className="App">
      <header id="header">
        <h1>
          <FontAwesomeIcon className="icon" icon={faTree} size="xs" /> Seasonal
          Crops
        </h1>
      </header>
      <Container />
      <footer id="footer">
        <p>
          <FontAwesomeIcon icon={faCopyright} id="footer-icon" size="md" />{" "}
          Seasonal Crops by{" "}
          <a href="https://github.com/themansbak" className="portfolio-link">
            Alex Man
          </a>{" "}
          and{" "}
          <a href="https://github.com/markvong" className="portfolio-link">
            Mark Vong
          </a>
          .
        </p>
      </footer>
    </div>
  );
}
