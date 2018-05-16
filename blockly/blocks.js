Blockly.Blocks['line_ifttt'] = {
  init: function() {
    this.appendValueInput("line_ifttt_event")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("LINE ( IFTTT )")
        .appendField("Event :");
    this.appendValueInput("line_ifttt_key")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Key :");
    this.appendValueInput("line_ifttt_value1")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Value 1 :");
    this.appendValueInput("line_ifttt_value2")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Value 2 :");
    this.appendValueInput("line_ifttt_value3")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Value 3 :");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};