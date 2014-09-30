# TELEPAY

Telepay it's a platform for exchange money between different alternative pay methods. 

## Install

```sh
$ npm i --save telepay
```

## Supported pay methods
- PagoFacil
- Paynet Reference
- Todito Cash

## Usage

```js
var Telepay = require('./telepay');
var accessKey = 'yourkey';
var accessSecret = 'yoursecret';
var environment = 'test'; // test|real
var telepay = new Telepay(accessKey, accessSecret, environment);

// SAMPLE
telepay.sample.status()
    .then(function(response){
        console.log(response);
    })
    .fail(function(e){
        console.log(e.statusCode, e.body.code, e.body.message, e.body.data);
    });
    
// PAGOFACIL
var transactionId = 32123;
telepay.pagofacil.status(transactionId)
    .then(function(response){
        console.log(response);
    })
    .fail(function(e){
        console.log(e.statusCode, e.body.code, e.body.message, e.body.data);
    });
```

You can see *example.js* file to see more details and uses.

#### TODO
- Other pay methods
    - PayU
    - SafetyPay
    - uKash

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