var CardTypes = [{ name: "vue", image: "https://vuejs.org/images/logo.png" }, { name: "express", image: "https://coligo.io/images/express.svg" }, { name: "mongo", image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/45/MongoDB-Logo.svg/527px-MongoDB-Logo.svg.png" }, { name: "nodejs", image: "https://worldvectorlogo.com/logos/nodejs-icon.svg" }, { name: "webpack", image: "https://camo.githubusercontent.com/66747a6e05a799aec9c6e04a3e721ca567748e8b/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f313336353838312f313931383337332f32653035373166612d376462632d313165332d383436352d3839356632393164343366652e706e67" }, { name: "babel", image: "https://babeljs.io/images/logo.svg" }];

var shuffleCards = function shuffleCards() {
	var cards = [].concat(_.cloneDeep(CardTypes), _.cloneDeep(CardTypes));
	return _.shuffle(cards);
};
new Vue({
	el: "#app",

	data: {
		showSplash: false,
		cards: [],
		started: false,
		startTime: 0,
		turns: 0,
		flipBackTimer: null,
		timer: null,
		time: "--:--",
		score: 0
	},

	methods: {
		resetGame: function resetGame() {
			this.showSplash = false;
			var cards = shuffleCards();
			this.turns = 0;
			this.score = 0;
			this.started = false;
			this.startTime = 0;

			_.each(cards, function (card) {
				card.flipped = false;
				card.found = false;
			});

			this.cards = cards;
		},
		flippedCards: function flippedCards() {
			return _.filter(this.cards, function (card) {
				return card.flipped;
			});
		},
		sameFlippedCard: function sameFlippedCard() {
			var flippedCards = this.flippedCards();
			if (flippedCards.length == 2) {
				if (flippedCards[0].name == flippedCards[1].name) return true;
			}
		},
		setCardFounds: function setCardFounds() {
			_.each(this.cards, function (card) {
				if (card.flipped) card.found = true;
			});
		},
		checkAllFound: function checkAllFound() {
			var foundCards = _.filter(this.cards, function (card) {
				return card.found;
			});
			if (foundCards.length == this.cards.length) return true;
		},
		startGame: function startGame() {
			var _this = this;

			this.started = true;
			this.startTime = moment();

			this.timer = setInterval(function () {
				_this.time = moment(moment().diff(_this.startTime)).format("mm:ss");
			}, 1000);
		},
		finishGame: function finishGame() {
			this.started = false;
			clearInterval(this.timer);
			var score = 1000 - (moment().diff(this.startTime, 'seconds') - CardTypes.length * 5) * 3 - (this.turns - CardTypes.length) * 5;
			this.score = Math.max(score, 0);
			this.showSplash = true;
		},
		flipCard: function flipCard(card) {
			var _this2 = this;

			if (card.found || card.flipped) return;

			if (!this.started) {
				this.startGame();
			}

			var flipCount = this.flippedCards().length;
			if (flipCount == 0) {
				card.flipped = !card.flipped;
			} else if (flipCount == 1) {
				card.flipped = !card.flipped;
				this.turns += 1;

				if (this.sameFlippedCard()) {
					// Match!
					this.flipBackTimer = setTimeout(function () {
						_this2.clearFlipBackTimer();
						_this2.setCardFounds();
						_this2.clearFlips();

						if (_this2.checkAllFound()) {
							_this2.finishGame();
						}
					}, 200);
				} else {
					// Wrong match
					this.flipBackTimer = setTimeout(function () {
						_this2.clearFlipBackTimer();
						_this2.clearFlips();
					}, 1000);
				}
			}
		},
		clearFlips: function clearFlips() {
			_.map(this.cards, function (card) {
				return card.flipped = false;
			});
		},
		clearFlipBackTimer: function clearFlipBackTimer() {
			clearTimeout(this.flipBackTimer);
			this.flipBackTimer = null;
		}
	},

	created: function created() {
		this.resetGame();
	}
});