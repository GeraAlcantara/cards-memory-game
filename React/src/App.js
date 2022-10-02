import React, { useState } from "react";
import MemoryCard from "./components/MemoryCard";

const createMatrix = () => {
  const distinct = ["ember", "node", "svelte", "angular", "react", "vue"];
  const matrix = [];
  for (let face of distinct) {
    const cell = {
      face,
      imgPath: `/img/${face}.svg`,
    };
    let pair = [cell, cell];
    matrix.push(...pair);
  }
  // shuffle array   
  for (let i = matrix.length - 1; i > 0; i--) {
    let randomPos = Math.floor(Math.random() * (i + 1));
    [matrix[i], matrix[randomPos]] = [matrix[randomPos], matrix[i]];
  }
  return matrix.map((cell, index) => ({
    ...cell,
    id: index,
    pressed: false,
  }));
};

function App() {
  const [grid, setGrid] = useState(createMatrix());
  const [matched, setMatched] = useState(new Set([]));

  return (
	<div className="App">
		<section className="memory-game">
			{grid.map((cell, index) => (
				<MemoryCard
					key={index}
					face={cell.face}
				/>
			))}
		</section>
	</div>
  )
}

export default App;
