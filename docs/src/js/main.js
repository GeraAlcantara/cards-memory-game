const cards = document.querySelectorAll(".memory-card");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) {
    return;
  }
  if (this === firstCard) {
    return;
  }
  this.classList.add("flip");

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }
  secondCard = this;
  /* hasFlippedCard = false; */

  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework == secondCard.dataset.framework;
  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  resetBoard();
}

function unflipCards() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    resetBoard();
  }, 1500);
}

function resetBoard() {
  hasFlippedCard = lockBoard = false;
  firstCard = secondCard = false;
}

function removeDragImages() {
  var allImages = document.getElementsByTagName("img");
  for (element of allImages) { 
    element.draggable = false;
  }
}

removeDragImages()


cards.forEach((card) => {
  const randomPos = Math.floor(Math.random() * cards.length);
  card.style.order = randomPos;
});

cards.forEach((card) => card.addEventListener("click", flipCard));
