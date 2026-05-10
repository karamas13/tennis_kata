export class TennisGame {
private player1Pts: number = 0;

private scores: string[] = ["Love", "15", "30", "40"]

scoredPoint(playerName: string): void {
 if (playerName === "Player1") {
   this.player1Pts++; 
 }
}    
 
getScore(): string {
    if(this.player1Pts === 0) {
     return "Love-All"
    }

    return `${this.scores[this.player1Pts]}-Love`
 }
}