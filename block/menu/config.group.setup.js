const dirIcon = Vue.prototype.$global.board.board_info.dir;

module.exports = {
  name : 'Сборка',
  icon: `file:///${dirIcon}/static/icons/plug.png`,
  color : '230',
  index : 10,
  blocks: [
    {
      xml:
       `<block type="RL_backpanel_setup">
          <value name="top_left">
            <block type="math_number">
              <field name="NUM">1</field>
            </block>
          </value>
          <value name="top_right">
            <block type="math_number">
              <field name="NUM">2</field>
            </block>
          </value>
          <value name="top_center">
            <block type="math_number">
              <field name="NUM">2</field>
            </block>
          </value>
          <value name="bottom_center">
            <block type="math_number">
              <field name="NUM">2</field>
            </block>
          </value>
          <value name="bottom_left">
            <block type="math_number">
              <field name="NUM">2</field>
            </block>
          </value>
          <value name="bottom_right">
            <block type="math_number">
              <field name="NUM">2</field>
            </block>
          </value>
        </block>`
      },
      
      {
          xml:
          `<block type="RL_frontpanel_setup">
          <value name="left_rev">
            <block type="math_number">
              <field name="NUM">1</field>
            </block>
          </value>
          <value name="right_rev">
            <block type="math_number">
              <field name="NUM">1</field>
            </block>
          </value>
          <value name="top_left">
            <block type="math_number">
              <field name="NUM">1</field>
            </block>
          </value>
          <value name="top_right">
            <block type="math_number">
              <field name="NUM">2</field>
            </block>
          </value>
          <value name="top_center">
            <block type="math_number">
              <field name="NUM">2</field>
            </block>
          </value>
          <value name="bottom_center">
            <block type="math_number">
              <field name="NUM">2</field>
            </block>
          </value>
          <value name="bottom_left">
            <block type="math_number">
              <field name="NUM">2</field>
            </block>
          </value>
          <value name="bottom_right">
            <block type="math_number">
              <field name="NUM">2</field>
            </block>
          </value>
          </block>`
      },
  ]
};
