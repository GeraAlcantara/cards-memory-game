import MemoryCard from "./components/MemoryCard";
import React, { useState, useEffect } from "react";

const cardImages = [
    { src: require("./img/angular.svg").default, matched: false },
    { src: require("./img/react.svg").default, matched: false },
    { src: require("./img/ember.svg").default, matched: false },
    { src: require("./img/vue.svg").default, matched: false },
    { src: require("./img/node.svg").default, matched: false },
    { src: require("./img/svelte.svg").default, matched: false },
];

function App() {
    //const cards = document.querySelectorAll(".memory-card");
    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);
    const [choiceOne, setChoiceOne] = useState(null);
    const [choiceTwo, setChoiceTwo] = useState(null);
    const [disabled, setDisabled] = useState(false);

    // shuffle cards
    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }));

        setCards(shuffledCards);
        setChoiceOne(null);
        setChoiceTwo(null);
        setTurns(0);
    };

    // handle a choice
    const handleChoice = (card) => {
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    };

    //compare two cards
    useEffect(() => {
        if (choiceOne && choiceTwo) {
            setDisabled(true);

            if (choiceOne.src === choiceTwo.src) {
                setCards((prevCards) => {
                    return prevCards.map((card) => {
                        if (card.src === choiceOne.src) {
                            return { ...card, matched: true };
                        } else {
                            return card;
                        }
                    });
                });
                resetTurns();
            } else {
                setTimeout(() => resetTurns(), 1000);
            }
        }
    }, [choiceOne, choiceTwo]);


    // reset choices & increase turns
    const resetTurns = () => {
        setChoiceOne(null);
        setChoiceTwo(null);
        setTurns((prevTurns) => prevTurns + 1);
        setDisabled(false);
    };

    //start game automatically
    useEffect(() => {
        shuffleCards();
    }, []);

    return (
        <div className="App">
            <button onClick={shuffleCards}>New Game</button>
            {/* <!-- Game container --> */}
            <section className="memory-game">
                {
                    cards.map((card) => (
                        <MemoryCard
                            key={card.id}
                            card={card}
                            handleChoice={handleChoice}
                            flipped={card === choiceOne || card === choiceTwo || card.matched}
                            disabled={disabled}
                        />
                    ))
                }
            </section>
            <p style={{fontSize: "1.4rem"}}>Turns : {turns}</p>
        </div>
    );
}

export default App;
