export class PathController {
    $onInit(){
        angular.extend(this, this.config);
    }
    getDrawString() {
        this.drawString = '';

        angular.forEach(this.points, (point, index) => {
            if (index === 0) {
                this.drawString += 'M';
            }
            this.drawString += (point.x + " " + point.y);
            if (index !== this.points.length - 1) {
                this.drawString += ' L ';
            }
        });
        return this.drawString;
    }
}