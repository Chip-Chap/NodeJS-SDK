var baseUrl = 'services/v1/paynet/';

/**
 * GET STATUS OF A PAYNET-REFERENCE TRANSACTION
 *
 * @param {String} clientReference
 */
function status(clientReference){
    return this.request('get', baseUrl + 'reference/status', {
        client_reference: clientReference
    });
}

/**
 * CREATE A PAYNET-REFERENCE TRANSACTION
 *
 * @param {Object} transactionDetails
 * @param {String} transactionDetails.client_reference
 * @param {String} transactionDetails.amount
 * @param {String} transactionDetails.description
 */
function create(transactionDetails){
    return this.request('post', baseUrl + 'reference/generate', transactionDetails);
}
exports.reference = {
    status: status,
    create: create
};

/**
 * GET INFO OF A PAYNET-PAYMENT TRANSACTION
 *
 * @param {Object} details
 * @param {String} details.date dd/mm/yyyy
 * @param {String} details.hour hh:mm:ss
 * @param {String} details.transaction_id
 * @param {String} details.sku
 * @param {String} details.reference
 */
function info(details){
    return this.request('post', baseUrl + 'payment/info', details);
}

/**
 * GET STATUS OF A PAYNET-REFERENCE TRANSACTION
 *
 * @param {Object} details
 * @param {String} details.date dd/mm/yyyy
 * @param {String} details.hour hh:mm:ss
 * @param {String} details.transaction_id
 * @param {String} details.sku
 * @param {String} details.reference
 * @param {String} details.amount
 */
function paymentStatus(details){
    return this.request('get', baseUrl + 'payment/status', details);
}

/**
 * GET STATUS OF A PAYNET-REFERENCE TRANSACTION
 *
 * @param {Object} details
 * @param {String} details.date dd/mm/yyyy
 * @param {String} details.hour hh:mm:ss
 * @param {String} details.transaction_id
 * @param {String} details.sku
 * @param {String} details.fee
 * @param {String} details.reference
 * @param {String} details.amount
 * @param {String} details.dv
 */
function transaction(details){
    return this.request('post', baseUrl + 'payment/transaction', details);
}
exports.payment = {
    info: info,
    status: paymentStatus,
    transaction: transaction
};