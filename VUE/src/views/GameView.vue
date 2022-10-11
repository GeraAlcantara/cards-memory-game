<template>
	<!-- Game container -->
	<section class="memory-game">
    <template v-for="index in cardsNum">
      <card-component v-for="(cardName, idx) in cards.names" :key="`${cardName}-${index}`" class="memory-card" :data-framework="cardName" :img-pwd="imgPwd" :alt="cardName" :front="cards['images'][idx]" />
    </template>
	</section>
</template>
<script>
import CardComponent from '@/components/CardComponent.vue'

export default {
	components: { CardComponent },
	data() {
		return {
      cardsNum: 2,
			cards: {
        names: ["react", "ember", "vue", "node", "svelte", "angular"],
        images: ["react.svg", "ember.svg", "vue.svg", "node.svg", "svelte.svg", "angular.svg"]
      },
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
				this.unflipCards()
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
