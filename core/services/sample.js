var baseUrl = 'services/v1/sample';

/**
 * TEST API CALL
 */
function status(){
    return this.request('get', baseUrl);
}
exports.status = status;