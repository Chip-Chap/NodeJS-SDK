var baseUrl = 'services/v1/paynet/reference/';

/**
 * GET STATUS OF A PAYNET-REFERENCE TRANSACTION
 *
 * @param {String} clientReference
 */
function status(clientReference){
    return this.request('get', baseUrl + 'status', {
        client_reference: clientReference
    });
}
exports.status = status;

/**
 * CREATE A PAYNET-REFERENCE TRANSACTION
 *
 * @param {Object} transactionDetails
 * @param {String} transactionDetails.client_reference
 * @param {String} transactionDetails.amount
 * @param {String} transactionDetails.description
 */
function create(transactionDetails){
    return this.request('post', baseUrl + 'generate', transactionDetails);
}
exports.create = create;