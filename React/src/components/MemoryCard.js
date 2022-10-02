import JavaScriptSVG from '../img/js-badge.svg';

export default function MemoryCard({ data, handleClickCard }) {
  return (
    <div
      className={`memory-card ${data.revealed ? 'flip' : ''}`}
      onClick={handleClickCard}
    >
      <img
        data-cell-index={data.id}
        className='back-face'
        src={JavaScriptSVG}
        alt="Click me!"
      />
      <img
        data-cell-index={data.id}
        className='front-face'
        src={data.image}
        alt={data.face}
      />
    </div>
  );
}
