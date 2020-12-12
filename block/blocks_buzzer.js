module.exports = function(Blockly){
  'use strict';
  var sensor_colour= Blockly.Msg.SENSOR_HUE;
  var music_colour = Blockly.Msg.MUSIC_HUE;

  Blockly.Blocks["RL_duration_opt"] = [
    [{src: "/static/block_icons/notes/whole.svg",     width: 20, height: 20, alt: "Whole"}, "100"],
    [{src: "/static/block_icons/notes/half.svg",      width: 20, height: 20, alt: "Whole"}, "2000"],
    [{src: "/static/block_icons/notes/quarter.svg",   width: 20, height: 20, alt: "Whole"}, "1000"],
    [{src: "/static/block_icons/notes/eighth.svg",    width: 20, height: 20, alt: "Whole"}, "500"],
    [{src: "/static/block_icons/notes/sixteenth.svg", width: 20, height: 20, alt: "Whole"}, "250"]
  ];


  Blockly.Blocks["RL_buzzer_note"] = {
    init: function() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/static/block_icons/buzzer.png", 30, 30, "*"))
        .appendField("Buzzer Note")
        .appendField(
          new Blockly.FieldDropdown([
            [Blockly.Msg.MUSIC_NOTE_C7, "2093"],
            [Blockly.Msg.MUSIC_NOTE_B6, "1976"],
            [Blockly.Msg.MUSIC_NOTE_BB6, "1865"],
            [Blockly.Msg.MUSIC_NOTE_A6, "1760"],
            [Blockly.Msg.MUSIC_NOTE_GS6, "1661"],
            [Blockly.Msg.MUSIC_NOTE_G6, "1568"],
            [Blockly.Msg.MUSIC_NOTE_FS6, "1480"],
            [Blockly.Msg.MUSIC_NOTE_F6, "1397"],
            [Blockly.Msg.MUSIC_NOTE_E6, "1319"],
            [Blockly.Msg.MUSIC_NOTE_EB6, "1245"],
            [Blockly.Msg.MUSIC_NOTE_D6, "1175"],
            [Blockly.Msg.MUSIC_NOTE_CS6, "1109"],
            [Blockly.Msg.MUSIC_NOTE_C6, "1047"],
            [Blockly.Msg.MUSIC_NOTE_B5, "988"],
            [Blockly.Msg.MUSIC_NOTE_BB5, "932"],
            [Blockly.Msg.MUSIC_NOTE_A5, "880"],
            [Blockly.Msg.MUSIC_NOTE_GS5, "831"],
            [Blockly.Msg.MUSIC_NOTE_G5, "784"],
            [Blockly.Msg.MUSIC_NOTE_FS5, "740"],
            [Blockly.Msg.MUSIC_NOTE_F5, "698"],
            [Blockly.Msg.MUSIC_NOTE_E5, "659"],
            [Blockly.Msg.MUSIC_NOTE_EB5, "622"],
            [Blockly.Msg.MUSIC_NOTE_D5, "587"],
            [Blockly.Msg.MUSIC_NOTE_CS5, "554"],
            [Blockly.Msg.MUSIC_NOTE_C5, "523"],
            [Blockly.Msg.MUSIC_NOTE_B4, "494"],
            [Blockly.Msg.MUSIC_NOTE_BB4, "466"],
            [Blockly.Msg.MUSIC_NOTE_A4, "440"],
            [Blockly.Msg.MUSIC_NOTE_GS4, "415"],
            [Blockly.Msg.MUSIC_NOTE_G4, "392"],
            [Blockly.Msg.MUSIC_NOTE_FS4, "370"],
            [Blockly.Msg.MUSIC_NOTE_F4, "349"],
            [Blockly.Msg.MUSIC_NOTE_E4, "330"],
            [Blockly.Msg.MUSIC_NOTE_EB4, "311"],
            [Blockly.Msg.MUSIC_NOTE_D4, "294"],
            [Blockly.Msg.MUSIC_NOTE_CS4, "277"],
            [Blockly.Msg.MUSIC_NOTE_C4, "262"]
          ]),
          "NOTE"
        );
      this.appendDummyInput()
        .appendField(Blockly.Msg.MUSIC_NOTE_DURATION)
        .appendField(
          new Blockly.FieldDropdown(Blockly.Blocks["RL_duration_opt"]),
          "DURATION"
        );
      this.setInputsInline(true);
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setColour(music_colour);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['RL_play_notes'] = {
    init: function() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/static/block_icons/buzzer.png", 30, 30, "*"))
      this.appendValueInput("note")
        .setCheck("std::vector<int>")
        .appendField("play music notes");

      this.appendDummyInput()
        .appendField("duration")
        .appendField(new Blockly.FieldDropdown(Blockly.Blocks["RL_duration_opt"]), 'DURATION');

      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(music_colour);
      this.setTooltip("play music");
      this.setHelpUrl("");
    }
  };

  
  Blockly.Blocks['RL_notes'] = {
    init: function() {
      let f = new Blockly.FieldTextInput("C4,D4,E4");
      f.onMouseDown_ = (e)=>{
        Blockly.music(f.getValue(),function(newNote){
          f.setValue(newNote.join(","));
          f.init();
        });
        return e;
      };
      this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/static/icons/icons8_move_24px.png", 15, 15, "move"))
        .appendField(f, "notes");
      this.setInputsInline(true);
      this.setOutput(true, "std::vector<int>");
      this.setColour(music_colour);
      this.setTooltip("create music notes from B0-DS8");
      this.setHelpUrl("");
    }
  };

  
  Blockly.Blocks['RL_song_mario_underworld'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Mario underworld")
        let f = new Blockly.FieldTextInput("C4,C5,A3,A4,A#3,A#4,SIL,SIL,F3,F4,D3,D4,D#3,D#4,SIL,SIL,F3,F4,D3,D4,D#3,D#4,SIL,SIL,F3,F4,D3,D4,D#3,D#4,SIL,SIL,D#4,C#4,D4,C#4,D#4,D#4,G#3,G3,C#4,C4,F#4,F4,E3,A#4,A4,G#4,D#4,B3,A#3,A3,G#3");
        f.onMouseDown_ = (e) => {
            Blockly.music(f.getValue(), function (newNote) {
                f.setValue(newNote.join(","));
                f.init();
            });
            return e;
        };
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("/static/icons/icons8_move_24px.png", 15, 15, "move"))
            .appendField(f, "notes");
        this.setInputsInline(true);
        this.setOutput(true, "std::vector<int>");
        this.setColour(music_colour);
        this.setTooltip("create music notes from B0-DS8");
        this.setHelpUrl("");
    }
  };
  
Blockly.Blocks['RL_song_jingle_bell'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Jingle Bells")
        let f = new Blockly.FieldTextInput("E5,E5,E5,SIL,E5,E5,E5,SIL,E5,G5,C5,D5,E5,SIL,F5,F5,SIL,F5,F5,SIL,F5,E5,E5,E5,E5,SIL,E5,D5,D5,E5,D5,G5");
        f.onMouseDown_ = (e) => {
            Blockly.music(f.getValue(), function (newNote) {
                f.setValue(newNote.join(","));
                f.init();
            });
            return e;
        };
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("/static/icons/icons8_move_24px.png", 15, 15, "move"))
            .appendField(f, "notes");
        this.setInputsInline(true);
        this.setOutput(true, "std::vector<int>");
        this.setColour(music_colour);
        this.setTooltip("create music notes from B0-DS8");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['RL_song_cannon_rock'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Cannon Rock")
        let f = new Blockly.FieldTextInput("F#4,E4,D4,C#4,B3,A3,B3,C#4,F#4,E4,D4,C#4,B3,A3,B3,C#4,D4,C#4,B3,A3,G3,F#3,G3,A3,D4,F#4,G4,A4,F#4,G4,A4,B3,C#4,D4,E4,F#4,G4,F#4,D4,E4,F#4,F#3,G3,A3,G3,F#3,G3,A3,G3,B3,A3,G3,F#3,E3,F#3,D3,E3,F#3,G3,A3,B3,G3,B3,A3,B3,C#4,D4,A3,B3,C#4,D4,E4,F#4,G4,A4,A4,F#4,G4,A4,F#4,G4,A4,A3,B3,C#4,D4,E4,F#4,G4,F#4,D4,E4,F#4,C#4,A3,A3,C#4,B3,D4,C#4,B3,A3,G3,A3,D3,E3,F#3,G3,A3,B3,G3,B3,A3,B3,C#4,D4,A3,B3,C#4,D4,E4,F#4,G4,A4");

        f.onMouseDown_ = (e) => {
            Blockly.music(f.getValue(), function (newNote) {
                f.setValue(newNote.join(","));
                f.init();
            });
            return e;
        };
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("/static/icons/icons8_move_24px.png", 15, 15, "move"))
            .appendField(f, "notes");
        this.setInputsInline(true);
        this.setOutput(true, "std::vector<int>");
        this.setColour(music_colour);
        this.setTooltip("create music notes from B0-DS8");
        this.setHelpUrl("");
    }
};


  
  Blockly.Blocks['RL_beep'] = {
    init: function(){
      this.appendDummyInput()
        .appendField("Buzzer beep");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(315);
      this.setTooltip("Buzzer beep");
      this.setHelpUrl("");
    }
  };
  
Blockly.Blocks['RL_beep_delay'] = {
  init: function() {
    this.appendValueInput("_delay")
      .setCheck("Number")
      .appendField("Buzzer delay ");
    this.appendDummyInput()
      .appendField("ms.");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(315);
    this.setTooltip("");
  }
};
Blockly.Blocks['RL_beep_on'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Buzzer on");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(315);
 this.setTooltip("Buzzer beep");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['RL_beep_off'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Buzzer off");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(315);
 this.setTooltip("Buzzer beep");
 this.setHelpUrl("");
  }
};

  
}
