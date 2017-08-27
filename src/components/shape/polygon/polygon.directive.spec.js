describe('Testing polygon directive', () => {

    let element;
    let scope;
    let controller;
    beforeEach(() => {
        angular.mock.module('drawingApp');
        angular.mock.inject((_$rootScope_, _$compile_) => {
            scope = _$rootScope_.$new();
            element = _$compile_(angular.element('<g polygon-shape points="points" config="config"></g>'))(scope);
            scope.$digest();
            controller = element.isolateScope().viewModel;
        });
    });

    it('should return correct results', () => {
        scope.points = [{x: 0, y: 0}, {x: 1, y: 1}, {x: 2, y: 2}];
        scope.$digest();
        expect(controller.drawString).toBe("M0 0 L 1 1 L 2 2 Z");
    });

    it('should set attribute correctly', () => {
        scope.points = [{x: 0, y: 0}, {x: 1, y: 1}, {x: 2, y: 2}];
        scope.$digest();
        let polygon = element.find("path");
        expect(polygon).toBeDefined();
        expect(polygon.attr("d")).toBe("M0 0 L 1 1 L 2 2 Z");
    });
});