const dirIcon = Vue.prototype.$global.board.board_info.dir;

module.exports = {
  name: 'RGB',
  icon: `file:///${dirIcon}/static/icons/rgb-icon.png`,
  index: 80,
  color: "230",
  blocks: [
    {
                    xml:
                        `<block type="set_rgb">
                            <value name="r">
                                <shadow type="math_number">
                                    <field name="NUM">0</field>
                                </shadow>
                            </value>
                            <value name="g">
                                <shadow type="math_number">
                                    <field name="NUM">0</field>
                                </shadow>
                            </value>
                            <value name="b">
                                <shadow type="math_number">
                                    <field name="NUM">0</field>
                                </shadow>
                            </value>
                        </block>`
    },
    'rgb_color',
    'turn_off_rgb',
    'clear_rgb',
    'rgb_red',
    'rgb_green',
    'rgb_blue',
    'rgb_yellow',
    'rgb_pink',
    'rgb_orange',
    'rgb_lightblue',
    'rgb_lightgreen',
    'rgb_white',
  ]
};
