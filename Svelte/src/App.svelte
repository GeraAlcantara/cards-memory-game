<script>
  import { onMount } from "svelte";
  import MemoryCard from "./components/MemoryCard.svelte";

  const cards = [
		{
			name: "react",
			face: "react.svg",
		},
		{
			name: "ember",
			face: "ember.svg",
		},
		{
			name: "vue",
			face: "vue.svg",
		},
		{
			name: "node",
			face: "node.svg",
		},
		{
			name: "svelte",
			face: "svelte.svg",
		},
		{
			name: "angular",
			face: "angular.svg",
		},
	]

	// STATE
	let lockBoard = false
	let firstCard = null
	let secondCard = null

	// HELPERS
	function unflipCards() {
		setTimeout(() => {
			firstCard.classList.remove('flip')
			secondCard.classList.remove('flip')
			resetBoard()
		}, 1500)
	}

	function disableCards() {
		firstCard.removeEventListener('click', firstCard)
		secondCard.removeEventListener('click', secondCard)
		resetBoard()
	}

	function resetBoard() {
		firstCard = secondCard = null
		lockBoard = false
	}

	// HANDLERS
	function handleCardFlip(e) {
		const card = e.detail.card

		if (lockBoard)	return

		if (card === firstCard) return

		card.classList.add('flip')

		if (!firstCard) {
			firstCard = card
			return
		}

		secondCard = card
		
		lockBoard = true
		if (firstCard.dataset['framework'] === secondCard.dataset['framework']) {
			disableCards()
		} else {
			unflipCards()
		}
	}
	
	// RUNS AFTER THE COMPONENT FIRST RENDER
	onMount(() => {
		// randomize the position of card
		const cards = document.querySelectorAll('.memory-card')

		cards.forEach((card) => {
			const randomPos = Math.floor(Math.random() * cards.length)
			// @ts-ignore
			card.style.order = randomPos
		})
	})
</script>

<main class="memory-game">
  {#each cards as card}
    <MemoryCard 
			on:flip={handleCardFlip}
			framework={`${card.name}`}
      card={card} 
			/>
			<MemoryCard 
			on:flip={handleCardFlip}
			framework={`${card.name}`}
      card={card} 
    />
  {/each}
</main>
