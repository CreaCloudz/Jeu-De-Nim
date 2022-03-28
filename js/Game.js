class Game {
  constructor(items, tours) {
    this.items = items;
    this.tours = tours;
  }

  play(number) {
    if (number == 0 || number > 3) {
      this.removeItems(prompt());
    }
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
