import MemoryCard from "./components/MemoryCard";
import {useEffect} from 'react';

function App() {

    useEffect(() => {
        const cards = document.querySelectorAll(".memory-card");

        let hasFlippedCard = false;
        let lockBoard = false;
        let firstCard, secondCard;
    
        function flipCard() {
            if (lockBoard) {
                return;
            }
            if (this === firstCard) {
                return;
            }
            this.classList.add("flip");
    
            if (!hasFlippedCard) {
                hasFlippedCard = true;
                firstCard = this;
                return;
            }
            secondCard = this;
            /* hasFlippedCard = false; */
    
            checkForMatch();
        }
    
        function checkForMatch() {
            let isMatch =
                firstCard.dataset.framework === secondCard.dataset.framework;
            isMatch ? disableCards() : unflipCards();
        }
    
        function disableCards() {
            firstCard.removeEventListener("click", flipCard);
            secondCard.removeEventListener("click", flipCard);
            resetBoard();
        }
    
        function unflipCards() {
            lockBoard = true;
            setTimeout(() => {
                firstCard.classList.remove("flip");
                secondCard.classList.remove("flip");
                resetBoard();
            }, 1500);
        }
    
        function resetBoard() {
            hasFlippedCard = lockBoard = false;
            firstCard = secondCard = false;
        }
    
        cards.forEach((card) => {
            const randomPos = Math.floor(Math.random() * cards.length);
            card.style.order = randomPos;
        });
    
        cards.forEach((card) => card.addEventListener("click", flipCard));
    
    })
   
    return (
        <div className="App">
            {/* <!-- Game container --> */}
            <section className="memory-game">
                <MemoryCard
                    dataFramework="angular"
                    frontFace={require("./img/angular.svg").default}
                    alt="angular"
                />
                <MemoryCard
                    dataFramework="angular"
                    frontFace={require("./img/angular.svg").default}
                    alt="angular"
                />
                <MemoryCard
                    dataFramework="React"
                    frontFace={require("./img/react.svg").default}
                    alt="React"
                />
                <MemoryCard
                    dataFramework="React"
                    frontFace={require("./img/react.svg").default}
                    alt="React"
                />
                <MemoryCard
                    dataFramework="ember"
                    frontFace={require("./img/ember.svg").default}
                    alt="ember"
                />
                <MemoryCard
                    dataFramework="ember"
                    frontFace={require("./img/ember.svg").default}
                    alt="ember"
                />
                <MemoryCard
                    dataFramework="vue"
                    frontFace={require("./img/vue.svg").default}
                    alt="vue"
                />
                <MemoryCard
                    dataFramework="vue"
                    frontFace={require("./img/vue.svg").default}
                    alt="vue"
                />
                <MemoryCard
                    dataFramework="node"
                    frontFace={require("./img/node.svg").default}
                    alt="node"
                />
                <MemoryCard
                    dataFramework="node"
                    frontFace={require("./img/node.svg").default}
                    alt="node"
                />
                <MemoryCard
                    dataFramework="svelte"
                    frontFace={require("./img/svelte.svg").default}
                    alt="svelte"
                />
                <MemoryCard
                    dataFramework="svelte"
                    frontFace={require("./img/svelte.svg").default}
                    alt="svelte"
                />
            </section>
        </div>
    );
}

export default App;
