import Player from '/js/Player.js'
import Game from '/js/Game.js'

let player_one = new Player("ttt");
let player_two = new Player("tht");

new Game(player_one, player_two, 16, 0);
