import {PathBuilder} from "./builders/path-builder";
import {PolygonBuilder} from "./builders/polygon-builder";
import {RectangleBuilder} from "./builders/rectangle-builder";
import {CircleBuilder} from "./builders/circle-builder";
import {POINT_SERVICE_NAME} from "./point.service";

export const SHAPE_FACTORY_NAME = "shapeFactoryService";

export class ShapeFactoryService {
    constructor(pointService) {
        this.pathBuilder = new PathBuilder(pointService);
        this.polygonBuilder = new PolygonBuilder(pointService);
        this.rectangleBuilder = new RectangleBuilder(pointService);
        this.circleBuilder = new CircleBuilder(pointService);
        this.pointService = pointService;
    }

    getShapeBuilder(type) {
        switch (type) {
            case 'path':
                return this.pathBuilder;
            case 'polygon':
                return this.polygonBuilder;
            case 'rectangle':
                return this.rectangleBuilder;
            case 'circle':
                return this.circleBuilder;
            default:
                return this.pathBuilder;
        }
    }
}

ShapeFactoryService.$inject = [POINT_SERVICE_NAME];