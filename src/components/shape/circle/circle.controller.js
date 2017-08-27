import {POINT_SERVICE_NAME} from "../../../services/point.service";

export class CircleController {
    constructor($scope, pointService) {
        this.x = 0;
        this.y = 0;
        this.r = 0;
        this.pointService = pointService;
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
            this.x = firstPoint.x;
            this.y = firstPoint.y;
            this.r = this.pointService.getDistance({x: this.x, y: this.y}, {x: lastPoint.x, y: lastPoint.y});
        }

    }
}


CircleController.$inject = ["$scope", POINT_SERVICE_NAME];