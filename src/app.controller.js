export const CONTROLLER_NAME = "drawController";

export class AppController {
    constructor(){
        this.config = {};
        this.config.selectedTool = 'path';
        this.config.strokeSize = 1;
    }
}