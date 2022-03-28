export default class Game {
  constructor(player_one, player_two, items, tours) {
    this.player_one = player_one;
    this.player_two = player_two;
    this.items = items;
    this.tours = tours;
    this.number = 0;
    this.last_play = player_one;
  }

  init() {
    while (this.items > 0) {
      if (this.number <= 0 || this.number > 3) {
        this.number = prompt("Il reste " + this.items + ". " + this.last_play.name + " combien d'allumette vous prenez (entre 1 et 3)");
      } else {
        this.removeItems(this.number);
        this.resetNumber();
        if (this.items > 0)
          this.last_play = (last_play == this.player_one ? this.player_two : this.player_one)
      }
    }
    this.winner();
  }

  winner() {
    prompt(last_play.name + " a gagné !");
  }

  resetNumber() {
    this.number = 0;
  }

  get getTours() {
    return this.tours;
  }

  set setTours(tours) {
    this.tours = tours;
  }

  get getItems() {
    return this.items;
  }

  removeItems(number) {
    this.items = (this.items - number);
  }
}
