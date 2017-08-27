import template from './color-picker.html';
import {COLOR_FILTER_NAME} from "../../filter/color.filter";

export const COLOR_PICKER_DIRECTIVE_NAME = "colorPicker";

export class ColorPickerDirective {
    constructor(colorFilter) {
        this.template = template;
        this.colorFilter = colorFilter;
        this.scope = {
            label: '@',
            color: '=',
            default: '@',
            opacity: '@'
        }
    }

    link(scope, el, attrs) {
        scope.color = scope.default;
        let that = this;
        //the value is in rgba form when opacity is true and hex format otherwise
        scope.colorPickerOptions = {
            value: scope.default,
            buttons: false,
            opacity: scope.opacity,
            select: (e) => {
                if (scope.opacity) {
                    scope.color = e.value;
                }
                else {
                    scope.color = that.colorFilter(e.value);
                }
            }
        };
    }

    static create(colorFilter) {
        return new ColorPickerDirective(colorFilter);
    }
}

ColorPickerDirective.create.$inject = [COLOR_FILTER_NAME + "Filter"];
