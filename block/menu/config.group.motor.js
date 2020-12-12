const dirIcon = Vue.prototype.$global.board.board_info.dir;

module.exports = {
  name: 'Моторы',
  icon: `file:///${dirIcon}/static/icons/motors.png`,
  index: 20,
  color: "230",
  blocks: [
    {
      xml :
        `<block type="RL_motor">
           <value name="ch">
             <shadow type="math_number">
               <field name="NUM">50</field>
             </shadow>
           </value>
           <value name="dir">
             <shadow type="math_number">
               <field name="NUM">50</field>
             </shadow>
           </value>
           <value name="speed">
             <shadow type="math_number">
               <field name="NUM">50</field>
             </shadow>
           </value>
         </block>`
      },
      'RL_motor_stop',
      {
          xml :
          `<block type="RL_motor_stop_ch">
    <value name="speed">
        <shadow type="math_number">
            <field name="NUM">50</field>
        </shadow>
    </value>
          </block>`
      },
      {
          xml :
          `<block type="RL_motor_forward">
    <value name="speed">
        <shadow type="math_number">
            <field name="NUM">50</field>
        </shadow>
    </value>
          </block>`
      },
      {
          xml :
          `<block type="RL_motor_backward">
    <value name="speed">
        <shadow type="math_number">
            <field name="NUM">50</field>
        </shadow>
    </value>
          </block>`
      },
      {
          xml :
          `<block type="RL_motor_spin_left">
    <value name="speed">
        <shadow type="math_number">
            <field name="NUM">50</field>
        </shadow>
    </value>
          </block>`
      },
      {
          xml :
          `<block type="RL_motor_spin_right">
    <value name="speed">
        <shadow type="math_number">
            <field name="NUM">50</field>
        </shadow>
    </value>
          </block>`
      },
      {
          xml :
          `<block type="RL_motor_turn_left">
    <value name="speed">
        <shadow type="math_number">
            <field name="NUM">50</field>
        </shadow>
    </value>
          </block>`
      },
      {
          xml :
          `<block type="RL_motor_turn_right">
    <value name="speed">
        <shadow type="math_number">
            <field name="NUM">50</field>
        </shadow>
    </value>
          </block>`
      },



  ]
};
