var baseUrl = 'services/v1/halcash/';

/**
 * PAY TO PHONE NUMBER
 *
 * @param {Object} details
 * @param {String} details.phone_number Phone number to receive the money with 17 digits. E.g.:00034000606152121
 * @param {String} details.country Country.E.g.:MXN,ESP
 * @param {String} details.amount Amount in cents E.g: 100€=10000.
 * @param {String} details.reference Transaction description.
 * @param {String} details.pin Secure pin for the transaction with 4 digits. This number must be communicated to the receiver.
 * @param {String} details.transaction_id Unique transaction id.
 */
function pay(details){
    return this.request('post', baseUrl + 'payment', details);
}
exports.pay = pay;

/**
 * SEND TO A PHONE NUMBER
 *
 * @param {Object} details
 * @param {String} details.phone_number Phone number to receive the money with 17 digits. E.g.:00034000606152121
 * @param {String} details.country Country.E.g.:MXN,ESP
 * @param {String} details.amount Amount in cents E.g: 100€=10000.
 * @param {String} details.reference Transaction description.
 * @param {String} details.pin Secure pin for the transaction with 4 digits. This number must be communicated to the receiver.
 * @param {String} details.transaction_id Unique transaction id.
 */
function send(details){
    return this.request('post', baseUrl + 'send', details);
}
exports.send = send;