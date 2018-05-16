Blockly.JavaScript['line_ifttt'] = function(block) {
  var value_line_ifttt_event = Blockly.JavaScript.valueToCode(block, 'line_ifttt_event', Blockly.JavaScript.ORDER_ATOMIC);
  var value_line_ifttt_key = Blockly.JavaScript.valueToCode(block, 'line_ifttt_key', Blockly.JavaScript.ORDER_ATOMIC);
  var value_line_ifttt_value1 = Blockly.JavaScript.valueToCode(block, 'line_ifttt_value1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_line_ifttt_value2 = Blockly.JavaScript.valueToCode(block, 'line_ifttt_value2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_line_ifttt_value3 = Blockly.JavaScript.valueToCode(block, 'line_ifttt_value3', Blockly.JavaScript.ORDER_ATOMIC);
  
  var code = '$.get("https://maker.ifttt.com/trigger/" + value_line_ifttt_event + "/with/key/" + value_line_ifttt_key + "?value=" +value_line_ifttt_value1)';

  return code;
};