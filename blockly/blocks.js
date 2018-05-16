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
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("http://www.oxxostudio.tw/articles/201803/ifttt-line.html");
  }
};

Blockly.Blocks['line_bot'] = {
  init: function() {
    this.appendValueInput("line_bot_token")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("LINE ( Bot )")
        .appendField("Token :");
    this.appendValueInput("line_bot_uid")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Uid :");
    this.appendValueInput("line_bot_msg")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Message :");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("http://www.oxxostudio.tw/articles/201804/line-bot-apps-script.html");
  }
};