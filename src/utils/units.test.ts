import { snakeInator } from './units';

describe('Check if the responses of snakeInator is valid', () => {
    it("returns an s when we give a number different than 0", () => {
        expect(snakeInator(34)).toBe("s");
    });

    it("returns an empty string when we give a 1", () => {
        expect(snakeInator(1)).toBe("");
    });
});