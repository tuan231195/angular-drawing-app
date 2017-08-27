describe('Testing rectangle builder directive', () => {

    let controller;
    beforeEach(() => {
        angular.mock.module('drawingApp');
        controller = jasmine.createSpyObj("controller", ["addShape", "reset"]);
    });

    it('should create shape correctly', angular.mock.inject((shapeFactoryService) => {
        let rectangleBuilder = shapeFactoryService.getShapeBuilder("rectangle");
        rectangleBuilder.handleMouseDown(controller, {offsetX: 0, offsetY: 0});
        expect(rectangleBuilder.currentShape).toBeNull();
        expect(controller.addShape).not.toHaveBeenCalled();
        rectangleBuilder.handleMouseMove(controller, {offsetX: 50, offsetY: 0});
        expect(rectangleBuilder.currentShape).toBeDefined();
        expect(controller.addShape).toHaveBeenCalledWith(rectangleBuilder.currentShape);
    }));
});