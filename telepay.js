var request = require('./core/request');
var services = {};
require("fs").readdirSync(__dirname + "/core/services").forEach(function(file) {
    services[file.replace('\.js', '')] = require("./core/services/" + file);
});

/**
 * TELEPAY
 *
 * @param {String} accessKey
 * @param {String} accessSecret
 * @param {String} environment
 */
function Telepay(accessKey, accessSecret, environment){
    var that = this;
    this.accessKey = accessKey;
    this.accessSecret = new Buffer(accessSecret, 'base64');
    this.environment = environment;
    this.request = function(method, endpoint, data){
        var configRequest = {
            environment: that.environment,
            endpoint: endpoint,
            accessKey: that.accessKey,
            accessSecret: that.accessSecret,
            data: data
        };
        return request[method](configRequest);
    };

    // Add to Telepay all service methods and object with methods
    Object.keys(services).forEach(function(service){
        Object.keys(services[service]).forEach(function(serviceMethod){
            if(!that[service]) that[service] = {};
            if(typeof services[service][serviceMethod] === 'object'){
                that[service][serviceMethod] = {};
                Object.keys(services[service][serviceMethod]).forEach(function(serviceMethodKey){
                    that[service][serviceMethod][serviceMethodKey] = services[service][serviceMethod][serviceMethodKey].bind(that);
                });
            }else{
                that[service][serviceMethod] = services[service][serviceMethod].bind(that);
            }
        });
    });
}

module.exports = Telepay;