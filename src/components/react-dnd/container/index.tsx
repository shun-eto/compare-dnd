import { FC, useState, useCallback } from "react";
import { Card } from "../card";
import update from "immutability-helper";

export interface Item {
  id: number;
  text: string;
}

export interface ContainerState {
  cards: Item[];
}

export const Container: FC = (props) => {
  const [cards, setCards] = useState<Item[]>([
    {
      id: 1,
      text: "Write a cool JS library",
    },
    {
      id: 2,
      text: "Make it generic enough",
    },
    {
      id: 3,
      text: "Write README",
    },
  ]);

  const moveCard = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const updatedCards = update(cards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, cards[dragIndex] as Item],
        ],
      });

      setCards(updatedCards);
    },
    [cards]
  );

  return (
    <div>
      {cards.map((card, index) => (
        <Card
          key={card.id}
          index={index}
          id={card.id}
          text={card.text}
          moveCard={moveCard}
        />
      ))}
    </div>
  );
};
