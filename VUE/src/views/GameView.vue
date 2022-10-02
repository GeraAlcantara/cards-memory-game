<template>

  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Juego de Memoria</title>
  </head>

  <body>
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
  </body>

</template>
<script setup>
  const imgPwd = "src/assets/gameBase/src/img"
</script>
<script>

// export default {
//   data() {
//     return {

//       hasFlippedCard: false,
//       lockBoard: false,
//       firstCard: false,
//       secondCard: false

//     }
//   },
//   mounted() {
//     cards.forEach((card) => {
//       const randomPos = Math.floor(Math.random() * cards.length);
//       card.style.order = randomPos;
//     });

//     cards.forEach((card) => card.addEventListener("click", flipCard));

//   },
//   methods: {

//     flipCard() {
//       if (this.lockBoard) {
//         return;
//       }
//       if (this === firstCard) {
//         return;
//       }
//       this.classList.add("flip");

//       if (!hasFlippedCard) {
//         hasFlippedCard = true;
//         firstCard = this;
//         return;
//       }
//       secondCard = this;
//       /* hasFlippedCard = false; */

//       checkForMatch();
//     },

//     checkForMatch() {
//       let isMatch = firstCard.dataset.framework == secondCard.dataset.framework;
//       isMatch ? disableCards() : unflipCards();
//     },

//     disableCards() {
//       firstCard.removeEventListener("click", flipCard);
//       secondCard.removeEventListener("click", flipCard);
//       resetBoard();
//     },

//     unflipCards() {
//       lockBoard = true;
//       setTimeout(() => {
//         firstCard.classList.remove("flip");
//         secondCard.classList.remove("flip");
//         resetBoard();
//       }, 1500);
//     },

//     resetBoard() {
//       hasFlippedCard = lockBoard = false;
//       firstCard = secondCard = false;
//     },
//   }
</script>

