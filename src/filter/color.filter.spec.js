describe('Testing color filter', () => {

    beforeEach(angular.mock.module('drawingApp'));

    it('should return correct rgba value for valid colors', angular.mock.inject((colorFilter) => {
        expect(colorFilter("#333")).toBe("rgba(51, 51, 51, 255)");
        expect(colorFilter("#3333")).toBe("rgba(51, 51, 51, 51)");
        expect(colorFilter("#333333")).toBe("rgba(51, 51, 51, 255)");
        expect(colorFilter("#33333333")).toBe("rgba(51, 51, 51, 51)");
    }));

    it('should return empty value invalid colors', angular.mock.inject((colorFilter) => {
        expect(colorFilter("333")).toBe("");
        expect(colorFilter("#33333")).toBe("");
    }));
});