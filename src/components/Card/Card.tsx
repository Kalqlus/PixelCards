import React from "react";
import { ICard } from "../../Utils/ICard";

import "./Card.css";

function Card({ name, description, rarity, cost, damage, heal }: ICard) {
  return (
    <>
      <div className="card-wrapper">
        <h2>{name}</h2>
        <p>{description}</p>
        <p>{rarity}</p>
        <p>{cost}</p>
        <p>{damage}</p>
        <p>{heal}</p>
      </div>
    </>
  );
}

export default Card;
