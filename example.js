/**
 * EXAMPLE OF METHODS
 * You can see how you can use methods for speak with Telepay
 * Here there are the params that you must use.
 * Are only examples. The key of params are real, the values are as dummy, please fill with your real data.
 */
var Telepay = require('./telepay');
var config = require('./config'); // change dist-config.json to config.json and set your keys
var environment = 'test'; // test|real
var telepay = new Telepay(config.accessKey, config.accessSecret, environment);

// --------------- SAMPLE ---------------

telepay.sample.status()
    .then(function(response){
        console.log(response);
    })
    .fail(function(e){
        console.log(e.statusCode, e.body.code, e.body.message, e.body.data);
    });


/*
// --------------- PAGOFACIL ---------------
// Transaction status
var transactionId = '12345nueva';
telepay.pagofacil.status(transactionId)
    .then(function(response){
        console.log(response);
    })
    .fail(function(e){
        console.log(e.statusCode, e.body.code, e.body.message, e.body.data);
    });
*/

// Create transaction
/*
telepay.pagofacil.create({
        name: 'Paco',
        surname: 'Perez',
        card_number: '4385485952023612',
        cvv: '222',
        expiration_month: '12',
        expiration_year: '14',
        amount: '20',
        mail: 'asdasda@asdasd.es',
        phone: '656545466',
        mobile_phone: '656545466',
        street_number: '12',
        colony: 'qweqweqw',
        cp: '12345',
        city: 'sdadsasdas',
        quarter: 'asdasdasd',
        country: 'asdasdasd',
        transaction_id: '123452ueva'
    })
    .then(function(response){
        console.log(response);
    })
    .fail(function(e){
        console.log(e, e.statusCode, e.body.code, e.body.message, e.body.data);
    });
*/


// --------------- TODITOCASH ---------------
/*
// Create transaction
telepay.toditocash.create({
        transaction_id: '321554test',
        date: '2014-10-27',
        hour: '23:02:10',
        card_number: '4385485952023612',
        nip: '12',
        amount: '10',
        concept: 'a',
        currency: 'MXN'
    })
    .then(function(response){
        console.log(response);
    })
    .fail(function(e){
        console.log(e.statusCode, e.body.code, e.body.message, e.body.data);
    });
*/
/*
// Transaction status
telepay.toditocash.status({
        transaction_id: '321554',
        tc_number_transaction: '',
        date: '2014-09-25',
        hour: '23:02:10',
        card_number: '4385485952023612',
        amount: '10'
    })
    .then(function(response){
        console.log(response);
    })
    .fail(function(e){
        console.log(e.statusCode, e.body.code, e.body.message, e.body.data);
    });
*/

// --------------- PAYNET-REFERENCE ---------------
// Create paynet reference
/*
telepay.paynet.reference.create({
        client_reference: '321554',
        amount: '10',
        description: 'abc'
    })
    .then(function(response){
        console.log(response);
    })
    .fail(function(e){
        console.log(e.statusCode, e.body.code, e.body.message, e.body.data);
    });
*/
/*
// Status transaction
telepay.paynet.reference.status('321554')
    .then(function(response){
        console.log(response);
    })
    .fail(function(e){
        console.log(e.statusCode, e.body.code, e.body.message, e.body.data);
    });
*/
// --------------- PAYNET-PAYMENT ---------------
/*
// Get info of payment
telepay.paynet.payment.info({
        date: '26/10/2014',
        hour: '12:50:50',
        transaction_id: 'abc',
        sku: '123456',
        reference: '123reference'
    })
    .then(function(response){
        console.log(response);
    })
    .fail(function(e){
        console.log(e.statusCode, e.body.code, e.body.message, e.body.data);
    });
*/
/*
// Get status of payment
telepay.paynet.payment.info({
        date: '26/10/2014',
        hour: '12:50:50',
        transaction_id: 'abc',
        sku: '123456',
        reference: '123reference',
        amount: '10'
    })
    .then(function(response){
        console.log(response);
    })
    .fail(function(e){
        console.log(e.statusCode, e.body.code, e.body.message, e.body.data);
    });
*/
/*
// Create a payment transaction
telepay.paynet.payment.transaction({
        date: '26/10/2014',
        hour: '12:50:50',
        transaction_id: 'abc',
        sku: '123456',
        fee: '1',
        reference: '123reference',
        amount: '10',
        dv: '0'
    })
    .then(function(response){
        console.log(response);
    })
    .fail(function(e){
        console.log(e.statusCode, e.body.code, e.body.message, e.body.data);
    });

// --------------- UKASH ---------------
// Create transaction
/*
telepay.ukash.create({
        merchant_id: 'patataShop',
        currency: 'MXN',
        transaction_id: '123qwe321qq',
        amount: '1'
    })
    .then(function(response){
        console.log(response);
    })
    .fail(function(e){
        console.log(e.statusCode, e.body.code, e.body.message, e.body.data);
    });
*/
/*
// Charge
telepay.ukash.redemption.create({
        merchant_id: 'patataShop',
        voucher_number: '6337185389903862419',
        transaction_amount: '1',
        voucher_value: '1',
        currency: 'MXN',
        transaction_id: '1111abacaa'
    })
    .then(function(response){
        console.log(response);
    })
    .fail(function(e){
        console.log(e.statusCode, e.body.code, e.body.message, e.body.data);
    });
*/
/*
// Status of charge
telepay.ukash.redemption.status({
        merchant_id: 'patataShop',
        voucher_number: '6337185389903862419',
        transaction_amount: '1',
        voucher_value: '1',
        currency: 'MXN',
        transaction_id: '1111abacaa'
    })
    .then(function(response){
        console.log(response);
    })
    .fail(function(e){
        console.log(e.statusCode, e.body.code, e.body.message, e.body.data);
    });
*/

// --------------- HALCASH ---------------
/*
// Send
telepay.halcash.send({
        phone_number: '00034000606152121',
        country: 'ESP',
        amount: '1',
        reference: 'Test',
        pin: '7777',
        transaction_id: 'test123'
    })
    .then(function(response){
        console.log(response);
    })
    .fail(function(e){
        console.log(e.statusCode, e.body.code, e.body.message, e.body.data);
    });

// Pay
telepay.halcash.pay({
        phone_number: '00034000606152121',
        country: 'ESP',
        amount: '1',
        reference: 'Test',
        pin: '7777',
        transaction_id: 'test123'
    })
    .then(function(response){
        console.log(response);
    })
    .fail(function(e){
        console.log(e.statusCode, e.body.code, e.body.message, e.body.data);
    });
*/