describe('Testing path builder directive', () => {

    let controller;
    beforeEach(() => {
        angular.mock.module('drawingApp');
        controller = jasmine.createSpyObj("controller", ["addShape", "reset"]);
    });

    it('should create shape correctly', angular.mock.inject((shapeFactoryService) => {
        let pathBuilder = shapeFactoryService.getShapeBuilder("path");
        pathBuilder.handleMouseDown(controller, {offsetX: 0, offsetY: 0});
        expect(controller.addShape).not.toHaveBeenCalled();
        pathBuilder.handleMouseMove(controller, {offsetX: 50, offsetY: 0});
        expect(pathBuilder.currentShape).toBeDefined();
        expect(controller.addShape).toHaveBeenCalledWith(pathBuilder.currentShape);
        pathBuilder.handleMouseMove(controller, {offsetX: 100, offsetY: 0});
        expect(pathBuilder.currentShape.points.length).toBe(3);

    }));
});