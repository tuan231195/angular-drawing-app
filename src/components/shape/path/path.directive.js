import {PathController} from "./path.controller";
import template from './path.html';
export const PATH_DIRECTIVE_NAME = "pathShape";

export class PathDirective {
    constructor() {
        this.template = template;
        this.restrict = 'A';
        this.controller = PathController;
        this.controllerAs = 'viewModel';
        this.scope = {};
        this.bindToController = {
            points: '=',
            config: '<'
        }
    }
    static create() {
        return new PathDirective();
    }
}
