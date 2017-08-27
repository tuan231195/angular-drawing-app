import {DRAWING_DIRECTIVE_NAME, DrawingDirective} from "./components/drawing/drawing.directive";
import * as angular from "angular";
import "kendo-ui-core/js/kendo.colorpicker";
import "kendo-ui-core/js/kendo.slider";
import "kendo-ui-core/js/kendo.angular";
import "kendo-ui-core/css/web/kendo.common.core.css";
import "kendo-ui-core/css/web/kendo.default.min.css";
import {POINT_SERVICE_NAME, PointService} from "./services/point.service";
import {PATH_DIRECTIVE_NAME, PathDirective} from "./components/shape/path/path.directive";
import {CONTROL_COMPONENT_NAME, ControlComponent} from "./components/control/control.component";
import "./styles.css";
import {AppController, CONTROLLER_NAME} from "./app.controller";
import {SHAPE_FACTORY_NAME, ShapeFactoryService} from "./services/shape-factory.service";
import {RECTANGLE_DIRECTIVE_NAME, RectDirective} from "./components/shape/rect/rect.directive";
import {POLYGON_DIRECTIVE_NAME, PolygonDirective} from "./components/shape/polygon/polygon.directive";
import {COLOR_PICKER_DIRECTIVE_NAME, ColorPickerDirective} from "./components/widget/color-picker.directive";
import {COLOR_FILTER_NAME, ColorFilter} from "./filter/color.filter";
import {CIRCLE_DIRECTIVE_NAME, CircleDirective} from "./components/shape/circle/circle.directive";

(function () {
    angular.module('drawingApp', ["kendo.directives"])
        .controller(CONTROLLER_NAME, AppController)
        .directive(DRAWING_DIRECTIVE_NAME, DrawingDirective.create)
        .directive(PATH_DIRECTIVE_NAME, PathDirective.create)
        .directive(RECTANGLE_DIRECTIVE_NAME, RectDirective.create)
        .directive(POLYGON_DIRECTIVE_NAME, PolygonDirective.create)
        .directive(COLOR_PICKER_DIRECTIVE_NAME, ColorPickerDirective.create)
        .directive(CIRCLE_DIRECTIVE_NAME, CircleDirective.create)
        .component(CONTROL_COMPONENT_NAME, ControlComponent)
        .filter(COLOR_FILTER_NAME, ColorFilter.create)
        .service(POINT_SERVICE_NAME, PointService)
        .service(SHAPE_FACTORY_NAME, ShapeFactoryService);
})();