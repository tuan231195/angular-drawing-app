describe('Testing circle builder directive', () => {

    let controller;
    beforeEach(() => {
        angular.mock.module('drawingApp');
        controller = jasmine.createSpyObj("controller", ["addShape", "reset"]);
    });

    it('should create shape correctly', angular.mock.inject((shapeFactoryService) => {
        let circleBuilder = shapeFactoryService.getShapeBuilder("circle");
        circleBuilder.handleMouseDown(controller, {offsetX: 0, offsetY: 0});
        expect(circleBuilder.currentShape).toBeNull();
        expect(controller.addShape).not.toHaveBeenCalled();
        circleBuilder.handleMouseMove(controller, {offsetX: 50, offsetY: 0});
        expect(circleBuilder.currentShape).toBeDefined();
        expect(controller.addShape).toHaveBeenCalledWith(circleBuilder.currentShape);
    }));
});