export class Tennis {
  playerA: number = 0;
  playerB: number = 0;
  array: Array<String>;
  candidateGamescore: number;

  constructor(arrayScore=["Love", "15", "30", "40"]) {
    this.array = arrayScore;
    this.candidateGamescore = this.array.length - 1;
  }

  aWonPoint() {
    this.playerA++;
  }
  bWonPoint() {
    this.playerB++;
  }

  score() {
    if (this.isWin(this.candidateGamescore)) {
      if (this.playerA - this.playerB >= 2) {
        return "Win for A";
      }
      if (this.playerB - this.playerA >= 2) {
        return "Win for B";
      }
    }

    if (this.isDeuce(this.candidateGamescore)) {
      if (this.playerA === this.playerB) {
        return "Deuce";
      }
      if (this.playerA - this.playerB === 1) {
        return "Advantage for A";
      }
      if (this.playerB - this.playerA === 1) {
        return "Advantage for B";
      }
    }

    return `${this.array[this.playerA]}-${this.array[this.playerB]}`;
  }

  private isWin(candidateGamescore: number) {
    return (
      this.playerA > candidateGamescore || this.playerB > candidateGamescore
    );
  }

  private isDeuce(candidateGamescore: number) {
    return (
      this.playerA >= candidateGamescore || this.playerB >= candidateGamescore
    );
  }
}
