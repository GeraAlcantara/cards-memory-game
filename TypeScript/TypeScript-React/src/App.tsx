import './App.css'
import { MemoryCard } from './components/MemoryCard'
import { itemList } from './data/items'

export const App = () => {
  return (
    <div className="App">
      <section className="memory-game">
        {itemList.map((item) => (
          <MemoryCard
            name={item.name}
            image={item.image}
          />
        ))}
      </section>
    </div>
  )
}
