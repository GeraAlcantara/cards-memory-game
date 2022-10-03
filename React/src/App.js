import React, { useState } from "react";
import MemoryCard from "./components/MemoryCard";
import { createMatrix } from './helper/shuffle';

function App() {
  const [grid, setGrid] = useState(createMatrix());
  const [matched, setMatched] = useState([]);
  const [focused, setFocused] = useState([]);

  const resetGame = () => {
    setMatched([]);
    setFocused([]);
    setGrid(createMatrix());
  };

  const handleClickCard = (event) => {
    // logic for persisting the card(s) if matched otherwise hide them
    const cardPosition = parseInt(event.target.getAttribute("data-cell-index"));
    // user cannot select more than two cards
    if (focused.length > 1) return;

    // 'cardPosition' is NaN, when user click the same card frequently
    if (isNaN(cardPosition))  return;

    if (
      focused.indexOf(cardPosition) === -1 &&
      matched.indexOf(cardPosition) === -1
    ) {
      // user clicks the first or second card
      if (!focused.length) {
        // first card is selected
        let selection = [cardPosition];
        setGrid(
          grid.map((ele) =>
            ele.id === cardPosition || matched.indexOf(ele.id) > -1
              ? { ...ele, revealed: true }
              : { ...ele }
          )
        );
        setFocused(selection);
      } else if (focused.length === 1) {
        // second card is selected
        let prevSelection = focused[0];
        let selection = [prevSelection, cardPosition];
        setFocused(selection);
        if (grid[prevSelection].face === grid[cardPosition].face) {
          // cards have matched
          const paired = matched.concat(...selection);
          setGrid(
            grid.map((ele) =>
              paired.indexOf(ele.id) > -1
                ? { ...ele, revealed: true }
                : { ...ele, revealed: false }
            )
          );
          setMatched(paired);
          setFocused([]);
		  // alert box to reset game   
          if (paired.length === 12) {
            setTimeout(() => {
              alert(
                "Yayy. You have solved the game. Would you like to play again?"
              );
              resetGame();
            }, 2000);
          }
        } else {
          // show only matched and previously selected card. Hide selection after 2s
          setGrid(
            grid.map((ele) =>
              selection.indexOf(ele.id) > -1 || matched.indexOf(ele.id) > -1
                ? { ...ele, revealed: true }
                : { ...ele, revealed: false }
            )
          );
          setTimeout(() => {
            setGrid(
              grid.map((ele) =>
                matched.indexOf(ele.id) > -1
                  ? { ...ele, revealed: true }
                  : { ...ele, revealed: false }
              )
            );
            setFocused([]);
          }, 2000);
        }
      }
    }
  };

  return (
    <div className="App">
      <section className="memory-game">
        {grid.map((cell, index) => (
          <MemoryCard
            key={cell.face + index}
            data={cell}
            handleClickCard={handleClickCard}
          />
        ))}
      </section>
    </div>
  );
}

export default App;