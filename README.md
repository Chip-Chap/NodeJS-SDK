# TELEPAY
Telepay it's a platform for exchange money between different alternative pay methods. 

## Install

```sh
$ npm i --save telepay
```

## Version
0.0.7

## Supported pay methods
This support the next gateways for V1 of Telepay API.

- PagoFacil
- Paynet Reference
- Paynet Payment
- Todito Cash
- uKash Redemption
- uKash Generate
- uKash Redirect

## Usage

```js
var Telepay = require('./telepay');
var config = require('./config'); // change dist-config.json to config.json and set your keys
var environment = 'test'; // test|real
var telepay = new Telepay(config.accessKey, config.accessSecret, environment);

// SAMPLE (Only as example, for check telepay status)
telepay.sample.status()
    .then(function(response){
        console.log(response);
    })
    .fail(function(e){
        console.log(e.statusCode, e.body.code, e.body.message, e.body.data);
    });
    
// PAGOFACIL EXAMPLE (Credit card pay)
telepay.pagofacil.create({
        name: 'Mikel',
        surname: 'Perez',
        card_number: '4385485952023612',
        cvv: '222',
        expiration_month: '12',
        expiration_year: '14',
        amount: '20',
        mail: 'my@email.com',
        phone: '3491558817',
        mobile_phone: '656545466',
        street_number: '12',
        colony: '',
        cp: '12345',
        city: 'Madrid',
        quarter: '',
        country: 'Spain',
        transaction_id: 'randomstring'
    })
    .then(function(response){
        console.log(response);
    })
    .fail(function(e){
        console.log(e, e.statusCode, e.body.code, e.body.message, e.body.data);
    });
```

You can see *example.js* file to see more details and uses.

#### TODO
- Other pay methods
    - PayU
    - SafetyPay
    - Pademobile

#### License

The MIT License (MIT)

Copyright (c) 2014 Coders Brothers

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.