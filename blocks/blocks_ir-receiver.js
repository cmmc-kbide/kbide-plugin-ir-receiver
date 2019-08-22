Blockly.Blocks['ky_022_ir_receiver_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("KY-022 IR RECEIVER");
    this.appendValueInput("KY_022_IR_RECEIVER_PIN")
        .setCheck("Number")
        .appendField("PIN");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};