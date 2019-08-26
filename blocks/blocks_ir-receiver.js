module.exports = function(Blockly) {
  Blockly.Blocks["ky_022_ir_receiver_block"] = {
    init: function() {
      this.appendDummyInput().appendField("KY-022 IR RECEIVER");
      this.appendDummyInput()
        .appendField("PIN")
        .appendField(new Blockly.FieldTextInput("0"), "KY_022_IR_RECEIVER_PIN");
      this.appendDummyInput()
        .appendField("SET TO")
        .appendField(
          new Blockly.FieldVariable("KY_022_IR_RECEIVER_VALUE"),
          "KY_022_IR_RECEIVER_VALUE"
        );
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
};
