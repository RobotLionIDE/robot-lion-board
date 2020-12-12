module.exports = function (Blockly) {
    'use strict';
    Blockly.JavaScript['rgb_status'] = function(block) {
        var status = block.getFieldValue("RGB_STATUS");
        var code = `
                RGB_${status}();
        `;
        return code;
    }
    Blockly.JavaScript['turn_off_rgb'] = function (block) {
        var code = `
            RGB_off();
        `;
        return code;
    };
    Blockly.JavaScript['clear_rgb'] = function (block) {
        var code = `
            RGB_clear();
        `;
        return code;
    };
    Blockly.JavaScript['set_rgb'] = function (block) {

        var r = Blockly.JavaScript.valueToCode(block, 'r', Blockly.JavaScript.ORDER_ATOMIC);
        var g = Blockly.JavaScript.valueToCode(block, 'g', Blockly.JavaScript.ORDER_ATOMIC);
        var b = Blockly.JavaScript.valueToCode(block, 'b', Blockly.JavaScript.ORDER_ATOMIC);
        var code = `
            RGB_setColor(${r},${g},${b});`;
        return code;
    };
    Blockly.JavaScript['rgb_color'] = function(block) {
        var color = block.getFieldValue("COLOR");
        var code = `
                RGB_${color}();
        `;
        return code;
    }
    Blockly.JavaScript['rgb_red'] = function (block) {
        var code = `
            RGB_red();
        `;
        return code;
    };
    Blockly.JavaScript['rgb_green'] = function (block) {
        var code = `
            RGB_green();
        `;
        return code;
    };
    Blockly.JavaScript['rgb_blue'] = function (block) {
        var code = `
            RGB_blue();
        `;
        return code;
    };
    Blockly.JavaScript['rgb_yellow'] = function (block) {
        var code = `
            RGB_yellow();
        `;
        return code;
    };
    Blockly.JavaScript['rgb_pink'] = function (block) {
        var code = `
            RGB_pink();
        `;
        return code;
    };
    Blockly.JavaScript['rgb_orange'] = function (block) {
        var code = `
            RGB_orange();
        `;
        return code;
    };
    Blockly.JavaScript['rgb_lightblue'] = function (block) {
        var code = `
            RGB_lightblue();
        `;
        return code;
    };
    Blockly.JavaScript['rgb_lightgreen'] = function (block) {
        var code = `
            RGB_lightgreen();
        `;
        return code;
    };
    Blockly.JavaScript['rgb_white'] = function (block) {
        var code = `
            RGB_white();
        `;
        return code;
    };
};
