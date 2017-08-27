describe('Testing rect directive', () => {

    let element;
    let scope;
    let controller;
    beforeEach(() => {
        angular.mock.module('drawingApp');
        angular.mock.inject((_$rootScope_, _$compile_) => {
            scope = _$rootScope_.$new();
            element = _$compile_(angular.element('<g rectangle-shape points="points" config="config"></g>'))(scope);
            scope.$digest();
            controller = element.isolateScope().viewModel;
            spyOn(controller, "repaint").and.callThrough();
        });
    });

    it('should return correct results', () => {
        scope.points = [{x: 0, y: 0}, {x: 1, y: 1}];
        scope.$digest();
        expect(controller.repaint).toHaveBeenCalled();
        expect(controller.x).toBe(0);
        expect(controller.y).toBe(0);
        expect(controller.width).toBe(1);
        expect(controller.height).toBe(1);
    });

    it('should set attribute correctly', () => {
        scope.points = [{x: 0, y: 0}, {x: 1, y: 1}];
        scope.$digest();
        let rect = element.find("rect");
        expect(rect).toBeDefined();
        expect(rect.attr("x")).toBe("0");
        expect(rect.attr("y")).toBe("0");
        expect(rect.attr("width")).toBe("1");
        expect(rect.attr("height")).toBe("1");
    });
});