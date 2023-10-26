import React from "react";
import "./Pokecard.css";

const Pokecard = ({ name, img, type, exp }) => {
  return (
    <div className="Pokecard">
      <h4 className="Pokecard-name">{name}</h4>
      <img className="Pokecard-img" src={img} alt="" />
      <p>Type: {type}</p>
      <p>EXP: {exp}</p>
    </div>
  );
};

export default Pokecard;
