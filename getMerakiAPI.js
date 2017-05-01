module.exports = function(RED) {
    function getMerakiAPIkey(config) {
        RED.nodes.createNode(this,config);
        var context = this.context();
        var node = this;
        this.on('input', function(msg) {

        var outMsg = {payload: "A12345678901234567890"};
    
        node.send(outMsg);
        
        });
    }
    RED.nodes.registerType("get Meraki API Key",getMerakiAPIkey);
};
