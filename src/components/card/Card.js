import React, { useState, useEffect } from "react";
import "./style.scss";

export const Card = (props) => {
  let state = props.state;
  let season = props.season;
  let produce = props.produce;

  return (
    <div id="card-div">
      <h1> {state} </h1>
      <h2> {season} </h2>
      <ul>
        {produce.map((prod, idx) => (
          <li key={idx}>{prod}</li>
        ))}
      </ul>
    </div>
  );
};
