import React, { useEffect, useState } from "react";
import MemoryCard from "./components/MemoryCard";
import { createMatrix } from "./helper/shuffle";
import { useStopwatch } from "react-timer-hook";
import _ from "underscore";

function App() {
  const [grid, setGrid] = useState(createMatrix());
  const [matched, setMatched] = useState([]);
  const [focused, setFocused] = useState([]);
  const [attempt, setAttempt] = useState(0);
  const [history, setHistory] = useState([]);

  function historyInit() {
    let histories = window.localStorage.getItem("history");
    if (!histories) {
      histories = [];
      window.localStorage.setItem("history", JSON.stringify(histories));
    }
    histories = JSON.parse(window.localStorage.getItem("history"));
    setHistory(_.sortBy(histories, "attempt"));
  }
  useEffect(() => {
    historyInit();
  }, []);

  // let { seconds, minutes, hours, days, isRunning, start, pause, reset } =useStopwatch({ autoStart: false });
  let { seconds, isRunning, start, reset } =useStopwatch({ autoStart: false });

  const resetGame = () => {
    setMatched([]);
    setFocused([]);
    setGrid(createMatrix());
    setAttempt(0);
    historyInit()
  };
  const handleClickCard = (event) => {
    // logic for persisting the card(s) if matched otherwise hide them
    const cardPosition = parseInt(event.target.getAttribute("data-cell-index"));
    // user cannot select more than two cards
    if (focused.length > 1) return;
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

        // attempt counter
        setAttempt((prev) => prev + 1);
        // timer start
        if (!isRunning) {
          start();
        }

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
            let newScore = {
              attempt: attempt + 1,
              time: seconds,
              date: new Date().toLocaleString(),
            };
            let newHistory = history;
            newHistory.push(newScore);
            _.sortBy(newHistory, "attempt");
            window.localStorage.setItem("history", JSON.stringify(newHistory));

            // timer reset
            reset(false, false);

            setTimeout(() => {
              alert(
                "Yayy. You have solved the game. Would you like to play again?"
              );
              resetGame();
            }, 500);
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
          }, 500);
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

      <div className="score-container">
        <div className="score">
          <h3 className="score-board">Attempt : {attempt}</h3>
          <h3 className="score-board">Stopwatch : {seconds} s</h3>
        </div>
        <div className="highscore">
          {history.length > 0 && (
            <div>
              <h2 className="">Highscore</h2>
              {history.map((obj, index) => {
                return (
                  <div className="history" key={obj.date}>
                    <b>#{index + 1}</b>
                    <p>{obj.attempt} Attempt</p>
                    <p>Time : {obj.time}s</p>
                    <p>{obj.date}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

    </div>
  );
}

export default App;
