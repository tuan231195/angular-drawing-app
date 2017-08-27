import {Shape} from "../../model/shape";

const THRESHOLD = 40;

export class RectangleBuilder {
    constructor(pointService) {
        this.pointService = pointService;
        this.drawing = false;
        this.currentShape = null;
    }

    handleMouseUp(controller, e) {
        // stop drawing
        if (this.drawing) {
            this.reset();
            this.drawing = false;
        }
    }

    handleMouseDown(controller, e) {
        this.drawing = true;
        this.lastX = e.offsetX;
        this.lastY = e.offsetY;
    }

    handleMouseMove(controller, e) {
        this.currentX = e.offsetX;
        this.currentY = e.offsetY;

        if (this.drawing && this.pointService.getDistance({x: this.currentX, y: this.currentY}, {
                x: this.lastX,
                y: this.lastY
            }) > THRESHOLD) {
            if (this.currentShape === null) {
                this.currentShape = new Shape("rectangle");
                this.currentShape.addPoint({x: this.lastX, y: this.lastY});
                this.currentShape.addPoint({x: this.currentX, y: this.currentY});
                controller.addShape(this.currentShape);
            }
            else {
                this.currentShape.popPoint();
                this.currentShape.addPoint({x: this.currentX, y: this.currentY});
            }
        }
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