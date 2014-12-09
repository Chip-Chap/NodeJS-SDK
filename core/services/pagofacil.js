var baseUrl = 'services/v1/pagofacil/payment/';

/**
 * GET STATUS OF A PAGOFACIL TRANSACTION
 *
 * @param {String} transactionId
 */
function status(transactionId){
    return this.request('get', baseUrl + 'status', {
        transaction_id: transactionId
    });
}
exports.status = status;

/**
 * CREATE A PAGOFACIL TRANSACTION
 *
 * @param {Object} transactionDetails
 * @param {String} transactionDetails.name
 * @param {String} transactionDetails.surname
 * @param {String} transactionDetails.card_number
 * @param {String} transactionDetails.cvv
 * @param {String} transactionDetails.cp
 * @param {String} transactionDetails.expiration_month
 * @param {String} transactionDetails.expiration_year
 * @param {String} transactionDetails.amount
 * @param {String} transactionDetails.mail
 * @param {String} transactionDetails.phone
 * @param {String} transactionDetails.mobile_phone
 * @param {String} transactionDetails.street_number
 * @param {String} transactionDetails.colony
 * @param {String} transactionDetails.city
 * @param {String} transactionDetails.quarter
 * @param {String} transactionDetails.country
 * @param {String} transactionDetails.transaction_id
 */
function create(transactionDetails){
    return this.request('post', baseUrl + 'transaction', transactionDetails);
}
exports.send = create;