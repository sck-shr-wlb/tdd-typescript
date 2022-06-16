export class Tennis{
  
    playerA: number = 0;
    playerB: number = 0

    aWonPoint() {
        this.playerA++;
    }
    bWonPoint() {
       this.playerB++
    }
    score() {
        const array: Array<String> = ['Love','15','30','40']
        const candidateGamescore = array.length - 1;
        if(this.playerA > candidateGamescore || this.playerB > candidateGamescore) {
            if(this.playerA - this.playerB >= 2) {
                return 'Win for A'
            }
            if(this.playerB - this.playerA >= 2) {
                return 'Win for B'
            }
        }

        if(this.playerA >= candidateGamescore || this.playerB >= candidateGamescore) {
            if(this.playerA === this.playerB) {
                return 'Deuce'
            }
            if(this.playerA - this.playerB === 1) {
                return 'Advantage for A'
            }
            if(this.playerB - this.playerA === 1) {
                return 'Advantage for B'
            }
        }

        return `${array[this.playerA]}-${array[this.playerB]}` 
    }
    
}