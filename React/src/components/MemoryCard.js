export default function MemoryCard(props) {
  return (
    <div className="memory-card" data-framework={props.face} adss>
      <img className="front-face" src={props.imgPath} alt={props.face} />
      <img
        className="back-face"
        // src={require("../img/js-badge.svg").default} Remove JS badge as back-face, may be confusing
        src={'/img/blank.svg'}
        alt={props.face || 'Click the card'} // Alt will default to dataFramework, in baseGame every alt is the same as well
      />
    </div>
  );
}
