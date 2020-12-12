const dirIcon = Vue.prototype.$global.board.board_info.dir;

module.exports = {
  name : 'Звук',
  icon: `file:///${dirIcon}/static/icons/music.png`,
  color : '230',
  index : 60,
  blocks: [
    'RL_buzzer_note',
    {
      xml:
       `<block type="RL_play_notes">
          <value name="note">
            <block type="RL_notes">
              <field name="notes">C4,B4,E4</field>
            </block>
          </value>
        </block>`
    },
    'RL_song_mario_underworld',
    'RL_song_jingle_bell',
    'RL_song_cannon_rock',
    'RL_beep',
    {
      xml :
       `<block type="RL_beep_delay">
          <value name="_delay">
            <shadow type="math_number">
              <field name="NUM">500</field>
            </shadow>
          </value>
        </block>`
    },
    'RL_beep_on',
    'RL_beep_off'

  ]
};
