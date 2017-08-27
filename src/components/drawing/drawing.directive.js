import {DrawingController} from "./drawing.controller";
import template from './drawing.html';
import {SHAPE_FACTORY_NAME} from "../../services/shape-factory.service";


export const DRAWING_DIRECTIVE_NAME = "drawing";

export class DrawingDirective {
    constructor(shapeFactory) {
        this.controller = DrawingController;
        this.controllerAs = "viewModel";
        this.require = [DRAWING_DIRECTIVE_NAME];
        this.template = template;
        this.shapeFactory = shapeFactory;
        this.scope = true;
        this.bindToController = {
            config: '='
        }
    }

    link(scope, element, attrs, ctrls) {
        let controller = ctrls[0];

        let that = this;

        element.bind('mousedown', function (event) {
            let shapeBuilder = that.shapeFactory.getShapeBuilder(controller.config.selectedTool);
            shapeBuilder.handleMouseDown(controller, event);
            scope.$apply();
        });

        element.bind('mousemove', function (event) {
            // get current mouse position
            let shapeBuilder = that.shapeFactory.getShapeBuilder(controller.config.selectedTool);
            shapeBuilder.handleMouseMove(controller, event);
            scope.$apply();
        });
        element.bind('mouseup', (event) => {
            let shapeBuilder = that.shapeFactory.getShapeBuilder(controller.config.selectedTool);
            shapeBuilder.handleMouseUp(controller, event);
            scope.$apply();
        });
    }

    static create() {
        return new DrawingDirective(...arguments);
    }
}

DrawingDirective.create.$inject = [SHAPE_FACTORY_NAME];
