Blockly.JavaScript['line_ifttt'] = function(block) {
  var event = Blockly.JavaScript.valueToCode(block, 'line_ifttt_event', Blockly.JavaScript.ORDER_ATOMIC);
  var key = Blockly.JavaScript.valueToCode(block, 'line_ifttt_key', Blockly.JavaScript.ORDER_ATOMIC);
  var v1 = Blockly.JavaScript.valueToCode(block, 'line_ifttt_value1', Blockly.JavaScript.ORDER_ATOMIC);
  var v2 = Blockly.JavaScript.valueToCode(block, 'line_ifttt_value2', Blockly.JavaScript.ORDER_ATOMIC);
  var v3 = Blockly.JavaScript.valueToCode(block, 'line_ifttt_value3', Blockly.JavaScript.ORDER_ATOMIC);

  if(v1.length == 0){
  	v1 = "''";
  }
  if(v2.length == 0){
  	v2 = "''";
  }
  if(v3.length == 0){
  	v3 = "''";
  }

  var code = 'line_ifttt(' + event + ',' + key + ',' + v1 + ',' + v2 + ',' + v3 + ');';

  return code;
};


Blockly.JavaScript['line_bot'] = function(block) {
  var token = Blockly.JavaScript.valueToCode(block, 'line_bot_token', Blockly.JavaScript.ORDER_ATOMIC);
  var uid = Blockly.JavaScript.valueToCode(block, 'line_bot_uid', Blockly.JavaScript.ORDER_ATOMIC);
  var msg = Blockly.JavaScript.valueToCode(block, 'line_bot_msg', Blockly.JavaScript.ORDER_ATOMIC);

  if(msg.length == 0){
  	msg = "''";
  }
  var code = 'line_bot(' + token + ',' + uid + ',' + msg + ');';

  return code;
};


