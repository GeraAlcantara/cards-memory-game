<template>
	<!-- Game container -->
	<section class="memory-game">
		<!-- 2 Set of Cards -->
		<card-component v-for="card in cards" :key="`${card.name}-1`" class="memory-card" :data-framework="card.name" :img-pwd="imgPwd" :alt="card.name" :front="card.front" />
		<card-component v-for="card in cards" :key="`${card.name}-2`" class="memory-card" :data-framework="card.name" :img-pwd="imgPwd" :alt="card.name" :front="card.front" />
		<!-- <card-component class="memory-card" :img-pwd="imgPwd" alt="angular" front="angular.svg" /> -->
		<!-- End 2 Set of Cards -->
	</section>
</template>
<script>
import CardComponent from '@/components/CardComponent.vue'

export default {
	/* TODO:  #32 Implement a 2D dimencional array to place the card on the grid  */
	components: { CardComponent },
	data() {
		return {
			cards: [
				{
					name: "react",
					front: "react.svg",
				},
				{
					name: "ember",
					front: "ember.svg",
				},
				{
					name: "vue",
					front: "vue.svg",
				},
				{
					name: "node",
					front: "node.svg",
				},
				{
					name: "svelte",
					front: "svelte.svg",
				},
				{
					name: "angular",
					front: "angular.svg",
				},
			],
			imgPwd: 'src/assets/img',
			hasFlippedCard: false,
			lockBoard: false,
			firstCard: false,
			secondCard: false,
		}
	},
	mounted() {
		const cards = document.querySelectorAll('.memory-card')

		cards.forEach((card) => {
			const randomPos = Math.floor(Math.random() * cards.length)
			card.style.order = randomPos
		})

		cards.forEach((card) => card.addEventListener('click', this.flipCard))
	},
	methods: {
		flipCard(event) {
			if (this.lockBoard) {
				return
			}
			if (event.currentTarget === this.firstCard) {
				// Fixed Issue #38 : card remains flipped when card was double clicked both in React and Vue app
				return
			}

			event.currentTarget.classList.add('flip')

			if (!this.hasFlippedCard) {
				this.hasFlippedCard = true
				this.firstCard = event.currentTarget
				return
			}
			this.secondCard = event.currentTarget
			/* this.hasFlippedCard = false; */
			this.checkForMatch()
		},
		checkForMatch() {
			let isMatch = this.firstCard.dataset['framework'] === this.secondCard.dataset['framework']
			isMatch ? this.disableCards() : this.unflipCards()
		},
		disableCards() {
			this.firstCard.removeEventListener('click', this.flipCard)
			this.secondCard.removeEventListener('click', this.flipCard)
			this.resetBoard()
		},
		unflipCards() {
			this.lockBoard = true
			setTimeout(() => {
				this.firstCard.classList.remove('flip')
				this.secondCard.classList.remove('flip')
				this.resetBoard()
			}, 1500)
		},
		resetBoard() {
			this.hasFlippedCard = this.lockBoard = false
			this.firstCard = this.secondCard = false
		},
	},
}
</script>
