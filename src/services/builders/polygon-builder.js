import {Shape} from "../../model/shape";

const THRESHOLD = 40;

export class PolygonBuilder {
    constructor(pointService) {
        this.drawing = false;
        this.pointService = pointService;
        this.lastX = 0;
        this.lastY = 0;
        this.currentShape = null;
    }

    handleMouseUp(controller, e) {

    }

    handleMouseDown(controller, e) {
        this.currentX = e.offsetX;
        this.currentY = e.offsetY;

        if (this.currentShape === null) {
            this.currentShape = new Shape("polygon");
        }
        if (!this.drawing || (this.drawing && this.pointService.getDistance({x: this.currentX, y: this.currentY}, {
                x: this.lastX,
                y: this.lastY
            }) > THRESHOLD)) {
            this.currentShape.addPoint({x: this.currentX, y: this.currentY});
        }
        if (this.currentShape.getPoints().length === 2) {
            controller.addShape(this.currentShape);
        }

        this.drawing = true;
        this.lastX = this.currentX;
        this.lastY = this.currentY;
    }

    handleMouseMove(controller, e) {

    }

    reset() {
        this.lastX = 0;
        this.lastY = 0;
        this.currentX = 0;
        this.currentY = 0;
        this.currentShape = null;
        this.drawing = false;
    }
}