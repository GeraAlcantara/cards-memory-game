import "./App.css";
import { useEffect, useState } from "react";
import { MemoryCard } from "./components/MemoryCard";
import { itemList } from "./data/items";
import { Shuffle } from "./helpers/shuffle";
import { Item } from "./ts/item.interface";

export const App = () => {
  const [items, setItems] = useState<Item[]>(() => Shuffle(itemList));
  const [openCards, setOpenCards] = useState<number[]>([]);
  const [doneCards, setDoneCards] = useState<any>({});
  const [clickable, setClickable] = useState<boolean>(true);

  const checkForMatch = () => {
    const [firstCard, secondCard] = openCards;

    if (items[firstCard].name == items[secondCard].name) {
      let cardName = items[firstCard].name;
      setOpenCards([]);
      setDoneCards((previousCard: Object) => ({
        ...previousCard,
        [cardName]: true,
      }));
      setClickable(true);
    } else {
      setOpenCards([]);
      setClickable(true);
    }
  };

  const cardClicked = (idx: number) => {
    if (openCards.length == 1) {
      const [prevCardIdx] = openCards;

      if (prevCardIdx != idx) {
        setOpenCards((prevIndex) => [...prevIndex, idx]);
        setClickable(false);
      }
    } else {
      setOpenCards([idx]);
    }
  };

  const checkCardIsDone = (item: Item): boolean => {
    return Boolean(doneCards[item.name]);
  };

  const checkCardIsOpen = (idx: number): boolean => {
    return openCards.includes(idx);
  };

  useEffect(() => {
    let timeout: number = 0;

    if (openCards.length === 2) {
      timeout = setTimeout(checkForMatch, 1000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [openCards]);

  return (
    <div className='App'>
      <section className='memory-game'>
        {items.map((item, idx) => (
          <MemoryCard
            key={idx}
            index={idx}
            name={item.name}
            image={item.image}
            handleClick={cardClicked}
            isDone={checkCardIsDone(item)}
            isOpen={checkCardIsOpen(idx)}
            isEnable={clickable}
          />
        ))}
      </section>
    </div>
  );
};
