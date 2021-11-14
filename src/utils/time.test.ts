import { secondsToReadablehms, secondsToObjectTime } from "./time";


describe('Check if the responses of secondsToReadablehms is valid', () => {
    it("return 55 seconds when we give only 55 seconds", () => {
        expect(secondsToReadablehms(55)).toBe("55secs");
    });
    it("return 1 Minute and 5 Secs when we give it 65 seconds", () => {
        expect(secondsToReadablehms(65)).toBe("1min5secs");
    });
    it("return 2 Hours, 1 Minute and 5 Secs when we give it 7265 seconds", () => {
        expect(secondsToReadablehms(7265)).toBe("2hrs1min5secs");
    });
    it("return invalid time when we give it less than 1 second", () => {
        expect(secondsToReadablehms(0)).toBe("invalid time");
        expect(secondsToReadablehms(-1)).toBe("invalid time");
        expect(secondsToReadablehms(-654)).toBe("invalid time");
    });

});

describe('Check if the response of secondsToObjectTime is valid', () => {
    it('Return 1 hour when we give 3600 seconds', () => {
        expect(secondsToObjectTime(3600)).toEqual({
            hours: 1,
            minutes: 0,
            seconds: 0
        });
    });

    it('Return 1 hour and 1 minute when we give 3660 seconds', () => {
        expect(secondsToObjectTime(3660)).toEqual({
            hours: 1,
            minutes: 1,
            seconds: 0
        });
    });

    it('Return 1 hour, 1 minute and 1 second when we give 3661 seconds', () => {
        expect(secondsToObjectTime(3661)).toEqual({
            hours: 1,
            minutes: 1,
            seconds: 1
        });
    });
});