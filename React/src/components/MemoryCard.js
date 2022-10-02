export default function MemoryCard({ card, handleChoice, flipped, disabled }) {
    const handleClick = () => {
        if (!disabled) {
            handleChoice(card);
        }
    }

    return (
        <div className="memory-card">
            <div className={flipped ? "flipped" : ""}>
                <img className="front-face" src={card.src} alt="" />
                <img
                    className="back-face"
                    // src={require("../img/js-badge.svg").default} Remove JS badge as back-face, may be confusing
                    src={require("../img/blank.svg").default}
                    onClick={handleClick}
                // alt={props.alt || props.dataFramework} // Alt will default to dataFramework, in baseGame every alt is the same as well
                />
            </div>
        </div>
    );
}
