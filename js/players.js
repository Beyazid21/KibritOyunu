class Player {
  constructor(name, isTurn) {
    this.name = name;
    this.isTurn = isTurn;
  }
}

const player1 = new Player("Player-1", true);

const player2 = new Player("Player-2", false);
