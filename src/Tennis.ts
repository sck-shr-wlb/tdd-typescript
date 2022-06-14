export class Tennis{
    playerA: number = 0;

    aWonPoint() {
        this.playerA++;
    }
    score() {
        if (this.playerA === 1) {
            return '15-Love'
        }
        if(this.playerA === 2){
            return '30-Love'
        }
        return 'Love-Love'
    }
    
}