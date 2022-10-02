function App() {
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
            firstCard.dataset.framework == secondCard.dataset.framework;
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

    return (
        <div className="App">
            {/* <!-- Game container --> */}
            <section className="memory-game">
                <div className="memory-card">
                    <img
                        className="front-face"
                        src={require("./img/angular.svg").default}
                        alt="angular"
                    />
                    <img
                        className="back-face"
                        src={require("./img/js-badge.svg").default}
                        alt="angular"
                    />
                </div>
                <div className="memory-card">
                    <img
                        className="front-face"
                        src={require("./img/angular.svg").default}
                        alt="angular"
                    />
                    <img
                        className="back-face"
                        src={require("./img/js-badge.svg").default}
                        alt="angular"
                    />
                </div>
                {/* <!-- End 2 Set of Cards for Angular --> */}
                {/* <!-- 2 Set of Cards for React --> */}
                <div className="memory-card" data-framework="React">
                    <img
                        className="front-face"
                        src={require("./img/react.svg").default}
                        alt="React"
                    />
                    <img
                        className="back-face"
                        src={require("./img/js-badge.svg").default}
                        alt="memory card"
                    />
                </div>
                <div className="memory-card" data-framework="React">
                    <img
                        className="front-face"
                        src={require("./img/react.svg").default}
                        alt="React"
                    />
                    <img
                        className="back-face"
                        src={require("./img/js-badge.svg").default}
                        alt="memory card"
                    />
                </div>
                {/* <!-- end 2 Set of Cards for React --> */}

                {/* <!-- juego de cartas 3 ember --> */}
                <div className="memory-card" data-framework="ember">
                    <img
                        className="front-face"
                        src={require("./img/ember.svg").default}
                        alt="ember"
                    />
                    <img
                        className="back-face"
                        src={require("./img/js-badge.svg").default}
                        alt="memory card"
                    />
                </div>
                <div className="memory-card" data-framework="ember">
                    <img
                        className="front-face"
                        src={require("./img/ember.svg").default}
                        alt="ember"
                    />
                    <img
                        className="back-face"
                        src={require("./img/js-badge.svg").default}
                        alt="memory card"
                    />
                </div>
                {/* <!-- end juego de cartas 1 ember --> */}

                {/* <!-- juego de cartas 4 Vue --> */}
                <div className="memory-card" data-framework="vue">
                    <img
                        className="front-face"
                        src={require("./img/vue.svg").default}
                        alt="vue"
                    />
                    <img
                        className="back-face"
                        src={require("./img/js-badge.svg").default}
                        alt="memory card"
                    />
                </div>
                <div className="memory-card" data-framework="vue">
                    <img
                        className="front-face"
                        src={require("./img/vue.svg").default}
                        alt="vue"
                    />
                    <img
                        className="back-face"
                        src={require("./img/js-badge.svg").default}
                        alt="memory card"
                    />
                </div>
                {/* <!-- end juego de cartas 4 Vue --> */}

                {/* <!-- juego de cartas 5 node --> */}
                <div className="memory-card" data-framework="node">
                    <img
                        className="front-face"
                        src={require("./img/node.svg").default}
                        alt="node"
                    />
                    <img
                        className="back-face"
                        src={require("./img/js-badge.svg").default}
                        alt="memory card"
                    />
                </div>
                <div className="memory-card" data-framework="node">
                    <img
                        className="front-face"
                        src={require("./img/node.svg").default}
                        alt="node"
                    />
                    <img
                        className="back-face"
                        src={require("./img/js-badge.svg").default}
                        alt="memory card"
                    />
                </div>
                {/* <!-- end juego de cartas 5 node --> */}

                {/* <!-- juego de cartas 5 svelte --> */}
                <div className="memory-card" data-framework="svelte">
                    <img
                        className="front-face"
                        src={require("./img/svelte.svg").default}
                        alt="svelte"
                    />
                    <img
                        className="back-face"
                        src={require("./img/js-badge.svg").default}
                        alt="memory card"
                    />
                </div>
                <div className="memory-card" data-framework="svelte">
                    <img
                        className="front-face"
                        src={require("./img/svelte.svg").default}
                        alt="svelte"
                    />
                    <img
                        className="back-face"
                        src={require("./img/js-badge.svg").default}
                        alt="memory card"
                    />
                </div>
                {/* <!-- end juego de cartas 5 svelte --> */}
            </section>
        </div>
    );
}

export default App;
