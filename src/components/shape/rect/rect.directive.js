import {RectController} from "./rect.controller";
import template from './rect.html';
export const RECTANGLE_DIRECTIVE_NAME = "rectangleShape";

export class RectDirective {
    constructor() {
        this.template = template;
        this.restrict = 'A';
        this.controller = RectController;
        this.controllerAs = 'viewModel';
        this.scope = {};
        this.bindToController = {
            points: '=',
            config: '<'
        }
    }

    static create() {
        return new RectDirective();
    }
}
