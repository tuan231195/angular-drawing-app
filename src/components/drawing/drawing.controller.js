import {SHAPE_FACTORY_NAME} from "../../services/shape-factory.service";

export class DrawingController {
    constructor($scope, shapeFactory) {
        this.shapes = [];
        this.scope = $scope;
        this.shapeFactory = shapeFactory;
    }

    $onInit() {
        this.scope.$watch(angular.bind(this, function () {
            return this.config.selectedTool;
        }), (newValue, oldValue) => {
            this.reset(oldValue);
        });
        this.scope.$watch(angular.bind(this, function () {
            return this.config.strokeColor;
        }), (newValue, oldValue) => {
            this.reset(this.config.selectedTool);
        });
        this.scope.$watch(angular.bind(this, function () {
            return this.config.fillColor;
        }), (newValue, oldValue) => {
            this.reset(this.config.selectedTool);
        });
        this.scope.$watch(angular.bind(this, function () {
            return this.config.strokeSize;
        }), (newValue, oldValue) => {
            this.reset(this.config.selectedTool);
        });
    }

    reset(tool) {
        let shapeBuilder = this.shapeFactory.getShapeBuilder(tool);
        shapeBuilder.reset();
    }

    addShape(shape) {
        this.shapes.push(shape);
    }

    removeLastShape() {
        this.shapes.pop();
    }
}

DrawingController.$inject = ['$scope', SHAPE_FACTORY_NAME];