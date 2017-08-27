export const COLOR_FILTER_NAME = "color";
export class ColorFilter {

    constructor(){
        return (colorValue) => {
            let result = "";
            if (colorValue && colorValue.startsWith("#")) {
                colorValue = colorValue.substring(1);
                colorValue = this.standardize(colorValue);
                if (colorValue.length === 8){
                    let a = parseInt(colorValue.substring(0, 2), 16);
                    let r = parseInt(colorValue.substring(2, 4), 16);
                    let g = parseInt(colorValue.substring(4, 6), 16);
                    let b = parseInt(colorValue.substring(6, 8), 16);
                    result = "rgba("+ r + ", " + g + ", " + b + ", " + a + ")";
                }
            }
            return result;
        };
    }
    static create(){
        return new ColorFilter();
    }

    standardize(colorValue) {
        if (colorValue.length === 8) {
            return colorValue;
        }
        let result = "";
        let length = colorValue.length;
        if (length === 6){
            result = "ff" + colorValue;
        }
        else if (length === 3){
            result = "ff";
        }
        if (length === 3 || length === 4)
        {
            for (let i = 0; i < length; i++){
                result += colorValue.charAt(i) + "" + colorValue.charAt(i);
            }
        }
        return result;
    }
}