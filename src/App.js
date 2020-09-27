import React from "react";
import "./styles/App.scss";

import { Container } from "./components/container/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree, faTractor } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  return (
    <div className="App">
      <h1>
        <FontAwesomeIcon className="icon" icon={faTree} size="xs" /> Seasonal
        Crops
      </h1>
      <Container />
    </div>
  );
}
