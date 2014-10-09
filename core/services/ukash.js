var baseUrl = 'services/v1/ukash/';

/**
 * CREATE A UKASH TRANSACTION
 *
 * @param {Object} transactionDetails
 * @param {String} transactionDetails.merchant_id
 * @param {String} transactionDetails.amount
 * @param {String} transactionDetails.currency
 * @param {String} transactionDetails.transaction_id
 */
function create(transactionDetails){
    return this.request('post', baseUrl + 'generate/', transactionDetails);
}
exports.create = create;

/**
 * CREATE A UKASH REDEMPTION
 *
 * @param {Object} transactionDetails
 * @param {String} transactionDetails.merchant_id
 * @param {String} transactionDetails.currency
 * @param {String} transactionDetails.transaction_id
 * @param {String} transactionDetails.voucher_value
 * @param {String} transactionDetails.voucher_number
 * @param {String} transactionDetails.transaction_amount
 */
function createRedemption(transactionDetails){
    return this.request('post', baseUrl + 'redemption/', transactionDetails);
}

/**
 * STATUS OF UKASH REDEMPTION
 *
 * @param {Object} transactionDetails
 * @param {String} transactionDetails.merchant_id
 * @param {String} transactionDetails.currency
 * @param {String} transactionDetails.transaction_id
 * @param {String} transactionDetails.voucher_value
 * @param {String} transactionDetails.voucher_number
 * @param {String} transactionDetails.transaction_amount
 */
function statusRedemption(transactionDetails){
    return this.request('get', baseUrl + 'redemption/status/', transactionDetails);
}
exports.redemption = function(){
    return {
        create: createRedemption.bind(this),
        status: statusRedemption.bind(this)
    }
};

/**
 * CREATE A UKASH REDIRECT
 *
 * @param {Object} transactionDetails
 * @param {String} transactionDetails.amount
 * @param {String} transactionDetails.transaction_id
 * @param {String} transactionDetails.consumer_id
 * @param {String} transactionDetails.currency
 * @param {String} transactionDetails.url_succes
 * @param {String} transactionDetails.url_fail
 * @param {String} transactionDetails.url_notification
 */
function createRedirect(transactionDetails){
    return this.request('post', baseUrl + 'redirect/request/', transactionDetails);
}

/**
 * GET STATUS OF UKASH REDIRECT
 *
 * @param {String} utid
 */
function statusRedirect(utid){
    return this.request('get', baseUrl + 'redirect/status/', {
        utid: utid
    });
}
exports.redirect = function(){
    return {
        create: createRedirect.bind(this),
        status: statusRedirect.bind(this)
    }
};