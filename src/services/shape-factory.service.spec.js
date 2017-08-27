describe('Testing shape factory directive', () => {

    beforeEach(() => {
        angular.mock.module('drawingApp');
    });

    it('builders should be defined', angular.mock.inject((shapeFactoryService) => {
        expect(shapeFactoryService.getShapeBuilder("path")).toBeDefined();
        expect(shapeFactoryService.getShapeBuilder("rectangle")).toBeDefined();
        expect(shapeFactoryService.getShapeBuilder("polygon")).toBeDefined();
        expect(shapeFactoryService.getShapeBuilder("circle")).toBeDefined();
    }));
});