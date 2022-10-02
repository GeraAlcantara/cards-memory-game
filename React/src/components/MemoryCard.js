export default function MemoryCard({ data, handleClickCard }) {
  return (
    <div
      className={`memory-card ${data.revealed ? 'flip' : ''}`}
      onClick={handleClickCard}
    >
      <img
        data-cell-index={data.id}
        className='back-face'
        src={'/img/js-badge.svg'}
        alt="Click me!"
      />
      <img
        data-cell-index={data.id}
        className='front-face'
        src={data.imgPath}
        alt={data.face}
      />
    </div>
  );
}
