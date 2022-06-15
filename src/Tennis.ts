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
        const array: Array<String> = ['Love','15','30','40','Win for ']

        if (this.playerA == 4) {
            return `${array[this.playerA]}A`
        }
        if (this.playerB == 4) {
            return `${array[this.playerB]}B`
        }
        if(this.playerA == 3 && this.playerB == 3) {
            return 'Deuce'
        }

        return `${array[this.playerA]}-${array[this.playerB]}` 
    }
    
}