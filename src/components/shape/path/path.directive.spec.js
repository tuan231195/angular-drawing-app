describe('Testing path directive', () => {

    let element;
    let scope;
    let controller;
    beforeEach(() => {
        angular.mock.module('drawingApp');
        angular.mock.inject((_$rootScope_, _$compile_) => {
            scope = _$rootScope_.$new();
            element = _$compile_(angular.element('<g path-shape points="points" config="config"></g>'))(scope);
            scope.$digest();
            controller = element.isolateScope().viewModel;
        });
    });

    it('should return correct results',  () => {
        scope.points = [{x: 0, y: 0}, {x: 0, y: 1}];
        scope.$digest();
        expect(controller.drawString).toBe("M0 0 L 0 1");
    });

    it('should set attribute correctly', () => {
        scope.points = [{x: 0, y: 0}, {x: 0, y: 1}];
        scope.$digest();
        let path = element.find("path");
        expect(path).toBeDefined();
        expect(path.attr("d")).toBe("M0 0 L 0 1");
    });
});