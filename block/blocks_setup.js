const dirIcon = Vue.prototype.$global.board.board_info.dir;
let inputs = [
  ["Пусто","null"],
  ["Кнопка","btn"],
  ["Потенциометр","pt"],
  ["Датчик линии L","line1"],
  ["Датчик линии R","line2"],
  ["Датчик движения","pir"],
  ["Датчик температуры","temp"],
  ["Датчик влажности и температуры","dht"],
  ["Универсальный аналоговый обработчик","u_analog"],
  ["Универсальный цифровой обработчик","u_digital"],
];

let outputs3v = [
  ["Пусто","null"],
  ["Led 1","led1"],
  ["Led 2","led2"],
  ["Led 3","led3"],
  ["RGB","rgb_r"],
  ["Buzzer","buzzer"],
  ["Универсальный аналоговый обработчик","u_analog"],
  ["Универсальный цифровой обработчик","u_digital"],
];
let outputs5v = [
  ["Пусто","null"],
  ["Led 1","led1"],
  ["Led 2","led2"],
  ["Led 3","led3"],
  ["RGB","rgb_r"],
  ["Buzzer","buzzer"],
  ["Servo 1","servo1"],
  ["Servo 2","servo2"],
  ["Универсальный аналоговый обработчик","u_analog"],
  ["Универсальный цифровой обработчик","u_digital"],
];


module.exports = function (Blockly) {
  "use strict";
  Blockly.Blocks['RL_backpanel_setup'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Подключение модулей: задняя панель");
      this.appendDummyInput()
        .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/b_g_t_l.png`,40,40,"*"))
        .appendField(new Blockly.FieldDropdown(inputs), "top_left")
        .appendField("|")
        .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/b_y_c.png`,40,40,"*"))
        .appendField(new Blockly.FieldDropdown([["Пусто","null"]]), "top_center")
        .appendField("|")
        .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/b_g_t_r.png`,40,40,"*"))
        .appendField(new Blockly.FieldDropdown(inputs), "top_right");
      this.appendDummyInput()
        .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/b_g_b_l.png`,40,40,"*"))
        .appendField(new Blockly.FieldDropdown(inputs), "bottom_left")
        .appendField("|")
        .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/b_r_c.png`,40,40,"*"))
        .appendField(new Blockly.FieldDropdown([["Пусто","null"]]), "bottom_center")
        .appendField("|")
        .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/b_g_b_r.png`,40,40,"*"))
        .appendField(new Blockly.FieldDropdown(inputs), "bottom_right");
      this.appendDummyInput()
        ;
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour('#00cc00');
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
    
  Blockly.Blocks['RL_frontpanel_setup'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Подключение модулей: передняя панель");
      this.appendDummyInput()
        .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/f_l_m.png`,40,40,"*"))
        .appendField(new Blockly.FieldCheckbox("FALSE"), "left_rev")
        .appendField("Реверс |                  ")
        .appendField("          | Реверс")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "right_rev")
        .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/f_r_m.png`,40,40,"*"))
      this.appendDummyInput()
        .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/f_b_l.png`,40,40,"*"))
        .appendField(new Blockly.FieldDropdown(outputs3v), "top_left")
        .appendField("|")
        .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/f_b_c.png`,40,40,"*"))
        .appendField(new Blockly.FieldDropdown([["Пусто","null"], ["RGB ","rgb_gb"], ["Дальномер","hcsr04"]]), "top_center")
        .appendField("|")
        .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/f_b_r.png`,40,40,"*"))
        .appendField(new Blockly.FieldDropdown(outputs3v), "top_right");
      this.appendDummyInput()
        .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/f_r_l.png`,40,40,"*"))
        .appendField(new Blockly.FieldDropdown(outputs5v), "bottom_left")
        .appendField("|")
        .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/f_y_c.png`,40,40,"*"))
        .appendField(new Blockly.FieldDropdown([["Пусто ","null"]]), "bottom_center")
        .appendField("|")
        .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/f_r_r.png`,40,40,"*"))
        .appendField(new Blockly.FieldDropdown(outputs5v), "bottom_right");
      this.appendDummyInput()
        ;
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour('#00cc00');
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  
}
