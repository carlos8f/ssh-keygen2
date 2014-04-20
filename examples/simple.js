var keygen = require('../')
  , assert = require('assert')

// generate a temporary keypair and return details
keygen(function (err, keypair) {
  assert.ifError(err);
  console.log(keypair.private);
  console.log(keypair.public);
  console.log(keypair.fingerprint + '\n');
  console.log(keypair.randomart + '\n');
});