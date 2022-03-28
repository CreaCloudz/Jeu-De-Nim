function game() {
  player_one = prompt("Nom joueur 1");
  player_two = prompt("Nom joueur 2");

  items = 16;
  last_play = player_one;

  number = 0;

  while (items > 0) {
    if (number <= 0 || number > 3) {
      number = prompt("Il reste " + items + ". " + last_play + " combien d'allumette vous prenez (entre 1 et 3)");
    } else {
      items = (items - number);
      number = 0;
      if (items > 0)
        last_play = (last_play == player_one ? player_two : player_one);
    }
  }
  prompt(last_play + " a gagné");
}

game();
