export default function MemoryCard(props) {
    return (
        <div className="memory-card" data-framework={props.dataFramework} adss>
            <img className="front-face" src={props.frontFace} alt={props.alt} />
            <img
                className="back-face"
                // src={require("../img/js-badge.svg").default} Remove JS badge as back-face, may be confusing
                src={require("../img/blank.svg").default}
                alt={props.alt || props.dataFramework} // Alt will default to dataFramework, in baseGame every alt is the same as well
            />
        </div>
    );
}
