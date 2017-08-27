import {Shape} from "../../model/shape";

const THRESHOLD = 40;

export class PathBuilder {
    constructor(pointService) {
        this.pointService = pointService;
        this.drawing = false;
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
        this.currentShape = new Shape("path");
        this.currentShape.addPoint({x: this.lastX, y: this.lastY});
    }

    handleMouseMove(controller, e) {
        this.currentX = e.offsetX;
        this.currentY = e.offsetY;

        if (this.drawing && this.pointService.getDistance({x: this.currentX, y: this.currentY}, {
                x: this.lastX,
                y: this.lastY
            }) > THRESHOLD) {
            // set current coordinates to last one
            this.lastX = this.currentX;
            this.lastY = this.currentY;
            this.currentShape.addPoint({x: this.currentX, y: this.currentY});
            if (this.currentShape.getPoints().length === 2){
                controller.addShape(this.currentShape);
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
