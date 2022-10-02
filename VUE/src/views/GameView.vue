<template>
  <!-- Game container -->
  <section class="memory-game">
    <!-- 2 Set of Cards for Angular -->
    <div class="memory-card">
      <img class="front-face" :src="`${imgPwd}/angular.svg`" alt="angular" />
      <img class="back-face" :src="`${imgPwd}/js-badge.svg`" alt="angular" />
    </div>
    <div class="memory-card">
      <img class="front-face" :src="`${imgPwd}/angular.svg`" alt="angular" />
      <img class="back-face" :src="`${imgPwd}/js-badge.svg`" alt="angular" />
    </div>
    <!-- End 2 Set of Cards for Angular -->

    <!-- 2 Set of Cards for React -->
    <div class="memory-card" data-framework="React">
      <img class="front-face" :src="`${imgPwd}/react.svg`" alt="React">
      <img class="back-face" :src="`${imgPwd}/js-badge.svg`" alt="memory card">
    </div>
    <div class="memory-card" data-framework="React">
      <img class="front-face" :src="`${imgPwd}/react.svg`" alt="React">
      <img class="back-face" :src="`${imgPwd}/js-badge.svg`" alt="memory card">
    </div>
    <!-- end 2 Set of Cards for React -->

    <!-- juego de cartas 3 ember -->
    <div class="memory-card" data-framework="ember">
      <img class="front-face" :src="`${imgPwd}/ember.svg`" alt="ember">
      <img class="back-face" :src="`${imgPwd}/js-badge.svg`" alt="memory card">
    </div>
    <div class="memory-card" data-framework="ember">
      <img class="front-face" :src="`${imgPwd}/ember.svg`" alt="ember">
      <img class="back-face" :src="`${imgPwd}/js-badge.svg`" alt="memory card">
    </div>
    <!-- end juego de cartas 1 ember -->

    <!-- juego de cartas 4 Vue -->
    <div class="memory-card" data-framework="vue">
      <img class="front-face" :src="`${imgPwd}/vue.svg`" alt="vue">
      <img class="back-face" :src="`${imgPwd}/js-badge.svg`" alt="memory card">
    </div>
    <div class="memory-card" data-framework="vue">
      <img class="front-face" :src="`${imgPwd}/vue.svg`" alt="vue">
      <img class="back-face" :src="`${imgPwd}/js-badge.svg`" alt="memory card">
    </div>
    <!-- end juego de cartas 4 Vue -->

    <!-- juego de cartas 5 node -->
    <div class="memory-card" data-framework="node">
      <img class="front-face" :src="`${imgPwd}/node.svg`" alt="node">
      <img class="back-face" :src="`${imgPwd}/js-badge.svg`" alt="memory card">
    </div>
    <div class="memory-card" data-framework="node">
      <img class="front-face" :src="`${imgPwd}/node.svg`" alt="node">
      <img class="back-face" :src="`${imgPwd}/js-badge.svg`" alt="memory card">
    </div>
    <!-- end juego de cartas 5 node -->

    <!-- juego de cartas 5 svelte -->
    <div class="memory-card" data-framework="svelte">
      <img class="front-face" :src="`${imgPwd}/svelte.svg`" alt="svelte">
      <img class="back-face" :src="`${imgPwd}/js-badge.svg`" alt="memory card">
    </div>
    <div class="memory-card" data-framework="svelte">
      <img class="front-face" :src="`${imgPwd}/svelte.svg`" alt="svelte">
      <img class="back-face" :src="`${imgPwd}/js-badge.svg`" alt="memory card">
    </div>
    <!-- end juego de cartas 5 svelte -->
  </section>
</template>
<script>
export default {
  data() {
    return {
      imgPwd: "src/assets/img",
      hasFlippedCard: false,
      lockBoard: false,
      firstCard: false,
      secondCard: false
    }
  },
  mounted() {
    const cards = document.querySelectorAll(".memory-card");

    cards.forEach((card) => {
      const randomPos = Math.floor(Math.random() * cards.length);
      card.style.order = randomPos;
    });

    cards.forEach((card) => card.addEventListener("click", this.flipCard));
  },
  methods: {
    flipCard(event) {
      if (this.lockBoard) {
        return;
      }
      if (this === this.firstCard) {
        return;
      }

      event.currentTarget.classList.add("flip");

      if (!this.hasFlippedCard) {
        this.hasFlippedCard = true;
        this.firstCard = event.currentTarget;
        return;
      }
      this.secondCard = event.currentTarget;
      /* this.hasFlippedCard = false; */
      this.checkForMatch();
    },
    checkForMatch() {
      let isMatch = this.firstCard.dataset["framework"] === this.secondCard.dataset["framework"];
      isMatch ? this.disableCards() : this.unflipCards();
    },
    disableCards() {
      this.firstCard.removeEventListener("click", this.flipCard);
      this.secondCard.removeEventListener("click", this.flipCard);
      this.resetBoard();
    },
    unflipCards() {
      this.lockBoard = true;
      setTimeout(() => {
        this.firstCard.classList.remove("flip");
        this.secondCard.classList.remove("flip");
        this.resetBoard();
      }, 1500);
    },
    resetBoard() {
      this.hasFlippedCard = this.lockBoard = false;
      this.firstCard = this.secondCard = false;
    },
  }
}

</script>

