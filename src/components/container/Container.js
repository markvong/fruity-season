import React, { useState, useEffect } from "react";
import "./style.scss";
import { Card } from "../card/Card";

export const Container = () => {
  let [data, setData] = useState([]);
  let [states, setStates] = useState([]);
  let [seasons, setSeasons] = useState([]);
  let [state, setState] = useState("");
  let [season, setSeason] = useState("");
  let [produce, setProduce] = useState([]);

  useEffect(() => {
    fetch("./fruits.json")
      .then((res) => res.json())
      .then((resData) => {
        let states = Object.keys(resData);
        let produceBySeasons = Object.values(resData);
        let seasons = Object.keys(produceBySeasons[0]);
        let defaultState = states[0];
        let defaultSeason = seasons[0];
        let produce = resData[defaultState][defaultSeason];
        // console.log(produce);
        setData(resData);
        setStates(states);
        setSeasons(seasons);
        setState(defaultState);
        setSeason(defaultSeason);
        setProduce(produce);
      });
  }, []);

  const changeProduce = (state, season) => {
    setProduce(data[state][season]);
  };

  const changeState = (event) => {
    let newState = event.target.value;
    setState(newState);
    changeProduce(newState, season);
  };

  const changeSeason = (event) => {
    let newSeason = event.target.value;
    setSeason(newSeason);
    changeProduce(state, newSeason);
  };

  return (
    <div>
      <div id="select-container-div">
        <div id="select-state-div" className="select-div">
          <label htmlFor="states" id="states-label">
            Select a state
          </label>
          <select name="states" id="states" onChange={changeState}>
            {states.map((state, idx) => (
              <option value={state} key={idx}>
                {state}
              </option>
            ))}
          </select>
        </div>
        <div id="select-season-div" className="select-div">
          <label htmlFor="seasons" id="seasons-label">
            Select a season
          </label>
          <select name="seasons" id="seasons" onChange={changeSeason}>
            {seasons.map((season, idx) => (
              <option value={season} key={idx}>
                {season}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div id="container-div">
        <Card state={state} season={season} produce={produce} />
      </div>
    </div>
  );
};
