describe('Testing polygon builder directive', () => {

    let controller;
    beforeEach(() => {
        angular.mock.module('drawingApp');
        controller = jasmine.createSpyObj("controller", ["addShape", "reset"]);
    });

    it('should create shape correctly', angular.mock.inject((shapeFactoryService) => {
        let polygonBuilder = shapeFactoryService.getShapeBuilder("polygon");
        polygonBuilder.handleMouseDown(controller, {offsetX: 0, offsetY: 0});
        expect(controller.addShape).not.toHaveBeenCalled();
        polygonBuilder.handleMouseDown(controller, {offsetX: 50, offsetY: 0});
        expect(polygonBuilder.currentShape).toBeDefined();
        expect(controller.addShape).toHaveBeenCalledWith(polygonBuilder.currentShape);
        polygonBuilder.handleMouseDown(controller, {offsetX: 100, offsetY: 0});
        expect(polygonBuilder.currentShape.points.length).toBe(3);

    }));
});