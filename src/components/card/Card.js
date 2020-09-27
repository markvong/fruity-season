import React, { useState, useEffect } from "react";
import "./style.scss";

export const Card = (props) => {
  let name = props.produce;
  let picture = props.produce.picture;
  let description = props.produce.description;

  return (
    <div id="card-div">
      <h4>{name}</h4>
      <img
        src={
          picture
            ? picture
            : "https://i.pinimg.com/originals/32/e2/41/32e2413585f1d2e0333c7dee3c4808bf.jpg"
        }
        alt="Img"
        id="prod-img"
      />
      <p>{description ? description : "This is a default description."}</p>
    </div>
  );
};
