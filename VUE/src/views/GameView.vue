<template>
	<!-- Game container -->
	<section class="memory-game">
		<!-- TODO: #31 Implement a loop to create each component -->
		<!-- 2 Set of Cards for Angular -->
		<card-component class="memory-card" :img-pwd="imgPwd" alt="angular" front="angular.svg" />
		<card-component class="memory-card" :img-pwd="imgPwd" alt="angular" front="angular.svg" />
		<!-- End 2 Set of Cards for Angular -->

		<!-- 2 Set of Cards for React -->
		<card-component class="memory-card" data-framework="React" :img-pwd="imgPwd" alt="react" front="react.svg" />
		<card-component class="memory-card" data-framework="React" :img-pwd="imgPwd" alt="react" front="react.svg" />
		<!-- end 2 Set of Cards for React -->

		<!-- juego de cartas 3 ember -->
		<card-component class="memory-card" data-framework="ember" :img-pwd="imgPwd" alt="ember" front="ember.svg" />
		<card-component class="memory-card" data-framework="ember" :img-pwd="imgPwd" alt="ember" front="ember.svg" />
		<!-- end juego de cartas 1 ember -->

		<!-- juego de cartas 4 Vue -->
		<card-component class="memory-card" data-framework="vue" :img-pwd="imgPwd" alt="vue" front="vue.svg" />
		<card-component class="memory-card" data-framework="vue" :img-pwd="imgPwd" alt="vue" front="vue.svg" />
		<!-- end juego de cartas 4 Vue -->

		<!-- juego de cartas 5 node -->
		<card-component class="memory-card" data-framework="node" :img-pwd="imgPwd" alt="node" front="node.svg" />
		<card-component class="memory-card" data-framework="node" :img-pwd="imgPwd" alt="node" front="node.svg" />
		<!-- end juego de cartas 5 node -->

		<!-- juego de cartas 5 svelte -->
		<card-component class="memory-card" data-framework="svelte" :img-pwd="imgPwd" alt="svelte" front="svelte.svg" />
		<card-component class="memory-card" data-framework="svelte" :img-pwd="imgPwd" alt="svelte" front="svelte.svg" />
		<!-- end juego de cartas 5 svelte -->
	</section>
</template>
<script>
import CardComponent from '@/components/CardComponent.vue'

export default {
	/* TODO:  #32 Implement a 2D dimencional array to place the card on the grid  */
	components: { CardComponent },
	data() {
		return {
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
			if (this === this.firstCard) {
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
