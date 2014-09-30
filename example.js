var Telepay = require('./telepay');
var accessKey = 'yourkey';
var accessSecret = 'yoursecret';
var environment = 'test';
//var environment = 'real';
var telepay = new Telepay(accessKey, accessSecret, environment);

// SAMPLE
/*
telepay.sample.status()
    .then(function(response){
        console.log(response);git rebase -i HEAD~2
    })
    .fail(function(e){
        console.log(e.statusCode, e.body.code, e.body.message, e.body.data);
    });

/*
// PAGOFACIL
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
/*
// Create transaction
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
        transaction_id: '12345nueva'
    })
    .then(function(response){
        console.log(response);
    })
    .fail(function(e){
        console.log(e.statusCode, e.body.code, e.body.message, e.body.data);
    });

/*
// TODITOCASH
// Create transaction
telepay.toditocash.create({
        transaction_id: '321554',
        date: '2014-09-25',
        hour: '23:02:10',
        card_number: '4385485952023612',
        nip: '',
        amount: '10',
        concept: '',
        currency: 'MXN'
    })
    .then(function(response){
        console.log(response);
    })
    .fail(function(e){
        console.log(e.statusCode, e.body.code, e.body.message, e.body.data);
    });

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

// PAYNET-REFERENCE
// Create transaction
/*
telepay.paynetReference.create({
        client_reference: '321554',
        amount: '10',
        description: ''
    })
    .then(function(response){
        console.log(response);
    })
    .fail(function(e){
        console.log(e.statusCode, e.body.code, e.body.message, e.body.data);
    });

// Status transaction
telepay.paynetReference.status('321554')
    .then(function(response){
        console.log(response);
    })
    .fail(function(e){
        console.log(e.statusCode, e.body.code, e.body.message, e.body.data);
    });
*/