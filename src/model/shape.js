export class Shape {
    constructor(type){
        this.points = [];
        this.type = type;
    }
    addPoint({x, y}){
        this.points.push({x, y});
    }

    getPoints(){
        return this.points;
    }

    popPoint(){
        this.points.pop();
    }

}