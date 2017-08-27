import template from './control.html';

export const CONTROL_COMPONENT_NAME = "control";
export const ControlComponent = {
    controllerAs: 'viewModel',
    bindings: {
        config: '='
    },
    template: template
};