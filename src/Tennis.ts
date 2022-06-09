export class Tennis{
    playerA: number = 0;

    aWonPoint() {
        this.playerA++;
    }
    score() {
        if (this.playerA > 0) {
            return '15-Love'
        }
        return 'Love-Love'
    }
    
}