var crypto = require('crypto');
var algorithm = 'sha256';
var dictHash = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

/**
 * ENCRIPT TO SHA256_HMAC
 *
 * @param {String} stringToEncrypt
 * @param {String} key
 */
function hmac(stringToEncrypt, key){
    return crypto.createHmac(algorithm, key).update(stringToEncrypt).digest('hex');
}

/**
 * GENERATE RANDOM STRING
 *
 * @param {Number} length
 * @param {String} chars
 */
function randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
}

/**
 * DO SIGNATURE
 *
 * @param {String} accessKey
 * @param {String} accessSecret
 */
function signature(accessKey, accessSecret){
    var version = 1;
    var nonce = randomString(32, dictHash);
    var unixTime = Math.round(new Date().getTime() / 1000);
    var stringToSign = accessKey + nonce + unixTime;
    var signatureString = hmac(stringToSign, accessSecret);
    return 'Signature ' +
        'access-key="' + accessKey + '", ' +
        'nonce="' + nonce + '", ' +
        'timestamp="' + unixTime + '", ' +
        'version="' + version + '", ' +
        'signature="' + signatureString + '"';
}
module.exports = signature;