import { MemoryCardProps } from "../data/props";
import JavaScript from "../assets/js-badge.svg";

export const MemoryCard = (props: MemoryCardProps) => {
  return (
    <div className="memory-card">
      <img className="front-face" src={props.image} alt={props.name} />
      <img className="back-face" src={JavaScript} alt="JavaScript" />
    </div>
  );
}