let srv = [
  ["Servo 1","1"],
  ["Servo 2","2"],
];
module.exports = function(Blockly){
  'use strict';
  var motor_colour=Blockly.Msg.MUSIC_HUE ;

Blockly.Blocks['RL_motor'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([["Левый ","14"], ["Правый","15"]]), "ch")
      .appendField("мотор, направление")
      .appendField(new Blockly.FieldDropdown([["Вперед","1"], ["Назад ", "0"]]), "dir");
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField(", скорость");
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(motor_colour);
    this.setTooltip("");
  }
};

Blockly.Blocks['RL_motor_stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Стоп");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(motor_colour);
    this.setTooltip("");
  }
};
Blockly.Blocks['RL_motor_stop_ch'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Остановить")
      .appendField(new Blockly.FieldDropdown([["Левый","14"], ["Правый","15"]]), "ch")
      .appendField("мотор")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(motor_colour);
    this.setTooltip("");
  }
};
Blockly.Blocks['RL_motor_forward'] = {
  init: function() {
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("Двигаться вперед со скоростью");
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(motor_colour);
    this.setTooltip("");
  }
};
Blockly.Blocks['RL_motor_backward'] = {
  init: function() {
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("Двигаться назад со скоростью");
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(motor_colour);
    this.setTooltip("");
  }
};
Blockly.Blocks['RL_motor_spin_left'] = {
  init: function() {
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("Вращение влево со скоростью");
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(motor_colour);
    this.setTooltip("");
  }
};
Blockly.Blocks['RL_motor_spin_right'] = {
  init: function() {
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("Вращение вправо со скоростью");
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(motor_colour);
    this.setTooltip("");
  }
};
Blockly.Blocks['RL_motor_turn_left'] = {
  init: function() {
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("Поворот на лево со скоростью");
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(motor_colour);
    this.setTooltip("");
  }
};
Blockly.Blocks['RL_motor_turn_right'] = {
  init: function() {
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("Поворот на право со скоростью");
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(motor_colour);
    this.setTooltip("");
  }
};

Blockly.Blocks['RL_servo_write'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(srv), "ch")
        .appendField("Выставить на угол222");
    this.appendValueInput("degree")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(" градусов");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(75);
 this.setTooltip("Set the servomotor target angle.");
 this.setHelpUrl("");
  }
};





}
