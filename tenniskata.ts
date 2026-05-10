export class TennisGame {
private player1Pts: number = 0;

scoredPoint(playerName: string): void {
 if (playerName === "Player1") {
   this.player1Pts++; 
 }
}    
 
getScore(): string {
    if(this.player1Pts === 1) {
        return "15-Love"
    }
    return "Love-All"
 }
}