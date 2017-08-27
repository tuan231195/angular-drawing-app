import {PolygonController} from "./polygon.controller";
import template from './polygon.html';
export const POLYGON_DIRECTIVE_NAME = "polygonShape";

export class PolygonDirective {
    constructor() {
        this.template = template;
        this.restrict = 'A';
        this.controller = PolygonController;
        this.controllerAs = 'viewModel';
        this.scope = {};
        this.bindToController = {
            points: '=',
            config : "<"
        }
    }

    static create() {
        return new PolygonDirective();
    }
}
