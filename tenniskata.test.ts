import { describe, it, expect } from "vitest";
import { TennisGame } from "./tenniskata.ts";

describe ('TennisGame', () => {
    it('start of game should be Love-All', () => {
        const game = new TennisGame();
        expect(game.getScore()).toBe("Love-All");
    })
    it('when p1 scores it should be 15-Love', () => {
        const game = new TennisGame();
        game.scoredPoint("Player1")
        expect(game.getScore()).toBe("15-Love");
    })
    it('when p1 scores second point the score should be 30-Love', () => {
        const game = new TennisGame();
        game.scoredPoint("Player1")
        game.scoredPoint("Player1")
        expect(game.getScore()).toBe("30-Love");
    })
    it('when p1 scores & p2 score score should be 15-15', () => {
        const game = new TennisGame();
        game.scoredPoint("Player1")
        game.scoredPoint("Player2")
        expect(game.getScore()).toBe("15-All");
    })
    it('when p1 scores & p2 are tied 40-40 Deuce should be returned', () => {
        const game = new TennisGame();
        game.scoredPoint("Player1"),game.scoredPoint("Player1"),game.scoredPoint("Player1")
        game.scoredPoint("Player2"),game.scoredPoint("Player2"),game.scoredPoint("Player2")
        expect(game.getScore()).toBe("Deuce");
    })
    it('when p1 scores & p2 are tied 40-40 abd Player1 scores Advantage for Player1 should be returned', () => {
        const game = new TennisGame();
        game.scoredPoint("Player1"),game.scoredPoint("Player1"),game.scoredPoint("Player1")
        game.scoredPoint("Player2"),game.scoredPoint("Player2"),game.scoredPoint("Player2")
        
        game.scoredPoint("Player1")
        
        expect(game.getScore()).toBe("Advantage Player1");
    })
    it('when p1 scores while he has the advantage Win Player1 should be returned', () => {
        const game = new TennisGame();
        game.scoredPoint("Player1"),game.scoredPoint("Player1"),game.scoredPoint("Player1")
        game.scoredPoint("Player2"),game.scoredPoint("Player2"),game.scoredPoint("Player2")
        
        game.scoredPoint("Player1")
        game.scoredPoint("Player1")
        
        expect(game.getScore()).toBe("Win Player1");
    })
})