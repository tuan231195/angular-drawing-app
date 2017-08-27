describe('Testing circle directive', () => {

    let element;
    let scope;
    let controller;
    beforeEach(() => {
        angular.mock.module('drawingApp');
        angular.mock.inject((_$rootScope_, _$compile_) => {
            scope = _$rootScope_.$new();
            element = _$compile_(angular.element('<g circle-shape points="points" config="config"></g>'))(scope);
            scope.$digest();
            controller = element.isolateScope().viewModel;
            spyOn(controller, "repaint").and.callThrough();
        });
    });

    it('should return correct results', () => {
        scope.points = [{x: 0, y: 0}, {x: 0, y: 1}];
        scope.$digest();
        expect(controller.repaint).toHaveBeenCalled();
        expect(controller.x).toBe(0);
        expect(controller.y).toBe(0);
        expect(controller.r).toBe(1);
    });

    it('should set attribute correctly', () => {
        scope.points = [{x: 0, y: 0}, {x: 0, y: 1}];
        scope.$digest();
        let circle = element.find("circle");
        expect(circle).toBeDefined();
        expect(circle.attr("cx")).toBe('0');
        expect(circle.attr("cy")).toBe('0');
        expect(circle.attr("r")).toBe('1');
    });
});