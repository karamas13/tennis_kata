import { describe, it, expect } from "vitest";
import { TennisGame } from "./tenniskata.ts";

describe ('TennisGame', () => {
    it('start of game should be Love-All', () => {
        const game = new TennisGame();
        expect(game.getScore()).toBe("Love-All");
    })
})