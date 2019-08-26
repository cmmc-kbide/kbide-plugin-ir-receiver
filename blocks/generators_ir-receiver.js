Blockly.JavaScript["ky_022_ir_receiver_block"] = function(block) {
    var text_ky_022_ir_receiver_pin = block.getFieldValue(
      "KY_022_IR_RECEIVER_PIN"
    );
    var variable_ky_022_ir_receiver_value = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue("KY_022_IR_RECEIVER_VALUE"),
      Blockly.Variables.NAME_TYPE
    );
    // TODO: Assemble JavaScript into code variable.
    var code = `
	#EXTINC
	#include <IRremote.h>

	int KY_022_IR_RECEIVER_PIN = ${text_ky_022_ir_receiver_pin}; // define input pin on Arduino 
	IRrecv irrecv(KY_022_IR_RECEIVER_PIN); 
	decode_results results; // decode_results class is defined in IRremote.h
	#END

	#SETUP
	irrecv.enableIRIn(); // Start the receiver 
	#END

	if (irrecv.decode(&results)) {
			// Serial.println(results.value, HEX); 
			${variable_ky_022_ir_receiver_value} = results.value;
			irrecv.resume(); // Receive the next value 
		}
		delay (100); // small delay to prevent reading errors
    `;
    return code;
  };