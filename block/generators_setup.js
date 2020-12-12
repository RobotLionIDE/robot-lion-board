
//Block from IKB1 


module.exports = function(Blockly) {
  Blockly.JavaScript['RL_backpanel_setup'] = function(block) {
    var dropdown_top_left = block.getFieldValue('top_left');
    var dropdown_top_center = block.getFieldValue('top_center');
    var dropdown_top_right = block.getFieldValue('top_right');
    var dropdown_bottom_left = block.getFieldValue('bottom_left');
    var dropdown_bottom_center = block.getFieldValue('bottom_center');
    var dropdown_bottom_right = block.getFieldValue('bottom_right');
    
    var code = `
        #SETUP
            back_setup("${dropdown_top_left}", "${dropdown_top_center}", "${dropdown_top_right}", "${dropdown_bottom_left}", "${dropdown_bottom_center}", "${dropdown_bottom_right}");
        #END
        `;
    return code;

  };
  Blockly.JavaScript['RL_frontpanel_setup'] = function(block) {
    var check_left_reverse = block.getFieldValue('left_rev');
    var check_right_reverse = block.getFieldValue('right_rev');
    var dropdown_top_left = block.getFieldValue('top_left');
    var dropdown_top_center = block.getFieldValue('top_center');
    var dropdown_top_right = block.getFieldValue('top_right');
    var dropdown_bottom_left = block.getFieldValue('bottom_left');
    var dropdown_bottom_center = block.getFieldValue('bottom_center');
    var dropdown_bottom_right = block.getFieldValue('bottom_right');

    var code = '';
/*
    if((dropdown_bottom_left == 'servo1') || (dropdown_bottom_right == 'servo1')){
        code = code + `
        #VARIABLE Servo servo1;#END
        `;
    }

    if((dropdown_bottom_left == 'servo2') || (dropdown_bottom_right == 'servo2')){
        code = code + `
        #VARIABLE Servo servo2;#END
        `;
    }
*/

    code = code +  `
        #SETUP
            front_setup("${check_left_reverse}", "${check_right_reverse}", "${dropdown_top_left}", "${dropdown_top_center}", "${dropdown_top_right}", "${dropdown_bottom_left}", "${dropdown_bottom_center}", "${dropdown_bottom_right}");
        #END
        `;
        
    return code;

  };
}
