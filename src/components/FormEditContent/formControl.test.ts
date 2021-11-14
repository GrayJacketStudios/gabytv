import { enableChapterControl, getTotalSeconds } from "./formControl";

describe("Check the functionality of the enableChapterControl", () => {
    it("Returns false when we give Series in the param", () => {
        expect(enableChapterControl('Series')).toBeFalsy();
    });

    it("Returns true when we give Film in the param", () => {
        expect(enableChapterControl('Film')).toBeTruthy();
    });

    it("Returns true when we give Program in the param", () => {
        expect(enableChapterControl('Program')).toBeTruthy();
    });

    it("Returns true when we give Commercial Spot in the param", () => {
        expect(enableChapterControl('Commercial Spot')).toBeTruthy();
    });
});

describe("Check the correct functionality of getTotalSeconds", () => {
    let time = {
        hours: 0,
        minutes: 0,
        seconds: 0
    }
    it("Returns 0 when we give empty string", () => {
        expect(getTotalSeconds(time)).toBe(0);
    });

    it("Return 1 when we send 1 second", () => {
        time.seconds = 1;
        expect(getTotalSeconds(time)).toBe(1);
    });

    it("Return 60 when we send 1 minute", () => {
        time.minutes = 1;
        time.seconds = 0;
        expect(getTotalSeconds(time)).toBe(60);
    });

    it("Return 3600 when we send 1 hour", () => {
        time.hours = 1;
        time.minutes = 0;
        time.seconds = 0;
        expect(getTotalSeconds(time)).toBe(3600);
    });

    it("Return 3660 when we send 1 hour and 1 minute", () => {
        time.hours = 1;
        time.minutes = 1;
        time.seconds = 0;
        expect(getTotalSeconds(time)).toBe(3660);
    });

    it("Return 3661 when we send 1 hour and 1 minute and 1 second", () => {
        time.hours = 1;
        time.minutes = 1;
        time.seconds = 1;
        expect(getTotalSeconds(time)).toBe(3661);
    });
})