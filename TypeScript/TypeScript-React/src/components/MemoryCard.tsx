import { MemoryCardProps } from "../ts/props.interface";
import JavaScript from "../assets/js-badge.svg";

export const MemoryCard = (props: MemoryCardProps) => {
  const flipCard = () => {
    if (props.isEnable) {
      props.handleClick(props.index);
    }
  }

  if (props.isDone) {
    return (
      <div 
        className="memory-card flip"
      >
        <img className="front-face" src={props.image} alt={props.name} />
        <img className="back-face" src={JavaScript} alt="JavaScript" />
      </div>
    );

  } else {
    return (
      <div 
        className={`memory-card ${props.isOpen && 'flip'}`} 
        onClick={flipCard}
      >
        <img className="front-face" src={props.image} alt={props.name} />
        <img className="back-face" src={JavaScript} alt="JavaScript" />
      </div>
    )  
  }
}