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
})