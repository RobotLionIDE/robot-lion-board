const dirIcon = Vue.prototype.$global.board.board_info.dir;

module.exports = {
  name: 'Экран',
  color: '230',
  index: 40,
  icon: `file:///${dirIcon}/static/icons/display.png`,
  blocks: [
        "i2c128x64_display_clear",
        "i2c128x64_display_display",
        {
          xml:
           `<block type="i2c128x64_display_print">
              <value name="text">
                <shadow type="basic_string">
                  <field name="VALUE">Hello world!</field>
                </shadow>
              </value>
              <value name="x">
                <shadow type="math_number">
                  <field name="NUM">0</field>
                </shadow>
              </value>
              <value name="y">
                <shadow type="math_number">
                  <field name="NUM">0</field>
                </shadow>
              </value>
            </block>`
        },
        {
          xml:
  `<block type="i2c128x64_display_draw_line">
    <value name="x0">
        <shadow type="math_number">
            <field name="NUM">10</field>
        </shadow>
    </value>
    <value name="y0">
        <shadow type="math_number">
            <field name="NUM">10</field>
        </shadow>
    </value>
    <value name="x1">
        <shadow type="math_number">
            <field name="NUM">100</field>
        </shadow>
    </value>
    <value name="y1">
        <shadow type="math_number">
            <field name="NUM">50</field>
        </shadow>
    </value>
          </block>`
        },
        {
          xml:
  `<block type="i2c128x64_display_draw_rect">
    <value name="x">
        <shadow type="math_number">
            <field name="NUM">10</field>
        </shadow>
    </value>
    <value name="y">
        <shadow type="math_number">
            <field name="NUM">10</field>
        </shadow>
    </value>
    <value name="width">
        <shadow type="math_number">
            <field name="NUM">50</field>
        </shadow>
    </value>
    <value name="height">
        <shadow type="math_number">
            <field name="NUM">30</field>
        </shadow>
    </value>
          </block>`
        },
        {
          xml:
  `<block type="i2c128x64_display_draw_circle">
    <value name="x">
        <shadow type="math_number">
            <field name="NUM">64</field>
        </shadow>
    </value>
    <value name="y">
        <shadow type="math_number">
            <field name="NUM">32</field>
        </shadow>
    </value>
    <value name="r">
        <shadow type="math_number">
            <field name="NUM">20</field>
        </shadow>
    </value>
          </block>`
        },
        {
          xml:
  `<block type="i2c128x64_display_draw_pixel">
    <value name="x">
        <shadow type="math_number">
            <field name="NUM">64</field>
        </shadow>
    </value>
    <value name="y">
        <shadow type="math_number">
            <field name="NUM">32</field>
        </shadow>
    </value>
          </block>`
        },
        "basic_string"
      ]
};
