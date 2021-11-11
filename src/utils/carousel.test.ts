import { getMaxCarouselCards } from "./carousel";

describe("Check the functionality of getMaxCarouselCards", () => {
    it("returns 2.56", () => {
        const result: number =  getMaxCarouselCards();
        expect(result).toBe(2.56);
    });
})