var keygen = require('../')
  , assert = require('assert')

var opts = {
  type: 'rsa',
  bits: 4096,
  comment: 'carlos8f',
  passphrase: 'this will encrypt the private key',
  location: '/tmp/example_rsa_key',
  keep: true, // this will keep the resulting files
  comment: 'optional comment for ssh public key'
};

keygen(opts, function (err, keypair) {
  assert.ifError(err);
  console.log(keypair.private);
  console.log(keypair.public);
  console.log(keypair.fingerprint + '\n');
  console.log(keypair.randomart + '\n');
});