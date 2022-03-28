import Player from '/js/Player.js'

export default class Game {
  constructor(items) {
    this.player_one = new Player(1);
    this.player_two = new Player(2);
    this.items = items;
    this.tours = 0;
    this.number = 0;
    this.last_play = this.player_one;
  }

  init() {
    while (this.items > 0) {
      if (this.number <= 0 || this.number > 3 || isNaN(this.number)) {
        this.number = prompt("Il reste " + this.items + ". " + this.last_play.name + " combien d'allumette vous prenez (entre 1 et 3)");
      } else {
        this.removeItems(this.number);
        this.resetNumber();
        this.incTours();
        if (this.items > 0)
          this.last_play = (this.last_play == this.player_one ? this.player_two : this.player_one)
      }
    }
    this.winner();
  }

  winner() {
    prompt(this.last_play.name + " a gagné en " + this.tours + " tour" + (this.tours > 1 ? "" : "s") + " !");
  }

  resetNumber() {
    this.number = 0;
  }

  removeItems(number) {
    this.items = (this.items - number);
  }

  incTours() {
    this.tours++;
  }
}
