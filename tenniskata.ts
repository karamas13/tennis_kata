export class TennisGame {
private player1Pts: number = 0;
private player2Pts: number = 0;

private scores: string[] = ["Love", "15", "30", "40"]

scoredPoint(playerName: string): void {
 if (playerName === "Player1") {
   this.player1Pts++; 
 } else if (playerName === "Player2"){
    this.player2Pts++;
 } 
}    
 
getScore(): string {
    if(this.player1Pts === this.player2Pts) {
     if(this.player1Pts >= 3) return "Deuce"
     return`${this.scores[this.player1Pts]}-All` 
    }

    return `${this.scores[this.player1Pts]}-${this.scores[this.player2Pts]}`
 }
}