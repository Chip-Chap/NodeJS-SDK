var request = require('request');
var Q = require('q');
var qs = require('querystring');
var signature = require('./signature');
var urlByEnv = {
    test: 'https://api.telepay.net/test/',
    real: 'https://api.telepay.net/'
};

/**
 * MAKE REQUEST TO TELEPAY
 *
 * @param {Object} requestConfig
 * @param {String} accessKey
 * @param {String} accessSecret
 */
function makeRequest(requestConfig, accessKey, accessSecret){
    var df = Q.defer();
    requestConfig.headers = {
        'X-Signature': signature(accessKey, accessSecret)
    };
    request(requestConfig, function callback(error, response, body) {
        if(error){
            df.reject(error);
        }else if (!error && response.statusCode == 200) {
            try{
                body = JSON.parse(body);
                df.resolve(body);
            }catch(e){
                df.resolve(body);
            }
        }else{
            var body = {};
            try{
                body = JSON.parse(response.body);
            }catch(e){}
            var e = new Error('Can\'t load');
            e.statusCode = response.statusCode;
            e.body = body;
            df.reject(e);
        }
    });
    return df.promise;
}

/**
 * GET REQUEST
 *
 * @param {Object} details
 * @param {String} details.environment
 * @param {String} details.endpoint
 * @param {String} details.accessKey
 * @param {String} details.accessSecret
 * @param {String} details.data
 */
function get(details){
    var requestConfig = {
        url: urlByEnv[details.environment] + details.endpoint + '?' + qs.stringify(details.data)
    };
    return makeRequest(requestConfig, details.accessKey, details.accessSecret);
}
exports.get = get;

/**
 * POST REQUEST
 *
 * @param {Object} details
 * @param {String} details.environment
 * @param {String} details.endpoint
 * @param {String} details.accessKey
 * @param {String} details.accessSecret
 * @param {String} details.data
 */
function post(details){
    var requestConfig = {
        method: 'POST',
        url: urlByEnv[details.environment] + details.endpoint,
        form: details.data
    };
    return makeRequest(requestConfig, details.accessKey, details.accessSecret);
}
exports.post = post;