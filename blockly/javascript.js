Blockly.JavaScript['line_ifttt'] = function(block) {
  var value_line_ifttt_event = Blockly.JavaScript.valueToCode(block, 'line_ifttt_event', Blockly.JavaScript.ORDER_ATOMIC);
  var value_line_ifttt_key = Blockly.JavaScript.valueToCode(block, 'line_ifttt_key', Blockly.JavaScript.ORDER_ATOMIC);
  var value_line_ifttt_value1 = Blockly.JavaScript.valueToCode(block, 'line_ifttt_value1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_line_ifttt_value2 = Blockly.JavaScript.valueToCode(block, 'line_ifttt_value2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_line_ifttt_value3 = Blockly.JavaScript.valueToCode(block, 'line_ifttt_value3', Blockly.JavaScript.ORDER_ATOMIC);

  var arr = [];
  var code;

  var event = '$.get("https://maker.ifttt.com/trigger/' + value_line_ifttt_event.replace(/'/g, '');
  var key = '/with/key/' + value_line_ifttt_key.replace(/'/g, '');
  var v1 = value_line_ifttt_value1.replace(/'/g, '');
  var v2 = value_line_ifttt_value2.replace(/'/g, '');
  var v3 = value_line_ifttt_value3.replace(/'/g, '');

  if (v1.length > 0) {
    arr.push('value1=' + v1);
  }
  if (v2.length > 0) {
    arr.push('value2=' + v2);
  }
  if (v3.length > 0) {
    arr.push('value3=' + v3);
  }

  switch (arr.length) {
    case 1:
      code = event + key + '?' + arr[0] + '")';
      break;
    case 2:
      code = event + key + '?' + arr[0] + '&' + arr[1] + '")';
      break;
    case 3:
      code = event + key + '?' + arr[0] + '&' + arr[1] + '&' + arr[2] + '")';
      break;

  }

  return code;
};
