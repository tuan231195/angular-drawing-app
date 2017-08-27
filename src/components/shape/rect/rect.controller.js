export class RectController {
    constructor($scope) {
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
        $scope.$watchCollection(angular.bind(this, function () {
            return this.points;
        }), () => {
            this.repaint();
        });
    }

    $onInit(){
        angular.extend(this, this.config);
    }

    repaint() {
        let points = this.points;
        if (points && points.length >= 2) {
            let firstPoint = points[0];
            let lastPoint = points[points.length - 1];
            let topLeftCorner = {x: Math.min(firstPoint.x, lastPoint.x), y: Math.min(firstPoint.y, lastPoint.y)};
            let bottomRightCorner = {x: Math.max(firstPoint.x, lastPoint.x), y: Math.max(firstPoint.y, lastPoint.y)};
            this.x = topLeftCorner.x;
            this.y = topLeftCorner.y;
            this.width = bottomRightCorner.x - this.x;
            this.height = bottomRightCorner.y - this.y;
        }

    }
}

RectController.$inject = ["$scope"];