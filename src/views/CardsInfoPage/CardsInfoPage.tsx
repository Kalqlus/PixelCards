import React from "react";
import Card from "../../components/Card/Card";
import { ICard } from "../../Utils/ICard";

import CardsJSON from "../../Utils/Cards.json";

import "./CardsInfoPage.css";


function CardsInfoPage() {
  const cards: ICard[] = CardsJSON;

  return (
    <>
      <p>Card info</p>
      <div className="cards-wrapper">
          {cards.map((card: ICard, index) => {
            return (
              <Card
                name={card.name}
                description={card.description}
                rarity={card.rarity}
                cost={card.cost}
                damage={card.damage}
                heal={card.heal}
                key={index}
              />
            );
          })}
      </div>
    </>
  );
}

export default CardsInfoPage;
