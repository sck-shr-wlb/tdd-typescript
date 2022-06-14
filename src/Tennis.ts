export class Tennis{
    playerA: number = 0;

    aWonPoint() {
        this.playerA++;
    }
    score() {
        const array: Array<String> = ['Love','15','30','40']

        return `${array[this.playerA]}-Love` 
    }
    
}