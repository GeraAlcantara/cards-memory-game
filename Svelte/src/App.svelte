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
	let correctMatch = 0
	let lockBoard = false
	let firstCard = null
	let secondCard = null

	// HELPERS
	function randomizeCardOrder() {
		// randomize the position of card
		const cards = document.querySelectorAll('.memory-card')

		cards.forEach((card) => {
			const randomPos = Math.floor(Math.random() * cards.length)
			// @ts-ignore
			card.style.order = randomPos
		})
	}

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
			correctMatch++
			disableCards()
		} else {
			unflipCards()
		}
	}

	function resetGame() {
		// unflip all cards
		document.querySelectorAll('.memory-card').forEach(card => {
			card.classList.remove('flip')
			card.addEventListener('click', handleCardFlip);
		})

		randomizeCardOrder()

		correctMatch = 0
		resetBoard()
	}
	
	// RUNS AFTER THE COMPONENT FIRST RENDER
	onMount(() => {
		randomizeCardOrder();
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

	{#if correctMatch === 6}
		<div class="modal">
			<h3>You WON!!!</h3>
			<button class="reset" on:click={resetGame}>Reset</button>
		</div>
	{/if}
</main>

<style scoped>
.modal {
	font-family: Arial, Helvetica, sans-serif;
	text-align: center;
	position: absolute;
	background: linear-gradient(to right, hsl(210, 30%, 20%), hsl(255, 30%, 25%));
	width: 600px;
	height: 300px;
	top: 50%;
	left: 50%;
	translate: -50% -50%;
	border-radius: 9px;

	font-size: 4rem;
	letter-spacing: 1px;
}

.modal h3 {
	margin-top: 3rem;
	color: #6aaf90;
}

.reset {
	background-color: #ed6755;
    border: none;
    border-radius: 5px;
    width: 200px;
    padding: 14px;
    font-size: 16px;
    color: white;
    box-shadow: 0px 6px 18px -5px rgba(237, 103, 85, 1);
}
</style>