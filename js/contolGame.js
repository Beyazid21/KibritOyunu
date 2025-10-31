class ControlGame{
    constructor(player1,player2){
        this.player1 = player1;
        this.player2 = player2;
    }

    changeTurn(){
        this.player1.isTurn = !this.player1.isTurn;
        this.player2.isTurn = !this.player2.isTurn;
    }

    getTurnPlayer(){
        if(this.player1.isTurn){
            return this.player1.name;
        }
        return this.player2.name;
    }

    getOtherPlayer(){
          if(!this.player1.isTurn){
            return this.player1.name;
        }
        return this.player2.name;
    }
}