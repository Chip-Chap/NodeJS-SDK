var baseUrl = 'services/v1/toditocash/payservices/';

/**
 * GET STATUS OF A TODITOCASH TRANSACTION
 *
 * @param {Object} transactionDetails
 * @param {String} transactionDetails.transaction_id
 * @param {String} transactionDetails.tc_number_transaction
 * @param {String} transactionDetails.date
 * @param {String} transactionDetails.hour
 * @param {String} transactionDetails.card_number
 * @param {String} transactionDetails.amount
 */
function status(transactionDetails){
    return this.request('get', baseUrl + 'status', transactionDetails);
}
exports.status = status;

/**
 * CREATE A TODITOCASH TRANSACTION
 *
 * @param {Object} transactionDetails
 * @param {String} transactionDetails.transaction_id
 * @param {String} transactionDetails.date YYYY-MM-DD
 * @param {String} transactionDetails.hour HH:MM:SS
 * @param {String} transactionDetails.card_number
 * @param {String} transactionDetails.nip
 * @param {String} transactionDetails.amount
 * @param {String} transactionDetails.concept
 * @param {String} transactionDetails.currency
 */
function create(transactionDetails){
    return this.request('post', baseUrl + 'request', transactionDetails);
}
exports.send = create;