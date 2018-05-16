Blockly.JavaScript['line_ifttt'] = function(block) {
  var event = Blockly.JavaScript.valueToCode(block, 'line_ifttt_event', Blockly.JavaScript.ORDER_ATOMIC);
  var key = Blockly.JavaScript.valueToCode(block, 'line_ifttt_key', Blockly.JavaScript.ORDER_ATOMIC);
  var v1 = Blockly.JavaScript.valueToCode(block, 'line_ifttt_value1', Blockly.JavaScript.ORDER_ATOMIC);
  var v2 = Blockly.JavaScript.valueToCode(block, 'line_ifttt_value2', Blockly.JavaScript.ORDER_ATOMIC);
  var v3 = Blockly.JavaScript.valueToCode(block, 'line_ifttt_value3', Blockly.JavaScript.ORDER_ATOMIC);

  var arr = [];
  var code;

  var js = "$.get('https://maker.ifttt.com/trigger/'+";

  if (v1.length > 0) {
    arr.push("'value1='+" + v1);
  }
  if (v2.length > 0) {
    arr.push("'value2='+" + v2);
  }
  if (v3.length > 0) {
    arr.push("'value3='+" + v3);
  }

  switch (arr.length) {
    case 1:
      code = js + event + "+'/with/key/'+" + key + "+'?'+" + arr[0] + ")";
      break;
    case 2:
      code = js + event + "+'/with/key/'+" + key + "+'?'+" + arr[0] + "+'&'+" + arr[1] + ")";
      break;
    case 3:
      code = js + event + "+'/with/key/'+" + key + "+'?'+" + arr[0] + "+'&'+" + arr[1]+ "+'&'+" + arr[2] + ")";
      break;

  }

  return code;
};
