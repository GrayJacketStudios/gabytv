import { shortener } from "./text";

describe("Check the functionality of the text shortener", () => {
    it("returns the complete test as it's less of the limit", () => {
        expect(shortener("yes", 10)).toBe("yes");
    });

    it("returns a shortened string with three dots at the end", () => {
        expect(shortener("this is a test", 4)).toBe("this...");
    });

    it("returns a shortened string with a custom end", () => {
        expect(shortener("this is a test", 4, " -> read more")).toBe("this -> read more");
    });
})