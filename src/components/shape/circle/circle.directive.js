import {CircleController} from "./circle.controller";
import template from './circle.html';
export const CIRCLE_DIRECTIVE_NAME = "circleShape";

export class CircleDirective {
    constructor() {
        this.template = template;
        this.restrict = 'A';
        this.controller = CircleController;
        this.controllerAs = 'viewModel';
        this.scope = {};
        this.bindToController = {
            points: '=',
            config: '<'
        }
    }
    static create() {
        return new CircleDirective();
    }
}
